/**
 * Created by wedson.silva on 21/12/2015.
 */
(function(){
    'use strict';

    angular.module('rw')
        .directive('rwInputText', rwInputText);

    function rwInputText(){
        return {
            require:'^form',
            restrict: 'E',
            templateUrl: 'arquitetura/directives/rw-input-text/rw-input-text.html',
            scope: {
                label: '@',
                placeHolder: '@',
                ngModel: '=',
                ngRequired: '=?',
                ngMaxlength: '@',
                ngMinlength: '@'
            },
            link: link
        };

        function link(scope, element, attrs, formControl){
            scope.myForm = formControl;
            scope.inputName = scope.$id + 'inputText';

            if(!scope.ngRequired){
                scope.ngRequired = false;
            }

        }

    }

})();