//---
var TplScreenGame = function(data) {
    //---
    let tabs = [
        { id:'missions', label:'tab_missions', img:'fas fa-dot-circle', },
        { id:'items', label:'tab_items', img:'fas fa-boxes', },
        { id:'scenarios', label:'tab_scenarii', img:'fas fa-th', },
        { id:'options', label:'tab_options', img:'fas fa-cog', },
    ]
    //---
    let html = ''
    //---
    html += '<div class="position-relative w-100 h-100">'
        html += '<div class="position-absolute" style="top:0; width:100%; height:48px;">'
            html += '<div class="h-100 container col-12 bg-light border-bottom border-dark d-flex align-items-center">'
                html += '<div class="flex-fill row gx-2 align-items-center">'
                    html += '<div class="col-auto"><img src="logo.png" width="24px" height="24px" class="rounded"></div>'
                    html += '<div class="col"><span class="h6 text-white">' + i18next.t('game_title') + '</span></div>'
                    html += '<div class="col-auto">'
                        html += '<div class="dropdown">'
                            html += '<button type="button" class="btn btn-link" data-bs-toggle="dropdown" aria-expanded="false">'
                                html += '<i class="fas fa-info-circle"></i>'
                            html += '</button>'
                            html += '<div class="dropdown-menu">'
                                html += '<div class="px-2 py-1 text-center small">'
                                    html += '<span>' + i18next.t('text_iconsBy') + '</span>'
                                    html += ' <a href="https://icons8.com/" target="_blank">Icons8</a>'
                                html += '</div>'
                                html += '<div class="px-2 py-1 text-center small">'
                                    html += '<span>' + i18next.t('text_love') + '</span>'
                                html += '</div>'
                                html += '<div class="px-2 py-1">'
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
        html += '<div class="position-absolute tab-content" style="top:48px; bottom:58px; width:100%; ">'
            html += '<div class="container px-0 bg-dark tab-pane scrollbar fade' + (data.selectedTab == 'missions' ? ' show active' : '') + '" id="missions-tab-pane" role="tabpanel" aria-labelledby="missions-tab" tabindex="0">'
                html += '<div id="missionContainer" class="container py-2"></div>'
                html += '<div id="techContainer" class="container py-2"></div>'
            html += '</div>'
            html += '<div class="container px-0 bg-dark tab-pane scrollbar fade' + (data.selectedTab == 'items' ? ' show active' : '') + '" id="items-tab-pane" role="tabpanel" aria-labelledby="items-tab" tabindex="0">'
                html += '<div id="machineContainer" class="container py-2"></div>'
                html += '<div id="storerContainer" class="container py-2"></div>'
                html += '<div id="itemContainer" class="container py-2"></div>'
            html += '</div>'
            html += '<div class="container px-0 bg-dark tab-pane scrollbar fade' + (data.selectedTab == 'scenarios' ? ' show active' : '') + '" id="scenarios-tab-pane" role="tabpanel" aria-labelledby="scenarios-tab" tabindex="0">'
                html += '<div class="container py-2">'
                    html += '<div class="h6">' + i18next.t('word_Scenarii') + '</div>'
                    html += '<div class="text-warning small mb-2"><i class="fa-fw fas fa-exclamation-triangle"></i> ' + i18next.t('text_scenarioWarning') + '</div>'
                    html += '<div id="scenariiContainer" class="row g-2"></div>'
                html += '</div>'
            html += '</div>'
            html += '<div class="container px-0 bg-dark tab-pane scrollbar fade' + (data.selectedTab == 'options' ? ' show active' : '') + '" id="options-tab-pane" role="tabpanel" aria-labelledby="options-tab" tabindex="0">'
                html += '<div class="container py-2">'
                    html += '<div class="h6">' + i18next.t('word_Language') + '</div>'
                    html += '<div class="row g-2">'
                    html += '<div class="col-auto">'
                        html += '<button type="button" class="btn btn-light' + (i18next.language == 'zh-CS' ? ' border-warning' : '') + '" onclick="window.App.changeLocale(\'zh-CS\')">'
                            html += '<img src="img/zh.png" height="24px">'
                        html += '</button>'
                    html += '</div>'
                        html += '<div class="col-auto">'
                            html += '<button type="button" class="btn btn-light' + (i18next.language == 'en-US' ? ' border-warning' : '') + '" onclick="window.App.changeLocale(\'en-US\')">'
                                html += '<img src="img/en.png" height="24px">'
                            html += '</button>'
                        html += '</div>'
                        html += '<div class="col-auto">'
                            html += '<button type="button" class="btn btn-light' + (i18next.language == 'fr-FR' ? ' border-warning' : '') + '" onclick="window.App.changeLocale(\'fr-FR\')">'
                                html += '<img src="img/fr.png" height="24px">'
                            html += '</button>'
                        html += '</div>'
                    html += '</div>'
                html += '</div>'
                html += '<div class="container py-2">'
                    html += '<div class="h6">' + i18next.t('word_LocalData') + '</div>'
                    html += '<div class="row g-2">'
                        html += '<div class="col-12 col-md-6">'
                            html += '<div class="card card-body">'
                                html += '<div class="mb-2 d-flex justify-content-center">'
                                    html += '<textarea spellcheck="false" rows="3" class="w-100 form-control" disabled readonly>' + window.App.getLocalData() + '</textarea>'
                                html += '</div>'
                                html += '<div class="row g-2 align-items-center justify-content-center">'
                                    html += '<div class="col-4">'
                                        html += '<button type="button" class="w-100 btn btn-danger" onclick="window.App.showModal(\'modalWipe\')">'
                                            html += '<span><i class="fas fa-fw fa-skull"></i></span>'
                                            html += '<span class="ms-1">' + i18next.t('btn_wipeSave') + '</span>'
                                        html += '</button>'
                                    html += '</div>'
                                    html += '<div class="col-4">'
                                        html += '<button type="button" class="w-100 btn btn-warning" onclick="window.App.exportSave()">'
                                            html += '<span><i class="fas fa-fw fa-copy"></i></span>'
                                            html += '<span class="ms-1">' + i18next.t('btn_exportSave') + '</span>'
                                        html += '</button>'
                                    html += '</div>'
                                    html += '<div class="col-4">'
                                        html += '<button type="button" class="w-100 btn btn-warning" onclick="window.App.downloadSave()">'
                                            html += '<span><i class="fas fa-fw fa-download"></i></span>'
                                            html += '<span class="ms-1">' + i18next.t('btn_downloadSave') + '</span>'
                                        html += '</button>'
                                    html += '</div>'
                                html += '</div>'
                            html += '</div>'
                        html += '</div>'
                        html += '<div class="col-12 col-md-6">'
                            html += '<div class="card card-body">'
                                html += '<div class="mb-2 d-flex">'
                                    html += '<textarea spellcheck="false" rows="3" id="importData" class="w-100 form-control"></textarea>'
                                html += '</div>'
                                html += '<div class="col-4 ms-auto">'
                                    html += '<button type="button" class="w-100 btn btn-warning" onclick="window.App.importSave()">'
                                        html += '<span><i class="fas fa-fw fa-upload"></i></span>'
                                        html += '<span class="ms-1">' + i18next.t('btn_importSave') + '</span>'
                                    html += '</button>'
                                html += '</div>'
                            html += '</div>'
                        html += '</div>'
                    html += '</div>'
                html += '</div>'
            html += '</div>'
        html += '</div>'
        html += '<div class="position-absolute" style="bottom:0; width:100%; height:58px;">'
            html += '<div class="h-100 container px-0 bg-light border-top border-dark">'
                html += '<div class="h-100 nav nav-tabs">'
                    tabs.forEach(tab => {
                        html += '<div class="col col-md-2 col-lg-1 nav-item">'
                            html += '<button type="button" class="position-relative nav-link' + (data.selectedTab == tab.id ? ' active' : '') + '" data-bs-toggle="tab" data-bs-target="#' + tab.id + '-tab-pane"role="tab" aria-controls="' + tab.id + '-tab-pane" onclick="window.App.doClick(\'selectTab\', { tabId:\'' + tab.id + '\' })">'
                                html += '<div class="text-center"><i class="fs-6 ' + tab.img + '"></i></div>'
                                html += '<div class="text-center small"><span>' + i18next.t(tab.label) + '</span></div>'
                            html += '</button>'
                        html += '</div>'
                    })
                html += '</div>'
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
    //---
    return html
}
//---
class ScreenGame {
    //---
    constructor() {
        //---
        this.selectedTab = 'missions'
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
        let triggerTabList = document.querySelectorAll('[data-bs-toggle="tab"]')
        let tabList = [...triggerTabList].map(tabTriggerEl => new bootstrap.Tab(tabTriggerEl))
    }
    //---
    draw() {
        //---
        let drawLine = function(line) {
            //---
            if (line.inputs) {
                //---
                line.inputs.forEach(input => {
                    //---
                    let inputElem = window.App.game.getElem(input.id)
                    //---
                    let node = document.getElementById('recipeInputCountValue-' + line.id + '-' + input.id)
                    //---
                    let html = formatNumber(input.count)
                    if (node.innerHTML != html) node.innerHTML = html
                    //---
                    let style = 'badge d-flex align-items-center justify-content-between'
                    if (input.count > window.App.game.getAvailableCount(input.id)) style += ' text-bg-danger'
                    else style += ' text-bg-light'
                    //---
                    node = document.getElementById('recipeInputCount-' + line.id + '-' + input.id)
                    if (node.className != style) node.className = style
                })
                //---
                let outputElem = window.App.game.getElem(line.output.id)
                //---
                let node = document.getElementById('recipeOutputCountValue-' + line.id + '-' + line.output.id)
                //---
                let html = formatNumber(line.output.count)
                if (node.innerHTML != html) node.innerHTML = html
            }
        }
        //---
        if (this.selectedTab == 'missions') {
            //---
            let elems = window.App.game.elems.filter(elem => (elem.type == 'mission' || elem.type == 'tech') && elem.unlocked)
            elems.forEach(elem => {
                //---
                if (elem.count < 1) {
                    //---
                    elem.costs.forEach(cost => {
                        //---
                        let style = 'badge d-flex align-items-center justify-content-between'
                        if (window.App.game.getAvailableCount(cost.id) < cost.count) style += ' text-bg-danger'
                        else style += ' text-bg-light'
                        //---
                        let node = document.getElementById('missionNeedCount-' + elem.id + '-' + cost.id)
                        if (node.className != style) node.className = style
                    })
                    //---
                    let style = 'btn btn-warning'
                    if (!window.App.game.canCompleteMission(elem.id)) style += ' disabled'
                    //---
                    let node = document.getElementById('missionBtn-' + elem.id)
                    if (node.className != style) node.className = style
                }
            })
        }
        else if (this.selectedTab == 'items') {
            //---
            let items = window.App.game.elems.filter(elem => elem.id != 'machineManual' && elem.unlocked && (elem.type == 'item' || elem.type == 'machine' || elem.type == 'storer'))
            items.forEach(item => {
                //---
                let html = '', style = '', node
                //---
                if (item.prod > 0) html = '+' + formatNumber(item.prod) + ' <small class="opacity-50">/s</small>'
                else if (item.prod <= 0) html = formatNumber(item.prod) + ' <small class="opacity-50">/s</small>'
                node = document.getElementById('itemProd-' + item.id)
                if (node.innerHTML != html) node.innerHTML = html
                //---
                style = 'w-100 badge text-end'
                if (item.prod > 0) style += ' text-bg-success'
                else if (item.prod < 0) style += ' text-bg-danger'
                else style += ' text-normal'
                if (node.className != style) node.className = style
                //---
                html = formatNumber(item.count, 2)
                node = document.getElementById('itemCount-' + item.id)
                if (node.innerHTML != html) node.innerHTML = html
                //---
                let max = window.App.game.getMax(item.id)
                style = 'w-100 badge text-end'
                if (max > 0 && item.count >= max) style += ' text-bg-danger'
                else if (item.count > 0) style += ' text-bg-dark'
                else style += ' text-bg-dark text-normal'
                if (node.className != style) node.className = style
                //---
                if (item.type == 'machine' || item.type == 'storer') {
                    //---
                    let node = document.getElementById('itemAvailableCount-' + item.id)
                    let count = window.App.game.getAvailableCount(item.id)
                    //---
                    html = formatNumber(count, 2)
                    if (node.innerHTML != html) node.innerHTML = html
                    //---
                    style = 'w-100 badge text-end'
                    if (count > 0) style += ' text-bg-success'
                    else style += ' text-bg-dark text-normal'
                    if (node.className != style) node.className = style
                }
                //---
                if (item.manualId) {
                    //---
                    let manual = window.App.game.getElem(item.manualId)
                    if (manual.unlocked) {
                        //---
                        style = 'btn btn-warning'
                        if (!window.App.game.canStartManual(manual.id)) style += ' disabled'
                        node = document.getElementById('manualStartBtn-' + manual.id)
                        if (node.className != style) node.className = style
                        //---
                        style = 'btn btn-danger'
                        if (!window.App.game.canStopManual(manual.id)) style += ' disabled'
                        node = document.getElementById('manualStopBtn-' + manual.id)
                        if (node.className != style) node.className = style
                        //---
                        drawLine(manual)
                    }
                }
                //---
                if (item.lines && item.lines.length > 0) {
                    let unlocked = 0
                    item.lines.forEach(lineId => {
                        let line = window.App.game.getElem(lineId)
                        if (line.unlocked) unlocked += 1
                    })
                    if (unlocked > 0) {
                        //---
                        html = formatNumber(item.rawConsum) + ' <small class="opacity-50">/s</small>'
                        node = document.getElementById('itemRawConsum-' + item.id)
                        if (node.innerHTML != html) node.innerHTML = html
                        //---
                        html = formatNumber(item.rawProd) + ' <small class="opacity-50">/s</small>'
                        node = document.getElementById('itemRawProd-' + item.id)
                        if (node.innerHTML != html) node.innerHTML = html
                        //---
                        item.lines.forEach(lineId => {
                            //---
                            let line = window.App.game.getElem(lineId)
                            if (line.unlocked) {
                                //---
                                html = formatNumber(line.count)
                                node = document.getElementById('lineCount-' + line.id)
                                if (node.innerHTML != html) node.innerHTML = html
                                style = ''
                                if (line.count > 0) style += 'text-white'
                                if (node.className != style) node.className = style
                                //---
                                style = 'btn btn-danger'
                                if (!window.App.game.canRemoveLine(line.id)) style += ' disabled'
                                node = document.getElementById('lineRemoveBtn-' + line.id)
                                if (node.className != style) node.className = style
                                //---
                                style = 'btn btn-warning'
                                if (!window.App.game.canAddLine(line.id)) style += ' disabled'
                                node = document.getElementById('lineAddBtn-' + line.id)
                                if (node.className != style) node.className = style
                                //---
                                drawLine(line)
                            }
                        })
                    }
                }
                //---
                if (item.storage) {
                    //---
                    html = formatNumber(window.App.game.getMax(item.id))
                    node = document.getElementById('itemMax-' + item.id)
                    if (node.innerHTML != html) node.innerHTML = html
                    //---
                    if (item.type == 'machine' || item.type == 'storer') {
                        //---
                        html = formatNumber(window.App.game.getUsedCount(item.id))
                        node = document.getElementById('itemUsedCount-' + item.id)
                        if (node.innerHTML != html) node.innerHTML = html
                    }
                    //---
                    if (item.storage.storerId) {
                        let storer = window.App.game.getElem(item.storage.storerId)
                        if (storer.unlocked) {
                            //---
                            html = formatNumber(item.storageCount)
                            node = document.getElementById('itemStorageCount-' + item.id)
                            if (node.innerHTML != html) node.innerHTML = html
                            style = ''
                            if (item.storageCount > 0) style += 'text-white'
                            if (node.className != style) node.className = style                        
                            //---
                            style = 'btn btn-danger'
                            if (!window.App.game.canRemoveStorer(item.id)) style += ' disabled'
                            node = document.getElementById('itemRemoveStorerBtn-' + item.id)
                            if (node.className != style) node.className = style
                            //---
                            style = 'btn btn-warning'
                            if (!window.App.game.canAddStorer(item.id)) style += ' disabled'
                            node = document.getElementById('itemAddStorerBtn-' + item.id)
                            if (node.className != style) node.className = style
                        }
                    }
                }
            })
        }
    }
    //---
    refreshTabMissions() {
        //---
        let displayContainer = function(containerId, containerName, elems, type) {
            //---
            let html = ''
            //---
            if (elems.length > 0) {
                //---
                html += '<div class="h6">' + containerName + '</div>'
                html += '<div class="row g-2">'
                    elems.forEach(elem => {
                        html += '<div class="col-12 col-md-6 col-lg-6 col-xl-4">'
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
                                        html += '<div class="row g-3">'
                                            if (elem.desc) html += '<div class="col-12"><span class="text-white">' + i18next.t(elem.desc) + '</span></div>'
                                            html += '<div class="col-12">'
                                                html += '<div class="row g-2">'
                                                    html += '<div class="col-12 lh-1">'
                                                        html += '<span class="small">' + i18next.t('word_Objectives') + '</span>'
                                                    html += '</div>'
                                                    html += '<div class="col-12">'
                                                        html += '<div class="rounded p-2 bg-dark">'
                                                            html += '<div class="row g-1 align-items-center">'
                                                                html += '<div class="col">'
                                                                    html += '<div class="row g-1 align-items-center">'
                                                                        elem.costs.forEach(cost => {
                                                                            let costElem = window.App.game.getElem(cost.id)
                                                                            html += '<div class="col-auto" style="width:65px;">'
                                                                                html += '<span id="missionNeedCount-' + elem.id + '-' + cost.id + '" class="badge text-bg-light d-flex align-items-center justify-content-between" data-bs-toggle="tooltip" data-bs-html="true" data-bs-title="<span class=\'text-white\'>' + i18next.t(costElem.label) + '</span>">'
                                                                                    html += '<img src="' + costElem.img + '" width="16px" height="16px">'
                                                                                    html += '<span class="ms-1">' + formatNumber(cost.count) + '</span>'
                                                                                html += '</span>'
                                                                            html += '</div>'
                                                                        })
                                                                    html += '</div>'
                                                                html += '</div>'
                                                                html += '<div class="col-auto">'
                                                                    html += '<button type="button" id="missionBtn-' + elem.id + '" class="btn btn-primary" onclick="window.App.doClick(\'completeMission\', { missionId:\'' + elem.id + '\' })">'
                                                                        html += '<i class="fa-fw fas fa-check"></i>'
                                                                    html += '</button>'
                                                                html += '</div>'
                                                            html += '</div>'
                                                        html += '</div>'
                                                    html += '</div>'
                                                html += '</div>'
                                            html += '</div>'
                                        html += '</div>'
                                    html += '</div>'
                                }
                                else {
                                    html += '<div class="card-header">'
                                        html += '<div class="row gx-2 align-items-center">'
                                            html += '<div class="col">'
                                                html += '<span>' + i18next.t(elem.label) + '</span>'
                                            html += '</div>'
                                            html += '<div class="col-auto">'
                                                html += '<i class="text-success fa-fw fas fa-check-circle"></i>'
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
                html += '</div>'
                //---
                let node = document.getElementById(containerId)                
                node.className = 'container py-2'
                node.innerHTML = html
            }
            else {
                //---
                let node = document.getElementById(containerId)
                node.className = 'd-none'
                node.innerHTML = ''
            }
        }
        //---
        displayContainer('missionContainer', i18next.t('word_Missions'), window.App.game.elems.filter(elem => elem.type == 'mission' && elem.unlocked), 'mission')
        displayContainer('techContainer', i18next.t('word_Techs'), window.App.game.elems.filter(elem => elem.type == 'tech' && elem.unlocked), 'tech')
    }
    //---
    refreshTabItems() {
        //---
        let displayLine = function(line) {
            //---
            let machine = window.App.game.getElem(line.machineId)
            //---
            let html = ''
            //---
            html += '<div class="col">'
                html += '<div class="row g-1 align-items-center justify-content-end">'
                    if (line.inputs) {
                        line.inputs.forEach(input => {
                            let inputElem = window.App.game.getElem(input.id)
                            html += '<div class="col-auto" style="width:65px;">'
                                html += '<span id="recipeInputCount-' + line.id + '-' + input.id + '" class="badge d-flex align-items-center" data-bs-toggle="tooltip" data-bs-html="true" data-bs-title="<span class=\'text-white\'>' + i18next.t(inputElem.label) + '</span>">'
                                    html += '<img src="' + inputElem.img + '" width="16px" height="16px">'
                                    html += '<span id="recipeInputCountValue-' + line.id + '-' + input.id + '" class="ms-1">' + formatNumber(input.count) + '</span>'
                                html += '</span>'
                            html += '</div>'
                        })
                    }
                    else {
                        html += '<div class="col-auto">'
                            html += '<span>&Oslash;</span>'
                        html += '</div>'
                    }
                    html += '<div class="col-auto px-0"><span class="badge text-normal px-0"><i class="fas fa-fw fa-long-arrow-alt-right"></i></span></div>'
                    let outputElem = window.App.game.getElem(line.output.id)
                    html += '<div class="col-auto" style="width:65px;">'
                        html += '<span id="recipeOutputCount-' + line.id + '-' + line.output.id + '" class="badge text-bg-light d-flex align-items-center justify-content-between" data-bs-toggle="tooltip" data-bs-html="true" data-bs-title="<span class=\'text-white\'>' + i18next.t(outputElem.label) + '</span>">'
                            html += '<img src="' + outputElem.img + '" width="16px" height="16px">'
                            html += '<span id="recipeOutputCountValue-' + line.id + '-' + line.output.id + '" class="ms-1">' + formatNumber(line.output.count) + '</span>'
                        html += '</span>'
                    html += '</div>'
                html += '</div>'
            html += '</div>'
            //---
            return html
        }
        //---
        let displayContainer = function(containerId, containerName, items, type) {
            //---
            if (items.length > 0) {
                //---
                let html = ''
                //---
                html += '<div class="row g-2">'
                    html += '<div class="col-12">'
                        html += '<div class="row gx-3 align-items-center">'
                            html += '<div class="col-auto">'
                                html += '<span class="h6">' + containerName + '</span>'
                            html += '</div>'
                            html += '<div class="col-auto">'
                                html += '<button class="btn btn-link" onclick="window.App.doClick(\'expandAll\', { type:\'' + type + '\' })">' + i18next.t('word_ExpandAll') + '</button>'
                            html += '</div>'
                            html += '<div class="col-auto">'
                                html += '<button class="btn btn-link" onclick="window.App.doClick(\'collapseAll\', { type:\'' + type + '\' })">' + i18next.t('word_CollapseAll') + '</button>'
                            html += '</div>'
                        html += '</div>'
                    html += '</div>'
                    items.forEach(item => {
                        html += '<div class="col-12 col-md-6 col-lg-6 col-xl-4">'
                            html += '<div class="card">'
                                html += '<div class="card-header" data-bs-toggle="collapse" data-bs-target="#collapse-' + item.id + '" aria-expanded="false" aria-controls="collapseExample" onclick="window.App.doClick(\'toggleCollapse\', { elemId:\'' + item.id + '\' })">'
                                    html += '<div class="row gx-1 align-items-center">'
                                        html += '<div class="col-auto"><img src="' + item.img + '" width="24px" height="24px"></div>'
                                        html += '<div class="col text-truncate text-start text-white">' + i18next.t(item.label) + '</div>'
                                        html += '<div class="col-auto" style="width:75px;"><span id="itemProd-' + item.id + '"></span></div>'
                                        html += '<div class="col-auto" style="width:65px;"><span id="itemCount-' + item.id + '"></span></div>'
                                        if (item.type == 'machine' || item.type == 'storer') html += '<div class="col-auto" style="width:65px;"><span id="itemAvailableCount-' + item.id + '"></span></div>'
                                    html += '</div>'
                                html += '</div>'
                                html += '<div id="collapse-' + item.id + '" class="collapse' + (item.collapsed ? '' : ' show') +'">'
                                    html += '<div class="card-body">'
                                        html += '<div class="row g-3">'
                                            
                                            if (item.manualId) {
                                                let manual = window.App.game.getElem(item.manualId)
                                                if (manual && manual.unlocked) {
                                                    html += '<div class="col-12">'
                                                        html += '<div class="row g-2">'
                                                            html += '<div class="col-12 lh-1">'
                                                                html += '<span class="small">' + i18next.t('word_Manual') + '</span>'
                                                            html += '</div>'
                                                            html += '<div class="col-12">'
                                                                html += '<div class="rounded p-2 bg-dark">'
                                                                    html += '<div class="row g-2">'
                                                                        html += '<div class="col-12">'
                                                                            html += '<div class="row gx-1 align-items-center">'
                                                                                html += '<div class="col-auto">'
                                                                                    html += '<img src="img/machines/Manual.png" width="20px" height="20px">'
                                                                                html += '</div>'
                                                                                html += '<div class="col">'
                                                                                    html += '<span class="small text-white">' + i18next.t('machineManual') + '</span>'
                                                                                html += '</div>'
                                                                                html += '<div class="col-auto">'
                                                                                    html += '<div class="row g-1 align-items-center">'
                                                                                        html += '<div class="col-auto">'
                                                                                            html += '<button type="button" id="manualStopBtn-' + manual.id + '" class="btn btn-danger" onclick="window.App.doClick(\'stopManual\', { manualId:\'' + manual.id + '\' })">'
                                                                                                html += '<i class="fas fa-fw fa-stop"></i>'
                                                                                            html += '</button>'
                                                                                        html += '</div>'
                                                                                        html += '<div class="col-auto">'
                                                                                            html += '<button type="button" id="manualStartBtn-' + manual.id + '" class="btn btn-warning" onclick="window.App.doClick(\'startManual\', { manualId:\'' + manual.id + '\' })">'
                                                                                                html += '<i class="fas fa-fw fa-play"></i>'
                                                                                            html += '</button>'
                                                                                        html += '</div>'
                                                                                    html += '</div>'
                                                                                html += '</div>'
                                                                            html += '</div>'
                                                                        html += '</div>'
                                                                        html += displayLine(manual)
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
                                                    html += '<div class="col-12">'
                                                        html += '<div class="row g-2">'
                                                            html += '<div class="col-12 lh-1">'
                                                                html += '<div class="row gx-2 align-items-center">'
                                                                    html += '<div class="col">'
                                                                        html += '<span class="small">' + i18next.t('word_Automation') + '</span>'
                                                                    html += '</div>'
                                                                    html += '<div class="col-auto">'
                                                                        html += '<span class="small">' + i18next.t('word_RawProd') + '</span>'
                                                                        html += '<span id="itemRawProd-' + item.id + '" class="small ms-1 text-white"></span>'
                                                                    html += '</div>'
                                                                    html += '<div class="col-auto">'
                                                                        html += '<span class="small">' + i18next.t('word_RawConsum') + '</span>'
                                                                        html += '<span id="itemRawConsum-' + item.id + '" class="small ms-1 text-white"></span>'
                                                                    html += '</div>'
                                                                html += '</div>'
                                                            html += '</div>'
                                                            item.lines.forEach(lineId => {
                                                                let line = window.App.game.getElem(lineId)
                                                                if (line.unlocked) {
                                                                    html += '<div class="col-12">'
                                                                        html += '<div class="rounded p-2 bg-dark">'
                                                                            html += '<div class="row g-2">'
                                                                                html += '<div class="col-12">'
                                                                                    html += '<div class="row gx-1 align-items-center">'
                                                                                        let machine = window.App.game.getElem(line.machineId)
                                                                                        html += '<div class="col-auto">'
                                                                                            html += '<img src="' + machine.img + '" width="20px" height="20px">'
                                                                                        html += '</div>'
                                                                                        html += '<div class="col text-truncate">'
                                                                                            html += '<span class="small text-white">' + i18next.t(machine.label) + '</span>'
                                                                                        html += '</div>'
                                                                                        html += '<div class="col-auto small"><small class="opacity-50">x </small><span id="lineCount-' + line.id + '"></span></div>'
                                                                                        html += '<div class="col-auto">'
                                                                                            html += '<div class="row g-1 align-items-center">'
                                                                                                html += '<div class="col-auto">'
                                                                                                    html += '<select id="lineSelectCount-' + line.id + '" class="form-control form-control-sm" onchange="window.App.doClick(\'setLineSelectCount\', { elemId:\'' + lineId + '\', count:this.value })">'
                                                                                                        html += '<option' + (line.selectCount == '1' ? ' selected' : '') + ' value="1">1</option>'
                                                                                                        html += '<option' + (line.selectCount == '10' ? ' selected' : '') + ' value="10">10</option>'
                                                                                                        html += '<option' + (line.selectCount == '100' ? ' selected' : '') + ' value="100">100</option>'
                                                                                                        html += '<option' + (line.selectCount == 'max' ? ' selected' : '') + ' value="max">' + i18next.t('word_Max') + '</option>'
                                                                                                    html += '</select>'
                                                                                                html += '</div>'
                                                                                                html += '<div class="col-auto">'
                                                                                                    html += '<button id="lineRemoveBtn-' + line.id + '" class="btn btn-danger" type="button" onclick="window.App.doClick(\'removeLine\', { elemId:\'' + lineId + '\' })"><i class="fas fa-fw fa-minus-circle"></i></button>'
                                                                                                html += '</div>'
                                                                                                html += '<div class="col-auto">'
                                                                                                    html += '<button id="lineAddBtn-' + line.id + '" class="btn btn-warning" type="button" onclick="window.App.doClick(\'addLine\', { elemId:\'' + lineId + '\' })"><i class="fas fa-fw fa-plus-circle"></i></button>'
                                                                                                html += '</div>'
                                                                                            html += '</div>'
                                                                                        html += '</div>'
                                                                                    html += '</div>'
                                                                                html += '</div>'
                                                                                html += '<div class="col-12">'
                                                                                    html += '<div class="row gx-2 align-items-center">'
                                                                                        html += displayLine(line)
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
                                            if (item.storage) {
                                                html += '<div class="col-12">'
                                                    html += '<div class="row g-2">'
                                                        html += '<div class="col-12 lh-1">'
                                                            html += '<div class="row gx-2 align-items-center">'
                                                                html += '<div class="col">'
                                                                     html += '<span class="small">' + i18next.t('word_Storage') + '</span>'
                                                                html += '</div>'
                                                                if (item.type == 'machine' || item.type == 'storer') {
                                                                    html += '<div class="col-auto">'
                                                                        html += '<span class="small">' + i18next.t('word_UsedCount') + '</span>'
                                                                        html += '<span id="itemUsedCount-' + item.id + '" class="small ms-1 text-white"></span>'
                                                                    html += '</div>'
                                                                }
                                                                html += '<div class="col-auto">'
                                                                    html += '<span class="small">' + i18next.t('word_Max') + '</span>'
                                                                    html += '<span id="itemMax-' + item.id + '" class="small ms-1 text-white"></span>'
                                                                html += '</div>'
                                                            html += '</div>'
                                                        html += '</div>'
                                                        if (item.storage && item.storage.storerId) {
                                                            let storer = window.App.game.getElem(item.storage.storerId)
                                                            if (storer.unlocked) {
                                                                html += '<div class="col-12">'
                                                                    html += '<div class="rounded p-2 bg-dark">'
                                                                        html += '<div class="row g-2">'
                                                                            html += '<div class="col-12">'
                                                                                html += '<div class="row g-2 align-items-center">'
                                                                                    html += '<div class="col-auto">'
                                                                                        html += '<img src="' + storer.img + '" width="20px" height="20px">'
                                                                                    html += '</div>'
                                                                                    html += '<div class="col text-truncate">'
                                                                                        html += '<span class="small text-white">' + i18next.t(storer.label) + '</span>'
                                                                                    html += '</div>'
                                                                                    html += '<div class="col-auto small text-white">+' + formatNumber(item.storage.base) + '</div>'
                                                                                    html += '<div class="col-auto small"><small class="opacity-50">x </small><span id="itemStorageCount-' + item.id + '"></span></div>'
                                                                                    html += '<div class="col-auto">'
                                                                                        html += '<div class="row g-1 align-items-center">'
                                                                                            html += '<div class="col-auto">'
                                                                                                html += '<select id="itemSelectStorageCount-' + item.id + '" class="form-control form-control-sm" onchange="window.App.doClick(\'setStorageSelectCount\', { elemId:\'' + item.id + '\', count:this.value })">'
                                                                                                    html += '<option' + (item.selectStorageCount == '1' ? ' selected' : '') + ' value="1">1</option>'
                                                                                                    html += '<option' + (item.selectStorageCount == '10' ? ' selected' : '') + ' value="10">10</option>'
                                                                                                    html += '<option' + (item.selectStorageCount == '100' ? ' selected' : '') + ' value="100">100</option>'
                                                                                                    html += '<option' + (item.selectStorageCount == 'max' ? ' selected' : '') + ' value="max">' + i18next.t('word_Max') + '</option>'
                                                                                                html += '</select>'
                                                                                            html += '</div>'                                                                
                                                                                            html += '<div class="col-auto">'
                                                                                                html += '<button id="itemRemoveStorerBtn-' + item.id + '" class="btn btn-danger" type="button" onclick="window.App.doClick(\'removeStorer\', { elemId:\'' + item.id + '\' })"><i class="fas fa-fw fa-minus-circle"></i></button>'
                                                                                            html += '</div>'                                                                
                                                                                            html += '<div class="col-auto">'
                                                                                                html += '<button id="itemAddStorerBtn-' + item.id + '" class="btn btn-warning" type="button" onclick="window.App.doClick(\'addStorer\', { elemId:\'' + item.id + '\' })"><i class="fas fa-fw fa-plus-circle"></i></button>'
                                                                                            html += '</div>'
                                                                                        html += '</div>'
                                                                                    html += '</div>'
                                                                                html += '</div>'
                                                                            html += '</div>'
                                                                        html += '</div>'
                                                                    html += '</div>'
                                                                html += '</div>'
                                                            }
                                                        }
                                                    html += '</div>'
                                                html += '</div>'
                                            }
                                        html += '</div>'
                                    html += '</div>'
                                html += '</div>'
                            html += '</div>'
                        html += '</div>'
                    })
                html += '</div>'
                //---
                let node = document.getElementById(containerId)                
                node.className = 'container py-2'
                node.innerHTML = html
            }
            else {
                //---
                let node = document.getElementById(containerId)
                node.className = 'd-none'
                node.innerHTML = ''
            }
        }
        //---
        displayContainer('machineContainer', i18next.t('word_Machines'), window.App.game.elems.filter(elem => elem.id != 'machineManual' && elem.type == 'machine' && elem.unlocked), 'machine')
        displayContainer('storerContainer', i18next.t('word_Storers'), window.App.game.elems.filter(elem => elem.type == 'storer' && elem.unlocked), 'storer')
        displayContainer('itemContainer', i18next.t('word_Items'), window.App.game.elems.filter(elem => elem.type == 'item' && elem.unlocked), 'item')
        //---
        let tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
        let tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
    }
    //---
    refreshTabScenarii() {
        //---
        let html = ''
        //---
        let scenarios = window.App.game.scenarios.filter(scenario => scenario.ready)
        scenarios.forEach(scenario => {
            html += '<div class="col-12 col-md-6 col-lg-6 col-xl-4">'
                html += '<button type="button" class="w-100 btn btn-light text-start' + (scenario.id == window.App.game.scenario.id ? ' border-warning' : '') + '" onclick="if (confirm(\'' + i18next.t('text_changeScenarioConfirm') + '\')) window.App.doClick(\'selectScenario\', { scenarioId:\'' + scenario.id + '\' })">'
                    html += '<div class="row g-1 justify-content-center">'
                        html += '<div class="col-12">'
                            html += '<span class="h6 text-white">' + i18next.t(scenario.label) + '</span>'
                        html += '</div>'
                        html += '<div class="col-12 small">'
                            html += '<span class="text-normal">' + i18next.t(scenario.desc) + '</span>'
                        html += '</div>'
                        html += '<div class="col-12 small">'
                            if (scenario.victoryDate) {
                                html += '<span class="text-white">'
                                    html += '<img src="img/victory.png" width="12px" height="12px" class="me-2" />'
                                    html += '<span class="text-success">' + new Date(scenario.victoryDate).toLocaleString() + '</span>'
                                html += '</span>'
                            }
                            else {
                                html += '<span class="text-normal">'
                                    html += i18next.t('word_StartDate') + ' '
                                    if (scenario.id == window.App.game.scenario.id && scenario.startDate) html += '<span class="text-white">' + new Date(scenario.startDate).toLocaleString() + '</span>'
                                    else html += '<span class="text-danger">' + i18next.t('word_NotYetWon') + '</span>'
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
        //---
        else if (action == 'toggleCollapse') window.App.game.toggleCollapse(data.elemId)
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
        else if (action == 'stopManual') window.App.game.stopManual(data.manualId)
        //---
        else if (action == 'addLine') window.App.game.addLine(data.elemId)
        else if (action == 'removeLine') window.App.game.removeLine(data.elemId)
        //---
        else if (action == 'addStorer') window.App.game.addStorer(data.elemId)
        else if (action == 'removeStorer') window.App.game.removeStorer(data.elemId)
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
        //---
        else if (action == 'setLineSelectCount') window.App.game.setLineSelectCount(data)
        //---
        else if (action == 'setStorageSelectCount') window.App.game.setStorageSelectCount(data)
        //---
        else if (action == 'expandAll') {
            //---
            let items = window.App.game.elems.filter(elem => elem.id != 'machineManual' && elem.type == data.type && elem.unlocked)
            items.forEach(item => { item.collapsed = false })
            //---
            this.refreshTabItems()
        }
        else if (action == 'collapseAll') {
            //---
            let items = window.App.game.elems.filter(elem => elem.id != 'machineManual' && elem.type == data.type && elem.unlocked)
            items.forEach(item => { item.collapsed = true })
            //---
            this.refreshTabItems()
        }
    }
    //---
    selectTab(data) {
        //---
        this.selectedTab = data.tabId
    }
}
