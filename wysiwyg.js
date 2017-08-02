console.log("wysiwyg.js");


let coolCats = [
{
	title: "CEO",
	name: "Ham Sandwich",
	bio: "He's a ham sandwich.",
	image: "IMG",
	lifespan: {
		birth: "1981",
		death: "1982"
	}
},

{
	title: "VP",
	name: "Porkchop Sandwich",
	bio: "He's a porkchop sandwich",
	image: "IMG",
	lifespan: {
		birth: "1981",
		death: "1982"
	}
},

{
	title: "",
	name: "",
	bio: "",
	image: "",
	lifespan: {
		birth: "",
		death: ""
	}
},

{
	title: "",
	name: "",
	bio: "",
	image: "",
	lifespan: {
		birth: "",
		death: ""
	}
},

{
	title: "",
	name: "",
	bio: "",
	image: "",
	lifespan: {
		birth: "",
		death: ""
	}
}

];

console.log("coolCats", coolCats);

// example code
var counter = 0;
var outputEl = document.getElementById("outputEl");
for (; counter < 5; counter++) {
  // Give each person element a unique identifier
  outputEl.innerHTML += `<div class="person__container" id="person--${counter}">
							<person>
							  <header>
							  	<p class="person__name">Name: ${coolCats[counter].name}</p>
							  	<p class="person__title">Title: ${coolCats[counter].title}</p></header>
							  <section>
							  	<p class="person__image">${coolCats[counter].image}</p>
							  	<p class="person__bio">${coolCats[counter].bio}</p>
							  </section>
							  <footer>
							  	<span class="birth__year">${coolCats[counter].lifespan.birth} -- </span>
							  	<span class="death__year">${coolCats[counter].lifespan.death}</span>
							  </footer>
							</person>
  						</div>`;
}

// Now containerEl will have elements in it
var containerEl = document.getElementsByClassName("person__container");

// Event listeners are created
for (var i = 0; i < containerEl.length; i++) {
  containerEl[i].addEventListener("click", function (event) {
    // Logic to execute when the element is clicked
    console.log("event.target", event.target);
    console.log("event.target.parentElement", event.target.parentElement);
    console.log("event.target.parentElement.parentElement", event.target.parentElement.parentElement);
    console.log("event.target.parentElement.parentElement.parentElement", event.target.parentElement.parentElement.parentElement);
    console.log("event.target.parentElement.parentElement.parentElement.id", event.target.parentElement.parentElement.parentElement.id);

  });
};