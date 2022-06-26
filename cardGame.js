// Select the following elements from our HTML page:
let myHandUl = document.querySelector(".my-hand");
let playedCardsUl = document.querySelector(".played-cards");
let drawCardButton = document.querySelector(".draw-card");

function addCardToHand() {
  // Make an li and give it the text of its suit and number.
  let cardLi = document.createElement("li");
  let cardName = drawCard();
  cardLi.textContent = cardName;

  // Create a button to play the card.
  let playButton = document.createElement("button");
  playButton.textContent = "Play";

  // Add the play button to the Li card.
  cardLi.append(playButton);

  // Add the Li card to the list of all cards.
  myHandUl.append(cardLi);

  // When the play button is clicked, remove the Li card.
  playButton.addEventListener("click", function () {
    const name = cardLi.textContent;
    cardLi.remove();

    playCard(name);
  });
}

function playCard(name) {
  let cardLi = document.createElement("li");

  cardLi.textContent = name; // <-- TO DO: Change this to the name of the card played.

  playedCardsUl.append(cardLi);
}

// Create three cards for the player to start with.
for (let i = 0; i < 3; i++) {
  addCardToHand();
}

// When the user clicks "Draw Card," they get a new card.
drawCardButton.addEventListener("click", function () {
  addCardToHand();
});
