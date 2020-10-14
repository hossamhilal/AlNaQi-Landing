/*global $ */
$(document).ready(function ($) {
    'use strict';

     // OPEN SIDE  MENU 
     $('.menu-btn').on('click', function(){
        let logo = $('.logo');
        logo.clone().insertBefore($('.nav-menu ul'));
        $('.nav-menu ').toggleClass('show');
        $('.nav-overlay').addClass('show');  
        setTimeout(function(){
            $('body').addClass('stopScroll');
        }, 200); 
    });

    // CLOSE SIDE MENU 
    $('.nav-overlay').on('click', function(){
        let logo = $('.nav-menu .logo');
        $('.nav-menu').find(logo).remove();
        $(this).removeClass('show');
        $('.nav-menu ').removeClass('show');  
        $('body').removeClass('stopScroll');  
    });

    
    // iniat WOW Js
    new WOW().init();

});


