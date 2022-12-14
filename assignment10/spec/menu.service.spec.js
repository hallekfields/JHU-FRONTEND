describe('menu service', function () {

    var menu;
    var $httpBackend;
    var ApiPath;
  
    beforeEach(function () {
      module('common');
  
      inject(function ($injector) {
        menu = $injector.get('MenuService');
        $httpBackend = $injector.get('$httpBackend');
        ApiPath = $injector.get('ApiPath');
      });
    });
  
    it('should return menu item', function() {
      $httpBackend.whenGET(ApiPath + '/menu_items/L/menu_items/5.json').respond(['description', 'name']);
      menu.getMenuItemByShortName('L6').then(function(response) {
        expect(response).toEqual(['description', 'name']);
      });
      $httpBackend.flush();
    });
  
  });
  