import React from "react";
import PropTypes from "prop-types";

const GuessedWords = ({ guessedWords }) => {
	const renderGuessedWords = guessedWords.map((guess, index) => (
		<tr data-test="guessedword" key={index}>
			<td>{guess.word}</td>
			<td>{guess.wordlength}</td>
		</tr>
	));
	let content =
		guessedWords.length === 0 ? (
			<span data-test="guessed-instructions">Try to guess the word</span>
		) : (
			<table data-test="guessedWords">
				<thead>
					<tr>
						<th>Guess</th>
						<th>word length</th>
					</tr>
				</thead>
				<tbody>{renderGuessedWords}</tbody>
			</table>
		);
	return <div data-test="component-guessed-word">{content}</div>;
};

GuessedWords.propTypes = {
	guessedWords: PropTypes.arrayOf(
		PropTypes.shape({
			word: PropTypes.string,
			wordlength: PropTypes.number
		})
	).isRequired
};

export default GuessedWords;
