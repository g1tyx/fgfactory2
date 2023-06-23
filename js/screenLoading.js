//---
var TplScreenLoading = function() {
    //---
    let html = ''
    //---
    html += '<div class="p-3" style="max-width:512px;">'
        html += '<div class="row g-2">'
            html += '<div class="col-12 text-center">'
                html += '<img src="logo.png" width="48px" height="48px" />'
            html += '</div>'
            html += '<div class="col-12 text-center">'
                html += '<span class="h5 text-white">' + i18next.t('game_title') + '</span>'
            html += '</div>'
            html += '<div class="col-12 flicker text-center">'
                html += '<span class="text-warning">' + i18next.t('screenLoading_text') + '</span>'
            html += '</div>'
        html += '</div>'
    html += '</div>'
    //---
    return html
}
//---
class ScreenLoading {
    //---
    init() {
        //---
        let node = document.getElementById('screen')
        node.className = 'position-absolute top-0 bottom-0 start-0 end-0 d-flex align-items-center justify-content-center'
        node.innerHTML = TplScreenLoading()
    }
}