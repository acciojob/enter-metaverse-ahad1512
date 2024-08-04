//your JS code here. If required.
const para = document.createElement("p");
para.id = "status";
para.innerText = "Enter the Metaverse";

const heading = document.createElement("h1");
heading.innerText= "Entered Multiverse";
heading.style.display ="none";
const button = document.createElement("button");
button.innerText= "Enter";

const body = document.getElementsByTagName("body")[0];

button.addEventListener("click", function() {
	para.style.display= "none";
	heading.style.display ="flex";
})

body.append(para,heading,button);
