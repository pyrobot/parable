angular.module('app', ['gridster','xeditable'])
.controller('pageCtrl', function ($scope) {
	$scope.standardItems = [
		{ sizeX: 2, sizeY: 1, row: 0, col: 0 },
		{ sizeX: 1, sizeY: 1, row: 0, col: 4 },
		{ sizeX: 1, sizeY: 1, row: 1, col: 4 },
		{ sizeX: 1, sizeY: 2, row: 1, col: 5 },
		{ sizeX: 1, sizeY: 1, row: 2, col: 3 },
	];

	$scope.addClass = function ($event) {
		$($event.target).addClass('gridster-item-moving')
	}

	$scope.remClass = function ($event) {
		$($event.target).removeClass('gridster-item-moving')
	}

	$scope.gridsterOptions = {
		margins: [5, 5],
		columns: 6,
		maxRows: 3,
		floating: false,
		pushing: false,
		draggable: {
			enabled: true,
			// handle: 'header',
			containment: "#containment-wrapper",
			scroll: false,
			// snap: '#containment-wrapper',
			// snapMode: "inner"
		},
		resizable: {
			enabled: true,
			handles: 'n, e, s, w, ne, se, sw, nw'
		}
	};

	$scope.removeItem = function (item, el) {
		if (el) {
			var $target = $(el.parentElement.parentElement);
			$target.addClass('gridster-item-deleting')
			TweenMax.to($target, 0.2, {scaleX: 0, scaleY:0, ease:Back.easeIn, onComplete: function() {
				var idx = $scope.standardItems.indexOf(item);
				if (idx > -1) {
					$scope.standardItems.splice(idx,1);
				}
			}})
		}
	}

	$scope.addItem = function () {
		// for (var i = 0, l = $scope.gridsterOptions.columns; i < l; i++) {

		// }

		if ($scope.scanColumn(0)) {
			return;
		}

		$scope.standardItems.push({
			sizeX: 1,
			sizeY: 1,
			row: 0,
			col: 0
		});
	}

	$scope.cleanUp = function () {
		$scope.gridsterOptions
	}

	$scope.scanColumn = function (col,maxRows) {
		col = col || 0;
		maxRows = maxRows || 3;
		var scanned = [];
		for (var k = 0; k < maxRows; k++) { scanned.push(false); }
		for (var i = 0, l = $scope.standardItems.length; i < l; i++) {
			var item = $scope.standardItems[i];
			if (item.col == col) {
				scanned[item.row] = true;
			}
		}
		return scanned.every(Boolean);
	}
});