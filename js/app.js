function cyclebarber(name) {
    var _activebarber;
    _activebarber = $(name);

    var _activebarbersmenu;
    _activebarbersmenu = $(name + "menu");

    $(".activemenuitem").removeClass("activemenuitem");
    $(".activebarber").removeClass("activebarber");

    _activebarber.addClass("activebarber");
    _activebarbersmenu.addClass("activemenuitem");

}
