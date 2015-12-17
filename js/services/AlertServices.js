/**
 * Created by wedson.silva on 16/12/2015.
 */

angular.module('rw')

    .service('AlertServices', AlertServices);

function AlertServices(toastr){

    this.showSuccess = showSuccess  ;
    this.showError = showError;
    this.showInfo = showInfo;

    function showError(msg){
        toastr.error(msg,"Erro");
    };

    function showSuccess(msg){
        toastr.success(msg,"Sucesso");
    };

    function showInfo(msg){
        toastr.info(msg,"Info");
    };
}
