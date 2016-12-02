"use strict";

app.factory('MushroomStorage', function($http) {
	
	let getShrooms = () => {
		return new Promise (function(resolve,reject) {
			$http.get('data/mushrooms.json')
			.success(function(mushroomObj) {
				resolve(mushroomObj);
			}) 
			.error(function(error) {
				reject(error);
			});
		});
	};

	return {getShrooms};
});