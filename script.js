const heart = document.getElementById('heart');
const pulseBtn = document.getElementById('pulse');
const rotateBtn = document.getElementById('rotate');
const scaleBtn = document.getElementById('scale');
const resetBtn = document.getElementById('reset');

const animations = {
    pulse: 'pulse 1s infinite',
    rotate: 'rotate 1s infinite',
    scale: 'scale 1s infinite',
    none: 'none'
};

function setAnimation(animation) {
    heart.style.animation = animations[animation];
}

pulse.addEventListener('click', () => setAnimation('pulse'));
rotate.addEventListener('click', () => setAnimation('rotate'));
scale.addEventListener('click', () => setAnimation('scale'));
reset.addEventListener('click', () => setAnimation('none'));