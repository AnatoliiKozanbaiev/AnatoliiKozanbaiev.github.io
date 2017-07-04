(function (angular) {

  var app = angular.module('app', ['dndLists', 'ngMaterial']);

  app.controller('outputCheckboxesCtrl', ['$scope', function outputCheckboxesCtrl($scope) {

    // Fruits
    $scope.fruits = ['apple', 'orange', 'pear', 'cucumber'];

    // Selected fruits
    $scope.selection = ['apple', 'pear'];

    $scope.addCheckbox = function () {
      $scope.fruits.push($scope.itm);

      $scope.itm = '';
    };

    $scope.removeCheckbox = function () {

      for (var index = 0; index < $scope.fruits.length; ++index) {
        if ($scope.itmRemove == $scope.fruits[index]) {
          $scope.fruits.splice(index, 1);
          --index;
        }
      }

      for (var selectionIndex = 0; selectionIndex < $scope.selection.length; ++selectionIndex) {
        if ($scope.itmRemove == $scope.selection[selectionIndex]) {
          $scope.selection.splice(selectionIndex, 1);
          --selectionIndex;
        }
      }

      $scope.itmRemove = '';
    };

    $scope.sendCheckboxes = function () {
      var alert = document.getElementById('alert');
      var div = document.createElement('div');
      div.className = "alert alert-success";
      div.innerHTML = "<strong>Hooray!!!</strong> All checked checkboxes are sended.";
      alert.appendChild(div);

      setTimeout(function () {
        div.parentNode.removeChild(div);
      }, 2000);

      console.log(angular.toJson($scope.selection));
    };

    // Toggle selection for a given fruit by name
    $scope.toggleSelection = function toggleSelection(fruitName) {
      var idx = $scope.selection.indexOf(fruitName);

      // Is currently selected
      if (idx > -1) {
        $scope.selection.splice(idx, 1);
      }

      // Is newly selected
      else {
        $scope.selection.push(fruitName);
      }
    };
  }]);

})(window.angular);