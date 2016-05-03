// DOG FOOD

var dogFood = document.getElementById("dog_brands");
function displayDogFood () {
  var dogData = JSON.parse(this.responseText);
  // console.log(dogData);
  for (var a = 0; a < dogData.dog_brands.length; a++) {
    // console.log("dogData.dog_brands",dogData.dog_brands[a]);
    var name = dogData.dog_brands[a].name;
    console.log("Dogdata name", name );

    var typeArr = dogData.dog_brands[a].types;
    for (var e = 0; e < typeArr.length; e++) {
      console.log("type",typeArr[e].type);

      var volumes = typeArr[e].volumes;
      for (var i = 0; i < volumes.length; i++) {
        console.log("volumes name",volumes[i].name);
        console.log("volumes price",volumes[i].price);
      }
    }
  }

}

var dog = new XMLHttpRequest();
  dog.addEventListener("load", displayDogFood);
  dog.open("GET", "dogFood.json");
  dog.send();





