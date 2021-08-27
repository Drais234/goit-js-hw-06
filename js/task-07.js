


const displayedText = document.querySelector('#text');
const inputRange = document.querySelector('#font-size-control');


const updateSize = event => {
  let fontSize = event.currentTarget.value + "px";
  displayedText.style.fontSize = fontSize;
};

inputRange.addEventListener('input', updateSize);



