// Assignment 1 | COMP1073 Client-Side JavaScript

/* 
 * Variables Section 
 * --------------------------------
 */
// Initialize the speech synthesis interface
const synth = window.speechSynthesis;

// The text that will be spoken when the button is clicked
const textToSpeak = 'This is the text string that you will generate with your script';

// Select the button element that triggers speech
const speakButton = document.querySelector('button');


/* 
 * Functions Section 
 * --------------------------------
 */

/**
 * Function to trigger speech synthesis for a given text.
 * @param {string} text - The text string to be spoken.
 */
function speakNow(text) {
  // Ensure speech synthesis is supported by the browser
  if (!synth) {
    console.error('Speech synthesis is not supported in this browser.');
    return;
  }

  // Create a new speech synthesis utterance with the provided text
  const utterance = new SpeechSynthesisUtterance(text);

  // Attach an error handler to catch and log any errors during speech synthesis
  utterance.onerror = function(event) {
    console.error('Error during speech synthesis:', event.error);
  };

  // Execute the speech synthesis with the utterance
  synth.speak(utterance);
}


/* 
 * Event Listeners Section 
 * --------------------------------
 */
// Attach a click event listener to the button
// When the button is clicked, the text in 'textToSpeak' is spoken
speakButton.addEventListener('click', function() {
  speakNow(textToSpeak);
});
