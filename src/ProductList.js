const productList = [
    
      {
        name: "MacBook Air",
        price: "115,280",
        img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-midnight-select-20220606?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1653084303665",
        description: "MacBook Air with M1 is an incredibly portable laptop — it’s nimble and quick, with a silent, fanless design and a beautiful Retina display. Thanks to its slim profile and all‑day battery life, this Air moves at the speed of lightness.",
        category: "Mac",
        isFavorite: false,
        quantity: 0,
        id: 1
      },
      {
        name: "MacBook Pro 13Inch",
        price: "148,280",
        img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-spacegray-select-202206?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1653493200207",
        description: "The new M2 chip makes the 13‑inch MacBook Pro more capable than ever. The same compact design supports up to 20 hours of battery life1 and an active cooling system to sustain enhanced performance. Featuring a brilliant Retina display, a FaceTime HD camera and studio‑quality mics, it’s our most portable pro laptop.",
        category: "Mac",
        isFavorite: false,
        quantity: 0,
        id: 2
      },
      {
        name: "MacBook Pro 14Inch",
        price: "239,800",
        img: "https://media.cnn.com/api/v1/images/stellar/prod/211025072623-macbook-pro-14-display-5.jpg?q=w_4032,h_2268,x_0,y_0,c_fill",
        description: "The most powerful MacBook Pro ever is here. With the blazing-fast M1 Pro or M1 Max chip — the first Apple silicon designed for pros — you get groundbreaking performance and amazing battery life. Add to that a stunning Liquid Retina XDR display, the best camera and audio ever in a Mac notebook, and all the ports you need. The first notebook of its kind, this MacBook Pro is a beast.",
        category: "Mac",
        isFavorite: false,
        quantity: 0,
        id: 3
      },
      {
        name: "iPhone 14 Pro",
        price: "214,800",
        img: "https://www.apple.com/newsroom/images/product/iphone/geo/Apple-iPhone-14-Pro-iPhone-14-Pro-Max-deep-purple-220907-geo_inline.jpg.large.jpg",
        description: "A magical new way to interact with iPhone. A vital new safety feature designed to save lives. An innovative 48MP camera for mind-blowing detail. All powered by the ultimate smartphone chip.",
        category: "iPhone",
        isFavorite: false,
        quantity: 0,
        id: 4
      },
      {
        name: "iPhone 14",
        price: "181,800",
        img: "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/NBCTemp.jpeg",
        description: "iPhone 14 has the same superspeedy chip that's in iPhone 13 Pro. A15 Bionic, with a 5-core GPU, powers all the latest features and makes graphically intense games and AR apps feel ultra-fluid. An updated internal design delivers better thermal efficiency, so you can stay in the action longer.",
        category: "iPhone",
        isFavorite: false,
        quantity: 0,
        id: 5
      },
      {
        name: "iPhone 13Pro",
        price: "122,800",
        img: "https://www.apple.com/newsroom/images/product/iphone/geo/Apple_iPhone-13-Pro_iPhone-13-Pro-Max_GEO_09142021_inline.jpg.slideshow-medium_2x.jpg",
        description: "Smooth, responsive Super Retina XDR display with ProMotion. Huge camera system upgrade for dramatic new possibilities. Exceptional durability. The ultrafast A15 Bionic chip. And breakthrough battery life. Let’s Pro.",
        category: "iPhone",
        isFavorite: false,
        quantity: 0,
        id: 6
      },
      {
        name: "iPhone 13",
        price: "86,800",
        img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pink-select-2021?wid=940&hei=1112&fmt=png-alpha&.v=1645572315935",
        description: "A superbright display in a durable design. Hollywood-worthy video shooting made easy. A lightning-fast chip. And a big boost in battery life you’ll notice every day.",
        category: "iPhone",
        isFavorite: false,
        quantity: 0,
        id: 7
      },
      {
        name: "iPhone SE",
        price: "57,800",
        img: "https://images.macrumors.com/t/ROI9MAxtw2MeoOIqRxbr6mYPBSM=/800x0/smart/article-new/2016/02/iphone-se-stack.jpg?lossy",
        description: "It might be hard to buy iPhone SE (2020) Refurbished Devices Online. At Injured Gadgets, we offer the best industry-leading aftermarket refurbished devices at a fraction of the costs. All of our products go through extensive reviewing and testing processes to guarantee that they work and function perfectly and come with a warranty.",
        category: "iPhone",
        isFavorite: false,
        quantity: 0,
        id: 8
      },
      {
        name: "iPad Pro",
        price: "141,090",
        img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-12-11-select-202104_FMT_WHH?wid=2000&hei=2000&fmt=jpeg&qlt=90&.v=1617067383000",
        description: "iPad Pro features the powerful Apple M1 chip for next-level performance and all-day battery life. An immersive 12.9-inch Liquid Retina XDR display for viewing and editing HDR photos and videos. 5G cellular models for blazing speeds away from Wi-Fi. And a front camera with Center Stage keeps you in frame automatically during video calls. iPad Pro has pro cameras and a LiDAR Scanner for stunning photos, videos, and immersive AR. Thunderbolt for connecting to high-performance accessories. And you can add Apple Pencil for note-taking, drawing, and marking up documents, and the Magic Keyboard for a responsive typing experience and trackpad.",
        category: "iPad",
        isFavorite: false,
        quantity: 0,
        id: 9
      },
      {
        name: "iPad Air",
        price: "78,000",
        img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-air-select-cell-purple-202203?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1645066504390",
        description: "iPad Air lets you immerse yourself in whatever you’re reading, watching or creating. The 10.9-inch Liquid Retina display features advanced technologies like True Tone, P3 wide colour and an antireflective coating",
        category: "iPad",
        isFavorite: false,
        quantity: 0,
        id: 10
      },
      {
        name: "iPad mini",
        price: "42,300",
        img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-ipad-mini-wifi-spacegray-gallery-2019?wid=1150&hei=1150&fmt=jpeg&qlt=95&.v=1581026442388",
        description: "This pre-owned or refurbished product has been professionally inspected and tested to work and look like new. How a product becomes part of Amazon Renewed, your destination for pre-owned, refurbished products: A customer buys a new product and returns it or trades it in for a newer or different model. That product is inspected and tested to work and look like new by Amazon-qualified suppliers. Then, the product is sold as an Amazon Renewed product on Amazon. If not satisfied with the purchase, renewed products are eligible for replacement or refund under the Amazon Renewed Guarantee.",
        category: "iPad",
        isFavorite: false,
        quantity: 0,
        id: 11
      },
      {
        name: "iPad",
        price: "28,180",
        img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-2021-hero-landing-wifi?wid=900&hei=1046&fmt=jpeg&qlt=90&.v=1630973863000",
        description: "iPad is so versatile, it’s more than up to any task. Whether you’re working on a project, expressing your creativity or playing an immersive game, iPad is a fun and powerful way to get it done. Here are just a few of the countless things you can do with iPad.",
        category: "iPad",
        isFavorite: false,
        quantity: 0,
        id: 12
      },
      {
        name: "Apple Watch Series 7",
        price: "48,800",
        img: "data:image/jpeg;base64,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",
        description: "The largest, most advanced Always-on Retina display yet makes everything you do with your Apple Watch Series 7 bigger and better. Series 7 is the most durable Apple Watch ever built, with an even more crack-resistant front crystal. Advanced features let you measure your blood oxygen level, take an ECG anytime, and access mindfulness and sleep tracking apps. You can also track dozens of workouts, including new tai chi and pilates.",
        category: "Apple Watch",
        isFavorite: false,
        quantity: 0,
        id: 13
      },
      {
        name: "Apple Watch SE",
        price: "42,800",
        img: "https://m.media-amazon.com/images/I/71YVBgkFOEL._AC_SX679_.jpg",
        description: "Apple Watch SE has the same larger display size Retina display as Series 6, so you can see more at a glance. Advanced sensors to track all your fitness and workout goals. And powerful features to keep you healthy and safe. The Sleep app lets you set a bedtime routine and track your sleep. And you also get calls, messages, and music right on your wrist. It's a lot of watch for a lot less than you expected.",
        category: "Apple Watch",
        isFavorite: false,
        quantity: 0,
        id: 14
      },
      {
        name: "Apple Watch Series 3",
        price: "23,000",
        img: "https://m.media-amazon.com/images/I/612b5jYuRvL._AC_SX679_.jpg",
        description: "Apple Watch connects to your iPhone via Bluetooth 4.2 and displays notifications, apps, and more on its 1.3 Display. It can also connect directly to the Internet thanks to 3G and 4G LTE cellular compatibility and 802.11b/g/n Wi-Fi. The internal battery lasts for up to 18 hours of normal use and is recharged with an included inductive Magnetic charger",
        category: "Apple Watch",
        isFavorite: false,
        quantity: 0,
        id: 15
      }
    
]

export default productList;