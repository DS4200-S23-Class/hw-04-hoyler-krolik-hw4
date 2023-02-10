





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



function PtAdd() {
    
    let x_cord = (document.getElementById("x-cord").value) * 25 + 100;
    let y_cord = 400 - ((document.getElementById("y-cord").value) * 25);


    let svg = document.getElementById('chart');

    circle = document.createElement('circle');
    
    circle.addEventListener("click", PtClick);

    circle.setAttribute('cx', x_cord);
    circle.setAttribute('cy', y_cord);
    circle.setAttribute('r', 8);

    svg.append(circle);
}

document.getElementById("addPt").addEventListener("click", PtAdd);


