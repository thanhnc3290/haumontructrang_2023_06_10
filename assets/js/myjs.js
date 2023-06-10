function tongle_main_menu(){
    var main_menu = document.getElementById('main_menu');
    let style = main_menu.style.display;
    //console.log(style);
    if(style == 'none'){
        main_menu.setAttribute('style','display:block;');
    }else{
        main_menu.setAttribute('style','display:none;');
    }
}

function close_main_menu(){
    document.getElementById('main_menu').setAttribute('style','display:none;');
}