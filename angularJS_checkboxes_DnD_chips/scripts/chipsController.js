(function (angular) {
  'use strict';

  var app = angular.module('app');

  app.controller('BasicDemoCtrl', DemoCtrl);

  function DemoCtrl($timeout, $q, $scope) {
    var self = this;

    // Lists of fruit names and Vegetable objects
    self.fruitNames = ['Apple', 'Banana', 'Orange'];
    self.roFruitNames = angular.copy(self.fruitNames);
    self.tags = [];

    $scope.sendChips = function () {
      console.log(angular.toJson(self.roFruitNames));

      var chipsAlert = document.getElementById('chipsAlert');
      var div = document.createElement('div');
      div.className = "alert alert-success";
      div.innerHTML = "<strong>Hooray!!!</strong> All chips are sended";
      chipsAlert.appendChild(div);

      setTimeout(function () {
        div.parentNode.removeChild(div);
      }, 2000);
    };

    self.getSelectedChipIndex = function (event) {
      var selectedChip = angular.element(event.currentTarget).controller('mdChips').selectedChip;
    }

  }

})(window.angular);
