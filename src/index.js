export default function signature (...args) {

	let sigs = {};

	for( let sig of args ){ (sigs[sig.length] = sigs[sig.length] || []).push(sig); }

	return function mapArgs (args, _throw = false) {

		let argLen = args.length;

		if( sigs[argLen] ){

			// For every signature in array
			perSignature: for( let sig of sigs[argLen] ){

				let result = {};

				// Compare each arg
				for( let i = 0; i < argLen; i++ ){

					// If type is set, enforce type check
					if( sig[i] instanceof Array ){

						if(
							typeof sig[i][0] === 'string' &&
							typeof args[i] !== sig[i][0]
						){ continue perSignature; }

						if(
							typeof sig[i][0] === 'function' &&
							!(args[i] instanceof sig[i][0])
						){ continue perSignature; }

						result[sig[i][1]] = args[i];
					}else{					
						result[sig[i]] = args[i];
					}
				}
				return result;
			}

		}

		if( _throw ){
			throw new Error('No matching function signature!');
		}

		return {};
	};
};