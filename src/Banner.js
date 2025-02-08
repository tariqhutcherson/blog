import React, { useState, useEffect } from 'react';

const banner = [
  "Redeeming the time.",
  "Walking in freedom.",
  "Treading on serpents.",
  "Loving all people.",
  "Standing against evil.",
  "Seated in heavenly places.",
  "Leaning on grace.",
  "Relying on the Shepherd."
];

function Banner() {
  // State to hold the random sentence
  const [randomSentence, setRandomSentence] = useState(null);

  useEffect(() => {
    // Randomly select a sentence when the component mounts
    const randomIndex = Math.floor(Math.random() * banner.length);
    const randomText = banner[randomIndex];

    // Debugging: Log the random sentence being selected
    console.log("Random Sentence:", randomText);

    // Update the state with the selected random sentence
    setRandomSentence(randomText);
  }, []); // Empty dependency array ensures it runs only once after the initial render

  return (
    <div id="banner">
      {/* Display the random sentence */}
      {randomSentence || "Loading..."} {/* Show "Loading..." if randomSentence is empty */}
    </div>
  );
}

export default Banner;