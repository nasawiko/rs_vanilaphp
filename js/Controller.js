app.controller("crudController", function ($scope, crudService) {
	$scope.UserFormContainer = false;
	$scope.itemShowCount = ['5','10','20', '30'];
	$scope.typeList = [1,2,3,4,5,6,7,8,9,10];
	$scope.date = new Date();
	GetAllUsers();
	//To Get all users list
	function GetAllUsers () {
		var getUserData = crudService.getUsers();
		getUserData.then(function (user) {
			$scope.users = user.data.userList;
			//to select first item from ng-option list
			$scope.actItem = $scope.itemShowCount[0];
		}, function() {
			alert('Error in getting users list');
		});

	}
	$scope.editUser = function (user) {
        var getUserData = crudService.getUser(user.id);
		getUserData.then( function(_user) {
			$scope.user = _user.data;
			$scope.UserId = user.id
			$scope.Usernama_b	= user.nama_b;
			$scope.Usernama_d		= user.nama_d;
			$scope.Usertype	= user.type;
			$scope.Useraction = user.action ;
			$scope.Action = "Update";
			$scope.UserFormContainer = true;
		}, function () {
			alert('Error in getting User record');
		});
	}
	// Hide Add User Form
	$scope.addUser = function () {
		ClearFields();
		$scope.Action = "Add";
		$scope.UserFormContainer = true;	
	}
	function ClearFields() {

        $scope.UserId = "";
        $scope.Usernama_b	= "";
		$scope.Usernama_d		= "";
		$scope.Usertype	= "";
		$scope.Useraction ="";
    }
	// Hide Add / Update User Form
	$scope.closeFrmBtn = function () {
		$scope.UserFormContainer = false;
	}
	$scope.Cancel = function () {
		$scope.UserFormContainer = false;
	}
	//Add Update Action 
	$scope.AddUpdateUser = function () {
		var user = {
				nama_b	: $scope.Usernama_b,
				nama_d 	: $scope.Usernama_d,
				type	: $scope.Usertype,
				action 	: $scope.Useraction
				};
		var getUserAction = $scope.Action;
		if(getUserAction == "Update"){
			user.userid = $scope.UserId;
			var getUserData = crudService.updateUser(user);
			getUserData.then (function (response) {
								GetAllUsers();
								var msg = response.data.msg;
								alert(msg);
							}, function () {
								alert('Error in updating User record');								
							});
		}else{
			//Add Use Code Come Here
			var addUserData = crudService.addUser(user);
			addUserData.then (function (response) {
								GetAllUsers();
								alert('Data Succes Di Save !');
							}, function () {
								alert('Error in adding User record');								
							}
			);
		}
		$scope.UserFormContainer = false;
	} // end of AddUpdateUser.
	$scope.deleteUser = function (user) {
		var ans = confirm('Are you sure to delete it?');
		if(ans) {
			var delUserData = crudService.deleteUser(user.id);
			GetAllUsers();
			alert('Delete Succesfull!');
		}
	}
	$scope.sort = function(keyname){
        $scope.sortKey = keyname;   //set the sortKey to the param passed
        $scope.reverse = !$scope.reverse; //if true make it false and vice versa
    }
	$scope.activeChange = function() {
		$scope.search.active = ( ($scope.uActive) ? "1" : "0" );
	};
	$scope.reset = function(){
		$scope.search = '';
	};
}).directive('myCurrentTime', ['$interval', 'dateFilter', function($interval, dateFilter) {
		function link(scope, element, attrs) {
			var format, timeoutId;
			function updateTime() {
				element.text(dateFilter(new Date(), format));
			}
			scope.$watch(attrs.myCurrentTime, function(value) {
				format = value;
				updateTime();
			});
			element.on('$destroy', function() {
				$interval.cancel(timeoutId);
			});
			timeoutId = $interval(function() {
				updateTime();
			}, 1000);
		}
		return {
			link : link
		};
}]);