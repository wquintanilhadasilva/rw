/**
 * Created by wedson.silva on 15/12/2015.
 */

angular.module('rw').controller('IndexController5', IndexController5);

IndexController5.$inject=['$scope','$timeout','AlertServices','$filter'];

function IndexController5($scope, $timeout, AlertServices, $filter){

    $scope.listaDePessoas = [];
    $scope.pessoa = {};

    $scope.tamanho = 0;

    $scope.gridOptions = {};

    $scope.salvar = salvar;
    $scope.limpar = limpar;
    $scope.excluir = excluir;
    $scope.gridItemClick = gridItemClick;
    $scope.getRowStyle = getRowStyle;
    $scope.remover = remover;
    $scope.edit = edit;

    init();

    function init(){
        $scope.gridOptions.data = "listaDePessoas";

        $scope.gridOptions.rowTemplate = "templates/row-template.html";

        $scope.gridOptions.columnDefs = [
            {displayName:'Nome',field:'nome', cellTemplate:'templates/cell-template.html'},
            {displayName:'Data Nascimento',field:'nascimento', cellTemplate:'templates/cell-template.html'},
            {displayName:'Sexo',field:'sexo', cellTemplate:'templates/cell-template.html'},
            {displayName:'Cor',field:'cor', cellTemplate:'templates/cell-template.html'},
            {displayName:'Acoes',field:'acao', cellTemplate:'templates/acoes-template.html'}
        ];
    }

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

    function gridItemClick(entity,col, row, field){
        AlertServices.showInfo('Item: ' +entity.nome + ". Coluna: " + col + ". Linha: " + row + ". Field: " + field)
    }

    function getRowStyle(linhaSelecionada){

        var myStyle = {};

        myStyle.backgroundColor = linhaSelecionada.cor;

        return myStyle;

    }

    function remover(index){

        $scope.listaDePessoas.splice(index, 1);

    }

    function edit(entity){
        $scope.pessoa = entity;
    }

};
