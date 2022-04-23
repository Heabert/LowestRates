

const mobileMenu = document.querySelector('.mobile-button');
const mobileNav = document.querySelector('.mobile-nav');
const closeMenuBtn = document.querySelector('.close-menu');
const loginBtn = document.querySelector('.login-btn');
const menuList = document.querySelector('.menu-list');

function removeChildNodes() {
    const appendItems = document.querySelectorAll('li.appended');
    console.log(appendItems);
    for (const el of appendItems) {  
        el.remove();  
      }
}

function mobileMenuHandler() {
    if (mobileNav.classList.contains('show')) {
        mobileNav.style.display = 'none';
        mobileNav.classList.remove('show');
    } else {
        mobileNav.style.display = 'block';
        mobileNav.classList.add('show');
    }
    removeChildNodes();
}


function createListItem(value) {
    let li = document.createElement('li');
    li.textContent = value;
    li.classList.add('appended')
    return li;
}

function loginHandler() {
    window.scrollTo(0,document.body.scrollHeight);
    mobileMenuHandler();
    menuList.prepend(createListItem('Debt'));
    menuList.prepend(createListItem('Loans'));
    menuList.prepend(createListItem('Finance'));
}
