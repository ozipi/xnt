const xntConstants = {
	"00": "[xnt-empty]",
	"01": "[xnt-half-left]",
	"10": "[xnt-half-right]",
	"11": "[xnt-full]"
};

const binaryToHex = function(binary) {
	return xntConstants[binary];
};

const mainExport = {
	all: xntConstants,
	binaryToHex
}

export default mainExport
module.exports = mainExport