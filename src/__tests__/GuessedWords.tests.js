import React from "react";
import { shallow } from "enzyme";
import GuessedWords from "../GuessedWords";

import { findByAttr, validatePropTypes } from "../../test/testUtils";

const defaultProps = {
	guessedWords: [
		{
			word: "train",
			wordlength: 5
		}
	]
};
const setup = (props = {}) => {
	const expectedProps = { ...defaultProps, ...props };
	return shallow(<GuessedWords {...expectedProps} />);
};

describe("<GussedWords> component", () => {
	test("renders no error for default props", () => {
		const validatingProps = validatePropTypes(GuessedWords, defaultProps);
		expect(validatingProps).toBeUndefined();
	});
});
