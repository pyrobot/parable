angular.module('app', ['gridster'])
.controller('pageCtrl', function ($scope) {
	$scope.standardItems = [
		{ sizeX: 2, sizeY: 1, row: 0, col: 0 },
		{ sizeX: 1, sizeY: 1, row: 0, col: 4 },
		{ sizeX: 1, sizeY: 1, row: 1, col: 4 },
		{ sizeX: 1, sizeY: 2, row: 1, col: 5 },
		{ sizeX: 1, sizeY: 1, row: 2, col: 3 },
	];

	$scope.gridsterOptions = {
		margins: [5, 5],
		columns: 6,
		draggable: {
			enabled: true,
			containment: "#containment-wrapper",
			scroll: false
		},
		resizable: {
			enabled: true,
			handles: 'n, e, s, w, ne, se, sw, nw'
		}
	};

	$scope.removeItem = function (item) {
		var idx = $scope.standardItems.indexOf(item);
		if (idx > -1) {
			$scope.standardItems.splice(idx,1);
		}
	}

});