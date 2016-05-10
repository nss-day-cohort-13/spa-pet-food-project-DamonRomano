
'use-strict';
// DOG FOOD
var dogListBuilder = "";

function displayDogFood () {
  var dogFood = document.getElementById("dog_brands");

  var dogData = JSON.parse(this.responseText);
  // console.log(dogData);
  for (var a = 0; a < dogData.dog_brands.length; a++) {
    // console.log("dogData.dog_brands",dogData.dog_brands[a]);

    var name = dogData.dog_brands[a].name;
    console.log("Dogdata name", name );
    dogListBuilder += `<div class="row-fluid typeCenter brandBox"><h1>${name}</h1>`;

    var typeArr = dogData.dog_brands[a].types;
    for (var e = 0; e < typeArr.length; e++) {
      console.log("type",typeArr[e].type);
      dogListBuilder += `<div class="row-fluid col-md-6 typeCenter"><h3>${typeArr[e].type}</h3>`;

      var volumes = typeArr[e].volumes;
      for (var i = 0; i < volumes.length; i++) {
        console.log("volumes name",volumes[i].name);
        console.log("volumes price",volumes[i].price);
        dogListBuilder += `<div class="row-fluid volume col-sm-6"><p>${volumes[i].name}</p><p>${volumes[i].price}</p>`;

        dogListBuilder += `</div>`;
      }
      dogListBuilder += `</div>`;
    }
    dogListBuilder += `</div>`;
  }
  dogFood.innerHTML = dogListBuilder;
}

var dog = new XMLHttpRequest();
dog.addEventListener("load", displayDogFood);
dog.open("GET", "dogFood.json");
dog.send();






