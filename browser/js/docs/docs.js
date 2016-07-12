app.config(function($stateProvider) {
  $stateProvider.state('docs', {
    url: '/docs',
    templateUrl: 'js/docs/docs.html',
    resolve: {
      user: (AuthService) => AuthService.getLoggedInUser(),
      populatedUser: (user, User) => User.getUser(user._id)
    },
    controller: ($scope, populatedUser, Log) => {
      $scope.log = populatedUser.log

      var calculateTotal = function() {
        $scope.totalOwned = $scope.log.reduce((pre, curr) => {
          let diff = curr.ownedQuantity - curr.doneQuantity
          return diff > 0 ? pre + diff : pre
        }, 0)
      }

      calculateTotal()

      $scope.updateLog = function(data) {
        Log.updateLog(data).then(res => calculateTotal())
      }
    }
  });
});