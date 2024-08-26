var app = angular.module('myApp', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
    .when('/products', {
        templateUrl: 'products.html',
        controller: 'ProductsController'
    })
    .when('/product/:productId', {
        templateUrl: 'product.html',
        controller: 'ProductController'
    })
    .otherwise({
        redirectTo: '/products'
    });
});

app.controller('ProductsController', function ($scope) {
    $scope.products = [
        { id: 1, name: 'Product 1', description: 'Description of Product 1' },
        { id: 2, name: 'Product 2', description: 'Description of Product 2' },
        { id: 3, name: 'Product 3', description: 'Description of Product 3' }
    ];
});

app.controller('ProductController', function ($scope, $routeParams) {
    var productId = $routeParams.productId;
    var products = [
        { id: 1, name: 'Product 1', description: 'Description of Product 1' },
        { id: 2, name: 'Product 2', description: 'Description of Product 2' },
        { id: 3, name: 'Product 3', description: 'Description of Product 3' }
    ];
    $scope.product = products.find(function (product) {
        return product.id == productId;
    });
});
