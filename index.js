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

// import * as products from 'products';

// const i18n = new VueI18n({
//     numberFormats
// });

var vue = new Vue({
    // i18n,
    el: '#vue',
    data: {
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
        helpheaders: [
            { text: 'Sponsorship Packages, included items: ', sortable: false },
            { text: 'Platinum', sortable: false },
            { text: 'Gold', sortable: false },
            { text: 'Silver', sortable: false } 
        ],
        sponsorship_package_info: [
            {
                name: 'Exhibition Booths',
                sidenote: "(Berlin/NA/ANZA Workshops)",
                Platinum: "9m/12m/12m",
                Gold: "6m",
                Silver: "4.5m/6m/6m"
            },
            {
                name: 'Display Tables',
                sidenote: "(excl. Berlin/NA/ANZA Workshops)",
                Platinum: 2,
                Gold: 1,
                Silver: 1
            },
            {
                name: 'Number of delegates',
                sidenote: "(incl. eSchedule PRO account)",
                Platinum: 2,
                Gold: 1,
                Silver: 1
            },
            {
                name: 'Accompanying person',
                sidenote: "(incl. eSchedule PRO account)",
                Platinum: 2,
                Gold: 1,
                Silver: "No"
            },
            {
                name: 'Recognition as Event Sponsor',
                sidenote: '',
                Platinum: "Yes",
                Gold: "Yes",
                Silver: "Yes"
            },
            {
                name: 'Bag insert',
                sidenote: "(paper/USB/other)",
                Platinum: "Yes",
                Gold: "Yes",
                Silver: "Yes"
            },
            {
                name: 'Full page advertisement in educator catalogue',
                sidenote: '',
                Platinum: "Yes",
                Gold: "Yes",
                Silver: "Yes"
            },
            {
                name: 'Full page advertisement in agent catalogue',
                sidenote: '',
                Platinum: "Yes",
                Gold: "Yes",
                Silver: "No"
            },
            {
                name: 'Literature Display Rack',
                sidenote: '',
                Platinum: 2,
                Gold: 1,
                Silver: "No"
            },
            {
                name: 'Presentation',
                sidenote: "(Berlin 5 -7 pm. ANZA Platinum only - 30min)",
                Platinum: "50 mins",
                Gold: "50 mins",
                Silver: "25 mins"
            },
            {
                name: 'Logo on bag',
                sidenote: '',
                Platinum: "Yes",
                Gold: "No",
                Silver: "No"
            },
            {
                name: 'Logo on eSchedule PRO',
                sidenote: '',
                Platinum: "Yes",
                Gold: "Yes",
                Silver: "Yes"
            },
            {
                name: 'ICEF Monitor advert - Skyscraper',
                sidenote: '',
                Platinum: "30K impressions",
                Gold: "-",
                Silver: "-"
            },
            {
                name: 'ICEF Monitor advert - Rectangle',
                sidenote: '',
                Platinum: "-",
                Gold: "20K impressions",
                Silver: "10K impressions"
            },
        ],
        cart: [], //it starts empty
        adverts: [
            {
                type: 'Adverts',
                choices: [
                    {
                        name: 'Skyscraper',
                        price: 975,
                        quantity: 0,
                        advert: true
                        //possible description?
                    },
                    {
                        name: 'Rectangle',
                        price: 475,
                        quantity: 0,
                        advert: true
                    }
                ]
            },
            {
                type: 'eNewsletter Banner',
                choices: [
                    {
                        name: 'Middle Ad',
                        price: 695,
                        quantity: 0,
                        advert: true
                    },
                    {
                        name: 'Opening Ad',
                        price: 1245,
                        quantity: 0,
                        advert: true
                    }
                ]
            },
            {
                type: 'Package - 20% discount',
                choices: [
                    {
                        name: 'Adverts - Skyscraper & Rectangle',
                        price: 1160,
                        quantity: 0,
                        advert: true
                    },
                    {
                        name: 'Full Package',
                        price: 1160,
                        quantity: 0,
                        advert: true
                    },
                ] 
            }
        ],
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
        selectedWorkshops: [],
        advertModal: false,
        choiceModal: false,
        boothModal: false,
        infoModal: false,
        cartAtBottom: true,
        footerExpanded: false,
        valid: false,
        accountType: 'educator', //can be 'educator', 'exhibitor' and 'work_and_travel'
        attendBooths: false, //determines whether the user is buying an exhibition booth or another fo
        currentDate: new Date(), //current date
        fullDate: (new Date()).getFullYear() + "" + (new Date()).getMonth() + "" + (new Date()).getDate(), //to determine whether early bird rates apply - collating YY/MM/DD format dates as a single number
        fixer: {}, //with regards to fixer.io
        fixerRates: {},
        allowedCurrencies: ["EUR","GBP","USD","CAD","AUD"],
        currentCurrency: "EUR",
        currencySymbol: "€",
        defaultCurrency: "EUR",
        loaded: false,
        endpoint: "https://dev.live.my.icef.com/api3/allAvailableProducts.php",
        products: {},
        productKeys: [],
        productsArray: [],
    },
    filters: {
        // we change each displayed price to fit the format exemplified on icef.design/main and the icef ratesheet among other places
        moneyify: function( value ) {
            if ( value || value == 0 ) {
                let stringified = parseInt(value).toFixed().toString();
                if ( stringified.length > 3 ) {
                    for ( let i = stringified.length - 1; i >= 0; i-- ){
                        if ( ( stringified.length - i ) % 3 == 0 ){
                            stringified = stringified.substring( 0, i ) + " " + stringified.substring( i, stringified.length );
                        }
                    }
                }
                return stringified;
            }
        }
    },
    methods: {
        //on load functions
        callEndpoint(url) {
            fetch(url).then(data => {
                return data.json();
            })
            .then(res => {
                this.products = res;
                this.activateFixer( res );
            })
        },
        fillProductsArray( products ) {
            this.productKeys = Object.keys( products );
            for ( let i = 0; i < this.productKeys.length; i++ ) {
                let event = products[ this.productKeys[ i ] ];
                if ( event.products ) {
                    let eventKeys = Object.keys( event.products );
                    event.products.marketing_and_sponsorships = [];
                    event.products.marketingItemCount = 0;
                    eventKeys.forEach(m => {
                        if ( m == "Workshop Sponsorship" ){
                            event.products.sponsorships = event.products[m];
                            let sponsorshipKeys = Object.keys(event.products.sponsorships);
                            sponsorshipKeys.forEach(n => {
                                if ( n == "Platinum Sponsorship  - Recognition as event sponsor" ) {
                                    event.products.sponsorships.platinum = event.products.sponsorships[n];
                                    event.products.sponsorships.platinum.price = this.setSponsorshipPackagePrice( event.Event_Name, "platinum" );
                                } else if ( n == "Gold Sponsorship  - Recognition as event sponsor" ) {
                                    event.products.sponsorships.gold = event.products.sponsorships[n];
                                    event.products.sponsorships.gold.price = this.setSponsorshipPackagePrice( event.Event_Name, "gold" );
                                } else if ( n == "Silver Sponsorship  - Recognition as event sponsor" ) {
                                    event.products.sponsorships.silver = event.products.sponsorships[n];
                                    event.products.sponsorships.silver.price = this.setSponsorshipPackagePrice( event.Event_Name, "silver" );
                                }
                            })
                        }
                        else {
                            if ( m == "Workshop Bag Inserts/Tags" ) {
                                let bagInserts = event.products[m];
                                bagInserts.title = m;
                                bagInserts.quantity = 0;
                                bagInserts.items = [];
                                let bagInsertKeys = Object.keys(bagInserts), item;
                                bagInsertKeys.forEach(n => {
                                    if (n == "Bag insert - non-paper (agent bag)") {
                                        item = bagInserts[n];
                                        item.category = m;
                                        item.quantity = 0;
                                        item.eventId = event.eventId;
                                        item.title = n;
                                        item.price = this.setSponsorshipPackagePrice( event.Event_Name, "non-paper-agent-bag");
                                        bagInserts.items.push(item);
                                    }
                                    else if (n == "Bag insert - non-paper  (educator bag)") {
                                        item = bagInserts[n];
                                        item.category = m;
                                        item.quantity = 0;
                                        item.eventId = event.eventId;
                                        item.title = n;
                                        item.price = this.setSponsorshipPackagePrice( event.Event_Name, "non-paper-edu-bag");
                                        bagInserts.items.push(item);
                                    }
                                    else if (n == "Bag insert - paper (agent bag)") {
                                        item = bagInserts[n];
                                        item.category = m;
                                        item.quantity = 0;
                                        item.eventId = event.eventId;
                                        item.title = n;
                                        item.price = this.setSponsorshipPackagePrice( event.Event_Name, "paper-agent-bag");
                                        bagInserts.items.push(item);
                                    }
                                    else if (n == "Bag insert - paper (educator bag)") {
                                        item = bagInserts[n];
                                        item.category = m;
                                        item.quantity = 0;
                                        item.eventId = event.eventId;
                                        item.title = n;
                                        item.price = this.setSponsorshipPackagePrice( event.Event_Name, "paper-edu-bag");
                                        bagInserts.items.push(item);
                                    }
                                    else if (n == "Bag tags (agent bags)") {
                                        item = bagInserts[n];
                                        item.category = m;
                                        item.quantity = 0;
                                        item.eventId = event.eventId;
                                        item.title = n;
                                        item.price = this.setSponsorshipPackagePrice( event.Event_Name, "bag-tags");
                                        bagInserts.items.push(item);
                                    }
                                    else if (n == "Bag tags (provider bags)") {
                                        item = bagInserts[n];
                                        item.category = m;
                                        item.quantity = 0;
                                        item.eventId = event.eventId;
                                        item.title = n;
                                        item.price = this.setSponsorshipPackagePrice( event.Event_Name, "bag-tags");
                                        bagInserts.items.push(item);
                                    }
                                })
                                event.products.marketing_and_sponsorships.push(bagInserts);
                            }
                            else if ( m == "Workshop Catalogue/Guide" ){
                                let catalogues = event.products[m];
                                catalogues.quantity = 0;
                                catalogues.title = m;
                                catalogues.items = [];
                                let catalogueKeys = Object.keys(catalogues), item;
                                catalogueKeys.forEach(n => {
                                    if (n == "Full page advertisement (agent)") {
                                        item = catalogues[n];
                                        item.category = m;
                                        item.quantity = 0;
                                        item.eventId = event.eventId;
                                        item.title = n;
                                        item.price = this.setSponsorshipPackagePrice( event.Event_Name, "full-page-ad");
                                        catalogues.items.push(item);
                                    }
                                    else if (n == "Full page advertisement (educator)") {
                                        item = catalogues[n];
                                        item.category = m;
                                        item.quantity = 0;
                                        item.eventId = event.eventId;
                                        item.title = n;
                                        item.price = this.setSponsorshipPackagePrice( event.Event_Name, "full-page-ad");
                                        catalogues.items.push(item);
                                    }
                                    else if (n == "Half page advertisement (agent)") {
                                        item = catalogues[n];
                                        item.category = m;
                                        item.quantity = 0;
                                        item.eventId = event.eventId;
                                        item.title = n;
                                        item.price = this.setSponsorshipPackagePrice( event.Event_Name, "half-page-ad");
                                        catalogues.items.push(item);
                                    }
                                    else if (n == "Half page advertisement (educator)") {
                                        item = catalogues[n];
                                        item.category = m;
                                        item.quantity = 0;
                                        item.eventId = event.eventId;
                                        item.title = n;
                                        item.price = this.setSponsorshipPackagePrice( event.Event_Name, "half-page-ad");
                                        catalogues.items.push(item);
                                    }
                                    else if (n == "Inside back cover (agent)") {
                                        item = catalogues[n];
                                        item.category = m;
                                        item.quantity = 0;
                                        item.eventId = event.eventId;
                                        item.title = n;
                                        item.price = this.setSponsorshipPackagePrice( event.Event_Name, "inside-back-cover");
                                        catalogues.items.push(item);
                                    }
                                    else if (n == "Inside back cover (educator)") {
                                        item = catalogues[n];
                                        item.category = m;
                                        item.quantity = 0;
                                        item.eventId = event.eventId;
                                        item.title = n;
                                        item.price = this.setSponsorshipPackagePrice( event.Event_Name, "inside-front-cover");
                                        catalogues.items.push(item);
                                    }
                                    else if (n == "Inside front cover (agent)") {
                                        item = catalogues[n];
                                        item.category = m;
                                        item.quantity = 0;
                                        item.eventId = event.eventId;
                                        item.title = n;
                                        item.price = this.setSponsorshipPackagePrice( event.Event_Name, "inside-front-cover");
                                        catalogues.items.push(item);
                                    }
                                    else if (n == "Inside front cover (educator)") {
                                        item = catalogues[n];
                                        item.quantity = 0;
                                        item.eventId = event.eventId;
                                        item.title = n;
                                        item.price = this.setSponsorshipPackagePrice( event.Event_Name, "inside-front-cover");
                                        catalogues.items.push(item);
                                    }
                                    else if (n == "Outside back cover (agent)") {
                                        item = catalogues[n];
                                        item.category = m;
                                        item.quantity = 0;
                                        item.eventId = event.eventId;
                                        item.title = n;
                                        item.price = this.setSponsorshipPackagePrice( event.Event_Name, "outside-back-cover");
                                        catalogues.items.push(item);
                                    }
                                    else if (n == "Outside back cover (educator)") {
                                        item = catalogues[n];
                                        item.category = m;
                                        item.quantity = 0;
                                        item.eventId = event.eventId;
                                        item.title = n;
                                        item.price = this.setSponsorshipPackagePrice( event.Event_Name, "outside-back-cover");
                                        catalogues.items.push(item);
                                    }
                                })
                                event.products.marketing_and_sponsorships.push(catalogues);
                            }
                            else if ( m == "Workshop Display Advertising" ) {
                                let displayAds = event.products[m];
                                displayAds.quantity = 0;
                                displayAds.title = m;
                                displayAds.items = [];
                                let displayAdKeys = Object.keys(displayAds), item;
                                displayAdKeys.forEach(n => {
                                    if (n == "Literature Display Rack") {
                                        item = displayAds[n];
                                        item.category = m;
                                        item.quantity = 0;
                                        item.eventId = event.eventId;
                                        item.title = n;
                                        item.price = this.setSponsorshipPackagePrice( event.Event_Name, "lit-display-rack");
                                        displayAds.items.push(item);
                                    }
                                })
                                event.products.marketing_and_sponsorships.push(displayAds);
                            }
                            else if ( m == "Workshop Lounges/Hub" ) {
                                let lounges = event.products[m];
                                lounges.quantity = 0;
                                lounges.title = m;
                                lounges.items = [];
                                let loungeKeys = Object.keys(lounges), item;
                                loungeKeys.forEach(n => {
                                    if (n == "Agent lounge in dedicated room") {
                                        item = lounges[n];
                                        item.category = m;
                                        item.quantity = 0;
                                        item.eventId = event.eventId;
                                        item.title = n;
                                        item.price = this.setSponsorshipPackagePrice( event.Event_Name, "dedicated-room-agent");
                                        lounges.items.push(item);
                                    }
                                })
                                event.products.marketing_and_sponsorships.push(lounges);
                            }
                            else if ( m == "Workshop Merchandising" ) {
                                let merchandising = event.products[m];
                                merchandising.quantity = 0;
                                merchandising.title = m;
                                merchandising.items = [];
                                let merchandisingKeys = Object.keys(merchandising), item;
                                merchandisingKeys.forEach(n => {
                                    if (n == "Hotel Key cards/sleeves") {
                                        item = merchandising[n];
                                        item.category = m;
                                        item.quantity = 0;
                                        item.eventId = event.eventId;
                                        item.title = n;
                                        item.price = this.setSponsorshipPackagePrice( event.Event_Name, "key-cards");
                                        merchandising.items.push(item);
                                    }
                                    else if (n == "Logo on catalogue USB sticks") {
                                        item = merchandising[n];
                                        item.category = m;
                                        item.quantity = 0;
                                        item.eventId = event.eventId;
                                        item.title = n;
                                        item.price = this.setSponsorshipPackagePrice( event.Event_Name, "usb-logos");
                                        merchandising.items.push(item);
                                    }
                                    else if (n == "Neck cords") {
                                        item = merchandising[n];
                                        item.category = m;
                                        item.quantity = 0;
                                        item.eventId = event.eventId;
                                        item.title = n;
                                        item.price = this.setSponsorshipPackagePrice( event.Event_Name, "neck-cords");
                                        merchandising.items.push(item);
                                    }
                                    else if (n == "Pens and note pads") {
                                        item = merchandising[n];
                                        item.category = m;
                                        item.quantity = 0;
                                        item.eventId = event.eventId;
                                        item.title = n;
                                        item.price = this.setSponsorshipPackagePrice( event.Event_Name, "note-pads");
                                        merchandising.items.push(item);
                                    }
                                })
                                event.products.marketing_and_sponsorships.push(merchandising);
                            }
                            else if ( m == "Workshop Receptions" ) {
                                let receptions = event.products[m];
                                receptions.quantity = 0;
                                receptions.title = m;
                                receptions.items = [];
                                let receptionKeys = Object.keys(receptions), item;
                                receptionKeys.forEach(n => {
                                    if (n == "Refreshment break sponsorship - Day 1") {
                                        item = receptions[n];
                                        item.category = m;
                                        item.quantity = 0;
                                        item.eventId = event.eventId;
                                        item.title = n;
                                        item.price = this.setSponsorshipPackagePrice( event.Event_Name, "refreshment-reception");
                                        receptions.items.push(item);
                                    }
                                    else if (n == "Refreshment break sponsorship - Day 2") {
                                        item = receptions[n];
                                        item.category = m;
                                        item.quantity = 0;
                                        item.eventId = event.eventId;
                                        item.title = n;
                                        item.price = this.setSponsorshipPackagePrice( event.Event_Name, "refreshment-reception");
                                        receptions.items.push(item);
                                    }
                                    else if (n == "Refreshment break sponsorship - Registration Day") {
                                        item = receptions[n];
                                        item.category = m;
                                        item.quantity = 0;
                                        item.eventId = event.eventId;
                                        item.title = n;
                                        item.price = this.setSponsorshipPackagePrice( event.Event_Name, "refreshment-reception");
                                        receptions.items.push(item);
                                    }
                                    else if (n == "Welcome reception sponsorship") {
                                        item = receptions[n];
                                        item.category = m;
                                        item.quantity = 0;
                                        item.eventId = event.eventId;
                                        item.title = n;
                                        item.price = this.setSponsorshipPackagePrice( event.Event_Name, "welcome-reception");
                                        receptions.items.push(item);
                                    }
                                    else if (n == "Workshop Dinner Reception sponsorship") {
                                        item = receptions[n];
                                        item.category = m;
                                        item.quantity = 0;
                                        item.eventId = event.eventId;
                                        item.title = n;
                                        item.price = this.setSponsorshipPackagePrice( event.Event_Name, "dinner-reception");
                                        receptions.items.push(item);
                                    }
                                    else if (n == "Workshop lunch sponsorship - Day 1") {
                                        item = receptions[n];
                                        item.category = m;
                                        item.quantity = 0;
                                        item.eventId = event.eventId;
                                        item.title = n;
                                        item.price = this.setSponsorshipPackagePrice( event.Event_Name, "lunch-reception");
                                        receptions.items.push(item);
                                    }
                                    else if (n == "Workshop lunch sponsorship - Day 2") {
                                        item = receptions[n];
                                        item.category = m;
                                        item.quantity = 0;
                                        item.eventId = event.eventId;
                                        item.title = n;
                                        item.price = this.setSponsorshipPackagePrice( event.Event_Name, "lunch-reception");
                                        receptions.items.push(item);
                                    }
                                })
                                event.products.marketing_and_sponsorships.push(receptions);
                            }
                        }
                    })
                }
                if ( this.currentCurrency !== event.form_edu_available_currency__c ) {
                    event = this.setCurrencyChange( event );
                }
                else event.currencyDisclaimer = '';
                event.tablesQuantity = 0;
                event.schedulesQuantity = 0;
                event.additionalPeopleQuantity = 0;

                event.incart = false;
                this.productsArray.push( event );
            }
            this.loaded = true;
        },
        activateFixer( ) {
            axios.get(
                'https://data.fixer.io/api/latest?access_key=2a8bbb1fd33e5a65dc1404de3d7bd38b&base='
                + this.currentCurrency)
            .then(response => {
                this.fixer = response.data;
                this.fixerRates = this.fixer.rates;

                if ( typeof fx !== "undefined " && fx.rates ) {
                    fx.rates = this.fixer.rates;
                    fx.base = this.fixer.base;
                }
                else {
                    var fxSetup = {
                        rates: this.fixer.rates,
                        base: this.fixer.base
                    };
                }
                this.fillProductsArray(this.products)
            });
        },
        setCurrencyChange( m ) {
            switch ( m.form_edu_available_currency__c ) {
                case 'AUD':
                    m.form_edu_rate_early_aud_1st__c = parseInt(
                        fx.convert(m.form_edu_rate_early_aud_1st__c, {  
                            from: m.form_edu_available_currency__c,
                            to: this.currentCurrency
                        }).toFixed());

                    m.form_edu_rate_early_aud_2nd__c = parseInt(
                        fx.convert(m.form_edu_rate_early_aud_2nd__c, {  
                            from: m.form_edu_available_currency__c,
                            to: this.currentCurrency
                        }).toFixed())

                    m.form_edu_rate_early_aud_acc__c = parseInt(
                        fx.convert(m.form_edu_rate_early_aud_acc__c, {  
                            from: m.form_edu_available_currency__c,
                            to: this.currentCurrency
                        }).toFixed())

                    m.form_edu_rate_regular_aud_1st__c = parseInt(
                        fx.convert(m.form_edu_rate_regular_aud_1st__c, {  
                            from: m.form_edu_available_currency__c,
                            to: this.currentCurrency
                        }).toFixed());

                    m.form_edu_rate_regular_aud_2nd__c = parseInt(
                        fx.convert(m.form_edu_rate_regular_aud_2nd__c, {  
                            from: m.form_edu_available_currency__c,
                            to: this.currentCurrency
                        }).toFixed());

                    m.form_edu_rate_regular_aud_acc__c = parseInt(
                        fx.convert(m.form_edu_rate_regular_aud_acc__c, {  
                            from: m.form_edu_available_currency__c,
                            to: this.currentCurrency
                        }).toFixed());

                    m.currencyDisclaimer = "Converted from AUD";
                    break;

                case 'USD;CAD':
                    if (m.form_edu_rate_early_usd_1st__c) {
                        m.form_edu_rate_early_usd_1st__c = parseInt(
                            fx.convert(m.form_edu_rate_regular_usd_1st__c, {  
                                from: "USD",
                                to: this.currentCurrency
                            }).toFixed());


                        m.form_edu_rate_early_usd_2nd__c = parseInt(
                            fx.convert(m.form_edu_rate_early_usd_2nd__c, {  
                                from: "USD",
                                to: this.currentCurrency
                            }).toFixed())
    
                        m.form_edu_rate_early_aud_acc__c = parseInt(
                            fx.convert(m.form_edu_rate_early_usd_acc__c, {  
                                from: "USD",
                                to: this.currentCurrency
                            }).toFixed())
    
                        m.form_edu_rate_regular_aud_1st__c = parseInt(
                            fx.convert(m.form_edu_rate_regular_usd_1st__c, {  
                                from: "USD",
                                to: this.currentCurrency
                            }).toFixed());
    
                        m.form_edu_rate_regular_aud_2nd__c = parseInt(
                            fx.convert(m.form_edu_rate_regular_usd_2nd__c, {  
                                from: "USD",
                                to: this.currentCurrency
                            }).toFixed());
    
                        m.form_edu_rate_regular_aud_acc__c = parseInt(
                            fx.convert(m.form_edu_rate_regular_usd_acc__c, {  
                                from: "USD",
                                to: this.currentCurrency
                            }).toFixed());

                        m.currencyDisclaimer = "Converted from USD;CAD";
                    }
                    break;

                case 'EUR':
                    m.form_edu_rate_early_eur_1st__c = parseInt(
                        fx.convert(m.form_edu_rate_regular_eur_1st__c, {  
                            from: m.form_edu_available_currency__c,
                            to: this.currentCurrency
                        }).toFixed());

                    m.form_edu_rate_regular_eur_2nd__c = parseInt(
                        fx.convert(m.form_edu_rate_early_eur_2nd__c, {  
                            from: m.form_edu_available_currency__c,
                            to: this.currentCurrency
                        }).toFixed())

                    m.form_edu_rate_early_eur_acc__c = parseInt(
                        fx.convert(m.form_edu_rate_early_eur_acc__c, {  
                            from: m.form_edu_available_currency__c,
                            to: this.currentCurrency
                        }).toFixed())

                    m.form_edu_rate_regular_eur_1st__c = parseInt(
                        fx.convert(m.form_edu_rate_regular_eur_1st__c, {  
                            from: m.form_edu_available_currency__c,
                            to: this.currentCurrency
                        }).toFixed());

                    m.form_edu_rate_regular_eur_2nd__c = parseInt(
                        fx.convert(m.form_edu_rate_regular_eur_2nd__c, {  
                            from: m.form_edu_available_currency__c,
                            to: this.currentCurrency
                        }).toFixed());

                    m.form_edu_rate_regular_eur_acc__c = parseInt(
                        fx.convert(m.form_edu_rate_regular_eur_acc__c, {  
                            from: m.form_edu_available_currency__c,
                            to: this.currentCurrency
                        }).toFixed());

                    m.currencyDisclaimer = "Converted from EUR";
                    
                    console.log(m);
            }
            return m;
        },
        setSponsorshipPackagePrice( eventTitle, item ) {
            let segmentedTitle = eventTitle.split(" "), event;
            if ( segmentedTitle.indexOf("Berlin") !== -1 ) {
                event = "Berlin";
            }
            else if ( segmentedTitle.indexOf("ANZA") !== -1 ) {
                event = "ANZA";
            }
            else event = "Other";
            switch( item ) {
                case ( "platinum" ):
                    return event == "Berlin" || event == "ANZA" ? 22000 : 16000;
                case ( "gold" ):
                    if (event == "Berlin") return 16000;
                    else if (event == "ANZA") return 14000;
                    else return 11000;
                case ( "silver" ):
                    if (event == "Berlin") return 10000;
                    else if (event == "ANZA") return 9000;
                    else return 8000;
                case ( "non-paper-agent-bag" ):
                case ( "non-paper-edu-bag" ):
                    return event == "Berlin" || event == "ANZA" ? 2200 : 1800;
                case ( "paper-agent-bag" ):
                case ( "paper-edu-bag" ):
                    return event == "Berlin" ? 1100 : 900;
                case ( "bag-tags" ):
                    if ( event == "Berlin" ) return 3800;
                    else if (event == "ANZA") return 2000;
                    else return 2200;
                case ( "full-page-ad" ):
                    if ( event == "Berlin" ) return 1400;
                    else if ( event == "ANZA" ) return 1700;
                    else return 1100;
                case ( "half-page-ad" ):
                    if ( event == "Berlin" ) return 950;
                    else if ( event == "ANZA" ) return 1150;
                    else return 750;
                case ( "inside-back-cover" ):
                case ( "inside-front-cover" ):
                    if ( event == "Berlin" ) return 240;
                    else if ( event == "ANZA" ) return 2000;
                    else return 1850;
                case ( "outside-back-cover" ):
                    return event == "Berlin" || event == "ANZA" ? 2900 : 2150;
                case ( "lit-display-rack" ):
                    if ( event == "Berlin" ) return 1300;
                    else if ( event == "ANZA" ) return 1200;
                    else return 1000;
                case ( "dedicated-room-agent" ):
                    if ( event == "Berlin" ) return 7600;
                    else if ( event == "ANZA" ) return 5000;
                    else return 5400;
                case ( "key-cards" ):
                    return event == "Berlin" ? 3800 : 3300;
                case ( "usb-logos" ):
                    if (event == "Berlin") return 2900;
                case ( "neck-cords" ):
                    return event == "Berlin" || event == "ANZA" ? 6500 : 3900;
                case ( "note-pads" ):
                    if ( event == "Berlin" ) return 3900;
                    else if ( event == "ANZA" ) return 2000;
                    else return 2300;
                case ( "refreshment-reception" ):
                    return event == "Berlin" || event == "ANZA" ? 4000 : 2500;
                case ( "welcome-reception" ):
                    if ( event == "Berlin" ) return 5000;
                    else if ( event == "ANZA" ) return 6000;
                    else return 3500;
                case ( "dinner-reception" ):
                    return event == "Berlin" || event == "ANZA" ? 9000 : 5000;
                case ( "lunch-reception" ):
                    return event == "Berlin" || event == "ANZA" ? 4000 : 2500;
            }
        },
        setBaseCurrency( baseCurrency ) {
            this.currentCurrency = baseCurrency;
            switch( baseCurrency ){
                case 'EUR':
                    this.currencySymbol = "€";
                    break;
                case 'GBP':
                    this.currencySymbol = "£";
                    break;
                case 'USD':
                    this.currencySymbol = "$";
                    break;
                case 'CAD':
                    this.currencySymbol = "$";
                    break;
                case 'AUD':
                    this.currencySymbol = "$";
            }
            if ( this.productsArray.length ) {
                console.log("Refilling array!")
                this.productsArray = [];
                this.fillProductsArray(this.products);
            }
            
        },
        // push a table to the cart and update our price accordingly
        addToCart: function (product) {
            let cartitem, schedulePrice, addPeoplePrice;
            cartitem = {
                name: product.Event_Name + " Table"
            };
            cartitem.quantity = 1;
            cartitem.eventId = product.eventId;
            switch( product.form_edu_available_currency__c ) {
                case 'EUR':
                    cartitem.price = parseInt(product.form_edu_rate_regular_eur_1st__c); 
                    schedulePrice = parseInt(product.form_edu_rate_regular_eur_2nd__c);
                    addPeoplePrice = parseInt(product.form_edu_rate_regular_eur_acc__c);
                    break;
                case 'AUD':
                    cartitem.price = parseInt(product.form_edu_rate_regular_aud_1st__c); 
                    schedulePrice = parseInt(product.form_edu_rate_regular_aud_2nd__c);
                    addPeoplePrice = parseInt(product.form_edu_rate_regular_aud_acc__c);
                    break;
                case 'USD;CAD':
                    cartitem.price = parseInt(product.form_edu_rate_regular_usd_1st__c); 
                    schedulePrice = parseInt(product.form_edu_rate_regular_usd_2nd__c);
                    addPeoplePrice = parseInt(product.form_edu_rate_regular_usd_acc__c);
            }
            cartitem.schedules = {
                eventId: product.eventId,
                defaultCurrency: product.form_edu_available_currency__c,
                name: product.Event_Name + " Schedule",
                price: schedulePrice,
                quantity: 0
            }
            cartitem.additionalPeople = {
                eventId: product.eventId,
                defaultCurrency: product.form_edu_available_currency__c,
                name: product.Event_Name + " Additional People",
                price: addPeoplePrice,
                quantity: 0
            }
            cartitem.products = [];
            this.regularWorkshops++;
            // product.incart = true;
            this.earlyRates = false; //remove possibility of early bird rates from other events in products
            if ( product.form_edu_early_rate_active__c && 1 == this.regularWorkshops ){ //EARLYBIRD check... should skip first if if more than one event selected but reset previously added workshops to regular rate.. awkward
                product.selectedearly = true;
                cartitem.price = parseInt(product.form_edu_rate_early_eur_1st__c); 
                this.earlytotal += cartitem.price;
            } else {
                this.earlytotal = 0;
                if ( this.regularWorkshops > 1 ) {
                    this.productsArray.forEach(m => {
                        if ( m.selectedearly ) m.endofearly = true;
                    });
                }
            } //log price of subitem and assign it to copy's price
            this.cart.unshift( cartitem ); //push copy of product into cart
            console.log("Cartitem: ", cartitem);
            this.total += cartitem.price;
            product.tablesQuantity++;
            product.incart = true;
            switch ( this.regularWorkshops ) {
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
            if ( this.regularWorkshops == 2 ){
                this.cart.forEach(m => {
                    if ( m.selectedearly ) m.price = m.originalprice;
                });
                this.total = this.cart.reduce( ( a, b ) => a.price + b.price );
            }
            // subitem.quantity++;
            // cartitem.quantity++;
        },
        // remove the existence of a given workshop from the cart
        absoluteRemoveFromCart: function (product, selector) {
            if (selector == 'events'){
                while ( product.additionalPeopleQuantity > 0 ){
                    // this.subitemtotal -= product.additionalPeople.price;
                    product.additionalPeopleQuantity--;
                }
                while ( product.wtScheduleQuantity > 0 ){
                    // this.subitemtotal -= product.schedules.price;
                    product.wtScheduleQuantity--;
                }
                product.incart = false;
            }
            else {
                this.productsArray.forEach(m => {
                    if (m.eventId == product.eventId) {
                        m.incart = false;
                    }
                })
            }
            let cartIds = this.cart.map( m => m.eventId );
            var position = cartIds.indexOf( product.eventId );
            let cartEq = this.cart[position];
            console.log(cartEq)
            while ( this.cart[position].quantity > 0 ){ //process by which tables are removed and price deduction is applied step by step
                if ( this.cart[position].selectedearly ) this.earlytotal -= cartEq.priceearly;
                else this.total -= cartEq.price;
                this.cart[position].quantity--;
            }
            this.cart.splice( position, 1 );
            this.regularWorkshops--;
            // switch( this.regularWorkshops ){
            //     case 0:
            //         this.discount = 1;
            //         this.products.forEach(m => {
            //             if ( m.selectedearly ) m.selectedearly = false;
            //             this.earlyRates = true;
            //         });
            //         break;
            //     case 1:
            //         this.discount = 1; //resetting this.discount;
            //         this.products.forEach(m => {
            //             if ( m.selectedearly && m.endofearly ){
            //                 m.endofearly = false;
            //             }
            //         });
            //         this.cart[0].price = this.cart[0].priceearly;
            //         this.cart[0].endofearly = false;
            //         this.total = this.cart[0].price; //+ this.subitemtotal;
            //         break;
            //     case 2:
            //         this.discount = 0.82;
            //         break;
            //     case 3:
            //         this.discount = 0.8;
            //         break;
            //     case 4:
            //         this.discount = 0.77;
            //         break;
            //     case 5:
            //         this.discount = 0.75;
            //         break;
            //     default:
            //         this.discount = 0.73;
            // }
        },
        // add a table for an event to the cart - used in opened events panel after addToCart has been invoked for an event
        addTable(product) {
            product.tablesQuantity++;
            this.cart.forEach(m => {
                if ( m.eventId == product.eventId ){
                    m.quantity++;
                    if ( m.selectedearly ) this.earlytotal += m.price;
                    this.total += m.price;
                }
            });
        },
        // remove a table from cart - accessed via the minus sign - triggers absoluteRemoveFromCart if the last table for an event has been removed
        removeTable: function (product) {
            product.tablesQuantity--;
            if ( product.tablesQuantity == 0 ){
                this.absoluteRemoveFromCart(product, 'events');
            }
            else {
                this.cart.forEach(m => {
                    if ( m.eventId == product.eventId ) {
                        m.quantity--;
                        this.total -= m.price;
                    }
                })
            }
        },
        // adds either an extra schedule, an additional person or a subscription package for an event
        addSubItem( product, selector, tier ) {
            if ( selector == 'schedules' ) {
                if (product.schedulesQuantity >= product.tablesQuantity) return;
                else {
                    product.schedulesQuantity++;
                    this.cart.forEach(m => {
                        if ( m.eventId == product.eventId ){
                            m.schedules.quantity++;
                            this.subitemtotal += m.schedules.price;
                            return;
                        }
                    })
                    
                }
            }
            else if (selector == 'add_people') {
                product.additionalPeopleQuantity++;
                this.cart.forEach(m => {
                    if ( m.eventId == product.eventId ){
                        m.additionalPeople.quantity++;
                        this.subitemtotal += m.additionalPeople.price;
                        return;
                    }
                })
                
            } 
            else if ( selector == 'sponsorship_package' ){
                product.tables.sponsorshipPackageSelected = true;
                this.cart.forEach(m => {
                    if ( m.id == product.id ){
                        if ( m.sponsorshipPackageSelected ) {
                            this.subitemtotal -= m.sponsorship_package.price;
                            m.sponsorship_package.quantity--;
                            switch( tier ){
                                case 'platinum':
                                    product.tables.sponsorships.gold.quantity = 0;
                                    product.tables.sponsorships.silver.quantity = 0;
                                    break;
                                case 'gold':
                                    product.tables.sponsorships.platinum.quantity = 0;
                                    product.tables.sponsorships.silver.quantity = 0;
                                    break;
                                case 'silver':
                                    product.tables.sponsorships.platinum.quantity = 0;
                                    product.tables.sponsorships.gold.quantity = 0;
                                    break;
                            }
                        }
                        else this.total -= m.price;
                        m.sponsorshipPackageSelected = true;
                        m.sponsorship_package.name = subitem.name;
                        m.sponsorship_package.price = subitem.price;
                        m.sponsorship_package.quantity = subitem.quantity + 1;
                        this.earlytotal = 0;
                    }
                });
            }
        },
        addMarketingItem(product, item) {
            let productItem = {
                name: product.Event_Name + " " + item.title,
                price: item.price,
                eventId: item.eventId,
                quantity: 1
            }
            this.cart.forEach(m => {
                if (m.eventId == productItem.eventId) {
                    m.products.push(productItem);
                    console.log(m.products);
                }
            })
            this.total += item.price;
        },
        removeMarketingItem(product, item){

        },
        // removes either a sponsorship package, an additional schedule or an additional person for an event
        removeSubItem(product, selector) {
            if ( selector == 'schedules' ) {
                product.schedulesQuantity--;
                this.cart.forEach(m => {
                    if ( m.eventId == product.eventId ) {
                        m.schedules.quantity--;
                        this.subitemtotal -= m.schedules.price;
                        return;
                    }
                })
            }
            else if ( selector == 'add_people' ) {
                product.additionalPeopleQuantity--;
                this.cart.forEach(m => {
                    if ( m.eventId == product.eventId ) {
                        m.additionalPeople.quantity--;
                        this.subitemtotal -= m.additionalPeople.price;
                        return;
                    }
                })
            }
            else if ( selector == 'sponsorship_package' ) {
                this.cart.forEach(m => {
                    if ( m.id == product.id ){
                        m.sponsorshipPackageSelected = false;
                        if ( m.earlyrateselected ) this.earlytotal += m.priceearly;
                        else this.total += m.price;
                    }
                })
            }
            // if ( selector == 'schedules' ){
            //     this.cart.forEach(m => {
            //         if ( m.id == product.id ) {
            //             m.quantity = Math.floor( ( subitem.quantity / 2 )+1 );
            //             if ( subitem.quantity == 1 || subitem.quantity == 0 ) m.quantity = 1;
            //             if ( subitem.quantity !== 0 ) this.subitemtotal -= m.price;
            //         }
            //     });
            //     if ( this.cart.length == 1 && this.cart[0].selectedearly ) {
            //         this.cart[0].price = this.cart[0].priceearly;
            //     }
            // }
        },
        // add a booth to the cart
        addBoothToCart(product, subitem){
            this.cart.forEach(m => {
                if ( m.booths && m.id == product.id ){
                    this.total -= m.price;
                    this.cart = this.cart.filter(n => n.id !== m.id);
                }
                if ( m.notify ){
                    this.cart = this.cart.filter(n => !n.notify);
                }
            })
            if ( product.booths.booths ){
                if ( product.booths.large12 ) product.booths.large12.selected = false;
                if ( product.booths.large10 ) product.booths.large10.selected = false;
                if ( product.booths.medium8 ) product.booths.medium8.selected = false;
                if ( product.booths.medium6 ) product.booths.medium6.selected = false;
                if ( product.booths.std5 ) product.booths.std5.selected = false;
                if ( product.booths.std4 ) product.booths.std4.selected = false;
                if ( product.booths.std3 ) product.booths.std3.selected = false;
                if ( product.booths.displaytable ) product.booths.displaytable.selected = false;
            }
            subitem.selected = true; 
            product.booths.booths = true;
            product.booths.quantity++;
            product.booths.name = subitem.name;
            product.booths.price = subitem.price;
            cartitem = Object.assign( {}, product.booths );
            this.cart.unshift( cartitem );
            this.total += cartitem.price;
        },
        // remove a booth from the cart
        removeBoothFromCart( booth, selector ){
            if ( selector == 'events' ) { //
                this.cart.forEach(m => {
                    if ( m.id == booth.id ){
                        this.total -= m.price;
                        return;
                    }
                })
            }
            else {
                if ( booth.price ) this.total -= booth.price;
            } //for when we're removing booths from 'remove' buttons next to booth rows
            this.products.forEach(m => {
                if ( m.id == booth.id ){
                    m.booths.quantity = 0;
                    m.selectBoothBoolean = false;
                }
            })
            booth.quantity--;
            this.cart = this.cart.filter( m => m.id !== booth.id && !m.notify );
        },
        // add an advert to the cart
        addAdvert( subitem ){
            cartitem = Object.assign( {}, subitem );
            cartitem.quantity++;
            this.cart.unshift( cartitem );
            this.total += cartitem.price;
            this.advertModal = false;
        },
        // remove an advert from the cart
        removeAdvert(advert){
            this.total -= advert.price;
            this.cart = this.cart.filter( m => m.name !== advert.name );
        },
        // we exit the calculator screen and go into checkout
        gotoCheckout() {
            document.getElementById("cart-bottom-screen").style.display = "none";
            // this.selectedWorkshops will be listed in the checkout screen in blocks containing the titles of each workshop you've indicated you're attending
            this.cart.forEach(m => {
                if ( m.sponsorshipPackageSelected ) {
                    this.selectedWorkshops.push( m.sponsorship_package.name );
                }
                else this.selectedWorkshops.push( m.name );

                if ( m.schedules && m.schedules.quantity > 0 ) {
                    this.selectedWorkshops.push( m.schedules.name );
                }
                if ( m.additionalPeople && m.additionalPeople.quantity > 0 ) {
                    this.selectedWorkshops.push( m.additionalPeople.name )
                }
            })

            this.checkout = true;

            document.getElementById("main-wrapper").style.display = "none";
            document.getElementById("checkout").style.display = "block";
        },
        // we return to the calculator screen from checkout (if we want to add a new item etc.)
        goBackFromCheckout() {
            this.selectedWorkshops = [];
            this.checkout = false;

            document.getElementById("main-wrapper").style.display = "block";
            document.getElementById("checkout").style.display = "none";
            document.getElementById("cart-bottom-screen").style.display = "block";
            document.getElementById("cart-bottom-screen").style.height = "10%";
        },
        //we allow a user to start adding exhibition booths to the cart instead of our regular products
        changeMode() {
            this.attendBooths = !this.attendBooths;
        },
        expandFooter(){
            this.footerExpanded = !this.footerExpanded;
            document.getElementById("bottom-fade").style.display = this.footerExpanded ? "none" : "block"; 
        },
        closeAdvertModal() {
            this.advertModal = false;
        },
        showBoothOptions( product ) {
            product.selectBoothBoolean = true;
            if ( product.booths.priceOnly ) {
                this.addBoothToCart( product, product.booths.displaytable );
            }
            if ( this.cart.length == 0 ){
                let empty = {
                    booths: true,
                    notify: true,
                    id: product.id,
                    name: '',
                    price: '',
                    quantity: ''
                };
                this.cart.unshift( empty );
            }
        },
        // we convert all price values to the selected currency
        changeBaseCurrency() {
            this.setBaseCurrency( event.target.innerText );
        },
        // this doesn't fulfill a function beyond switching out of the checkout screen yet
        confirmQuote(){
            document.getElementById("checkout").style.display = "none";
            document.getElementById("post-checkout").style.display = "block";
        },
    },
    beforeMount(){
        this.callEndpoint( this.endpoint );
        this.setBaseCurrency( this.defaultCurrency );
    },
    mounted(){
    }
})