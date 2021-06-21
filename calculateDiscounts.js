
//Reducer function to add the total products
const totalProductsReducer = (accumulator, currentValue) => accumulator+ currentValue.quantity;

function calculateOptimalDiscount(services, price, discounts){
	
	//The total of purchased products 
	let totalProducts= services.reduce(totalProductsReducer, 0);
	
	//The total of different products
	let totalDifferentProducts = services.length;
	
	//The maximum combinations of bigger discounts. 
	let numberCombinationDiscounts=Math.round(totalProducts/totalDifferentProducts)
	//Math.max.apply(Math, services.map(x=>x.quantity))
	//The maximum discount that will be applied (25%, 30%, etc)
	let maxQuantityDifferentProductsDiscount = Math.round(totalProducts/numberCombinationDiscounts);
	let remain=services.map(a => ({...a}));
	let appliedDiscounts=[];
	let finish=false
	
	//while not all groups of discount have been applied
	while(!finish){
		let differentProducts=0;
		let discountGroups = new Object();
		
		//Create a group of products to apply the discount
		//and remove them from the other products remain to calculate
		let products=remain.reduce((results, item) => {
			if (item.quantity >0 &&differentProducts<maxQuantityDifferentProductsDiscount) {
				--item.quantity;
				differentProducts++;
				results.push(item.name) 
			}
			return results
		}, [])
		
		//All the discounts have bee applied
		if(products.length===0){
			finish = true;
			break;
		}
		
		//Apply discount
		discountGroups.products= products;
		discountGroups.discount= differentProducts;
		discountGroups.total= (differentProducts*price)*( (100-discounts[differentProducts]) / 100 );
		appliedDiscounts.push(discountGroups);
	}
	
	return appliedDiscounts;
	
}


const sampleSelection = [
{name:"product1", quantity:1},
{name:"product2", quantity:2},
{name:"product3", quantity:2},
{name:"product4", quantity:2},
{name:"product5", quantity:3},
{name:"product6", quantity:3},
];

let pricePerUnit=8;

//Number of different services discount percentage
const discountPercentage = {
	1: 0,
	2: 5,
	3: 10,
	4: 15,
	5: 25,
	6: 30,
	7: 35
}

//Execute the function
let totalDiscounts= calculateOptimalDiscount(sampleSelection,pricePerUnit, discountPercentage);
//The total after all discounts have been applied
let total=0;

console.log("------------------------------------------");
console.log("Applied discounts");
console.log("------------------------------------------");
totalDiscounts.map(i=>{
	total+=i.total;
	console.log("Products");
	console.log(i.products);
	console.log("Discount:  "+discountPercentage[i.discount]+"%");
	console.log("Total:  $"+i.total);
	console.log("------------------------------------------");
});	
console.log("TOTAL:	$"+total);
console.log("------------------------------------------");
