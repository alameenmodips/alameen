/*javascript alert*/
alert('use the compass tool to zoom in and out of the web page and pan the directions left, right, up and down the web map in the web page');

/*mouse coordinates movement/
function initCanvas() {
var ctx = document.getElementById('my_canvas').getContent('2d');
ctx.canvas.addEventListener('mousemove', function(event){
	var mouseX = event.clientX;
	var mouseY = event.clientY;
	var status = document.getElementById('status');
	status.innerHTML = mouseX+"  |  "+mouseY;
});
}
*/

/*mouse coordinates reader source code statr*/
function readMouseMove (e) {
    var result_x = document.getElementById('x_result');
    var result_y = document.getElementById('y_result');
    result_x.innerHTML = e.clientX+342552+'mE';
    result_y.innerHTML = e.clientY+1234325+'mN';
}
document.onmousemove = readMouseMove;
/*mouse coodinates reader source code end*/


/*layer control function start source code*/
function fag1() {
	var x = 
	document.getElementById("ACADEMIC_BUILDINGS");
	if (x.style.display === "block")
{
		x.style.display = "none";
	} else {
		x.style.display = "block";
}
}

function fag2() {
	var x = 
	document.getElementById("ADMINISTRATIVE_BUILDINGS");
	if (x.style.display === "block")
{
		x.style.display = "none";
	} else {
		x.style.display = "block";
}
}

function fag3() {
	var x = 
	document.getElementById("ATM_LOCATIONS");
	if (x.style.display === "block")
{
		x.style.display = "none";
	} else {
		x.style.display = "block";
}
}

function fag4() {
	var x = 
	document.getElementById("CBT_CENTERS");
	if (x.style.display === "block")
{
		x.style.display = "none";
	} else {
		x.style.display = "block";
}
}

function fag5() {
	var x = 
	document.getElementById("PUBLIC_AREAS");
	if (x.style.display === "block")
{
		x.style.display = "none";
	} else {
		x.style.display = "block";
}
}

function fag6() {
	var x = 
	document.getElementById("SERVICES");
	if (x.style.display === "block")
{
		x.style.display = "none";
	} else {
		x.style.display = "block";
}
}

function fag7() {
	var x = 
	document.getElementById("SCHOOLS");
	if (x.style.display === "block")
{
		x.style.display = "none";
	} else {
		x.style.display = "block";
}
}

function fag8() {
	var x = 
	document.getElementById("STAFF_RESIDENCES");
	if (x.style.display === "block")
{
		x.style.display = "none";
	} else {
		x.style.display = "block";
}
}

function fag9() {
	var x = 
	document.getElementById("STUDENT_RESIDENCE");
	if (x.style.display === "block")
{
		x.style.display = "none";
	} else {
		x.style.display = "block";
}
}

/*layer control function end*/