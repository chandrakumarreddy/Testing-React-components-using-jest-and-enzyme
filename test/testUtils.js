import checkPropTypes from "check-prop-types";

export const validatePropTypes = (Component, expectedProps) => {
	return checkPropTypes(
		Component.propTypes,
		expectedProps,
		"prop",
		Component.name
	);
};

export const findByAttr = (wrapper, val) => {
	return wrapper.find(`[data-test='${val}']`);
};
