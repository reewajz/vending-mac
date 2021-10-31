const submitButton = document.getElementById('snack-submit');
const inputField = document.getElementById('snack-input');
const message = document.getElementById('flash-message');
const purchases = document.getElementById('snack-purchases');
const snackCollection = document.getElementById('snack-collection');

submitButton.addEventListener('click', function () {
  const value = inputField.value;
  const snack = document.getElementById(value);
  if (snack) {
    purchases.appendChild(snack);
    message.textContent = 'Enjoy your ' + value;
  } else {
    message.textContent = 'Sorry! I am out of that!';
  }
});

shake.addEventListener('click', function () {
  snackCollection.classList.toggle('shake');
});

snackCollection.addEventListener('click', function (event) {
  if (event.target.className == 'snack') {
    const snack = event.target;
    const snackName = snack.id;
    inputField.value = snackName;
    purchases.appendChild(snack);
    message.textContent = 'Enjoy your ' + snackName;
  }
});

purchases.addEventListener('click', function (event) {
  if (event.target.className == 'snack') {
    const snack = event.target;
    snack.remove();
  }
});
