let productosData = [
    {
        id: 'e6dc9307-02b2-4e0d-b491-9ae351219ff6',
        descripcion: 'Edición Limitada',
        titulo: 'Camiseta Italiana',
        fechaDeCreacion: '2023-01-01',
        precio: 23.000,
        imagen: 'https://acdn.mitiendanube.com/stores/268/104/products/tri93-011-96b769a5545f6244ec16899536233107-480-0.webp',
        categoria: 'Camiseta'
    },
    {
        id: '76c72fd2-701d-41e7-872c-2553688a5a2a',
        descripcion: ' Camiseta Edición Estadio',
        titulo: 'José Amalfitani',
        fechaDeCreacion: '2023-01-01',
        precio: 23.000,
        imagen: 'https://acdn.mitiendanube.com/stores/268/104/products/camiseta-amalfitani-011-a6547748cf73c39e3616841584429134-320-0.webp',
        categoria: 'Camiseta'
    },
    {
        id: '05b9578e-93d6-4d7e-8b54-f393596d0f48',
        descripcion: 'Edicion Limitada Velezana',
        titulo: ' Remera Prematch',
        fechaDeCreacion: '2023-01-01',
        precio: 23.000,
        imagen: 'https://acdn.mitiendanube.com/stores/268/104/products/pm23-011-686c6ea196b9174bb216776856598413-480-0.webp',
        categoria: 'Remera'
    },
    {
        id: 'e082517a-5010-4646-8f5c-2e1c518970f2',
        descripcion: 'Edicion Limitada Velezana',
        titulo: 'Chomba Velezana',
        fechaDeCreacion: '2019-12-05',
        precio: 17.299,
        imagen: 'https://acdn.mitiendanube.com/stores/268/104/products/chomba-de-salida-02-011-92ec57842b9ef491fc16736384602322-480-0.webp',
        categoria: 'Chomba'
    }
]

if (JSON.parse(localStorage.getItem("productos")) === null) {

    localStorage.setItem("productos", JSON.stringify(productosData))
}