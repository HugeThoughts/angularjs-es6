// (function() {
  'use strict';
  import angular from 'angular';
  import 'angular-ui-router';




  function config($stateProvider) {
    $stateProvider
      // .state('root', {
      //   url: '',
      //   abstract: true,
      //   views: {
      //     'header': {
      //       templateUrl: 'src/app/common/header.tpl.html',
      //       controller: 'HeaderCtrl'
      //     }
      //   }
      // })
      .state('home', {
        url: '/',
        views: {
          '@': {
            template: require('./home.tpl.html'),
            controller: 'HomeCtrl as home',
            resolve: {
              // data: function(DataService){
              //   return DataService.get('data.json');
              // }
            }
          }
        }
      });
  }
class homeCtrl {
    constructor() {
        // this.url = 'https://github.com/preboot/angular-webpack';

    }
}
homeCtrl.$inject = ['$stateProvider'];
export default angular.module('home', [])
    .config(config)
    .controller('HomeCtrl', homeCtrl);
// })();
