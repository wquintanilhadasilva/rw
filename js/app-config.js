(function(){
    'use strict';

    angular
        .module('rw',[
            'ngMessages',
            'toastr',
            'ui.grid',
            'ui.router',
            'oc.lazyLoad',
            'angular-keycode'
        ]).config(configWed);

    /* @ngInject */
    function configWed($stateProvider, $urlRouterProvider){

        var home = {
            url: '/home',
            templateUrl: 'views/home.html'
        };

        var pessoa = {
            abstract: true,
            url: '/pessoa',
            template: '<ui-view/>'

        };

        var cadastroPessoa = {
            url: '/cadastro',
            templateUrl: 'views/pessoa-cadastro.html',
            resolve: resolveDeps('views/pessoa-cadastro-controller.js')
        };

        var pesquisaPessoa = {
            url: '/pesquisa',
            templateUrl: 'views/pessoa-pesquisa.html'
        };

        function resolveDeps(files) {
            return {
                deps: /* @ngInject */ function ($ocLazyLoad) {
                    return $ocLazyLoad.load(files);
                }
            };
        }

        $stateProvider
            .state('home',home)
            .state('pessoa',pessoa)
            .state('pessoa.cadastro',cadastroPessoa)
            .state('pessoa.pesquisa',pesquisaPessoa);

        $urlRouterProvider.otherwise('/home');

    }

})();