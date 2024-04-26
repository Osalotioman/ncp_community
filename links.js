// Create a div element to contain the new content
var div = document.createElement('div');
// Create an h2 element
var h2 = document.createElement('h2');
h2.textContent = 'Repository Pages'; // Set the text content of the h2 element
// Create a ul element
var ul = document.createElement('ul');
var links = [
    "https://docs.google.com/spreadsheets/d/1EMK2fXn6rR_q4wJV4fU-CR55GBwVqwWYESp7DDpYD4U/edit?usp=sharing",
    "https://osazuwaemmanuel.github.io/ncp_community/get_unsolved_and_solved_problems.html",
    "https://osazuwaemmanuel.github.io/ncp_community/resources.html"
]
var link_names = [
    "Updating Upsolves",
    "Get Unsolved and Solved Problems of Codeforces User",
    "Competitive Programming Resources"
]
for(let i=0; i<links.length; ++i){
    let li1 = document.createElement('li');
    let a1 = document.createElement('a');
    a1.href = links[i];
    a1.textContent = link_names[i];
    li1.appendChild(a1);
    ul.appendChild(li1);
}
// Append h2 and ul to the div
div.appendChild(h2);
div.appendChild(ul);
/*
// Create li elements with anchor (a) elements inside
var li1 = document.createElement('li');
var a1 = document.createElement('a');
a1.href = '';
a1.textContent = 'Updating Upsolves';
li1.appendChild(a1);

var li2 = document.createElement('li');
var a2 = document.createElement('a');
a2.href = '';
a2.textContent = '';
li2.appendChild(a2);

var li3 = document.createElement('li');
var a3 = document.createElement('a');
a3.href = '';
a3.textContent = '';
li3.appendChild(a3);

// Append li elements to the ul
ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);
*/

// Get the div with ID 'content' and append the created div to it
var contentDiv = document.getElementById('links');
contentDiv.appendChild(div);
