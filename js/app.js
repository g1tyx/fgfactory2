//---
window.onload = function() {
    //---
    window.App = new App()
    window.App.start()
}
//---
class App {
    //---
    constructor() {
        //---
        this.saveInterval = null
        this.screenSelected = null
        this.localStorageName = 'fgtests'
        //---
        this.screens = {
            //---
            main: new Screen(),
        }
    }    
    //---
    start() {
        //---
        i18next.use(i18nextBrowserLanguageDetector).init({
            //---
            debug: true,
            fallbackLng: 'en-US',
            resources: {
                'en-US': { translation:en_translations },
                'fr-FR': { translation:{} },
            }
        })
        //---
        let loadedData = localStorage.getItem(this.localStorageName)
        if (loadedData && loadedData !== null && loadedData.length % 4 == 0) {
            //---
            let text = LZString.decompressFromBase64(loadedData)
            if (!text) return console.error('Load failed')
            loadedData = JSON.parse(text)
            //---
            if (loadedData.screens) {
                for (let screenId in this.screens) {
                    if (loadedData.screens[screenId] && this.screens[screenId].load) this.screens[screenId].load(loadedData.screens[screenId])
                }
            }
        }
        //---
        /*
        window.onbeforeunload = () => {
            //---
            this.save()
            //---
            if (this.saveInterval) clearInterval(this.saveInterval)
        }
        */
        //---
        document.title = i18next.t('game_title')
        //---
        this.changeScreenTo('main')
    }
    //---
    save() {
        //---
        let savedData = {
            //---
            screens: {},
        }
        //---
        for (let screenId in this.screens) {
            if (this.screens[screenId].getSaveData) savedData.screens[screenId] = this.screens[screenId].getSaveData()
        }
        //---
        let text = JSON.stringify(savedData)
        let compressed = LZString.compressToBase64(text)
        localStorage.setItem(this.localStorageName, compressed)
    }
    //---
    changeScreenTo(screenId, data=null) {
        //---
        if (this.screens[screenId].init) {
            //---
            this.screens[screenId].init(data)
            this.screenSelected = screenId
        }
    }
    //---
    showToast(toastElementId) {
        //---
        let elem = document.getElementById(toastElementId)
        let toast = new bootstrap.Toast(elem)
        toast.show()
    }
    //---
    showModal(modalElementId) {
        //---
        let elem = document.getElementById(modalElementId)
        let modal = new bootstrap.Modal(elem)
        modal.show()
    }
    //---
    doClick(action, data) { this.screens[this.screenSelected].doClick(action, data) }
}
