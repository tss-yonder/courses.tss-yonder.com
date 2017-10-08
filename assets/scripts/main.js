/** Slide Menu */
$('.button-collapse').sideNav({
    menuWidth: 300, // Default is 300
    edge: 'left', // Choose the horizontal origin
    closeOnClick: false, // Closes side-nav on <a> clicks, useful for Angular/Meteor
    draggable: true, // Choose whether you can drag to open on touch screens,
    onOpen: function(el) { /* Do Stuff */ }, // A function to be called when sideNav is opened
    onClose: function(el) { /* Do Stuff */ }, // A function to be called when sideNav is closed
});

function hideMenu() {
    $('.button-collapse').sideNav('hide');
}

var toggleCourses = (function iife() {
    var isCoursesOpen = false;
    var icon = document.getElementsByClassName('dropdown-icon')[0];
    var coursesSublist = document.getElementsByClassName('sublist')[0];

    return function() {
        isCoursesOpen = !isCoursesOpen;
        if (isCoursesOpen) {
            icon.innerHTML = 'arrow_drop_up';
            coursesSublist.classList.remove('closed');
        } else {
            icon.innerHTML = 'arrow_drop_down';
            coursesSublist.classList.add('closed');
        }
    }
}());

/** Page resizing*/
(function iife() {
    var slideMenu = document.getElementById('slide-out');
    var timeoutListener = null;

    function handleClasses() {
        if (window.innerWidth < 650) {
            slideMenu.classList.remove('col');
            slideMenu.classList.remove('s4');
            slideMenu.classList.remove('m3');
            slideMenu.classList.remove('l3');
        } else {
            slideMenu.classList.add('col');
            slideMenu.classList.add('s4');
            slideMenu.classList.add('m3');
            slideMenu.classList.add('l3');
        }
    }
    window.addEventListener('resize', function resizeWindow(e) {
        window.clearTimeout(timeoutListener);
        timeoutListener = setTimeout(handleClasses, 250);
    });
    handleClasses();
}());