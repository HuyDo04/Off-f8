const categories = [
    {
      id: 1,
      name: "Chuyên mục 1",
      parent: 0,
      slug: "chuyen-muc-1",
    },
    {
      id: 2,
      name: "Chuyên mục 2",
      parent: 0,
      slug: "chuyen-muc-2",
    },
    {
      id: 3,
      name: "Chuyên mục 3",
      parent: 0,
      slug: "chuyen-muc-3",
    },
    {
      id: 4,
      name: "Chuyên mục 2.1",
      parent: 2,
      slug: "chuyen-muc-2-1",
    },
    {
      id: 5,
      name: "Chuyên mục 2.2",
      parent: 2,
      slug: "chuyen-muc-2-2",
    },
    {
      id: 6,
      name: "Chuyên mục 2.3",
      parent: 2,
      slug: "chuyen-muc-2-3",
    },
    {
      id: 7,
      name: "Chuyên mục 3.1",
      parent: 3,
      slug: "chuyen-muc-3-1",
    },
    {
      id: 8,
      name: "Chuyên mục 3.2",
      parent: 3,
      slug: "chuyen-muc-3-2",
    },
    {
      id: 9,
      name: "Chuyên mục 3.3",
      parent: 3,
      slug: "chuyen-muc-3-3",
    },
    {
      id: 10,
      name: "Chuyên mục 2.2.1",
      parent: 5,
      slug: "chuyen-muc-2-2-1",
    },
    {
      id: 11,
      name: "Chuyên mục 2.2.2",
      parent: 5,
      slug: "chuyen-muc-2-2-2",
    },
  ];
  
  function buildMenu(menu, parent = 0) {
    const menuItems = menu.filter((item) => item.parent === parent);
    if (menuItems.length === 0) return '';

    let menuHTML = '<ul>';
    menuItems.forEach((item) => {
        menuHTML += `<li><a href="/${item.slug}">${item.name}</a>`;

        const subMenuHTML = buildMenu(menu, item.id);
        if (subMenuHTML) {
            menuHTML += subMenuHTML;
        }

        menuHTML += '</li>';
    });
    menuHTML += '</ul>';

    return menuHTML;
}

document.getElementById('menu').innerHTML = buildMenu(categories);
