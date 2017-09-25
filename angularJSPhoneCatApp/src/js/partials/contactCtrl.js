phonecatApp.controller('ContactCtrl', ['$scope', '$http', '$location',
    function ($scope, $http, $location) {

        $scope.user = null;
        $scope.email = null;
        $scope.subject = null;
        $scope.message = null;
        $scope.myForm = null;

        $scope.sendForm = function () {
            console.log('User name is: ' + $scope.user);
            console.log('Email is: ' + $scope.email);
            console.log('Subject is: ' + $scope.subject);
            console.log('Message is: ' + $scope.message);

            $scope.runSwal();

            $scope.user = '';
            $scope.email = '';
            $scope.subject = '';
            $scope.message = '';
            $scope.myForm.$setPristine();
            $scope.myForm.$setUntouched();

        };

        $scope.runSwal = function () {
            sweetAlert({
                title: "User name is: " + $scope.user + '\n' +
                       "Email is: "  + $scope.email,
                text: "Subject is: "  + $scope.subject + '\n' +
                      "Message is: "  + $scope.message,
                type: "success"
            });
        }

    }]);