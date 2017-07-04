(function (angular) {

	var app = angular.module('app', []);

	app.controller('calculateController', ['$scope', function calculateController($scope) {

		$scope.exp = "4 + 3 * 4 + (9 - 1) / 2";
		$scope.listOfExpressions = [];

		$scope.calculate = function() {

			var parser = new MathParser(), 
			form = document.getElementById('math'),
			exp = document.getElementById('exp');

			parser.add("userFunction", function(n, m) {
				return n + m;
			});

			var result = parser.parse(form.exp.value);

			$scope.listOfExpressions.push({"exp": $scope.exp, "result": result});

			sweetAlert({
				title: "The result is: " + result, 
				text: "", 
				type: "success"
			});
		}

		$scope.removeItem = function(item) {
			$scope.listOfExpressions.splice($scope.listOfExpressions.indexOf(item), 1);
		}

	}]);
})(window.angular);