const products = [

{
id:1,
name:"iPhone 13",
category:"Electronics",
price:38000,
condition:"Good",
location:"Coimbatore",
seller:"Arun",
description:"iPhone 13 128GB in good condition.",
image:"https://images.unsplash.com/photo-1592286927505-2fd0bba6e3c2?auto=format&fit=crop&w=800&q=80"
},

{
id:2,
name:"Dell Laptop",
category:"Electronics",
price:28000,
condition:"Good",
location:"Coimbatore",
seller:"Priya",
description:"Dell laptop suitable for students and office work.",
image:"https://images.unsplash.com/photo-1593642532400-2682810df593?auto=format&fit=crop&w=800&q=80"
},

{
id:3,
name:"Mountain Bicycle",
category:"Vehicles",
price:8500,
condition:"Like New",
location:"Erode",
seller:"Karthik",
description:"Well maintained mountain bicycle.",
image:"https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=800&q=80"
},

{
id:4,
name:"Wooden Study Table",
category:"Furniture",
price:4500,
condition:"Good",
location:"Coimbatore",
seller:"Maha",
description:"Strong wooden study table with storage.",
image:"https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=800&q=80"
},

{
id:5,
name:"Office Chair",
category:"Furniture",
price:3200,
condition:"Good",
location:"Tiruppur",
seller:"Sofi",
description:"Comfortable office chair.",
image:"https://images.unsplash.com/photo-1505843490701-5be5d6f7d2a8?auto=format&fit=crop&w=800&q=80"
},

{
id:6,
name:"Denim Jacket",
category:"Fashion",
price:900,
condition:"Like New",
location:"Erode",
seller:"Anu",
description:"Classic denim jacket in excellent condition.",
image:"https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80"
},

{
id:7,
name:"Harry Potter Book Set",
category:"Books",
price:1200,
condition:"Good",
location:"Coimbatore",
seller:"Nila",
description:"Harry Potter book collection.",
image:"https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&w=800&q=80"
},

{
id:8,
name:"Canon Camera",
category:"Electronics",
price:24000,
condition:"Good",
location:"Coimbatore",
seller:"Rahul",
description:"Canon digital camera with lens.",
image:"https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80"
},

{
id:9,
name:"Dining Table",
category:"Furniture",
price:7000,
condition:"Good",
location:"Salem",
seller:"Vijay",
description:"Six seater dining table.",
image:"https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80"
},

{
id:10,
name:"Wireless Headphones",
category:"Electronics",
price:1500,
condition:"Like New",
location:"Erode",
seller:"Meena",
description:"Wireless headphones with clear sound.",
image:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80"
},

{
id:11,
name:"College Backpack",
category:"Fashion",
price:650,
condition:"Good",
location:"Coimbatore",
seller:"Divya",
description:"Spacious backpack suitable for college.",
image:"https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80"
},

{
id:12,
name:"Study Lamp",
category:"Others",
price:500,
condition:"Like New",
location:"Tiruppur",
seller:"Sanjay",
description:"LED study lamp with adjustable brightness.",
image:"https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=800&q=80"
},

{
id:13,
name:"Gaming Keyboard",
category:"Electronics",
price:1800,
condition:"Good",
location:"Chennai",
seller:"Vishnu",
description:"RGB gaming keyboard.",
image:"https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80"
},

{
id:14,
name:"Smart Watch",
category:"Electronics",
price:2200,
condition:"Like New",
location:"Erode",
seller:"Harini",
description:"Smart watch with fitness tracking.",
image:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80"
},

{
id:15,
name:"Wooden Bookshelf",
category:"Furniture",
price:3800,
condition:"Good",
location:"Salem",
seller:"Ravi",
description:"Wooden bookshelf with multiple shelves.",
image:"https://images.unsplash.com/photo-1594620302200-9a762244a156?auto=format&fit=crop&w=800&q=80"
},

{
id:16,
name:"Sports Shoes",
category:"Fashion",
price:1100,
condition:"Good",
location:"Coimbatore",
seller:"Ajay",
description:"Comfortable sports shoes.",
image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80"
}

];


let selectedCategory = "All";

let favorites =
JSON.parse(
localStorage.getItem("favorites") || "[]"
);

let listings =
JSON.parse(
localStorage.getItem("listings") || "[]"
);


function money(price) {

return "₹" +
Number(price).toLocaleString("en-IN");

}


function allProducts() {

return [...listings,...products];

}


function createCard(product) {

let saved =
favorites.includes(product.id);

return `

<div class="product-card">

<div class="product-image">

<img
src="${product.image}"
alt="${product.name}"
>

<button
class="favorite ${saved ? "saved":""}"
onclick="toggleFavorite(${product.id})"
>

${saved ? "♥":"♡"}

</button>

</div>


<div class="product-info">

<span class="tag">
${product.category}
</span>

<h3>
${product.name}
</h3>

<p>
${product.description}
</p>


<div class="product-bottom">

<span class="price">
${money(product.price)}
</span>

<span class="location">
📍 ${product.location}
</span>

</div>


<button
class="view"
onclick="openProduct(${product.id})"
>

View Details

</button>

</div>

</div>

`;

}


function renderProducts() {

let search =
document
.getElementById("searchInput")
.value
.toLowerCase();


let list =
allProducts().filter(product => {

let categoryMatch =
selectedCategory === "All" ||
product.category === selectedCategory;

let searchMatch =
product.name.toLowerCase().includes(search) ||
product.category.toLowerCase().includes(search) ||
product.location.toLowerCase().includes(search);

return categoryMatch && searchMatch;

});


document.getElementById("productGrid").innerHTML =

list.length
?
list.map(createCard).join("")
:
`<p class="empty">No products found.</p>`;

}


function filterProducts() {

renderProducts();

}


function selectCategory(category,button) {

selectedCategory = category;

document
.querySelectorAll(".categories button")
.forEach(btn =>
btn.classList.remove("active")
);

button.classList.add("active");

renderProducts();

}


function toggleFavorite(id) {

if(favorites.includes(id)) {

favorites =
favorites.filter(item => item !== id);

}
else {

favorites.push(id);

}

localStorage.setItem(
"favorites",
JSON.stringify(favorites)
);

renderProducts();
renderFavorites();

}


function renderFavorites() {

let favProducts =
allProducts().filter(product =>
favorites.includes(product.id)
);

document.getElementById("favoriteGrid").innerHTML =

favProducts.length
?
favProducts.map(createCard).join("")
:
"";

document.getElementById("noFavorites").style.display =

favProducts.length
?
"none"
:
"block";

}


function renderListings() {

document.getElementById("listingGrid").innerHTML =

listings.length
?
listings.map(createCard).join("")
:
"";

document.getElementById("noListings").style.display =

listings.length
?
"none"
:
"block";

}


function openProduct(id) {

let product =
allProducts().find(p => p.id === id);

if(!product) return;


document.getElementById("modalImage").src =
product.image;

document.getElementById("modalCategory").textContent =
product.category;

document.getElementById("modalName").textContent =
product.name;

document.getElementById("modalDescription").textContent =
product.description +
" Condition: " +
product.condition;

document.getElementById("modalPrice").textContent =
money(product.price);

document.getElementById("modalLocation").textContent =
"📍 " +
product.location +
"  •  Seller: " +
product.seller;


document
.getElementById("productModal")
.classList.add("show");

}


function closeModal() {

document
.getElementById("productModal")
.classList.remove("show");

}


function contactSeller() {

alert(
"Contact request sent to the seller!"
);

}


function showSection(id) {

document
.getElementById(id)
.scrollIntoView({
behavior:"smooth"
});

document
.querySelector(".navbar nav")
.classList.remove("open");

}


function toggleMenu() {

document
.querySelector(".navbar nav")
.classList.toggle("open");

}


document
.getElementById("sellForm")
.addEventListener("submit",function(event) {

event.preventDefault();


let newProduct = {

id:Date.now(),

name:
document.getElementById("productName").value,

category:
document.getElementById("productCategory").value,

price:
Number(
document.getElementById("productPrice").value
),

condition:
document.getElementById("productCondition").value,

location:
document.getElementById("productLocation").value,

seller:"You",

description:
document.getElementById("productDescription").value,

image:
document.getElementById("productImage").value ||

"https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80"

};


listings.unshift(newProduct);


localStorage.setItem(
"listings",
JSON.stringify(listings)
);


this.reset();

renderProducts();
renderListings();


alert(
"Your product has been listed successfully!"
);


showSection("listings");

});


document
.getElementById("productModal")
.addEventListener("click",function(event){

if(event.target === this) {

closeModal();

}

});


renderProducts();

renderFavorites();

renderListings();