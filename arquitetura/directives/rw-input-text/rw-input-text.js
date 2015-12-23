/**
 * Created by wedson.silva on 21/12/2015.
 */
(function(){
    'use strict';

    angular.module('rw')
        .directive('rwInputText', rwInputText);

    /**
     * @ngdoc directive
     * @name rw.directives:rwInputText
     * @element rw-input-text
     * @scope
     * @restric E
     * @descriptions
     *      Compontende input text padrão da arquiteture rw.
     * @param {string} label blá blá blá blá
     * @param {string} placeHolder blá blá blá blá
     * @param {string} ngModel blá blá blá blá
     * @param {string} ngRequired blá blá blá blá
     * @param {string} ngMaxlength blá blá blá blá
     * @param {string} ngMinlength blá blá blá blá
     * @param {string} ngAlessandro blá blá blá blá
     *
     *  @example
     *
     *  <example module="rfx">
            <file name="index.html">
                <rw-input-text label="Nome"
                   placeHolder="Entre com os dados da pessoa"
                   ng-model="vm.rwService.entidade.nome"
                   ng-required="true"
                   ng-maxlength="50"
                   ng-alessandro = "vm.rwService.entidade.nome">
               </rw-input-text>
             </file>
             <file name="controller.js">
                 Alert('Yes!');
             </file>
         </example>
     *
     */
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
                ngMinlength: '@',
                ngAlessandro: '='
            },
            link: link
        };

        function link(scope, element, attrs, formControl){
            scope.myForm = formControl;
            scope.inputName = scope.$id + 'inputText';

            if(!scope.ngRequired){
                scope.ngRequired = false;
            }

            if(scope.ngAlessandro){
                scope.ngAlessandro = scope.ngAlessandro +' Caraca véi!';
            }else{
                scope.ngAlessandro = 'Caraca véi!';
            }

        }

    }

})();