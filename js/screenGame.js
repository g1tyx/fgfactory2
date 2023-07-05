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
            html += '<div class="h-100 container px-3 col-12 bg-light border-bottom border-dark d-flex align-items-center">'
                html += '<div class="flex-fill row gx-3 align-items-center">'
                    html += '<div class="col-auto pe-0"><img src="logo.png" width="24px" height="24px" class="rounded"></div>'
                    html += '<div class="col"><span class="h6 text-white">' + i18next.t('game_title') + '</span></div>'
                    html += '<div class="col-auto">'
                        html += '<div class="dropdown">'
                            html += '<button type="button" class="btn btn-link" data-bs-toggle="dropdown" aria-expanded="false">'
                                html += '<i class="fas fa-info-circle"></i>'
                            html += '</button>'
                            html += '<div class="dropdown-menu">'
                                html += '<div class="px-2 py-1 text-center small">'
                                    html += '<span>' + i18next.t('text_imagesFrom') + '</span>'
                                    html += '<div><a href="https://game-icons.net/" target="_blank">Game-icons.net</a></div>'
                                html += '</div>'
                                html += '<div class="px-2 py-1 text-center small">'
                                    html += '<span>' + i18next.t('text_iconsBy') + '</span>'
                                    html += '<div><a href="https://fontawesome.com/" target="_blank">Fontawesome</a>'
                                    html += ' + <a href="https://icons8.com/" target="_blank">Icons8</a></div>'
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
            html += '</div>'
            html += '<div class="container px-0 bg-dark tab-pane scrollbar fade' + (data.selectedTab == 'items' ? ' show active' : '') + '" id="items-tab-pane" role="tabpanel" aria-labelledby="items-tab" tabindex="0">'
            html += '</div>'
            html += '<div class="container px-0 bg-dark tab-pane scrollbar fade' + (data.selectedTab == 'scenarios' ? ' show active' : '') + '" id="scenarios-tab-pane" role="tabpanel" aria-labelledby="scenarios-tab" tabindex="0">'
                html += '<div class="p-3">'
                    html += '<div class="h6 mb-3">' + i18next.t('word_Scenarii') + '</div>'
                    html += '<div class="text-warning small mb-3"><i class="fa-fw fas fa-exclamation-triangle"></i> ' + i18next.t('text_scenarioWarning') + '</div>'
                    html += '<div id="scenariiContainer" class="row g-3"></div>'
                html += '</div>'
            html += '</div>'
            html += '<div class="container px-0 bg-dark tab-pane scrollbar fade' + (data.selectedTab == 'options' ? ' show active' : '') + '" id="options-tab-pane" role="tabpanel" aria-labelledby="options-tab" tabindex="0">'
                html += '<div class="p-3">'
                    html += '<div class="h6 mb-3">' + i18next.t('word_Language') + '</div>'
                    html += '<div class="row g-3">'
                        html += '<div class="col-auto">'
                            html += '<button type="button" class="btn btn-light' + (i18next.language == 'en-US' ? ' border-warning' : '') + '" onclick="window.app.changeLocale(\'en-US\')">'
                                html += '<img src="img/en.png" height="24px">'
                            html += '</button>'
                        html += '</div>'
                        html += '<div class="col-auto">'
                            html += '<button type="button" class="btn btn-light' + (i18next.language == 'fr-FR' ? ' border-warning' : '') + '" onclick="window.app.changeLocale(\'fr-FR\')">'
                                html += '<img src="img/fr.png" height="24px">'
                            html += '</button>'
                        html += '</div>'
                        html += '<div class="col-auto">'
                            html += '<button type="button" class="btn btn-light' + (i18next.language == 'zh-CS' ? ' border-warning' : '') + '" onclick="window.app.changeLocale(\'zh-CS\')">'
                                html += '<img src="img/zh.png" height="24px">'
                            html += '</button>'
                        html += '</div>'
                    html += '</div>'
                html += '</div>'
                html += '<div class="p-3">'
                    html += '<div class="h6 mb-3">' + i18next.t('word_Options') + '</div>'
                    html += '<div class="row g-3">'
                        html += '<div class="col-12 col-md-6">'
                            html += '<div class="form-check">'
                                html += '<input class="form-check-input" type="checkbox" value="" id="checkShowLocked"' + (data.showLocked ? ' checked' : '') + ' onclick="window.app.doClick(\'toggleShowLocked\')">'
                                html += '<label class="form-check-label text-white" for="checkShowLocked">' + i18next.t('word_ShowLocked') + '</label>'
                            html += '</div>'
                        html += '</div>'
                    html += '</div>'
                html += '</div>'
                html += '<div class="p-3">'
                    html += '<div class="h6 mb-3">' + i18next.t('word_LocalData') + '</div>'
                    html += '<div class="row g-3">'
                        html += '<div class="col-12 col-md-6">'
                            html += '<div class="card card-body">'
                                html += '<div class="mb-2 d-flex justify-content-center">'
                                    html += '<textarea spellcheck="false" rows="3" class="w-100 form-control" disabled readonly>' + window.app.getLocalData() + '</textarea>'
                                html += '</div>'
                                html += '<div class="row g-2 align-items-center justify-content-center">'
                                    html += '<div class="col-4">'
                                        html += '<button type="button" class="w-100 btn btn-danger" onclick="window.app.showModal(\'modalWipe\')">'
                                            html += '<span><i class="fas fa-fw fa-skull"></i></span>'
                                            html += '<span class="ms-1">' + i18next.t('btn_wipeSave') + '</span>'
                                        html += '</button>'
                                    html += '</div>'
                                    html += '<div class="col-4">'
                                        html += '<button type="button" class="w-100 btn btn-warning" onclick="window.app.exportSave()">'
                                            html += '<span><i class="fas fa-fw fa-copy"></i></span>'
                                            html += '<span class="ms-1">' + i18next.t('btn_exportSave') + '</span>'
                                        html += '</button>'
                                    html += '</div>'
                                    html += '<div class="col-4">'
                                        html += '<button type="button" class="w-100 btn btn-warning" onclick="window.app.downloadSave()">'
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
                                    html += '<button type="button" class="w-100 btn btn-warning" onclick="window.app.importSave()">'
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
                            html += '<button type="button" class="position-relative nav-link' + (data.selectedTab == tab.id ? ' active' : '') + '" data-bs-toggle="tab" data-bs-target="#' + tab.id + '-tab-pane"role="tab" aria-controls="' + tab.id + '-tab-pane" onclick="window.app.doClick(\'selectTab\', { tabId:\'' + tab.id + '\' })">'
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
        this.showLocked = false
        this.selectedTab = 'missions'
    }
    //---
    load(data) {
        //---
        if (data.showLocked != null) this.showLocked = data.showLocked
        if (data.selectedTab != null) this.selectedTab = data.selectedTab
    }
    //---
    getSaveData() {
        //---
        let savedData = {}
        //---
        savedData.showLocked = this.showLocked
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
    getContainerHtml(containerName, elems, cat) {
        //---
        let html = ''
        //---
        if (elems.length > 0) {
            //---
            html += '<div class="p-3">'
                html += '<div class="row g-3">'
                    html += '<div class="col-12">'
                        html += '<div class="row gx-3 align-items-center">'
                            html += '<div class="col-auto">'
                                html += '<span class="h6">' + containerName + '</span>'
                            html += '</div>'
                            html += '<div class="col-auto">'
                                html += '<button class="btn btn-link p-0 border-0" onclick="window.app.doClick(\'expandAll\', { cat:\'' + cat + '\' })">' + i18next.t('word_ExpandAll') + '</button>'
                            html += '</div>'
                            html += '<div class="col-auto">'
                                html += '<button class="btn btn-link p-0 border-0" onclick="window.app.doClick(\'collapseAll\', { cat:\'' + cat + '\' })">' + i18next.t('word_CollapseAll') + '</button>'
                            html += '</div>'
                        html += '</div>'
                    html += '</div>'
                    elems.forEach(elem => {
                        html += '<div class="col-12 col-md-6 col-lg-6 col-xl-4">'
                            html += '<div class="card">'
                                html += '<div class="card-header" data-bs-toggle="collapse" data-bs-target="#collapse-' + elem.id + '" aria-expanded="false" aria-controls="collapseExample" onclick="window.app.doClick(\'toggleCollapse\', { elemId:\'' + elem.id + '\' })">'
                                    html += '<div class="row gx-1 align-items-center">'
                                        if (elem.unlocked == false) {
                                            html += '<div class="col-auto">'
                                                html += '<i class="fas fa-lock"></i>'
                                            html += '</div>'
                                            html += '<div class="col text-truncate text-start">' + i18next.t(elem.label) + '</div>'
                                        }
                                        else {
                                            if (elem.img) html += '<div class="col-auto"><img src="' + elem.img + '" width="24px" height="24px"></div>'
                                            html += '<div class="col text-truncate text-start text-white">' + i18next.t(elem.label) + '</div>'
                                            if (elem.cat == 'mission' || elem.cat == 'tech') {
                                                if (elem.count > 0) html += '<div class="col-auto"><i class="fas fa-fw fa-check-circle text-success"></i></div>'
                                            }
                                            else {
                                                if (elem.lines) html += '<div class="col-auto text-end" style="width:75px;"><span id="itemProd-' + elem.id + '"></span></div>'
                                                html += '<div class="col-auto text-end" style="width:65px;"><span id="itemCount-' + elem.id + '"></span></div>'
                                                if (elem.cat == 'machine' || elem.cat == 'storer' || (elem.cat == 'energy' && elem.id != 'itemElectricity')) html += '<div class="col-auto text-end" style="width:65px;"><span id="itemAvailableCount-' + elem.id + '"></span></div>'
                                            }
                                        }
                                    html += '</div>'
                                html += '</div>'
                                html += '<div id="collapse-' + elem.id + '" class="collapse' + (elem.collapsed ? '' : ' show') +'">'
                                    if (elem.unlocked == true) {
                                        if (elem.desc) html += '<div class="card-body"><span>' + i18next.t(elem.desc) + '</span></div>'
                                        if (elem.recipeId) {
                                            let recipe = window.app.game.scenario.data.elems.find(el => el.id == elem.recipeId)
                                            if (recipe) {
                                                html += '<div class="card-body">'
                                                    html += '<div class="lh-1 mb-3">'
                                                        html += '<small>' + i18next.t('word_Recipe') + '</small>'
                                                    html += '</div>'
                                                    html += '<div class="row g-1 align-items-center justify-content-end">'
                                                        if (recipe.inputs) {
                                                            recipe.inputs.forEach(input => {
                                                                let inputElem = window.app.game.getElem(input.id)
                                                                html += '<div class="col-auto" style="width:65px;">'
                                                                    html += '<span id="recipeInputCount-' + recipe.id + '-' + input.id + '" class="badge d-flex align-items-center" data-bs-toggle="tooltip" data-bs-html="true" data-bs-title="<span class=\'text-white\'>' + i18next.t(inputElem.label) + '</span>">'
                                                                        html += '<img src="' + inputElem.img + '" width="18px" height="18px">'
                                                                        html += '<span id="recipeInputCountValue-' + recipe.id + '-' + input.id + '" class="ms-2" style="line-height:18px;">' + formatNumber(input.count) + '</span>'
                                                                    html += '</span>'
                                                                html += '</div>'
                                                            })
                                                        }
                                                        html += '<div class="col-auto">'
                                                            html += '<small class="text-normal">' + formatTime(recipe.time) + '</small>'
                                                        html += '</div>'
                                                        let outputElem = window.app.game.getElem(recipe.output.id)
                                                        html += '<div class="col-auto" style="width:65px;">'
                                                            html += '<span id="recipeOutputCount-' + recipe.id + '-' + recipe.output.id + '" class="badge text-bg-light d-flex align-items-center justify-content-center" data-bs-toggle="tooltip" data-bs-html="true" data-bs-title="<span class=\'text-white\'>' + i18next.t(outputElem.label) + '</span>">'
                                                                html += '<img src="' + outputElem.img + '" width="18px" height="18px">'
                                                                html += '<span id="recipeOutputCountValue-' + recipe.id + '-' + recipe.output.id + '" class="ms-1">' + formatNumber(recipe.output.count) + '</span>'
                                                            html += '</span>'
                                                        html += '</div>'
                                                    html += '</div>'
                                                html += '</div>'
                                            }
                                        }
                                        if (elem.lines && elem.lines.length > 0) {
                                            let unlocked = 0
                                            elem.lines.forEach(lineId => {
                                                let line = window.app.game.getElem(lineId)
                                                if (line.unlocked) unlocked += 1
                                            })
                                            if (unlocked > 0) {
                                                html += '<div class="card-body">'
                                                    html += '<div class="lh-1 mb-3">'
                                                        html += '<div class="row gx-3 align-items-center justify-content-end">'
                                                            html += '<div class="col">'
                                                                html += '<small>' + i18next.t('word_Production') + '</small>'
                                                            html += '</div>'
                                                            html += '<div class="col-auto">'
                                                                html += '<span class="small">' + i18next.t('word_RawProd') + '</span>'
                                                                html += '<span id="itemRawProd-' + elem.id + '" class="small ms-1 text-white"></span>'
                                                            html += '</div>'
                                                            html += '<div class="col-auto">'
                                                                html += '<span class="small">' + i18next.t('word_RawConsum') + '</span>'
                                                                html += '<span id="itemRawConsum-' + elem.id + '" class="small ms-1 text-white"></span>'
                                                            html += '</div>'
                                                        html += '</div>'
                                                    html += '</div>'
                                                    html += '<div class="row gy-3">'
                                                        elem.lines.forEach(lineId => {
                                                            let line = window.app.game.getElem(lineId)
                                                            if (line.unlocked) {
                                                                html += '<div class="col-12">'
                                                                    html += '<div class="row gx-2 align-items-center">'
                                                                        let machine = window.app.game.getElem(line.machineId)
                                                                        html += '<div class="col-auto">'
                                                                            html += '<div class="badge">'
                                                                                html += '<img src="' + machine.img + '" width="18px" height="18px" data-bs-toggle="tooltip" data-bs-html="true" data-bs-title="<span class=\'text-white\'>' + i18next.t(machine.label) + '</span>">'
                                                                                html += '<span class="ms-2">+' + formatNumber(line.output.count) + ' <small class="opacity-50">/s</small></span>'
                                                                            html += '</div>'
                                                                        html += '</div>'
                                                                        html += '<div class="col">'
                                                                            if (machine.energy) {
                                                                                let energyElem = window.app.game.getElem(machine.energy.id)
                                                                                html += '<span id="lineEnergyCount-' + line.id + '" class="badge" data-bs-toggle="tooltip" data-bs-html="true" data-bs-title="<span class=\'text-white\'>' + i18next.t(energyElem.label) + '</span>">'
                                                                                    html += '<img src="' + energyElem.img + '" width="18px" height="18px">'
                                                                                    html += '<span id="lineEnergyCountValue-' + line.id + '" class="ms-2">' + formatNumber(machine.energy.count) + '</span>'
                                                                                html += '</span>'
                                                                            }
                                                                        html += '</div>'
                                                                        if (machine.id == 'machineManual') {
                                                                            html += '<div class="col-auto" style="width:145px;">'
                                                                                html += '<div class="row g-1 align-items-center justify-content-end">'
                                                                                    html += '<div class="col-auto">'
                                                                                        html += '<button type="button" id="manualStopBtn-' + line.id + '" class="btn btn-danger" onclick="window.app.doClick(\'stopManual\', { manualId:\'' + line.id + '\' })">'
                                                                                            html += '<i class="fas fa-fw fa-stop"></i>'
                                                                                        html += '</button>'
                                                                                    html += '</div>'
                                                                                    html += '<div class="col-auto">'
                                                                                        html += '<button type="button" id="manualStartBtn-' + line.id + '" class="btn btn-warning" onclick="window.app.doClick(\'startManual\', { manualId:\'' + line.id + '\' })">'
                                                                                            html += '<i class="fas fa-fw fa-play"></i>'
                                                                                        html += '</button>'
                                                                                    html += '</div>'
                                                                                html += '</div>'
                                                                            html += '</div>'
                                                                        }
                                                                        else {
                                                                            html += '<div class="col-auto small text-end"><small class="opacity-50">x </small><span id="lineCount-' + line.id + '"></span></div>'
                                                                            html += '<div class="col-auto">'
                                                                                html += '<div class="row g-1 align-items-center">'
                                                                                    html += '<div class="col-auto">'
                                                                                        html += '<select id="lineSelectCount-' + line.id + '" class="form-control form-control-sm" onchange="window.app.doClick(\'setLineSelectCount\', { elemId:\'' + lineId + '\', count:this.value })">'
                                                                                            html += '<option' + (line.selectCount == '1' ? ' selected' : '') + ' value="1">1</option>'
                                                                                            html += '<option' + (line.selectCount == '10' ? ' selected' : '') + ' value="10">10</option>'
                                                                                            html += '<option' + (line.selectCount == '100' ? ' selected' : '') + ' value="100">100</option>'
                                                                                            html += '<option' + (line.selectCount == 'max' ? ' selected' : '') + ' value="max">' + i18next.t('word_Max') + '</option>'
                                                                                        html += '</select>'
                                                                                    html += '</div>'
                                                                                    html += '<div class="col-auto">'
                                                                                        html += '<button id="lineRemoveBtn-' + line.id + '" class="btn btn-danger" type="button" onclick="window.app.doClick(\'removeLine\', { elemId:\'' + lineId + '\' })"><i class="fas fa-fw fa-minus-circle"></i></button>'
                                                                                    html += '</div>'
                                                                                    html += '<div class="col-auto">'
                                                                                        html += '<button id="lineAddBtn-' + line.id + '" class="btn btn-warning" type="button" onclick="window.app.doClick(\'addLine\', { elemId:\'' + lineId + '\' })"><i class="fas fa-fw fa-plus-circle"></i></button>'
                                                                                    html += '</div>'
                                                                                html += '</div>'
                                                                            html += '</div>'
                                                                        }
                                                                    html += '</div>'
                                                                html += '</div>'
                                                            }
                                                        })
                                                    html += '</div>'
                                                html += '</div>'
                                            }
                                        }
                                        if (elem.storage) {
                                            html += '<div class="card-body">'
                                                html += '<div class="row gy-3">'
                                                    html += '<div class="col-12 lh-1">'
                                                        html += '<div class="row gx-2 align-items-center justify-content-end">'
                                                            html += '<div class="col">'
                                                                html += '<small>' + i18next.t('word_Storage') + '</small>'
                                                            html += '</div>'
                                                            if (elem.cat == 'machine' || elem.cat == 'storer' || (elem.cat == 'energy' && elem.id != 'itemElectricity')) {
                                                                html += '<div class="col-auto">'
                                                                    html += '<span class="small">' + i18next.t('word_UsedCount') + '</span>'
                                                                    html += '<span id="itemUsedCount-' + elem.id + '" class="small ms-1 text-white"></span>'
                                                                html += '</div>'
                                                            }
                                                            html += '<div class="col-auto">'
                                                                html += '<span class="small">' + i18next.t('word_Max') + '</span>'
                                                                html += '<span id="itemMax-' + elem.id + '" class="small ms-1 text-white"></span>'
                                                            html += '</div>'
                                                        html += '</div>'
                                                    html += '</div>'
                                                    if (elem.storage && elem.storage.storerId) {
                                                        let storer = window.app.game.getElem(elem.storage.storerId)
                                                        if (storer.unlocked) {
                                                            html += '<div class="col-12">'
                                                                html += '<div class="row g-2 align-items-center">'
                                                                    html += '<div class="col">'
                                                                        html += '<div class="badge">'
                                                                            html += '<img src="' + storer.img + '" width="18px" height="18px" data-bs-toggle="tooltip" data-bs-html="true" data-bs-title="<span class=\'text-white\'>' + i18next.t(storer.label) + '</span>">'
                                                                            html += '<span class="ms-2">+' + formatNumber(elem.storage.base) + '</span>'
                                                                        html += '</div>'
                                                                    html += '</div>'
                                                                    html += '<div class="col-auto small text-end" style="width:35px;"><small class="opacity-50">x </small><span id="itemStorageCount-' + elem.id + '"></span></div>'
                                                                    html += '<div class="col-auto">'
                                                                        html += '<div class="row g-1 align-items-center">'
                                                                            html += '<div class="col-auto">'
                                                                                html += '<select id="itemSelectStorageCount-' + elem.id + '" class="form-control form-control-sm" onchange="window.app.doClick(\'setStorageSelectCount\', { elemId:\'' + elem.id + '\', count:this.value })">'
                                                                                    html += '<option' + (elem.selectStorageCount == '1' ? ' selected' : '') + ' value="1">1</option>'
                                                                                    html += '<option' + (elem.selectStorageCount == '10' ? ' selected' : '') + ' value="10">10</option>'
                                                                                    html += '<option' + (elem.selectStorageCount == '100' ? ' selected' : '') + ' value="100">100</option>'
                                                                                    html += '<option' + (elem.selectStorageCount == 'max' ? ' selected' : '') + ' value="max">' + i18next.t('word_Max') + '</option>'
                                                                                html += '</select>'
                                                                            html += '</div>'                                                                
                                                                            html += '<div class="col-auto">'
                                                                                html += '<button id="itemRemoveStorerBtn-' + elem.id + '" class="btn btn-danger" type="button" onclick="window.app.doClick(\'removeStorer\', { elemId:\'' + elem.id + '\' })"><i class="fas fa-fw fa-minus-circle"></i></button>'
                                                                            html += '</div>'                                                                
                                                                            html += '<div class="col-auto">'
                                                                                html += '<button id="itemAddStorerBtn-' + elem.id + '" class="btn btn-warning" type="button" onclick="window.app.doClick(\'addStorer\', { elemId:\'' + elem.id + '\' })"><i class="fas fa-fw fa-plus-circle"></i></button>'
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
                                        if (elem.costs && elem.count < 1) {
                                            html += '<div class="card-body pt-auto">'
                                                html += '<div class="row g-2">'
                                                    html += '<div class="col-12 lh-1">'
                                                        html += '<span class="small">' + i18next.t('word_Objectives') + '</span>'
                                                    html += '</div>'
                                                    html += '<div class="col-12">'
                                                        html += '<div class="row g-1 align-items-center">'
                                                            html += '<div class="col">'
                                                                html += '<div class="row g-1 align-items-center">'
                                                                    elem.costs.forEach(cost => {
                                                                        let costElem = window.app.game.getElem(cost.id)
                                                                        html += '<div class="col-auto" style="width:65px;">'
                                                                            html += '<span id="missionNeedCount-' + elem.id + '-' + cost.id + '" class="badge text-bg-light d-flex align-items-center justify-content-center" data-bs-toggle="tooltip" data-bs-html="true" data-bs-title="<span class=\'text-white\'>' + i18next.t(costElem.label) + '</span>">'
                                                                                html += '<img src="' + costElem.img + '" width="18px" height="18px">'
                                                                                html += '<span class="ms-1">' + formatNumber(cost.count) + '</span>'
                                                                            html += '</span>'
                                                                        html += '</div>'
                                                                    })
                                                                html += '</div>'
                                                            html += '</div>'
                                                            html += '<div class="col-auto">'
                                                                html += '<button type="button" id="missionBtn-' + elem.id + '" class="btn btn-primary" onclick="window.app.doClick(\'completeMission\', { missionId:\'' + elem.id + '\' })">'
                                                                    html += '<i class="fa-fw fas fa-check"></i>'
                                                                html += '</button>'
                                                            html += '</div>'
                                                        html += '</div>'
                                                    html += '</div>'
                                                html += '</div>'
                                            html += '</div>'
                                        }
                                    }
                                    else {
                                        html += '<div class="card-body">'
                                            html += '<div class="row gy-1">'
                                                html += '<div class="col-12 lh-1">'
                                                    html += '<span class="small opacity-50">' + i18next.t('word_LockedBy') + '</span>'
                                                html += '</div>'
                                                html += '<div class="col-12">'
                                                    html += '<div class="row g-1 align-items-center justify-content-center">'
                                                        elem.reqs.forEach(req => {
                                                            let reqElem = window.app.game.getElem(req.id)
                                                            html += '<div class="col-auto">'
                                                                html += '<span class="text-white">' + i18next.t(reqElem.label) + '</span>'
                                                                html += ' <small>(' + i18next.t('cat_' + reqElem.cat) + ')</small>'
                                                            html += '</div>'
                                                        })
                                                    html += '</div>'
                                                html += '</div>'
                                            html += '</div>'
                                        html += '</div>'
                                    }
                                html += '</div>'
                            html += '</div>'
                        html += '</div>'
                    })
                html += '</div>'
            html += '</div>'
        }
        //---
        return html
    }
    //---
    refreshTabMissions() {
        //---
        let html = ''
        //---
        window.app.game.scenario.data.catMissions.forEach(cat => {
            html += this.getContainerHtml(i18next.t('cat_' + cat), window.app.game.elems.filter(elem => elem.cat == cat && (this.showLocked ? true : elem.unlocked)), cat)
        })
        //---
        let node = document.getElementById('missions-tab-pane')                
        node.innerHTML = html
        //---
        let tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
        let tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
    }
    //---
    refreshTabItems() {
        //---
        let html = ''
        //---
        window.app.game.scenario.data.catItems.forEach(cat => {
            html += this.getContainerHtml(i18next.t('cat_' + cat), window.app.game.elems.filter(elem => elem.cat == cat && (this.showLocked ? true : elem.unlocked)), cat)
        })
        //---
        let node = document.getElementById('items-tab-pane')                
        node.innerHTML = html
        //---
        let tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
        let tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
    }
    //---
    refreshTabScenarii() {
        //---
        let html = ''
        //---
        let scenarios = window.app.game.scenarios.filter(scenario => scenario.ready)
        scenarios.forEach(scenario => {
            html += '<div class="col-12 col-md-6 col-lg-6 col-xl-4">'
                html += '<button type="button" class="w-100 btn btn-light text-start' + (scenario.id == window.app.game.scenario.id ? ' border-warning' : '') + '" onclick="if (confirm(\'' + i18next.t('text_changeScenarioConfirm') + '\')) window.app.doClick(\'selectScenario\', { scenarioId:\'' + scenario.id + '\' })">'
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
                                    if (scenario.id == window.app.game.scenario.id && scenario.startDate) html += '<span class="text-white">' + new Date(scenario.startDate).toLocaleString() + '</span>'
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
    draw() {
        //---
        if (this.selectedTab == 'missions') {
            //---
            let elems = window.app.game.elems.filter(elem => window.app.game.scenario.data.catMissions.includes(elem.cat) && (this.showLocked ? true : elem.unlocked))
            elems.forEach(elem => {
                //---
                if (elem.count < 1 && elem.unlocked == true) {
                    //---
                    elem.costs.forEach(cost => {
                        //---
                        let style = 'badge d-flex align-items-center justify-content-center'
                        if (window.app.game.getAvailableCount(cost.id) < cost.count) style += ' text-bg-danger'
                        else style += ' text-bg-light'
                        //---
                        let node = document.getElementById('missionNeedCount-' + elem.id + '-' + cost.id)
                        if (node.className != style) node.className = style
                    })
                    //---
                    let style = 'btn btn-warning'
                    if (!window.app.game.canCompleteMission(elem.id)) style += ' disabled'
                    //---
                    let node = document.getElementById('missionBtn-' + elem.id)
                    if (node.className != style) node.className = style
                }
            })
        }
        else if (this.selectedTab == 'items') {
            //---
            let items = window.app.game.elems.filter(elem => elem.id != 'machineManual' && (this.showLocked ? true : elem.unlocked) && window.app.game.scenario.data.catItems.includes(elem.cat))
            items.forEach(item => {
                //---
                if (item.unlocked == true) {
                    //---
                    let html = '', style = '', node, count
                    //---
                    if (item.lines) {
                        //---
                        if (item.prod > 0) html = '+' + formatNumber(item.prod) + ' <small class="opacity-50">/s</small>'
                        else if (item.prod <= 0) html = formatNumber(item.prod) + ' <small class="opacity-50">/s</small>'
                        node = document.getElementById('itemProd-' + item.id)
                        if (node.innerHTML != html) node.innerHTML = html
                        //---
                        style = 'badge justify-content-end'
                        if (item.prod > 0) style += ' text-success'
                        else if (item.prod < 0) style += ' text-bg-danger'
                        else style += ' text-normal'
                        if (node.className != style) node.className = style
                    }
                    //---
                    html = formatNumber(item.count, 2)
                    node = document.getElementById('itemCount-' + item.id)
                    if (node.innerHTML != html) node.innerHTML = html
                    //---
                    let max = window.app.game.getMax(item.id)
                    style = 'badge justify-content-end'
                    if (max > 0 && item.count >= max) style += ' text-bg-danger'
                    else if (item.count > 0) style += ' text-bg-light'
                    else style += ' text-normal'
                    if (node.className != style) node.className = style
                    //---
                    if (item.cat == 'machine' || item.cat == 'storer' || (item.cat == 'energy' && item.id != 'itemElectricity')) {
                        //---
                        let node = document.getElementById('itemAvailableCount-' + item.id)
                        let count = window.app.game.getAvailableCount(item.id)
                        //---
                        html = formatNumber(count, 2)
                        if (node.innerHTML != html) node.innerHTML = html
                        //---
                        style = 'badge justify-content-end'
                        if (count > 0) style += ' text-success'
                        else style += ' text-bg-light text-normal'
                        if (node.className != style) node.className = style
                    }
                    //---
                    if (item.recipeId) {
                        let recipe = window.app.game.scenario.data.elems.find(elem => elem.id == item.recipeId)
                        if (recipe) {
                            if (recipe.inputs) {
                                //---
                                recipe.inputs.forEach(input => {
                                    //---
                                    let inputElem = window.app.game.getElem(input.id)
                                    //---
                                    let node = document.getElementById('recipeInputCountValue-' + recipe.id + '-' + input.id)
                                    //---
                                    let style = 'badge d-flex align-items-center justify-content-center'
                                    if (input.count > window.app.game.getAvailableCount(input.id)) style += ' text-bg-danger'
                                    else style += ' text-bg-light'
                                    //---
                                    node = document.getElementById('recipeInputCount-' + recipe.id + '-' + input.id)
                                    if (node.className != style) node.className = style
                                })
                            }
                        }
                    }
                    //---
                    if (item.lines && item.lines.length > 0) {
                        let unlocked = 0
                        item.lines.forEach(lineId => {
                            let line = window.app.game.getElem(lineId)
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
                                let line = window.app.game.getElem(lineId)
                                if (line.unlocked) {
                                    let machine = window.app.game.getElem(line.machineId)
                                    if (machine.id == 'machineManual') {
                                        //---
                                        style = 'btn btn-warning'
                                        if (!window.app.game.canStartManual(line.id)) style += ' disabled'
                                        node = document.getElementById('manualStartBtn-' + line.id)
                                        if (node.className != style) node.className = style
                                        //---
                                        style = 'btn btn-danger'
                                        if (!window.app.game.canStopManual(line.id)) style += ' disabled'
                                        node = document.getElementById('manualStopBtn-' + line.id)
                                        if (node.className != style) node.className = style
                                    }
                                    else {
                                        //---
                                        if (machine.energy) {
                                            //---
                                            node = document.getElementById('lineEnergyCountValue-' + line.id)
                                            count = line.getMachineCount() * machine.energy.count
                                            html = '-' + formatNumber(count) + ' <small class="opacity-50">/s</small>'
                                            if (node.innerHTML != html) node.innerHTML = html
                                            //---
                                            node = document.getElementById('lineEnergyCount-' + line.id)
                                            style = 'badge'
                                            if (count > window.app.game.getAvailableCount(machine.energy.id)) style += ' text-bg-danger'
                                            if (node.className != style) node.className = style
                                        }
                                        //---
                                        html = formatNumber(line.count)
                                        node = document.getElementById('lineCount-' + line.id)
                                        if (node.innerHTML != html) node.innerHTML = html
                                        style = ''
                                        if (line.count > 0) style += 'text-white'
                                        if (node.className != style) node.className = style
                                        //---
                                        style = 'btn btn-danger'
                                        if (!window.app.game.canRemoveLine(line.id)) style += ' disabled'
                                        node = document.getElementById('lineRemoveBtn-' + line.id)
                                        if (node.className != style) node.className = style
                                        //---
                                        style = 'btn btn-warning'
                                        if (!window.app.game.canAddLine(line.id)) style += ' disabled'
                                        node = document.getElementById('lineAddBtn-' + line.id)
                                        if (node.className != style) node.className = style
                                    }
                                }
                            })
                        }
                    }
                    //---
                    if (item.storage) {
                        //---
                        html = formatNumber(window.app.game.getMax(item.id))
                        node = document.getElementById('itemMax-' + item.id)
                        if (node.innerHTML != html) node.innerHTML = html
                        //---
                        if (item.cat == 'machine' || item.cat == 'storer' || (item.cat == 'energy' && item.id != 'itemElectricity')) {
                            //---
                            html = formatNumber(window.app.game.getUsedCount(item.id))
                            node = document.getElementById('itemUsedCount-' + item.id)
                            if (node.innerHTML != html) node.innerHTML = html
                        }
                        //---
                        if (item.storage.storerId) {
                            let storer = window.app.game.getElem(item.storage.storerId)
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
                                if (!window.app.game.canRemoveStorer(item.id)) style += ' disabled'
                                node = document.getElementById('itemRemoveStorerBtn-' + item.id)
                                if (node.className != style) node.className = style
                                //---
                                style = 'btn btn-warning'
                                if (!window.app.game.canAddStorer(item.id)) style += ' disabled'
                                node = document.getElementById('itemAddStorerBtn-' + item.id)
                                if (node.className != style) node.className = style
                            }
                        }
                    }
                }
            })
        }
    }
    //---
    doClick(action, data) {
        //---
        if (action == 'selectTab') this.selectedTab = data.tabId
        //---
        else if (action == 'toggleShowLocked') {
            //---
            this.showLocked = !this.showLocked
            //---
            this.refreshTabMissions()
            this.refreshTabItems()
        }
        //---
        else if (action == 'toggleCollapse') window.app.game.toggleCollapse(data.elemId)
        //---
        else if (action == 'completeMission') {
            //---
            window.app.game.completeMission(data.missionId)
            //---
            this.refreshTabMissions()
            this.refreshTabItems()
        }
        //---
        else if (action == 'startManual') window.app.game.startManual(data.manualId)
        else if (action == 'stopManual') window.app.game.stopManual(data.manualId)
        //---
        else if (action == 'addLine') window.app.game.addLine(data.elemId)
        else if (action == 'removeLine') window.app.game.removeLine(data.elemId)
        //---
        else if (action == 'addStorer') window.app.game.addStorer(data.elemId)
        else if (action == 'removeStorer') window.app.game.removeStorer(data.elemId)
        //---
        else if (action == 'selectScenario') {
            //---
            window.app.game.loadScenario(data.scenarioId)
            window.app.game.scenario.startDate = Date.now()
            //---
            this.refreshTabMissions()
            this.refreshTabItems()
            //---
            this.selectedTab = 'missions'
            //---
            window.app.save()
            //---
            window.location.replace('')
        }
        //---
        else if (action == 'setLineSelectCount') window.app.game.setLineSelectCount(data)
        //---
        else if (action == 'setStorageSelectCount') window.app.game.setStorageSelectCount(data)
        //---
        else if (action == 'expandAll') {
            //---
            let items = window.app.game.elems.filter(elem => elem.cat == data.cat && (this.showLocked ? true : elem.unlocked))
            items.forEach(item => { item.collapsed = false })
            //---
            this.refreshTabItems()
            this.refreshTabMissions()
        }
        else if (action == 'collapseAll') {
            //---
            let items = window.app.game.elems.filter(elem => elem.cat == data.cat && (this.showLocked ? true : elem.unlocked))
            items.forEach(item => { item.collapsed = true })
            //---
            this.refreshTabItems()
            this.refreshTabMissions()
        }
    }
}
