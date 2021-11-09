const config = {
	transform: {
		"^.+\\.tsx?$": "ts-jest"
	},
	testRegex: ".*?/__tests__/.*-test(\\.ts|\\.js)",
	moduleFileExtensions: [
		"ts",
		"tsx",
		"js",
		"json",
		"jsx"
	]
}

module.exports = config
