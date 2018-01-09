import angular from 'angular';

const AppModule = angular
    .module('app', [

    ])
    .run(function(){
        console.log('Se ejecuta');
    });

export default AppModule;