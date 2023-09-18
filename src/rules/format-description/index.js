/*!
 * V4Fire Eslint-plugin
 * https://github.com/V4Fire/Eslint-plugin
 *
 * Released under the MIT license
 * https://github.com/V4Fire/Eslint-plugin/blob/master/LICENSE
 */

const {default: iterateJsdoc} = require('eslint-plugin-jsdoc/dist/iterateJsdoc');

const whitelist = ['etc.', 'i.e.'];

const formatDescription = iterateJsdoc(({
	report,
	sourceCode,
	jsdocNode,
	utils,
}) => {
	const {
		description,
		lastDescriptionLine
	} = utils.getDescription();

	const
		isDescriptionSingleLine = checkIsDescriptionSingleLine(description),
		sourceLines = sourceCode.getText(jsdocNode).split('\n');

	if (isDescriptionSingleLine) {
		if (/.*\.$/.test(description)) {
			if (whitelist.some((item) => description.trim().endsWith(item))) {
				return;
			}

			report('The one-line description should be without a period at the end', (fixer) => {
				const injectedLine = replaceLastOccurrence(description, '.', '');
				sourceLines.splice(lastDescriptionLine + 1, 0, injectedLine);

				return fixer.replaceText(jsdocNode, sourceLines.join('\n'));
			}, {
				line: lastDescriptionLine
			});
		}

		if (/^[a-z].*/.test(description)) {
			report('Description should starts with capital letter', (fixer) => {
				const injectedLine = description[0].toUpperCase() + description.slice(1);
				sourceLines.splice(lastDescriptionLine + 1, 0, injectedLine);

				return fixer.replaceText(jsdocNode, sourceLines.join('\n'));
			}, {
				line: lastDescriptionLine
			});
		}
	}
}, {
	contextDefaults: true,
	meta: {
		docs: {
			description: 'Ensures the correct formatting of the jsdoc description block'
		},
		fixable: 'whitespace',
		schema: [
			{
				additionalProperties: false,
			},
		],
		type: 'suggestion',
	},
});

/**
 * Returns true if description contains one line
 *
 * @param {string} description
 *
 * @returns {boolean}
 */
function checkIsDescriptionSingleLine(description) {
	let testValue = description;

	const isDescriptionEndsWithANewline = (/\n\r?$/u).test(description);

	if (isDescriptionEndsWithANewline) {
		testValue = testValue.slice(0, -2);
	}

	return !/\n\r?/u.test(testValue);
}

/**
 * Replaces the last occurrence of a character in the string
 *
 * @param {string} str
 * @param {string} symbol
 * @param {string} replacement
 * @returns {string}
 */
function replaceLastOccurrence(str, symbol, replacement) {
	const
		lastIndex = str.lastIndexOf(symbol);

	return str.slice(0, lastIndex) + replacement + str.slice(lastIndex + 1);
}

module.exports = formatDescription;
