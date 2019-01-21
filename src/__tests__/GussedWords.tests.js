import React from "react";
import { shallow } from "enzyme";
import GussedWords from "../GussedWords";

import { findByAttr, validatePropTypes } from "../../test/testUtils";

const defaultProps = {
	gussedWords: [
		{
			word: "train",
			wordlength: 5
		}
	]
};
const setup = (props = {}) => {
	const expectedProps = { ...defaultProps, ...props };
	return shallow(<GussedWords {...expectedProps} />);
};

describe("<GussedWords> component", () => {
	test("renders no error for default props", () => {
		const validatingProps = validatePropTypes(GussedWords, { gussedWords });
		expect(validatingProps).toBeUndefined();
	});
});
