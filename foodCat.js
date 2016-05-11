
'use-strict';
// CAT FOOD
var catListBuilder = "";

function displayCatFood () {
  var catFood = document.getElementById("cat_brands");

  var catData = JSON.parse(this.responseText);
  // console.log(catData);
  for (var a = 0; a < catData.cat_brands.length; a++) {
    // console.log("catData.cat_brands",catData.cat_brands[a]);

    var name = catData.cat_brands[a].name;
    console.log("catData name", name );
    catListBuilder += `<div class="row-fluid typeCenter brandBox"><h1>${name}</h1>`;

    var breed = catData.cat_brands[a].breed;
      console.log("breed", breed);
      catListBuilder += `<div class="row-fluid col-lg-12 typeCenter"><h2>${breed}</h2>`;

    var typeArr = catData.cat_brands[a].types;
    for (var e = 0; e < typeArr.length; e++) {
      console.log("type",typeArr[e].type);
      catListBuilder += `<div class="row-fluid col-lg-3 col-md-6 col-sm-6 col-xs-12 typeCenter"><h3>${typeArr[e].type}</h3>`;

      var volumes = typeArr[e].volumes;
      for (var i = 0; i < volumes.length; i++) {
        console.log("volumes name",volumes[i].name);
        console.log("volumes price",volumes[i].price);
        catListBuilder += `<div class="row-fluid volume col-sm-6"><p>${volumes[i].name}</p><p>${volumes[i].price}</p>`;

        catListBuilder += `</div>`;
       }
      catListBuilder += `</div>`;
      }
    catListBuilder += `</div>`;

  catListBuilder += `</div>`
  }
  catListBuilder += `</div>`

  catFood.innerHTML = catListBuilder;
  }

var cat = new XMLHttpRequest();
cat.addEventListener("load", displayCatFood);
cat.open("GET", "catFood.json");
cat.send();
