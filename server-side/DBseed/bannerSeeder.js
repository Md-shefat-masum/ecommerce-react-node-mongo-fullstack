const bannerModel = require('../Models/bannerModel');

const bannerSeeder = async () => {
    let banners = [{
            title: 'Best ecommerce',
            button_text: 'read more',
            button_url: '#/',
            image: '/assets/images/slider/slide-1.jpg',
        },
        {
            title: 'welcome to e-commerce shop',
            button_text: 'latest products',
            button_url: '#/',
            image: '/assets/images/slider/slide-2.jpg',
        },
        {
            title: 'thanks for visiting us',
            button_text: 'kids collection',
            button_url: '#/',
            image: '/assets/images/slider/slide-3.jpg',
        },
    ];

    await bannerModel.deleteMany({});
    let result = await bannerModel.insertMany(banners);
    // console.log(result);
}

module.exports = bannerSeeder;