var gui = new dat.GUI();
var params = {
    Download_ImaG3a: function () { return save(); },
    Random_seed: 673,
    Lines: false,
    Random_lines: false,
};
gui.add(params, "Download_ImaG3a");
gui.add(params, "Random_seed", 0, 10000, 1);
gui.add(params, "Random_lines");
gui.add(params, "Lines", 0, 1, 1);
function draw() {
    square(0, 0, width);
    randomSeed(params.Random_seed);
    var Random_lines = 0;
    if (params.Random_lines) {
        Random_lines = 1;
    }
    var u = (width / 35);
    var G1a = [17 + Random_lines * random(-17, 18), 0 + Random_lines * random(0, 35)];
    var G1b = [12 + Random_lines * random(-12, 23), 35 + Random_lines * random(-35, 0)];
    var G2a = [17 + Random_lines * random(-17, 18), 0 + Random_lines * random(0, 35)];
    var G2b = [20 + Random_lines * random(-20, 15), 35 + Random_lines * random(-35, 0)];
    var G3a = [18 + Random_lines * random(-17, 17), 0 + Random_lines * random(0, 35)];
    var G3b = [16 + Random_lines * random(-16, 19), 35 + Random_lines * random(-35, 0)];
    var G4a = [0 + Random_lines * random(0, 35), 15 + Random_lines * random(-15, 20)];
    var G4b = [35 + Random_lines * random(-35, 0), 18 + Random_lines * random(-18, 17)];
    var G5a = [0 + Random_lines * random(0, 35), 18 + Random_lines * random(-18, 17)];
    var G5b = [35 + Random_lines * random(-35, 0), 18 + Random_lines * random(-18, 17)];
    var random1 = Random_lines * random(-14, 21);
    var random2 = Random_lines * random(-16, 19);
    var P11a = [13 + random1, 0];
    var P11b = [15 + random2, 35];
    var P12a = [15 + random1, 0];
    var P12b = [17 + random2, 35];
    random1 = Random_lines * random(-16, 19);
    random2 = Random_lines * random(-15, 20);
    var P21a = [0, 16 + random1];
    var P21b = [35, 15 + random2];
    var P22a = [0, 17 + random1];
    var P22b = [35, 16 + random1];
    random1 = Random_lines * random(-2, 33);
    random2 = Random_lines * random(-35, 0);
    var P31a = [0, 4 + random1];
    var P31b = [33, 35 + random2];
    var P32a = [0, 2 + random1];
    var P32b = [35, 35 + random2];
    var P33a = [1, 0 + random1];
    var P33b = [35, 33 + random2];
    random1 = Random_lines * random(-33, 2);
    random2 = Random_lines * random(-33, 2);
    var P41a = [31 + random1, 0];
    var P41b = [0, 31 + random2];
    var P42a = [33 + random1, 0];
    var P42b = [0, 33 + random2];
    var P43a = [35 + random1, 0];
    var P43b = [0, 35 + random2];
    random1 = Random_lines * random(-20, 15);
    random2 = Random_lines * random(-32, 3);
    var P51a = [19 + random1, 0];
    var P51b = [0, 30 + random2];
    var P52a = [20 + random1, 0];
    var P52b = [0, 32 + random2];
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
    var P51 = [(P51b[1] - P51a[1]) / (P51b[0] - P51a[0]), P51a[1] - (((P51b[1] - P51a[1]) / (P51b[0] - P51a[0])) * P51a[0])];
    var P52 = [(P52b[1] - P52a[1]) / (P52b[0] - P52a[0]), P52a[1] - (((P52b[1] - P52a[1]) / (P52b[0] - P52a[0])) * P52a[0])];
    var Droites = [G1, G2, G3, G4, G5, P11, P12, P21, P22, P31, P32, P33, P41, P42, P43, P51, P52];
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
    stroke(random(100, 255), random(100, 150), random(100, 200));
    for (var x = (P33[1] * u - P41[1] * u) / (P41[0] - P33[0]); x <= (P33[1] * u - P42[1] * u) / (P42[0] - P33[0]); x += 0.5) {
        line(x, P33[0] * x + P33[1] * u, x - ((P33[1] * u - P41[1] * u) / (P41[0] - P33[0]) - (P32[1] * u - P41[1] * u) / (P41[0] - P32[0])), P32[0] * (x - ((P33[1] * u - P41[1] * u) / (P41[0] - P33[0]) - (P32[1] * u - P41[1] * u) / (P41[0] - P32[0]))) + (P32[1] * u));
    }
    stroke(random(0, 155), random(0, 50), random(0, 100));
    for (var x = (P33[1] * u - P42[1] * u) / (P42[0] - P33[0]); x <= (P33[1] * u - P43[1] * u) / (P43[0] - P33[0]); x += 0.5) {
        line(x, P33[0] * x + P33[1] * u, x - ((P33[1] * u - P42[1] * u) / (P42[0] - P33[0]) - (P32[1] * u - P42[1] * u) / (P42[0] - P32[0])), P32[0] * (x - ((P33[1] * u - P42[1] * u) / (P42[0] - P33[0]) - (P32[1] * u - P42[1] * u) / (P42[0] - P32[0]))) + (P32[1] * u));
    }
    stroke(0, 0, 0);
    for (var y = P32[0] * ((P12[1] * u - P42[1] * u) / (P42[0] - P12[0]) + P32[1] * u); y <= width; y += 0.5) {
        line((y - P11[1] * u) / P11[0], y, (y - P12[1] * u) / P12[0], y);
    }
    stroke(random(50, 100), random(100, 150), random(200, 255));
    for (var x = (P31[1] * u - P21[1] * u) / (P21[0] - P31[0]); x <= (P11[1] * u - P21[1] * u) / (P21[0] - P11[0]); x += 0.5) {
        line(x, P31[0] * x + P31[1] * u, x - ((P31[1] * u - P21[1] * u) / (P21[0] - P31[0]) - (P31[1] * u - P21[1] * u) / (P21[0] - P31[0])), x * P21[0] + P22[1] * u);
    }
    stroke(random(100, 255), random(100, 150), random(100, 200));
    for (var x = (P32[1] * u - P51[1] * u) / (P51[0] - P32[0]); x <= (P32[1] * u - P52[1] * u) / (P52[0] - P32[0]); x += 0.5) {
        line(x, P32[0] * x + P32[1] * u, x - ((P32[1] * u - P51[1] * u) / (P51[0] - P32[0]) - (P31[1] * u - P51[1] * u) / (P51[0] - P31[0])), P31[0] * (x - ((P32[1] * u - P51[1] * u) / (P51[0] - P32[0]) - (P31[1] * u - P51[1] * u) / (P51[0] - P31[0]))) + (P31[1] * u));
    }
    stroke(random(100, 255), random(100, 150), random(100, 200));
    for (var x = (P31[1] * u - P51[1] * u) / (P51[0] - P31[0]); x <= (P31[1] * u - P52[1] * u) / (P52[0] - P31[0]); x += 0.5) {
        line(x, P31[0] * x + P31[1] * u, (P21[1] * u - P51[1] * u) / (P51[0] - P21[0]), P21[0] * (P21[1] * u - P51[1] * u) / (P51[0] - P21[0]) + (P21[1] * u));
    }
    stroke(random(100, 155), random(100, 250), random(100, 200));
    for (var x = (P21[1] * u - P51[1] * u) / (P51[0] - P21[0]); x <= (P21[1] * u - P52[1] * u) / (P52[0] - P21[0]); x += 0.5) {
        line(x, P21[0] * x + P21[1] * u, x - ((P21[1] * u - P51[1] * u) / (P51[0] - P21[0]) - (P22[1] * u - P51[1] * u) / (P51[0] - P22[0])), P22[0] * (x - ((P21[1] * u - P51[1] * u) / (P51[0] - P21[0]) - (P22[1] * u - P51[1] * u) / (P51[0] - P22[0]))) + (P22[1] * u));
    }
    stroke(random(100, 255), random(100, 200), random(10, 100));
    for (var y = P31[0] * ((P21[1] * u - P31[1] * u) / (P31[0] - P21[0])) + P31[1] * u; y <= P22[0] * ((P21[1] * u - P31[1] * u) / (P31[0] - P21[0])) + P22[1] * u; y += 0.5) {
        line((P21[1] * u - P52[1] * u) / (P52[0] - P21[0]), P21[0] * ((P21[1] * u - P51[1] * u) / (P51[0] - P21[0])) + P21[1] * u, (P21[1] * u - P31[1] * u) / (P31[0] - P21[0]), y);
    }
    if (params.Lines) {
        stroke(255, 0, 0);
        for (var i = 5; i <= 16; i++) {
            line((0 - Droites[i][1] * u) / Droites[i][0], 0, (width - Droites[i][1] * u) / Droites[i][0], width);
        }
    }
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