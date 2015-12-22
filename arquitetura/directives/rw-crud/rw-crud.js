/**
 * Created by wedson.silva on 22/12/2015.
 */
(function(){

    'use strict';

    angular.module('rw')
        .directive('rwCrud', rwCrud);

    function rwCrud(){
        return {
            transclude: true,
            restrict: 'E',
            templateUrl: 'arquitetura/directives/rw-crud/rw-crud.html',
            titulo: '@',
            link: link,
            scope: {
                titulo: '@',
                salvar: '&',
                excluir: '&',
                limpar: '&'
            }
        };

        function link(scope, element, attrs){

            scope.onSalvar = onSalvar;
            scope.onExcluir = onExcluir;
            scope.onLimpar = onLimpar;

            function onSalvar(){
                scope.salvar();
            }

            function onExcluir(){
                scope.excluir();
            }

            function onLimpar(){
                scope.limpar();
            }

        }
    }

})();
