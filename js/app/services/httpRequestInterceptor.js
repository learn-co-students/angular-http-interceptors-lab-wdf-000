function ErrorInterceptor() {
  this.responseError = function (error) {
    alert(error);
  };
}

angular
  .module('app')
  .service('ErrorInterceptor',ErrorInterceptor)
  .config(function($httpProvider){
    $httpProvider.interceptors.push('ErrorInterceptor');
  });
