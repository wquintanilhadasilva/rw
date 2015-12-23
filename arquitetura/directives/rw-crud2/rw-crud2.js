/**
 * Created by wedson.silva on 22/12/2015.
 */
(function(){

    'use strict';

    angular.module('rw')
        .directive('rwCrud2', rwCrud2);

    function rwCrud2(){
        return {
            transclude: true,
            restrict: 'E',
            templateUrl: 'arquitetura/directives/rw-crud2/rw-crud2.html',
            titulo: '@',
            link: link,
            scope: {
                titulo: '@',
                service: '='
            }
        };

        function link(scope, element, attrs){
            //não faz nada, tudo fica no service....
        }
    }

})();
