app.controller('MainController', ['$scope', function($scope) {
  $scope.title = 'My app title';
  $scope.promo = 'Here is a string';
  $scope.product = {
  name: 'The Book of Trees',
  price: 19,
  pubdate: new Date('2014', '03', '08')
  }
}]);

