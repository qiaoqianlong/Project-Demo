import $ from 'jquery'

$(function () {
    $('li:odd').css('backgroundColer', 'red')
    $('li:even').css('backgroundColer', 'cyan')
})