// JScript source code
var app = angular.module('myApp', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
    .when('/products', {
        templateUrl: 'routeQueryParameterProduct.html',
        controller: 'ProductsController'
    })
    .otherwise({
        redirectTo: '/products'
    });
});

app.controller('ProductsController', function ($scope, $location) {
    var products = [
        { id: 1, name: 'Laptop', category: 'Electronics' },
        { id: 2, name: 'Headphones', category: 'Electronics' },
        { id: 3, name: 'Programming in C', category: 'Books' },
        { id: 4, name: 'Programming in AngularJS', category: 'Books' }
    ];

    var category = $location.search().category;
    if (category) {
        $scope.products = products.filter(function (product) {
            return product.category === category;
        });
    } else {
        $scope.products = products;
    }
});

