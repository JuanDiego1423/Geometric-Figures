function squarePerimeter(side){
    return side*4; 
}

function squarePerimeterCalculate(){
    const numberSide = document.getElementById("squareInput");
    const result = parseInt(numberSide.value);
    
    const perimeter = squarePerimeter(result);
    document.getElementById("squarePerimeter").innerText = "Its perimeter is:"  + perimeter + "cm";
}

function squarearea(side){
    return side*2; 
}

function squareareaCalculate(){
    const numberSide = document.getElementById("squareInput");
    const result = parseInt(numberSide.value);
    
    const area = squarearea(result);
    document.getElementById("squarearea").innerText = "Its area is:"  + area + "cmˆ2";
}

function clearAll() {
        let display = document.querySelector("squareInput")
        display.value=""; 
    }

//area y perimetro del circulo.
function circlePerimeter(radio){
    return Math.PI * radio * 2; 
}

function PerimeterCircle(){
    const numberRadio = document.getElementById("radioInput");
    const result = parseInt(numberRadio.value);
    
    const perimeter = circlePerimeter(result);
    document.getElementById("circlePerimeter").innerText = "Its perimeter is:"  + perimeter + "cm";
}

function circlearea(radio){
    return Math.PI * Math.pow(radio,2); 
}

function areaCircles(){
    const numberRadio = document.getElementById("radioInput");
    const result = parseInt(numberRadio.value);
    
    const area = circlearea(result);
    document.getElementById("circlearea").innerText = "Its area is:"  + area + "cm.";
}

//area y perimetro del triangulo 
function perimeterTriangle(side1, side2, base){
    return side1 + side2 + base; 
}

function perimeterCalculateTriangle(){
    const side1 = parseInt(document.getElementById("side1Input").value);
    const side2 = parseInt(document.getElementById("side2Input").value);
    const base = parseInt(document.getElementById("baseInput").value)
    
    const perimeter = perimeterTriangle(side1, side2, base);
    document.getElementById("PerimeterTriangle").innerText = "Its perimeter is:"  + perimeter + "cm";
}

function AreaTriangle(base, height){
    return (base * height)/2; 
}

function AreaCalculateTriangle(){
    const base = parseInt(document.getElementById("baseInput").value);
    const height = parseInt(document.getElementById("heightInput").value);
    
    const area = AreaTriangle(base, height);
    document.getElementById("AreaTriangle").innerText = "Its area is:"  + area + "cmˆ2.";
}