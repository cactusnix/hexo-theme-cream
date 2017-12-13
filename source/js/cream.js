// 自加载
$(function(){
    // console.log('test');
    'use strict';

    var sidebar = $('#sidebar'),
        menu = $('#siderbar_trigger');
    menu.on('click', function() {
        sidebar.fadeIn();
    })
    sidebar.on('click', function() {
        sidebar.fadeOut();
    })
})
