﻿$(document).ready(function () {

    $('#menu-button').click(function (e) {
        e.preventDefault;
        $('body').toggleClass('sidebar');
    })

    $('#cache').click(function (e) {
        e.preventDefault;
        $('body').toggleClass('sidebar');
    })

    $('div.content ul li a').click(function (e) {
        e.preventDefault;
        $('body').toggleClass('sidebar');
    })

    $(window).scroll(function (e) {
        e.preventDefault;

        if($('nav').attr('display', 'none')) {
            $('body').removeClass('sidebar');
        }
    })
    

});