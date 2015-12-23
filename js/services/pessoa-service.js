/**
 * Created by wedson.silva on 22/12/2015.
 */
(function(){

    'use strict';

    angular
        .module('rw')
        .service('PessoaService',PessoaService);

    /* @ngInject */
    function PessoaService(RwService, $http, $q){

        var self = this;
        self.getRwService = getRwService;
        self.buscarPessoa = buscarPessoa;

        function getRwService(){
            return new RwService('pessoaController');
        }

        function buscarPessoa(param){

            //usando uma promessa de retonro...
            var deferred = $q.defer();

            if(param === 1){
                deferred.reject('Motivo da rejeição...');
                return deferred.promise;
                //$q.reject('MOtivo da rejeição....');
            }

            $http.get('http://jsonplaceholder.typicode.com/posts')
                .then(
                function resultOk(response){
                    deferred.resolve(response);
                },
                function resultFault(response){
                    deferred.reject(response);
                });

            return deferred.promise;
        }
    }

})();