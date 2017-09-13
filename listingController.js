angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;
    $scope.listing = {};
    $scope.details = {};
    /* 
      Implement these functions in the controller to make your application function 
      as described in the assignment spec. 
     */
    $scope.addListing = function() {
      $scope.listings.push($scope.listing);
      $scope.listing = {};
    };
    $scope.deleteListing = function(index) {
      $scope.listings.splice(index, 1);
    };
    $scope.showDetails = function(index) {
      $scope.details.address = $scope.listings[index].address;
      $scope.details.coordinates = $scope.listings[index].coordinates;
      };

    $scope.showLabels = function(){
      if ($scope.details.address===undefined) {
        return false;
      } else {
        return true;
      }

    };
  }
]);