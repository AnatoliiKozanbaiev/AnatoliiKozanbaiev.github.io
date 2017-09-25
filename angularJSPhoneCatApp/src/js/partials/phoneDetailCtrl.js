phonecatApp.controller('PhoneDetailCtrl',[
    '$scope','$http', '$location', '$routeParams', 'Phone',
    function($scope, $http, $location, $routeParams, Phone) {
        $scope.phoneId = $routeParams.phoneId;

        Phone.get({phoneId: $routeParams.phoneId}, function (data) {
            $scope.phone = data;
            $scope.mainImageUrl = data.images[0];
            // data.$save();
        });

        //  var url = 'phones/'+$routeParams.phoneId+'.json';
        //  $http.get(url).success(function(data) {
        //    $scope.phone = data;
        //    $scope.mainImageUrl = data.images[0];
        //  });

        $scope.setImage = function(imageUrl) {
            $scope.mainImageUrl = imageUrl;
        }

    }]);
