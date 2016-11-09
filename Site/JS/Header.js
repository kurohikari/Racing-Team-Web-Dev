document.addEventListener("DOMContentLoaded", function() {
    document.head.innerHTML += '<link rel="stylesheet" type="text/css" href="CSS/Header.css">';

    document.body.innerHTML += '<nav class="navbar-fixed-top">' +
                                   '<ul>' +
                                       '<li><img id="logo" src="Resources/IMG/Logo.jpg"></li>' +
                                       '<li class="active"><a href="#">Home</a></li>' +
                                       '<li><a href="#">The Team</a></li>' +
                                       '<li><a href="#">Our Sponsors</a></li>' +
                                       '<li><a href="#">Become a Sponsor</a></li>' +
                                       '<li><a href="#">History</a></li>' +
                                       '<li><a href="#">Contact</a></li>' +
                                       '<li><a href="#">Links</a></li>' +
                                   '</ul>' +
                               '</nav>';
});