app.factory('Food', function($http) {
    return {
        getFood: () =>
            $http.get('api/food/')
            .then(res => res.data),
        createFood: (data) =>
            $http.post('api/food/', data)
    };
});