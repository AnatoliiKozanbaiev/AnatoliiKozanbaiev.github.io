phonecatApp.controller('PhoneListCtrl', [
    '$scope', '$http', '$location', 'Phone',
    function ($scope, $http, $location, Phone) {

        Phone.query({phoneId: 'phones'}, function (data) {
            $scope.phones = data;
        })

        //Phone.query(params, successcb, errorcb) // выполн. запрос http GET и ожидает получ. в ответ масив в формате json. Используется для получения коллекции елементов
        //Phone.get(params, successcb, errorcb) // вып. зап. http GET и ожид. получ в ответ объект в формате json. Используется для получения единственного елемента
        //Phone.save(params, payloadData, successcb, errorcb) // вып. запрос http POST в теле которого передает данные из аргумента payloadData
        //Phone.delete(params, successcb, errorcb)

        // $http.get('phones/phones.json').success(function(data, status, headers, config) {
        //   $scope.phones = data;
        // });

    }]);