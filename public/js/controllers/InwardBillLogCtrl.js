// public/js/controllers/InwardBillLogCtrl.js
angular.module('InwardBillLogCtrl', []).controller('InwardBillLogController', function($scope,$http) {

$scope.addForm = {};
$scope.editForm = {};
$scope.Message = '';


var getEntries = function(){
	return $http.get('/api/InwardBillLogs').
        then(function(response) {
            $scope.LogsData = response.data;
        });
};

//load all entries for the first time
getEntries();
		
$scope.editEntry = function (LogsData) {
if(LogsData){
	
$scope.Message = 'Processing';
$scope.editForm = LogsData;
$scope.editForm.VendorBillDate = new Date(LogsData.VendorBillDate);
$scope.editForm.CreatedOn = new Date(LogsData.CreatedOn);
$scope.editForm.BillReceivedDate = new Date(LogsData.BillReceivedDate);
console.log($scope.editForm);
}
else{
	$http({
    method: 'PUT',
    url: 'api/UpdateInwardBillLog/'+$scope.editForm._id,
    data: $scope.editForm,
    headers: {
        'Content-type': 'application/json;charset=utf-8'
    }
})
.then(function(response) {
    console.log(response.data);
}, function(rejection) {
    console.log(rejection.data);
});

getEntries();
$scope.Message = 'Update Request Finished';
}
    };
	
$scope.addEntry = function () {
$scope.Message = 'Processing';

console.log($scope.addForm);
   $http.post('/api/AddInwardBillLog', $scope.addForm).
        then(function(data, status) {
		debugger;
            $scope.LogsData = response.data;
        });

$scope.addForm = {};
getEntries();
$scope.Message = 'Add Request Finished';
		};

$scope.deleteEntry = function(_id){
$scope.Message = 'Processing';
		debugger;
$http({
    method: 'DELETE',
    url: 'api/DeleteInwardBillLog/'+_id,
    data: {
        _id: _id
    },
    headers: {
        'Content-type': 'application/json;charset=utf-8'
    }
})
.then(function(response) {
    console.log(response.data);
}, function(rejection) {
    console.log(rejection.data);
});

getEntries();
$scope.Message = 'Delete Request Finished';

	};
});