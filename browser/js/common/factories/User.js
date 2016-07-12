app.factory('User', function($http) {
  return {
    getUsers: () => $http.get('api/users/').then(res => res.data),
    getUser: (id) => $http.get('api/users/' + id).then(res => res.data),
    createUser: (data) => $http.post('api/users/', data),
    updateUser: (data) => $http.put('api/users/' + data._id, data).then(res => res.data)
  };
});