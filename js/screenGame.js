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
    html += '<div class="position-relative w-100 h-100">'
        html += '<div class="position-absolute bg-card-body border-bottom border-body" style="top:0; width:100%; height:48px;">'
            html += '<div class="h-100 container col-12 bg-dark d-flex align-items-center">'
                html += '<div class="flex-fill row gx-2 align-items-center">'
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
                                        html += '<span>' + i18next.t('text_iconsBy') + '</span>'
                                        html += ' <a href="https://icons8.com/" target="_blank">Icons8</a>'
                                    html += '</div>'
                                html += '</div>'
                                html += '<div class="px-2 py-1">'
                                    html += '<div class="pb-2 text-center small">'
                                        html += '<span>' + i18next.t('text_love') + '</span>'
                                    html += '</div>'
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
        html += '<div class="position-absolute tab-content" style="top:48px; bottom:48px; width:100%; ">'
            html += '<div class="tab-pane scrollbar fade' + (data.selectedTab == 'missions' ? ' show active' : '') + '" id="missions-tab-pane" role="tabpanel" aria-labelledby="missions-tab" tabindex="0">'
                html += '<div id="missionContainer" class="container py-3"></div>'
                html += '<div id="techContainer" class="container py-3"></div>'
            html += '</div>'
            html += '<div class="tab-pane scrollbar fade' + (data.selectedTab == 'items' ? ' show active' : '') + '" id="items-tab-pane" role="tabpanel" aria-labelledby="items-tab" tabindex="0">'
                html += '<div id="itemContainer" class="container py-3"></div>'
                html += '<div id="machineContainer" class="container py-3"></div>'
                html += '<div id="storerContainer" class="container py-3"></div>'
            html += '</div>'
            html += '<div class="tab-pane scrollbar fade' + (data.selectedTab == 'scenarii' ? ' show active' : '') + '" id="scenarii-tab-pane" role="tabpanel" aria-labelledby="scenarii-tab" tabindex="0">'
                html += '<div class="container py-3">'
                    html += '<div class="m-1 h6 pb-2">' + i18next.t('word_Scenarii') + '</div>'
                    html += '<div class="m-1 text-warning small"><i class="fa-fw fas fa-exclamation-triangle"></i> ' + i18next.t('text_scenarioWarning') + '</div>'
                    html += '<div id="scenariiContainer" class="mt-1 row g-2"></div>'
                html += '</div>'
            html += '</div>'
            html += '<div class="tab-pane scrollbar fade' + (data.selectedTab == 'options' ? ' show active' : '') + '" id="options-tab-pane" role="tabpanel" aria-labelledby="options-tab" tabindex="0">'
                html += '<div class="container py-3">'
                    html += '<div class="m-1 h6">' + i18next.t('word_Language') + '</div>'
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
                    html += '<div class="m-1 h6">' + i18next.t('word_LocalData') + '</div>'
                    html += '<div class="row g-2">'
                        html += '<div class="col-12 col-md-6">'
                            html += '<div class="card card-body">'
                                html += '<div class="mb-2 d-flex justify-content-center">'
                                    html += '<textarea spellcheck="false" rows="3" class="w-100 form-control" disabled readonly>' + window.App.getLocalData() + '</textarea>'
                                html += '</div>'
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
                        html += '</div>'
                        html += '<div class="col-12 col-md-6">'
                            html += '<div class="card card-body">'
                                html += '<div class="mb-2 d-flex">'
                                    html += '<textarea spellcheck="false" rows="3" id="importData" class="w-100 form-control"></textarea>'
                                html += '</div>'
                                html += '<div class="col-4 ms-auto">'
                                    html += '<button type="button" class="w-100 btn btn-sm btn-primary" onclick="window.App.importSave()">'
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
        html += '<div class="position-absolute bg-card-body border-top border-body" style="bottom:0; width:100%; height:48px;">'
            html += '<div class="h-100 container px-0 bg-dark">'
                html += '<div class="h-100 nav nav-tabs">'
                    tabs.forEach(tab => {
                        html += '<div class="col nav-item">'
                            html += '<button type="button" class="position-relative nav-link p-1' + (data.selectedTab == tab.id ? ' active' : '') + '" data-bs-toggle="tab" data-bs-target="#' + tab.id + '-tab-pane"role="tab" aria-controls="' + tab.id + '-tab-pane" onclick="window.App.doClick(\'selectTab\', { tabId:\'' + tab.id + '\' })">'
                                html += '<div class="text-center"><i class="' + tab.img + '"></i></div>'
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
        let drawRecipe = function(recipe) {
            //---
            let machine = window.App.game.getElem(recipe.machineId)
            //---
            if (machine.id != 'machineManual') {
                //---
                let style = 'w-100 badge'
                if (window.App.game.getAvailableCount(machine.id) < 1) style += ' text-bg-danger'
                let node = document.getElementById('recipeMachineCount-' + recipe.id)
                if (node.className != style) node.className = style
            }
            //---
            if (recipe.inputs) {
                //---
                recipe.inputs.forEach(input => {
                    //---
                    let inputElem = window.App.game.getElem(input.id)
                    //---
                    let style = 'w-100 badge'
                    if (input.count > window.App.game.getAvailableCount(input.id)) style += ' text-bg-danger'
                    let node = document.getElementById('recipeInputCount-' + recipe.id + '-' + input.id)
                    if (node.className != style) node.className = style
                })
            }
            //---
            recipe.outputs.forEach(output => {
                //---
                let max = window.App.game.getMax(output.id)
                let outputElem = window.App.game.getElem(output.id)
                //---
                let style = 'w-100 badge'
                if (max > 0 && outputElem.count >= max) style += ' text-bg-danger'
                let node = document.getElementById('recipeOutputCount-' + recipe.id + '-' + output.id)
                if (node.className != style) node.className = style
            })
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
                        let style = ''
                        if (window.App.game.getAvailableCount(cost.id) < cost.count) style = 'position-absolute end-0 bottom-0 badge text-bg-danger lh-1'
                        else style = 'position-absolute end-0 bottom-0 badge lh-1'
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
            let items = window.App.game.elems.filter(elem => elem.id != 'machineManual' && elem.unlocked && (elem.type == 'item' || elem.type == 'machine' || elem.type == 'storer'))
            items.forEach(item => {
                //---
                let html = ''
                html = formatNumber(window.App.game.getAvailableCount(item.id), 2)
                let node = document.getElementById('itemCount-' + item.id)
                if (node.innerHTML != html) node.innerHTML = html
                //---
                let max = window.App.game.getMax(item.id)
                let style = 'small'
                if (max > 0 && item.count >= max) style = 'badge text-bg-danger'
                else if (item.count > 0) style += ' text-white'
                if (node.className != style) node.className = style
                //---
                let prod = item.prod
                html = (prod > 0 ? '+' : '') + formatNumber(prod) + '/s'
                node = document.getElementById('itemProd-' + item.id)                
                if (node.innerHTML != html) node.innerHTML = html
                //---
                style = 'small'
                if (prod < 0) style = 'badge text-bg-danger'
                else if (prod > 0) style = 'badge text-bg-success'
                if (node.className != style) node.className = style
                //---
                if (item.manualId) {
                    //---
                    let manual = window.App.game.getElem(item.manualId)
                    if (manual.unlocked) {
                        //---
                        style = 'btn btn-sm'
                        if (!window.App.game.canProduce(manual.id)) style += ' border-danger'
                        node = document.getElementById('recipeBtn-' + manual.id)
                        if (node.className != style) node.className = style
                        //---
                        html = formatNumber(manual.count)
                        node = document.getElementById('manualCount-' + manual.id)
                        if (node.innerHTML != html) node.innerHTML = html
                        style = ''
                        if (manual.count > 0) style += 'text-white'
                        if (node.className != style) node.className = style
                        //---
                        style = 'btn btn-sm btn-primary'
                        if (!window.App.game.canStartManual(manual.id)) style += ' disabled'
                        node = document.getElementById('manualStartBtn-' + manual.id)
                        if (node.className != style) node.className = style
                        //---
                        style = 'btn btn-sm btn-danger'
                        if (!window.App.game.canStopManual(manual.id)) style += ' disabled'
                        node = document.getElementById('manualStopBtn-' + manual.id)
                        if (node.className != style) node.className = style
                        //---
                        drawRecipe(manual)
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
                        item.lines.forEach(lineId => {
                            //---
                            let line = window.App.game.getElem(lineId)
                            if (line.unlocked) {
                                //---
                                style = 'btn btn-sm'
                                if (!window.App.game.canProduce(line.id)) style += ' border-danger'
                                node = document.getElementById('recipeBtn-' + line.id)
                                if (node.className != style) node.className = style
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
                                style = 'btn btn-primary'
                                if (!window.App.game.canAddLine(line.id)) style += ' disabled'
                                node = document.getElementById('lineAddBtn-' + line.id)
                                if (node.className != style) node.className = style
                                //---
                                drawRecipe(line)
                            }
                        })
                    }
                }
                //---
                if (item.storage && item.storage.storerId) {
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
                        style = 'btn btn-primary'
                        if (!window.App.game.canAddStorer(item.id)) style += ' disabled'
                        node = document.getElementById('itemAddStorerBtn-' + item.id)
                        if (node.className != style) node.className = style
                    }
                }
            })
        }
    }
    //---
    refreshTabMissions() {
        //---
        let html = ''
        //---
        let elems = window.App.game.elems.filter(elem => elem.type == 'mission' && elem.unlocked)
        if (elems.length > 0) {
            //---
            html += '<div class="m-1 h6">' + i18next.t('word_Missions') + '</div>'
            html += '<div class="row g-1">'
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
                                    if (elem.desc) html += '<div class="mb-2"><span class="text-white">' + i18next.t(elem.desc) + '</span></div>'
                                    html += '<div class="mb-2"><span>' + i18next.t('word_Objectives') + '</span></div>'
                                    html += '<div class="row gx-2">'
                                        html += '<div class="col">'
                                            html += '<div class="row g-2 align-items-center">'
                                                elem.costs.forEach(cost => {
                                                    let costElem = window.App.game.getElem(cost.id)
                                                    html += '<div class="col-auto position-relative small pb-2">'
                                                        html += '<img src="' + costElem.img + '" width="24px" height="24px">'
                                                        html += '<small id="missionNeedCount-' + elem.id + '-' + cost.id + '">' + formatNumber(cost.count) + '</small>'
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
            html += '</div>'
            //---
            let node = document.getElementById('missionContainer')                
            if (node.innerHTML != html) node.innerHTML = html
        }
        else {
            //---
            let node = document.getElementById('itemContainer')
            node.className = 'd-none'
        }
        //---
        html = ''
        //---
        elems = window.App.game.elems.filter(elem => elem.type == 'tech' && elem.unlocked)
        if (elems.length > 0) {
            //---
            html += '<div class="m-1 h6">' + i18next.t('word_Techs') + '</div>'
            html += '<div class="row g-1">'
                elems.forEach(elem => {
                    html += '<div class="col-12 col-md-6 col-lg-4 col-xl-3">'
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
                                    if (elem.desc) html += '<div class="mb-2"><span class="text-white">' + i18next.t(elem.desc) + '</span></div>'
                                    html += '<div class="mb-2"><span>' + i18next.t('word_Objectives') + '</span></div>'
                                    html += '<div class="row gx-2">'
                                        html += '<div class="col">'
                                            html += '<div class="row g-2 align-items-center">'
                                                elem.costs.forEach(cost => {
                                                    let costElem = window.App.game.getElem(cost.id)
                                                    html += '<div class="col-auto position-relative small pb-2">'
                                                        html += '<img src="' + costElem.img + '" width="24px" height="24px">'
                                                        html += '<small id="missionNeedCount-' + elem.id + '-' + cost.id + '">' + formatNumber(cost.count) + '</small>'
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
            html += '</div>'
            //---
            let node = document.getElementById('techContainer')                
            if (node.innerHTML != html) node.innerHTML = html
        }
        else {
            //---
            let node = document.getElementById('techContainer')
            node.className = 'd-none'
        }
    }
    //---
    refreshTabItems() {
        //---
        let displayRecipe = function(recipe) {
            //---
            let machine = window.App.game.getElem(recipe.machineId)
            //---
            let html = ''
            //---
            html += '<div class="col">'
                html += '<div class="dropdown">'
                    html += '<button type="button" id="recipeBtn-' + recipe.id + '" class="btn btn-sm" data-bs-toggle="dropdown" aria-expanded="false"><img src="' + machine.img + '" width="24px" height="24px"></button>'
                    html += '<div class="dropdown-menu">'
                        html += '<div class="px-2">'
                            html += '<div class="mb-2">'
                                html += '<span>' + i18next.t('word_Recipe') + '</span>'
                            html += '</div>'
                            html += '<div class="row g-2 align-items-center">'
                                if (machine.id != 'machineManual') {
                                    html += '<div class="col-auto">'
                                        html += '<div class="text-center"><img src="' + machine.img + '" width="24px" height="24px"></div>'
                                        html += '<div class=""><span id="recipeMachineCount-' + recipe.id + '">1</span></div>'
                                    html += '</div>'
                                }
                                if (recipe.inputs) {
                                    recipe.inputs.forEach(input => {
                                        let inputElem = window.App.game.getElem(input.id)
                                        html += '<div class="col-auto">'
                                            html += '<div class="text-center"><img src="' + inputElem.img + '" width="24px" height="24px"></div>'
                                            html += '<div class=""><span id="recipeInputCount-' + recipe.id + '-' + input.id + '">' + formatNumber(input.count) + '</span></div>'
                                        html += '</div>'
                                    })
                                }
                                if (machine.id != 'machineManual' || recipe.inputs) {
                                    html += '<div class="col-auto small"><i class="fas fa-fw fa-long-arrow-alt-right"></i></div>'
                                }
                                recipe.outputs.forEach(output => {
                                    let outputElem = window.App.game.getElem(output.id)
                                    html += '<div class="col-auto">'
                                        html += '<div class="text-center"><img src="' + outputElem.img + '" width="24px" height="24px"></div>'
                                        html += '<div class=""><span id="recipeOutputCount-' + recipe.id + '-' + output.id + '">' + formatNumber(output.count) + '</span></div>'
                                    html += '</div>'
                                })
                            html += '</div>'
                        html += '</div>'
                    html += '</div>'
                html += '</div>'
            html += '</div>'
            //---
            return html
        }
        //---
        let displayContainer = function(containerId, containerName, items) {
            //---
            if (items.length > 0) {
                //---
                let html = ''
                //---
                html += '<div class="row g-2">'
                    html += '<div class="col-12">'
                        html += '<span class="h6">' + containerName + '</span>'
                    html += '</div>'
                    items.forEach(item => {
                        html += '<div class="col-12 col-md-6 col-lg-6 col-xl-4">'
                            html += '<div class="card">'
                                html += '<button type="button" class="card-header" data-bs-toggle="collapse" data-bs-target="#collapse-' + item.id + '" aria-expanded="false" aria-controls="collapseExample" onclick="window.App.doClick(\'toggleCollapse\', { elemId:\'' + item.id + '\' })">'
                                    html += '<div class="row gx-2 align-items-center">'
                                        html += '<div class="col-auto"><img src="' + item.img + '" width="24px" height="24px"></div>'
                                        html += '<div class="col text-start text-white">' + i18next.t(item.label) + '</div>'
                                        html += '<div class="col-auto text-end"><span id="itemProd-' + item.id + '"></span></div>'
                                        html += '<div class="col-3 text-end"><span id="itemCount-' + item.id + '"></span></div>'
                                    html += '</div>'
                                html += '</button>'
                                html += '<div id="collapse-' + item.id + '" class="collapse' + (item.collapsed ? '' : ' show') +'">'
                                    if (item.manualId) {
                                        let manual = window.App.game.getElem(item.manualId)
                                        if (manual && manual.unlocked) {
                                            html += '<div class="card-body">'
                                                html += '<div class="row g-2">'
                                                    html += '<div class="col-12">'
                                                         html += '<span>' + i18next.t('word_Manual') + '</span>'
                                                    html += '</div>'
                                                    html += '<div class="col-12">'
                                                        html += '<div class="row gx-2 align-items-center">'
                                                            html += displayRecipe(manual)
                                                            html += '<div class="col-auto">'
                                                                html += '<div class="row g-2 align-items-center">'
                                                                    manual.outputs.forEach(output => {
                                                                        let outputElem = window.App.game.getElem(output.id)
                                                                        html += '<div class="col-auto small">'
                                                                            html += '<span class="text-white">+' + formatNumber(output.count) + '<small class="opacity-50"> /s</small></span>'
                                                                        html += '</div>'
                                                                    })
                                                                html += '</div>'
                                                            html += '</div>'
                                                            html += '<div class="col-auto small"><small class="opacity-50">x </small><span id="manualCount-' + manual.id + '"></span></div>'
                                                            html += '<div class="col-auto">'
                                                                html += '<button type="button" id="manualStopBtn-' + manual.id + '" class="btn btn-sm btn-danger" onclick="window.App.doClick(\'stopManual\', { manualId:\'' + manual.id + '\' })">'
                                                                    html += '<i class="fas fa-fw fa-stop"></i>'
                                                                html += '</button>'
                                                            html += '</div>'
                                                            html += '<div class="col-auto">'
                                                                html += '<button type="button" id="manualStartBtn-' + manual.id + '" class="btn btn-sm btn-primary" onclick="window.App.doClick(\'startManual\', { manualId:\'' + manual.id + '\' })">'
                                                                    html += '<i class="fas fa-fw fa-play"></i>'
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
                                            html += '<div class="card-body">'
                                                html += '<div class="row g-2">'
                                                    html += '<div class="col-12">'
                                                         html += '<span>' + i18next.t('word_Automation') + '</span>'
                                                    html += '</div>'
                                                    item.lines.forEach(lineId => {
                                                        html += '<div class="col-12">'
                                                            html += '<div class="row g-2">'
                                                                let line = window.App.game.getElem(lineId)
                                                                if (line.unlocked) {
                                                                    html += '<div class="col-12">'
                                                                        html += '<div class="row g-2 align-items-center">'
                                                                            html += displayRecipe(line)
                                                                            line.outputs.forEach(output => {
                                                                                let outputElem = window.App.game.getElem(output.id)
                                                                                html += '<div class="col-auto position-relative small">'
                                                                                    html += '<span class="text-white">+' + formatNumber(output.count) + '<small class="opacity-50"> /s</small></span>'
                                                                                html += '</div>'
                                                                            })
                                                                            html += '<div class="col-auto small"><small class="opacity-50">x </small><span id="lineCount-' + line.id + '"></span></div>'
                                                                            html += '<div class="col-auto">'
                                                                                html += '<div class="input-group input-group-sm">'
                                                                                    html += '<select class="form-control" onchange="window.App.doClick(\'setLineRemoveCount\', { elemId:\'' + lineId + '\', count:this.value })">'
                                                                                        html += '<option' + (line.removeCount == '1' ? ' selected' : '') + ' value="1">-1</option>'
                                                                                        html += '<option' + (line.removeCount == '10' ? ' selected' : '') + ' value="10">-10</option>'
                                                                                        html += '<option' + (line.removeCount == '100' ? ' selected' : '') + ' value="100">-100</option>'
                                                                                        html += '<option' + (line.removeCount == 'none' ? ' selected' : '') + ' value="none">' + i18next.t('word_None') + '</option>'
                                                                                    html += '</select>'
                                                                                    html += '<button id="lineRemoveBtn-' + line.id + '" class="btn btn-danger" type="button" onclick="window.App.doClick(\'removeLine\', { elemId:\'' + lineId + '\' })"><i class="fas fa-fw fa-minus-circle"></i></button>'
                                                                                html += '</div>'                                                                
                                                                            html += '</div>'
                                                                            html += '<div class="col-auto">'
                                                                                html += '<div class="input-group input-group-sm">'
                                                                                    html += '<select class="form-control" onchange="window.App.doClick(\'setLineAddCount\', { elemId:\'' + lineId + '\', count:this.value })">'
                                                                                        html += '<option' + (line.addCount == '1' ? ' selected' : '') + ' value="1">+1</option>'
                                                                                        html += '<option' + (line.addCount == '10' ? ' selected' : '') + ' value="10">+10</option>'
                                                                                        html += '<option' + (line.addCount == '100' ? ' selected' : '') + ' value="100">+100</option>'
                                                                                        html += '<option' + (line.addCount == 'all' ? ' selected' : '') + ' value="all">' + i18next.t('word_All') + '</option>'
                                                                                    html += '</select>'
                                                                                    html += '<button id="lineAddBtn-' + line.id + '" class="btn btn-primary" type="button" onclick="window.App.doClick(\'addLine\', { elemId:\'' + lineId + '\' })"><i class="fas fa-fw fa-plus-circle"></i></button>'
                                                                                html += '</div>'                                                                
                                                                            html += '</div>'
                                                                        html += '</div>'
                                                                    html += '</div>'
                                                                }
                                                            html += '</div>'
                                                        html += '</div>'
                                                    })
                                                html += '</div>'
                                            html += '</div>'
                                        }
                                    }
                                    if (item.storage && item.storage.storerId) {
                                        let storer = window.App.game.getElem(item.storage.storerId)
                                        if (storer.unlocked) {
                                            html += '<div class="card-body">'
                                                html += '<div class="row g-2">'
                                                    html += '<div class="col-12">'
                                                         html += '<span>' + i18next.t('word_Storage') + '</span>'
                                                    html += '</div>'
                                                    html += '<div class="col-12">'
                                                        html += '<div class="row g-2 align-items-center">'
                                                            html += '<div class="col">'
                                                                html += '<div class="">'
                                                                    html += '<img src="' + storer.img + '" width="24px" height="24px">'
                                                                html += '</div>'
                                                            html += '</div>'
                                                            html += '<div class="col-auto small text-white">+' + formatNumber(item.storage.base) + '</div>'
                                                            html += '<div class="col-auto small"><small class="opacity-50">x </small><span id="itemStorageCount-' + item.id + '"></span></div>'
                                                            html += '<div class="col-auto">'
                                                                html += '<div class="input-group input-group-sm">'
                                                                    html += '<select class="form-control" onchange="window.App.doClick(\'setStorageRemoveCount\', { elemId:\'' + item.id + '\', count:this.value })">'
                                                                        html += '<option' + (item.removeStorageCount == '1' ? ' selected' : '') + ' value="1">-1</option>'
                                                                        html += '<option' + (item.removeStorageCount == '10' ? ' selected' : '') + ' value="10">-10</option>'
                                                                        html += '<option' + (item.removeStorageCount == '100' ? ' selected' : '') + ' value="100">-100</option>'
                                                                        html += '<option' + (item.removeStorageCount == 'none' ? ' selected' : '') + ' value="none">' + i18next.t('word_None') + '</option>'
                                                                    html += '</select>'
                                                                    html += '<button id="itemRemoveStorerBtn-' + item.id + '" class="btn btn-danger" type="button" onclick="window.App.doClick(\'removeStorer\', { elemId:\'' + item.id + '\' })"><i class="fas fa-fw fa-minus-circle"></i></button>'
                                                                html += '</div>'                                                                
                                                            html += '</div>'
                                                            html += '<div class="col-auto">'
                                                                html += '<div class="input-group input-group-sm">'
                                                                    html += '<select class="form-control" onchange="window.App.doClick(\'setStorageAddCount\', { elemId:\'' + item.id + '\', count:this.value })">'
                                                                        html += '<option' + (item.addStorageCount == '1' ? ' selected' : '') + ' value="1">+1</option>'
                                                                        html += '<option' + (item.addStorageCount == '10' ? ' selected' : '') + ' value="10">+10</option>'
                                                                        html += '<option' + (item.addStorageCount == '100' ? ' selected' : '') + ' value="100">+100</option>'
                                                                        html += '<option' + (item.addStorageCount == 'all' ? ' selected' : '') + ' value="all">' + i18next.t('word_All') + '</option>'
                                                                    html += '</select>'
                                                                    html += '<button id="itemAddStorerBtn-' + item.id + '" class="btn btn-primary" type="button" onclick="window.App.doClick(\'addStorer\', { elemId:\'' + item.id + '\' })"><i class="fas fa-fw fa-plus-circle"></i></button>'
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
                        html += '</div>'
                    })
                html += '</div>'
                //---
                let node = document.getElementById(containerId)                
                node.className = 'container py-3'
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
        displayContainer('itemContainer', i18next.t('word_Items'), window.App.game.elems.filter(elem => elem.type == 'item' && elem.unlocked))
        displayContainer('machineContainer', i18next.t('word_Machines'), window.App.game.elems.filter(elem => elem.id != 'machineManual' && elem.type == 'machine' && elem.unlocked))
        displayContainer('storerContainer', i18next.t('word_Storers'), window.App.game.elems.filter(elem => elem.type == 'storer' && elem.unlocked))
    }
    //---
    refreshTabScenarii() {
        //---
        let html = ''
        //---
        let scenarii = window.App.game.scenarii.filter(scenario => scenario.ready)
        scenarii.forEach(scenario => {
            html += '<div class="col-12 col-md-6 col-lg-6 col-xl-4">'
                html += '<button type="button" class="w-100 btn text-start' + (scenario.id == window.App.game.scenario.id ? ' border-success disabled' : '') + '" onclick="if (confirm(\'' + i18next.t('text_changeScenarioConfirm') + '\')) window.App.doClick(\'selectScenario\', { scenarioId:\'' + scenario.id + '\' })">'
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
        else if (action == 'setLineAddCount') window.App.game.setLineAddCount(data)
        else if (action == 'setLineRemoveCount') window.App.game.setLineRemoveCount(data)
        //---
        else if (action == 'setStorageAddCount') window.App.game.setStorageAddCount(data)
        else if (action == 'setStorageRemoveCount') window.App.game.setStorageRemoveCount(data)
    }
    //---
    selectTab(data) {
        //---
        this.selectedTab = data.tabId
    }
}
