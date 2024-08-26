var app = angular.module('myApp', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
    .when('/products', {
        templateUrl: 'routeOptionalParameterProduct.html',
        controller: 'ProductsController'
    })
    .otherwise({
        redirectTo: '/products'
    });
});

app.controller('ProductsController', function ($scope, $location) {
    var products = [
        { id: 1, name: 'Laptop', category: 'Electronics', price: 55000 },
        { id: 2, name: 'Headphones', category: 'Electronics', price: 500 },
        { id: 3, name: 'Programming in C', category: 'Books', price: 250 },
        { id: 4, name: 'Programming in AngularJS', category: 'Books', price: 520 }
    ];

    var category = $location.search().category;
    var sort = $location.search().sort;

    if (category) {
        products = products.filter(function (product) {
            return product.category === category;
        });
    }

    if (sort) {
        products.sort(function (a, b) {
            return sort === 'asc' ? a.price - b.price : b.price - a.price;
        });
    }

    $scope.products = products;
});
