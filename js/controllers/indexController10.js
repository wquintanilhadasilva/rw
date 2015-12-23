/**
 * Created by wedson.silva on 22/12/2015.
 */
(function(){

    'use strict';

    angular.module('rw')
        .controller('IndexController10', IndexController10);

    /* @ngInject */
    function IndexController10(AlertServices, PessoaService, SessionService, $http){

        var vm = this;

        vm.rwService = PessoaService.getRwService();
        vm.rwService.onAntesDeSalvar = onAntesDeSalvar;
        vm.testeEnter = testeEnter;
        vm.carregar = carregar;
        vm.carregarService = carregarService;
        vm.limpar =  limpar;

        vm.lista = [];

        vm.gridOptions = {};

        iniciar();

        function iniciar(){
            vm.gridOptions.data = 'vm.lista';
        }

        function onAntesDeSalvar(){

            SessionService.set('Insert','Valor');

            if(vm.rwService.entidade.nome === 'rw'){
                AlertServices.showInfo('Não pode o nome: ' + vm.rwService.entidade.nome);
                return false;
            }
            return true;
        }

        function testeEnter(){
            AlertServices.showInfo('Enter pressionado');

            AlertServices.showInfo(SessionService.get('Insert'));
        }

        function carregar(){
            $http.get('http://jsonplaceholder.typicode.com/posts')
                .then(carregaDadosResult, carregaDadosFault);
        }

        function carregaDadosResult(response){
            vm.lista = response.data;
        }

        function carregaDadosFault(response){
            AlertServices.showError('Deu pau na hora de usar o serviço REST!');
        }

        function carregarService(param){
            PessoaService.buscarPessoa(param).then(carregaDadosResult, carregaDadosFault);
        }

        function limpar(){
            vm.lista = [];
        }
    }

})();