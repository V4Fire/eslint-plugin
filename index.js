/*!
 * V4Fire Eslint-plugin
 * https://github.com/V4Fire/Eslint-plugin
 *
 * Released under the MIT license
 * https://github.com/V4Fire/Eslint-plugin/blob/master/LICENSE
 */

module.exports.rules = {
	'newline-after-description': require('./src/rules/newline-after-description'),
	'enchanted-curly': require('./src/rules/enchanted-curly'),
	'unbound-method': require('./src/rules/unbound-method'),
	'require-jsdoc': require('./src/rules/require-jsdoc'),
	'member-order': require('./src/rules/member-order')
};
