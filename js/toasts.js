//---
var TplToastExport = function() {
    //---
    let html = ''
    //---
    html += '<div id="toastExport" class="toast align-items-center text-bg-success border-0" role="alert" aria-live="assertive" aria-atomic="true">'
        html += '<div class="d-flex">'
            html += '<div class="toast-body d-flex align-items-center">'
                html += i18next.t('toast_export')
                html += '<button type="button" class="ms-3 btn bg-transparent p-0 border-0" data-bs-dismiss="toast" aria-label="Close"><i class="text-white fas fa-times"></i></button>'
            html += '</div>'
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
            html += '<div class="toast-body d-flex align-items-center">'
                html += i18next.t('toast_importEmpty')
                html += '<button type="button" class="ms-3 btn bg-transparent p-0 border-0" data-bs-dismiss="toast" aria-label="Close"><i class="text-white fas fa-fw fa-times"></i></button>'
            html += '</div>'
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
            html += '<div class="toast-body d-flex align-items-center">'
                html += i18next.t('toast_importCorrupted')
                html += '<button type="button" class="ms-3 btn bg-transparent p-0 border-0" data-bs-dismiss="toast" aria-label="Close"><i class="text-white fas fa-fw fa-times"></i></button>'
            html += '</div>'
        html += '</div>'
    html += '</div>'
    //---
    return html
}
