//---
var TplScreenLoading = function() {
    //---
    let html = ''
    //---
    html += '<div class="position-absolute top-0 bottom-0 start-0 end-0 d-flex align-items-center justify-content-center">'
        html += '<div class="px-1 py-3">'
            html += '<div class="row g-3 flex-column">'
                html += '<div class="col-12 text-center">'
                    html += '<img src="logo.png" width="64px" height="64px" />'
                html += '</div>'
                html += '<div class="col-12 text-center">'
                    html += '<div class="h4 text-white">' + i18next.t('game_title') + '</div>'
                html += '</div>'
                html += '<div class="col-12 flicker text-center">'
                    html += '<span class="text-primary">' + i18next.t('screenLoading_text') + '</span>'
                html += '</div>'
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
        node.innerHTML = TplScreenLoading()
    }
}