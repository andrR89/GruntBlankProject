var app = angular.module("blankApp", ['ngRoute', 'ngScrollTo', 'ui.utils', 'ui.bootstrap', 'angularUtils.directives.dirPagination', 'googlechart']);

app.controller('templateController', ['$scope', function($scope) {
    $scope.templateHeader = { name: 'header', url: 'header.html'};
    $scope.templateFooter = { name: 'footer', url: 'footer.html'};
}]);
