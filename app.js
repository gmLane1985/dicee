// *********refresh button***********
let refreshButton = document.getElementById('refresh');
refreshButton.addEventListener('click', function () {
  location.reload();
});
// *********random dice***********
let diceOne = Math.floor(Math.random() * 6) + 1;
let diceTwo = Math.floor(Math.random() * 6) + 1;
// *********change dice  image***********
document
  .querySelector('.img1')
  .setAttribute('src', `./images/dice${diceOne}.png`);

document
  .querySelector('.img2')
  .setAttribute('src', `./images/dice${diceTwo}.png`);
// *********determine winner***********
if (diceOne > diceTwo) {
  document.querySelector('h1').innerHTML = 'Player 1 Wins! 🚩';
} else if (diceOne === diceTwo) {
  document.querySelector('h1').innerHTML = 'Draw!';
} else {
  document.querySelector('h1').textContent = '🚩 Player 2 Wins!';
}
