const products = [
    { id: 1, title: "Iphone 16 promax", price: 2000, quantity: 2 },
    { id: 2, title: "Tivi Xiaomi 75inch", price: 4000, quantity: 1 },
    {
      id: 3,
      title: "Tai nghe không dây airpod 2 pro",
      price: 400,
      quantity: 4,
    },
  ];
  // tạo table
  // tính tổng tiền cho từng sản phẩm
  // thêm phẩn tử vào trong thẻ table
//   const content = `
//     <table>
//         <thead>
//             <tr>
//                 <th>Id</th>
//                 <th>Title</th>
//                 <th>Quantity</th>
//                 <th>Total Cost</th>
//             </tr>
//         </thead>
//     </table>
//   `;

let content = "";
  products.forEach(item => {
    const itemElement = `
        <tr>
            <td> ${item.id} </td>
            <td> ${item.title} </td>
            <td> ${item.price} </td>
            <td> ${item.quantity} </td>
            <td> ${item.price * item.quantity}</td>
            
        </tr>
    `
    content += itemElement;
  })

  const result  = products.reduce((acc, cur) => {
    acc += cur.price * cur.quantity;
    return acc;
},0)

  content += `
    <tr>
    <td colspan = "4"> Tổng tiền </td>
    <td>${result}</td>
    </tr>
  `
  console.log(content)

  document.body.innerHTML = `
     <table>
        <thead>
            <tr>
                <th>Id</th>
                <th>Title</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total Cost</th>
            </tr>
        </thead>
    <tbody>
        ${content}
    </tbody>
    </table>
  `

  


