// To be removed later
window.onload = function() {

    const marqueeContainer = document.createElement('div');
    marqueeContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        background-color: #000;
        color: #00ffee;
        overflow: hidden;
        white-space: nowrap;
        z-index: 1000;
    `;


    const marqueeContent = document.createElement('div');

    marqueeContent.innerHTML = '<span class="glow-text">Website Development in Progress</span>&nbsp;&nbsp;&nbsp;&nbsp;'.repeat(100);
    marqueeContent.style.cssText = `
        display: inline-block;
        animation: marquee 250s linear infinite;
    `;


    const style = document.createElement('style');
    style.textContent = `
        @keyframes marquee {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
        }
        .glow-text {
            transition: text-shadow 0.3s ease;
            cursor: pointer;
        }
        .glow-text:hover {
            text-shadow: 0 0 10px #fff,
                         0 0 20px #fff,
                         0 0 30px #fff,
                         0 0 40px #0ff;
            color: #fff;
        }
    `;

    document.head.appendChild(style);
    marqueeContainer.appendChild(marqueeContent);
    document.body.prepend(marqueeContainer);
};
