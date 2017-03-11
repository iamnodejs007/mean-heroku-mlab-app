// public/js/services/InwardBillLogService.js
angular.module('InwardBillLogService', []).factory('InwardBillLog', ['$http', function($http) {

    return {
        // call to get all InwardBillLogs
        get : function() {
            return $http.get('/api/InwardBillLogs');
        },


                // these will work when more API routes are defined on the Node side of things
        // call to POST and create a new InwardBillLog
        create : function(InwardBillLogData) {
            return $http.post('/api/InwardBillLogs', InwardBillLogData);
        },

        // call to DELETE a InwardBillLog
        delete : function(id) {
            return $http.delete('/api/InwardBillLogs/' + id);
        }
    }       

}]);