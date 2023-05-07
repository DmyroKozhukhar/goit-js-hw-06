const categoriesItemsList = document.querySelectorAll(".item");

console.log(`Number of categories:`, categoriesItemsList.length);

categoriesItemsList.forEach((item) => {
	const itemTitle = item.querySelector("h2").textContent;
	const itemsNumber = item.querySelectorAll("li").length;
	console.log(`Category:`, itemTitle);
	console.log(`Elements:`, itemsNumber);
});
