/*!
 * V4Fire Eslint-plugin
 * https://github.com/V4Fire/Eslint-plugin
 *
 * Released under the MIT license
 * https://github.com/V4Fire/Eslint-plugin/blob/master/LICENSE
 */

const {default: iterateJsdoc} = require('eslint-plugin-jsdoc/dist/iterateJsdoc');

const whitelist = ['etc.', 'i.e.'];

const formatParamDescription = iterateJsdoc(({
	report,
	sourceCode,
	jsdocNode,
	utils,
}) => {
	utils.forEachPreferredTag('param', (jsdocParameter) => {
		const
			paramDescription = jsdocParameter.description,
			sourceLines = sourceCode.getText(jsdocNode).split('\n'),
			lineNumber = jsdocParameter.source[0].number,
			firstLetter = paramDescription[2];

		if (paramDescription == null || firstLetter == null) {
			return
		}

		if (paramDescription && firstLetter === firstLetter.toUpperCase()) {
			report('The param description should start with a lowercase letter', (fixer) => {
				const
					lineWithWrongDescription = sourceLines[lineNumber],
					dashIndex = lineWithWrongDescription.indexOf('-'),
					wrongLetterIndex = dashIndex + 2;

				sourceLines[lineNumber] = (
					lineWithWrongDescription.slice(0, wrongLetterIndex) +
					lineWithWrongDescription[wrongLetterIndex].toLowerCase() +
					lineWithWrongDescription.slice(wrongLetterIndex + 1)
				)

				return fixer.replaceText(jsdocNode, sourceLines.join('\n'));
			}, {
				line: lineNumber
			});
		}
	});
}, {
	contextDefaults: true,
	meta: {
		docs: {
			description: 'Ensures the correct formatting of the jsdoc param description block'
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

module.exports = formatParamDescription;
