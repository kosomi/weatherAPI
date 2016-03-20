angular.module('ang-weather')
	.directive('weatherView', function(){
		return {
			restrict: 'E',
			controller: 'mainController',
			controllerAs: 'mainCtrl',
			templateUrl: 'weather/weatherview.html',
		}
	})






/*
angular.module("ang-weather")
	.directive("weatherView", function () {
	  return {
	    restrict: 'E',
	    templateUrl: 'weather/weatherview.html',
	    controller: 'mainController',
	    controllerAs: 'mainCtrl'
	  };
}); */