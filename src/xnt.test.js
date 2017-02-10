'use strict'

var expect = require('chai').expect
var xnt = require('./xnt');

describe('xnt', function() {
	it('should have a list of all available xnt symbols as an object', function(){
		expect(xnt.all).to.be.an('object');
	})

	it('should have a list of all available xnt symbols', function(){
		expect(xnt.all).to.have.all.keys('00', '01', '10', '11');
	})
	it('should return the full xnt symbol', function(){
		expect(xnt.binaryToHex("11")).equal("[xnt-full]");
	})
})