/*DOM Selectors*/ 
const adviceHeader = document.querySelector('.advice-header');
const adviceText = document.querySelector('.advice-text');
const diceButton = document.querySelector('.dice-btn');


/*FUNCTIONS*/ 
const getAdvice = async () => {
  const response = await fetch('https://api.adviceslip.com/advice?t=' + Math.random());

  if (!response.ok) {
    throw new Error();
  }

  const responseJson = await response.json();
  const data = responseJson.slip;

  return data;
};

const updateUI = () => {
  getAdvice()
  .then((data) => {
    adviceHeader.textContent = `Advice #${data.id}`;
    adviceText.textContent = `"${data.advice}"`;
  })
  .catch((error) => {
    console.log(error);
  });
};


//Loads UI text from API when page start.
updateUI();

//Updates UI text from API when button is clicked.
diceButton.addEventListener('click', () => {
  updateUI();
});






