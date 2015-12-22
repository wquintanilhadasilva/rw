/**
 * Created by wedson.silva on 22/12/2015.
 */
(function(){

    'use strict';

    angular.module('rw')
        .controller('IndexController9', IndexController9);

    /* @ngInject */
    function IndexController9(AlertServices){

        var vm = this;

        vm.entidade = {};

        vm.salvarPessoa = salvarPessoa;
        vm.excluirPessoa = excluirPessoa;
        vm.limparPessoa = limparPessoa;

        function salvarPessoa(){
            AlertServices.showSuccess('Super de boa!');
        }

        function excluirPessoa(){
            AlertServices.showError('Excluiu!!!');
        }

        function limparPessoa(){
            AlertServices.showInfo('Limpeza geral!');
        }

    }

})();