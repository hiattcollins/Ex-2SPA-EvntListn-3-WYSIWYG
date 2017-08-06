// console.log("wysiwyg.js");

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

// ****** CREATE VARIABLES TO BE USED THROUGHOUT ****** //
var counter = 0;
var backgroundColor;
var toModify;

// ****** CREATE VARABLES TO ADDRESS PARTS OF DOM ****** //
var outputEl = document.getElementById("outputEl");
var containerEl = document.getElementsByTagName("PERSON");

// ****** CREATE CARDS BY COUNTER, GIVE EACH CARD AN INDEX, AND SET BACKGROUND COLOR ****** //
for (; counter < 5; counter++) {

// ****** SET BACKGROUND COLOR BASED ON COUNTER ****** //
  if (((counter + 1) % 2) === 0) {
  	backgroundColor = "yellowBackground";
  } else {
  	backgroundColor = "blueBackground";
  }

// ****** PRINT CARDS TO DOM ****** //
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

// ****** CREATE EVENT LISTENER TO TRACK CLICKS ON CARDS ****** //
for (var i = 0; i < containerEl.length; i++) {
  containerEl[i].addEventListener("click", function (event) {
    
    // ****** REMOVE DIV HIGHLIGHT WHEN ANOTHER DIV CLICKED ****** //
    if (event.target.tagName === "DIV") {
    	let allInfoHolders = document.getElementsByTagName("DIV");
    	for (var i = 0; i < allInfoHolders.length; i++) {
    		allInfoHolders[i].classList.remove("selectedField");
    	};


    	// ****** ADD HIGHLIGHT WHEN DIV CLICKED ****** //
    	event.target.classList.add("selectedField");

    	// ****** ADD VALUE TO VARIABLES TO HOLD TARGET OF CLICKED DIV ****** //
    	toModify = event.target;
    	toModifyContainer = event.currentTarget;

    	// ****** SET FOCUS ON INPUT FIELD AND SET VARIABLE TO TAKE INPUT TEXT ****** //
    	document.getElementById("inputField").focus();
    	let inputText = document.getElementById("inputField");

    	// ****** ADD EVENT LISTENER FOR KEY ENTRY IN INPUT FIELD ****** //
		inputText.addEventListener("keyup", function(event) {
			if (event.keyCode === 13) {

				// ****** ADD INFORMATION IN INPUT FIELD TO OBJECT ASSOCIATED WITH CARD ****** //
				if (toModify) {
					let objKey = toModify.classList.item(0);
					objId =  toModifyContainer.id;
					coolCats[objId][objKey] = event.target.value;
					event.target.value = "";
					toModify = "";
				};
			} else {
				// ****** SET DOM ELEMENT TO INPUT FIELD ****** //
				toModify.innerHTML = event.target.value;
			}
		});
    }
  });
};

// ****** CREATE EVENT LISTENER TO TRACK LOST FOCUS FOR INPUT FIELD ****** //
document.getElementById("inputField").addEventListener("blur", function() {

	// ****** ADD INFORMATION IN INPUT FIELD TO OBJECT ASSOCIATED WITH CARD ****** //
	if (toModify) {
		let objKey = toModify.classList.item(0);
		objId =  toModifyContainer.id;
		coolCats[objId][objKey] = event.target.value;
		event.target.value = "";
		toModify = "";
	};
});
