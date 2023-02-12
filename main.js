// function for clicking point, create red outline on clicked points
function PtClick() {
	this.classList.toggle("red");
}


// get list of initial points
let pt_list = document.getElementsByTagName("circle");

// add event listener to each intial points
for (i=0; i < pt_list.length; i++) {
    let pt = pt_list[i];
    pt.addEventListener("click", PtClick);
}


// function that adds point to the scatter plot
function PtAdd() {
    let x_cord = (document.getElementById("x-cord").value) * 50 + 100;
    let y_cord = 800 - ((document.getElementById("y-cord").value) * 50);


    let svg = document.getElementById('chart');
    let circle = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
    
    circle.addEventListener("click", PtClick);

    circle.setAttribute('cx', x_cord);
    circle.setAttribute('cy', y_cord);
    circle.setAttribute('r', 10);

    svg.append(circle);
}

document.getElementById("addPt").addEventListener("click", PtAdd);


