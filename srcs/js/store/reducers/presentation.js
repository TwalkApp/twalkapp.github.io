export default  (state=[], { type, payload }) => {
	switch (type) {
		case "PRESENTATION":
			return payload;
		default:
			return state;
	}
};
