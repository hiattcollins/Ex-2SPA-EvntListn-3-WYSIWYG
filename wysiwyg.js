console.log("wysiwyg.js");


let coolCats = [
{
	title: "Enter title",
	name: "Enter name",
	bio: "Enter bio",
	image: "Enter image",
	lifespan: {
		birth: "Enter year of birth",
		death: "Enter year of death"
	}
},

{
	title: "Enter title",
	name: "Enter name",
	bio: "Enter bio",
	image: "Enter image",
	lifespan: {
		birth: "Enter year of birth",
		death: "Enter year of death"
	}
},

{
	title: "Enter title",
	name: "Enter name",
	bio: "Enter bio",
	image: "Enter image",
	lifespan: {
		birth: "Enter year of birth",
		death: "Enter year of death"
	}
},

{
	title: "Enter title",
	name: "Enter name",
	bio: "Enter bio",
	image: "Enter image",
	lifespan: {
		birth: "Enter year of birth",
		death: "Enter year of death"
	}
},

{
	title: "Enter title",
	name: "Enter name",
	bio: "Enter bio",
	image: "Enter image",
	lifespan: {
		birth: "Enter year of birth",
		death: "Enter year of death"
	}
}

];

console.log("coolCats", coolCats);



// example code
var counter = 0;
var backgroundColor;
var outputEl = document.getElementById("outputEl");
var toModify;

for (; counter < 5; counter++) {
  // Give each person element a unique identifier

  if (((counter + 1) % 2) === 0) {
  	backgroundColor = "yellowBackground";
  	console.log("backgroundColor", backgroundColor);
  } else {
  	backgroundColor = "blueBackground";
  	console.log("backgroundColor", backgroundColor);
  }


  outputEl.innerHTML += `<person class=${backgroundColor} id="${counter}">
							  <header>
							  	<div class="name">${coolCats[counter].name}</div>
							  	<br>
							  	<div class="title">${coolCats[counter].title}</div>
							  	<br>
							  </header>
							  <section>
							  	<div class="image">${coolCats[counter].image}
							  	</div>
							  	<br>				    
							  	<div class="bio">${coolCats[counter].bio}</span>
							  	</div>
							  	<br>
							  </section>
							  <footer>
							  	<div class="lifespan.birth">${coolCats[counter].lifespan.birth}</div><span>  --  </span>
							  	<div class="lifespan.death">${coolCats[counter].lifespan.death}</div>
							  </footer>
						</person>`;
}

// Now containerEl will have elements in it
var containerEl = document.getElementsByTagName("PERSON");

// Event listeners are created
for (var i = 0; i < containerEl.length; i++) {
  containerEl[i].addEventListener("click", function (event) {
    // Logic to execute when the element is clicked
    console.log("event.target", event.target);
    console.log("event.target.parentElement", event.target.parentElement);
    console.log("event.target.parentElement.parentElement", event.target.parentElement.parentElement);
    console.log("event.target.parentElement.parentElement.parentElement", event.target.parentElement.parentElement.parentElement);
    console.log("event.target.parentElement.parentElement.parentElement.id", event.target.parentElement.parentElement.parentElement.id);
    console.log("event.target.innerHTML", event.target.innerHTML);
    console.log("event.target.className", event.target.className);
    console.log("*** event.target.classList.item(0)", event.target.classList.item(0));

    if (event.target.tagName === "DIV") {
    	let allInfoHolders = document.getElementsByTagName("DIV");
    	for (var i = 0; i < allInfoHolders.length; i++) {
    		allInfoHolders[i].classList.remove("selectedField");
    	};


    	console.log("event.currentTarget", event.currentTarget);
    	console.log("event.currentTarget.children", event.currentTarget.children);
    	console.log("event.currentTarget.children.className", event.currentTarget.children.className);

    	// event.target.classList.toggle("infoHolder");
    	event.target.classList.add("selectedField");
    	toModify = event.target;
    	toModifyContainer = event.currentTarget;

    	console.log("toModify", toModify);
    	document.getElementById("inputField").focus();

    	let inputText = document.getElementById("inputField");


		inputText.addEventListener("keyup", function(event) {
			if (event.keyCode === 13) {
				if (toModify) {
					console.log("alert - enter key triggered");
					console.log("toModify.classList.item(0)", toModify.classList.item(0));
					let objKey = toModify.classList.item(0);
					console.log("toModifyContainer.id", toModifyContainer.id);
					console.log("objKey", objKey);
					objId =  toModifyContainer.id;
					console.log("event.target.value", event.target.value);
					// coolCats[objId].objKey = event.target.value;
					console.log("coolCats[objId]", coolCats[objId]);
					console.log("coolCats[objId][objKey]", coolCats[objId][objKey]);
					coolCats[objId][objKey] = event.target.value;
					// console.log("toObject", toObject);
					event.target.value = "";
					toModify = "";


				};
			} else {
			console.log("event", event);
			console.log("event.target", event.target);
			// console.log("getElementsByClassName('selectedField')", getElementsByClassName('selectedField'));
			console.log("toModify x2", toModify);
			console.log("event.target.value", event.target.value);
			console.log("event.target.innerHTML", event.target.innerHTML);
			toModify.innerHTML = event.target.value;
			}
		});
    }
  });
};

document.getElementById("inputField").addEventListener("blur", function() {
	console.log("event.target.value and event.target on losefocus", event.target.value, event.target);

	if (toModify) {
		console.log("toModify is not true");
		let objKey = toModify.classList.item(0);
		console.log("toModifyContainer.id", toModifyContainer.id);
		console.log("objKey", objKey);
		objId =  toModifyContainer.id;
		console.log("event.target.value", event.target.value);
		// coolCats[objId].objKey = event.target.value;
		console.log("coolCats[objId]", coolCats[objId]);
		console.log("coolCats[objId][objKey]", coolCats[objId][objKey]);
		coolCats[objId][objKey] = event.target.value;

		event.target.value = "";
		toModify = "";
		console.log("alert - focusout triggered");
	};
});



// let inputArea = document.getElementById("keypress-input");

// inputArea.addEventListener("keyup", function(event){
// 	console.log("event", event);
// 	saywhat.innerHTML = event.target.value;
// });