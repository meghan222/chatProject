(function() {
  function config($locationProvider, $stateProvider) {
         $locationProvider
             .html5Mode({
                 enabled: true,
                 requireBase: false
              });

         $stateProvider
             .state('home', {
                 url: '/',
                 controller: 'HomeCtrl as home',
                 templateUrl: '/templates/home.html'
             })
             .state('room', {
                url: '/room',
                controller: 'RoomCtrl as room',
                templateUrl: '/templates/room.html'
            });
     }
     angular
         .module('chatProject', ['ui.router', 'firebase'])
         .config(config);
 })();
