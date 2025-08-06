function initThemeSwitch() {
    let lightmode = localStorage.getItem('lightmode');
    const $themeSwitch = $('#themeSwitch');
    const $themeIcon = $('#themeIcon');
    const $siteLogo = $('.site-logo');
    
    function enableLightMode() {
        $('body').addClass('lightmode');
        localStorage.setItem('lightmode', 'active');
        $themeIcon.removeClass('fa-moon').addClass('fa-sun');
        $siteLogo.attr('src', 'assets/image/marko-logo-dark.png');
        updatePartnerLogos();
    }

    function disableLightMode() {
        $('body').removeClass('lightmode');
        localStorage.removeItem('lightmode');
        $themeIcon.removeClass('fa-sun').addClass('fa-moon');
        $siteLogo.attr('src', 'assets/image/marko-logo.png');
        updatePartnerLogos();
    }

    if (lightmode === 'active') {
        enableLightMode();
    }

    $themeSwitch.on('click', function () {
        if ($('body').hasClass('lightmode')) {
            disableLightMode();
        } else {
            enableLightMode();
        }
    });

    function updatePartnerLogos() {
        $('.partner-logo').each(function () {
            const $img = $(this);
            const src = $img.attr('src');

            if ($('body').hasClass('lightmode')) {
                if (!src.includes('-dark')) {
                    $img.attr('src', src.replace('.png', '-dark.png'));
                }
            } else {
                $img.attr('src', src.replace('-dark.png', '.png'));
            }
        });
    }
}

window.initThemeSwitch = initThemeSwitch;