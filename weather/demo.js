angular.module('demo', [])
.controller('weather', function($scope, $http) {
    $scope.zip = "";

    $scope.$watch('zip', function(newVal, oldVal){
    if(isNaN(newVal)){
        alert('Please enter a numeric value.');
    }

    if(newVal.length === 5){
        $http.get('http://api.openweathermap.org/data/2.5/weather?zip=' + newVal + ',us&appid=c1819534742bc3a7b784cf76d9826bbf').
            then(function(response) {
                $scope.today = response.data;
            });
    }
});


});
