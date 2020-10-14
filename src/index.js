module.exports = function check(str, bracketsConfig) {
	let array = [];
	let brackets = {};
	for (let i = 0; i < bracketsConfig.length; i++) {
		brackets[bracketsConfig[i][0]] = bracketsConfig[i][1];
	}
	for (let i = 0; i < str.length; i++) {
		let current = str[i];
		if (((array.includes(current) === false) || (brackets[current] != current)) && (current in brackets)) {
			array.push(current);
		} else {
			if (array.length === 0) {
				return false;
			}
			let last = array.pop();
			if (current != brackets[last]) {
				return false;
			}
		}
	}
	if (array.length > 0) {
		return false;
	} else {
		return true;
	}
};