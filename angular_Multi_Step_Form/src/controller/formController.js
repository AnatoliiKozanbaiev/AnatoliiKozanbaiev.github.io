formApp.controller('formController', function ($scope) {

    // we will store all of our form data in this object
    $scope.formData = {
        amount: 10000,
        term: 1,
        id: 1234567894,
        name: 'Anatolii',
        surname: 'Kozanbaiev',
        cityUKR: "Киев, Украина, 02000"
    };

    $scope.cyanStyle={'color':'#00BC8C'}
    $scope.lightcoralStyle={'color':'lightcoral'}

    // function to process the form
    $scope.processForm = function () {
        sweetAlert({
            title: "Data sent!",
            text: "Amount: " + $scope.formData.amount + '\n' +
            "Term: " + $scope.formData.term + '\n' +
            "Id: " + $scope.formData.id + '\n' +
            "Name: " + $scope.formData.name + '\n' +
            "Surname: " + $scope.formData.surname + '\n' +
            "City: " + $scope.formData.cityUKR + '\n',
            type: "success"
        });
    };

    function showNumberAlert() {
        sweetAlert({
            title: "Wrong number!",
            text: "Please enter integer value from 1 to 10000",
            type: "error"
        });
    }

    // form.numbers part
    $scope.$watch("formData.amount", function (newVal, oldVal) {
        if (newVal !== oldVal) {
            $scope.formData.amount = newVal;
        }
        if (newVal > 10000) {
            $scope.formData.amount = 10000;
            showNumberAlert();
        }
        else if (newVal < 1) {
            $scope.formData.amount = 1;
            showNumberAlert();
        }
    });

    $scope.terms = [
        {value: 1}, {value: 2}, {value: 3}, {value: 4},
        {value: 5}, {value: 6}, {value: 7}, {value: 8},
        {value: 9}, {value: 10}, {value: 11}, {value: 12}
    ];

    // form.profile part
    $scope.$watch("formData.id", function (newVal, oldVal) {
        if (newVal !== oldVal && newVal > 9999999999) {
            $scope.formData.id = oldVal;
        }
    });




});


function is_valid_inn(id) {
    if (id.match(/\D/)) return false;

    var inn = id.match(/(\d)/g);
    if (inn.length == 10) {
        return inn[9] == String(((
                    2 * inn[0] + 4 * inn[1] + 10 * inn[2] +
                    3 * inn[3] + 5 * inn[4] + 9 * inn[5] +
                    4 * inn[6] + 6 * inn[7] + 8 * inn[8]
                ) % 11) % 10);
    }

    return false;
}

