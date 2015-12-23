/**
 * Created by wedson.silva on 16/12/2015.
 */
(function(){

    'use strict';

    angular.module('rw')
        .service('SessionService', SessionService); //TODO mudar para o módulo rwServices

    /* @ngInject */
    function SessionService(localStorageService){

        var self = this;

        self.get = get;

        self.set = set;

        function get(key){
            return localStorageService.get(key);
        }

        function set(key, value){
            localStorageService.set(key,value);
        }
    }

})();

