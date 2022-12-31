const productModel = require('../Models/productModel');
const categoryModel = require('../Models/categoryModel');
const userModel = require('../Models/userModel');

async function random_category() {
    // Get the count of all categories
    let count = await categoryModel.count().exec();
    var random = Math.floor(Math.random() * count);
    let category = await categoryModel.findOne().skip(random).exec();
    return category._id;
}
const productSeeder = async () => {

    let product_title_list = [{
            title: "Authletic Stud",
            category: await random_category(),
        },
        {
            title: "Skillofun Junior",
            category: await random_category(),
        },
        {
            title: "Critter Teddy",
            category: await random_category(),
        },
        {
            title: "Hot Wheels Gift",
            category: await random_category(),
        },
        {
            title: "Black Tour Bag",
            category: await random_category(),
        },
        {
            title: "Autem Euaiure",
            category: await random_category(),
        },
        {
            title: "Aroma Mocha",
            category: await random_category(),
        },
        {
            title: "Classic Fisher Gift",
            category: await random_category(),
        },
        {
            title: "Cosco Rio Size",
            category: await random_category(),
        },
        {
            title: "Woollen Strings",
            category: await random_category(),
        },
        {
            title: "Lee Sneakers",
            category: await random_category(),
        },
        {
            title: "Shake Spin Lion",
            category: await random_category(),
        },
        {
            title: "Sensory Activity",
            category: await random_category(),
        },
        {
            title: "Corporis Suscipit",
            category: await random_category(),
        },
        {
            title: "Crinkle Leaf",
            category: await random_category(),
        },

    ];

    let admin = await userModel.findOne({
        role: 'admin'
    });

    let product_list = product_title_list.map(({
        title,
        category
    }, i) => {
        let price = (i + 1) * 8;
        return {
            "title": title,
            "category": category,
            "price": price,
            "discount": (i + 1),
            "discount_price": parseInt(price - ((price * (i + 1)) / 100)),
            "discount_date": "1572444800000",
            "thumb_image": `uploads/products/${i + 1}.jpg`,
            "related_image": [
                `uploads/products/${parseInt(Math.random() * (20 - 1) + 1)}.jpg`,
                `uploads/products/${parseInt(Math.random() * (20 - 1) + 1)}.jpg`,
                `uploads/products/${parseInt(Math.random() * (20 - 1) + 1)}.jpg`,
                `uploads/products/${parseInt(Math.random() * (20 - 1) + 1)}.jpg`,
                `uploads/products/${parseInt(Math.random() * (20 - 1) + 1)}.jpg`,
            ],
            "description": "<p>Faded short sleeves t-shirt with high neckline. Soft and stretchy material for a comfortable fit. Accessorize with a straw hat and you're ready for summer!</p>\r\n<h4>Sample Unordered List</h4>\r\n<ul>\r\n<li>Comodous in tempor ullamcorper miaculis</li>\r\n<li>Pellentesque vitae neque mollis urna mattis laoreet.</li>\r\n<li>Divamus sit amet purus justo.</li>\r\n<li>Proin molestie egestas orci ac suscipit risus posuere loremou.</li>\r\n</ul>",
            "creator": admin._id,
        };
    });

    // delete all
    await productModel.deleteMany({});

    // insert new products
    let products = await productModel.insertMany(product_list)
    // console.log(products);
}

module.exports = productSeeder;