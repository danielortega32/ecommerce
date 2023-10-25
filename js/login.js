const userInicio = [
    {
        nombreCompleto: 'Daniel Lee',
        email: 'admin@admin.com',
        id: 'c676845d-815b-4bac-bc33-15f32eb22e02',
        contrasena: 'admin',
        fechaDeNacimiento: '1986-11-12',
        provincia: 'Formosa',
        Observaciones: 'Nulo',
        role: "ROLE_ADMIN"
    },
    {
        nombreCompleto: 'Samantha Davis',
        email: 'samantha.davis@example.com',
        id: 'bb1b59de-12f2-4097-ae82-ec2156f24c18',
        contrasena: 'alfabeta',
        fechaDeNacimiento: '1998-12-24',
        provincia: 'Jujuy',
        Observaciones: 'Nulo',
        role: "ROLE_CLIENT"
    },
    {
        nombreCompleto: 'James Moore',
        email: 'james.moore@example.com',
        id: '2c85a19f-08ca-419d-95a0-c9c590c4e8b8',
        contrasena: 'alfabeta',
        fechaDeNacimiento: '1982-07-30',
        provincia: 'Buenos Aires',
        Observaciones: 'Nulo',
        role: "ROLE_CLIENT"
    },
    {
        nombreCompleto: 'Isabella Taylor',
        email: 'isabella.taylor@example.com',
        id: '8717041f-25fc-444b-8459-2f51e7fcf955',
        contrasena: 'alfabeta',
        fechaDeNacimiento: '1992-05-22',
        provincia: 'Cordoba',
        Observaciones: 'Nulo',
        role: "ROLE_CLIENT"
    },
]


if(localStorage.getItem("users") === null) {

    localStorage.setItem("users", JSON.stringify(userInicio))

}

const users = JSON.parse(localStorage.getItem("users"))

const loginForm = document.getElementById("login")

loginForm.addEventListener("submit", (event) => {

    event.preventDefault()
    
    const emailInput = event.target.elements.email.value;
    const passwordInput = event.target.elements.contrasena.value;

    const userExist = users.find(usr => {
        if(usr.email === emailInput) {
            return true
        }
        return false;
    })

    if(!userExist || userExist.contrasena !== passwordInput) {
        Swal.fire("Login incorrecto", "Los datos ingresados son incorrectos", "error");
        return;
    }
    

    Swal.fire("Login Correcto", "En breve será redireccionado", "success")

    delete userExist.contrasena

    localStorage.setItem( "currentUser", JSON.stringify(userExist)   )

    setTimeout(function() {
        window.location.href = '/index.html'
    }, 2000)
})



const icon = document.querySelector('.iconPassword')
const password = document.getElementById('contrasena')

icon.addEventListener("click", (e) => {
    if(password.type === "password") {
        password.type = "text";
        icon.classList.remove('fa-lock')
        icon.classList.add('fa-unlock')
    } else {
        password.type = "password"
        icon.classList.add('fa-lock')
        icon.classList.remove('fa-unlock')
    }
})