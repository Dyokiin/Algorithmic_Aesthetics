var gui = new dat.GUI();
var params = {
    Download_ImaG3a: function () { return save(); },
};
gui.add(params, "Download_ImaG3a");
function draw() {
    var u = (width / 35);
    var ellipse = [6.5 * u, 5 * u];
    var G1a = [17, 0];
    var G1b = [12, 35];
    var G2a = [17, 0];
    var G2b = [20, 35];
    var G3a = [18, 0];
    var G3b = [16, 35];
    var G4a = [0, 15];
    var G4b = [35, 18];
    var G5a = [0, 18];
    var G5b = [35, 18];
    var P11a = [14, 0];
    var P11b = [14, 35];
    var P12a = [16, 0];
    var P12b = [16, 35];
    var P21a = [0, 17];
    var P21b = [35, 15];
    var P22a = [0, 19];
    var P22b = [35, 17];
    var P31a = [0, 4];
    var P31b = [33, 35];
    var P32a = [0, 2];
    var P32b = [35, 35];
    var P33a = [1, 0];
    var P33b = [35, 33];
    var P41a = [31, 0];
    var P41b = [0, 31];
    var P42a = [33, 0];
    var P42b = [0, 33];
    var P43a = [35, 0];
    var P43b = [0, 35];
    var G1 = [(G1b[1] - G1a[1]) / (G1b[0] - G1a[0]), G1a[1] - (((G1b[1] - G1a[1]) / (G1b[0] - G1a[0])) * G1a[0])];
    var G2 = [(G2b[1] - G2a[1]) / (G2b[0] - G2a[0]), G2a[1] - (((G2b[1] - G2a[1]) / (G2b[0] - G2a[0])) * G2a[0])];
    var G3 = [(G3b[1] - G3a[1]) / (G3b[0] - G3a[0]), G3a[1] - (((G3b[1] - G3a[1]) / (G3b[0] - G3a[0])) * G3a[0])];
    var G4 = [(G4b[1] - G4a[1]) / (G4b[0] - G4a[0]), G4a[1] - (((G4b[1] - G4a[1]) / (G4b[0] - G4a[0])) * G4a[0])];
    var G5 = [(G5b[1] - G5a[1]) / (G5b[0] - G5a[0]), G5a[1] - (((G5b[1] - G5a[1]) / (G5b[0] - G5a[0])) * G5a[0])];
    var P11 = [(P11b[1] - P11a[1]) / (P11b[0] - P11a[0]), P11a[1] - (((P11b[1] - P11a[1]) / (P11b[0] - P11a[0])) * P11a[0])];
    var P12 = [(P12b[1] - P12a[1]) / (P12b[0] - P12a[0]), P12a[1] - (((P12b[1] - P12a[1]) / (P12b[0] - P12a[0])) * P12a[0])];
    var P21 = [(P21b[1] - P21a[1]) / (P21b[0] - P21a[0]), P21a[1] - (((P21b[1] - P21a[1]) / (P21b[0] - P21a[0])) * P21a[0])];
    var P22 = [(P22b[1] - P22a[1]) / (P22b[0] - P22a[0]), P22a[1] - (((P22b[1] - P22a[1]) / (P22b[0] - P22a[0])) * P22a[0])];
    var P31 = [(P31b[1] - P31a[1]) / (P31b[0] - P31a[0]), P31a[1] - (((P31b[1] - P31a[1]) / (P31b[0] - P31a[0])) * P31a[0])];
    var P32 = [(P32b[1] - P32a[1]) / (P32b[0] - P32a[0]), P32a[1] - (((P32b[1] - P32a[1]) / (P32b[0] - P32a[0])) * P32a[0])];
    var P33 = [(P33b[1] - P33a[1]) / (P33b[0] - P33a[0]), P33a[1] - (((P33b[1] - P33a[1]) / (P33b[0] - P33a[0])) * P33a[0])];
    var P41 = [(P41b[1] - P41a[1]) / (P41b[0] - P41a[0]), P41a[1] - (((P41b[1] - P41a[1]) / (P41b[0] - P41a[0])) * P41a[0])];
    var P42 = [(P42b[1] - P42a[1]) / (P42b[0] - P42a[0]), P42a[1] - (((P42b[1] - P42a[1]) / (P42b[0] - P42a[0])) * P42a[0])];
    var P43 = [(P43b[1] - P43a[1]) / (P43b[0] - P43a[0]), P43a[1] - (((P43b[1] - P43a[1]) / (P43b[0] - P43a[0])) * P43a[0])];
    var Droites = [G1, G2, G3, G4, G5, P11, P12, P21, P22, P31, P32, P33, P41, P42, P43];
    for (var y = 0; y <= width; y++) {
        stroke(53, 105, 157);
        line(0, y, (y - G1[1] * u) / G1[0], y);
        stroke(200, 223, 213);
        if (y <= G2[0] * ((G4[1] * u - G2[1] * u) / (G2[0] - G4[0])) + G2[1] * u) {
            line(width, y, (y - G2[1] * u) / G2[0], y);
        }
        else {
            line(width, y, (y - G4[1] * u) / G4[0], y);
        }
        stroke(222, 222, 235);
        if (y <= G3[0] * ((G5[1] * u - G3[1] * u) / (G3[0] - G5[0])) + G3[1] * u) {
            line(width, y, (y - G5[1] * u) / G5[0], y);
        }
        else {
            line(width, y, (y - G3[1] * u) / G3[0], y);
        }
    }
    for (var x = -ellipse[0] + 14 * u; x <= ellipse[0] + 14 * u; x++) {
        for (var y = -ellipse[1] + 16 * u; y <= ellipse[1] + 16 * u; y++) {
        }
    }
    stroke(255, 0, 0);
    for (var i = 5; i <= 15; i++) {
        line((0 - Droites[i][1] * u) / Droites[i][0], 0, (width - Droites[i][1] * u) / Droites[i][0], width);
    }
    noFill();
    beginShape();
    for (var t = 0; t <= TWO_PI; t += 0.05) {
        vertex((ellipse[0] * cos(t)) + 14 * u, (ellipse[1] * sin(t)) + 16 * u);
    }
    endShape(CLOSE);
}
function setup() {
    p6_CreateCanvas();
}
function windowResized() {
    p6_ResizeCanvas();
}
var __ASPECT_RATIO = 1;
var __MARGIN_SIZE = 25;
function __desiredCanvasWidth() {
    var windowRatio = windowWidth / windowHeight;
    if (__ASPECT_RATIO > windowRatio) {
        return windowWidth - __MARGIN_SIZE * 2;
    }
    else {
        return __desiredCanvasHeight() * __ASPECT_RATIO;
    }
}
function __desiredCanvasHeight() {
    var windowRatio = windowWidth / windowHeight;
    if (__ASPECT_RATIO > windowRatio) {
        return __desiredCanvasWidth() / __ASPECT_RATIO;
    }
    else {
        return windowHeight - __MARGIN_SIZE * 2;
    }
}
var __canvas;
function __centerCanvas() {
    __canvas.position((windowWidth - width) / 2, (windowHeight - height) / 2);
}
function p6_CreateCanvas() {
    __canvas = createCanvas(__desiredCanvasWidth(), __desiredCanvasHeight());
    __centerCanvas();
}
function p6_ResizeCanvas() {
    resizeCanvas(__desiredCanvasWidth(), __desiredCanvasHeight());
    __centerCanvas();
}
var p6_SaveImageSequence = function (durationInFrames, fileExtension) {
    if (frameCount <= durationInFrames) {
        noLoop();
        var filename_1 = nf(frameCount - 1, ceil(log(durationInFrames) / log(10)));
        var mimeType = (function () {
            switch (fileExtension) {
                case 'png':
                    return 'image/png';
                case 'jpeg':
                case 'jpg':
                    return 'image/jpeg';
            }
        })();
        __canvas.elt.toBlob(function (blob) {
            p5.prototype.downloadFile(blob, filename_1, fileExtension);
            setTimeout(function () { return loop(); }, 100);
        }, mimeType);
    }
};
//# sourceMappingURL=../src/src/build.js.map