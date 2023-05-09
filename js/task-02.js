const ingredients = [
	"Potatoes",
	"Mushrooms",
	"Garlic",
	"Tomatos",
	"Herbs",
	"Condiments",
];

const listToAdd = document.getElementById("ingredients");

const elementsToAdd = ingredients.map((el) => {
	const listItem = document.createElement("li");
	listItem.textContent = `${el}`;
	listItem.classList.add("item");
	return listItem;
});
listToAdd.append(...elementsToAdd);
