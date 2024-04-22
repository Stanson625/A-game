function chooseWord() {
    const words = ["python", "hangman", "programming", "computer", "code", "algorithm", "variable"];
    return words[Math.floor(Math.random() * words.length)];
}

function displayWord(word, guessedLetters) {
    let display = "";
    for (const letter of word) {
        if (guessedLetters.includes(letter)) {
            display += letter;
        } else {
            display += "_";
        }
    }
    return display;
}

function hangman() {
    const word = chooseWord();
    const guessedLetters = [];
    let attempts = 6;

    console.log("Welcome to Hangman!");
    console.log("Try to guess the word.");

    while (attempts > 0) {
        const currentDisplay = displayWord(word, guessedLetters);
        console.log("\n" + currentDisplay);
        const guess = prompt("Guess a letter: ").toLowerCase();

        if (guessedLetters.includes(guess)) {
            console.log("You already guessed that letter!");
        } else if (guess.length !== 1 || !/[a-z]/.test(guess)) {
            console.log("Please enter a single letter.");
        } else {
            guessedLetters.push(guess);
            if (word.includes(guess)) {
                console.log("Good guess!");
            } else {
                console.log("Wrong guess!");
                attempts--;
            }
        }

        if (!currentDisplay.includes("_")) {
            console.log(`\nCongratulations! You guessed the word: ${word}`);
            break;
        }

        console.log("Attempts left:", attempts);
    }

    if (attempts === 0) {
        console.log(`\nSorry, you ran out of attempts. The word was: ${word}`);
    }
}

hangman();
