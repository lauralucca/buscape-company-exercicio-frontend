angular.module("addToCart").controller("addToCartCtrl", function ($scope, currencyFilter) {
	  $scope.cartItems = [];
		$scope.items = [];
		$scope.cartTotal = 0;
		// $scope.carregando = [];

    function buildProductsList(productsJson) {
        let productsList = productsJson;
        productsList.forEach(function(item) {
						let listOfImagesAsObjects = [];
						item.product.images.forEach(function(image) {
							listOfImagesAsObjects.push({'url':image,'active':false});
						});
						item.product.images = listOfImagesAsObjects;
						item.product.quantity = 1;
						item.product.enlargedImage = "";
						setActiveImage(item.product.images[0], item);
        });
        return productsList;
    }

    $scope.items = buildProductsList(productsJson);

		function updateCartTotal () {
			$scope.cartTotal = 0;
			$scope.cartItems.forEach(function(item) {
				$scope.cartTotal = $scope.cartTotal + item.product.price.value * item.product.quantity;
			});
		}

		function updateInstallmentsTotal () {
			$scope.installmentsTotal = 0;
			$scope.cartItems.forEach(function(item) {
				$scope.installmentsTotal = $scope.installmentsTotal + item.product.price.installmentValue * item.product.quantity;
			});
		}

		function updateQuantityTotal () {
			$scope.quantityTotal = 0;
			$scope.cartItems.forEach(function(item) {
				$scope.quantityTotal = $scope.quantityTotal + item.product.quantity;
			});
		}


		$scope.$watchCollection('cartItems', function() {
				updateCartTotal();
				updateInstallmentsTotal();
				updateQuantityTotal();
    });

    function containsObject(object, objectsList) {
    	for (var i = objectsList.length - 1; i >= 0; i--) {
    		if (object == objectsList[i]) {
    			return true;
    		}
    	}
    	return false;
    }

    $scope.addToCart = function (item, itemsList) {
    	if (containsObject(item, itemsList)) {
        changeProductQuantity (item, 1);
    	} else {
    		$scope.cartItems.push(item);
    	}
    };

    $scope.removeFromCart = function (item, itemsList) {
      item.product.quantity = 1;
    	$scope.cartItems.splice(itemsList.indexOf(item), 1);
    };

		$scope.changeProductQuantity = changeProductQuantity;

		function changeProductQuantity (item, quantity) {
			if(item.product.quantity + quantity >= 1) {
				item.product.quantity = item.product.quantity + quantity;
			}
			updateCartTotal();
			updateInstallmentsTotal();
			updateQuantityTotal();
		}

		$scope.setActiveImage = setActiveImage;

		function setActiveImage(image, item) {
			item.product.images.forEach(function(image) {
				image.active = false;
			});
			item.product.enlargedImage = image;
			image.active = true;
		}

});
