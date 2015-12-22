/**
 * Created by wedson.silva on 22/12/2015.
 */
(function(){
    'use strict';

    angular.module('rw')
        .factory('RwService',RwService);

    /* @ngInject */
    function RwService(AlertServices){

        var self = this;

        self.entidade = {};

        self.salvar = salvar;
        self.excluir = excluir;
        self.limpar = limpar;

        self.onAntesDeSalvar = onAntesDeSalvar;
        self.onDepoisDeSalvar = onDepoisDeSalvar;

        function onAntesDeSalvar(){
            return true;
        }

        function onDepoisDeSalvar(){

        }

        function salvar(){

            if(!self.onAntesDeSalvar()){
                return;
            }

            AlertServices.showSuccess('Super de boa!');

            self.onDepoisDeSalvar();
        }

        function excluir(){
            AlertServices.showError('Excluiu!!!');
        }

        function limpar(){
            AlertServices.showInfo('Limpeza geral!');
        }

    }

})();