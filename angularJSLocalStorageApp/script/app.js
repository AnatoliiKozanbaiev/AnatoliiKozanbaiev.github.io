


function initiateLocalStorage() {
  // create the angularJS application
  var app = angular.module('Items', ['storageService']);

  // create the controller
  app.controller('ItemsController', ['$scope', 'getLocalStorage', function ($scope, getLocalStorage) {
    $scope.appTitle = "Items";
    $scope.appHeadline = "Comments";

    // read the item list from LocalStorage
    $scope.items = getLocalStorage.getItems();

    // count the item list
    $scope.count = $scope.items.length;
    $scope.checkedItem = 0;
    $scope.tableItemElem = document.getElementById('tableItemElem');
    $scope.triggerButton = document.getElementById('trigger-button');
    $scope.previousTdElem = null;
    $scope.previousTriggerButtonElem = null;

    if ($scope.count > 0) {
      $scope.showComments = $scope.items[$scope.checkedItem]["comments"];
    }

    // add item - using angularJS push to add Item in the Item object
    // call Update item to update the locally stored item list
    // reset the angularJS item scope
    // update the count
    $scope.addItem = function () {
      $scope.items.push({ 'itm': $scope.itm, 'comments': [] });

      $scope.count = $scope.items.length;
      if ($scope.count == 1) {
        $scope.showComments = $scope.items[$scope.checkedItem]["comments"];
        $scope.showComments.push($scope.comment);
        getLocalStorage.updateItems($scope.items);
        $scope.items = getLocalStorage.getItems();
      }


      getLocalStorage.updateItems($scope.items);
      // console.log($scope.items[$scope.checkedItem]["comments"]);

      $scope.itm = '';
      $scope.comment = '';
      $scope.count = $scope.items.length;
    };

    $scope.addComment = function () {
      $scope.showComments = $scope.items[$scope.checkedItem]["comments"];
      $scope.showComments.push($scope.comment);
      getLocalStorage.updateItems($scope.items);

      $scope.comment = '';

    };


    $scope.checkCurrentItem = function (itm, $index) {
      $scope.checkedItem = $scope.items.indexOf(itm);
      $scope.showComments = $scope.items[$scope.checkedItem]["comments"];

      if ($scope.previousTdElem != null) {
        $scope.previousTdElem.removeAttribute("class");
      }

      $scope.checkedTdElem = $scope.tableItemElem.children[0].children[$index].children[0];
      $scope.checkedTdElem.setAttribute("class", "checkedItem");
      $scope.previousTdElem = $scope.checkedTdElem;

      $scope.checkedComment = '';
      if ($scope.previousTriggerButtonElem != null) {
        $scope.previousTriggerButtonElem.removeAttribute("class");
        $scope.previousTriggerButtonElem.setAttribute("class", "btn-unchecked-comment");
      }
      // console.log('current checked item is ' + $scope.checkedItem);
    };

    $scope.checkCurrentComment = function (i, $index) {
      $scope.checkedComment = ' #' + ($index + 1);

      if ($scope.previousTriggerButtonElem != null) {
        $scope.previousTriggerButtonElem.removeAttribute("class");
        $scope.previousTriggerButtonElem.setAttribute("class", "btn-unchecked-comment");
      }

      $scope.checkedCommentButtonElem = $scope.triggerButton.children[$index].children[0];
      $scope.checkedCommentButtonElem.removeAttribute("class");
      $scope.checkedCommentButtonElem.setAttribute("class", "btn-checked-comment");
      $scope.previousTriggerButtonElem = $scope.checkedCommentButtonElem;


    };


    // delete item - using angularJS splice to remove the itm row from the Item list
    // all the update item to update the locally stored Item list
    // update the count
    $scope.deleteItem = function (itm, $index) {
      $scope.items.splice($scope.items.indexOf(itm), 1);
      getLocalStorage.updateItems($scope.items);

      $scope.count = $scope.items.length;

      if ($scope.count == 0) {
        $scope.showComments = [];
      }

      if ($scope.count > 0) {
        // $scope.previousTdElem.removeAttribute("class");
        var newIndexMinOne = $index - 1;
        if (newIndexMinOne <= 0) {
          newIndexMinOne = 0;
        }

        $scope.checkedTdElem = $scope.tableItemElem.children[0].children[newIndexMinOne].children[0];


        $scope.checkedItem = newIndexMinOne;

        //$scope.checkedItem = 0;
        $scope.showComments = $scope.items[$scope.checkedItem]["comments"];
        $scope.checkedTdElem.setAttribute("class", "checkedItem");
        $scope.previousTdElem = $scope.checkedTdElem;

        $scope.checkedComment = '';
        if ($scope.previousTriggerButtonElem != null) {
          $scope.previousTriggerButtonElem.removeAttribute("class");
          $scope.previousTriggerButtonElem.setAttribute("class", "btn-unchecked-comment");
        }
      }

    };
  }]);

  // create the storage service module
  // create getLocalStorage service to access UpdateItems and getItems | getComments method
  var storageService = angular.module('storageService', []);
  storageService.factory('getLocalStorage', function () {
    var itemList = {};
    //var commentList = {};
    return {
      list: itemList,
      //comList: commentList,
      updateItems: function(ItemsArr) {
        if (window.localStorage && ItemsArr) {
          // Local storage to add data
          localStorage.setItem("items", angular.toJson(ItemsArr));
        }
        itemList = ItemsArr;
      },
      getItems: function () {
        // get data from local storage
        itemList = angular.fromJson(localStorage.getItem("items"));
        return itemList ? itemList : [];
      }
    };

  });


}
initiateLocalStorage();











