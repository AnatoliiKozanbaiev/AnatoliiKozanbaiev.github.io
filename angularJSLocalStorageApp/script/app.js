


function initiateLocalStorage() {
  // create the angularJS application
  var app = angular.module('Items', ['storageService']);

  // create the controller
  app.controller('ItemsController', ['$scope', 'getLocalStorage', function ($scope, getLocalStorage) {
    $scope.appTitle = "Items";
    $scope.appHeadline = "Comments";

    // read the item list from LocalStorage
    $scope.items = getLocalStorage.getItems();
    $scope.comments = getLocalStorage.getComments();

    // count the item list
    $scope.count = $scope.items.length;
    $scope.checkedItem = null;
    $scope.tableItemElem = document.getElementById('tableItemElem');
    $scope.previousTdElem = null;


    // add item - using angularJS push to add Item in the Item object
    // call Update item to update the locally stored item list
    // reset the angularJS item scope
    // update the count
    $scope.addItem = function () {
      $scope.items.push({ 'itm': $scope.itm, 'comment' : $scope.comment });
      console.log($scope.items);
      getLocalStorage.updateItems($scope.items);
      $scope.itm = '';
      $scope.comment = '';
      $scope.count = $scope.items.length;
    };

    $scope.addComment = function () {
      $scope.comments.push({'comment' : $scope.comment });
      console.log($scope.comments);
      getLocalStorage.updateComments($scope.comments, $scope.currentCommetsKey);
      $scope.comment = '';

    };



    $scope.checkCurrentItem = function (itm, $index) {
      $scope.checkedItem = $scope.items.indexOf(itm);
      $scope.currentCommetsKey = itm["$$hashKey"];
      // localStorage.setItem($scope.currentCommetsKey, "bla-bla-bla");
      console.log(itm);
      console.log('key is ' + $scope.currentCommetsKey);

      if ($scope.previousTdElem != null) {
        $scope.previousTdElem.removeAttribute("class");
      }

      $scope.checkedTdElem = $scope.tableItemElem.children[0].children[$index].children[0];
      $scope.checkedTdElem.setAttribute("class", "checkedItem");
      $scope.previousTdElem = $scope.checkedTdElem;


      console.log('current checked item is ' + $scope.checkedItem);
    };

    // delete item - using angularJS splice to remove the itm row from the Item list
    // all the update item to update the locally stored Item list
    // update the count
    $scope.deleteItem = function (itm) {
      localStorage.removeItem("comments");
      $scope.items.splice($scope.items.indexOf(itm), 1);
      getLocalStorage.updateItems($scope.items);
      $scope.count = $scope.items.length
    };
  }]);

  // create the storage service module
  // create getLocalStorage service to access UpdateItems and getItems | getComments method
  var storageService = angular.module('storageService', []);
  storageService.factory('getLocalStorage', function () {
    var itemList = {};
    var commentList = {};
    return {
      list: itemList,
      comList: commentList,
      updateItems: function(ItemsArr) {
        if (window.localStorage && ItemsArr) {
          // Local storage to add data
          localStorage.setItem("items", angular.toJson(ItemsArr));
        }
        itemList = ItemsArr;
      },
      updateComments: function (CommentsArr, comments) {
        if (window.localStorage && CommentsArr) {
          // local storage to add data
          localStorage.setItem(comments, angular.toJson(CommentsArr));
        }
        commentList = CommentsArr;
      },
      getItems: function () {
        // get data from local storage
        itemList = angular.fromJson(localStorage.getItem("items"));
        return itemList ? itemList : [];
      },
      getComments: function (comments) {
        // get data from local storage
        commentList = angular.fromJson(localStorage.getItem(comments));
        return commentList ? angular.fromJson(localStorage.getItem(comments)) : [];
      }
    };

  });


}
initiateLocalStorage();











