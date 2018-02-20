import assert from 'assert';
import flattenMods from '../src/flattenMods';

describe('flattenMods', function() {

	it('should return array of mods', function() {

		assert.equal(true, Array.isArray(flattenMods({
			mod1: true,
			mod2: false
		})));

		assert.equal(1, flattenMods({
			mod1: true,
			mod2: false
		}).length);

		assert.equal('mod1', flattenMods({
			mod1: true,
			mod2: false
		})[0]);

	});

});
