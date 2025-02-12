const h2Element = document.createElement("h2");
h2Element.innerText = "Noi dung"
document.body.appendChild(h2Element)
console.log(h2Element)

let boxClassElement = document.getElementsByClassName("box")[0];
console.log(boxClassElement);
boxClassElement.innerHTML = "<p>Xin chao box</p>";

// outerHTML: xủ lý nội dung HTML 
// (NHƯNG KHI DÙNG DƯỚI DẠNG SETTER THÌ THAY THẾ CẢ BẢN THÂN PHẦN TỬ ĐANG THAO TÁC)

// textContent: Chỉ quét và láy ra toàn bộ content của node
//  mà không cố gắng bố cục, sắp xếp lại -> hiệu suất tốt hơn

// innerText và outerText tương tự như trên (xử lý nội dung text)