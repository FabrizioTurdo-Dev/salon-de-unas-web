const base = import.meta.env.BASE_URL;

const services = [
    {
        id: 1,
        name: "Uñas esculpidas",
        descripcion: "Gel, Acrílico y Poligel. Largos y formas personalizadas.",
        precio: 10000,
        imagen: `${base}Esculpidas.jpg`
    },
    {
        id: 2,
        name: "Semipermanentes",
        descripcion: "Coloración duradera por semanas, ideal para manos y pies.",
        precio: 13000,
        imagen: `${base}Semipermanente.jpg`
    },
    {
        id: 3,
        name: "Kapping",
        descripcion: "Refuerzo en uñas naturales con base Rubber o Acrílico.",
        precio: 12500,
        imagen: `${base}Kapping.jpg`

    },
    {
        id: 4,
        name: "Diseños de Autor",
        descripcion: "Nail Art, encapsulados, foil y diseños a mano alzada.",
        precio: 15000
    }
];

export default services;