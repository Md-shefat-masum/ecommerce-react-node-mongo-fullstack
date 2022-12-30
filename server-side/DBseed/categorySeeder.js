const categoryModel = require('../Models/categoryModel');
const userModel = require('../Models/userModel');

const categorySeeder = async () => {
    let categories = [
        "OshKosh",
        "Blanket sleeper",
        "Sailor dress",
        "Skeleton suit",
        "Bath Accessories",
        "Bath Safety",
        "Face cloth",
        "FunGals",
        "Infant bodysuit",
        "Face cloth",
        "Hanky Set",
        "Bath Toys",
        "Abercrombie",
        "Tootsa MacGinty",
        "Premier Baby",
    ];

    let admin = await userModel.findOne({
        role: 'admin'
    });

    await categoryModel.deleteMany({});

    let category_lists = categories.map((i) => {
        let new_category = {
            title: i,
            creator: admin._id,
            parent: null,
        }
        return new_category;
    })

    let result = await categoryModel.insertMany(category_lists);
    // console.log(result);
}

module.exports = categorySeeder;