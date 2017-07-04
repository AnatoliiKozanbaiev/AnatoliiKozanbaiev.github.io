(function (angular) {

  var app = angular.module('app');

  app.controller("dndController", ['$scope', function ($scope) {

    $scope.models = {
      lists: {"Simple Tasks": [], "High Priority Tasks": []}
    };

    $scope.models.lists['Simple Tasks'].push(
      {label: "Get dog food"},
      {label: "Buy eggs"},
      {label: "Fix car"},
      {label: "Fix fence"},
      {label: "Walk dog"},
      {label: "Read book"}
    );

    $scope.sendTasks = function () {
      console.log(JSON.stringify(angular.fromJson($scope.modelAsJson)));

      var tasksAlert = document.getElementById('tasksAlert');
      var div = document.createElement('div');
      div.className = "alert alert-success";
      div.innerHTML = "<strong>Hooray!!!</strong> All high priority tasks are sended";
      tasksAlert.appendChild(div);

      setTimeout(function () {
        div.parentNode.removeChild(div);
      }, 2000);
    };


    // Model to JSON for demo purpose
    $scope.$watch("models.lists['High Priority Tasks']", function (model) {
      $scope.modelAsJson = angular.toJson(model, true);
    }, true);

  }]);

})(window.angular);




