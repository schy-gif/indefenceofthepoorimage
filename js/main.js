
let outer = document.querySelector("#outer")
let content = document.querySelector("#content");

repeatContent(content, outer.offsetWidth);
function repeatContent(el, till) {
    let html = el.innerHTML;
    let counter= 0; // prevents infinite loop

    while (el.offsetWidth < till && counter < 100) {
        el.innerHTML += html;
        counter += 1;
    }
}

let el = outer.querySelector('#loop');
el.innerHTML = el.innerHTML + el.innerHTML;



console.log("testing")
$(".menu").click(function(){
	$(this).toggleClass("open")
})



$(".squarLR).hover(function(){
	$(".squareLRText").addClass ("shapeShift")
		
},function(){
	$(".another").removeClass ("shapeShift")
		
})

$(document).scroll(function(){
	var ft = parseInt ($(document).scrollTop());
	console.log(ft)

	$(".another").css({
		"trans form":"rotate("+ft+"deg)"
	})

	$(".menu").html(ft)

})


function hello (name) {
	num= "Hallo, "+name;
	return name;
}
