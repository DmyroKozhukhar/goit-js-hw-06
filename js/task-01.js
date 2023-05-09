const categoriesItemsList = document.querySelectorAll(".item");

const listRef = document.querySelector("#categories");
const listRefItems = listRef.children;
const numberOfListFirstItems = listRefItems.length;

console.log(`Number of categories:`, numberOfListFirstItems);

categoriesItemsList.forEach((item) => {
	const itemTitleAtl = item.firstElementChild.textContent;
	const innerListLength = item.lastElementChild.children.length;

	console.log(`Category:`, itemTitleAtl);
	console.log(`Elements:`, innerListLength);
});
