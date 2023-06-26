//---
var TplScreenError = function() {
    //---
    let html = ''
    //---
    html += '<div class="p-3" style="max-width:512px;">'
        html += '<div class="row g-2 justify-content-center">'
            html += '<div class="col-12 text-center">'
                html += '<img src="logo.png" width="48px" height="48px" />'
            html += '</div>'
            html += '<div class="col-12 text-center">'
                html += '<span class="h5 text-white">' + i18next.t('game_title') + '</span>'
            html += '</div>'
            html += '<div class="col-12 text-center">'
                html += '<span class="fs-6 text-danger">' + i18next.t('screenError_text') + '</span>'
            html += '</div>'
            html += '<div class="col-12 text-center">'
                html += '<span class="text-normal">' + i18next.t('screenError_info1') + '</span>'
            html += '</div>'
            html += '<div class="col-4 col-lg-3">'
                html += '<a href="https://discord.gg/ZXrggavUpv" target="_blank" class="w-100 btn btn-warning">'
                    html += '<span><i class="fab fa-fw fa-discord"></i></span>'
                    html += '<span class="ms-1">Discord</span>'
                html += '</a>'
            html += '</div>'
            html += '<div class="col-12">'
                html += '<textarea spellcheck="false" rows="3" class="form-control" disabled readonly>' + window.App.getLocalData() + '</textarea>'
            html += '</div>'
            html += '<div class="col-4 col-lg-3">'
                html += '<button type="button" class="w-100 btn btn-warning" onclick="window.App.exportSave()">'
                    html += '<span><i class="fas fa-fw fa-copy"></i></span>'
                    html += '<span class="ms-1">' + i18next.t('btn_exportSave') + '</span>'
                html += '</button>'
            html += '</div>'
            html += '<div class="col-4 col-lg-3">'
                html += '<button type="button" class="w-100 btn btn btn-warning" onclick="window.App.downloadSave()">'
                    html += '<span><i class="fas fa-fw fa-download"></i></span>'
                    html += '<span class="ms-1">' + i18next.t('btn_downloadSave') + '</span>'
                html += '</button>'
            html += '</div>'
            html += '<div class="col-12 text-center">'
                html += '<span class="text-normal">' + i18next.t('screenError_info2') + '</span>'
            html += '</div>'
            html += '<div class="col-4 col-lg-3">'
                html += '<button type="button" class="w-100 btn btn-danger" onclick="window.App.showModal(\'modalWipe\')">'
                    html += '<span><i class="fas fa-fw fa-skull"></i></span>'
                    html += '<span class="ms-1">' + i18next.t('btn_wipeSave') + '</span>'
                html += '</button>'
            html += '</div>'
        html += '</div>'
    html += '</div>'
    html += '<div id="toast-container" class="toast-container position-fixed bottom-0 end-0 p-3">'
        html += TplToastExport()
    html += '</div>'
    html += TplModalWipe()
    //---
    return html
}
//---
class ScreenError {
    //---
    init() {
        //---
        let node = document.getElementById('screen')
        node.className = 'position-absolute top-0 bottom-0 start-0 end-0 d-flex align-items-center justify-content-center'
        node.innerHTML = TplScreenError()
    }
}