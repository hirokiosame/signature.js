'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports['default'] = signature;

function signature() {
	for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
		args[_key] = arguments[_key];
	}

	var sigs = {};

	var _iteratorNormalCompletion = true;
	var _didIteratorError = false;
	var _iteratorError = undefined;

	try {
		for (var _iterator = args[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
			var sig = _step.value;
			(sigs[sig.length] = sigs[sig.length] || []).push(sig);
		}
	} catch (err) {
		_didIteratorError = true;
		_iteratorError = err;
	} finally {
		try {
			if (!_iteratorNormalCompletion && _iterator['return']) {
				_iterator['return']();
			}
		} finally {
			if (_didIteratorError) {
				throw _iteratorError;
			}
		}
	}

	return function mapArgs(args) {
		var _throw = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

		var argLen = args.length;

		if (sigs[argLen]) {

			// For every signature in array
			var _iteratorNormalCompletion2 = true;
			var _didIteratorError2 = false;
			var _iteratorError2 = undefined;

			try {
				perSignature: for (var _iterator2 = sigs[argLen][Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
					var sig = _step2.value;

					var result = {};

					// Compare each arg
					for (var i = 0; i < argLen; i++) {

						// If type is set, enforce type check
						if (sig[i] instanceof Array) {

							if (typeof sig[i][0] === 'string' && typeof args[i] !== sig[i][0]) {
								continue perSignature;
							}

							if (typeof sig[i][0] === 'function' && !(args[i] instanceof sig[i][0])) {
								continue perSignature;
							}

							result[sig[i][1]] = args[i];
						} else {
							result[sig[i]] = args[i];
						}
					}
					return result;
				}
			} catch (err) {
				_didIteratorError2 = true;
				_iteratorError2 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion2 && _iterator2['return']) {
						_iterator2['return']();
					}
				} finally {
					if (_didIteratorError2) {
						throw _iteratorError2;
					}
				}
			}
		}

		if (_throw) {
			throw new Error('No matching function signature!');
		}

		return {};
	};
}

;
module.exports = exports['default'];

//# sourceMappingURL=index.js.map