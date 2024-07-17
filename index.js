const menu = [
  {
    id: 1,
    title: 'pancakes au miel',
    category: 'breakfast',
    price: 15.99,
    img: './images/item-1.jpeg',
    desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim, qui magni soluta similique voluptas voluptates! `,
  },
  {
    id: 2,
    title: 'double steack',
    category: 'lunch',
    price: 13.99,
    img: './images/item-2.jpeg',
    desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim, qui magni soluta similique voluptas voluptates! `,
  },
  {
    id: 3,
    title: ' milkshake godzilla',
    category: 'shakes',
    price: 6.99,
    img: './images/item-3.jpeg',
    desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim, qui magni soluta similique voluptas voluptates!`,
  },
  {
    id: 4,
    title: 'toast aux oeufs',
    category: 'breakfast',
    price: 20.99,
    img: './images/item-4.jpeg',
    desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim, qui magni soluta similique voluptas voluptates! `,
  },
  {
    id: 5,
    title: 'Burger aux oeufs',
    category: 'lunch',
    price: 22.99,
    img: './images/item-5.jpeg',
    desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim, qui magni soluta similique voluptas voluptates!`,
  },
  {
    id: 6,
    title: 'oreo dream',
    category: 'shakes',
    price: 18.99,
    img: './images/item-6.jpeg',
    desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim, qui magni soluta similique voluptas voluptates!`,
  },
  {
    id: 7,
    title: 'supplément bacon ',
    category: 'breakfast',
    price: 8.99,
    img: './images/item-7.jpeg',
    desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim, qui magni soluta similique voluptas voluptates! `,
  },
  {
    id: 8,
    title: 'le classique',
    category: 'lunch',
    price: 12.99,
    img: './images/item-8.jpeg',
    desc: `oLorem ipsum dolor sit, amet consectetur adipisicing elit. Enim, qui magni soluta similique voluptas voluptates! `,
  },
  {
    id: 9,
    title: 'milshakes pour deux',
    category: 'shakes',
    price: 16.99,
    img: './images/item-9.jpeg',
    desc: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim, qui magni soluta similique voluptas voluptates!`,
  },
];

const sectionParent = document.querySelector('.section-center');
const filterBtn = document.querySelectorAll('.filter-btn');

window.addEventListener('DOMContentLoaded', function () {
  displayMenuItems(menu);
});

filterBtn.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    const category = e.currentTarget.dataset.id;
    const menuCategory = menu.filter(function (menuItem) {
      // console.log(menuItem);
      if (menuItem.category === category) {
        return menuItem;
      }
    });
    if (category === 'all') {
      displayMenuItems(menu);
    } else {
      displayMenuItems(menuCategory);
    }
  });
});

function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map(function (item) {
    return `
   <article class="menu-item">
     <img src=${item.img} alt="menu item" class="photo" />
     <div class="item-info">
       <header>
         <h4>${item.title}</h4>
         <h4 class="price">${item.price}€</h4>
       </header>
       <p class="item-text">
         ${item.desc}
       </p>
     </div>
   </article>
   `;
  });
  displayMenu = displayMenu.join('');
  sectionParent.innerHTML = displayMenu;
}
