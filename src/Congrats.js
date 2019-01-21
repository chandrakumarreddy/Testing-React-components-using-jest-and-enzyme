import React from "react";
import PropTypes from "prop-types";

const congrats = ({ success }) => {
	const data = success ? (
		<span data-test="congrats-message">congratulations you did it</span>
	) : null;

	return <div data-test="component-congrats">{data}</div>;
};

congrats.propTypes = {
	success: PropTypes.bool.isRequired
};
export default congrats;
