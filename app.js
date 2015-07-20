/*1. Create a constructor function called Tree. 
It should take 4 arguments that correspond to attributes on the objects it creates. 
Two attributes should be 'name' and 'leaf shape'. Pick the other two. 

2. Create 4 tree objects using your Tree function.

3. Put those objects into an array called tree_array. 

4. for each tree in tree_array, 
add a block element to the tree-holder div that displays the tree's attributes*/


var Tree = function(name, leafShape, type, flowers) {
	this.name = name;
	this.leafShape = leafShape;
	this.type = type;
	this.flowers = flowers;
}

var oak = new Tree("Oak","oval", "Deciduous", "small");
var maple = new Tree("Maple","hand shaped", "Deciduous", "small");
var pine = new Tree("Pine","needle", "coniferous", "cones");
var redWood = new Tree("Red Wood","needle", "coniferous", "cones");

var tree_array = [oak, maple, pine, redWood];

html = ""

for(var i = 0; i < tree_array.length; i++) {
	html += "<div><h2>Tree Name: " + tree_array[i].name + "</h2>";
	html += "<p>Leaf Shape: " + tree_array[i].leafShape + "</p>";
	html += "<p>Type: " + tree_array[i].type + "</p>";
	html += "<p>Flowers: " + tree_array[i].flowers + "</p></div>";
}

document.getElementById("tree-holder").innerHTML = html;