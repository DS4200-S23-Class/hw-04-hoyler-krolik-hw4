




function init() {
    let pt_list = document.getElementsByClassName("circle")
    for (i=0; i < pt_list.length; i++) {
        
        pt_list[i].addEventListener("click", PtHover(pt_list, i));
    }
}



init()

function PtHover(pt_list, i) {
	
	pt_list[i].toggle("red");
}