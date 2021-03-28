// -------------------
//  Parameters and UI
// -------------------

const gui = new dat.GUI()
const params = {
    Download_ImaG3a: () => save(),
    Random_seed : 673,
    Lines : false,
    Random_lines : false,
}

gui.add(params, "Download_ImaG3a")
gui.add(params, "Random_seed", 0, 10000,1)
gui.add(params, "Random_lines")
gui.add(params, "Lines", 0, 1, 1)

// -------------------
//       Drawing
// -------------------

function draw() {
    square(0,0,width)
    randomSeed(params.Random_seed)

    let Random_lines = 0
    if(params.Random_lines){Random_lines = 1}

    const u = (width/35)

    //Définition des points, éventuellement avec une position aléatoire 

    const G1a = [17+Random_lines*random(-17,18),0+Random_lines*random(0,35)]
    const G1b = [12+Random_lines*random(-12,23),35+Random_lines*random(-35,0)]
    const G2a = [17+Random_lines*random(-17,18),0+Random_lines*random(0,35)]
    const G2b = [20+Random_lines*random(-20,15),35+Random_lines*random(-35,0)]
    const G3a = [18+Random_lines*random(-17,17),0+Random_lines*random(0,35)]
    const G3b = [16+Random_lines*random(-16,19),35+Random_lines*random(-35,0)]
    const G4a = [0+Random_lines*random(0,35),15+Random_lines*random(-15,20)]
    const G4b = [35+Random_lines*random(-35,0),18+Random_lines*random(-18,17)]
    const G5a = [0+Random_lines*random(0,35),18+Random_lines*random(-18,17)]
    const G5b = [35+Random_lines*random(-35,0),18+Random_lines*random(-18,17)]

    let random1 = Random_lines*random(-14, 21)
    let random2 = Random_lines*random(-16, 19)
    const P11a = [13+random1,0]
    const P11b = [15+random2,35]
    const P12a = [15+random1,0]
    const P12b = [17+random2,35]

    random1 = Random_lines*random(-16, 19)
    random2 = Random_lines*random(-15, 20)
    const P21a = [0,16+random1]
    const P21b = [35,15+random2]
    const P22a = [0,17+random1]
    const P22b = [35,16+random1]

    random1 = Random_lines*random(-2, 33)
    random2 = Random_lines*random(-35, 0)
    const P31a = [0,4+random1]
    const P31b = [33,35+random2]
    const P32a = [0,2+random1]
    const P32b = [35,35+random2]
    const P33a = [1,0+random1]
    const P33b = [35,33+random2]

    random1 = Random_lines*random(-33, 2)
    random2 = Random_lines*random(-33, 2)
    const P41a = [31+random1,0]
    const P41b = [0,31+random2]
    const P42a = [33+random1,0]
    const P42b = [0,33+random2]
    const P43a = [35+random1,0]
    const P43b = [0,35+random2]

    random1 = Random_lines*random(-20, 15)
    random2 = Random_lines*random(-32, 3)
    const P51a = [19+random1,0]
    const P51b = [0,30+random2]
    const P52a = [20+random1,0]
    const P52b = [0,32+random2]
  
    // Gn = [ xb - xa / yb - ya , ya - coefficient directeur *  xa]  //Définition des équations de droite

    const G1 = [(G1b[1]-G1a[1])/(G1b[0]-G1a[0]), G1a[1]-(((G1b[1]-G1a[1])/(G1b[0]-G1a[0]))*G1a[0])]
    const G2 = [(G2b[1]-G2a[1])/(G2b[0]-G2a[0]), G2a[1]-(((G2b[1]-G2a[1])/(G2b[0]-G2a[0]))*G2a[0])]
    const G3 = [(G3b[1]-G3a[1])/(G3b[0]-G3a[0]), G3a[1]-(((G3b[1]-G3a[1])/(G3b[0]-G3a[0]))*G3a[0])]
    const G4 = [(G4b[1]-G4a[1])/(G4b[0]-G4a[0]), G4a[1]-(((G4b[1]-G4a[1])/(G4b[0]-G4a[0]))*G4a[0])]
    const G5 = [(G5b[1]-G5a[1])/(G5b[0]-G5a[0]), G5a[1]-(((G5b[1]-G5a[1])/(G5b[0]-G5a[0]))*G5a[0])]

    const P11 = [(P11b[1]-P11a[1])/(P11b[0]-P11a[0]), P11a[1]-(((P11b[1]-P11a[1])/(P11b[0]-P11a[0]))*P11a[0])]
    const P12 = [(P12b[1]-P12a[1])/(P12b[0]-P12a[0]), P12a[1]-(((P12b[1]-P12a[1])/(P12b[0]-P12a[0]))*P12a[0])]
    
    const P21 = [(P21b[1]-P21a[1])/(P21b[0]-P21a[0]), P21a[1]-(((P21b[1]-P21a[1])/(P21b[0]-P21a[0]))*P21a[0])]
    const P22 = [(P22b[1]-P22a[1])/(P22b[0]-P22a[0]), P22a[1]-(((P22b[1]-P22a[1])/(P22b[0]-P22a[0]))*P22a[0])]

    const P31 = [(P31b[1]-P31a[1])/(P31b[0]-P31a[0]), P31a[1]-(((P31b[1]-P31a[1])/(P31b[0]-P31a[0]))*P31a[0])]
    const P32 = [(P32b[1]-P32a[1])/(P32b[0]-P32a[0]), P32a[1]-(((P32b[1]-P32a[1])/(P32b[0]-P32a[0]))*P32a[0])]
    const P33 = [(P33b[1]-P33a[1])/(P33b[0]-P33a[0]), P33a[1]-(((P33b[1]-P33a[1])/(P33b[0]-P33a[0]))*P33a[0])]

    const P41 = [(P41b[1]-P41a[1])/(P41b[0]-P41a[0]), P41a[1]-(((P41b[1]-P41a[1])/(P41b[0]-P41a[0]))*P41a[0])]
    const P42 = [(P42b[1]-P42a[1])/(P42b[0]-P42a[0]), P42a[1]-(((P42b[1]-P42a[1])/(P42b[0]-P42a[0]))*P42a[0])]
    const P43 = [(P43b[1]-P43a[1])/(P43b[0]-P43a[0]), P43a[1]-(((P43b[1]-P43a[1])/(P43b[0]-P43a[0]))*P43a[0])]

    const P51 = [(P51b[1]-P51a[1])/(P51b[0]-P51a[0]), P51a[1]-(((P51b[1]-P51a[1])/(P51b[0]-P51a[0]))*P51a[0])]
    const P52 = [(P52b[1]-P52a[1])/(P52b[0]-P52a[0]), P52a[1]-(((P52b[1]-P52a[1])/(P52b[0]-P52a[0]))*P52a[0])]

    let Droites = [G1,G2,G3,G4,G5,  P11,P12,  P21,P22,  P31,P32,P33,  P41,P42,P43,  P51,P52]

    //Dessin des trois Zones principales

    for(let y=0; y<=width; y++){
        
        stroke(53,105,157) //Zone bleue
        line(0, y, (y - G1[1]*u)/G1[0], y) 

        stroke(200,223,213) //Zone verte
        if(y<=G2[0]*((G4[1]*u-G2[1]*u)/(G2[0]-G4[0]))+G2[1]*u){  //intersection des deux droites en x = (Coo2 - Coo1) / (coefd2 - coefd1)
            line(width, y, (y-G2[1]*u)/G2[0], y)
        } else {
            line(width, y, (y-G4[1]*u)/G4[0], y)
        }

        stroke(222,222,235) //Zone mauve
        if(y<=G3[0]*((G5[1]*u-G3[1]*u)/(G3[0]-G5[0]))+G3[1]*u){
            line(width, y, (y - G5[1]*u)/G5[0], y)
        } else {
            line(width, y, (y - G3[1]*u)/G3[0], y)
        }    
    }

    //Dessin des petites zones colorées

    //x d'intersection = (Droites[i+1][1]-Droites[i][1])/(Droites[i][0]-Droites[i+1][0])
    //y d'intersection = f(xi)

    stroke(random(100,255), random(100,150), random(100,200))
    for(let  x = (P33[1]*u-P41[1]*u)/(P41[0]-P33[0]); x<=(P33[1]*u-P42[1]*u)/(P42[0]-P33[0]); x+=0.5){
        line(x, P33[0]*x+P33[1]*u, x-((P33[1]*u-P41[1]*u)/(P41[0]-P33[0])-(P32[1]*u-P41[1]*u)/(P41[0]-P32[0])), P32[0]*(x-((P33[1]*u-P41[1]*u)/(P41[0]-P33[0])-(P32[1]*u-P41[1]*u)/(P41[0]-P32[0])))+(P32[1]*u))
    }
    stroke(random(0,155), random(0,50), random(0,100))
    for(let  x = (P33[1]*u-P42[1]*u)/(P42[0]-P33[0]); x<=(P33[1]*u-P43[1]*u)/(P43[0]-P33[0]); x+=0.5){
        line(x, P33[0]*x+P33[1]*u, x-((P33[1]*u-P42[1]*u)/(P42[0]-P33[0])-(P32[1]*u-P42[1]*u)/(P42[0]-P32[0])), P32[0]*(x-((P33[1]*u-P42[1]*u)/(P42[0]-P33[0])-(P32[1]*u-P42[1]*u)/(P42[0]-P32[0])))+(P32[1]*u))
    }
    stroke(0, 0, 0)
    for(let y = P32[0]*((P12[1]*u-P42[1]*u)/(P42[0]-P12[0])+P32[1]*u); y<=width; y+=0.5){
        line((y-P11[1]*u)/P11[0], y, (y-P12[1]*u)/P12[0], y)
    }
    stroke(random(50,100), random(100,150), random(200,255))
    for(let  x = (P31[1]*u-P21[1]*u)/(P21[0]-P31[0]); x<=(P11[1]*u-P21[1]*u)/(P21[0]-P11[0]); x+=0.5){
        line(x, P31[0]*x+P31[1]*u, x-((P31[1]*u-P21[1]*u)/(P21[0]-P31[0])-(P31[1]*u-P21[1]*u)/(P21[0]-P31[0])), x*P21[0]+P22[1]*u)
    }
    stroke(random(100,255), random(100,150), random(100,200))
    for(let  x = (P32[1]*u-P51[1]*u)/(P51[0]-P32[0]); x<=(P32[1]*u-P52[1]*u)/(P52[0]-P32[0]); x+=0.5){
        line(x, P32[0]*x+P32[1]*u, x-((P32[1]*u-P51[1]*u)/(P51[0]-P32[0])-(P31[1]*u-P51[1]*u)/(P51[0]-P31[0])), P31[0]*(x-((P32[1]*u-P51[1]*u)/(P51[0]-P32[0])-(P31[1]*u-P51[1]*u)/(P51[0]-P31[0])))+(P31[1]*u))
    }
    stroke(random(100,255), random(100,150), random(100,200))
    for(let  x = (P31[1]*u-P51[1]*u)/(P51[0]-P31[0]); x<=(P31[1]*u-P52[1]*u)/(P52[0]-P31[0]); x+=0.5){
        line(x, P31[0]*x+P31[1]*u, (P21[1]*u-P51[1]*u)/(P51[0]-P21[0]), P21[0]*(P21[1]*u-P51[1]*u)/(P51[0]-P21[0])+(P21[1]*u))
    }
    stroke(random(100,155), random(100,250), random(100,200))
    for(let  x = (P21[1]*u-P51[1]*u)/(P51[0]-P21[0]); x<=(P21[1]*u-P52[1]*u)/(P52[0]-P21[0]); x+=0.5){
        line(x, P21[0]*x+P21[1]*u, x-((P21[1]*u-P51[1]*u)/(P51[0]-P21[0])-(P22[1]*u-P51[1]*u)/(P51[0]-P22[0])), P22[0]*(x-((P21[1]*u-P51[1]*u)/(P51[0]-P21[0])-(P22[1]*u-P51[1]*u)/(P51[0]-P22[0])))+(P22[1]*u))
    }
    stroke(random(100, 255), random(100, 200), random(10, 100))
    for(let y = P31[0]*((P21[1]*u-P31[1]*u)/(P31[0]-P21[0]))+P31[1]*u; y<=P22[0]*((P21[1]*u-P31[1]*u)/(P31[0]-P21[0]))+P22[1]*u; y+=0.5){
        line((P21[1]*u-P52[1]*u)/(P52[0]-P21[0]), P21[0]*((P21[1]*u-P51[1]*u)/(P51[0]-P21[0]))+P21[1]*u, (P21[1]*u-P31[1]*u)/(P31[0]-P21[0]), y)
    }

    //Affichage éventuellement des lignes et des axes de construction

    if(params.Lines){
        stroke(255,0,0)

        for(let i=5; i<=16; i++){
            line((0-Droites[i][1]*u)/Droites[i][0], 0, (width-Droites[i][1]*u)/Droites[i][0], width)
        }
    }
}

// -------------------
//    Initialization
// -------------------

function setup() {
    p6_CreateCanvas()
}

function windowResized() {
    p6_ResizeCanvas()
}