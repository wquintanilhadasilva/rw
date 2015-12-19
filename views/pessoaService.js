/**
 * Created by wedson.silva on 19/12/2015.
 */
(function () {
    'use strict';

    angular
        .module('rw')
        .service('PessoaService', PessoaService);

    //PessoaService.$inject = ['dependency'];

    /* @ngInject */
    function PessoaService(dependency) {
        this.functionName = functionName;

        ////////////////

        function functionName() {
        }
    }

})();

