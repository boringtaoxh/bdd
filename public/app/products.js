app.factory('products', [
  '$resource', function($resource) {
    return $resource('/api/products');
  }
]);
