/*!
 * V4Fire Eslint-plugin
 * https://github.com/V4Fire/Eslint-plugin
 *
 * Released under the MIT license
 * https://github.com/V4Fire/Eslint-plugin/blob/master/LICENSE
 */

module.exports.rules = {
	'enchanted-curly': require('./src/rules/enchanted-curly'),
	'format-description': require('./src/rules/format-description'),
	'format-param-description': require('./src/rules/format-param-description'),
	'keyword-spacing': require('./src/rules/keyword-spacing'),
	'member-order': require('./src/rules/member-order'),
	'newline-after-description': require('./src/rules/newline-after-description'),
	'require-jsdoc': require('./src/rules/require-jsdoc'),
	'unbound-method': require('./src/rules/unbound-method')
};
