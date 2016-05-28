import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngSanitize from 'angular-sanitize';
import home from './home/home.js';
import '../style/app.css';


// let app = () => {
//     return {
//         template: require('./app.html'),
//         controller: 'AppCtrl',
//         controllerAs: 'app'
//     }
// };

class AppCtrl {
    constructor($log) {
        // this.url = 'https://github.com/preboot/angular-webpack';
    $log.debug('Hey! App is running!');

    }
}

AppCtrl.$inject = ['$log'];

const MODULE_NAME = 'app';

// function run($log) {
//     $log.debug('App is running!');
//     $log.debug(MODULE_NAME);
// }

function config($urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');
}

angular.module(MODULE_NAME, [uiRouter, ngSanitize,'home'])
    // .directive('app', app)
    .controller('AppCtrl', AppCtrl)
    .config(config)
    // .run(run);

export default MODULE_NAME;

