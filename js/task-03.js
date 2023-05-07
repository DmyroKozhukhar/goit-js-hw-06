const images = [
	{
		url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
		alt: "White and Black Long Fur Cat",
	},
	{
		url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
		alt: "Orange and White Koi Fish Near Yellow Koi Fish",
	},
	{
		url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
		alt: "Group of Horses Running",
	},
];
const galleryList = document.querySelector(".gallery");

function addImageToList(listInWhichWePut, imagesToAdd) {
	const listEl = imagesToAdd.map(({ url, alt }) => {
		const listItem = document.createElement("li");
		const image = document.createElement("img");
		image.src = url;
		image.alt = alt;
		image.classList.add("new-picture");
		listItem.insertAdjacentElement("beforeend", image);
		return listItem;
	});

	return listInWhichWePut.append(...listEl);
}
addImageToList(galleryList, images);
