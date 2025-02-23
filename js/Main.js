// Navbar active
    document.addEventListener("DOMContentLoaded", function() {
        // Get current page URL
        var currentUrl = window.location.href;

        // Get all nav links
        var navLinks = document.querySelectorAll('.navbar-nav .nav-link');

        // Loop through the links and add the 'active' class to the correct link
        navLinks.forEach(function(link) {
            if (currentUrl.includes(link.getAttribute('href'))) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    });


// Loader animation
setTimeout(function() {
    document.body.classList.add("loaded");
}, 500); // 3000 milliseconds (3 seconds)

//  JavaScript to Stop Video on Close
    var videoModal = document.getElementById('videoModal');
    videoModal.addEventListener('hidden.bs.modal', function () {
        var iframe = document.getElementById('youtubeVideo');
        iframe.src = iframe.src;
    });
    