app.service("crudService", function ($http) {

	
	var serviceUrl = "http://localhost/kampus/SMT5/";
	
    this.getUsers = function () {

        return $http.get(serviceUrl + "viewUsers.php");

    };



	this.getUser = function(userId) {

		var response = $http({

			method	: "POST",

			url		: serviceUrl + "getUser.php",

			params 	: {

					id : userId

			}

		});

		return response;

	};

	
	this.addUser = function (user) {

		var response = $http({

			method  : "POST",

			url		: serviceUrl + "createUser.php",

			params : user

		});

		return response;

	};
	
});