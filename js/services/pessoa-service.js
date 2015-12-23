/**
 * Created by wedson.silva on 22/12/2015.
 */
(function(){

    'use strict';

    angular
        .module('rw')
        .service('PessoaService',PessoaService);

    /* @ngInject */
    function PessoaService(RwService){

        var self = this;
        self.getRwService = getRwService;

        function getRwService(){
            return new RwService('pessoaController');
        }
    }

})();