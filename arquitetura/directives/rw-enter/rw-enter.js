/**
 * Created by wedson.silva on 23/12/2015.
 */
(function(){

    'use strict';

    angular.module('rw')
        .directive('rwEnter',RwEnter);

    /* @ngInject */
    function RwEnter(KeyCode){

        return {
            restric: 'A',
            link: link
        };

        function link(scope, element, attrs){
            element.bind('keydown',onKeydown);

            function onKeydown(event){
                var code = event.keyCode  || event.which;
                if(code === KeyCode.ENTER){
                    scope.$eval(attrs.rwEnter);
                }

            }
        }
    }

})();