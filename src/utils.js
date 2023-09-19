/*!
 * V4Fire Eslint-plugin
 * https://github.com/V4Fire/Eslint-plugin
 *
 * Released under the MIT license
 * https://github.com/V4Fire/Eslint-plugin/blob/master/LICENSE
 */

/**
 * @typedef {import('eslint').ASTNode} ASTNode
 * @typedef {import('eslint').Token} Token
 */

const {ESLintUtils, ASTUtils} = require('@typescript-eslint/utils');
const {AST_NODE_TYPES} = require('@typescript-eslint/types');

const ERROR_MESSAGE =
	'You have used a rule which requires parserServices to be generated. You must therefore provide a value for the "parserOptions.project" property for @typescript-eslint/parser.';


const utils = {
	/**
	 * Determines whether two adjacent tokens are on the same line
	 *
	 * @param {Token} left - the left token to check
	 * @param {Token} right - the right token to check
	 * @returns {boolean}
	 */
	isTokenOnSameLine(left, right) {
		return left.loc.end.line === right.loc.start.line;
	},

	/**
	 * Checks if the given token is a closing square bracket token or not
	 *
	 * @param {Token} token - the token to check
	 * @returns {boolean}
	 */
	isClosingBracketToken(token) {
		return token.value === ']' && token.type === 'Punctuator';
	},

	/**
	 * Checks if the given token is a closing brace token or not
	 *
	 * @param {Token} token - the token to check
	 * @returns {boolean}
	 */
	isClosingBraceToken(token) {
		return token.value === '}' && token.type === 'Punctuator';
	},

	/**
	 * Checks if the given token is not a comma token
	 *
	 * @param {Token} token - the token to check
	 * @returns {boolean}
	 */
	isNotCommaToken(token) {
		return !(token.value === ',' && token.type === 'Punctuator');
	},

	/**
	 * Factory for creating typescript eslint rules
	 */
	createTSRule: ESLintUtils.RuleCreator(
		(_name) => 'https://github.com/v4fire/linters'
	),

	getParserServices(
		context,
		allowWithoutFullTypeInformation = false,
	) {
		if (
			context.parserServices?.esTreeNodeToTSNodeMap == null ||
			context.parserServices.tsNodeToESTreeNodeMap == null
		) {
			throw new Error(ERROR_MESSAGE);
		}
	
		if (
			context.parserServices.program == null &&
			!allowWithoutFullTypeInformation
		) {
			throw new Error(ERROR_MESSAGE);
		}
	
		return context.parserServices;
	},

	/**
	 * Creates the negate function of the given function.
	 *
	 * @param {Function} f - the function to negate.
	 * @returns {Function} negated function.
	 */
	negate(f) {
		return token => !f(token);
	},

	/**
	 * Checks if the given token is an opening parenthesis token or not.
	 * @param {Token} token - the token to check.
	 * @returns {boolean} `true` if the token is an opening parenthesis token.
	 */
	isOpeningParenToken(token) {
			return token.value === "(" && token.type === "Punctuator";
	},

	/**
	 * Checks if the given token is a keyword token or not.
	 * @param {Token} token - the token to check.
	 * @returns {boolean} `true` if the token is a keyword token.
	 */
	isKeywordToken(token) {
		return token.type === "Keyword";
	},

	isIdentifier: ASTUtils.isNodeOfType(AST_NODE_TYPES.Identifier),

	keywords: [
		"abstract",
		"boolean",
		"break",
		"byte",
		"case",
		"catch",
		"char",
		"class",
		"const",
		"continue",
		"debugger",
		"default",
		"delete",
		"do",
		"double",
		"else",
		"enum",
		"export",
		"extends",
		"false",
		"final",
		"finally",
		"float",
		"for",
		"function",
		"goto",
		"if",
		"implements",
		"import",
		"in",
		"instanceof",
		"int",
		"interface",
		"long",
		"native",
		"new",
		"null",
		"package",
		"private",
		"protected",
		"public",
		"return",
		"short",
		"static",
		"super",
		"switch",
		"synchronized",
		"this",
		"throw",
		"throws",
		"transient",
		"true",
		"try",
		"typeof",
		"var",
		"void",
		"volatile",
		"while",
		"with"
	]
};

utils.isNotOpeningParenToken = utils.negate(utils.isOpeningParenToken);

module.exports = utils;
