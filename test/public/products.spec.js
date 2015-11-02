describe('posting jobs', function() {
  var newProduct, postRequestProduct;
  postRequestProduct = void 0;
  beforeEach(module('app'));
  newProduct = {
    'title': 'C# for Sociopaths',
    'designer': 1,
    'published': '2013-10-04T23:00:00.000Z',
    'liked': [1, 3]
  };
  it('should call /api/jobs with job data', inject(function($httpBackend, products) {
    $httpBackend.whenPOST('/api/products', function(data) {
      postRequestProduct = JSON.parse(data);
      expect(postRequestProduct).to.not.be.empty;
      return true;
    }).respond(200);
    products.save(newProduct);
    $httpBackend.flush();
  }));
});
