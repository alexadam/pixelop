var imageData;
var width;
var height;
var c;
var oldCellData;
var newCellData;

function loadCanvas(imagePath) {

    var oc = document.getElementById("originalCanvas");
    var ctx = oc.getContext("2d");
    var img = new Image();
    img.onload = function () {

        oc.width = img.width;
        oc.height = img.height;
        ctx.drawImage(img, 0, 0, img.width, img.height);

        var originalImgData = ctx.getImageData(0, 0, img.width, img.height);
        var originalPixels = originalImgData.data;

        oldCellData = new Array(img.width * img.height);
        newCellData = new Array(img.width * img.height);

        for (var x = 0; x < img.width; x++) {
            for (var y = 0; y < img.height; y++) {
                var i = (x + y * img.width) * 4;

                var r = originalPixels[i];
                var g = originalPixels[i + 1];
                var b = originalPixels[i + 2];
                var a = originalPixels[i + 3];

                var tmpPv = rgbToInt(r, g, b)

                oldCellData[x + y * img.width] = tmpPv;
            }
        }
    };
    img.src = imagePath;
}

function createImageData(canvasId, nxExp, nyExp, newIndexExp, amount) {
    var element = document.getElementById(canvasId);
    c = element.getContext("2d");

    element.width = $(element).width();
    element.height = $(element).height();

    width = element.clientWidth;
    height = element.clientHeight;

    imageData = c.createImageData(width, height);

    for (var i = 0; i < parseInt(amount); i++) {
        anim(nxExp, nyExp, newIndexExp);
    }

    c.putImageData(imageData, 0, 0);
}

function widthSort(nxExp, nyExp, newIndexExp) {
    for (var x = 0; x < width - 1; x += 1) {
        var ssum = 0;
        for (var y = 0; y < height - 1; y += 1) {
            var index = x + y * width;

            var nx = eval(nxExp);
            var ny = eval(nyExp);
            var newIndex = eval(newIndexExp);

            newCellData[index] = oldCellData[newIndex];
        }
    }
}

function anim(nxExp, nyExp, newIndexExp) {
    widthSort(nxExp, nyExp, newIndexExp);
    draw(imageData);
    oldCellData = newCellData.slice(0);
    c.putImageData(imageData, 0, 0);
}

function draw(imageData) {
    for (var x = 0; x < width; x++) {
        for (var y = 0; y < height; y++) {
            var index = x + y * width;

            var r = newCellData[index] >> 16 & 0xFF;
            var g = newCellData[index] >> 8 & 0xFF;
            var b = newCellData[index] & 0xFF;

            setPixel(imageData, x, y, r, g, b, 255);
        }
    }
}

function setPixel(imageData, x, y, r, g, b, a) {
    var index = (x + y * imageData.width) * 4;
    imageData.data[index + 0] = r;
    imageData.data[index + 1] = g;
    imageData.data[index + 2] = b;
    imageData.data[index + 3] = a;
}