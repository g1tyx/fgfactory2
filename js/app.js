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
        this.fps = 60
        this.rafHandle = null
        this.saveInterval = null
        this.screenSelected = null
        this.resetInProgress = false
        this.lastFrameTimeMs = new Date().getTime()
        this.localStorageName = 'fgfactory2'
        //---
        this.screens = {
            //---
            game: new ScreenGame(),
            error: new ScreenError(),
            loading: new ScreenLoading(),
        }
        //---
        this.game = new Game()
    }    
    //---
    start() {
        //---
        i18next.use(i18nextBrowserLanguageDetector).init({
            //---
            debug: true,
            fallbackLng: 'en-US',
            resources: {
                //---
                'en-US': { translation:en_translations },
                'fr-FR': { translation:{} },
            }
        })
        //---
        document.title = i18next.t('game_title')
        //---
        this.changeScreenTo('loading')
        //---
        try {
            //---
            let loadedData = localStorage.getItem(this.localStorageName)
            if (loadedData && loadedData !== null && loadedData.length % 4 == 0) {
                //---
                let text = LZString.decompressFromBase64(loadedData)
                if (!text) return console.error('Load failed')
                loadedData = JSON.parse(text)
                //---
                if (loadedData.lastFrameTimeMs != null) this.lastFrameTimeMs = loadedData.lastFrameTimeMs
                //---
                if (loadedData.screens) {
                    //---
                    for (let screenId in this.screens) {
                        //---
                        if (loadedData.screens[screenId] && this.screens[screenId].load) this.screens[screenId].load(loadedData.screens[screenId])
                    }
                }
                //---
                if (loadedData.game) this.game.load(loadedData.game)
            }
            else {
                //---
                this.game.loadScenario('tut')
                this.game.scenario.startDate = Date.now()
            }
            //---            
            window.onbeforeunload = () => {
                //---
                if (!this.resetInProgress) this.save()
                //---
                if (this.rafHandle) cancelAnimationFrame(this.rafHandle)
                if (this.saveInterval) clearInterval(this.saveInterval)
            }
            //---
            this.saveInterval = setInterval(() => { window.App.save() }, 30000)
            //---
            setTimeout(() => {
                //---
                this.changeScreenTo('game')
                this.mainloop()
            }, 2000)
        }
        catch (error) {
            //---
            this.changeScreenTo('error', { error:error })
            //---
            console.error(error)
        }
    }
    //---
    mainloop() {
        //---
        window.App.update()
        window.App.rafHandle = requestAnimationFrame(window.App.mainloop)
    }
    //---
    update() {
        //---
        let currentTimeMs = Date.now()
        let deltaMs = currentTimeMs - this.lastFrameTimeMs
        //---
        let stepMs = 1000 / this.fps
        let tickCount = Math.floor(deltaMs / stepMs)
        if (tickCount >= 1) {
            //---
            this.lastFrameTimeMs = currentTimeMs
            //---
            for (let i = 0; i < tickCount; i++) this.game.doTick(stepMs)
            //---
            if (this.game.isVictoryReached()) {
                //---
                this.game.victory = true
                this.showModal('modalVictory')
                //---
                this.game.scenario.victoryDate = Date.now()
            }
            //---
            this.screens['game'].draw()
            //---
            if (deltaMs > 15 * 60 * 1000) {
                //---
                let node = document.getElementById('offlineTime')
                node.innerHTML = formatTime(deltaMs / 1000)
                //---
                this.showModal('modalOffline')
            }
        }
    }
    //---
    save() {
        //---
        let savedData = {
            //---
            lastFrameTimeMs: this.lastFrameTimeMs,
            //---
            screens: {},
            //---
            game: this.game.getSaveData(),
        }
        //---
        for (let screenId in this.screens) {
            if (this.screens[screenId].getSaveData) savedData.screens[screenId] = this.screens[screenId].getSaveData()
        }
        //---
        let text = JSON.stringify(savedData)
        let compressed = LZString.compressToBase64(text)
        localStorage.setItem(this.localStorageName, compressed)
        //---
        let node = document.getElementById('localData')
        if (node) node.innerHTML = compressed
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
    getLocalData() {
        //---
        return localStorage.getItem(this.localStorageName)
    }
    //---
    exportSave() {
        //---
        navigator.clipboard.writeText(this.getLocalData())
        this.showToast('toastExport')
    }
    //---
    downloadSave() {
        //---
        let elem = document.createElement('a')
        elem.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(this.getLocalData()))
        elem.setAttribute('download', this.localStorageName + '_save_' + (new Date).getTime() + '.txt')
        elem.style.display = 'none'
        document.body.appendChild(elem)
        //---
        elem.click()
        //---
        document.body.removeChild(elem)
    }
    //---
    wipeSave() {
        //---
        this.resetInProgress = true
        //---
        localStorage.removeItem(this.localStorageName)
        window.location.replace('')
    }
    //---
    importSave() {
        //---
        let elem = document.getElementById('importData')
        let importData = elem.value.trim()
        //---
        if (!importData) return this.showToast('toastImportEmpty')
        if (importData.length % 4 !== 0) return this.showToast('toastImportCorrupted')
        //---
        this.resetInProgress = true
        //---
        localStorage.setItem(this.localStorageName, importData)
        window.location.replace('')
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
