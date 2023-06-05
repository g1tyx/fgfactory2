//---
var TplScreenGame = function(data) {
    //---
    let tabs = [
        { id:'missions', label:'tab_missions', img:'fas fa-dot-circle', },
        { id:'items', label:'tab_items', img:'fas fa-boxes', },
        { id:'scenarii', label:'tab_scenarii', img:'fas fa-th', },
        { id:'options', label:'tab_options', img:'fas fa-cog', },
    ]
    //---
    let html = ''
    //---
    html += '<div class="position-relative border" style="width:100%; max-width:425px; height:100%; max-height:634px;">'
        html += '<div class="position-absolute bg-dark d-flex align-items-center border-bottom border-body" style="top:0; width:100%; height:48px;">'
            html += '<div class="container col-12">'
                html += '<div class="row gx-2 align-items-center">'
                    html += '<div class="col-auto"><img src="logo.png" width="24px" height="24px" class="rounded"></div>'
                    html += '<div class="col"><span class="h6 text-white">' + i18next.t('game_title') + '</span></div>'
                    html += '<div class="col-auto">'
                        html += '<div class="dropdown">'
                            html += '<button type="button" class="btn border-0" data-bs-toggle="dropdown" aria-expanded="false">'
                                html += '<i class="fas fa-info-circle"></i>'
                            html += '</button>'
                            html += '<div class="dropdown-menu">'
                                html += '<div class="px-2 py-1">'
                                    html += '<div class="pb-2 text-center small">'
                                        html += '<span>' + i18next.t('text_love') + '</span>'
                                    html += '</div>'
                                    html += '<div class="row gx-4 align-items-center justify-content-around flex-nowrap">'
                                        html += '<div class="col-auto">'
                                            html += '<a href="https://www.patreon.com/bePatron?u=61283131" target="_blank" data-bs-toggle="tooltip" data-bs-title="' + i18next.t('text_patreon') + '">'
                                                html += '<img src="img/patreon.png" width="24px" height="24px" />'
                                            html += '</a>'
                                        html += '</div>'
                                        html += '<div class="col-auto">'
                                            html += '<a href="https://ko-fi.com/freddecgames" target="_blank" data-bs-toggle="tooltip" data-bs-title="' + i18next.t('text_kofi') + '">'
                                                html += '<img src="img/kofi.png" width="24px" height="24px" />'
                                            html += '</a>'
                                        html += '</div>'
                                        html += '<form class="col-auto" action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank" data-bs-toggle="tooltip" data-bs-title="' + i18next.t('text_paypal') + '">'
                                            html += '<input type="hidden" name="cmd" value="_s-xclick">'
                                            html += '<input type="hidden" name="hosted_button_id" value="7XYD7SJFKQ8M4">'
                                            html += '<button type="submit" class="btn-link bg-transparent p-0 border-0">'
                                                html += '<img src="img/paypal.png" width="24px" height="24px" />'
                                            html += '</button>'
                                        html += '</form>'
                                        html += '<div class="col-auto">'
                                            html += '<a href="https://discord.gg/ZXrggavUpv" target="_blank" data-bs-toggle="tooltip" data-bs-title="' + i18next.t('text_discord') + '">'
                                                html += '<img src="img/discord.png" width="24px" height="24px" />'
                                            html += '</a>'
                                        html += '</div>'
                                    html += '</div>'
                                html += '</div>'
                            html += '</div>'
                        html += '</div>'
                    html += '</div>'
                html += '</div>'
            html += '</div>'
        html += '</div>'
        html += '<div class="position-absolute tab-content" style="top:48px; bottom:48px; width:100%; ">'
            html += '<div class="tab-pane scrollbar fade' + (data.selectedTab == 'missions' ? ' show active' : '') + '" id="missions-tab-pane" role="tabpanel" aria-labelledby="missions-tab" tabindex="0">'
                html += '<div class="container py-3">'
                    html += '<div class="m-1 fs-6">' + i18next.t('word_Missions') + '</div>'
                    html += '<div id="missionContainer" class="row g-1"></div>'
                html += '</div>'
            html += '</div>'
            html += '<div class="tab-pane scrollbar fade' + (data.selectedTab == 'items' ? ' show active' : '') + '" id="items-tab-pane" role="tabpanel" aria-labelledby="items-tab" tabindex="0">'
                html += '<div id="itemContainer" class="container py-3">'
                html += '</div>'
                html += '<div id="machineContainer" class="container py-3">'
                html += '</div>'
                html += '<div id="storerContainer" class="container py-3">'
                html += '</div>'
            html += '</div>'
            html += '<div class="tab-pane scrollbar fade' + (data.selectedTab == 'scenarii' ? ' show active' : '') + '" id="scenarii-tab-pane" role="tabpanel" aria-labelledby="scenarii-tab" tabindex="0">'
                html += '<div class="container py-3">'
                    html += '<div class="m-1 fs-6">' + i18next.t('word_Scenarii') + '</div>'
                    html += '<div class="m-1 text-warning small"><i class="fa-fw fas fa-exclamation-triangle"></i> ' + i18next.t('text_scenarioWarning') + '</div>'
                    html += '<div id="scenariiContainer" class="mt-1 row g-2 justify-content-center">'
                    html += '</div>'
                html += '</div>'
            html += '</div>'
            html += '<div class="tab-pane scrollbar fade' + (data.selectedTab == 'options' ? ' show active' : '') + '" id="options-tab-pane" role="tabpanel" aria-labelledby="options-tab" tabindex="0">'
                html += '<div class="container py-3">'
                    html += '<div class="m-1 fs-6">' + i18next.t('word_Language') + '</div>'
                    html += '<div class="row g-2">'
                        html += '<div class="col-auto">'
                            html += '<button type="button" class="btn btn-sm' + (i18next.language == 'en-US' ? ' border-success' : '') + '" onclick="window.App.changeLocale(\'en-US\')">'
                                html += '<img src="img/en.png" height="24px">'
                            html += '</button>'
                        html += '</div>'
                        html += '<div class="col-auto">'
                            html += '<button type="button" class="btn btn-sm' + (i18next.language == 'fr-FR' ? ' border-success' : '') + '" onclick="window.App.changeLocale(\'fr-FR\')">'
                                html += '<img src="img/fr.png" height="24px">'
                            html += '</button>'
                        html += '</div>'
                    html += '</div>'
                html += '</div>'
                html += '<div class="container py-3">'
                    html += '<div class="m-1 fs-6">' + i18next.t('word_LocalData') + '</div>'
                    html += '<div class="row g-2">'
                        html += '<div class="col-12 d-flex justify-content-center">'
                            html += '<textarea spellcheck="false" rows="3" class="form-control small text-center" style="max-width:512px;" disabled readonly>' + window.App.getLocalData() + '</textarea>'
                        html += '</div>'
                        html += '<div class="col-12">'
                            html += '<div class="row g-2 align-items-center justify-content-center">'
                                html += '<div class="col-4">'
                                    html += '<button type="button" class="w-100 btn btn-sm btn-danger" onclick="window.App.showModal(\'modalWipe\')">'
                                        html += '<span><i class="fas fa-fw fa-skull"></i></span>'
                                        html += '<span class="ms-1">' + i18next.t('btn_wipeSave') + '</span>'
                                    html += '</button>'
                                html += '</div>'
                                html += '<div class="col-4">'
                                    html += '<button type="button" class="w-100 btn btn-sm btn-primary" onclick="window.App.exportSave()">'
                                        html += '<span><i class="fas fa-fw fa-copy"></i></span>'
                                        html += '<span class="ms-1">' + i18next.t('btn_exportSave') + '</span>'
                                    html += '</button>'
                                html += '</div>'
                                html += '<div class="col-4">'
                                    html += '<button type="button" class="w-100 btn btn-sm btn-primary px-0" onclick="window.App.downloadSave()">'
                                        html += '<span><i class="fas fa-fw fa-download"></i></span>'
                                        html += '<span class="ms-1">' + i18next.t('btn_downloadSave') + '</span>'
                                    html += '</button>'
                                html += '</div>'
                            html += '</div>'
                        html += '</div>'
                        html += '<div class="col-12 d-flex">'
                            html += '<textarea spellcheck="false" rows="3" id="importData" class="form-control small text-center" style="max-width:512px;"></textarea>'
                        html += '</div>'
                        html += '<div class="col-4">'
                            html += '<button type="button" class="w-100 btn btn-sm btn-primary" onclick="window.App.importSave()">'
                                html += '<span><i class="fas fa-fw fa-upload"></i></span>'
                                html += '<span class="ms-1">' + i18next.t('btn_importSave') + '</span>'
                            html += '</button>'
                        html += '</div>'
                    html += '</div>'
                html += '</div>'
            html += '</div>'
        html += '</div>'
        html += '<div class="position-absolute bg-dark border-top border-body" style="bottom:0; width:100%; height:48px;">'
            html += '<div class="h-100 nav nav-tabs">'
                tabs.forEach(tab => {
                    html += '<div class="col nav-item">'
                        html += '<button type="button" class="position-relative nav-link p-1' + (data.selectedTab == tab.id ? ' active' : '') + '" data-bs-toggle="tab" data-bs-target="#' + tab.id + '-tab-pane"role="tab" aria-controls="' + tab.id + '-tab-pane" onclick="window.App.doClick(\'selectTab\', { tabId:\'' + tab.id + '\' })">'
                            html += '<div class="text-center"><i class="' + tab.img + '"></i></div>'
                            html += '<div class="text-center small"><span>' + i18next.t(tab.label) + '</span></div>'
                            html += '<div id="tabNotif-' + tab.id + '" class="d-none position-absolute top-0 end-0 m-1 p-1 bg-success rounded-circle"></div>'
                        html += '</button>'
                    html += '</div>'
                })
            html += '</div>'
        html += '</div>'
    html += '</div>'
    html += '<div id="toast-container" class="toast-container position-fixed bottom-0 end-0 p-3">'
        html += TplToastExport()
        html += TplToastImportEmpty()
        html += TplToastImportCorrupted()
    html += '</div>'
    html += TplModalOffline()
    html += TplModalWipe()
    html += TplModalVictory()
    html += '<div id="ModalItem" class="modal fade"></div>'
    //---
    return html
}
//---
class ScreenGame {
    //---
    constructor() {
        //---
        this.selectedTab = 'missions'
        this.selectedItem = null
    }
    //---
    load(data) {
        //---
        if (data.selectedTab) this.selectedTab = data.selectedTab
    }
    //---
    getSaveData() {
        //---
        let savedData = {}
        //---
        savedData.selectedTab = this.selectedTab
        //---
        return savedData
    }
    //---
    init() {
        //---
        let node = document.getElementById('screen')
        node.innerHTML = TplScreenGame(this)
        //---
        this.refreshTabMissions()
        this.refreshTabItems()
        this.refreshTabScenarii()
        //---
        let tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
        let tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
        //---
        let triggerTabList = document.querySelectorAll('[data-bs-toggle="tab"]')
        let tabList = [...triggerTabList].map(tabTriggerEl => new bootstrap.Tab(tabTriggerEl))
    }
    //---
    draw() {
        //---
        let canCompleteCount = 0
        //---
        let elems = window.App.game.elems.filter(elem => elem.type == 'mission' && elem.unlocked)
        elems.forEach(elem => {
            if (window.App.game.canCompleteMission(elem.id)) canCompleteCount += 1
        })
        //---
        let style = ''
        if (canCompleteCount > 0) style = 'position-absolute top-0 end-0 m-1 p-1 bg-success rounded-circle'
        else style = 'd-none'
        //---
        let node = document.getElementById('tabNotif-missions')
        if (node.className != style) node.className = style
        //---
        if (this.selectedTab == 'missions') {
            //---
            let elems = window.App.game.elems.filter(elem => elem.type == 'mission' && elem.unlocked)
            elems.forEach(elem => {
                //---
                if (elem.count < 1) {
                    //---
                    elem.costs.forEach(cost => {
                        //---
                        let style = ''
                        if (window.App.game.getAvailableCount(cost.id) < cost.count) style = 'position-absolute end-0 bottom-0 text-danger lh-1'
                        else style = 'position-absolute end-0 bottom-0 text-white lh-1'
                        //---
                        let node = document.getElementById('missionNeedCount-' + elem.id + '-' + cost.id)
                        if (node.className != style) node.className = style
                    })
                    //---
                    let style = ''
                    if (!window.App.game.canCompleteMission(elem.id)) style = 'btn btn-sm btn-primary disabled'
                    else style = 'btn btn-sm btn-primary'
                    //---
                    let node = document.getElementById('missionBtn-' + elem.id)
                    if (node.className != style) node.className = style
                }
            })
        }
        else if (this.selectedTab == 'items') {
            //---
            let items = window.App.game.elems.filter(elem => elem.unlocked && (elem.type == 'item' || elem.type == 'machine' || elem.type == 'storer'))
            items.forEach(item => {
                //---
                let max = window.App.game.getMax(item.id)
                //---
                let html = formatNumber(item.count)
                //---
                let node = document.getElementById('itemCount-' + item.id)                
                if (node.innerHTML != html) node.innerHTML = html
                //---
                let style = ''
                if (item.count == 0) style = ''
                else if (max > 0 && item.count >= max) style = 'badge text-bg-danger'
                else style = 'text-white'
                if (node.className != style) node.className = style
                //---
                if (item.type == 'machine' || item.type == 'storer') {
                    //---
                    let availableCount = window.App.game.getAvailableCount(item.id)
                    //---
                    let html = ''
                    if (availableCount > 0) html = formatNumber(availableCount)
                    else html = '(' + formatNumber(availableCount) + ')'
                    //---
                    let node = document.getElementById('itemAvailableCount-' + item.id)                
                    if (node.innerHTML != html) node.innerHTML = html
                    //---
                    let style = ''
                    if (availableCount == 0) style = 'ms-1'
                    else if (availableCount > 0) style = 'ms-1 badge text-bg-success'
                    if (node.className != style) node.className = style
                }
                //---
                if (item.lines && item.lines.length > 0) {
                    //---
                    let prod = window.App.game.getProd(item.id)
                    //---
                    html = (prod > 0 ? '+' : '') + formatNumber(prod) + '/s'
                    //---
                    node = document.getElementById('itemProd-' + item.id)                
                    if (node.innerHTML != html) node.innerHTML = html
                    //---
                    style = ''
                    if (prod == 0) style = ''
                    else if (prod < 0) style = 'badge text-bg-danger'
                    else style = 'badge text-bg-success'
                    if (node.className != style) node.className = style
                }
            })
            //---
            if (this.selectedItem && document.getElementById('ModalItem').classList.contains('show')) {
                //---
                let max = window.App.game.getMax(this.selectedItem.id)
                if (max) {
                    //---
                    let html = formatNumber(max)
                    //---
                    let node = document.getElementById('itemModalStorage-' + this.selectedItem.id)                
                    if (node.innerHTML != html) node.innerHTML = html
                }
                //---
                let html = formatNumber(this.selectedItem.count)
                //---
                let node = document.getElementById('itemModalCount-' + this.selectedItem.id)                
                if (node.innerHTML != html) node.innerHTML = html
                //---
                let style = ''
                if (this.selectedItem.count == 0) style = 'small'
                else if (max > 0 && this.selectedItem.count >= max) style = 'badge text-bg-danger'
                else style = 'small text-white'
                if (node.className != style) node.className = style
                //---
                if (this.selectedItem.type == 'machine' || this.selectedItem.type == 'storer') {
                    //---
                    let availableCount = window.App.game.getAvailableCount(this.selectedItem.id)
                    //---
                    let html = ''
                    if (availableCount > 0) html = formatNumber(availableCount)
                    else html = '(' + formatNumber(availableCount) + ')'
                    //---
                    let node = document.getElementById('itemModalAvailableCount-' + this.selectedItem.id)                
                    if (node.innerHTML != html) node.innerHTML = html
                    //---
                    let style = ''
                    if (availableCount == 0) style = 'small ms-1'
                    else if (availableCount > 0) style = 'ms-1 badge text-bg-success'
                    if (node.className != style) node.className = style
                }
                //---
                if (this.selectedItem.lines && this.selectedItem.lines.length > 0) {
                    //---
                    let prod = window.App.game.getProd(this.selectedItem.id)
                    //---
                    html = (prod > 0 ? '+' : '') + formatNumber(prod) + '/s'
                    //---
                    node = document.getElementById('itemModalProd-' + this.selectedItem.id)                
                    if (node.innerHTML != html) node.innerHTML = html
                    //---
                    style = ''
                    if (prod == 0) style = 'small'
                    else if (prod < 0) style = 'badge text-bg-danger'
                    else style = 'badge text-bg-success'
                    if (node.className != style) node.className = style
                }
                //---
                if (this.selectedItem.manualId) {
                    //---
                    let manual = window.App.game.getElem(this.selectedItem.manualId)
                    if (manual.unlocked) {
                        //---
                        style = ''
                        if (!window.App.game.canStartManual(manual.id)) style = 'w-100 btn btn-sm btn-primary text-start disabled'
                        else style = 'w-100 btn btn-sm btn-primary text-start'
                        //---
                        node = document.getElementById('manualBtn-' + manual.id)
                        if (node.className != style) node.className = style
                        //---
                        html = formatTime(manual.remainingSeconds)
                        //---
                        node = document.getElementById('manualRemainingSeconds-' + manual.id)
                        if (node.innerHTML != html) node.innerHTML = html
                        //---
                        let progress = manual.getProgress() + '%'
                        //---
                        node = document.getElementById('manualProgress-' + manual.id)
                        if (node.style.width != progress) node.style.width = progress
                        //---
                        if (manual.inputs) {
                            //---
                            manual.inputs.forEach(input => {
                                //---
                                let inputElem = window.App.game.getElem(input.id)
                                //---
                                let style = ''
                                if (input.count > window.App.game.getAvailableCount(input.id)) style = 'position-absolute end-0 bottom-0 text-danger lh-1'
                                else style = 'position-absolute end-0 bottom-0 text-white lh-1'
                                //---
                                let node = document.getElementById('manualInputCount-' + manual.id + '-' + input.id)
                                if (node.className != style) node.className = style
                            })
                        }
                        //---
                        manual.outputs.forEach(output => {
                            //---
                            let outputElem = window.App.game.getElem(output.id)
                            //---
                            let max = window.App.game.getMax(output.id)
                            //---
                            let style = ''
                            if (max > 0 && outputElem.count >= max) style = 'position-absolute end-0 bottom-0 text-danger lh-1'
                            else style = 'position-absolute end-0 bottom-0 text-white lh-1'
                            //---
                            let node = document.getElementById('manualOutputCount-' + manual.id + '-' + output.id)
                            if (node.className != style) node.className = style
                        })
                    }
                }
                //---
                if (this.selectedItem.lines && this.selectedItem.lines.length > 0) {
                    //---
                    this.selectedItem.lines.forEach(lineId => {
                        //---
                        let line = window.App.game.getElem(lineId)
                        if (line.unlocked) {
                            //---
                            let html = formatNumber(line.count)
                            //---
                            let node = document.getElementById('lineCount-' + line.id)
                            if (node.innerHTML != html) node.innerHTML = html
                            //---
                            let machine = window.App.game.getElem(line.machineId)
                            //---
                            let style = ''
                            if (window.App.game.getAvailableCount(machine.id) < 1) style = 'position-absolute end-0 bottom-0 text-danger lh-1'
                            else style = 'position-absolute end-0 bottom-0 text-white lh-1'
                            //---
                            node = document.getElementById('lineMachineCount-' + line.id)
                            if (node.className != style) node.className = style
                            //---
                            line.inputs.forEach(input => {
                                //---
                                let inputElem = window.App.game.getElem(input.id)
                                //---
                                let style = ''
                                if (input.count > window.App.game.getAvailableCount(input.id)) style = 'position-absolute end-0 bottom-0 text-danger lh-1'
                                else style = 'position-absolute end-0 bottom-0 text-white lh-1'
                                //---
                                let node = document.getElementById('lineInputCount-' + line.id + '-' + input.id)
                                if (node.className != style) node.className = style
                            })
                            //---
                            line.outputs.forEach(output => {
                                //---
                                let outputElem = window.App.game.getElem(output.id)
                                //---
                                let max = window.App.game.getMax(output.id)
                                //---
                                let style = ''
                                if (max > 0 && outputElem.count >= max) style = 'position-absolute end-0 bottom-0 text-danger lh-1'
                                else style = 'position-absolute end-0 bottom-0 text-white lh-1'
                                //---
                                let node = document.getElementById('lineOutputCount-' + line.id + '-' + output.id)
                                if (node.className != style) node.className = style
                            })
                            //---
                            style = ''
                            if (!window.App.game.canRemoveLine(line.id)) style = 'btn btn-sm btn-danger disabled'
                            else style = 'btn btn-sm btn-danger'
                            //---
                            node = document.getElementById('lineBtnRemove-' + lineId)
                            if (node.className != style) node.className = style
                            //---
                            style = ''
                            if (!window.App.game.canAddLine(line.id)) style = 'btn btn-sm btn-primary disabled'
                            else style = 'btn btn-sm btn-primary'
                            //---
                            node = document.getElementById('lineBtnAdd-' + lineId)
                            if (node.className != style) node.className = style
                        }
                    })
                }
                //---
                if (this.selectedItem.storage && this.selectedItem.storage.storerId) {
                    let storer = window.App.game.getElem(this.selectedItem.storage.storerId)
                    if (storer.unlocked) {
                        //---
                        let html = formatNumber(this.selectedItem.storageCount)
                        //---
                        let node = document.getElementById('itemStorageCount-' + this.selectedItem.id)
                        if (node.innerHTML != html) node.innerHTML = html
                        //---
                        let style = ''
                        if (window.App.game.getAvailableCount(storer.id) < 1) style = 'position-absolute end-0 bottom-0 text-danger lh-1'
                        else style = 'position-absolute end-0 bottom-0 text-white lh-1'
                        //---
                        node = document.getElementById('itemStorerCount-' + this.selectedItem.id)
                        if (node.className != style) node.className = style
                        //---
                        style = ''
                        if (!window.App.game.canRemoveStorer(this.selectedItem.id)) style = 'btn btn-sm btn-danger disabled'
                        else style = 'btn btn-sm btn-danger'
                        //---
                        node = document.getElementById('storerBtnRemove-' + this.selectedItem.id)
                        if (node.className != style) node.className = style
                        //---
                        style = ''
                        if (!window.App.game.canAddStorer(this.selectedItem.id)) style = 'btn btn-sm btn-primary disabled'
                        else style = 'btn btn-sm btn-primary'
                        //---
                        node = document.getElementById('storerBtnAdd-' + this.selectedItem.id)
                        if (node.className != style) node.className = style
                    }
                }
            }
        }
    }
    //---
    refreshTabMissions() {
        //---
        let html = ''
        //---
        let elems = window.App.game.elems.filter(elem => elem.type == 'mission' && elem.unlocked)
        elems.forEach(elem => {
            html += '<div class="col-12">'
                html += '<div class="card">'
                    if (elem.count < 1) {
                        html += '<div class="card-header">'
                            html += '<div class="row gx-2 align-items-center">'
                                html += '<div class="col">'
                                    html += '<span>' + i18next.t(elem.label) + '</span>'
                                html += '</div>'
                            html += '</div>'
                        html += '</div>'
                        html += '<div class="card-body">'
                            html += '<div class="mb-2"><span class="text-white">' + i18next.t(elem.desc) + '</span></div>'
                            html += '<div class="mb-2"><span>' + i18next.t('word_Objectives') + '</span></div>'
                            html += '<div class="row gx-2 align-items-center">'
                                elem.costs.forEach(cost => {
                                    let costElem = window.App.game.getElem(cost.id)
                                    html += '<div class="col-auto position-relative small">'
                                        html += '<img src="' + costElem.img + '" width="24px" height="24px">'
                                        html += '<small id="missionNeedCount-' + elem.id + '-' + cost.id + '" class="position-absolute end-0 bottom-0 text-white lh-1">' + formatNumber(cost.count) + '</small>'
                                    html += '</div>'
                                })
                            html += '</div>'
                            html += '<div class="text-end">'
                                html += '<button type="button" id="missionBtn-' + elem.id + '" class="btn btn-primary" onclick="window.App.doClick(\'completeMission\', { missionId:\'' + elem.id + '\' })">'
                                    html += '<i class="fa-fw fas fa-check"></i>'
                                html += '</button>'
                            html += '</div>'
                        html += '</div>'
                    }
                    else {
                        html += '<div class="card-header" data-bs-toggle="collapse" href="#collapse' + elem.id + '" role="button" aria-expanded="false" aria-controls="collapseExample">'
                            html += '<div class="row gx-2 align-items-center">'
                                html += '<div class="col">'
                                    html += '<span>' + i18next.t(elem.label) + '</span>'
                                html += '</div>'
                                html += '<div class="col-auto">'
                                    html += '<i class="text-success fa-fw fas fa-check"></i>'
                                html += '</div>'
                            html += '</div>'
                        html += '</div>'
                        html += '<div id="collapse' + elem.id + '" class="collapse">'
                            html += '<div class="card-body">'
                                html += '<div><span>' + i18next.t(elem.desc) + '</span></div>'
                            html += '</div>'
                        html += '</div>'
                    }
                html += '</div>'
            html += '</div>'
        })
        //---
        let node = document.getElementById('missionContainer')                
        if (node.innerHTML != html) node.innerHTML = html
    }
    //---
    refreshTabItems() {
        //---
        let html = ''
        //---
        html += '<div class="m-1 fs-6">' + i18next.t('word_Items') + '</div>'
        html += '<div class="row g-1">'
            let items = window.App.game.elems.filter(elem => elem.type == 'item' && elem.unlocked)
            items.forEach(item => {
                html += '<div class="col-12">'
                    html += '<button class="w-100 btn text-start" onclick="window.App.doClick(\'showItemModal\', { itemId:\'' + item.id + '\' })">'
                        html += '<div class="row gx-2 align-items-center">'
                            html += '<div class="col-auto"><img src="' + item.img + '" width="24px" height="24px"></div>'
                            html += '<div class="col">' + i18next.t(item.label) + '</div>'
                            if (item.lines && item.lines.length > 0) {
                                let prod = window.App.game.getProd(item.id)
                                html += '<div class="col-auto text-end"><small id="itemProd-' + item.id + '" class="' + (prod == 0 ? '' : (prod < 0 ? 'badge text-bg-danger' : 'text-success')) + '">' + formatNumber(prod) + '/s</small></div>'
                            }
                            html += '<div class="col-3 text-end"><small id="itemCount-' + item.id + '"></small></div>'
                        html += '</div>'
                    html += '</button>'
                html += '</div>'
            })
        html += '</div>'
        //---
        let node = document.getElementById('itemContainer')                
        if (node.innerHTML != html) node.innerHTML = html
        //---
        html = ''
        //---
        items = window.App.game.elems.filter(elem => elem.type == 'machine' && elem.unlocked)
        if (items.length > 0) {
            html += '<div class="m-1 fs-6">' + i18next.t('word_Machines') + '</div>'
            html += '<div class="row g-1">'
                items.forEach(item => {
                    html += '<div class="col-12">'
                        html += '<button class="w-100 btn text-start" onclick="window.App.doClick(\'showItemModal\', { itemId:\'' + item.id + '\' })">'
                            html += '<div class="row gx-2 align-items-center">'
                                html += '<div class="col-auto"><img src="' + item.img + '" width="24px" height="24px"></div>'
                                html += '<div class="col">' + i18next.t(item.label) + '</div>'
                                if (item.lines && item.lines.length > 0) {
                                    let prod = window.App.game.getProd(item.id)
                                    html += '<div class="col-auto text-end"><small id="itemProd-' + item.id + '" class="' + (prod == 0 ? '' : (prod < 0 ? 'text-danger' : 'text-success')) + '">' + formatNumber(prod) + '/s</small></div>'
                                }
                                html += '<div class="col-3 text-end">'
                                    html += '<small id="itemCount-' + item.id + '"></small>'
                                    html += '<small id="itemAvailableCount-' + item.id + '"></small>'
                                html += '</div>'
                            html += '</div>'
                        html += '</button>'
                    html += '</div>'
                })
            html += '</div>'
            //---
            node = document.getElementById('machineContainer')                
            if (node.innerHTML != html) node.innerHTML = html
        }
        else {
            //---
            node = document.getElementById('machineContainer')
        }
        //---
        html = ''
        //---
        items = window.App.game.elems.filter(elem => elem.type == 'storer' && elem.unlocked)
        if (items.length > 0) {
            html += '<div class="m-1 fs-6">' + i18next.t('word_Storers') + '</div>'
            html += '<div class="row g-1">'
            items.forEach(item => {
                html += '<div class="col-12">'
                    html += '<button class="w-100 btn text-start" onclick="window.App.doClick(\'showItemModal\', { itemId:\'' + item.id + '\' })">'
                        html += '<div class="row gx-2 align-items-center">'
                            html += '<div class="col-auto"><img src="' + item.img + '" width="24px" height="24px"></div>'
                            html += '<div class="col">' + i18next.t(item.label) + '</div>'
                            if (item.lines && item.lines.length > 0) {
                                let prod = window.App.game.getProd(item.id)
                                html += '<div class="col-auto text-end"><small id="itemProd-' + item.id + '" class="' + (prod == 0 ? '' : (prod < 0 ? 'text-danger' : 'text-success')) + '">' + formatNumber(prod) + '/s</small></div>'
                            }
                            html += '<div class="col-3 text-end">'
                                html += '<small id="itemCount-' + item.id + '"></small>'
                                html += '<small id="itemAvailableCount-' + item.id + '"></small>'
                            html += '</div>'
                        html += '</div>'
                    html += '</button>'
                html += '</div>'
            })
            html += '</div>'
            //---
            node = document.getElementById('storerContainer')                
            if (node.innerHTML != html) node.innerHTML = html
        }
    }
    //---
    refreshTabScenarii() {
        //---
        let html = ''
        //---
        let scenarii = window.App.game.scenarii
        scenarii.forEach(scenario => {
            html += '<div class="col-12">'
                html += '<button type="button" class="w-100 btn text-start' + (scenario.id == window.App.game.scenario.id ? ' border-success' : '') + '" onclick="window.App.doClick(\'selectScenario\', { scenarioId:\'' + scenario.id + '\' })">'
                    html += '<div class="row g-1 justify-content-center">'
                        html += '<div class="col-12">'
                            html += '<span class="fs-6 text-white">' + i18next.t(scenario.label) + '</span>'
                        html += '</div>'
                        html += '<div class="col-12 small">'
                            html += '<span class="text-normal">' + i18next.t(scenario.desc) + '</span>'
                        html += '</div>'
                        html += '<div class="col-12 small">'
                            if (scenario.victoryDate) {
                                html += '<span class="text-white">'
                                    html += '<img src="img/victory.png" width="12px" height="12px" />'
                                    html += new Date(scenario.victoryDate).toLocaleString()
                                html += '</span>'
                            }
                            else if (scenario.id == window.App.game.scenario.id && scenario.startDate) {
                                html += '<span class="text-normal">'
                                    html += i18next.t('word_StartDate') + ' '
                                    html += '<span class="text-white">' + new Date(scenario.startDate).toLocaleString() + '</span>'
                                html += '</span>'
                            }
                        html += '</div>'
                    html += '</div>'
                html += '</button>'
            html += '</div>'
        })
        //---
        let node = document.getElementById('scenariiContainer')                
        if (node.innerHTML != html) node.innerHTML = html
    }
    //---
    doClick(action, data) {
        //---
        if (action == 'selectTab') this.selectTab(data)
        else if (action == 'showItemModal') this.showItemModal(data)
        //---
        else if (action == 'completeMission') {
            //---
            window.App.game.completeMission(data.missionId)
            //---
            this.refreshTabMissions()
            this.refreshTabItems()
        }
        //---
        else if (action == 'startManual') window.App.game.startManual(data.manualId)
        //---
        else if (action == 'addLine') window.App.game.addLine(data.lineId)
        else if (action == 'removeLine') window.App.game.removeLine(data.lineId)
        //---
        else if (action == 'addStorer') window.App.game.addStorer(data.itemId)
        else if (action == 'removeStorer') window.App.game.removeStorer(data.itemId)
        //---
        else if (action == 'selectScenario') {
            //---
            window.App.game.loadScenario(data.scenarioId)
            window.App.game.scenario.startDate = Date.now()
            //---
            this.refreshTabMissions()
            this.refreshTabItems()
            //---
            this.selectedTab = 'missions'
            //---
            window.App.save()
            //---
            window.location.replace('')
        }
    }
    //---
    selectTab(data) {
        //---
        this.selectedTab = data.tabId
    }
    //---
    showItemModal(data) {
        //---
        let item = window.App.game.elems.find(elem => elem.id == data.itemId)
        this.selectedItem = item
        //---
        let modalElement = document.getElementById('ModalItem')
        //---
        let html = ''
        html += '<div class="modal-dialog">'
            html += '<div class="modal-content">'
                html += '<div class="modal-header text-truncate">'
                    html += '<div class="col-auto pe-2"><img src="' + item.img + '" width="24px" height="24px"></div>'
                    html += '<div class="col text-truncate"><span class="h6 text-white">' + i18next.t(item.label) + '</span></div>'
                    html += '<div class="col-auto">'
                        html += '<button type="button" class="btn p-0 border-0" data-bs-dismiss="modal">'
                           html += '<i class="fas fa-fw fa-times"></i>'
                        html += '</button>'
                    html += '</div>'
                html += '</div>'
                html += '<div class="modal-body">'
                    html += '<div class="row gx-3">'
                        html += '<div class="col-4">'
                             html += '<div class="mb-1">' + i18next.t('word_Count') + '</div>'
                             html += '<div class="d-flex">'
                                html += '<span id="itemModalCount-' + item.id + '"></span>'
                                if (item.type == 'machine' || item.type == 'storer') html += '<span id="itemModalAvailableCount-' + item.id + '"></span>'
                             html += '</div>'
                        html += '</div>'
                        if (item.storage) {
                            html += '<div class="col-4">'
                                html += '<div class="mb-1">' + i18next.t('word_Storage') + '</div>'
                                html += '<div class="d-flex">'
                                    html += '<span id="itemModalStorage-' + item.id + '" class="small text-white"></span>'
                                html += '</div>'
                            html += '</div>'
                        }
                        if (item.lines && item.lines.length > 0) {
                            html += '<div class="col-4">'
                                html += '<div class="mb-1">' + i18next.t('word_Prod') + '</div>'
                                html += '<div class="d-flex">'
                                    html += '<span id="itemModalProd-' + item.id + '" class="small"></span>'
                                html += '</div>'
                            html += '</div>'
                        }
                    html += '</div>'
                html += '</div>'
                if (item.manualId) {
                    let manual = window.App.game.getElem(item.manualId)
                    if (manual.unlocked) {
                        html += '<div class="modal-body">'
                            html += '<div class="mb-1">'
                                 html += '<span>' + i18next.t('word_Manual') + '</span>'
                            html += '</div>'
                            html += '<div class="row g-2">'
                                html += '<div class="col">'
                                    html += '<div class="row g-2 align-items-center">'
                                        manual.outputs.forEach(output => {
                                            let outputElem = window.App.game.getElem(output.id)
                                            html += '<div class="col-auto position-relative small">'
                                                html += '<img src="' + outputElem.img + '" width="24px" height="24px">'
                                                html += '<small id="manualOutputCount-' + manual.id + '-' + output.id + '" class="position-absolute end-0 bottom-0 text-white lh-1">' + formatNumber(output.count) + '</small>'
                                            html += '</div>'
                                        })
                                        if (manual.inputs) {
                                            html += '<div class="col-auto small"><i class="fas fa-fw fa-long-arrow-alt-left"></i></div>'
                                            manual.inputs.forEach(input => {
                                                let inputElem = window.App.game.getElem(input.id)
                                                html += '<div class="col-auto position-relative small">'
                                                    html += '<img src="' + inputElem.img + '" width="24px" height="24px">'
                                                    html += '<small id="manualInputCount-' + manual.id + '-' + input.id + '" class="position-absolute end-0 bottom-0 text-white lh-1">' + formatNumber(input.count) + '</small>'
                                                html += '</div>'
                                            })
                                        }
                                    html += '</div>'
                                html += '</div>'
                                html += '<div class="col-auto">'
                                    html += '<div class="row g-2 align-items-center">'
                                        html += '<div class="col text-end" style="width:60px;">'
                                            html += '<div id="manualRemainingSeconds-' + manual.id + '" class="text-end small">' + formatTime(manual.remainingSeconds) + '</div>'
                                            html += '<div class="progress" style="height:3px;">'
                                                html += '<div id="manualProgress-' + manual.id + '" class="progress-bar bg-success" role="progressbar" style="width:' + manual.getProgress() + '%" aria-valuenow="' + manual.getProgress() + '" aria-valuemin="0" aria-valuemax="100"></div>'
                                            html += '</div>'
                                        html += '</div>'
                                        html += '<div class="col-auto">'
                                            html += '<button type="button" id="manualBtn-' + manual.id + '" class="w-100 btn btn-sm btn-primary text-start" onclick="window.App.doClick(\'startManual\', { manualId:\'' + manual.id + '\' })">'
                                                html += '<i class="fa-fw fas fa-hand-paper"></i>'
                                            html += '</button>'
                                        html += '</div>'
                                    html += '</div>'
                                html += '</div>'
                            html += '</div>'
                        html += '</div>'
                    }
                }
                if (item.lines && item.lines.length > 0) {
                    let unlocked = 0
                    item.lines.forEach(lineId => {
                        let line = window.App.game.getElem(lineId)
                        if (line.unlocked) unlocked += 1
                    })
                    if (unlocked > 0) {
                        html += '<div class="modal-body">'
                            html += '<div class="mb-1">'
                                 html += '<span>' + i18next.t('word_Automation') + '</span>'
                            html += '</div>'
                            html += '<div class="row g-2">'
                                item.lines.forEach(lineId => {
                                    let line = window.App.game.getElem(lineId)
                                    if (line.unlocked) {
                                        let machine = window.App.game.getElem(line.machineId)
                                        html += '<div class="col-12">'
                                            html += '<div class="row g-2">'
                                                html += '<div class="col">'
                                                    html += '<div class="row g-2 align-items-center">'
                                                        html += '<div class="col-auto position-relative small">'
                                                            html += '<img src="' + machine.img + '" width="24px" height="24px">'
                                                            html += '<small id="lineMachineCount-' + line.id + '" class="position-absolute end-0 bottom-0 lh-1 text-white">1</small>'
                                                        html += '</div>'
                                                        html += '<div class="col-auto small">+</div>'
                                                        line.inputs.forEach(input => {
                                                            let inputElem = window.App.game.getElem(input.id)
                                                            html += '<div class="col-auto position-relative small">'
                                                                html += '<img src="' + inputElem.img + '" width="24px" height="24px">'
                                                                html += '<small id="lineInputCount-' + line.id + '-' + input.id + '" class="position-absolute end-0 bottom-0 lh-1 text-white">' + formatNumber(input.count) + '</small>'
                                                            html += '</div>'
                                                        })
                                                        html += '<div class="col-auto small"><i class="fas fa-fw fa-long-arrow-alt-right"></i></div>'
                                                        line.outputs.forEach(output => {
                                                            let outputElem = window.App.game.getElem(output.id)
                                                            html += '<div class="col-auto position-relative small">'
                                                                html += '<img src="' + outputElem.img + '" width="24px" height="24px">'
                                                                html += '<small id="lineOutputCount-' + line.id + '-' + output.id + '" class="position-absolute end-0 bottom-0 text-white lh-1">' + formatNumber(output.count) + '</small>'
                                                            html += '</div>'
                                                        })
                                                    html += '</div>'
                                                html += '</div>'
                                                html += '<div class="col-auto">'
                                                    html += '<div class="row g-2 align-items-center">'
                                                        html += '<div class="col-auto">'
                                                            html += '<button type="button" id="lineBtnRemove-' + lineId + '" class="btn btn-sm btn-danger" onclick="window.App.doClick(\'removeLine\', { lineId:\'' + lineId + '\' })">'
                                                                html += '<i class="fa-fw fas fa-minus-circle"></i>'
                                                            html += '</button>'
                                                        html += '</div>'
                                                        html += '<div class="col small text-end" style="width:35px;"><small>x</small><span id="lineCount-' + line.id + '">' + formatNumber(line.count) + '</span></div>'
                                                        html += '<div class="col-auto">'
                                                            html += '<button type="button" id="lineBtnAdd-' + lineId + '" class="btn btn-sm btn-primary" onclick="window.App.doClick(\'addLine\', { lineId:\'' + lineId + '\' })">'
                                                                html += '<i class="fa-fw fas fa-plus-circle"></i>'
                                                            html += '</button>'
                                                        html += '</div>'
                                                    html += '</div>'
                                                html += '</div>'
                                            html += '</div>'
                                        html += '</div>'
                                    }
                                })
                            html += '</div>'
                        html += '</div>'
                    }
                }
                if (item.storage && item.storage.storerId) {
                    let storer = window.App.game.getElem(item.storage.storerId)
                    if (storer.unlocked) {
                        html += '<div class="modal-body">'
                            html += '<div class="mb-1">'
                                 html += '<span>' + i18next.t('word_Storage') + '</span>'
                            html += '</div>'
                            html += '<div class="row g-2">'
                                html += '<div class="col">'
                                    html += '<div class="row g-2 align-items-center">'
                                        html += '<div class="col-auto position-relative small">'
                                            html += '<img src="' + storer.img + '" width="24px" height="24px">'
                                            html += '<small id="itemStorerCount-' + item.id + '" class="position-absolute end-0 bottom-0 lh-1 text-white">1</small>'
                                        html += '</div>'
                                        html += '<div class="col-auto small"><i class="fas fa-fw fa-long-arrow-alt-right"></i></div>'
                                        html += '<div class="col-auto small">+' + formatNumber(item.storage.base) + '</div>'
                                    html += '</div>'
                                html += '</div>'
                                html += '<div class="col-auto">'
                                    html += '<div class="row g-2 align-items-center">'
                                        html += '<div class="col-auto">'
                                            html += '<button type="button" id="storerBtnRemove-' + item.id + '" class="btn btn-sm btn-danger" onclick="window.App.doClick(\'removeStorer\', { itemId:\'' + item.id + '\' })">'
                                                html += '<i class="fa-fw fas fa-minus-circle"></i>'
                                            html += '</button>'
                                        html += '</div>'
                                        html += '<div class="col small text-end" style="width:35px;"><small>x</small><span id="itemStorageCount-' + item.id + '">' + formatNumber(item.storageCount) + '</span></div>'
                                        html += '<div class="col-auto">'
                                            html += '<button type="button" id="storerBtnAdd-' + item.id + '" class="btn btn-sm btn-primary" onclick="window.App.doClick(\'addStorer\', { itemId:\'' + item.id + '\' })">'
                                                html += '<i class="fa-fw fas fa-plus-circle"></i>'
                                            html += '</button>'
                                        html += '</div>'
                                    html += '</div>'
                                html += '</div>'
                            html += '</div>'
                        html += '</div>'
                    }
                }
            html += '</div>'
        html += '</div>'
        //---
        modalElement.innerHTML = html
        //---
        let itemModal = new bootstrap.Modal(modalElement)
        itemModal.show()
    }
}
