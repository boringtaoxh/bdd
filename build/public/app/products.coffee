app.factory 'products', [
  '$resource'
  ($resource) ->
    $resource '/api/products'
]