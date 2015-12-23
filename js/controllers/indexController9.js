/**
 * Created by wedson.silva on 22/12/2015.
 */
(function(){

    'use strict';

    angular.module('rw')
        .controller('IndexController9', IndexController9);

    /* @ngInject */
    function IndexController9(AlertServices, PessoaService){

        var vm = this;

        vm.rwService = PessoaService.getRwService();
        vm.rwService.onAntesDeSalvar = onAntesDeSalvar;
        vm.testeEnter = testeEnter;

        function onAntesDeSalvar(){
            if(vm.rwService.entidade.nome === 'rw'){
                AlertServices.showInfo('Não pode o nome: ' + vm.rwService.entidade.nome);
                return false;
            }
            return true;
        }

        function testeEnter(){
            AlertServices.showInfo('Enter pressionado');
        }
    }

})();