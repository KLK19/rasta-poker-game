const js = `
const pokerChips = document.querySelectorAll('.poker-chip');
pokerChips.forEach(chip => {
  chip.style.background = 'linear-gradient(45deg, #ff0000 0%, #ff0000 25%, #ffff00 25%, #ffff00 50%, #00ff00 50%, #00ff00 75%, #0000ff 75%, #0000ff 100%)';
  chip.style.backgroundSize = '20px 20px';
  chip.style.backgroundPosition = '0 0';
  chip.style.backgroundRepeat = 'repeat';
});
`;

const script = document.createElement('script');
script.type = 'text/javascript';
script.appendChild(document.createTextNode(js));
document.head.appendChild(script);

// Path: pokergame.css
const css = `
.poker-chip {
  background: linear-gradient(45deg, #ff0000 0%, #ff0000 25%, #ffff00 25%, #ffff00 50%, #00ff00 50%, #00ff00 75%, #0000ff 75%, #0000ff 100%);
  background-size: 20px 20px;
  background-position: 0 0;
  background-repeat: repeat;
}
`;

const style = document.createElement('style');
style.type = 'text/css';
style.appendChild(document.createTextNode(css));
document.head.appendChild(style);
```
print.css
```
const javascript = `
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
  card.style.background = 'linear-gradient(45deg, #ff0000 0%, #ff0000 25%, #ffff00 25%, #ffff00 50%, #00ff00 50%, #00ff00 75%, #0000ff 75%, #0000ff 100%)';
  card.style.backgroundSize = '20px 20px';
  card.style.backgroundPosition = '0 0';
  card.style.backgroundRepeat = 'repeat';
});
`;
