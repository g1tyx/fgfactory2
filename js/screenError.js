//---
var TplScreenError = function(data) {
    //---
    let html = ''
    //---
    html += '<div class="position-absolute top-0 bottom-0 start-0 end-0 scrollbar">'
        html += '<div class="h-100 px-3 py-3 d-flex align-items-center justify-content-center">'
            html += '<div class="row g-2 justify-content-center">'
                html += '<div class="col-12 text-center">'
                    html += '<img src="logo.png" width="64px" height="64px" />'
                    html += '<div class="mt-1 h4 text-white">' + i18next.t('game_title') + '</div>'
                html += '</div>'
                html += '<div class="col-12">'
                    html += '<div class="p-1 rounded text-bg-danger text-center">'
                        html += '<div>' + i18next.t('screenError_text') + '</div>'
                        html += '<div>"' + data.error + '"</div>'
                    html += '</div>'
                html += '</div>'
                html += '<div class="col-12 text-center">'
                    html += '<span class="text-normal">' + i18next.t('screenError_info1') + '</span>'
                html += '</div>'
                html += '<div class="col-4 d-flex justify-content-center">'
                    html += '<a href="https://discord.gg/3UkgeeT9CV" target="_blank" class="w-100 btn btn-sm btn-primary">'
                        html += '<span><i class="fab fa-fw fa-discord"></i></span>'
                        html += '<span class="ms-1">Discord</span>'
                    html += '</a>'
                html += '</div>'
                html += '<div class="col-12 d-flex justify-content-center">'
                    html += '<textarea spellcheck="false" rows="3" class="form-control small text-center" style="max-width:512px;" disabled readonly>' + window.App.getLocalData() + '</textarea>'
                html += '</div>'
                html += '<div class="col-12">'
                    html += '<div class="row g-2 align-items-center justify-content-center">'
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
                html += '<div class="col-12 text-center">'
                    html += '<span class="text-normal">' + i18next.t('screenError_info2') + '</span>'
                html += '</div>'
                html += '<div class="col-4 d-flex justify-content-center">'
                    html += '<button type="button" class="w-100 btn btn-sm btn-danger" onclick="window.App.showModal(\'modalWipe\')">'
                        html += '<span><i class="fas fa-fw fa-skull"></i></span>'
                        html += '<span class="ms-1">' + i18next.t('btn_wipeSave') + '</span>'
                    html += '</button>'
                html += '</div>'
            html += '</div>'
        html += '</div>'
        html += '<div id="toast-container" class="toast-container position-fixed bottom-0 end-0 p-3">'
            html += TplToastExport()
        html += '</div>'
    html += '</div>'
    html += TplModalWipe()
    //---
    return html
}
//---
class ScreenError {
    //---
    init(data) {
        //---
        let node = document.getElementById('screen')
        node.innerHTML = TplScreenError(data)
    }
}