function rgbToInt(r, g, b) {
	return (r << 16) | (g << 8) | (b);
}

function rgbaToInt(r, g, b, a) {
	return (r << 24) | (g << 16) | (b << 8) | (a);
}

function intToRgba(color) {
	var r = color >> 24 & 0xFF;
	var g = color >> 16 & 0xFF;
	var b = color >> 8 & 0xFF; 
	var a = color & 0xFF;
	
	return [r, g, b, a];
} 

function randInt(minVal, maxVal) {
	return minVal + Math.round(Math.random() * (maxVal - minVal));
}

function randFloat(minVal, maxVal) {
	return (minVal + Math.random() * (maxVal - minVal)).toFixed(2);
}

function isFunction(object) {
	return Object.prototype.toString.call(object) == '[object Function]';
}