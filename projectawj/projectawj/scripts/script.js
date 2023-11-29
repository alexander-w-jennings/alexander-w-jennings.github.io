/* 
	Student Name: Alexander Jennings
	Date: 11/14/2023
	File Name: script.js
*/

function hamburger() {
	var menu = document.getElementById("menu-links");
	if (menu.style.display === "block" || menu.style.display === "") {
		menu.style.display = "none"
	} else {
		menu.style.display = "block";
	}
}