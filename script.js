var cartItems=[];
var isTotalHidden=true;
var mi={

	name:"mi",
	price:10000,

}
var samsung={
	name: "samsung",
	price: 20000,

}

function addToCart(item){
	cartItems.push(item);

	document.getElementById("itemCounter").innerHTML=cartItems.length;
	console.log(cartItems);
	showTotal();


}
function clickCart(){
	isTotalHidden = !isTotalHidden;
	showTotal();
}

function showTotal(){
	var orderTotal=document.getElementById("orderTotal");
	orderTotal.innerHTML="";


	if(isTotalHidden === false){
		var total=0;
		for (var i = 0; i < cartItems.length; i++) {
			total += cartItems[i].price;
		}
		orderTotal.innerHTML += "Total: $" + total;
	}
}




