var app = angular.module("lanchoneteApp", ['ngRoute']);

app.controller('templateController', ['$scope', function($scope) {
    $scope.templateHeader = { name: 'header', url: 'header.html'};
    $scope.templateFooter = { name: 'footer', url: 'footer.html'};
}]);