import React, { useEffect, useState } from 'react';
import './RotatingBillboard.css'; // Create a CSS file for your styles

const RotatingBillboard = ({ config }) => {
    const [imageIndex, setImageIndex] = useState(0);

    useEffect(() => {
        if (!config) {
            console.error("Billboard requires a JSON config initializer");
            return;
        }

        if (!config.background || !config.images) {
            console.error("Both background and images are needed in config");
            return;
        }

        const { divisions = 41, duration = 4, lag = 1, background, images, topLeft, botRight } = config;
        const _billboardElem = document.getElementById('billboard');
        const _backgroundElem = document.getElementById('background');

        function adjustDivHeight(elem, aspectRatio) {
            setTimeout(() => {
                elem.style.height = `${elem.offsetWidth * aspectRatio}px`;
            }, 300);
        }

        function loadBackground(backgroundElem, path) {
            const backgroundImage = new Image();
            backgroundImage.onload = function () {
                backgroundElem.style.backgroundImage = `url(${path})`;
                const { width, height } = backgroundImage;
                adjustDivHeight(backgroundElem, height / width);
                window.addEventListener('resize', () => adjustDivHeight(backgroundElem, height / width));
            };
            backgroundImage.src = path;
        }

        function spin() {
            const slats = document.querySelectorAll('.slat');
            slats.forEach(slat => {
                let rotY = parseInt(slat.dataset.index, 10);
                slat.style.transform = `perspective(500px) translateZ(20px) rotateY(${rotY}deg)`;
                rotY += (360 / images.length);
                slat.dataset.index = rotY;
            });
            setImageIndex(prevIndex => (prevIndex + 1) % images.length);
        }

        loadBackground(_backgroundElem, background);

        if (topLeft && botRight) {
            _billboardElem.style.left = `${100 * topLeft[0]}%`;
            _billboardElem.style.top = `${100 * topLeft[1]}%`;
            const billboardDim = [botRight[0] - topLeft[0], botRight[1] - topLeft[1]];
            _billboardElem.style.width = `${100 * billboardDim[0]}%`;
            _billboardElem.style.height = `${100 * billboardDim[1]}%`;
        }

        const _divisionSize = 100 / divisions;

        for (let i = images.length - 1; i >= 0; --i) {
            for (let d = 0; d < divisions; ++d) {
                const slatElem = document.createElement('div');
                slatElem.className = `slat img${i} col${d}`;
                slatElem.dataset.index = i * (360 / images.length);
                _billboardElem.appendChild(slatElem);
            }
            const imgSlats = document.querySelectorAll(`.img${i}`);
            imgSlats.forEach(slat => {
                slat.style.backgroundImage = `url(${images[i]})`;
            });
        }

        spin();

        for (let d = 0; d < divisions; ++d) {
            const dlag = (d / divisions) * lag;
            const cols = document.querySelectorAll(`.col${d}`);
            cols.forEach(col => {
                col.style.left = `${_divisionSize * d}%`;
                col.style.backgroundPosition = `${d * _divisionSize}% top`;
                col.style.transitionDelay = `${dlag}s`;
            });
        }

        document.querySelectorAll('.slat').forEach(slat => {
            slat.style.width = `${_divisionSize}%`;
        });

        const intervalId = setInterval(spin, duration * 1000);
        return () => clearInterval(intervalId);

    }, [config]);

    return (
        <div id="background" className="background">
            <div id="billboard" className="billboard"></div>
        </div>
    );
};

export default RotatingBillboard;
