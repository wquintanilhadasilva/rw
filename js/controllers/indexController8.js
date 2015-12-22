/**
 * Created by wedson.silva on 22/12/2015.
 */
(function(){

    'use strict';

    angular.module('rw')
        .controller('IndexController8', IndexController8);

    /* @ngInject */
    function IndexController8(AlertServices){

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