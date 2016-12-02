"use strict";

app.controller('ShroomCtrl', function($scope,MushroomStorage) {

//reload page to see all shrooms

	$scope.reload = function() {
		location.reload();
	};

//promise returned from factory

	MushroomStorage.getShrooms()
	.then(function(data) {
	$scope.mushrooms = [];

//map data obj by targetting mushroom array and making new array of mushroom objects
//
		let mappedShrooms = data.mushrooms.map(function(mushroom) {

//desired keys added to new shroom objects in array

        let shroomObj = {};
        shroomObj.name = Object.keys(mushroom)[0];
        shroomObj.edible = mushroom[Object.keys(mushroom)[0]].edible;
        shroomObj.description = mushroom[Object.keys(mushroom)[0]].description;
        return shroomObj;
      });

//new array of mushroom objects set to scoped mushroom array
//
		$scope.mushrooms = mappedShrooms;
		$scope.$apply();
	});

});