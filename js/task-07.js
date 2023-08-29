const fontSizeEl = document.querySelector('#font-size-control');
const text = document.querySelector('#text');


fontSizeEl.addEventListener('input', sizeChange);

function sizeChange(event) {
    const fontSize = fontSizeEl.value;  //дізнаємось поточне fontSize повзунка
    text.style.fontSize = `${fontSize}px`;  // додаєм пікселі до змінної
};

sizeChange(event);




