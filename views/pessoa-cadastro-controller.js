/**
 * Created by wedson.silva on 19/12/2015.
 */
(function () {
    'use strict';

    angular
        .module('rw')
        .controller('PessoaCadastroController', PessoaCadastroController);

    /* @ngInject */
    function PessoaCadastroController(AlertServices) {

        var vm = this;

        vm.title = 'Mensagem gerada pelo Controller';

        vm.entidade = {};

        vm.allan = 'eita trem bão sô';

        vm.entidade.teste = 'Inicio';

        vm.gravar = gravar;

        activate();

        ////////////////

        function activate() {
        }

        function gravar(){

            AlertServices.showInfo('Isso eh fera demais!!');

        }
    }

})();

