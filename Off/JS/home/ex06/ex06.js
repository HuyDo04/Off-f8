const categories = [
    {
      id: 1,
      name: "Electronics",
      slug: "electronics",
      children: [
        {
          id: 2,
          name: "Laptops",
          slug: "laptops",
          children: [
            { id: 3, name: "Apple", slug: "apple" },
            { id: 4, name: "Dell", slug: "dell" },
          ],
        },
        { id: 5, name: "Headphones", slug: "headphones" },
      ],
    },
    {
      id: 6,
      name: "Books",
      slug: "books",
      children: [
        {
          id: 7,
          name: "Fiction",
          slug: "fiction",
          children: [
            { id: 8, name: "Thrillers", slug: "thrillers" },
            { id: 9, name: "Mystery", slug: "mystery" },
          ],
        },
        { id: 10, name: "Non-Fiction", slug: "non-fiction" },
      ],
    },
  ];

  function buildMenu(menu) {
    let menuHTML = "<ul>";
    menu.forEach((item) => {
      menuHTML += `<li><a href="/${item.slug}">${item.name}</a>`;
      if (item.children && item.children.length > 0) {
        menuHTML += buildMenu(item.children);
      }
      menuHTML += "</li>";
    });
    menuHTML += "</ul>";
    return menuHTML;
  }

  document.getElementById("menu").innerHTML = buildMenu(categories);