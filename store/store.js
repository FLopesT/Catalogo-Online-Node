
module.exports.functions = {

    findCP: (c) => {  //retorna os produtos de uma categoria especifica
        let products;
        content.forEach(item => {
            if (item.categoria == c) {
                products = item.produtos;
            }
        });
        return products;
    },

    allCategorys: () => {  //retorna string com todas as categorias para criar rotas de categorias
        let categorys = [];
        content.forEach(item => {
            categorys.push(item.categoria);
        })
        return categorys;
    },

    allProducts: (obj) => {
        let products = [];
        content.forEach(item => {
            item.produtos.forEach(prod => {
                if (obj) {
                    products.push(prod);
                } else {
                    products.push(prod.name);
                }
            });
        });
        if (obj) {
            randomProducts(products);
            console.log(products);
        }
        return products;
    },

    getProduct(i) {
        let product;
        content.forEach(item => {
            item.produtos.forEach(prod => {
                if (i == prod.name) {
                    product = prod;
                };
            });
        });
        return product;
    }
};

let content = [

    {
        categoria: "eletrodomesticos",
        produtos: [
            {
                name: "ventilador",
                imgSrc: "/assets/images/ventilador.png",
                imgSrcPage: "/assets/images/marcio-chagas-zCLJFos5GWs-unsplash.jpg",
                title: "Ventilador Arno",
                about: "Ventilador Arno, 110/210w, Preto, 3 velocidades",
                aboutPage: "Para resolver de modo rápido os problemas relacionados ao calor, o ventilador é o mais indicado. Preto, 3 velocidades, 110/210w.",
                price: "R$ 70,00",
                inlineStyle: "height:280px"
            },

            {
                name: "smartphone",
                imgSrc: "/assets/images/smartphone.png",
                imgSrcPage: "/assets/images/shiwa-id-F_cfF1uX7qY-unsplash.jpg",
                title: "Smartphone Android",
                about: "Smartphone Android, Dualship, Preto, Octacore, 4gb ram",
                aboutPage: "Aparelho de bom custo benefício, conta com câmera frontal e traseira de alta qualidade. Dualship, Preto, Octacore, 4gb ram",
                price: "R$ 1.000,00",
                inlineStyle: "height:280px"
            },
        ]
    },

    {
        categoria: "banheiro",
        produtos: [
            {
                name: "piadupla",
                imgSrc: "/assets/images/pia.png",
                imgSrcPage: "/assets/images/sanibell-bv-Q11zBHHFBe0-unsplash.jpg",
                title: "Pia dupla",
                about: "Pia dupla, marmore, bancada e gavetas de madeira resistênte ",
                aboutPage: "Iten de luxo para deixar seu banheiro lindo como ele merece. Pia dupla, marmore, bancada e gavetas de madeira resistênte",
                price: "R$ 1.300,00",
                inlineStyle: "padding-top: 27.95px; padding-bottom: 27.95px; width: 280px;"
            },

            {
                name: "portatoalhas",
                imgSrc: "/assets/images/portatoalhas.png",
                imgSrcPage: "/assets/images/lukas-schroeder-sB2K_If9qI0-unsplash.jpg",
                title: "Porta toalhas",
                about: "Porta toalhas, inox com aspecto escovado",
                aboutPage: "Produto com visual simples e bonito. Porta toalhas, inox com aspecto escovado.",
                price: "R$ 120,00",
                inlineStyle: "height:280px"
            },
        ],
    },

    {
        categoria: "sala",
        produtos: [
            {
                name: "sofa",
                imgSrc: "/assets/images/sofa.png",
                imgSrcPage: "/assets/images/paul-weaver-nWidMEQsnAQ-unsplash.jpg",
                title: "Sofá",
                about: "Sofá de couro, 3 lugares, caramelo + almofadas",
                aboutPage: "Móvel bonito e confortável, produzido com materiais de qualidade além de sofisticado. Sofá de couro, 3 lugares, caramelo + almofadas",
                price: "R$ 1.400,00",
                inlineStyle: "padding-bottom: 63.25px; padding-top: 63.25px; width: 280px;"
            },

            {
                name: "poltrona",
                imgSrc: "/assets/images/poltrona.png",
                imgSrcPage: "/assets/images/poltronafull.jpg",
                title: "Poltrona",
                about: "Poltrona estofada, amarela, tecido suede",
                aboutPage: "Móvel belo e harmonioso, trazendo uma cara nova a sua casa. Poltrona estofada, tecido suede amarelo.",
                price: "R$ 490,00",
                inlineStyle: "padding-top: 20px; width:280px"
            },
        ],
    },

    {
        categoria: "jantar",
        produtos: [
            {
                name: "mesa",
                imgSrc: "/assets/images/mesa.png",
                imgSrcPage: "/assets/images/farhad-fallahzad-VtQMBG_Ljc0-unsplash.jpg",
                title: "Mesa e cadeiras",
                about: "Conjunto mesa pequena e 2 cadeiras",
                aboutPage: "Simples e agradável aos olhos de quem vê, uma boa escolha para casais. Conjunto mesa pequena e 2 cadeiras.",
                price: "R$ 430,00",
                inlineStyle: "padding-top: 85px; width:280px;"
            },

            {
                name: "talheres",
                imgSrc: "/assets/images/talheres.png",
                imgSrcPage: "/assets/images/erik-mclean-8qYgemjI-UY-unsplash.png",
                title: "Kit de talheres",
                about: "kit de talheres, 6 facas, 6 colheres, 6 garfos",
                aboutPage: "kit de talheres, 6 facas, 6 colheres, 6 garfos.",
                price: "R$ 56,00",
                inlineStyle: "height:280px"
            },
        ],
    },

    {
        categoria: "escritorio",
        produtos: [
            {
                name: "grampeador",
                imgSrc: "/assets/images/grampeador.png",
                imgSrcPage: "/assets/images/brett-jordan-xG5caIE3tLU-unsplash.jpg",
                title: "Grampeador Optima",
                about: "Grampeador, grampos 26/6 24/6 24/8",
                aboutPage: "Uma ferramente de trabalho indispensável pra sua firma. Grampeador, grampos 26/6 24/6 24/8.",
                price: "R$ 60,00",
                inlineStyle: "padding-top: 72.92px; width: 280px;"
            },

            {
                name: "mesaescritorio",
                imgSrc: "/assets/images/mesaescritorio.png",
                imgSrcPage: "/assets/images/mesafull.jpg",
                title: "Mesa de escritório",
                about: "Mesa de escritório + cadeira de couro caramelo.",
                aboutPage: "Deixe essa linda mesa e cadeira alegrarem seu dia de trabalho. Mesa de escritório + cadeira de couro caramelo.",
                price: "R$ 1.400,00",
                inlineStyle: "height:280px"
            },
        ],
    },

    {
        categoria: "quarto",
        produtos: [
            {
                name: "cama",
                imgSrc: "/assets/images/cama.png",
                imgSrcPage: "/assets/images/the-lore-com-E-_sm5aaQOc-unsplash.jpg",
                title: "Cama de casal",
                about: "cama de casal, cabeçeira estofada, base de madeira reforçada",
                aboutPage: "Designe padrão e moderno. Cabeçeira estofada, base de madeira reforçada.",
                price: "R$ 2.000,00",
                inlineStyle: "padding-top: 50.9px; padding-bottom: 50.9px; width: 270px;"
            },

            {
                name: "criadomudo",
                imgSrc: "/assets/images/criado.png",
                imgSrcPage: "/assets/images/sam-moqadam-L_7MQsHl_aU-unsplash.jpg",
                title: "Criado mudo",
                about: "Móvel simples e compacto, madeira resistênte",
                aboutPage: "Móvel simples, mas o suficiente para acomodar um despertador. Compacto, madeira resistênte",
                price: "R$ 75,00",
                inlineStyle: "height:280px"
            },
        ],
    }

];

function randomProducts(p) {
    let i = p.length, iRandom;
    while (i != 0) {
        iRandom = Math.floor(Math.random() * i);
        i--;
        [p[i], p[iRandom]] = [p[iRandom], p[i]];
    }
}