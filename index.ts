#! /usr/bin/env node

import inquirer from 'inquirer';
import chalk from "chalk";

console.log(`-----------------------------------------------------------------------------------------------`);
console.log(chalk.magentaBright.italic(`                    >>> WELLCOM TO MY CHARACTER AND WORDS COUNTER <<<                      `));
console.log(`-----------------------------------------------------------------------------------------------`);


async function countCharactersAndWords(): Promise<{ characterCount: number, wordCount: number } | null> {
    try {
        const answer = await inquirer.prompt([
            {
                name: "sentence",
                type: "input",
                message: "Enter your sentence to count the words:",
                validate: (input: string) => {
                    if (input.trim() === '') {
                        return chalk.red.bold('Sentence cannot be empty. Please enter a valid sentence.');
                 }
                    return true;
                }
            }
        ]);

        const paragraph = answer.sentence;

        // Remove all whitespace characters from the paragraph to count only non-whitespace characters
        const charactersWithoutWhitespace = paragraph.replace(/\s+/g, '');
        const characterCount = charactersWithoutWhitespace.length;

        // Split the paragraph by whitespace to count words
        const words = paragraph.trim().split(/\s+/);
        const wordCount = words.length;

        return {
            characterCount,
            wordCount
        };
    } catch (error) {
        console.error(chalk.red.bold("An error occurred:"), error);
        return null;
    }
}

// Example usage:
countCharactersAndWords().then(result => {
    if (result) {
        console.log(chalk.yellowBright.bold(`Your characters Count: ${result.characterCount}`));
        console.log(chalk.green.bold(`Your Sentence Words Count: ${result.wordCount}`));
    } else {
        console.log(chalk.red.bold("Failed to count characters and words."));
    }
}).catch(err => {
    console.error(chalk.red.bold("An unexpected error occurred:", err));
});
