(function (angular) {

	var app = angular.module('app', []);

	app.controller('calculateController', ['$scope', function calculateController($scope) {

		$scope.listOfExpressions = [];

		$scope.calculate = function() {

			var parser = new MathParser(), 
			form = document.getElementById('math'),
			exp = document.getElementById('exp');

			parser.add("userFunction", function(n, m) {
				return n + m;
			});

			var result = parser.parse(form.exp.value);

			sweetAlert({
				title: "The result is: " + result, 
				text: "", 
				type: "success"
			});
		}

	}]);
})(window.angular);