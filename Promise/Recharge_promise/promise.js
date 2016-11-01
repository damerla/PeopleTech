let isValide = true;
let isValideMobileDetails = function () {
	return new Promise(function (resolve, reject) {
		resolve(isValide);
	});
}
let isValidePlane = function () {
	return new Promise(function (reslove, reject) {
		reslove(isValide);
	});
}
let isMoneyPay = function () {
	return new Promise(function (reslove, reject) {
		if (isValide) {
			reslove(isValide);
		} else {
			reject(isValide);
		}
	});
}
function doRecharge() {
	isValideMobileDetails().then(function (result) {
		return isValidePlane();
	}).then(function (result) {
		return isMoneyPay();
	}).then(function (result) {
		alert("Rechanrge is success fully")
	}).catch(function (fail) {
		alert("fail");
	})
}