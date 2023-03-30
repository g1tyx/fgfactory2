//---
var TplScreen = function(data) {
    //---
    let tabs = [
        { id:'missions', label:'tab_missions', img:'fas fa-dot-circle', },
        { id:'items', label:'tab_items', img:'fas fa-boxes', },
        { id:'machines', label:'tab_machines', img:'fas fa-industry', },
        { id:'techs', label:'tab_techs', img:'fas fa-flask', },
    ]
    //---
    let html = ''
    //---
    html += '<div class="position-relative border" style="width:320px; height:520px;">'
        html += '<div class="position-absolute bg-dark d-flex align-items-center" style="top:0; width:100%; height:48px;">'
            html += '<div class="container col-12">'
                html += '<div class="row gx-2 align-items-center">'
                    html += '<div class="col-auto"><img src="logo.png" width="24px" height="24px" class="rounded"></div>'
                    html += '<div class="col"><span class="h6 text-white">' + i18next.t('game_title') + '</span></div>'
                    html += '<div class="col-auto">'
                        html += '<div class="dropdown">'
                            html += '<button type="button" class="btn border-0" data-bs-toggle="dropdown" aria-expanded="false">'
                                html += '<i class="fas fa-bars"></i>'
                            html += '</button>'
                            html += '<div class="dropdown-menu">'
                                html += '<div class="px-3 py-1">'
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
                                            html += '<a href="https://discord.gg/3UkgeeT9CV" target="_blank" data-bs-toggle="tooltip" data-bs-title="' + i18next.t('text_discord') + '">'
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
            html += '<div class="tab-pane scrollbar fade' + (data.selectedTab == 'items' ? ' show active' : '') + '" id="items-tab-pane" role="tabpanel" aria-labelledby="items-tab" tabindex="0">'
                html += '<div class="container py-3">'
                    html += '<div class="row g-1 flex-wrap justify-content-center">'
                        DATA.items.forEach(item => {
                            html += '<div class="col-auto">'
                                html += '<button class="btn btn-dark position-relative" onclick="window.App.doClick(\'displayItem\', { itemId:\'' + item.id + '\' })">'
                                    html += '<img src="' + item.img + '" width="24px" height="24px">'
                                    html += '<small class="position-absolute bottom-0 end-0 pe-1">' + formatNumber(item.count) + '</small>'
                                html += '</button>'
                            html += '</div>'
                        })
                    html += '</div>'
                html += '</div>'
            html += '</div>'
            html += '<div class="tab-pane scrollbar fade' + (data.selectedTab == 'techs' ? ' show active' : '') + '" id="techs-tab-pane" role="tabpanel" aria-labelledby="techs-tab" tabindex="0">'
                html += '<div class="container py-3">'
                    html += '<div class="row g-1 flex-wrap justify-content-center">'
                        DATA.techs.forEach(tech => {
                            html += '<div class="col-auto">'
                                html += '<button class="btn btn-dark position-relative" onclick="window.App.doClick(\'displayItem\', { itemId:\'' + tech.id + '\' })">'
                                    html += '<img src="' + tech.img + '" width="24px" height="24px">'
                                    html += '<small class="position-absolute bottom-0 end-0 pe-1">' + formatNumber(tech.count) + '</small>'
                                html += '</button>'
                            html += '</div>'
                        })
                    html += '</div>'
                html += '</div>'
            html += '</div>'
        html += '</div>'
        html += '<div class="position-absolute bg-dark" style="bottom:0; width:100%; height:48px;">'
            html += '<div class="h-100 nav nav-tabs">'
                tabs.forEach(tab => {
                    html += '<div class="nav-item" style="width:25%;">'
                        html += '<button type="button" class="nav-link p-1' + (data.selectedTab == tab.id ? ' active' : '') + '" data-bs-toggle="tab" data-bs-target="#' + tab.id + '-tab-pane"role="tab" aria-controls="' + tab.id + '-tab-pane" onclick="window.App.doClick(\'selectTab\', { tabId:\'' + tab.id + '\' })">'
                            html += '<div class="text-center"><i class="' + tab.img + '"></i></div>'
                            html += '<div class="text-center small"><span>' + i18next.t(tab.label) + '</span></div>'
                        html += '</button>'
                    html += '</div>'
                })
            html += '</div>'
        html += '</div>'
    html += '</div>'
    html += '<div id="ModalItem" class="modal fade"></div>'
    //---
    return html
}
//---
class Screen {
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
        node.innerHTML = TplScreen(this)
        //---
        let tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
        let tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
        //---
        let triggerTabList = document.querySelectorAll('[data-bs-toggle="tab"]')
        let tabList = [...triggerTabList].map(tabTriggerEl => new bootstrap.Tab(tabTriggerEl))
        //---
        window.App.saveInterval = setInterval(() => { window.App.save() }, 30000)
    }
    //---
    doClick(action, data) {
        //---
        if (action == 'selectTab') this.selectTab(data)
        else if (action == 'displayItem') this.displayItem(data)
    }
    //---
    selectTab(data) {
        //---
        this.selectedTab = data.tabId
    }
    //---
    displayItem(data) {
        //---
        let item = DATA.items.find(item => item.id == data.itemId)
        if (!item) item = DATA.techs.find(item => item.id == data.itemId)
        //---
        let modalElement = document.getElementById('ModalItem')
        //---
        let html = ''
        html += '<div class="modal-dialog">'
            html += '<div class="modal-content">'
                html += '<div class="modal-header">'
                    html += '<div class="col-auto pe-2"><img src="' + item.img + '" width="24px" height="24px"></div>'
                    html += '<div class="col"><span class="h6 text-white">' + i18next.t(item.label) + '</span></div>'
                    html += '<div class="col-auto">'
                        html += '<button type="button" class="btn p-0 border-0" data-bs-dismiss="modal">'
                           html += '<i class="fas fa-fw fa-times"></i>'
                        html += '</button>'
                    html += '</div>'
                html += '</div>'
                html += '<div class="list-group list-group-flush">'
                    if (item.cases || item.speed || item.energy || item.pollution || item.moduleSlots) {
                        html += '<div class="list-group-item bg-transparent">'
                            html += '<div class="mb-1"><span class="fw-semibold">' + i18next.t('label_stats') + '</span></div>'
                            if (item.cases) {
                                html += '<div class="row g-1 align-items-center">'
                                    html += '<div class="col"><small>' + i18next.t('label_cases') + '</small></div>'
                                    html += '<div class="col-auto"><span class="text-white">' + formatNumber(item.cases) + '</span></div>'
                                html += '</div>'
                            }
                            if (item.speed) {
                                html += '<div class="row g-1 align-items-center">'
                                    html += '<div class="col"><small>' + i18next.t('label_speed') + '</small></div>'
                                    html += '<div class="col-auto"><span class="text-white">' + formatNumber(item.speed) + '</span></div>'
                                html += '</div>'
                            }
                            if (item.energy) {
                                let energyItem = DATA.items.find(elem => elem.id == item.energy.id)
                                html += '<div class="row g-1 align-items-center">'                                
                                    html += '<div class="col"><small>' + i18next.t('label_energy') + '</small></div>'
                                    html += '<div class="col-auto">'
                                        html += '<img src="' + energyItem.img + '" width="16px" height="16px">'
                                        html += '<span class="ms-2"><span class="text-white">' + formatNumber(item.energy.count) + '</span><small> s</small></span>'
                                    html += '</div>'
                                html += '</div>'
                            }
                            if (item.pollution) {
                                html += '<div class="row g-1 align-items-center">'
                                    html += '<div class="col"><small>' + i18next.t('label_pollution') + '</small></div>'
                                    html += '<div class="col-auto"><span class="text-white">' + formatNumber(item.pollution) + '</span><small> m</small></div>'
                                html += '</div>'
                            }
                            if (item.moduleSlots) {
                                html += '<div class="row g-1 align-items-center">'
                                    html += '<div class="col"><small>' + i18next.t('label_modules') + '</small></div>'
                                    html += '<div class="col-auto"><span class="text-white">' + formatNumber(item.moduleSlots) + '</span></div>'
                                html += '</div>'
                            }
                        html += '</div>'
                    }
                    if (item.bonuses) {
                        html += '<div class="list-group-item bg-transparent">'
                            html += '<span class="fw-semibold">' + i18next.t('label_bonuses') + '</span>'
                            if (item.bonuses.energy) {
                                let bonus = (item.bonuses.energy * 100) - 100
                                html += '<div class="row g-1 align-items-center">'
                                    html += '<div class="col"><small>' + i18next.t('label_energy') + '</small></div>'
                                    html += '<div class="col-auto"><span class="text-white">' + (bonus > 0 ? '+' : '') + formatNumber(bonus) + '</span><small> %</small></div>'
                                html += '</div>'
                            }
                            if (item.bonuses.speed) {
                                let bonus = (item.bonuses.speed * 100) - 100
                                html += '<div class="row g-1 align-items-center">'
                                    html += '<div class="col"><small>' + i18next.t('label_speed') + '</small></div>'
                                    html += '<div class="col-auto"><span class="text-white">' + (bonus > 0 ? '+' : '') + formatNumber(bonus) + '</span><small> %</small></div>'
                                html += '</div>'
                            }
                            if (item.bonuses.output) {
                                let bonus = (item.bonuses.output * 100) - 100
                                html += '<div class="row g-1 align-items-center">'
                                    html += '<div class="col"><small>' + i18next.t('label_output') + '</small></div>'
                                    html += '<div class="col-auto"><span class="text-white">' + (bonus > 0 ? '+' : '') + formatNumber(bonus) + '</span><small> %</small></div>'
                                html += '</div>'
                            }
                            if (item.bonuses.pollution) {
                                let bonus = (item.bonuses.pollution * 100) - 100
                                html += '<div class="row g-1 align-items-center">'
                                    html += '<div class="col"><small>' + i18next.t('label_pollution') + '</small></div>'
                                    html += '<div class="col-auto"><span class="text-white">' + (bonus > 0 ? '+' : '') + formatNumber(bonus) + '</span><small> %</small></div>'
                                html += '</div>'
                            }
                        html += '</div>'
                    }
                    if (item.recipe) {
                        html += '<div class="list-group-item bg-transparent">'
                            html += '<span class="fw-semibold">' + i18next.t('label_recipe') + '</span>'
                            html += '<div class="mt-2 row g-1 align-items-center justify-content-center">'
                            if (item.recipe.inputs) {
                                item.recipe.inputs.forEach(input => {
                                    let inputItem = DATA.items.find(item => item.id == input.id)
                                    html += '<div class="col-auto">'
                                        html += '<button type="button" class="position-relative btn border-0">'
                                           html += '<img src="' + inputItem.img + '" width="24px" height="24px">'
                                           html += '<small class="position-absolute bottom-0 end-0 pe-1">' + formatNumber(input.count) + '</small>'
                                        html += '</button>'
                                    html += '</div>'
                                })
                            }
                            else {
                                html += '<div class="col-auto">'
                                    html += '<div class="lh-1 text-center mx-2">&Oslash;</div>'
                                html += '</div>'
                            }
                            html += '<div class="col-auto">'
                                html += '<div class="lh-1 text-center mx-2"><small class="text-white">' + formatNumber(item.recipe.time) + '</small><small> s</small></div>'
                                html += '<div class="lh-1 text-center mx-2"><i class="fas fa-fw fa-long-arrow-alt-right"></i></div>'
                            html += '</div>'
                            html += '<div class="col-auto">'
                                html += '<div class="position-relative p-1">'
                                   html += '<img src="' + item.img + '" width="24px" height="24px">'
                                   html += '<small class="position-absolute bottom-0 end-0 pe-1 text-white">' + formatNumber(item.recipe.output) + '</small>'
                                html += '</div>'
                            html += '</div>'
                            html += '</div>'
                        html += '</div>'
                    }
                    if (item.manual) {
                        html += '<div class="list-group-item bg-transparent">'
                            html += '<span class="fw-semibold">' + i18next.t('label_manual') + '</span>'
                            html += '<div class="mt-2 row gx-2">'
                                html += '<div class="col">'
                                     html += '<div class="lh-1 text-end"><small class="text-white">' + formatTime(item.recipe.time / 2) + '</small></div>'
                                     html += '<div class="mt-1 progress" style="height:3px;">'
                                        html += '<div class="progress-bar bg-success" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>'
                                     html += '</div>'
                                html += '</div>'
                                html += '<div class="col-auto">'
                                    html += '<button type="button" class="btn btn-primary border-0">'
                                        html += '<i class="fas fa-fw fa-play"></i>'
                                    html += '</button>'
                                html += '</div>'
                            html += '</div>'
                        html += '</div>'
                    }
                    if (item.storage && item.storage.id) {
                        html += '<div class="list-group-item bg-transparent">'
                            html += '<span class="fw-semibold">' + i18next.t('label_storage') + '</span>'
                            html += '<div class="mt-2 row gx-2 align-items-center">'
                                let storageItem = DATA.items.find(elem => elem.id == item.storage.id)
                                html += '<div class="col-auto">'
                                    html += '<button type="button" class="position-relative btn border-0">'
                                       html += '<img src="' + storageItem.img + '" width="24px" height="24px">'
                                       html += '<small class="position-absolute bottom-0 end-0 pe-1">1</small>'
                                    html += '</button>'
                                html += '</div>'
                                html += '<div class="col">'
                                    html += '<div class="lh-1 small mx-2">+' + formatNumber(item.storage.count) + '</div>'
                                html += '</div>'
                                html += '<div class="col-auto">'
                                    html += '<div class="lh-1 small text-center mx-2">0</div>'
                                html += '</div>'
                                html += '<div class="col-auto">'
                                    html += '<button type="button" class="btn border-0">'
                                        html += '<i class="fas fa-fw fa-minus-circle"></i>'
                                    html += '</button>'
                                html += '</div>'
                                html += '<div class="col-auto">'
                                    html += '<button type="button" class="btn btn-primary border-0">'
                                        html += '<i class="fas fa-fw fa-plus-circle"></i>'
                                    html += '</button>'
                                html += '</div>'
                            html += '</div>'
                        html += '</div>'
                    }
                    if (item.machines) {
                        html += '<div class="list-group-item bg-transparent">'
                            html += '<span class="fw-semibold">' + i18next.t('label_productionLine') + '</span>'
                            item.machines.forEach(machine => {
                                let machineItem = DATA.items.find(item => item.id == machine)
                                let time = (item.recipe.time / machineItem.speed)
                                html += '<div class="mt-2 row gx-2">'
                                    html += '<div class="col">'
                                        html += '<div class="row g-1 align-items-center">'
                                            html += '<div class="col-auto">'
                                                html += '<button type="button" class="position-relative btn border-0">'
                                                   html += '<img src="' + machineItem.img + '" width="24px" height="24px">'
                                                   html += '<small class="position-absolute bottom-0 end-0 pe-1">1</small>'
                                                html += '</button>'
                                            html += '</div>'
                                            if (machineItem.energy) {
                                                let energyItem = DATA.items.find(item => item.id == machineItem.energy.id)
                                                html += '<div class="col-auto">'
                                                    html += '<button type="button" class="position-relative btn border-0">'
                                                       html += '<img src="' + energyItem.img + '" width="24px" height="24px">'
                                                       html += '<small class="position-absolute bottom-0 end-0 pe-1">' + formatNumber(time * machineItem.energy.count) + '</small>'
                                                    html += '</button>'
                                                html += '</div>'
                                            }
                                            html += '<div class="col-auto">'
                                                html += '<div class="lh-1 text-center mx-2"><small class="text-white">' + formatNumber(time) + '</small><small> s</small></div>'
                                            html += '</div>'
                                        html += '</div>'
                                    html += '</div>'
                                    html += '<div class="col-auto">'
                                        html += '<button type="button" class="btn btn-primary border-0">'
                                            html += '<i class="fas fa-fw fa-plus-circle"></i>'
                                        html += '</button>'
                                    html += '</div>'
                                html += '</div>'
                            })
                        html += '</div>'
                    }
                html += '</div>'
            html += '</div>'
        html += '</div>'
        //---
        modalElement.innerHTML = html
        //---
        let itemModal = new bootstrap.Modal(modalElement)
        itemModal.show()
    }
}
