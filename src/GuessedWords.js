import React from "react";
import PropTypes from "prop-types";

const GuessedWords = props => {
	return <div />;
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
