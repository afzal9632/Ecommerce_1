let arr = JSON.parse(localStorage.getItem("Product")) || [];

function Product(n, c, i, p, g, s) {
  this.Name = n;
  this.Category = c;
  this.Image = i;
  this.Price = p;
  this.Gender = g;
  this.Sold = s;
}

function storeProduct(e) {
  e.preventDefault();
  let form = document.getElementById("dashboard");

  let Name = form.name.value;
  let Category = form.category.value;
  let Image = form.image.value;
  let Price = form.price.value;
  let Gender = form.gender.value;
  let Sold = form.sold.value;

  let p1 = new Product(Name, Category, Image, Price, Gender, Sold);
  arr.push(p1);

  localStorage.setItem("Product", JSON.stringify(arr));
  console.log("arr:", arr);
}
