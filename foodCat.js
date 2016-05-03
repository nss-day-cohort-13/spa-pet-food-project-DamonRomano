// CAT FOOD

var catFood = document.getElementById("cat_brands");
function displayCatFood () {
  var catData = JSON.parse(this.responseText);
  // console.log(catData);
  for (var a = 0; a < catData.cat_brands.length; a++) {
    // console.log("catData.cat_brands",catData.cat_brands[a]);
    var name = catData.cat_brands[a].name;
    console.log("Catdata name", name );

    var typeArr = catData.cat_brands[a].types;
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

var cat = new XMLHttpRequest();
  cat.addEventListener("load", displayCatFood);
  cat.open("GET", "catFood.json");
  cat.send();





