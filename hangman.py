import random

def choose_word():
    words = ["python", "hangman", "programming", "computer", "code", "algorithm", "variable"]
    return random.choice(words)

def display_word(word, guessed_letters):
    display = ""
    for letter in word:
        if letter in guessed_letters:
            display += letter
        else:
            display += "_"
    return display

def hangman():
    word = choose_word()
    guessed_letters = []
    attempts = 6

    print("Welcome to Hangman!")
    print("Try to guess the word.")

    while attempts > 0:
        print("\n" + display_word(word, guessed_letters))
        guess = input("Guess a letter: ").lower()

        if guess in guessed_letters:
            print("You already guessed that letter!")
        elif len(guess) != 1 or not guess.isalpha():
            print("Please enter a single letter.")
        else:
            guessed_letters.append(guess)
            if guess in word:
                print("Good guess!")
            else:
                print("Wrong guess!")
                attempts -= 1

        if "_" not in display_word(word, guessed_letters):
            print("\nCongratulations! You guessed the word:", word)
            break

        print("Attempts left:", attempts)

    if attempts == 0:
        print("\nSorry, you ran out of attempts. The word was:", word)

hangman()
