const cart = [
    {
      id: 1,
      name: 'T-Shirt',
      price: 100000,
      quantity: 2,
      hotSale: false
    },
    {
      id: 2,
      name: 'Jean',
      price: 200000,
      quantity: 1,
      hotSale: false
    },
    {
      id: 3,
      name: 'Skirt',
      price: 150000,
      quantity: 3,
      hotSale: true
    },
    {
      id: 4,
      name: 'Shirt',
      price: 120000,
      quantity: 2,
      hotSale: false
    },
    {
      id: 5,
      name: 'Jacket',
      price: 250000,
      quantity: 1,
      hotSale: true
    }
  ];
  
let content = "";
cart.forEach((item) => {
    let style = "";
    if (item.hotSale) {
        style = 'style="color: red;"';
    }
    const itemElement = `
        <tr ${style}>
            <td>${item.name}</td>
            <td>${item.price}</td>
            <td>${item.quantity}</td>
            <td>${item.price * item.quantity}</td>
        </tr>
    `
    content += itemElement;
})

console.log(content)

const totalAmount = cart.reduce((acc, cur) => {
    acc += cur.quantity * cur.price;
    return acc;
},0)

const tfoot = `
     <tr>
      <td colspan="3">Tổng tiền</td>
      <td>${totalAmount}</td>
    </tr>
`

document.body.innerHTML = `
    <style>
        table {
            width: 100%;
            border-collapse: collapse;
            border: 1px solid black;
        }
        th, td {
            border: 1px solid black;
            padding: 8px;
            text-align: left;
        }
    </style>
    <table>
        <thead>
            <tr>
                <th>Tên sản phẩm</th>
                <th>Đơn giá</th>
                <th>Số lượng</th>
                <th>Thành tiền</th>
            </tr>
        </thead>
        <tbody>
            ${content}
        </tbody>
        <tfoot>
            ${tfoot}
        </tfoot>
    </table>
`

function countElements(tagName) {
    // Your code here
    const getTagName = document.getElementsByTagName(tagName);
    return getTagName.length;
  }
  // Giả sử trên trang web có 10 thẻ div và 5 thẻ p
  
  console.log(countElements('div')); // 10
  console.log(countElements('p')); // 5