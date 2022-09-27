 const sideMenu = document.querySelector('aside')
 const menuBtn = document.querySelector('#menu-btn')
 const closeBtn = document.querySelector('#close-btn')
 const themeToggler = document.querySelector('.theme-toggler')

// Open Side Bar 
 menuBtn.addEventListener('click', () => {
   sideMenu.style.display = 'block'
 }
 )
// Close Side Bar
 closeBtn.addEventListener('click', () => {
   sideMenu.style.display = 'none'
 }
 )
// Change Theme 
themeToggler.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme-variables')
  themeToggler.querySelector('span:nth-child(1)').classList.toggle('active')
  themeToggler.querySelector('span:nth-child(2)').classList.toggle('active')
}
)

// Fill orders in table
Orders.forEach(order => {
    const tr = document.createElement('tr')
    const trContent = ` <td>${order.customer}</td>
                        <td>${order.orderNumber}</td>
                        <td>${order.payment}</td><td class="${order.shipping === 'Declined' ? 'danger' : order.shipping === 'Pending' ? 'warning' : 'primary'}">${order.shipping}</td><td class="primary">Details</td> `
    tr.innerHTML = trContent 
    document.querySelector('table tbody').appendChild(tr)
});