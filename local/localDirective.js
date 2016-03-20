angular.module("ang-weather")
	.directive("local", function () {
		return {
		    restrict: 'E',
		    controller: 'mainController',
		    controllerAs: 'mainCtrl',
		    templateUrl: 'local/local.html'
		}
});

