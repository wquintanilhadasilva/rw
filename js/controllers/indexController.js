/**
 * Created by wedson.silva on 15/12/2015.
 */

angular.module('rw').controller('IndexController', IndexController);

IndexController.$inject=['$scope','$timeout','AlertServices','$filter'];

function IndexController($scope, $timeout, AlertServices, $filter){

    $scope.listaDePessoas = [];
    $scope.pessoa = {};

    $scope.tamanho = 0;

    $scope.salvar = salvar;
    $scope.limpar = limpar;
    $scope.excluir = excluir;
    $scope.digitar = digitar;

    function setTouched(){

        angular.forEach($scope.myForm.$error, function(erros, key){

            angular.forEach(erros, function(field){

                field.$setTouched();

            });

        });

    }

    function setUnTouched(){

        angular.forEach($scope.myForm.$error, function(erros, key){

            angular.forEach(erros, function(field){

                field.$setUntouched();

            });

        });

    }

    function salvar(){

        var d = $filter('date')($scope.pessoa.nascimento,'dd/MM/yyyy');

        AlertServices.showInfo(d);

        if($scope.myForm.$invalid){

            setTouched();

            AlertServices.showError("Erro nos dados");

            return;

        };

        $scope.listaDePessoas.push($scope.pessoa);

        AlertServices.showSuccess("Dados gravados");

        limpar();

    }

    function limpar(){

        $scope.pessoa = {};

        $timeout(function(){
            setUnTouched();
        },500);


    }

    function excluir(){

    }

    function digitar(){

        $scope.tamanho = $scope.pessoa.nome.length;

    }

};
