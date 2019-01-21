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

	describe("if there are no gussed words", () => {
		let wrapper;
		beforeEach(() => {
			wrapper = setup({ guessedWords: [] });
		});
		test("renders guessed component", () => {
			const guessedComponent = findByAttr(
				wrapper,
				"component-guessed-word"
			);
			expect(guessedComponent.length).toBe(1);
		});
		test("renders guessed Instructions", () => {
			const Instructions = findByAttr(wrapper, "guessed-instructions");
			expect(Instructions.text().length).not.toBe(0);
		});
	});

	describe("if there are guessed words", () => {
		let wrapper;
		beforeEach(() => {
			const guessedWords = [
				{ word: "train", wordlength: 5 },
				{ word: "bus", wordlength: 3 }
			];
			wrapper = setup({ guessedWords });
		});
		test("renders GuessedWords component", () => {
			const component = findByAttr(wrapper, "component-guessed-word");
			expect(component.length).toBe(1);
		});
		test("renders guessed words table", () => {
			const guessedWordsTable = findByAttr(wrapper, "guessedWords");
			expect(guessedWordsTable.length).toBe(1);
		});
		test("guessed words count to be 2", () => {
			const guessedword = findByAttr(wrapper, "guessedword");
			expect(guessedword.length).toBe(2);
		});
	});
});
