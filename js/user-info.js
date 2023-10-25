const currentUser = JSON.parse(localStorage.getItem("currentUser"))
//Obtenemos elementos HTML
const headerUserInfo = document.getElementById("user-header-name")
const headerUserAction = document.getElementById("user-action")
const navbarLink = document.querySelector("ul.navbar-nav#nav-list")


headerUserInfo.innerText = currentUser ? currentUser.fullname : ""


if(currentUser) {
    headerUserAction.innerHTML = `<button class="btn btn-danger" onclick="logout()">Logout</button>`
    //Checkear si el user logueado es ADMIN
    if(currentUser.role === 'ROLE_ADMIN') {
        //Deberíamos pintar dichos botones

        const adminProductLink = document.createElement('li')
        adminProductLink.classList.add('nav-item')
        adminProductLink.id = 'nav-admin-product'
        // Si necesito agregarle la clase  active al botón
        const url = window.location.pathname;
        if(url.includes('/pages/admin-product/admin-product.html')) {

            adminProductLink.classList.add('active')
        }

        


        const link = document.createElement('a')
        link.classList.add('nav-link', 'bg-dark')
        link.href = '/pages/admin-product/admin-product.html';
        link.innerText = 'Product Admin'


        adminProductLink.appendChild(link)

        navbarLink.appendChild(adminProductLink)

    }


} else {
    headerUserAction.innerHTML = ` <button class="btn-nav-login btn btn-primary" data-toggle="modal" data-target="#loginModal">Login</button>`
}
