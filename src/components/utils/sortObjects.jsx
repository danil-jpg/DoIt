export const sortObjects = (obj, value, up) => {
	obj.sort(function (a, b) {
		if (up) {
			if (a[value] < b[value]) {
				return 1;
			}

			if (a[value] > b[value]) {
				return -1;
			}

			return 0;
		} else {
			if (a[value] > b[value]) {
				return 1;
			}

			if (a[value] < b[value]) {
				return -1;
			}

			return 0;
		}
	});
}