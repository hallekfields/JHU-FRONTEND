describe('menu service', function () {

    var menu;
    var $httpBackend;
    var ApiPath;
  
    beforeEach(function () {
      module('restaurant');
  
      inject(function ($injector) {
        menu = $injector.get('MenuService');
        $httpBackend = $injector.get('$httpBackend');
        ApiPath = $injector.get('ApiPath');
      });
    });
  
    it('should return menu item', function() {
      var responseMock = {
        description: 'white meat chicken in a clear white sauce sauteed with mixed vegetables',
        name: 'Chicken Vegetable',
        price_large: 9.75,
        short_name: 'L6'
      }
      $httpBackend.whenGET(ApiPath + '/menu_items/L/menu_items/5.json').respond(function () {
        return [200, true];
      });
      menu.getMenuItemByShortName('L6').then(function(response) {
        expect(response.data).toEqual(
          responseMock
        );
      });
      $httpBackend.flush();
    });
  
  });
  