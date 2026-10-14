/* Array containing 15 decimal Unicode emoji codes */
const emojiCodes = [
  128512, // Grinning face
  128514, // Face with tears of joy
  128525, // Smiling face with heart-eyes
  128540, // Winking face with tongue
  129409, // Lion
  128049, // Cat
  128054, // Dog
  128640, // Rocket
  127881, // Party popper
  127800, // Cherry blossom
  127829, // Pizza
  127911, // Headphones
  127918, // Video game
  128187, // Laptop
  127774  // Sun
];

// Find the empty gallery container in HTML
const gallery = document.getElementById('gallery');

// Create a function that displays a chosen number of emojis
// By default, count equals the total number of emojis
function showEmojis(count = emojiCodes.length) {
    // Clear the gallery before creating new cards
    gallery.innerHTML = '';

    // Loop through the first count items in the array
    for (let index = 0; index < count; index++) {
          // Get the decimal code at the current index
    const code = emojiCodes[index];

    // Convert the decimal code into an emoji character
    const emoji = String.fromCodePoint(code);

    // Create a new card
    const card = document.createElement('div');
    card.classList.add('emoji-card');

    // Create the emoji element
    const emojiElement = document.createElement('span');
    emojiElement.classList.add('emoji');
    emojiElement.textContent = emoji;

    // Create the decimal code element
    const codeElement = document.createElement('p');
    codeElement.classList.add('emoji-code');
    codeElement.textContent = code;

    // Add the emoji and code to the card
    card.append(emojiElement, codeElement);

    // Add the finished card to the gallery
    gallery.appendChild(card);
  }
}

// Display all emojis when the page loads
showEmojis();