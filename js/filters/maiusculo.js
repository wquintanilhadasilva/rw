/**
 * Created by wedson.silva on 16/12/2015.
 */

angular.module('rw')

    .filter('maiusculo',maiusculo);

function maiusculo(){

    return function(value){

        if(value && typeof value === 'string'){

            return value.toUpperCase();
        }

        return value;
    };

}