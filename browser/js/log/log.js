app.config(function($stateProvider) {
  $stateProvider.state('log', {
    url: '/log',
    templateUrl: 'js/log/log.html',
    resolve: {
      food: (Food) => Food.getFood(),
      user: (AuthService) => AuthService.getLoggedInUser()
    },
    controller: ($scope, food, user, Log, Food, User) => {
      $scope.food = food;
      $scope.user = user;
      $scope.score = 0;
      $scope.addScore = function(quantity) {
        $scope.score += quantity
      }
      $scope.clear = function() {
        $scope.score = 0
      }

      // New log
      $scope.log = function() {
        var newLog = {
          date: $scope.dt,
          ownedQuantity: $scope.score
        }

        Log.createLog(newLog).then(createdLog => {
          $scope.user.log.push(createdLog._id)
          return User.updateUser($scope.user)
            .then(updatedUser => $scope.user = updatedUser)
        })
      }

      // Datepicker
      $scope.today = function() {
        $scope.dt = new Date();
      };
      $scope.today();

      $scope.open = function() {
        $scope.popup.opened = true;
      };
      $scope.popup = {
        opened: false
      };
      $scope.format = 'yyyy/MM/dd'
      $scope.altInputFormats = ['M!/d!/yyyy'];

      // New food
      $scope.submit = function() {
        $scope.newFood.quantity = parseInt($scope.newFood.quantity)
        Food.createFood($scope.newFood)
      }
    }
  });
});