angular.module("ang-weather").controller('mainController', ['$http', function($http) {
  var _this = this;
  this.location = '90006';
  this.weather = {};
  this.localResponse  = [];

  this.fetchWeather = function(lat, long){
    var apiKey = '73f83163e28cde57226d3df440f18943';

    return $http.jsonp('https://api.forecast.io/forecast/' + apiKey + '/' + lat + ',' + long + '?callback=JSON_CALLBACK').success(function(data, status, headers, config) {
      _this.weather = data;
    }).error(function(data, status, headers, config) {
      console.log('Error fetching jsonp');
    });
  }
  this.getLocal = function(){
    return $http.get('http://maps.googleapis.com/maps/api/geocode/json?address=' + _this.location).success(function(data, status, headers, config) {
      _this.localResponse = data.results;
    }).error(function(data, status, headers, config) {
      console.log('Error fetching from google');
    });
  }
}]);

