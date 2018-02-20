import assert from 'assert';
import className from '../src/index';

describe('className', function() {

	it('should return block name', function() {
		assert.equal('block', className('block'));
	});

	it('should return block name with mods', function() {
		assert.equal('block block--mod1 block--mod2', className('block', ['mod1', 'mod2', undefined]));
		assert.equal('block block--mod1 block--mod2', className('block', {
			mod1: true,
			mod2: true,
			mod3: false
		}));
	});

	it('should return element name', function() {
		assert.equal('block__element', className('block', 'element'));
	});

	it('should return element name with mods', function() {
		assert.equal('block__element block__element--mod1 block__element--mod2', className('block', 'element', ['mod1', 'mod2', undefined]));
		assert.equal('block__element block__element--mod1 block__element--mod2', className('block', 'element', {
			mod1: true,
			mod2: true,
			mod3: false
		}));
	});

});