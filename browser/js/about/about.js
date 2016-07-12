app.config(function($stateProvider) {
  $stateProvider.state('about', {
    url: '/about',
    templateUrl: 'js/about/about.html',
    resolve: {
      food: (Food) => Food.getFood()
    },
    controller: ($scope, food) => {
      $scope.food = food;
      // console.log(food)
    }
  });
});