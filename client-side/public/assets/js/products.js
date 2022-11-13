let product_names = [
    "Pellentesque et pharetra",
    "Vis feugiat delenit",
    "Curabitur laoret luctus",
    "Aliquam fringilla juste",
    "Simul dolorem voluptaria",
    "Vis feugiat delenit",
    "Omnis dicam mentitum",
    "Vidit dolore eu qui",
    "Aroma Mocha",
    "Autem Euaiure",
    "Authletic Stud",
    "Black Tour Bag",
    "Authletic Stud",
    "Skillofun Junior",
    "Crinkle Leaf",
    "Corporis Suscipit",
    "Shake Spin Lion",
    "Sensory Sweet",
    "Link 'N Go Pack",
    "Scoop 'N Bath",
];

let colors = ['red',
    'yellow',
    'purple',
    'pink',
    'orange',
    'blue',
    'green',
]

let sizes = [
    'xs',
    'sm',
    'md',
    'lg',
    'xl',
    'xxl'
]

let compositions = [
    'cotton',
    'polyester',
    'viscose'
]

let tags = [
    'dress',
    'outfit',
    'accessories',
    'children dress',
    'bag'
]

let categories = [
    'accessories',
    'toys',
    'girls',
    'kids',
    'boys',
    'shoes',
]

let products = [];

product_names.forEach((name, index) => {
    let temp = {
        id: index+1,
        name: name,
        price: Math.floor(Math.random() * 1000)+50,
        discount: parseInt(Math.floor(Math.random() * 50)),
        thumb_image: `assets/images/product/${index+1}.jpg`,
        categories: [
            tags[parseInt(Math.floor(Math.random() * 5) + 0)],
        ],
        related_images: [
            `assets/images/product/${parseInt(Math.floor(Math.random() * 5) + 1)}.jpg`,
            `assets/images/product/${parseInt(Math.floor(Math.random() * 9) + 9)}.jpg`,
        ],
        tags: [
            tags[parseInt(Math.floor(Math.random() * 4) + 0)],
        ],
        sizes: [
            sizes[parseInt(Math.floor(Math.random() * 5) + 0)],
        ],
        colors: [
            colors[parseInt(Math.floor(Math.random() * 5) + 0)],
        ],
        compositions: [
            compositions[parseInt(Math.floor(Math.random() * 2) + 0)],
        ],
        stock: parseInt(Math.floor(Math.random() * 500) + 250),
        reviews: [{
                name: 'mr.one',
                review: parseInt(Math.floor(Math.random() * 4)) + .5,
            },
            {
                name: 'mr.two',
                review: parseInt(Math.floor(Math.random() * 4)) + .5,
            },
            {
                name: 'mr.three',
                review: parseInt(Math.floor(Math.random() * 4)) + .5,
            },
        ],
        features: `
            <div class="product-manufacturer">
                <a href="#">
                    <img src="assets/images/product-brandlogo.png"
                        class="img img-thumbnail manufacturer-logo"
                        alt="Fashion Manufacturer 1">
                </a>
            </div>
            <div class="product-reference">
                <label class="label">Reference </label>
                <span itemprop="sku">demo_1</span>
            </div>
            <div class="product-quantities">
                <label class="label">In stock</label>
                <span data-stock="294" data-allow-oosp="0">294 Items</span>
            </div>
            <div class="product-out-of-stock"></div>
            <section class="product-features">
                <h3 class="h6">Data sheet</h3>
                <dl class="data-sheet">
                    <dt class="name">Compositions</dt>
                    <dd class="value">Cotton</dd>
                    <dt class="name">Styles</dt>
                    <dd class="value">Casual</dd>
                    <dt class="name">Properties</dt>
                    <dd class="value">Short Sleeve</dd>
                </dl>
            </section>
        `,
        short_description: "Faded short sleeves t-shirt with high neckline. Soft and stretchy material for a comfortable fit. Accessorize with a straw hat and you're ready for summer!",
        description: "Fashion has been creating well-designed collections since 2010. The brand offers feminine designs delivering stylish separates and statement dresses which have since evolved into a full ready-to-wear collection in which every item is a vital part of a woman's wardrobe. The result? Cool, easy, chic looks with youthful elegance and unmistakable signature style. All the beautiful pieces are made in Italy and manufactured with the greatest attention. Now Fashion extends to a range of accessories including shoes, hats, belts and more!",
    }

    products.push(temp);
});

console.log(products);