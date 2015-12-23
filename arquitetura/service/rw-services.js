/**
 * Created by wedson.silva on 22/12/2015.
 */
(function(){
    'use strict';

    angular.module('rw')
        .factory('RwService',RwService);

    /* @ngInject */
    function RwService(AlertServices){

        return function (controller){

            var self = this;

            self.controller = controller;

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

                //chamada rest no back, utilizando o controller

                AlertServices.showSuccess('Super de boa! chamando controller: ' + self.controller);

                self.onDepoisDeSalvar();
            }

            function excluir(){

                //chamada rest no back, utilizando o controller

                AlertServices.showError('Excluiu!!! chamando controller: ' + self.controller);
            }

            function limpar(){

                //chamada rest no back, utilizando o controller

                AlertServices.showInfo('Limpeza geral! chamando controller: ' + self.controller);
            }

        };
    }

})();