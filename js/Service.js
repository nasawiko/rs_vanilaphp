app.service("crudService", function ($http) {

	
	var serviceUrl = "http://localhost/Kampus/SMT5/DP/Services/";
	
    this.getUsers = function () {

        return $http.get(serviceUrl + "viewUsers.php");

    };



	this.getUser = function(userId) {

		var response = $http({

			method	: "POST",

			url		: serviceUrl + "getUsers.php",

			params 	: {

					id : userId

			}

		});

		return response;

	};

	
	this.addUser = function (user) {

		var response = $http({

			method  : "POST",

			url		: serviceUrl + "createUsers.php",

			params : user

		});

		return response;

	};
	
});