import React from "react";
import PropTypes from "prop-types";

const Gussedwords = props => {
	return <div />;
};

Gussedwords.propTypes = {
	gussedWords: PropTypes.arrayOf(
		PropTypes.shape({
			word: PropTypes.string,
			wordlength: PropTypes.number
		})
	).isRequired
};

export default Gussedwords;
