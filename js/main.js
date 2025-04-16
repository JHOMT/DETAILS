const products = [
    {
        id: 1,
        name: 'Ramo de Rosas Rojas',
        description: 'Un hermoso ramo de 25 rosas rojas perfectamente organizadas en una elegante caja redonda con un lazo rojo. Ideal para sorprender en ocasiones especiales.',
        price: 120,
        image: 'ramo_rosas.jpg',
        category: 'Regalos',
        features: ['25 rosas rojas', 'Caja redonda elegante', 'Lazo rojo', 'Regalo perfecto para ocasiones especiales']
    },
    {
        id: 2,
        name: 'Arreglo de Rosas Rojas con Mariposas y Corona',
        description: 'Arreglo de rosas rojas con mariposas doradas, corona y un mensaje especial. Un regalo único y elegante para sorprender a esa persona especial.',
        price: 150,
        image: 'rosas_mariposas_corona.jpg',
        category: 'Regalos',
        features: ['25 rosas rojas', 'Mariposas doradas', 'Corona dorada', 'Caja elegante con mensaje']
    },
    {
        id: 3,
        name: 'Arreglo de Rosas Rojas con Mensaje Personalizado',
        description: 'Un hermoso arreglo de 25 rosas rojas, adornado con mariposas doradas y un mensaje especial. Perfecto para el Día de San Valentín o un aniversario.',
        price: 145,
        image: 'rosas_mensaje_mariposas.jpg',
        category: 'Regalos',
        features: ['25 rosas rojas', 'Mariposas doradas', 'Mensaje personalizado', 'Caja negra elegante']
    },
    {
        id: 4,
        name: 'Arreglo de Rosas Rojas en Caja Corazón Blanca',
        description: 'Un arreglo de rosas rojas perfectamente organizadas en una caja con forma de corazón blanca, con cristales en cada rosa. Ideal para expresar tu amor.',
        price: 120,
        image: 'rosas_corazon_blanco.jpg',
        category: 'Regalos',
        features: ['Rosas rojas', 'Caja en forma de corazón blanca', 'Cristales en cada rosa', 'Regalo ideal para San Valentín']
    },
    {
        id: 5,
        name: 'Arreglo de Rosas Rojas en Caja Corazón Azul',
        description: 'Un hermoso arreglo de rosas rojas en una caja con forma de corazón azul, adornado con un lazo blanco. Un regalo lleno de amor y elegancia.',
        price: 125,
        image: 'rosas_corazon_azul.jpg',
        category: 'Regalos',
        features: ['Rosas rojas', 'Caja en forma de corazón azul', 'Lazo blanco', 'Regalo romántico y elegante']
    },
    {
        id: 6,
        name: 'Arreglo de Rosas Rojas con Mariposas y Corona',
        description: 'Arreglo de rosas rojas con mariposas doradas, corona y un mensaje especial. Un regalo único y elegante para sorprender a esa persona especial.',
        price: 150,
        image: 'rosas_mariposas_corona.jpg',
        category: 'Regalos',
        features: ['25 rosas rojas', 'Mariposas doradas', 'Corona dorada', 'Caja elegante con mensaje']
    },
    {
        id: 7,
        name: 'Arreglo de Rosas Rojas con Mensaje Personalizado',
        description: 'Un hermoso arreglo de 25 rosas rojas, adornado con mariposas doradas y un mensaje especial. Perfecto para el Día de San Valentín o un aniversario.',
        price: 145,
        image: 'rosas_mensaje_mariposas.jpg',
        category: 'Regalos',
        features: ['25 rosas rojas', 'Mariposas doradas', 'Mensaje personalizado', 'Caja negra elegante']
    },
    {
        id: 8,
        name: 'Arreglo de Rosas Rojas en Caja Corazón Blanca',
        description: 'Un arreglo de rosas rojas perfectamente organizadas en una caja con forma de corazón blanca, con cristales en cada rosa. Ideal para expresar tu amor.',
        price: 120,
        image: 'rosas_corazon_blanco.jpg',
        category: 'Regalos',
        features: ['Rosas rojas', 'Caja en forma de corazón blanca', 'Cristales en cada rosa', 'Regalo ideal para San Valentín']
    },
    {
        id: 9,
        name: 'Arreglo de Rosas Rojas en Caja Corazón Azul',
        description: 'Un hermoso arreglo de rosas rojas en una caja con forma de corazón azul, adornado con un lazo blanco. Un regalo lleno de amor y elegancia.',
        price: 125,
        image: 'rosas_corazon_azul.jpg',
        category: 'Regalos',
        features: ['Rosas rojas', 'Caja en forma de corazón azul', 'Lazo blanco', 'Regalo romántico y elegante']
    },
    {
        id: 10,
        name: 'Arreglo de Rosas Rosas en Caja Corazón Rosa',
        description: 'Un arreglo encantador de 12 rosas rosas organizadas perfectamente en una caja con forma de corazón. Un regalo perfecto para expresar tu cariño.',
        price: 130,
        image: 'rosas_corazon_rosa.jpg',
        category: 'Regalos',
        features: ['12 rosas rosas', 'Caja en forma de corazón rosa', 'Cristales en cada rosa', 'Ideal para San Valentín o aniversarios']
    },
    {
        id: 11,
        name: 'Arreglo de Rosas Rosas con Bombones',
        description: 'Arreglo de rosas rosas acompañadas de deliciosos bombones Lindt y un corazón decorativo. Un detalle perfecto para sorprender a tu ser querido.',
        price: 135,
        image: 'rosas_con_bombones.jpg',
        category: 'Regalos',
        features: ['Rosas rosas', 'Bombones Lindt', 'Corazón decorativo', 'Caja blanca con lazo rosa']
    },
    {
        id: 12,
        name: 'Taza con Peluche y Globo para Mujer',
        description: 'Taza con un mensaje especial, peluche tierno, y un globo con mensaje "Feliz Día de la Mujer". Un regalo encantador para la persona más especial de tu vida.',
        price: 80,
        image: 'taza_con_peluche.jpg',
        category: 'Regalos',
        features: ['Taza con mensaje', 'Peluche de animal', 'Globo decorativo', 'Lazo decorativo']
    },
    {
        id: 13,
        name: 'Rosas Amarillas y Ferrero Rocher',
        description: 'Un arreglo de rosas amarillas con Ferrero Rocher, ideal para expresar cariño y agradecimiento. Perfecto para regalar en cualquier ocasión especial.',
        price: 90,
        image: 'rosas_amarillas_ferrero.jpg',
        category: 'Regalos',
        features: ['Rosas amarillas', 'Ferrero Rocher', 'Caja de regalo', 'Decoración con flores secas']
    },
    {
        id: 14,
        name: 'Ramo de Girasoles con Lazo',
        description: 'Un ramo de girasoles, con un lazo amarillo y un mensaje especial. Perfecto para celebrar el cumpleaños de un ser querido.',
        price: 75,
        image: 'ramo_girasoles.jpg',
        category: 'Regalos',
        features: ['Girasoles frescos', 'Lazo amarillo', 'Tarjeta de cumpleaños', 'Ideal para cumpleaños o aniversarios']
    },
    {
        id: 15,
        name: 'Ramo de Girasoles con Lazo Blanco',
        description: 'Un ramo de girasoles con un lazo blanco, ideal para cualquier ocasión especial. Este ramo es perfecto para alegrar el día de esa persona especial.',
        price: 80,
        image: 'ramo_girasoles_blanco.jpg',
        category: 'Regalos',
        features: ['Girasoles frescos', 'Lazo blanco', 'Tarjeta de mensaje especial', 'Regalo ideal para cualquier ocasión']
    },
    {
        id: 16,
        name: 'Ramo de Girasol con Mariposa Dorada',
        description: 'Un ramo elegante de girasol de tela con una mariposa dorada. Ideal para sorprender a alguien especial con un toque único de color y estilo.',
        price: 50,
        image: 'girasol_mariposa_dorada.jpg',
        category: 'Regalos',
        features: ['Girasol de tela', 'Mariposa dorada', 'Lazo dorado', 'Caja decorativa']
    },
    {
        id: 17,
        name: 'Ramo de Girasoles con Lazo Amarillo',
        description: 'Un ramo vibrante de girasoles amarillos, con un lazo amarillo y detalles en negro. Perfecto para alegrar cualquier ocasión especial.',
        price: 60,
        image: 'girasoles_lazo_amarillo.jpg',
        category: 'Regalos',
        features: ['Girasoles amarillos', 'Lazo amarillo', 'Ideal para cumpleaños', 'Ramo de flores frescas']
    },
    {
        id: 18,
        name: 'Caja Regalo con Peluche y Taza',
        description: 'Caja regalo con un tierno peluche, una taza personalizada y chocolates. Perfecto para regalar en cualquier ocasión especial como cumpleaños o San Valentín.',
        price: 45,
        image: 'taza_con_peluche_love.jpg',
        category: 'Regalos',
        features: ['Peluche', 'Taza personalizada', 'Chocolates', 'Globo de felicitación']
    },
    {
        id: 19,
        name: 'Rosas Rojas con Luces LED',
        description: 'Un hermoso ramo de rosas rojas artificiales, adornadas con luces LED, acompañado de una cinta decorativa. Ideal para regalar a esa persona especial.',
        price: 70,
        image: 'rosas_led.jpg',
        category: 'Regalos',
        features: ['Rosas rojas', 'Luces LED', 'Cinta decorativa', 'Perfecto para San Valentín']
    },
    {
        id: 20,
        name: 'Arreglo de Girasol con Corona y Mariposa',
        description: 'Este elegante arreglo de girasol y rosas, con una corona dorada y una mariposa, es el detalle perfecto para cualquier ocasión especial.',
        price: 80,
        image: 'girasol_corona_mariposa.jpg',
        category: 'Regalos',
        features: ['Girasoles y rosas', 'Corona dorada', 'Mariposa decorativa', 'Ideal para aniversarios']
    },
    {
        id: 21,
        name: 'Ramo de Rosas Blancas y Doradas',
        description: 'Un ramo delicado de rosas blancas y doradas con detalles de cinta, ideal para sorprender en el Día de San Valentín o en cualquier ocasión especial.',
        price: 65,
        image: 'rosas_blancas_doradas.jpg',
        category: 'Regalos',
        features: ['Rosas blancas y doradas', 'Cinta decorativa', 'Perfecto para San Valentín', 'Detalles elegantes']
    },
    {
        id: 22,
        name: 'Ramo de Girasoles Personalizado',
        description: 'Ramo de girasoles con una tarjeta personalizada, ideal para sorprender a alguien con un toque muy especial. Viene con un lazo de tela y una etiqueta personalizada.',
        price: 75,
        image: 'girasoles_personalizados.jpg',
        category: 'Regalos',
        features: ['Girasoles frescos', 'Tarjeta personalizada', 'Lazo de tela', 'Ideal para cualquier ocasión']
    },
    {
        id: 23,
        name: 'Ramo de Rosas Rojas con Lazo Rojo',
        description: 'Ramo de rosas rojas con un hermoso lazo rojo, acompañado de una tarjeta de mensaje especial. El regalo perfecto para cualquier ocasión especial.',
        price: 40,
        image: 'rosas_rojas_lazo_rojo.jpg',
        category: 'Regalos',
        features: ['Rosas rojas', 'Lazo rojo', 'Tarjeta personalizada', 'Perfecto para San Valentín']
    },
    {
        id: 24,
        name: 'Rosas en Caja con Corazón',
        description: 'Caja en forma de corazón con hermosas rosas artificiales. Un detalle especial que expresa amor y cariño, ideal para San Valentín o aniversarios.',
        price: 85,
        image: 'rosas_en_caja_corazon.jpg',
        category: 'Regalos',
        features: ['Rosas en caja con corazón', 'Cristales en las rosas', 'Regalo perfecto para ocasiones especiales', 'Ideal para San Valentín']
    },
    {
        id: 25,
        name: 'Ramo de Rosas de Tela en Color Rosa',
        description: 'Un ramo de rosas de tela en color rosa con hojas verdes y un lazo blanco. Un detalle único y elegante para cualquier ocasión especial.',
        price: 50,
        image: 'rosas_tela_rosa.jpg',
        category: 'Regalos',
        features: ['Rosas de tela', 'Lazo blanco', 'Ramo decorativo', 'Ideal para aniversarios o regalos de amistad']
    }
];

let currentCategory = 'Todos';

function displayProducts(products) {
    const productList = document.getElementById('productList');
    let productCards = '';

    products.forEach(product => {
    const productCard = `
                    <div class="col-md-3 category-item" data-bs-toggle="modal" data-bs-target="#detailsModal" onclick="showDetails('${encodeURIComponent(product.name)}', '${encodeURIComponent(product.description)}', ${product.price}, '${product.image}', '${encodeURIComponent(JSON.stringify(product.features))}')">
                        <img src="./img/${product.image}" class="category-img" alt="${product.name}">
                        <h4>${product.name}</h4>
                    </div>
                `;
        productCards += productCard;
    });

    productList.innerHTML = productCards;
}

function filterCategory(category) {
    currentCategory = category;
    const filteredProducts = category === 'Todos' ? products : products.filter(product => product.category === category);
    displayProducts(filteredProducts);
}

function searchProducts() {
    const searchQuery = document.getElementById('searchInput').value.toLowerCase();
    const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery) &&
    (currentCategory === 'Todos' || product.category === currentCategory)
    );
    displayProducts(filteredProducts);
}

function showDetails(name, description, price, image, features) {
    name = decodeURIComponent(name);
    description = decodeURIComponent(description);
    features = JSON.parse(decodeURIComponent(features));

    document.getElementById('detailsModalLabel').textContent = name;
    document.getElementById('modalDescription').textContent = description;
    document.getElementById('modalPrice').textContent = `S/. ${price}`;
    document.getElementById('modalImage').src = "./img/" + image;

    const featuresList = document.getElementById('modalFeatures');
    let featuresHTML = '';

    features.forEach(feature => {
        featuresHTML += `<li>${feature}</li>`;
    });

    featuresList.innerHTML = featuresHTML;

    const imagenURL = `${window.location.origin}/img/${image}`;
    const numeroWhatsapp = "51939094592";
    const mensajeWhatsapp = `Hola JHOLUANI, estoy interesado/a en cotizar el producto: *${name}* con precio: *S/. ${price}*.\n\nPuedes ver la imagen aquí: ${imagenURL}\n\nPor favor, ¿podrías brindarme más información?`;
    const enlaceWhatsapp = `https://wa.me/${numeroWhatsapp}?text=${encodeURIComponent(mensajeWhatsapp)}`;

    const cotizacionButton = document.getElementById('btnModalCotizar');
    const btnCotizar = `
        <a href="${enlaceWhatsapp}" target="_blank" rel="noopener noreferrer" class="btn-cotiza-ancle">
            <button class="btn-cotiza"><i class='bx bxl-whatsapp'></i>Cotiza Ahora</button>
        </a>
    `;
    cotizacionButton.innerHTML = btnCotizar;
}

displayProducts(products);

