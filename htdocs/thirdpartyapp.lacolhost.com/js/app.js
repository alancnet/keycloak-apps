var module = angular.module('product', []);

module.controller('GlobalCtrl', function(login) {
    this.loginService = login;
});

module.factory('login', function($q, $rootScope) {
    var keycloakAuth = new Keycloak('keycloak.json');
    var deferred = $q.defer();
    keycloakAuth.init({onLoad: 'check-sso'})
        .success(function() {
            console.log('Success', keycloakAuth);
            deferred.resolve()
        })
        .error(function(err) {
            console.error('Error', err, keycloakAuth);
            deferred.reject(err);
        });
    keycloakAuth.ready = deferred.promise
        .then(function() {
            console.log('Success');
            $rootScope.$digest();
        })
        .finally(function() {
            console.log('Finally');
            $rootScope.$digest();
        });
    return keycloakAuth;
});
