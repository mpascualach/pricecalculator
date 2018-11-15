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
                id: 1,
                name: "ANZA",
                price: 6900,
                priceearly: 3900,
                currency: "AUD",
                description: "ANZA Workshop description text goes here",
                earlybirdends: 20200320,
                incart: 0,
                schedules: 0,
                additionalPeople: 0,
                attendance: {
                    schedules: 0,
                    additionalPeople: 0
                },
                additional: []
            },
            {
                id: 2,
                name: "Berlin",
                price: 6900,
                priceearly: 3900,
                currency: "AUD",
                description: "Berlin Workshop description text goes here",
                earlybirdends: 20190311,
                incart: 0,
                attendance: {
                    schedules: 0,
                    additionalPeople: 0
                },
                additional: []
            },
            {
                id: 3,
                name: "Beijing",
                price: 6900,
                priceearly: 3900,
                currency: "AUD",
                description: "Beijing Workshop description text goes here",
                earlybirdends: 20190311,
                incart: 0,
                attendance: {
                    schedules: 0,
                    additionalPeople: 0
                },
                additional: []
            },
            {
                id: 4,
                name: "Miami",
                price: 6900,
                priceearly: 3900,
                currency: "AUD",
                description: "Miami Workshop description text goes here",
                earlybirdends: 20190311,
                incart: 0,
                attendance: {
                    schedules: 0,
                    additionalPeople: 0
                },
                additional: []
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
        headers:[
            { text: 'Name', value: 'name', sortable: false },
            {
                text: 'Price',
                value: 'price',
                sortable: false,
            },
            {
                text: 'Qty',
                value: 'qty',
                sortable: false
            },
            {
                text: 'SubTotal',
                value: 'subTotal',
                sortable: false
            },
        ], 
        cart: [], //it starts empty
        total: 0,
        saved: 0
    },
    methods: {
        addToCart: function (product) {
            product.incart++;
            product.attendance.schedules++;
            product.attendance.additionalPeople = 0;
            this.cart.push(product);
            // console.log(this.products)
            // let price, difference;
            // if (Date.now() > new Date(product.earlybirdends)) {
            //     new Date(product.earlybirdends)
            //     switch (this.cart.length) {
            //         case '1':
            //             price = product.price;
            //             difference = 0;
            //         case '2':
            //             price = product.price * 0.82;
            //             difference = product.price * 0.18;
            //             break;
            //         case '3':
            //             price = product.price * 0.8;
            //             difference = product.price * 0.2;
            //             break;
            //         case '4':
            //             price = product.price * 0.77;
            //             difference = product.price * 0.23;
            //             break;
            //         case '5':
            //             price = product.price * 0.75;
            //             difference = product.price * 0.25;
            //             break;
            //         default:
            //             price = product.price * 0.73;
            //             difference = product.price * 0.27;
            //     }
            // }
            // else { price = priceearly };
            this.total += product.price;
        },
        removeFromCart: function (product) {
            product.incart--;
            product.attendance.schedules--;
            this.total -= product.price;
            if (product.incart == 0) {
                this.absoluteRemoveFromCart(product);
            }
        },
        absoluteRemoveFromCart: function (product){
            product.attendance.additionalPeople = 0;
            product.attendance.schedules = 0;
            while (product.incart !== 0){
                product.incart--;
                this.total -= product.price;
            }
            product.incart = 0;
            let position = this.cart.indexOf(product);
            this.cart.splice(position, 1);
        },
        addSchedule: function (product) {
            product.attendance.schedules++;
            product.incart++;
            this.total += product.price;
        },
        removeSchedule: function (product) {
            product.attendance.schedules--;
            this.total -= product.price;
            if (product.attendance.schedules == 0){
                this.removeFromCart(product);
            }
        },
        addPerson: function (product) {
            product.attendance.schedules++;
        },
        removePerson: function (product) {
            product.attendance.schedules--;
        }
    }
}).$mount('#vue')



