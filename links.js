var div = document.createElement('div');
var h2 = document.createElement('h2');
h2.textContent = 'Repository Pages';
var ul = document.createElement('ul');
var links = [
    "https://docs.google.com/spreadsheets/d/1EMK2fXn6rR_q4wJV4fU-CR55GBwVqwWYESp7DDpYD4U/edit?usp=sharing",
    "https://osalotioman.github.io/ncp_community/get_unsolved_and_solved_problems.html",
    "https://osalotioman.github.io/ncp_community/resources.html"
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
div.appendChild(h2);
div.appendChild(ul);
var contentDiv = document.getElementById('links');
contentDiv.appendChild(div);
