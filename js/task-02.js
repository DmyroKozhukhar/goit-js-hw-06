const ingredients = [
	"Potatoes",
	"Mushrooms",
	"Garlic",
	"Tomatos",
	"Herbs",
	"Condiments",
];

const listToAdd = document.getElementById("ingredients");

function createElement(array, list) {
	array.forEach((ingredient) => {
		const listItem = document.createElement("li");
		listItem.textContent = `${ingredient}`;
		listItem.classList.add("item");
		list.append(listItem);
	});
}

createElement(ingredients, listToAdd);
