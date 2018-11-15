Vue.config.debug = true;

const numberFormats = {
    'en-US': {
        currency: {
            style: 'currency', currency: 'EUR'
        }
    },
    'en-AU': {
        currency: {
            style: 'currency', currency: 'AUD', currencyDisplay: 'symbol'
        }
    }
}

const i18n = new VueI18n({
    numberFormats
})

var vue = new Vue({
    i18n,
    data: {
        products: [
            {
                name: "ANZA",
                price: 6900,
                priceearly: 3900,
                currency: "AUD",
                description: "ANZA Workshop description text goes here",
                earlybirdends: 20200320,
                incart: false
            },
            {
                name: "Berlin",
                price: 6900,
                priceearly: 3900,
                currency: "AUD",
                description: "Berlin Workshop description text goes here",
                earlybirdends: 20190311,
                incart: false
            },
            {
                name: "Beijing",
                price: 6900,
                priceearly: 3900,
                currency: "AUD",
                description: "Beijing Workshop description text goes here",
                earlybirdends: 20190311,
                incart: false
            },
            {
                name: "Miami",
                price: 6900,
                priceearly: 3900,
                currency: "AUD",
                description: "Miami Workshop description text goes here",
                earlybirdends: 20190311,
                incart: false
            }
        ],
        addons: [
            {
                product: "Additional Person",
                price: 1280,
                min: 0,
                max: null,
                description: "Additional attendee without a schedule"
            }
        ],
        cart: [], //it starts empty
        total: 0,
        saved: 0
    },
    methods: {
        addToCart: function (product) {
            product.incart = true;
            this.cart.push(product);
            this.products = this.products.filter(m => { return m.product != product.product});
            console.log(this.products)
            let price, difference;
            if (Date.now() > new Date(product.earlybirdends)) {
                new Date(product.earlybirdends)
                switch (this.cart.length) {
                    case '1':
                        price = product.price;
                        difference = 0;
                    case '2':
                        price = product.price * 0.82;
                        difference = product.price * 0.18;
                        break;
                    case '3':
                        price = product.price * 0.8;
                        difference = product.price * 0.2;
                        break;
                    case '4':
                        price = product.price * 0.77;
                        difference = product.price * 0.23;
                        break;
                    case '5':
                        price = product.price * 0.75;
                        difference = product.price * 0.25;
                        break;
                    default:
                        price = product.price * 0.73;
                        difference = product.price * 0.27;
                }
            }
            else { price = priceearly };
            this.total += price;
            this.saved += difference;

        },
        removeFromCart: function (product) {
            product.incart = false;
            this.cart = this.cart.filter(m => m.product !== product.product);
            this.products.push(product);
            this.products.sort((a, b) => { return a.product - b.product })
        }
    }
}).$mount('#vue')



