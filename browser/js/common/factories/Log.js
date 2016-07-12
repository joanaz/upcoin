app.factory('Log', function($http) {
  return {
    getLog: () => $http.get('api/log/').then(res => res.data),
    createLog: (data) => $http.post('api/log/', data).then(res => res.data),
    updateLog: (data) => $http.put('api/log/' + data._id, data)
  };
});