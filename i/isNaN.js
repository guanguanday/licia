/* Check if value is an NaN.
 *
 * |Name  |Type   |Desc                   |
 * |------|-------|-----------------------|
 * |val   |*      |Value to check         |
 * |return|boolean|True if value is an NaN|
 *
 * Undefined is not an NaN, different from global isNaN function.
 *
 * ```javascript
 * isNaN(0); // -> false
 * isNaN(NaN); // -> true
 * ```
 */

/* module
 * env: all
 * test: all
 */

_('isNum');

function exports(val) {
    return isNum(val) && val !== +val;
}
