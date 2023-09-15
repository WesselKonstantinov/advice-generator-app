const getRandomAdvice = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(`Error: ${error}`);
  }
};

const adviceIDText = document.querySelector(".js-id");
const adviceText = document.querySelector(".js-advice");
const displayAdvice = () => {
  getRandomAdvice("https://api.adviceslip.com/advice")
    .then((data) => {
      const {
        slip: { id },
        slip: { advice },
      } = data;
      adviceIDText.textContent = id;
      adviceText.textContent = advice;
    })
    .catch(() => {
      adviceText.textContent =
        "An unexpected error occurred. Please try again later.";
    });
};

displayAdvice();

const getAdviceButton = document.querySelector(".js-button");
getAdviceButton.addEventListener("click", displayAdvice);
