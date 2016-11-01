/*loadImage("../cat2.jpg").then((img)=>{
	addImg(img.src)
})*/
let addImg = (src) => {
	let imgElement = document.createElement("img")
	imgElement.src = src
	document.body.appendChild(imgElement)
}

function loadImage(url) {
	return new Promise((resolve, reject) => {
		let image = new Image()
		image.onload = function () {
			resolve(image)
		}
		image.onerror = function () {
			let message = "not image"
			reject(new Error(msg))
		}
		image.src = url
	})
}

function showCats() {
	Promise.all([loadImage("../cat2.jpg"), loadImage("../cat5.jpg"), loadImage("../cat3.jpg"), loadImage("../car4.jpg")]).then((images) => {
		console.log(images)
		for (image of images) {
			addImg(image.src)
		}
	})
}