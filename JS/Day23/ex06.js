const categories = [
	{
		id: 1,
		name: "Electronics",
		children: [
			{
				id: 2,
				name: "Laptops",
				children: [
					{
						id: 3,
						name: "Apple",
					},
					{
						id: 4,
						name: "Dell",
					},
				],
			},
			{
				id: 5,
				name: "Headphones",
			},
		],
	},
	{
		id: 6,
		name: "Books",
		children: [
			{
				id: 7,
				name: "Fiction",
				children: [
					{
						id: 8,
						name: "Thrillers",
					},
					{
						id: 9,
						name: "Mystery",
					},
				],
			},
			{
				id: 10,
				name: "Non-Fiction",
			},
		],
	},
];

function flattenCategories(categories,  level = 0){
    let result = [];
    categories.forEach(item => {

        result.push({ id: item.id, name: item.name, level});

        if(item.children) {
            result.push(...flattenCategories(item.children, level + 1));
        }
    });

    return result;
}

console.log(flattenCategories(categories));


function getCategoryName(categories, categoryId) {

    const newGetCategoryName = flattenCategories(categories);

    for (let i =0 ; i< newGetCategoryName.length; i++) {
        if(newGetCategoryName[i].id === categoryId) {
            return newGetCategoryName[i].name;
        }
    }
    return null;
}

console.log(getCategoryName(categories,3))
console.log(getCategoryName(categories,10))
console.log(getCategoryName(categories,99))
