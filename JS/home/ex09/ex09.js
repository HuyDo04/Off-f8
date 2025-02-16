const products = [
    { product_id: 1, product_name: "Sản phẩm 1", product_price: 1000 },
    { product_id: 2, product_name: "Sản phẩm 2", product_price: 2000 },
    { product_id: 3, product_name: "Sản phẩm 3", product_price: 3000 },
    { product_id: 4, product_name: "Sản phẩm 4", product_price: 4000 }
];

  let cart = [];

  function renderProducts() {
    const productList = document.getElementById("product-list");
    productList.innerHTML = "";
    products.forEach((product, index) => {
      productList.innerHTML += `
                <tr>
                    <td>${index + 1}</td>
                    <td>${product.product_name}</td>
                    <td>${product.product_price}</td>
                    <td>
                        <input type="number" id="quantity-${
                          product.product_id
                        }" value="1" min="1">
                        <button onclick="addToCart(${
                          product.product_id
                        })">Thêm vào giỏ</button>
                    </td>
                </tr>
            `;
    });
  }

  function addToCart(product_id) {
    const quantity = parseInt(document.getElementById(`quantity-${product_id}`).value);
    const product = products.find((p) => p.product_id === product_id);
    
    if (product) {
        const existingItem = cart.find((item) => item.product_id === product_id);
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            cart.push({ ...product, quantity });
        }
    }

    renderCart();
}

  function renderCart() {
    const cartList = document.getElementById("cart-list");
    cartList.innerHTML = "";
    let totalPrice = 0;
    cart.forEach((item, index) => {
      const total = item.product_price * item.quantity;
      totalPrice += total;
      cartList.innerHTML += `
                <tr>
                    <td>${index + 1}</td>
                    <td>${item.product_name}</td>
                    <td>${item.product_price}</td>
                    <td><input type="number" value="${
                      item.quantity
                    }" min="1" onchange="changeQuantity(${
        item.product_id
      }, this.value)"></td>
                    <td>${total}</td>
                    <td><button onclick="removeFromCart(${
                      item.product_id
                    })">Xóa</button></td>
                </tr>
            `;
    });
    document.getElementById("total-price").innerText = totalPrice;
  }

  function changeQuantity(product_id, quantity) {
    const item = cart.find((i) => i.product_id === product_id);
    if (item) {
      item.quantity = parseInt(quantity);
    }
    renderCart();
  }

  function removeFromCart(product_id) {
    cart = cart.filter((item) => item.product_id !== product_id);
    renderCart();
  }

  function updateCart() {
    renderCart();
  }

  function clearCart() {
    cart = [];
    renderCart();
  }

  renderProducts();