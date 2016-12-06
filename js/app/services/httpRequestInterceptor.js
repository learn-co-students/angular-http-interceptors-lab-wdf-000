function httpBackend() {
  this.responseError = function (config) {
    window.alert("An error ocurred!");
  };
}
 
angular
  .module('app')
  .service('httpBackend', httpBackend)
  .config(function ($httpProvider) {
      $httpProvider.interceptors.push('httpBackend');
  });
