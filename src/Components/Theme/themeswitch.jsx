import { useEffect, useState } from 'react';

export default function ThemeSwitcher() {
    const [lightMode, setLightMode] = useState(false);

    useEffect(() => {
        const mode = localStorage.getItem('lightmode');
        if (mode === 'active') {
            setLightMode(true);
            document.body.classList.add('lightmode');
        }
    }, []);

    useEffect(() => {
        const siteLogo = document.querySelector('.site-logo');
        const partnerLogos = document.querySelectorAll('.partner-logo');

        if (lightMode) {
            document.body.classList.add('lightmode');
            localStorage.setItem('lightmode', 'active');

        if (siteLogo) {
            siteLogo.setAttribute('src', 'assets/image/marko-logo-dark.png');
        }

        partnerLogos.forEach((img) => {
            const src = img.getAttribute('src');
            if (!src.includes('-dark')) {
                img.setAttribute('src', src.replace('.png', '-dark.png'));
            }
        });
        } else {
            document.body.classList.remove('lightmode');
            localStorage.removeItem('lightmode');

        if (siteLogo) {
            siteLogo.setAttribute('src', 'assets/image/marko-logo.png');
        }

        partnerLogos.forEach((img) => {
            const src = img.getAttribute('src');
            img.setAttribute('src', src.replace('-dark.png', '.png'));
        });
        }
    }, [lightMode]);

    const toggleMode = () => {
        setLightMode((prev) => !prev);
    };

    return (
        <button id="themeSwitch" onClick={toggleMode}>
            <i
                id="themeIcon"
                className={`fas ${lightMode ? 'fa-sun' : 'fa-moon'}`}
            ></i>
        </button>
    );
}
