const productoscard = JSON.parse(localStorage.getItem("productos"))

const containerCard = document.getElementById('card-container')

pintarCards(productoscard)

function pintarCards(productos) {
    containerCard.innerHTML = ""

    productos.forEach(p => {
        containerCard.innerHTML += `
           <div class="col-md-6 col-lg-3">
           <div class="card grow">
                <div class="card-header">
                  
                        <img src="${p.imagen}" alt="${p.titulo} class="card-img-top" ">
                  
                    <div class="card-img-date">${p.fechaDeCreacion}</div>
                </div>
                <div class="card-body">
                    <h5 class="card-title">${p.titulo}</h5>
                    <p class="card-text">${p.descripcion}</p>
                    <div class="card-price">$${p.precio}</div>
                    <a href="#" class="btn"> Ver mas..</a>
                    <a href="#" class="btn"> Comprar</a>
                </div>
                </div>
                </div> 
                `
    });
}


