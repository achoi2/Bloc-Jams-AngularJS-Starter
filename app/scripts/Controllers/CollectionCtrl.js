(function() {
     function CollectionCtrl(Fixtures) {
       this.albums = Fixtures.getCollection(12);
     }
// inject fictures module/service
     angular
         .module('blocJams')
         .controller('CollectionCtrl', ['Fixtures', CollectionCtrl]);
 })();
