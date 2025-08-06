function initThemeSwitch() {
    let lightmode = localStorage.getItem('lightmode');
    const $themeSwitch = $('#theme-switch');
    const $themeIcon = $('#theme-icon');
    const $siteLogo = $('.site-logo');

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

    function enableLightMode() {
        $('body').addClass('lightmode');
        localStorage.setItem('lightmode', 'active');
        $themeIcon.removeClass('fa-moon').addClass('fa-sun');
        $siteLogo.attr('src', 'assets/image/marko-logo-dark.png'); 
        updatePartnerLogos();
    }

    function disableLightMode() {
        $('body').removeClass('lightmode');
        localStorage.setItem('lightmode', null);
        $themeIcon.removeClass('fa-sun').addClass('fa-moon');
        $siteLogo.attr('src', 'assets/image/marko-logo.png');
        updatePartnerLogos();
    }

    if (lightmode === 'active') {
        enableLightMode();
    } else {
        disableLightMode();
    }

    $themeSwitch.on('click', function () {
        lightmode = localStorage.getItem('lightmode');
        if (lightmode !== 'active') {
            enableLightMode();
        } else {
            disableLightMode();
        }
    });
}

window.initThemeSwitch = initThemeSwitch;