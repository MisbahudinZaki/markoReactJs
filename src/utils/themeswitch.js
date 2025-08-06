export function initThemeSwitch() {
    const lightmode = localStorage.getItem('lightmode');
    const themeSwitch = document.getElementById('themeSwitch');
    const themeIcon = document.getElementById('themeIcon');
    const siteLogo = document.querySelector('.site-logo');
    const partnerLogos = document.querySelectorAll('.partner-logo');
  
    function updatePartnerLogos() {
        partnerLogos.forEach((img) => {
            const src = img.getAttribute('src');
            if (document.body.classList.contains('lightmode')) {
                if (!src.includes('-dark')) {
                    img.setAttribute('src', src.replace('.png', '-dark.png'));
                }
                } else {
                img.setAttribute('src', src.replace('-dark.png', '.png'));
                }
        });
    }
  
    function enableLightMode() {
        document.body.classList.add('lightmode');
            localStorage.setItem('lightmode', 'active');
            if (themeIcon) {
                themeIcon.classList.remove('fa-moon');
                themeIcon.classList.add('fa-sun');
            }
            if (siteLogo) {
                siteLogo.setAttribute('src', 'assets/image/marko-logo-dark.png');
            }
        updatePartnerLogos();
    }
  
    function disableLightMode() {
      document.body.classList.remove('lightmode');
        localStorage.removeItem('lightmode');
        if (themeIcon) {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        }
        if (siteLogo) {
            siteLogo.setAttribute('src', 'assets/image/marko-logo.png');
        }
      updatePartnerLogos();
    }
  
    if (lightmode === 'active') {
    enableLightMode();
    }
  
    if (themeSwitch) {
        themeSwitch.addEventListener('click', () => {
            if (document.body.classList.contains('lightmode')) {
            disableLightMode();
            } else {
            enableLightMode();
            }
        });
    }
  }
  