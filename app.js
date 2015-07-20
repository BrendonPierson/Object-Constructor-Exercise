/*1. Create a constructor function called Tree. 
It should take 4 arguments that correspond to attributes on the objects it creates. 
Two attributes should be 'name' and 'leaf shape'. Pick the other two. 

2. Create 4 tree objects using your Tree function.

3. Put those objects into an array called tree_array. 

4. for each tree in tree_array, 
add a block element to the tree-holder div that displays the tree's attributes*/


var Tree = function(name, leafShape, type, flowers, image) {
	this.name = name;
	this.leafShape = leafShape;
	this.type = type;
	this.flowers = flowers;
	this.image = image;
}

var oak = new Tree("Oak","oval", "Deciduous", "small", "http://images.fineartamerica.com/images-medium-large-5/angel-oak-tree-2009-louis-dallara.jpg");
var maple = new Tree("Maple","hand shaped", "Deciduous", "small", "http://img1.southernliving.timeinc.net/sites/default/files/image/2012/11/peak-color-maple-trees/sugar-maple-fall-color-x.jpg");
var pine = new Tree("Pine","needle", "coniferous", "cones", "http://www.bentler.us/eastern-washington/plants/trees/ponderosa-pine-tree2.jpg");
var redWood = new Tree("Red Wood","needle", "coniferous", "cones", "http://www.flowersociety.org/images/Essences/Research/Redwood/redwood-trees-2.jpg");

var tree_array = [oak, maple, pine, redWood];

html = ""

for(var i = 0; i < tree_array.length; i++) {
	html += "<div style='display: inline-block; margin: 30px; border: 1px solid black; padding: 5px; text-align: center'><h2>Tree Name: " + tree_array[i].name + "</h2>";
	html += "<img src=" + tree_array[i].image + " width='150' height='150'>";
	html += "<p>Leaf Shape: " + tree_array[i].leafShape + "</p>";
	html += "<p>Type: " + tree_array[i].type + "</p>";
	html += "<p>Flowers: " + tree_array[i].flowers + "</p></div>";
}

document.getElementById("tree-holder").innerHTML = html;