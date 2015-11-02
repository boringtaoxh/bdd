describe 'posting jobs', ->
  postRequestProduct = undefined

  beforeEach(module 'app')

  newProduct = {
	  'title': 'C# for Sociopaths' 
	  'designer': 1
	  'published': '2013-10-04T23:00:00.000Z'
	  'liked': [1,3]
	}
  
  it 'should call /api/jobs with job data', inject(($httpBackend, products) ->
    $httpBackend.whenPOST('/api/products', (data) ->
      postRequestProduct = JSON.parse(data)
      expect(postRequestProduct).to.not.be.empty
      true
    ).respond 200
    products.save(newProduct)
    $httpBackend.flush()
    return
  )
  return
