app.directive('foodJumbotron', function() {
  return {
    restrict: 'E',
    templateUrl: 'js/common/directives/food-jumbotron/food-jumbotron.html',
    scope: {
      food: '='
    }
  }
})