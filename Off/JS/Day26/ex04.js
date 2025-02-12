let str2 = "ohello"

// console.log(str.charAt(100)) //""
// console.log(str.charAt(1)) //e

// console.log(str.includes("h"));

console.log(str2.indexOf("o",2));
// console.log(str.lastIndexOf("l"));

let count = 0;
function key (str, keyWord) {
    str = str.toUpperCase();
    keyWord = keyWord.toUpperCase();
    for(let i = 0; i < str.length; i++) {
        if(str.indexOf(keyWord, i) === i) {
            // str.indexOf(keyWord, i) lấy ra vị trí i có chứa keyword và so sánh với chỉ mục i
            count++;
            i += keyWord.length - 1;
        }
    }
    return count;
}

console.log(key("hello hello hello xin chào tôi là hello xin chào tất cả mọi người hello ","hello"));


let jsContent = `Năm 1995: JavaScript được tạo ra bởi Brendan Eich chỉ trong khoảng 10 ngày khi ông làm việc tại Netscape. Tên ban đầu của Javascript là Mocha, sau đó được đổi tên thành LiveScript.
Năm 1996:Javascript được gửi đến ECMA(European Computer Manufacturers Association - Hội liên hiệp các nhà sản xuất máy tính Châu Âu)để chuẩn hóa và đổi tên thành JavaScript.
Năm 2009: ECMAScript 5 ra đời với nhiều cải tiến quan trọng như có thêm nhiều phương thức mới cho mảng và đối tượng và tính năng "strict mode". Cũng trong năm 2009 Ryan Dahl đã tạo ra Node.js, một nền tảng cho phép chạy javaScript ngoài trình duyệt. Điều này đã mở ra một cánh cửa mới cho JavaScript.
Năm 2015:ECMAScript 6 (ES6) ra đời,là phiên bản lớn nhất của ECMAScript với nhiều cải tiến và tính năng được coi là vượt bậc.
Năm 2016 - nay:Các phiên bản ECMAScript mới được ra mắt liên tục,với nhiều cải tiến và tính năng mới.Cho đến nay javaScript đã trở thành một trong số những ngôn ngữ được ưa chuộng và sử dụng nhiều nhất thế giới.`;

function printHighlight(content, keyword) {
    let result = "";

    content = content.toLowerCase();
    keyword = keyword.toLowerCase();

    for(let i = 0; i< content.length; i++) {

        if(content.indexOf(keyword,i) === i) {
            result += `<b>${keyword}</b>`;
            i += keyword.length - 1;
        } else {
            result += content[i];
        }
    }

    return result;
}

console.log(printHighlight(jsContent, "javascript"));

// Năm 1995: <b>JavaScript</b> được tạo ra bởi Brendan Eich chỉ trong khoảng 10 ngày khi ông làm
// việc tại Netscape. Tên ban đầu của <b>Javascript</b> là Mocha, sau đó được đổi tên thành LiveScript.
// Năm 1996:<b>Javascript</b> được gửi đến ECMA (European Computer Manufacturers Association - Hội liên hiệp các nhà sản xuất máy tính Châu Âu) để chuẩn hóa và đổi tên thành <b>JavaScript</b>.
// Năm 2009: ECMAScript 5 ra đời với nhiều cải tiến quan trọng như có thêm nhiều phương thức mới cho mảng và đối tượng và tính năng "strict mode". Cũng trong năm 2009 Ryan Dahl đã tạo ra Node.js, một nền tảng cho phép chạy <b>javaScript</b> ngoài trình duyệt. Điều này đã mở ra một cánh cửa mới cho <b>JavaScript</b>.
// Năm 2015:ECMAScript 6 (ES6) ra đời,là phiên bản lớn nhất của ECMAScript với nhiều cải tiến và tính năng được coi là vượt bậc.
// Năm 2016 - nay: Các phiên bản ECMAScript mới được ra mắt liên tục, với nhiều cải tiến và tính năng mới.Cho đến nay <b>javaScript</b> đã trở thành một trong số những ngôn ngữ được ưa chuộng và sử dụng nhiều nhất thế giới.

function fixContent(content) {
    const punctuations = [".", ",", ";", ":", "!", "?"];
    const specialCharacters = ["(", ")", "[", "]", "{", "}", "<", ">"];
    let result = "";

    for (let i = 0; i < content.length; i++) {
        const char = content[i];

        // Dấu câu
        if (punctuations.indexOf(char) !== -1) {
            result += char;
            if (content[i + 1] !== " ") {
                result += " ";
            }
        } 
 
        // Ký tự đặc biệt
        else if (specialCharacters.indexOf(char) !== -1) {
            if (char === "(" || char === "[" || char === "{" || char === "<") {
                if (i > 0 && content[i - 1] !== " ") {
                    result += " ";
                }
                result += char;
            } else {
                result += char;
                if (content[i + 1] !== " " ) {
                    result += " ";
                }
            }
        } 
        else {
            result += char;
        }
    }
    return result;
}

console.log(fixContent(printHighlight(jsContent, "javascript")));