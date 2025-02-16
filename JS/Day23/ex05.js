const products = [
	{
		id: 1,
		name: "Apple iPhone 12",
		price: 1000,
	},
	{
		id: 2,
		name: "Samsung Galaxy S21",
		price: 900,
	},
	{
		id: 3,
		name: "Xiaomi Mi 11",
		price: 800,
	},
	{
		id: 4,
		name: "Apple iPhone 11",
		price: 700,
	},
	{
		id: 5,
		name: "Samsung Galaxy S20",
		price: 600,
	},
	{
		id: 6,
		name: "Xiaomi Mi 10",
		price: 500,
	},
];


function getTopProducts(products, top) {
    const result = [];

    for (let i = 0; i < top; i++) {
        let maxIndex = i;
        for (let j = i + 1; j < products.length; j++) {
            if (products[j].price > products[maxIndex].price) {
                maxIndex = j;
            }
        }
       
        if (maxIndex !== i) {
            [products[i], products[maxIndex]] = [products[maxIndex], products[i]];
        }

        result.push(products[i]);
    }
    return result;
}
console.log(getTopProducts(products, 3));

