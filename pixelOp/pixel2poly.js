var imageData;
var width;
var height;
var c;
var oldCellData;
var newCellData;
var stepWidth = 2;
var stepHeight = 10;

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

function createImageData(canvasId, rule, amount) {
    currentRule = rule;

    var element = document.getElementById(canvasId);
    c = element.getContext("2d");

    element.width = $(element).width();
    element.height = $(element).height();

    width = element.clientWidth;
    height = element.clientHeight;

    for (var i = 0; i < parseInt(amount); i++) {
        anim(rule);
    }
}

function verticalLines() {
    for (var x = 0; x < (width - stepWidth); x += stepWidth) {
        for (var y = 0; y < (height - stepHeight); y += stepHeight) {

            var sum1 = parseInt(oldCellData[x + y * width]);
            var sum2 = parseInt(oldCellData[x + stepWidth + (y + stepHeight) * width]);

            var sx1 = randInt(x - stepWidth, x + stepWidth);
            var sy1 = randInt(y - stepHeight, y + stepWidth);

            var sx2 = randInt(x - stepWidth, x + stepWidth);
            var sy2 = randInt(y - stepHeight, y + stepWidth);

            var xx = randInt(0, width);
            var yy = randInt(0, height);

            c.fillStyle = "#" + sum1.toString(16);
            c.beginPath();
            c.moveTo(x, y);
            var nrOfPoints = 5;
            var points = new Array(nrOfPoints * 2);
            for (var i = 0; i < nrOfPoints * 2; i += 2) {
                points[i] = randInt(x - stepWidth, x + stepWidth); //width;
                points[i + 1] = height; //randInt(y - stepHeight, y + stepWidth);
            }

            c.moveTo(points[0].x, points[0].y);

            for (i = 0; i < nrOfPoints - 4; i += 2) {
                var xc = (points[i] + points[i + 2]) / 2;
                var yc = (points[i + 1] + points[i + 3]) / 2;
                c.quadraticCurveTo(points[i], points[i + 1], xc, yc);
            }
            c.quadraticCurveTo(points[i], points[i + 1], points[i + 2], points[i + 3]);
            c.fill();
        }
    }
}

function random1() {
    for (var x = 0; x < (width - stepWidth); x += stepWidth) {
        for (var y = 0; y < (height - stepHeight); y += stepHeight) {

            var sum1 = parseInt(oldCellData[x + y * width]);
            var sum2 = parseInt(oldCellData[x + stepWidth + (y + stepHeight) * width]);

            var sx1 = randInt(x - stepWidth, x + stepWidth);
            var sy1 = randInt(y - stepHeight, y + stepWidth);

            var sx2 = randInt(x - stepWidth, x + stepWidth);
            var sy2 = randInt(y - stepHeight, y + stepWidth);

            var xx = randInt(0, width);
            var yy = randInt(0, height);

            c.fillStyle = "#" + sum1.toString(16);
            c.beginPath();
            c.moveTo(x, y);
            var nrOfPoints = 5;
            var points = new Array(nrOfPoints * 2);
            for (var i = 0; i < nrOfPoints * 2; i += 2) {
                points[i] = width;
                points[i + 1] = randInt(y - stepHeight, y + stepWidth);
            }

            c.moveTo(points[0].x, points[0].y);

            for (i = 0; i < nrOfPoints - 4; i += 2) {
                var xc = (points[i] + points[i + 2]) / 2;
                var yc = (points[i + 1] + points[i + 3]) / 2;
                c.quadraticCurveTo(points[i], points[i + 1], xc, yc);
            }
            c.quadraticCurveTo(points[i], points[i + 1], points[i + 2], points[i + 3]);
            c.fill();
        }
    }
}

function random2() {
    for (var x = 0; x < (width - stepWidth); x += stepWidth) {
        for (var y = 0; y < (height - stepHeight); y += stepHeight) {

            var sum1 = parseInt(oldCellData[x + y * width]);
            var sum2 = parseInt(oldCellData[x + stepWidth + (y + stepHeight) * width]);

            var sx1 = randInt(x - stepWidth, x + stepWidth);
            var sy1 = randInt(y - stepHeight, y + stepWidth);

            var sx2 = randInt(x - stepWidth, x + stepWidth);
            var sy2 = randInt(y - stepHeight, y + stepWidth);

            var xx = randInt(0, width);
            var yy = randInt(0, height);

            c.fillStyle = "#" + sum1.toString(16);
            c.beginPath();
            c.moveTo(x, y);
            var nrOfPoints = 5;
            var points = new Array(nrOfPoints * 2);
            for (var i = 0; i < nrOfPoints * 2; i += 2) {
                points[i] = randInt(x - stepWidth, x + stepWidth);
                points[i + 1] = randInt(y - stepHeight, y + stepWidth);
            }

            c.moveTo(points[0].x, points[0].y);

            for (i = 0; i < nrOfPoints - 4; i += 2) {
                var xc = (points[i] + points[i + 2]) / 2;
                var yc = (points[i + 1] + points[i + 3]) / 2;
                c.quadraticCurveTo(points[i], points[i + 1], xc, yc);
            }
            c.quadraticCurveTo(points[i], points[i + 1], points[i + 2], points[i + 3]);
            c.fill();
        }
    }
}

function triangles() {
    for (var x = 0; x < (width - stepWidth); x += stepWidth) {
        for (var y = 0; y < (height - stepHeight); y += stepHeight) {

            var sum1 = parseInt(oldCellData[x + y * width]);
            var sum2 = parseInt(oldCellData[x + stepWidth + (y + stepHeight) * width]);

            var sx1 = randInt(x - stepWidth, x + stepWidth);
            var sy1 = randInt(y - stepHeight, y + stepWidth);

            var sx2 = randInt(x - stepWidth, x + stepWidth);
            var sy2 = randInt(y - stepHeight, y + stepWidth);

            var xx = randInt(0, width);
            var yy = randInt(0, height);

            c.fillStyle = "#" + sum1.toString(16);
            c.beginPath();
            c.moveTo(sx1, sy1);
            c.lineTo(sx1 + stepWidth, sy1 + stepHeight);
            c.lineTo(sx1, sy1 + stepHeight);
            c.closePath();
            c.fill();
        }
    }
}

function rectangles() {
    stepWidth = randInt(1, 10);
    stepHeight = randInt(1, 10);
    for (var x = 0; x < (width - stepWidth); x += stepWidth) {
        for (var y = 0; y < (height - stepHeight); y += stepHeight) {

            var sum1 = parseInt(oldCellData[x + y * width]);
            var sum2 = parseInt(oldCellData[x + stepWidth + (y + stepHeight) * width]);

            var sx1 = randInt(x - stepWidth, x + stepWidth);
            var sy1 = randInt(y - stepHeight, y + stepWidth);

            var sx2 = randInt(x - stepWidth, x + stepWidth);
            var sy2 = randInt(y - stepHeight, y + stepWidth);

            var xx = randInt(0, width);
            var yy = randInt(0, height);

            c.fillStyle = "#" + sum2.toString(16);
            c.beginPath();
            c.moveTo(x, y);
            c.lineTo(x + stepWidth, y);
            c.lineTo(x + stepWidth, y + stepHeight);
            c.lineTo(x, y + stepHeight);
            c.lineTo(x, y);
            c.closePath();
            c.fill();
        }
    }
}

function anim(rule) {
    if (rule === 'r0') {
        rectangles();
    } else if (rule === 'r1') {
        triangles();
    } else if (rule === 'r2') {
        verticalLines();
    } else if (rule === 'r3') {
        random1();
    } else if (rule === 'r4') {
        random2();
    }
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