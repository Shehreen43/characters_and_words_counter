# my_characters_and_words_counter_00

# Characters and Words Counter
This is a simple command-line application written in TypeScript that counts the number of characters (excluding whitespaces) and words in a given English sentence. The application uses the inquirer package to prompt the user for input and includes validation to ensure that a non-empty sentence is provided.

# Features
Character Count: Counts the number of characters in the sentence, excluding whitespace characters.
Word Count: Counts the number of words in the sentence.
Input Validation: Ensures the user provides a non-empty sentence.

# Installation
Clone the repository:

sh
Copy code
git clone https://github.com/shehreen43/characters-and-words-counter.git
cd characters-and-words-counter
Install dependencies:

sh
Copy code
npm install

# Usage
Run the application:

sh
Copy code
npx ts-node index.ts
Follow the prompt:

Enter your sentence when prompted.
View the results:

The application will display the character count (excluding whitespaces) and the word count for the provided sentence.

# Example
sh
Copy code
Enter your sentence to count the words: This is an example sentence.

Character Count (excluding whitespaces): 22
Word Count: 5

# Error Handling
The application includes error handling to manage unexpected issues gracefully. If an error occurs during the execution, an appropriate error message will be displayed.

# Dependencies
inquirer: A collection of common interactive command-line user interfaces.

# License
This project is licensed under the MIT License. See the LICENSE file for more details.

