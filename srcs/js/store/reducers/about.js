export default  (state=[], { type, payload }) => {
	switch (type) {
		case "ABOUT":
			return payload;
		default:
			return state;
	}
};
