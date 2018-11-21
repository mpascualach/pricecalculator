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
};

const i18n = new VueI18n({
    numberFormats
});

var vue = new Vue({
    i18n,
    data: {
        products: [{
            id: 1,
            name: "ANZA",
            priceearly: 5600,
            selectedearly: false,
            endofearly: false,
            price: 6900, //this is going to be subject to change with respect to the copies of it that'll appear in the cart
            currency: "AUD",
            description: "ANZA Workshop description text goes here",
            earlybirdends: 20200320,
            earlyRate: false,
            incart: 0,
            quantity: 0,
            subtotal: 0,
            selectBoothBoolean: false,
            boothselected: false,
            tables: {
                id: 1,
                name: "ANZA Table",
                discount: 1, //1 means there is no discount applied
                price: 6900,
                originalprice: 6900,
                priceearly: 5600,
                quantity: 0,
                schedules: {
                    id: 1,
                    name: "ANZA Additional Schedule",
                    quantity: 0,
                    price: 2400
                },
                additionalPeople: {
                    id: 1,
                    name: "ANZA Additional Person",
                    quantity: 0,
                    price: 990
                },
                booths: {
                    quantity: 0,
                    booths: true,
                    name: '',
                    id: 1,
                    price: 0, //to be changed later
                    large12: {
                        id: 1,
                        name: "ANZA Exhibition Booth 12m²",
                        quantity: 0,
                        price: 12000,
                    },
                    large10: {
                        id: 1,
                        name: "ANZA Exhibition Booth 10m²",
                        quantity: 0,
                        price: 9000,
                    },
                    medium8: {
                        id: 1,
                        name: "ANZA Exhibition Booth 8m²",
                        quantity: 0,
                        price: 8000,
                    },
                    medium6: {
                        id: 1,
                        name: "ANZA Exhibition Booth 6m²",
                        quantity: 0,
                        price: 6000,
                    },
                    std5: {
                        id: 1,
                        name: "ANZA Exhibition Booth 4.5m²",
                        quantity: 0,
                        price: 5500,
                    },
                    std4: {
                        id: 1,
                        name: "ANZA Exhibition Booth 4m²",
                        quantity: 0,
                        price: 5000,
                    },
                    std3: {
                        id: 1,
                        name: "ANZA Exhibition Booth 3m²",
                        quantity: 0,
                        price: 4400,
                    }
                },
                sponsorships: {
                    platinum: {
                        id: 1,
                        name: "ANZA Platinum Sponsorship Package",
                        price: 22000,
                        quantity: 0,
                    },
                    gold: {
                        id: 1,
                        name: "ANZA Gold Sponsorship Package",
                        price: 14000,
                        quantity: 0,
                    },
                    silver: {
                        id: 1,
                        name: "ANZA Silver Sponsorship Package",
                        price: 9000,
                        quantity: 0,
                    },
                },
            },
            additional: []
        },
        {
            id: 2,
            name: "Berlin",
            priceearly: 3900,
            selectedearly: false,
            endofearly: false,
            price: 4400,
            currency: "EUR",
            description: "Berlin Workshop description text goes here",
            earlybirdends: 20190311,
            earlyRate: false,
            incart: 0,
            quantity: 0,
            subtotal: 0,
            boothselected: false,
            tables: {
                id: 2,
                name: "Berlin Table",
                discount: 1,
                price: 4400,
                originalprice: 4400,
                priceearly: 3900,
                quantity: 0,
                schedules: {
                    id: 2,
                    name: "Berlin Additional Schedule",
                    quantity: 0,
                    price: 2400
                },
                additionalPeople: {
                    id: 2,
                    name: "Berlin Additional Person",
                    quantity: 0,
                    price: 990
                },
                booths: {
                    id: 1,
                    quantity: 0,
                    price: 0,
                    name: 0,
                    large12: {
                        id: 1,
                        name: "ANZA Exhibition Booth 12m²",
                        quantity: 0,
                        price: 12000,
                    },
                    large10: {
                        id: 1,
                        name: "ANZA Exhibition Booth 10m²",
                        quantity: 0,
                        price: 9000,
                    },
                    medium8: {
                        id: 1,
                        name: "ANZA Exhibition Booth 8m²",
                        quantity: 0,
                        price: 8000,
                    },
                    medium6: {
                        id: 1,
                        name: "ANZA Exhibition Booth 6m²",
                        quantity: 0,
                        price: 6000,
                    },
                    std5: {
                        id: 1,
                        name: "ANZA Exhibition Booth 4.5m²",
                        quantity: 0,
                        price: 5500,
                    },
                    std4: {
                        id: 1,
                        name: "ANZA Exhibition Booth 4m²",
                        quantity: 0,
                        price: 5000,
                    },
                    std3: {
                        id: 1,
                        name: "ANZA Exhibition Booth 3m²",
                        quantity: 0,
                        price: 4400,
                    }
                },
                sponsorships: {
                    platinum: {
                        id: 1,
                        name: "Berlin Platinum Sponsorship Package",
                        price: 22000,
                        qty: 0,
                    },
                    gold: {
                        id: 1,
                        name: "Berlin Gold Sponsorship Package",
                        price: 16000,
                        qty: 0,
                    },
                    silver: {
                        id: 1,
                        name: "Berlin Silver Sponsorship Package",
                        price: 10000,
                        qty: 0,
                    },
                },
            },
            
            additional: []
        },
        {
            id: 3,
            name: "Beijing",
            price: 4400,
            priceearly: 3900,
            selectedearly: false,
            endofearly: false,
            currency: "EUR",
            description: "Beijing Workshop description text goes here",
            earlybirdends: 20190311,
            earlyRate: false,
            incart: 0,
            quantity: 0,
            subtotal: 0,
            boothselected: false,
            tables: {
                id: 2,
                name: "Beijing Table",
                discount: 1,
                price: 4400,
                originalprice: 4400,
                priceearly: 3900,
                quantity: 0,
                schedules: {
                    id: 2,
                    name: "Beijing Additional Schedule",
                    discount: 1,
                    quantity: 0,
                    price: 2400
                },
                additionalPeople: {
                    id: 2,
                    name: "Beijing Additional Person",
                    discount: 1,
                    quantity: 0,
                    price: 990
                },
                booths: {
                    quantity: 0,
                    large12: {
                        id: 1,
                        name: "ANZA Exhibition Booth 12m²",
                        quantity: 0,
                        price: 12000,
                    },
                    large10: {
                        id: 1,
                        name: "ANZA Exhibition Booth 10m²",
                        quantity: 0,
                        price: 9000,
                    },
                    medium8: {
                        id: 1,
                        name: "ANZA Exhibition Booth 8m²",
                        quantity: 0,
                        price: 8000,
                    },
                    medium6: {
                        id: 1,
                        name: "ANZA Exhibition Booth 6m²",
                        quantity: 0,
                        price: 6000,
                    },
                    std5: {
                        id: 1,
                        name: "ANZA Exhibition Booth 4.5m²",
                        quantity: 0,
                        price: 5500,
                    },
                    std4: {
                        id: 1,
                        name: "ANZA Exhibition Booth 4m²",
                        quantity: 0,
                        price: 5000,
                    },
                    std3: {
                        id: 1,
                        name: "ANZA Exhibition Booth 3m²",
                        quantity: 0,
                        price: 4400,
                    }
                },
                sponsorships: {
                    platinum: {
                        id: 1,
                        name: "Beijing Platinum Sponsorship Package",
                        price: 16000,
                        qty: 0,
                    },
                    gold: {
                        id: 1,
                        name: "Beijing Gold Sponsorship Package",
                        price: 11000,
                        qty: 0,
                    },
                    silver: {
                        id: 1,
                        name: "Beijing Silver Sponsorship Package",
                        price: 8000,
                        qty: 0,
                    },
                },
            },
            additional: []
        },
        {
            id: 4,
            name: "Miami",
            price: 6900,
            priceearly: 3900,
            selectedearly: false,
            endofearly: false,
            currency: "AUD",
            description: "Miami Workshop description text goes here",
            earlybirdends: 20180311,
            earlyRate: false,
            incart: 0,
            quantity: 0,
            subtotal: 0,
            boothselected: false,
            tables: {
                id: 2,
                name: "Miami Table",
				discount: 0,
                price: 4400,
                originalprice: 4400,
                priceearly: 3900,
                quantity: 0,
                schedules: {
                    id: 2,
                    name: "Miami Additional Schedule",
                    discount: 0,
                    quantity: 0,
                    price: 2400
                },
                additionalPeople: {
                    id: 2,
                    name: "Miami Additional Person",
                    discount: 0,
                    quantity: 0,
                    price: 990
                },
                booths: {
                    quantity: 0,
                    large12: {
                        id: 1,
                        name: "ANZA Exhibition Booth 12m²",
                        quantity: 0,
                        price: 12000,
                    },
                    large10: {
                        id: 1,
                        name: "ANZA Exhibition Booth 10m²",
                        quantity: 0,
                        price: 9000,
                    },
                    medium8: {
                        id: 1,
                        name: "ANZA Exhibition Booth 8m²",
                        quantity: 0,
                        price: 8000,
                    },
                    medium6: {
                        id: 1,
                        name: "ANZA Exhibition Booth 6m²",
                        quantity: 0,
                        price: 6000,
                    },
                    std5: {
                        id: 1,
                        name: "ANZA Exhibition Booth 4.5m²",
                        quantity: 0,
                        price: 5500,
                    },
                    std4: {
                        id: 1,
                        name: "ANZA Exhibition Booth 4m²",
                        quantity: 0,
                        price: 5000,
                    },
                    std3: {
                        id: 1,
                        name: "ANZA Exhibition Booth 3m²",
                        quantity: 0,
                        price: 4400,
                    }
                },
                sponsorships: {
                    platinum: {
                        id: 1,
                        name: "Miami Platinum Sponsorship Package",
                        price: 16000,
                        qty: 0,
                    },
                    gold: {
                        id: 1,
                        name: "Miami Gold Sponsorship Package",
                        price: 11000,
                        qty: 0,
                    },
                    silver: {
                        id: 1,
                        name: "Miami Silver Sponsorship Package",
                        price: 8000,
                        qty: 0,
                    },
                },
            },
            additional: []
        }],
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
            {
                text: 'Total',
                value: 'total',
                sortable: false
            },
            {
                text: 'Discount',
                value: 'discount',
                sortable: false
            },
        ], 
        cart: [], //it starts empty
        total: 0,
        subitemtotal: 0,
        earlytotal: 0,
        discount: 1,
        saved: 0,
        regularWorkshops: 0,
        limitReached: false,
        earlyRates: true,
        checkout: false,
        checkoutscreen: {},
        choiceModal: false,
        boothModal: false,
        accountType: 'educator', //can also be 'service provider' and 'work and travel'
        attendBooths: false,
        currentDate: new Date(),
        fullDate: (new Date()).getFullYear() + "" + (new Date()).getMonth() + "" + (new Date()).getDate(),
        fixer: {}
    },
    methods: {
        addToCart: function (product, subitem, selector) {
            var cartitem = Object.assign({}, subitem); //make copy of product
            this.regularWorkshops++;
            this.earlyRates = false;
            this.cart.push(cartitem); //push copy of product into cart
            if( this.fullDate < product.earlybirdends && 1 == this.regularWorkshops ){ //EARLYBIRD check... should skip first if if more than one event selected but reset previously added workshops to regular rate.. awkward
                    cartitem.selectedearly = true;
                    product.selectedearly = true;
                    cartitem.price = subitem.priceearly; 
                    this.earlytotal += cartitem.price;
            } else {
                this.earlytotal = 0;
                cartitem.price = subitem.price;
                if (this.regularWorkshops > 1){
                    this.products.forEach(m => {
                        if (m.selectedearly) m.endofearly = true;
                        console.log(m)
                    });
                }
                
            } //log price of subitem and assign it to copy's price
            this.total += cartitem.price;
            product.incart++;
            switch (this.regularWorkshops) {
                case 1:
                    this.discount = 1;
                    break;
                case 2:
                    this.discount = 0.82;
                    break;
                case 3:
                    this.discount = 0.8;
                    break;
                case 4:
                    this.discount = 0.77;
                    break;
                case 5:
                    this.discount = 0.75;
                    break;
                default:
                    this.discount = 0.73;
            }
            if (this.regularWorkshops == 2){
                this.cart.forEach(m => {
                    if (m.selectedearly) m.price = m.originalprice;
                })
                this.total = this.cart.reduce((a,b)=>a.price + b.price);
            }
            subitem.quantity++;
            cartitem.quantity++;
        },
        absoluteRemoveFromCart: function (product) {
            if (product.tables) {
                product.tables.additionalPeople.quantity = 0;
                product.tables.schedules.quantity = 0;
                product.tables.quantity = 0;
                product.incart = 0;
            } else {
                product.additionalPeople.quantity = 0;
                product.schedules.quantity = 0;
                this.products.forEach(m => {
                    if (m.id == product.id) {
                        m.incart = 0;
                        m.tables.quantity = 0;
                    }
                });
            }
            if (product.selectedearly) {
                this.total -= product.priceearly;
            }
            else this.total -= product.price;
            var position = this.cart.indexOf(product);
            this.cart.splice(position, 1);
            this.regularWorkshops--;
            switch(this.regularWorkshops){
                case 0:
                    this.discount = 1;
                    console.log("No items in cart")
                    this.products.forEach(m => {
                        if (m.selectedearly) m.selectedearly = false;
                        this.earlyRates = true;
                    })
                    break;
                case 1:
                    this.discount = 1; //resetting this.discount;
                    this.products.forEach(m => {
                        if (m.selectedearly && m.endofearly){
                            m.endofearly = false;
                        }
                    })
                    this.cart[0].price = this.cart[0].priceearly;
                    this.cart[0].endofearly = false;
                    this.total = this.cart[0].price; //+ this.subitemtotal;
                    break;
                case 2:
                    this.discount = 0.82;
                    break;
                case 3:
                    this.discount = 0.8;
                    break;
                case 4:
                    this.discount = 0.77;
                    break;
                case 5:
                    this.discount = 0.75;
                    break;
                default:
                    this.discount = 0.73;
            }
        },
        addTable: function (product) {
            product.quantity++;
            this.total += product.price;
            console.log(product);
        },
        removeTable: function (product) {
            product.quantity--;
            if (product.quantity == 0){
                this.absoluteRemoveFromCart(product);
            }
            else this.total -= product.price;
        },
        addSubItem: function (product, subitem, selector) {
            if ( selector == 'schedules' && subitem.quantity > product.quantity && subitem.quantity > product.tables.quantity ) {
                this.limitReached = true;
                return;
            }
            subitem.quantity++;
            this.subitemtotal += subitem.price;
            if ( selector == 'schedules' && subitem.quantity > 1 ){
                this.cart.forEach(m => {
                    if (m.id == product.id){
                        m.quantity = Math.floor((subitem.quantity / 2) + 1);
                        if (m.selectedearly) this.earlytotal += m.price;
                        this.total += m.price;
                        // this.subitemtotal += m.price;
                    }
                });
            }
        },
        removeSubItem: function (product, subitem, selector) {
            subitem.quantity--;
            this.subitemtotal -= subitem.price;
            if ( selector == 'schedules' ){
                this.cart.forEach(m => {
                    if ( m.id == product.id ) {
                        m.quantity = Math.floor( (subitem.quantity / 2 )+1 );
                        if ( subitem.quantity == 1 || subitem.quantity == 0 ) m.quantity = 1;
                        if ( subitem.quantity !== 0 ) this.subitemtotal -= m.price;
                    }
                });
                if ( this.cart.length == 1 && this.cart[0].selectedearly ) {
                    this.cart[0].price = this.cart[0].priceearly;
                }
            }
        },
        gotoCheckout(){
            this.checkoutScreen = Object.assign({}, this.cart);
            document.getElementById("main-wrapper").style.display = "none";
            document.getElementById("checkout").style.display = "block";
            console.log(this.checkoutScreen)
        },
        changeMode(){
            this.attendBooths = !this.attendBooths;
        },
        showBoothOptions(product){
            console.log(product);
            product.selectBoothBoolean = true;
        }
    },
    beforeMount(){
        this.products.forEach(m => {
            if ( this.fullDate < m.earlybirdends ){
                m.earlyRate = true;
            }
        });
        axios.get('http://data.fixer.io/api/latest?access_key=0045f1e6f69eedc5c36ccfa9b93d821b')
        .then(response => {
            this.fixer = response.data;
        });
    }
}).$mount('#vue');

//everything below this line will apply to multiple workshop discounts:

// if (Date.now() > new Date(product.earlybirdends)) {
//     new Date(product.earlybirdends)
//   
// }



