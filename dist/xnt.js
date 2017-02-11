"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var xntConstants = {
	"00": "[xnt-empty]",
	"01": "[xnt-half-left]",
	"10": "[xnt-half-right]",
	"11": "[xnt-full]"
};

var binaryToHex = function binaryToHex(binary) {
	return xntConstants[binary];
};

var mainExport = {
	all: xntConstants,
	binaryToHex: binaryToHex
};

exports.default = mainExport;

module.exports = mainExport;