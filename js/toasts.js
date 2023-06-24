//---
var TplToastExport = function() {
    //---
    let html = ''
    //---
    html += '<div id="toastExport" class="toast align-items-center text-bg-success border-0" role="alert" aria-live="assertive" aria-atomic="true">'
        html += '<div class="d-flex">'
            html += '<div class="toast-body">'
                html += i18next.t('toast_export')
            html += '</div>'
            html += '<button type="button" class="btn-close p-2" data-bs-dismiss="toast" aria-label="' + i18next.t('word_Close') + '"><i class="text-black fas fa-times"></i></button>'
        html += '</div>'
    html += '</div>'
    //---
    return html
}
//---
var TplToastImportEmpty = function() {
    //---
    let html = ''
    //---
    html += '<div id="toastImportEmpty" class="toast align-items-center text-bg-danger border-0" role="alert" aria-live="assertive" aria-atomic="true">'
        html += '<div class="d-flex">'
            html += '<div class="toast-body">'
                html += i18next.t('toast_importEmpty')
            html += '</div>'
            html += '<button type="button" class="btn-close p-2" data-bs-dismiss="toast" aria-label="' + i18next.t('word_Close') + '"><i class="text-white fas fa-times"></i></button>'
        html += '</div>'
    html += '</div>'
    //---
    return html
}
//---
var TplToastImportCorrupted = function() {
    //---
    let html = ''
    //---
    html += '<div id="toastImportCorrupted" class="toast align-items-center text-bg-danger border-0" role="alert" aria-live="assertive" aria-atomic="true">'
        html += '<div class="d-flex">'
            html += '<div class="toast-body">'
                html += i18next.t('toast_importCorrupted')
            html += '</div>'
            html += '<button type="button" class="btn-close p-2" data-bs-dismiss="toast" aria-label="' + i18next.t('word_Close') + '"><i class="text-white fas fa-times"></i></button>'
        html += '</div>'
    html += '</div>'
    //---
    return html
}
