phonecatApp.directive( 'myGrid', function()
{
    return {
        restrict: 'E',
        scope   : {
            info: '=info'
        },
        templateUrl: '../../template/directiveGrid.html'
    }
});