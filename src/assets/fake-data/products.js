const random = () => Math.floor(Math.random() * 10000);
const products = [
    {
        id:random(),
        title: "ÁO HOA NHÍ PHỐI BÈO 5572 ",
        price: '359000',
        subprice:"666000",
        img01:"//product.hstatic.net/1000249198/product/5572_-_891__4__cdf8668fb23d4ee6ba9f4c3bc0ded399_grande.jpg",
        img02: "//product.hstatic.net/1000249198/product/5572_-_891__3__d75b6dad93564646aee902636e0e3854_grande.jpg",
        categorySlug: "ao-hoa",
        colors: ["p7","p9","p14"],
        slug: "ao-thun-dinosaur-01",
        size: ["s", "m", "l", "xl"],
    },
    {
        id:random(),
        title: "ÁO KIỂU TAY PHỐI NƠ 5566",
        price: '190000',
        subprice:"339000",
        img01:"//product.hstatic.net/1000249198/product/5566_-_9120__2__80db120137b948ffaa807b9e62766e3e_grande.jpg",
        img02: "//product.hstatic.net/1000249198/product/5566_-_9120__3__f7aff774398f4a3da27a31415d63fd5b_grande.jpg",
        categorySlug: "ao-kieu",
        colors: ["p11","p13","p14"],
        slug: "ao-thun-dinosaur-02",
        size: ["s", "m"],
    },
    {
        id:random(),
        title: "ĐẦM XÒE PHỐI NÚT 3323",
        price: '589000',
        subprice:"888000",
        img01:"//product.hstatic.net/1000249198/product/_mg_6367_eb2c5c7aa0a8466cbb652d689fffcc4a_grande.jpg",
        img02:"//product.hstatic.net/1000249198/product/_mg_6359_7d6902c5956a414fa308ddfa2d118611_grande.jpg",
        categorySlug: "dam-xeo",
        colors: ["p11","p13","p14","p4"],
        slug: "ao-thun-dinosaur-03",
        size: ["m"],
    },
    {
        id:random(),
        title: "ĐẦM XÒE ĐÍNH HOA HỒNG 3319",
        price: "320000",
        subprice:"540000",
        img01: "//product.hstatic.net/1000249198/product/quan0441_e70a55a5b222469d816ace4bee320fde_grande.png",
        img02: "//product.hstatic.net/1000249198/product/quan0428_4f25fa52f588411da4c63480327c6da4_grande.png",
        categorySlug: "dam-xeo",
        colors: ["p2","p3","p6","p4"],
        slug: "ao-thun-polo-04",
        size: ["xl"],
    },
    {
        id:random(),
        title: "ĐẦM HOA NHÍ PHỐI NÚT 3305",
        price: "400000",
        subprice:"",
        img01: "//product.hstatic.net/1000249198/product/quan0943_56b6b5a8ec334cd891a18be44c6ee88b_grande.png",
        img02: "//product.hstatic.net/1000249198/product/quan0968_833018fa3dec4e93a6046610d12117bd_grande.png",
        categorySlug: "dam-hoa",
        colors: ["p2","p3","p6","p4","p5"],
        slug: "ao-thun-polo-05",
        size: ["xxl"],
    },
    {
        id:random(),
        title: "ĐẦM HOA NHÍ 3325",
        price: '390000',
        subprice:"539000",
        img01: "//product.hstatic.net/1000249198/product/3325__3__b8d92f9da23e40d9a83dca6d7232c150_grande.jpg",
        img02: "//product.hstatic.net/1000249198/product/3325__4__ad8ad3932ef244198e24cbcafdfac1c8_grande.jpg",
        categorySlug: "dam-hoa",
        colors:  ["p2","p3","p10","p11","p5"],
        slug: "ao-thun-polo-06",
        size: ["s", "m", "xl"],
    },
    {
        id:random(),
        title: "QUẦN SUÔNG 9116",
        price: "400000",
        subprice:"",
        img01:"//product.hstatic.net/1000249198/product/c13_61cc19ab29d24602b0f0479ad4ff0ee4_grande.jpg",
        img02: "//product.hstatic.net/1000249198/product/c10_ded02cb3e31144739e4bdf1ce19ed9da_grande.jpg",
        categorySlug: "quan-suong",
        colors:  ["p12","p13","p16","p14","p15"],
        slug: "ao-somi-caro-07",
        size: ["l", "xl"],
    },
    {
        id:random(),
        title: "ÁO PEPLUM CỔ VUÔNG PHỐI NÚT 5558",
        price: "250000",
        subprice:"359000",
        img01: "//product.hstatic.net/1000249198/product/c7_c2a09bf3ca9f480d8c3557673006aa54_grande.jpg",
        img02:"//product.hstatic.net/1000249198/product/c8_6ac8da700db64951bd78082f58b60837_grande.jpg",
        categorySlug: "ao-somi",
        colors:  ["p2","p3","p5","p4","p9"],
        slug: "ao-somi-dai-tay-08",
        size: ["s", "m", "xl"],
    },
    {
        id:random(),
        title: "ÁO HOA NHÍ PHỐI BÈO 5572 ",
        price: '90000',
        subprice:"",
        img01:"//product.hstatic.net/1000249198/product/5572_-_891__3__d75b6dad93564646aee902636e0e3854_grande.jpg",
        img02: "//product.hstatic.net/1000249198/product/5572_-_891__4__cdf8668fb23d4ee6ba9f4c3bc0ded399_grande.jpg",
        categorySlug: "ao-hoa",
        colors:  ["p2","p3","p6","p14","p5"],
        slug: "ao-thun-dinosaur-01",
        size: ["s", "m", "l", "xl"],
    },
    {
        id:random(),
        title: "ÁO KIỂU TAY PHỐI NƠ 5566",
        price: '190000',
        subprice:"339000",
        img01:"//product.hstatic.net/1000249198/product/5566_-_9120__2__80db120137b948ffaa807b9e62766e3e_grande.jpg",
        img02: "//product.hstatic.net/1000249198/product/5566_-_9120__3__f7aff774398f4a3da27a31415d63fd5b_grande.jpg",
        categorySlug: "ao-kieu",
        colors:  ["p12","p13","p6","p4","p5"],
        slug: "ao-thun-dinosaur-02",
        size: ["s", "m"],
    },
    {
        id:random(),
        title: "ĐẦM XÒE PHỐI NÚT 3323",
        price: '589000',
        subprice:"",
        img01:"//product.hstatic.net/1000249198/product/_mg_6367_eb2c5c7aa0a8466cbb652d689fffcc4a_grande.jpg",
        img02:"//product.hstatic.net/1000249198/product/_mg_6359_7d6902c5956a414fa308ddfa2d118611_grande.jpg",
        categorySlug: "dam-xeo",
        colors: ["p12","p13","p2","p10","p7"],
        slug: "ao-thun-dinosaur-03",
        size: ["m"],
    },
    {
        id:random(),
        title: "ĐẦM XÒE ĐÍNH HOA HỒNG 3319",
        price: "390000",
        subprice:"",
        img01: "//product.hstatic.net/1000249198/product/quan0441_e70a55a5b222469d816ace4bee320fde_grande.png",
        img02: "//product.hstatic.net/1000249198/product/quan0428_4f25fa52f588411da4c63480327c6da4_grande.png",
        categorySlug: "dam-xeo",
        colors: ["p2","p3"],
        slug: "ao-thun-polo-04",
        size: ["xl"],
    },
    {
        id:random(),
        title: "ĐẦM HOA NHÍ PHỐI NÚT 3305",
        price: "290000",
        subprice:"",
        img01: "//product.hstatic.net/1000249198/product/quan0943_56b6b5a8ec334cd891a18be44c6ee88b_grande.png",
        img02: "//product.hstatic.net/1000249198/product/quan0968_833018fa3dec4e93a6046610d12117bd_grande.png",
        categorySlug: "dam-hoa",
        colors:  ["p2"],
        slug: "ao-thun-polo-05",
        size: ["xxl"],
    },
    {
        id:random(),
        title: "ĐẦM HOA NHÍ 3325",
        price: '190000',
        subprice:"539000",
        img01: "//product.hstatic.net/1000249198/product/3325__3__b8d92f9da23e40d9a83dca6d7232c150_grande.jpg",
        img02: "//product.hstatic.net/1000249198/product/3325__4__ad8ad3932ef244198e24cbcafdfac1c8_grande.jpg",
        categorySlug: "dam-hoa",
        colors: ["p1","p3","p4"],
        slug: "ao-thun-polo-06",
        size: ["s", "m", "xl"],
    },
    {
        id:random(),
        title: "QUẦN SUÔNG 9116",
        price: "149000",
        subprice:"",
        img01:"//product.hstatic.net/1000249198/product/c13_61cc19ab29d24602b0f0479ad4ff0ee4_grande.jpg",
        img02: "//product.hstatic.net/1000249198/product/c10_ded02cb3e31144739e4bdf1ce19ed9da_grande.jpg",
        categorySlug: "quan-suong",
        colors: ["p2","p3","p6","p4","p5","p17"],
        slug: "ao-somi-caro-07",
        size: ["l", "xl"],
    },
    {
        id:random(),
        title: "ÁO PEPLUM CỔ VUÔNG PHỐI NÚT 5558",
        price: "250000",
        subprice:"390000",
        img01: "//product.hstatic.net/1000249198/product/c7_c2a09bf3ca9f480d8c3557673006aa54_grande.jpg",
        img02:"//product.hstatic.net/1000249198/product/c8_6ac8da700db64951bd78082f58b60837_grande.jpg",
        categorySlug: "ao-somi",
        colors: ["p2","p3","p6","p4","p5","p18"],
        slug: "ao-somi-dai-tay-08",
        size: ["s", "m", "xl"],
    },
]

const getAllProducts = () => products

const getProducts = (count) => {
    const max = products.length - count
    const min = 0
    const start = Math.floor(Math.random() * (max - min) + min)
    return products.slice(start, start + count)
}

const getProductBySlug = (slug) => products.find(e => e.slug === slug)

const getCartItemsInfo = (cartItems) => {
    let res = []
    if (cartItems.length > 0) {
        cartItems.forEach(e => {
            let product = getProductBySlug(e.slug)
            res.push({
                ...e,
                product: product
            })
        })
    }
    return res.sort((a, b) => a.id > b.id ? 1 : (a.id < b.id ? -1 : 0))
}

const productData = {
    getAllProducts,
    getProducts,
    getProductBySlug,
    getCartItemsInfo
}

export default productData