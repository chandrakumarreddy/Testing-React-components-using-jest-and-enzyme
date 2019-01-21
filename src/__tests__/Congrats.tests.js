import React from "react";
import { shallow } from "enzyme";
import Congrats from "../Congrats";
import { findByAttr, validatePropTypes } from "../../test/testUtils";

const defaultProps = {
	success: false
};

const setup = (props = {}) => {
	const expectedProps = { ...defaultProps, ...props };
	return shallow(<Congrats {...expectedProps} />);
};

describe("<Congrats> component", () => {
	test("renders", () => {
		const wrapper = setup();
		const congratsComponent = findByAttr(wrapper, "component-congrats");
		expect(congratsComponent.length).toBe(1);
	});
	test("renders no text when sucess prop is false", () => {
		const wrapper = setup();
		const component = findByAttr(wrapper, "component-congrats");
		expect(component.text()).toBe("");
	});
	test("renders congrats message when sucess prop is true", () => {
		const wrapper = setup({ success: true });
		const message = findByAttr(wrapper, "congrats-message");
		expect(message.text().length).not.toBe(0);
	});
	test("validating prop types", () => {
		const validateSuccessprop = validatePropTypes(Congrats, {
			success: false
		});
		expect(validateSuccessprop).toBeUndefined();
	});
});
