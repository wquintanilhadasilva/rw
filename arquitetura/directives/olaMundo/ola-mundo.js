/**
 * Created by wedson.silva on 21/12/2015.
 */
(function(){
    'use strict';

    angular.module('rw')
        .directive('olaMundo', olaMundo);

    function olaMundo(){
        return {
            restrict: 'EA',
            template: '<p/><b> Olá mundo. Minha primeira directive</b>'
        };
    }

})();