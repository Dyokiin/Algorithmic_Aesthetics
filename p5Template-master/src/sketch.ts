// -------------------
//  Parameters and UI
// -------------------

const gui = new dat.GUI()
const params = {
    Download_ImaG3a: () => save(),
}

gui.add(params, "Download_ImaG3a")


// -------------------
//       Drawing
// -------------------


function draw() {

    let u = (width/35)

    let ellipse = [6.5*u,5*u]

    let G1a = [17,0]
    let G1b = [12,35]
    let G2a = [17,0]
    let G2b = [20,35]
    let G3a = [18,0]
    let G3b = [16,35]
    let G4a = [0,15]
    let G4b = [35,18]
    let G5a = [0,18]
    let G5b = [35,18]

    let P11a = [14,0]
    let P11b = [14,35]
    let P12a = [16,0]
    let P12b = [16,35]

    let P21a = [0,17]
    let P21b = [35,15]
    let P22a = [0,19]
    let P22b = [35,17]

    let P31a = [0,4]
    let P31b = [33,35]
    let P32a = [0,2]
    let P32b = [35,35]
    let P33a = [1,0]
    let P33b = [35,33]

    let P41a = [31,0]
    let P41b = [0,31]
    let P42a = [33,0]
    let P42b = [0,33]
    let P43a = [35,0]
    let P43b = [0,35]

    //let P51a = [random(0,35), random(0,35)]
    //let P51b = 
  

// Gn = [ xb - xa / yb - ya , ya - coefficient directeur *  xa]  //Définition des équations de droite

    let G1 = [(G1b[1]-G1a[1])/(G1b[0]-G1a[0]), G1a[1]-(((G1b[1]-G1a[1])/(G1b[0]-G1a[0]))*G1a[0])]
    let G2 = [(G2b[1]-G2a[1])/(G2b[0]-G2a[0]), G2a[1]-(((G2b[1]-G2a[1])/(G2b[0]-G2a[0]))*G2a[0])]
    let G3 = [(G3b[1]-G3a[1])/(G3b[0]-G3a[0]), G3a[1]-(((G3b[1]-G3a[1])/(G3b[0]-G3a[0]))*G3a[0])]
    let G4 = [(G4b[1]-G4a[1])/(G4b[0]-G4a[0]), G4a[1]-(((G4b[1]-G4a[1])/(G4b[0]-G4a[0]))*G4a[0])]
    let G5 = [(G5b[1]-G5a[1])/(G5b[0]-G5a[0]), G5a[1]-(((G5b[1]-G5a[1])/(G5b[0]-G5a[0]))*G5a[0])]

    let P11 = [(P11b[1]-P11a[1])/(P11b[0]-P11a[0]), P11a[1]-(((P11b[1]-P11a[1])/(P11b[0]-P11a[0]))*P11a[0])]
    let P12 = [(P12b[1]-P12a[1])/(P12b[0]-P12a[0]), P12a[1]-(((P12b[1]-P12a[1])/(P12b[0]-P12a[0]))*P12a[0])]
    
    let P21 = [(P21b[1]-P21a[1])/(P21b[0]-P21a[0]), P21a[1]-(((P21b[1]-P21a[1])/(P21b[0]-P21a[0]))*P21a[0])]
    let P22 = [(P22b[1]-P22a[1])/(P22b[0]-P22a[0]), P22a[1]-(((P22b[1]-P22a[1])/(P22b[0]-P22a[0]))*P22a[0])]

    let P31 = [(P31b[1]-P31a[1])/(P31b[0]-P31a[0]), P31a[1]-(((P31b[1]-P31a[1])/(P31b[0]-P31a[0]))*P31a[0])]
    let P32 = [(P32b[1]-P32a[1])/(P32b[0]-P32a[0]), P32a[1]-(((P32b[1]-P32a[1])/(P32b[0]-P32a[0]))*P32a[0])]
    let P33 = [(P33b[1]-P33a[1])/(P33b[0]-P33a[0]), P33a[1]-(((P33b[1]-P33a[1])/(P33b[0]-P33a[0]))*P33a[0])]

    let P41 = [(P41b[1]-P41a[1])/(P41b[0]-P41a[0]), P41a[1]-(((P41b[1]-P41a[1])/(P41b[0]-P41a[0]))*P41a[0])]
    let P42 = [(P42b[1]-P42a[1])/(P42b[0]-P42a[0]), P42a[1]-(((P42b[1]-P42a[1])/(P42b[0]-P42a[0]))*P42a[0])]
    let P43 = [(P43b[1]-P43a[1])/(P43b[0]-P43a[0]), P43a[1]-(((P43b[1]-P43a[1])/(P43b[0]-P43a[0]))*P43a[0])]


    let Droites = [G1,G2,G3,G4,G5,  P11,P12,  P21,P22,  P31,P32,P33,  P41,P42,P43]


    for(let y=0; y<=width; y++){
        
        stroke(53,105,157) //Zone Principale
        line(0, y, (y - G1[1]*u)/G1[0], y) 

        stroke(200,223,213) //Zone Haut Droit
        if(y<=G2[0]*((G4[1]*u-G2[1]*u)/(G2[0]-G4[0]))+G2[1]*u){  //intersection des deux droites
            line(width, y, (y-G2[1]*u)/G2[0], y)
        } else {
            line(width, y, (y-G4[1]*u)/G4[0], y)
        }

        stroke(222,222,235) //Zone Bas Droit
        if(y<=G3[0]*((G5[1]*u-G3[1]*u)/(G3[0]-G5[0]))+G3[1]*u){
            line(width, y, (y - G5[1]*u)/G5[0], y)
        } else {
            line(width, y, (y - G3[1]*u)/G3[0], y)
        }    
    } 

    for(let x= -ellipse[0]+14*u; x<= ellipse[0]+14*u; x++){
        for(let y= -ellipse[1]+16*u; y<=ellipse[1]+16*u; y++){
            
        }
    }



    stroke(255,0,0)

    for(let i=5; i<=15; i++){
        line((0-Droites[i][1]*u)/Droites[i][0], 0, (width-Droites[i][1]*u)/Droites[i][0], width)
    }

    noFill()
    beginShape()
    for(let t=0; t<=TWO_PI;t+=0.05){
        vertex((ellipse[0]*cos(t)) + 14*u, (ellipse[1]*sin(t)) + 16*u)
    }
    endShape(CLOSE)



    // stroke(0,0,0)
    // line(G1a[0]*u, G1a[1]*u, G1b[0]*u, G1b[1]*u)
    // line(G2a[0]*u, G2a[1]*u, G2b[0]*u, G2b[1]*u)
    // line(G3a[0]*u, G3a[1]*u, G3b[0]*u, G3b[1]*u)
    // line(G4a[0]*u, G4a[1]*u, G4b[0]*u, G4b[1]*u)
    // line(G5a[0]*u, G5a[1]*u, G5b[0]*u, G5b[1]*u)
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