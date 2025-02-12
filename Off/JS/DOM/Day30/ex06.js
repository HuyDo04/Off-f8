
const menu = [
    {
      id: 1,
      name: 'Home',
      parentId: 0
    },
    {
      id: 2,
      name: 'About',
      parentId: 0
    },
    {
      id: 3,
      name: 'News',
      parentId: 0
    },
    {
      id: 4,
      name: 'Products',
      parentId: 0
    },
    {
      id: 5,
      name: 'Contact',
      parentId: 0
    },
    {
      id: 6,
      name: 'T-Shirt',
      parentId: 4
    },
    {
      id: 7,
      name: 'Jean',
      parentId: 4
    },
    {
      id: 8,
      name: 'Skirt',
      parentId: 4
    }
];

const convertNested = (arr) => {
	const temp = {};
  
	for (let i = 0; i < arr.length; i++) {
		const item = arr[i]; 
		const newCategory = {};
		for (const key in item) {
			//chỉ gán những key không phải là parent
			if (key !== 'parent') { 
				newCategory[key] = item[key]; 
			}
			temp[item.id] = newCategory;
		}
	}

	const result = [];
	for(const item of arr) {
		if ( item.parentId === 0) {
			// lấy temp từ phần tử thứ id (từ 1)
			result.push(temp[item.id]);
		} else {
			const parent = temp[item.parentId];
			if(!parent.children) {
				parent.children = []; 
			}
			parent.children.push(temp[item.id]);
		}
	}
	return result;
};

const createMenu = (menu) => {
  let html = '<ul id="main-menu">';

  menu.forEach(item => {
    html += `<li><a href="#" style="font-size: 24px;">${item.name}</a>`;

    if (item.children && item.children.length > 0) {
      html += '<ul>';
      item.children.forEach(child => {
        html += `<li><a href="#" style="font-size: 20px;">${child.name}</a></li>`;
      });

      html += '</ul>';
    }

    html += '</li>';
  });

  html += '</ul>';

  return html;
};

// Sử dụng các hàm để tạo và hiển thị menu
const nestedMenu = convertNested(menu);
const menuHTML = createMenu(nestedMenu);

document.body.innerHTML = menuHTML;

console.log(convertNested(menu));
console.log(menuHTML)
