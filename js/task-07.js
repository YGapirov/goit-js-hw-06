const fontSizeEl = document.querySelector('#font-size-control');
const text = document.querySelector('#text');


fontSizeEl.addEventListener('input', () => {
    const fontSize = fontSizeEl.value;  //дізнаємось поточне fontSize повзунка
    text.style.fontSize = `${fontSize}px`;  // додаєм пікселі до змінної
});


