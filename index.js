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
        products: [
        //ANZA
        {
            id: 1,
            name: "ANZA",
            priceearly: 5600, //for when early bird rates apply
            originalpriceearly: 5600, //original early bird price - used for when we're converting figures back to their base price
            selectedearly: false, //will activate a message letting the user know that he's getting the workshop at a discount
            endofearly: false, //will let user know that early bird rates no longer apply (if another regular workshop has been selected, e.g.)
            price: 6900, //regular price
            originalprice: 6900, //for conversions back to the item's base currency
            currency: "AUD", //base currency
            description: "ANZA Workshop description text goes here", //not used yet
            earlybirdends: 20180831, //date in YYYY-MM-DD straight numeric format 
            earlyRate: false, //we check whether it's eligible for early bird rates
            incart: 0, 
            quantity: 0,
            subtotal: 0,
            selectBoothBoolean: false,
            boothselected: false,
            workandtravel: true, //for work and travel accounts - an alternative kind of workshop
            tables: {
                id: 1,
                name: "ANZA Table",
                discount: 1, //1 means there is no discount applied
                price: 6900,
                originalprice: 6900,
                priceearly: 5600,
                originalpriceearly: 5600,
                quantity: 0,
                sponsorshipPackageSelected: false,
                schedules: {
                    id: 1,
                    name: "ANZA Additional Schedule",
                    quantity: 0,
                    price: 2400,
                    originalprice: 2400,
                },
                additionalPeople: {
                    id: 1,
                    name: "ANZA Additional Person",
                    quantity: 0,
                    price: 990,
                    originalprice: 990,
                },
                sponsorships: {
                    platinum: {
                        id: 1,
                        name: "ANZA Platinum Sponsorship Package",
                        price: 22000,
                        originalprice: 22000,
                        quantity: 0,
                        sponsorshipPackage: true
                    },
                    gold: {
                        id: 1,
                        name: "ANZA Gold Sponsorship Package",
                        price: 14000,
                        originalprice: 14000,
                        quantity: 0,
                        sponsorshipPackage: true
                    },
                    silver: {
                        id: 1,
                        name: "ANZA Silver Sponsorship Package",
                        price: 9000,
                        originalprice: 9000,
                        quantity: 0,
                        sponsorshipPackage: true
                    },
                },
                sponsorship_package: {
                    tier: '',
                    name: '',
                    price: 0,
                    quantity: 0
                },
                marketing_and_sponsorships: [
                    {
                        id: 1,
                        name: 'Advertisement in Educator/Agent Catalogue',
                        types: [
                            {
                                name: 'Inside cover',
                                price: 2000,
                                originalprice: 2000,
                                quantity: 0,
                            },
                            {
                                name: 'Outside cover',
                                price: 2900,
                                originalprice: 2900,
                                quantity: 0
                            },
                            {
                                name: 'Full page',
                                price: 1700,
                                originalprice: 1700,
                                quantity: 0
                            },
                            {
                                name: 'Half page',
                                price: 1100,
                                originalprice: 1100,
                                quantity: 0
                            }
                        ]
                    },
                    {
                        id: 1,
                        name: "Display advertising",
                        types: [
                            {
                                name: 'Literature Display Rack',
                                price: 1200,
                                originalprice: 1200,
                                quantity: 0
                            }
                        ]
                    },
                    {
                        id: 1,
                        name: "Merchandise Sponsorship",
                        types: [
                            {
                                name: 'Note pads',
                                price: 2000,
                                originalprice: 2000,
                                quantity: 0
                            },
                            {
                                name: 'Pens',
                                price: 2000,
                                originalprice: 2000,
                                quantity: 0
                            },
                            {
                                name: 'Bag insert - paper',
                                price: 900,
                                originalprice: 900,
                                quantity: 0
                            },
                            {
                                name: 'Bag insert - paper',
                                price: 2200,
                                originalprice: 2200,
                                quantity: 0
                            },
                            {
                                name: 'Bag tags',
                                price: 2000,
                                originalprice: 2000,
                                quantity: 0
                            },
                            {
                                name: 'Key card sleeves',
                                price: 3300,
                                originalprice: 3300,
                                quantity: 0
                            },
                            {
                                name: 'Neck cords',
                                price: 6500,
                                originalprice: 6500,
                                quantity: 0
                            },
                        ]
                    },
                    {
                        id: 1,
                        name: "Hospitality Sponsorship",
                        types: [
                            {
                                name: 'Coffee & tea break',
                                price: 4000,
                                originalprice: 4000,
                                quantity: 0
                            },
                            {
                                name: 'Lunch',
                                price: 4000,
                                originalprice: 4000,
                                quantity: 0
                            },
                            {
                                name: 'Welcome reception',
                                price: 6000,
                                originalprice: 6000,
                                quantity: 0
                            },
                            {
                                name: 'Dinner reception',
                                price: 9000,
                                originalprice: 9000,
                                quantity: 0
                            }
                        ]
                    },
                    {
                        id: 1,
                        name: "Services Sponsorship",
                        types: [
                            {
                                name: 'Internet hub',
                                price: 3000,
                                originalprice: 3000,
                                quantity: 0
                            },
                            {
                                name: 'Wireless internet service',
                                price: 2000,
                                originalprice: 2000,
                                quantity: 0
                            },
                            {
                                name: 'Agent hotel room drop',
                                price: 4000,
                                originalprice: 4000,
                                quantity: 0
                            },
                            {
                                name: 'Agent lounge - dedicated room',
                                price: 5000,
                                originalprice: 5000,
                                quantity: 0
                            },
                        ]
                    },
                    // {
                    //     id: 1,
                    //     name: "Presentations",
                    //     types: [
                    //         // {
                    //         //     name: '50 minute slot',
                    //         //     price: 690,
                    //         //     originalprice: 2400,
                    //         //     quantity: 0
                    //         // },
                    //         // {
                    //         //     name: '25 minute slot',
                    //         //     price: 490,
                    //         //     originalprice: 2400,
                    //         //     quantity: 0
                    //         // },
                    //     ]
                    // },
                ]
            },
            booths: {
                id: 1,
                quantity: 0,
                name: '',
                description: '',
                priceLowest: 4500,
                originalPriceLowest: 4500,
                priceHighest: 10500,
                originalPriceHighest: 10500,
                large12: {
                    id: 1,
                    name: "ANZA Exhibition Booth 12m²",
                    quantity: 0,
                    price: 10500,
                    originalprice: 10500,
                    description: "Includes 2 people & 2 schedules"
                },
                medium8: {
                    id: 1,
                    name: "ANZA Exhibition Booth 8m²",
                    quantity: 0,
                    price: 7500,
                    originalprice: 7500,
                    description: "Includes 1 people & 1 schedule"
                },
                medium6: {
                    id: 1,
                    name: "ANZA Exhibition Booth 6m²",
                    quantity: 0,
                    price: 5500,
                    originalprice: 5500,
                    description: "Includes 1 people & 1 schedule"
                },
                std4: {
                    id: 1,
                    name: "ANZA Exhibition Booth 4m²",
                    quantity: 0,
                    price: 4500,
                    originalprice: 4500,
                    description: "Includes 1 people & 1 schedule"
                }
            },
            work_and_travel: {
                id: 1,
                name: "ANZA Work and Travel",
                price: 6900,
                originalprice: 6900,
                quantity: 0,
                schedules: {
                    id: 1,
                    name: "ANZA Work and Travel Schedule",
                    quantity: 0,
                    price: 2400,
                    originalprice: 2400,
                },
                additionalPeople: {
                    id: 1,
                    name: "ANZA Work and Travel Additional Person",
                    quantity: 0,
                    price: 900,
                    originalprice: 2400,
                },
            },
        },
        //Berlin
        {
            id: 2,
            name: "Berlin",
            priceearly: 3900,
            originalpriceearly: 3900,
            selectedearly: false,
            endofearly: false,
            price: 4400,
            originalprice: 4400,
            currency: "EUR",
            description: "Berlin Workshop description text goes here",
            earlybirdends: 20180331,
            earlyRate: false,
            incart: 0,
            quantity: 0,
            subtotal: 0,
            selectBoothBoolean: false,
            workandtravel: true,
            tables: {
                id: 2,
                name: "Berlin Table",
                discount: 1,
                price: 4400,
                originalprice: 4400,
                priceearly: 3900,
                originalpriceearly: 3900,
                sponsorshipPackageSelected: false,
                quantity: 0,
                schedules: {
                    id: 2,
                    name: "Berlin Additional Schedule",
                    quantity: 0,
                    price: 2400,
                    originalprice: 2400,
                },
                additionalPeople: {
                    id: 2,
                    name: "Berlin Additional Person",
                    quantity: 0,
                    price: 990,
                    originalprice: 990,
                },
                sponsorships: {
                    platinum: {
                        id: 2,
                        name: "Berlin Platinum Sponsorship Package",
                        price: 22000,
                        originalprice: 22000,
                        quantity: 0,
                        sponsorshipPackage: true
                    },
                    gold: {
                        id: 2,
                        name: "Berlin Gold Sponsorship Package",
                        price: 16000,
                        originalprice: 16000,
                        quantity: 0,
                        sponsorshipPackage: true
                    },
                    silver: {
                        id: 2,
                        name: "Berlin Silver Sponsorship Package",
                        price: 10000,
                        originalprice: 10000,
                        quantity: 0,
                        sponsorshipPackage: true
                    },
                },
                sponsorship_package: {
                    tier: '',
                    name: '',
                    price: 0,
                    quantity: 0
                },
                marketing_and_sponsorships: [
                    {
                        id: 2,
                        name: 'Advertisement in Educator/Agent Catalogue',
                        types: [{
                                name: 'Inside cover',
                                price: 2400,
                                originalprice: 2400,
                                quantity: 0
                            },
                            {
                                name: 'Outside cover',
                                price: 2900,
                                originalprice: 2900,
                                quantity: 0
                            },
                            {
                                name: 'Full page',
                                price: 1400,
                                originalprice: 1400,
                                quantity: 0
                            },
                            {
                                name: 'Half page',
                                price: 950,
                                originalprice: 950,
                                quantity: 0
                            }
                        ]
                    },
                    {
                        id: 2,
                        name: "Display advertising",
                        types: [{
                                name: 'Lift doors',
                                price: 6000,
                                originalprice: 6000,
                                quantity: 0
                            },
                            {
                                name: 'Intro-Point Sponsorship',
                                price: 2200,
                                originalprice: 2200,
                                quantity: 0,
                            },
                            {
                                name: 'Advertising Panel',
                                price: 1700,
                                originalprice: 1700,
                                quantity: 0
                            },
                            {
                                name: 'Literature Display Rack',
                                price: 1300,
                                originalprice: 1700,
                                quantity: 0
                            }
                        ]
                    },
                    {
                        id: 2,
                        name: "Merchandise Sponsorship",
                        types: [{
                                name: 'Note pads',
                                price: 3200,
                                originalprice: 3200,
                                quantity: 0
                            },
                            {
                                name: 'Pens',
                                price: 3900,
                                originalprice: 3900,
                                quantity: 0
                            },
                            {
                                name: 'Bag insert - paper',
                                price: 1100,
                                originalprice: 1100,
                                quantity: 0
                            },
                            {
                                name: 'Bag insert - paper',
                                price: 2200,
                                originalprice: 2200,
                                quantity: 0
                            },
                            {
                                name: 'Bag tags',
                                price: 3800,
                                originalprice: 3800,
                                quantity: 0
                            },
                            {
                                name: 'Catalogue USB Memory cards',
                                price: 2900,
                                originalprice: 2900,
                                quantity: 0
                            },
                            {
                                name: 'Key card sleeves',
                                price: 3800,
                                originalprice: 3800,
                                quantity: 0
                            },
                            {
                                name: 'Neck cords',
                                price: 6500,
                                originalprice: 6500,
                                quantity: 0
                            },
                        ]
                    },
                    {
                        id: 2,
                        name: "Hospitality Sponsorship",
                        types: [{
                                name: 'Coffee & tea break',
                                price: 4000,
                                originalprice: 4000,
                                quantity: 0
                            },
                            {
                                name: 'Lunch',
                                price: 4000,
                                originalprice: 4000,
                                quantity: 0
                            },
                            {
                                name: 'Welcome reception',
                                price: 5000,
                                originalprice: 5000,
                                quantity: 0
                            },
                            {
                                name: 'Dinner reception',
                                price: 9000,
                                originalprice: 9000,
                                quantity: 0
                            }
                        ]
                    },
                    {
                        id: 2,
                        name: "Services Sponsorship",
                        types: [{
                                name: 'Internet hub',
                                price: 5400,
                                originalprice: 5400,
                                quantity: 0
                            },
                            {
                                name: 'Wireless internet service',
                                price: 5400,
                                originalprice: 5400,
                                quantity: 0
                            },
                            {
                                name: 'Agent hotel room drop',
                                price: 4900,
                                originalprice: 4900,
                                quantity: 0
                            },
                            {
                                name: 'Agent lounge - dedicated room',
                                price: 7600,
                                originalprice: 7600,
                                quantity: 0
                            },
                            {
                                name: 'Registration - agents',
                                price: 3500,
                                originalprice: 3500,
                                quantity: 0
                            },
                            {
                                name: 'Registration - providers',
                                price: 2400,
                                originalprice: 2400,
                                quantity: 0
                            },
                            {
                                name: 'Registration - both',
                                price: 5300,
                                originalprice: 5300,
                                quantity: 0
                            },
                        ]
                    },
                    {
                        id: 2,
                        name: "Presentations",
                        types: [{
                                name: '50 minute slot',
                                price: 690,
                                originalprice: 690,
                                quantity: 0
                            },
                            {
                                name: '25 minute slot',
                                price: 490,
                                originalprice: 490,
                                quantity: 0
                            },
                        ]
                    },
                ]
            },
            booths: {
                id: 2,
                quantity: 0,
                price: 0,
                name: '',
                description: '',
                priceHighest: 12000,
                originalPriceHighest: 12000,
                priceLowest: 4400,
                originalPriceLowest: 4400,
                large12: {
                    id: 2,
                    name: "Berlin Exhibition Booth 12m²",
                    quantity: 0,
                    price: 12000,
                    originalprice: 12000,
                    description: "Includes 2 people & 2 schedules"
                },
                large10: {
                    id: 2,
                    name: "Berlin Exhibition Booth 10m²",
                    quantity: 0,
                    price: 9000,
                    originalprice: 9000,
                    description: "Includes 2 people & 2 schedules"
                },
                medium8: {
                    id: 2,
                    name: "Berlin Exhibition Booth 8m²",
                    quantity: 0,
                    price: 8000,
                    originalprice: 8000,
                    description: "Includes 1 people & 1 schedule"
                },
                medium6: {
                    id: 2,
                    name: "Berlin Exhibition Booth 6m²",
                    quantity: 0,
                    price: 6000,
                    originalprice: 6000,
                    description: "Includes 1 people & 1 schedule"
                },
                std5: {
                    id: 2,
                    name: "Berlin Exhibition Booth 4.5m²",
                    quantity: 0,
                    price: 5500,
                    originalprice: 5500,
                    description: "Includes 1 people & 1 schedule"
                },
                std4: {
                    id: 2,
                    name: "Berlin Exhibition Booth 4m²",
                    quantity: 0,
                    price: 5000,
                    originalprice: 5000,
                    description: "Includes 1 people & 1 schedule"
                },
                std3: {
                    id: 2,
                    name: "Berlin Exhibition Booth 3m²",
                    quantity: 0,
                    price: 4400,
                    originalprice: 4400,
                    description: "Includes 1 people & 1 schedule"
                }
            },
            additional: []
        },
        //Beijing
        {
            id: 3,
            name: "Beijing",
            price: 4400,
            originalprice: 4400,
            priceearly: 3900,
            originalpriceearly: 3900,
            selectedearly: false,
            endofearly: false,
            currency: "EUR",
            description: "Beijing Workshop description text goes here",
            earlybirdends: 20180331,
            earlyRate: false,
            incart: 0,
            quantity: 0,
            subtotal: 0,
            selectBoothBoolean: false,
            sponsorshipPackageSelected: false,
            workandtravel: false,
            tables: {
                id: 3,
                name: "Beijing Table",
                discount: 1,
                price: 4400,
                originalprice: 4400,
                priceearly: 3900,
                originalpriceearly: 3900,
                quantity: 0,
                schedules: {
                    id: 3,
                    name: "Beijing Additional Schedule",
                    discount: 1,
                    quantity: 0,
                    price: 2400,
                    originalprice: 2400,
                },
                additionalPeople: {
                    id: 3,
                    name: "Beijing Additional Person",
                    discount: 1,
                    quantity: 0,
                    price: 990,
                    originalprice: 990,
                },
                sponsorships: {
                    platinum: {
                        id: 3,
                        name: "Beijing Platinum Sponsorship Package",
                        price: 16000,
                        originalprice: 16000,
                        quantity: 0,
                        sponsorshipPackage: true
                    },
                    gold: {
                        id: 3,
                        name: "Beijing Gold Sponsorship Package",
                        price: 11000,
                        originalprice: 11000,
                        quantity: 0,
                        sponsorshipPackage: true
                    },
                    silver: {
                        id: 3,
                        name: "Beijing Silver Sponsorship Package",
                        price: 8000,
                        originalprice: 8000,
                        quantity: 0,
                        sponsorshipPackage: true
                    },
                },
                sponsorship_package: {
                    tier: '',
                    name: '',
                    price: 0,
                    quantity: 0
                },
                marketing_and_sponsorships: [
                    {
                        id: 3,
                        name: 'Advertisement in Educator/Agent Catalogue',
                        types: [{
                                name: 'Inside cover',
                                price: 1850,
                                originalprice: 1850,
                                quantity: 0
                            },
                            {
                                name: 'Outside cover',
                                price: 2150,
                                originalprice: 2150,
                                quantity: 0
                            },
                            {
                                name: 'Full page',
                                price: 1100,
                                originalprice: 1100,
                                quantity: 0
                            },
                            {
                                name: 'Half page',
                                price: 750,
                                originalprice: 750,
                                quantity: 0
                            }
                        ]
                    },
                    {
                        id: 3,
                        name: "Display advertising",
                        types: [
                            {
                                name: 'Literature Display Rack',
                                price: 1000,
                                originalprice: 1000,
                                quantity: 0
                            }
                        ]
                    },
                    {
                        id: 3,
                        name: "Merchandise Sponsorship",
                        types: [{
                                name: 'Note pads',
                                price: 1700,
                                originalprice: 1700,
                                quantity: 0
                            },
                            {
                                name: 'Pens',
                                price: 2300,
                                originalprice: 2300,
                                quantity: 0
                            },
                            {
                                name: 'Bag insert - paper',
                                price: 900,
                                originalprice: 900,
                                quantity: 0
                            },
                            {
                                name: 'Bag insert - paper',
                                price: 1800,
                                originalprice: 1800,
                                quantity: 0
                            },
                            {
                                name: 'Bag tags',
                                price: 2000,
                                originalprice: 2000,
                                quantity: 0
                            },
                            {
                                name: 'Key card sleeves',
                                price: 3300,
                                originalprice: 3300,
                                quantity: 0
                            },
                            {
                                name: 'Neck cords',
                                price: 3900,
                                originalprice: 3900,
                                quantity: 0
                            },
                        ]
                    },
                    {
                        id: 3,
                        name: "Hospitality Sponsorship",
                        types: [{
                                name: 'Coffee & tea break',
                                price: 2500,
                                originalprice: 2500,
                                quantity: 0
                            },
                            {
                                name: 'Lunch',
                                price: 2500,
                                originalprice: 2500,
                                quantity: 0
                            },
                            {
                                name: 'Welcome reception',
                                price: 3500,
                                originalprice: 3500,
                                quantity: 0
                            },
                            {
                                name: 'Dinner reception',
                                price: 5000,
                                originalprice: 5000,
                                quantity: 0
                            }
                        ]
                    },
                    {
                        id: 3,
                        name: "Services Sponsorship",
                        types: [
                            {
                                name: 'Agent hotel room drop',
                                price: 3300,
                                originalprice: 3300,
                                quantity: 0
                            },
                            {
                                name: 'Agent lounge - dedicated room',
                                price: 5400,
                                originalprice: 5400,
                                quantity: 0
                            },
                            {
                                name: 'Agent lounge - dedicated area',
                                price: 3900,
                                originalprice: 3900,
                                quantity: 0
                            }
                        ]
                    },
                    // {
                    //     id: 3,
                    //     name: "Presentations",
                    //     types: [

                    //     ]
                    // },
                ]
            },
            booths: {
                id: 3,
                quantity: 0,
                price: 0,
                name: '',
                description: '',
                priceOnly: 4400,
                originalPriceOnly: 4400,
                displaytable: {
                    id: 3,
                    name: "Beijing display table",
                    quantity: 0,
                    price: 4400,
                    originalprice: 4400,
                    description: ""
                }
            },
            additional: []
        },
        //Miami
        {
            id: 4,
            name: "Miami",
            price: 4400,
            originalprice: 4400,
            priceearly: 3900,
            originalpriceearly: 3900,
            selectedearly: false,
            endofearly: false,
            currency: "EUR",
            description: "Miami Workshop description text goes here",
            earlybirdends: 20180831,
            earlyRate: false,
            incart: 0,
            quantity: 0,
            subtotal: 0,
            sponsorshipPackageSelected: false,
            selectBoothBoolean: false,
            workandtravel: false,
            tables: {
                id: 4,
                name: "Miami Table",
				discount: 0,
                price: 4400,
                originalprice: 4400,
                priceearly: 3900,
                originalpriceearly: 3900,
                quantity: 0,
                schedules: {
                    id: 4,
                    name: "Miami Additional Schedule",
                    discount: 0,
                    quantity: 0,
                    price: 2400,
                    originalprice: 2400,
                },
                additionalPeople: {
                    id: 4,
                    name: "Miami Additional Person",
                    discount: 0,
                    quantity: 0,
                    price: 990,
                    originalprice: 990,
                },
                sponsorships: {
                    platinum: {
                        id: 4,
                        name: "Miami Platinum Sponsorship Package",
                        price: 16000,
                        originalprice: 16000,
                        quantity: 0,
                        sponsorshipPackage: true
                    },
                    gold: {
                        id: 4,
                        name: "Miami Gold Sponsorship Package",
                        price: 11000,
                        originalprice: 11000,
                        quantity: 0,
                        sponsorshipPackage: true
                    },
                    silver: {
                        id: 4,
                        name: "Miami Silver Sponsorship Package",
                        price: 8000,
                        originalprice: 8000,
                        quantity: 0,
                        sponsorshipPackage: true
                    },
                },
                sponsorship_package: {
                    tier: '',
                    name: '',
                    price: 0,
                    quantity: 0
                },
                marketing_and_sponsorships: [
                    {
                        id: 4,
                        name: 'Advertisement in Educator/Agent Catalogue',
                        types: [{
                                name: 'Inside cover',
                                price: 1850,
                                originalprice: 1850,
                                quantity: 0
                            },
                            {
                                name: 'Outside cover',
                                price: 2150,
                                originalprice: 2150,
                                quantity: 0
                            },
                            {
                                name: 'Full page',
                                price: 1100,
                                originalprice: 1100,
                                quantity: 0
                            },
                            {
                                name: 'Half page',
                                price: 750,
                                originalprice: 750,
                                quantity: 0
                            }
                        ]
                    },
                    {
                        id: 4,
                        name: "Display advertising",
                        types: [
                            {
                                name: 'Literature Display Rack',
                                price: 1000,
                                originalprice: 1000,
                                quantity: 0
                            }
                        ]
                    },
                    {
                        id: 4,
                        name: "Merchandise Sponsorship",
                        types: [{
                                name: 'Note pads',
                                price: 1700,
                                originalprice: 1700,
                                quantity: 0
                            },
                            {
                                name: 'Pens',
                                price: 2300,
                                originalprice: 2300,
                                quantity: 0
                            },
                            {
                                name: 'Bag insert - paper',
                                price: 900,
                                originalprice: 900,
                                quantity: 0
                            },
                            {
                                name: 'Bag insert - paper',
                                price: 1800,
                                originalprice: 1800,
                                quantity: 0
                            },
                            {
                                name: 'Bag tags',
                                price: 2200,
                                originalprice: 2200,
                                quantity: 0
                            },
                            {
                                name: 'Key card sleeves',
                                price: 3300,
                                originalprice: 3300,
                                quantity: 0
                            },
                            {
                                name: 'Neck cords',
                                price: 3900,
                                originalprice: 3900,
                                quantity: 0
                            },
                        ]
                    },
                    {
                        id: 4,
                        name: "Hospitality Sponsorship",
                        types: [
                                {
                                name: 'Coffee & tea break',
                                price: 2500,
                                originalprice: 2500,
                                quantity: 0
                            },
                            {
                                name: 'Lunch',
                                price: 2500,
                                originalprice: 2500,
                                quantity: 0
                            },
                            {
                                name: 'Welcome reception',
                                price: 3500,
                                originalprice: 3500,
                                quantity: 0
                            },
                            {
                                name: 'Dinner reception',
                                price: 5000,
                                originalprice: 5000,
                                quantity: 0
                            }
                        ]
                    },
                    {
                        id: 4,
                        name: "Services Sponsorship",
                        types: [
                            {
                                name: 'Agent hotel room drop',
                                price: 3300,
                                originalprice: 3300,
                                quantity: 0
                            },
                            {
                                name: 'Agent lounge - dedicated room',
                                price: 5400,
                                originalprice: 5400,
                                quantity: 0
                            },
                            {
                                name: 'Agent lounge - dedicated area',
                                price: 3900,
                                originalprice: 3900,
                                quantity: 0
                            },
                        ]
                    },
                    // {
                    //     id: 4,
                    //     name: "Presentations",
                    //     types: [

                    //     ]
                    // },
                ]
            },
            booths: {
                id: 4,
                quantity: 0,
                price: 0,
                name: '',
                description: '',
                priceHighest: 12000,
                originalPriceHighest: 12000,
                priceLowest: 5000,
                originalPriceLowest: 5000,
                large12: {
                    id: 4,
                    name: "Miami Exhibition Booth 12m²",
                    quantity: 0,
                    price: 12000,
                    originalprice: 12000,
                    description: "Includes 2 people & 2 schedules"
                },
                medium8: {
                    id: 4,
                    name: "Miami Exhibition Booth 8m²",
                    quantity: 0,
                    price: 8000,
                    originalprice: 8000,
                    description: "Includes 1 people & 1 schedule"
                },
                medium6: {
                    id: 4,
                    name: "Miami Exhibition Booth 6m²",
                    quantity: 0,
                    price: 6000,
                    originalprice: 6000,
                    description: "Includes 1 people & 1 schedule"
                },
                std4: {
                    id: 4,
                    name: "Miami Exhibition Booth 4m²",
                    quantity: 0,
                    price: 5000,
                    originalprice: 5000,
                    description: "Includes 1 people & 1 schedule"
                },
            },
            additional: []
        },
        //Higher Education Forum
        {
            id: 5,
            name: "Higher Education ",
            price: 6900,
            originalprice: 6900,
            priceearly: 3900,
            originalpriceearly: 3900,
            selectedearly: false,
            endofearly: false,
            currency: "EUR",
            description: "Miami Workshop description text goes here",
            earlybirdends: 20180331,
            earlyRate: false,
            incart: 0,
            quantity: 0,
            subtotal: 0,
            sponsorshipPackageSelected: false,
            selectBoothBoolean: false,
            workandtravel: false,
            tables: {
                id: 5,
                name: "Higher Education Table",
				discount: 0,
                price: 4400,
                originalprice: 4400,
                priceearly: 3900,
                originalpriceearly: 3900,
                quantity: 0,
                schedules: {
                    id: 5,
                    name: "Higher Education Additional Schedule",
                    quantity: 0,
                    price: 2400,
                    originalprice: 2400,
                },
                additionalPeople: {
                    id: 5,
                    name: "Higher Education Additional Person",
                    discount: 0,
                    quantity: 0,
                    price: 990,
                    originalprice: 990,
                },
                sponsorships: {
                    platinum: {
                        id: 5,
                        name: "Higher Education Platinum Sponsorship Package",
                        price: 16000,
                        originalprice: 16000,
                        quantity: 0,
                        sponsorshipPackage: true
                    },
                    gold: {
                        id: 5,
                        name: "Higher Education Gold Sponsorship Package",
                        price: 11000,
                        originalprice: 11000,
                        quantity: 0,
                        sponsorshipPackage: true
                    },
                    silver: {
                        id: 5,
                        name: "Higher Education Silver Sponsorship Package",
                        price: 8000,
                        originalprice: 8000,
                        quantity: 0,
                        sponsorshipPackage: true
                    },
                },
                sponsorship_package: {
                    tier: '',
                    name: '',
                    price: 0,
                    quantity: 0
                },
                marketing_and_sponsorships: [
                    {
                        id: 5,
                        name: 'Advertisement in Educator/Agent Catalogue',
                        types: [{
                                name: 'Inside cover',
                                price: 1850,
                                originalprice: 1850,
                                quantity: 0
                            },
                            {
                                name: 'Outside cover',
                                price: 2150,
                                originalprice: 2150,
                                quantity: 0
                            },
                            {
                                name: 'Full page',
                                price: 1100,
                                originalprice: 1100,
                                quantity: 0
                            },
                            {
                                name: 'Half page',
                                price: 750,
                                originalprice: 750,
                                quantity: 0
                            }
                        ]
                    },
                    {
                        id: 5,
                        name: "Display advertising",
                        types: [
                            {
                                name: 'Literature Display Rack',
                                price: 1000,
                                originalprice: 1000,
                                quantity: 0
                            }
                        ]
                    },
                    {
                        id: 5,
                        name: "Merchandise Sponsorship",
                        types: [{
                                name: 'Note pads',
                                price: 1700,
                                originalprice: 1700,
                                quantity: 0
                            },
                            {
                                name: 'Pens',
                                price: 2300,
                                originalprice: 2300,
                                quantity: 0
                            },
                            {
                                name: 'Bag insert - paper',
                                price: 900,
                                originalprice: 900,
                                quantity: 0
                            },
                            {
                                name: 'Bag insert - paper',
                                price: 1800,
                                originalprice: 1800,
                                quantity: 0
                            },
                            {
                                name: 'Bag tags',
                                price: 2200,
                                originalprice: 2200,
                                quantity: 0
                            },
                            {
                                name: 'Key card sleeves',
                                price: 3300,
                                originalprice: 3300,
                                quantity: 0
                            },
                            {
                                name: 'Neck cords',
                                price: 3900,
                                originalprice: 3900,
                                quantity: 0
                            },
                        ]
                    },
                    {
                        id: 5,
                        name: "Hospitality Sponsorship",
                        types: [
                                {
                                name: 'Coffee & tea break',
                                price: 2500,
                                originalprice: 2500,
                                quantity: 0
                            },
                            {
                                name: 'Lunch',
                                price: 2500,
                                originalprice: 2500,
                                quantity: 0
                            },
                            {
                                name: 'Welcome reception',
                                price: 3500,
                                originalprice: 3500,
                                quantity: 0
                            },
                            {
                                name: 'Dinner reception',
                                price: 5000,
                                originalprice: 5000,
                                quantity: 0
                            }
                        ]
                    },
                    {
                        id: 5,
                        name: "Services Sponsorship",
                        types: [
                            {
                                name: 'Agent hotel room drop',
                                price: 3300,
                                originalprice: 3300,
                                quantity: 0
                            },
                            {
                                name: 'Agent lounge - dedicated room',
                                price: 5400,
                                originalprice: 5400,
                                quantity: 0
                            },
                            {
                                name: 'Agent lounge - dedicated area',
                                price: 3900,
                                originalprice: 3900,
                                quantity: 0
                            },
                        ]
                    },
                    // {
                    //     id: 5,
                    //     name: "Presentations",
                    //     types: [

                    //     ]
                    // },
                ]
            },
            booths: {
                id: 5,
                quantity: 0,
                price: 0,
                name: '',
                description: '',
                priceHighest: 12000,
                originalPriceHighest: 12000,
                priceLowest: 5000,
                originalPriceLowest: 5000,
                large12: {
                    id: 5,
                    name: "Higher Education Exhibition Booth 12m²",
                    quantity: 0,
                    price: 12000,
                    originalprice: 12000,
                    description: "Includes 2 people & 2 schedules"
                },
                medium8: {
                    id: 5,
                    name: "Miami Exhibition Booth 8m²",
                    quantity: 0,
                    price: 8000,
                    originalprice: 8000,
                    description: "Includes 1 people & 1 schedule"
                },
                medium6: {
                    id: 5,
                    name: "Miami Exhibition Booth 6m²",
                    quantity: 0,
                    price: 6000,
                    originalprice: 6000,
                    description: "Includes 1 people & 1 schedule"
                },
                std4: {
                    id: 5,
                    name: "Miami Exhibition Booth 4m²",
                    quantity: 0,
                    price: 5000,
                    originalprice: 5000,
                    description: "Includes 1 people & 1 schedule"
                },
            },
            additional: []
        },
        // Higher Education Partnership Forum
        {
            id: 6,
            name: "Higher Education Partnership Forum",
            price: 6900,
            originalprice: 6900,
            priceearly: 3900,
            originalpriceearly: 3900,
            selectedearly: false,
            endofearly: false,
            currency: "EUR",
            description: "Higher Education Partnership Forum Workshop description text goes here",
            earlybirdends: 20180311,
            earlyRate: false,
            incart: 0,
            quantity: 0,
            subtotal: 0,
            sponsorshipPackageSelected: false,
            selectBoothBoolean: false,
            workandtravel: false,
            tables: {
                id: 6,
                name: "Higher Education Partnership Forum",
				discount: 0,
                price: 4400,
                originalprice: 4400,
                priceearly: 3900,
                originalpriceearly: 3900,
                quantity: 0,
                schedules: {
                    id: 6,
                    name: "Higher Education Partnership Forum Additional Schedule",
                    quantity: 0,
                    price: 2400,
                    originalprice: 2400,
                },
                additionalPeople: {
                    id: 6,
                    name: "Higher Education Partnership Forum Additional Person",
                    discount: 0,
                    quantity: 0,
                    price: 990,
                    originalprice: 990,
                },
                sponsorships: {
                    platinum: {
                        id: 6,
                        name: "Higher Education Partnership Forum Platinum Sponsorship Package",
                        price: 5500,
                        originalprice: 5500,
                        quantity: 0,
                        sponsorshipPackage: true
                    },
                    gold: {
                        id: 6,
                        name: "Higher Education Partnership Forum Gold Sponsorship Package",
                        price: 4000,
                        originalprice: 4000,
                        quantity: 0,
                        sponsorshipPackage: true
                    },
                    silver: {
                        id: 6,
                        name: "Higher Education Partnership Forum Silver Sponsorship Package",
                        price: 8000,
                        originalprice: 8000,
                        quantity: 0,
                        sponsorshipPackage: true
                    },
                },
                sponsorship_package: {
                    tier: '',
                    name: '',
                    price: 0,
                    quantity: 0
                },
                marketing_and_sponsorships: [
                    {
                        id: 6,
                        name: 'Advertisement in Educator/Agent Catalogue',
                        types: [
                            {
                                name: 'Inside cover',
                                price: 1850,
                                originalprice: 1850,
                                quantity: 0
                            },
                            {
                                name: 'Outside cover',
                                price: 2150,
                                originalprice: 2150,
                                quantity: 0
                            },
                            {
                                name: 'Full page',
                                price: 1100,
                                originalprice: 1100,
                                quantity: 0
                            },
                            {
                                name: 'Half page',
                                price: 750,
                                originalprice: 750,
                                quantity: 0
                            }
                        ]
                    },
                    {
                        id: 6,
                        name: "Display advertising",
                        types: [
                            {
                                name: 'Literature Display Rack',
                                price: 1000,
                                originalprice: 1000,
                                quantity: 0
                            }
                        ]
                    },
                    {
                        id: 6,
                        name: "Merchandise Sponsorship",
                        types: [{
                                name: 'Note pads',
                                price: 1700,
                                originalprice: 1700,
                                quantity: 0
                            },
                            {
                                name: 'Pens',
                                price: 2300,
                                originalprice: 2300,
                                quantity: 0
                            },
                            {
                                name: 'Bag insert - paper',
                                price: 900,
                                originalprice: 900,
                                quantity: 0
                            },
                            {
                                name: 'Bag insert - paper',
                                price: 1800,
                                originalprice: 1800,
                                quantity: 0
                            },
                            {
                                name: 'Bag tags',
                                price: 2200,
                                originalprice: 2200,
                                quantity: 0
                            },
                            {
                                name: 'Key card sleeves',
                                price: 3300,
                                originalprice: 3300,
                                quantity: 0
                            },
                            {
                                name: 'Neck cords',
                                price: 3900,
                                originalprice: 3900,
                                quantity: 0
                            },
                        ]
                    },
                    {
                        id: 6,
                        name: "Hospitality Sponsorship",
                        types: [
                                {
                                name: 'Coffee & tea break',
                                price: 2500,
                                originalprice: 2500,
                                quantity: 0
                            },
                            {
                                name: 'Lunch',
                                price: 2500,
                                originalprice: 2500,
                                quantity: 0
                            },
                            {
                                name: 'Welcome reception',
                                price: 3500,
                                originalprice: 3500,
                                quantity: 0
                            },
                            {
                                name: 'Dinner reception',
                                price: 5000,
                                originalprice: 5000,
                                quantity: 0
                            }
                        ]
                    },
                    {
                        id: 6,
                        name: "Services Sponsorship",
                        types: [
                            {
                                name: 'Agent hotel room drop',
                                price: 3300,
                                originalprice: 3300,
                                quantity: 0
                            },
                            {
                                name: 'Agent lounge - dedicated room',
                                price: 5400,
                                originalprice: 5400,
                                quantity: 0
                            },
                            {
                                name: 'Agent lounge - dedicated area',
                                price: 3900,
                                originalprice: 3900,
                                quantity: 0
                            },
                        ]
                    },
                    // {
                    //     id: 6,
                    //     name: "Presentations",
                    //     types: [

                    //     ]
                    // },
                ]
            },
            booths: {
                id: 6,
                quantity: 0,
                price: 0,
                name: '',
                description: '',
                priceHighest: 12000,
                originalPriceHighest: 12000,
                priceLowest: 5000,
                originalPriceLowest: 5000,
                large12: {
                    id: 6,
                    name: "Higher Education Partnership Forum Workshop Exhibition Booth 12m²",
                    quantity: 0,
                    price: 12000,
                    originalprice: 12000,
                    description: "Includes 2 people & 2 schedules"
                },
                medium8: {
                    id: 6,
                    name: "Higher Education Partnership Forum Workshop Exhibition Booth 8m²",
                    quantity: 0,
                    price: 8000,
                    originalprice: 8000,
                    description: "Includes 1 people & 1 schedule"
                },
                medium6: {
                    id: 6,
                    name: "Higher Education Partnership Forum Workshop Exhibition Booth 6m²",
                    quantity: 0,
                    price: 6000,
                    originalprice: 6000,
                    description: "Includes 1 people & 1 schedule"
                },
                std4: {
                    id: 6,
                    name: "Higher Education Partnership Forum Workshop Exhibition Booth 4m²",
                    quantity: 0,
                    price: 5000,
                    originalprice: 5000,
                    description: "Includes 1 people & 1 schedule"
                },
            },
        },
        //Latin America
        {
            id: 7,
            name: "Latin America",
            price: 4400,
            originalprice: 4400,
            priceearly: 3900,
            originalpriceearly: 3900,
            selectedearly: false,
            endofearly: false,
            currency: "EUR",
            description: "Latin American Workshop description text goes here",
            earlybirdends: 20180331,
            earlyRate: false,
            incart: 0,
            quantity: 0,
            subtotal: 0,
            sponsorshipPackageSelected: false,
            selectBoothBoolean: false,
            workandtravel: false,
            tables: {
                id: 7,
                name: "Latin American Workshop Table",
				discount: 0,
                price: 4400,
                originalprice: 4400,
                priceearly: 3900,
                originalpriceearly: 3900,
                quantity: 0,
                schedules: {
                    id: 7,
                    name: "Latin American Workshop Additional Schedule",
                    quantity: 0,
                    price: 2400,
                    originalprice: 2400,
                },
                additionalPeople: {
                    id: 7,
                    name: "Latin American Workshop Additional Person",
                    quantity: 0,
                    price: 990,
                    originalprice: 990,
                },
                sponsorships: {
                    platinum: {
                        id: 7,
                        name: "Latin American Workshop Platinum Sponsorship Package",
                        price: 16000,
                        originalprice: 16000,
                        quantity: 0,
                        sponsorshipPackage: true
                    },
                    gold: {
                        id: 7,
                        name: "Latin American Workshop Gold Sponsorship Package",
                        price: 11000,
                        originalprice: 11000,
                        quantity: 0,
                        sponsorshipPackage: true
                    },
                    silver: {
                        id: 7,
                        name: "Latin American Workshop Silver Sponsorship Package",
                        price: 8000,
                        originalprice: 8000,
                        quantity: 0,
                        sponsorshipPackage: true
                    },
                },
                sponsorship_package: {
                    tier: '',
                    name: '',
                    price: 0,
                    quantity: 0
                },
                marketing_and_sponsorships: [
                    {
                        id: 7,
                        name: 'Advertisement in Educator/Agent Catalogue',
                        types: [{
                                name: 'Inside cover',
                                price: 1850,
                                originalprice: 1850,
                                quantity: 0
                            },
                            {
                                name: 'Outside cover',
                                price: 2150,
                                originalprice: 2150,
                                quantity: 0
                            },
                            {
                                name: 'Full page',
                                price: 1100,
                                originalprice: 1100,
                                quantity: 0
                            },
                            {
                                name: 'Half page',
                                price: 750,
                                originalprice: 750,
                                quantity: 0
                            }
                        ]
                    },
                    {
                        id: 7,
                        name: "Display advertising",
                        types: [
                            {
                                name: 'Literature Display Rack',
                                price: 1000,
                                originalprice: 1000,
                                quantity: 0
                            }
                        ]
                    },
                    {
                        id: 7,
                        name: "Merchandise Sponsorship",
                        types: [{
                                name: 'Note pads',
                                price: 1700,
                                originalprice: 1700,
                                quantity: 0
                            },
                            {
                                name: 'Pens',
                                price: 2300,
                                originalprice: 2300,
                                quantity: 0
                            },
                            {
                                name: 'Bag insert - paper',
                                price: 900,
                                originalprice: 900,
                                quantity: 0
                            },
                            {
                                name: 'Bag insert - paper',
                                price: 1800,
                                originalprice: 1800,
                                quantity: 0
                            },
                            {
                                name: 'Bag tags',
                                price: 2200,
                                originalprice: 2200,
                                quantity: 0
                            },
                            {
                                name: 'Key card sleeves',
                                price: 3300,
                                originalprice: 3300,
                                quantity: 0
                            },
                            {
                                name: 'Neck cords',
                                price: 3900,
                                originalprice: 3900,
                                quantity: 0
                            },
                        ]
                    },
                    {
                        id: 7,
                        name: "Hospitality Sponsorship",
                        types: [
                                {
                                name: 'Coffee & tea break',
                                price: 2500,
                                originalprice: 2500,
                                quantity: 0
                            },
                            {
                                name: 'Lunch',
                                price: 2500,
                                originalprice: 2500,
                                quantity: 0
                            },
                            {
                                name: 'Welcome reception',
                                price: 3500,
                                originalprice: 3500,
                                quantity: 0
                            },
                            {
                                name: 'Dinner reception',
                                price: 5000,
                                originalprice: 5000,
                                quantity: 0
                            }
                        ]
                    },
                    {
                        id: 7,
                        name: "Services Sponsorship",
                        types: [
                            {
                                name: 'Agent hotel room drop',
                                price: 3300,
                                originalprice: 3300,
                                quantity: 0
                            },
                            {
                                name: 'Agent lounge - dedicated room',
                                price: 5400,
                                originalprice: 5400,
                                quantity: 0
                            },
                            {
                                name: 'Agent lounge - dedicated area',
                                price: 3900,
                                originalprice: 3900,
                                quantity: 0
                            },
                        ]
                    },
                    // {
                    //     id: 7,
                    //     name: "Presentations",
                    //     types: [

                    //     ]
                    // },
                ]
            },
            booths: {
                id: 7,
                quantity: 0,
                name: '',
                description: '',
                priceHighest: 10500,
                originalPriceHighest: 10500,
                priceLowest: 4500,
                originalPriceLowest: 4500,
                large12: {
                    id: 7,
                    name: "Latin American Exhibition Booth 12m²",
                    quantity: 0,
                    price: 10500,
                    originalprice: 10500,
                    description: "Includes 2 people & 2 schedules"
                },
                medium8: {
                    id: 7,
                    name: "Latin American Exhibition Booth 8m²",
                    quantity: 0,
                    price: 7500,
                    originalprice: 7500,
                    description: "Includes 1 people & 1 schedule"
                },
                medium6: {
                    id: 7,
                    name: "Latin American Exhibition Booth 6m²",
                    quantity: 0,
                    price: 5500,
                    originalprice: 5500,
                    description: "Includes 1 people & 1 schedule"
                },
                std4: {
                    id: 7,
                    name: "Latin American Exhibition Booth 4m²",
                    quantity: 0,
                    price: 4500,
                    originalprice: 4500,
                    description: "Includes 1 people & 1 schedule"
                }
            },
        },
        //Dubai
        {
            id: 8,
            name: "Dubai",
            price: 4400,
            originalprice: 4400,
            priceearly: 3900,
            originalpriceearly: 3900,
            selectedearly: false,
            endofearly: false,
            currency: "EUR",
            description: "ICEF Dubai description text goes here",
            earlybirdends: 20180311,
            earlyRate: false,
            incart: 0,
            quantity: 0,
            subtotal: 0,
            sponsorshipPackageSelected: false,
            selectBoothBoolean: false,
            workandtravel: false,
            tables: {
                id: 8,
                name: "ICEF Dubai Table",
				discount: 0,
                price: 4400,
                originalprice: 4400,
                priceearly: 3900,
                originalpriceearly: 3900,
                quantity: 0,
                schedules: {
                    id: 8,
                    name: "ICEF Dubai Additional Schedule",
                    quantity: 0,
                    price: 2400,
                    originalprice: 2400,
                },
                additionalPeople: {
                    id: 8,
                    name: "ICEF Dubai Additional Person",
                    discount: 0,
                    quantity: 0,
                    price: 990,
                    originalprice: 990,
                },
                sponsorships: {
                    platinum: {
                        id: 8,
                        name: "ICEF Dubai Platinum Sponsorship Package",
                        price: 16000,
                        originalprice: 16000,
                        quantity: 0,
                        sponsorshipPackage: true
                    },
                    gold: {
                        id: 8,
                        name: "ICEF Dubai Gold Sponsorship Package",
                        price: 11000,
                        originalprice: 11000,
                        quantity: 0,
                        sponsorshipPackage: true
                    },
                    silver: {
                        id: 8,
                        name: "ICEF Dubai Silver Sponsorship Package",
                        price: 8000,
                        originalprice: 8000,
                        quantity: 0,
                        sponsorshipPackage: true
                    },
                },
                sponsorship_package: {
                    tier: '',
                    name: '',
                    price: 0,
                    quantity: 0
                },
                marketing_and_sponsorships: [
                    {
                        id: 8,
                        name: 'Advertisement in Educator/Agent Catalogue',
                        types: [{
                                name: 'Inside cover',
                                price: 1850,
                                originalprice: 1850,
                                quantity: 0
                            },
                            {
                                name: 'Outside cover',
                                price: 2150,
                                originalprice: 2150,
                                quantity: 0
                            },
                            {
                                name: 'Full page',
                                price: 1100,
                                originalprice: 1100,
                                quantity: 0
                            },
                            {
                                name: 'Half page',
                                price: 750,
                                originalprice: 750,
                                quantity: 0
                            }
                        ]
                    },
                    {
                        id: 8,
                        name: "Display advertising",
                        types: [
                            {
                                name: 'Literature Display Rack',
                                price: 1000,
                                originalprice: 1000,
                                quantity: 0
                            }
                        ]
                    },
                    {
                        id: 8,
                        name: "Merchandise Sponsorship",
                        types: [{
                                name: 'Note pads',
                                price: 1700,
                                originalprice: 1700,
                                quantity: 0
                            },
                            {
                                name: 'Pens',
                                price: 2300,
                                originalprice: 2300,
                                quantity: 0
                            },
                            {
                                name: 'Bag insert - paper',
                                price: 900,
                                originalprice: 900,
                                quantity: 0
                            },
                            {
                                name: 'Bag insert - paper',
                                price: 1800,
                                originalprice: 1800,
                                quantity: 0
                            },
                            {
                                name: 'Bag tags',
                                price: 2200,
                                originalprice: 2200,
                                quantity: 0
                            },
                            {
                                name: 'Key card sleeves',
                                price: 3300,
                                originalprice: 3300,
                                quantity: 0
                            },
                            {
                                name: 'Neck cords',
                                price: 3900,
                                originalprice: 3900,
                                quantity: 0
                            },
                        ]
                    },
                    {
                        id: 8,
                        name: "Hospitality Sponsorship",
                        types: [
                                {
                                name: 'Coffee & tea break',
                                price: 2500,
                                originalprice: 2500,
                                quantity: 0
                            },
                            {
                                name: 'Lunch',
                                price: 2500,
                                originalprice: 2500,
                                quantity: 0
                            },
                            {
                                name: 'Welcome reception',
                                price: 3500,
                                originalprice: 3500,
                                quantity: 0
                            },
                            {
                                name: 'Dinner reception',
                                price: 5000,
                                originalprice: 5000,
                                quantity: 0
                            }
                        ]
                    },
                    {
                        id: 8,
                        name: "Services Sponsorship",
                        types: [
                            {
                                name: 'Agent hotel room drop',
                                price: 3300,
                                originalprice: 3300,
                                quantity: 0
                            },
                            {
                                name: 'Agent lounge - dedicated room',
                                price: 5400,
                                originalprice: 5400,
                                quantity: 0
                            },
                            {
                                name: 'Agent lounge - dedicated area',
                                price: 3900,
                                originalprice: 3900,
                                quantity: 0
                            },
                        ]
                    },
                    // {
                    //     id: 8,
                    //     name: "Presentations",
                    //     types: [

                    //     ]
                    // },
                ]
            },
            booths: {
                id: 8,
                quantity: 0,
                name: '',
                description: '',
                priceOnly: 4400,
                originalPriceOnly: 4400,
                displaytable: {
                    id: 8,
                    name: "Dubai display table",
                    quantity: 0,
                    price: 4400,
                    originalprice: 4400,
                    description: ""
                }
            },
        },
        //Japan
        {
            id: 9,
            name: "Japan",
            price: 4400,
            originalprice: 4400,
            priceearly: 3900,
            originalpriceearly: 3900,
            selectedearly: false,
            endofearly: false,
            currency: "EUR",
            description: "ICEF Japan description text goes here",
            earlybirdends: 20180311,
            earlyRate: false,
            incart: 0,
            quantity: 0,
            subtotal: 0,
            sponsorshipPackageSelected: false,
            selectBoothBoolean: false,
            workandtravel: false,
            tables: {
                id: 9,
                name: "ICEF Japan Table",
				discount: 0,
                price: 4400,
                originalprice: 4400,
                priceearly: 3900,
                originalpriceearly: 3900,
                quantity: 0,
                schedules: {
                    id: 9,
                    name: "ICEF Japan Additional Schedule",
                    discount: 0,
                    quantity: 0,
                    price: 2400,
                    originalprice: 2400,
                },
                additionalPeople: {
                    id: 9,
                    name: "ICEF Japan Additional Person",
                    discount: 0,
                    quantity: 0,
                    price: 990,
                    originalprice: 990,
                },
                sponsorships: {
                    platinum: {
                        id: 9,
                        name: "ICEF Japan Platinum Sponsorship Package",
                        price: 16000,
                        originalprice: 16000,
                        quantity: 0,
                        sponsorshipPackage: true
                    },
                    gold: {
                        id: 9,
                        name: "ICEF Japan Gold Sponsorship Package",
                        price: 11000,
                        originalprice: 11000,
                        quantity: 0,
                        sponsorshipPackage: true
                    },
                    silver: {
                        id: 9,
                        name: "ICEF Japan Silver Sponsorship Package",
                        price: 8000,
                        originalprice: 8000,
                        quantity: 0,
                        sponsorshipPackage: true
                    },
                },
                sponsorship_package: {
                    tier: '',
                    name: '',
                    price: 0,
                    quantity: 0
                },
                marketing_and_sponsorships: [
                    {
                        id: 9,
                        name: 'Advertisement in Educator/Agent Catalogue',
                        types: [{
                                name: 'Inside cover',
                                price: 1850,
                                originalprice: 1850,
                                quantity: 0
                            },
                            {
                                name: 'Outside cover',
                                price: 2150,
                                originalprice: 2150,
                                quantity: 0
                            },
                            {
                                name: 'Full page',
                                price: 1100,
                                originalprice: 1100,
                                quantity: 0
                            },
                            {
                                name: 'Half page',
                                price: 750,
                                originalprice: 750,
                                quantity: 0
                            }
                        ]
                    },
                    {
                        id: 9,
                        name: "Display advertising",
                        types: [
                            {
                                name: 'Literature Display Rack',
                                price: 1000,
                                originalprice: 1000,
                                quantity: 0
                            }
                        ]
                    },
                    {
                        id: 9,
                        name: "Merchandise Sponsorship",
                        types: [{
                                name: 'Note pads',
                                price: 1700,
                                originalprice: 1700,
                                quantity: 0
                            },
                            {
                                name: 'Pens',
                                price: 2300,
                                originalprice: 2300,
                                quantity: 0
                            },
                            {
                                name: 'Bag insert - paper',
                                price: 900,
                                originalprice: 900,
                                quantity: 0
                            },
                            {
                                name: 'Bag insert - paper',
                                price: 1800,
                                originalprice: 1800,
                                quantity: 0
                            },
                            {
                                name: 'Bag tags',
                                price: 2200,
                                originalprice: 2200,
                                quantity: 0
                            },
                            {
                                name: 'Key card sleeves',
                                price: 3300,
                                originalprice: 3300,
                                quantity: 0
                            },
                            {
                                name: 'Neck cords',
                                price: 3900,
                                originalprice: 3900,
                                quantity: 0
                            },
                        ]
                    },
                    {
                        id: 9,
                        name: "Hospitality Sponsorship",
                        types: [
                                {
                                name: 'Coffee & tea break',
                                price: 2500,
                                originalprice: 2500,
                                quantity: 0
                            },
                            {
                                name: 'Lunch',
                                price: 2500,
                                originalprice: 2500,
                                quantity: 0
                            },
                            {
                                name: 'Welcome reception',
                                price: 3500,
                                originalprice: 3500,
                                quantity: 0
                            },
                            {
                                name: 'Dinner reception',
                                price: 5000,
                                originalprice: 5000,
                                quantity: 0
                            }
                        ]
                    },
                    {
                        id: 9,
                        name: "Services Sponsorship",
                        types: [
                            {
                                name: 'Agent hotel room drop',
                                price: 3300,
                                originalprice: 3300,
                                quantity: 0
                            },
                            {
                                name: 'Agent lounge - dedicated room',
                                price: 5400,
                                originalprice: 5400,
                                quantity: 0
                            },
                            {
                                name: 'Agent lounge - dedicated area',
                                price: 3900,
                                originalprice: 3900,
                                quantity: 0
                            },
                        ]
                    },
                    // {
                    //     id: 9,
                    //     name: "Presentations",
                    //     types: [

                    //     ]
                    // },
                ]
            },
            booths: {
                id: 9,
                quantity: 0,
                name: '',
                description: '',
                priceOnly: 4400,
                originalPriceOnly: 4400,
                displaytable: {
                    id: 9,
                    name: "Japan display table",
                    quantity: 0,
                    price: 4400,
                    originalprice: 4400,
                    description: ""
                }
            },
        },
        //Mexico
        {
            id: 10,
            name: "Mexico",
            price: 4400,
            originalprice: 4400,
            priceearly: 3900,
            originalpriceearly: 3900,
            selectedearly: false,
            endofearly: false,
            currency: "EUR",
            description: "ICEF Mexico Workshop description text goes here",
            earlybirdends: 20180831,
            earlyRate: false,
            incart: 0,
            quantity: 0,
            subtotal: 0,
            sponsorshipPackageSelected: false,
            selectBoothBoolean: false,
            workandtravel: false,
            tables: {
                id: 10,
                name: "ICEF Mexico Table",
				discount: 0,
                price: 4400,
                originalprice: 4400,
                priceearly: 3900,
                originalpriceearly: 3900,
                quantity: 0,
                schedules: {
                    id: 10,
                    name: "ICEF Mexico Additional Schedule",
                    discount: 0,
                    quantity: 0,
                    price: 2400,
                    originalprice: 2400,
                },
                additionalPeople: {
                    id: 10,
                    name: "ICEF Mexico Additional Person",
                    discount: 0,
                    quantity: 0,
                    price: 990,
                    originalprice: 990,
                },
                sponsorships: {
                    platinum: {
                        id: 10,
                        name: "ICEF Mexico Platinum Sponsorship Package",
                        price: 16000,
                        originalprice: 16000,
                        quantity: 0,
                        sponsorshipPackage: true
                    },
                    gold: {
                        id: 10,
                        name: "ICEF Mexico Gold Sponsorship Package",
                        price: 11000,
                        originalprice: 11000,
                        quantity: 0,
                        sponsorshipPackage: true
                    },
                    silver: {
                        id: 10,
                        name: "ICEF Mexico Silver Sponsorship Package",
                        price: 8000,
                        originalprice: 8000,
                        quantity: 0,
                        sponsorshipPackage: true
                    },
                },
                sponsorship_package: {
                    tier: '',
                    name: '',
                    price: 0,
                    quantity: 0
                },
                marketing_and_sponsorships: [
                    {
                        id: 10,
                        name: 'Advertisement in Educator/Agent Catalogue',
                        types: [{
                                name: 'Inside cover',
                                price: 1850,
                                originalprice: 1850,
                                quantity: 0
                            },
                            {
                                name: 'Outside cover',
                                price: 2150,
                                originalprice: 2150,
                                quantity: 0
                            },
                            {
                                name: 'Full page',
                                price: 1100,
                                originalprice: 1100,
                                quantity: 0
                            },
                            {
                                name: 'Half page',
                                price: 750,
                                originalprice: 750,
                                quantity: 0
                            }
                        ]
                    },
                    {
                        id: 10,
                        name: "Display advertising",
                        types: [
                            {
                                name: 'Literature Display Rack',
                                price: 1000,
                                originalprice: 1000,
                                quantity: 0
                            }
                        ]
                    },
                    {
                        id: 10,
                        name: "Merchandise Sponsorship",
                        types: [{
                                name: 'Note pads',
                                price: 1700,
                                originalprice: 1700,
                                quantity: 0
                            },
                            {
                                name: 'Pens',
                                price: 2300,
                                originalprice: 2300,
                                quantity: 0
                            },
                            {
                                name: 'Bag insert - paper',
                                price: 900,
                                originalprice: 900,
                                quantity: 0
                            },
                            {
                                name: 'Bag insert - paper',
                                price: 1800,
                                originalprice: 1800,
                                quantity: 0
                            },
                            {
                                name: 'Bag tags',
                                price: 2200,
                                originalprice: 2200,
                                quantity: 0
                            },
                            {
                                name: 'Key card sleeves',
                                price: 3300,
                                originalprice: 3300,
                                quantity: 0
                            },
                            {
                                name: 'Neck cords',
                                price: 3900,
                                originalprice: 3900,
                                quantity: 0
                            },
                        ]
                    },
                    {
                        id: 10,
                        name: "Hospitality Sponsorship",
                        types: [
                                {
                                name: 'Coffee & tea break',
                                price: 2500,
                                originalprice: 2500,
                                quantity: 0
                            },
                            {
                                name: 'Lunch',
                                price: 2500,
                                originalprice: 2500,
                                quantity: 0
                            },
                            {
                                name: 'Welcome reception',
                                price: 3500,
                                originalprice: 3500,
                                quantity: 0
                            },
                            {
                                name: 'Dinner reception',
                                price: 5000,
                                originalprice: 5000,
                                quantity: 0
                            }
                        ]
                    },
                    {
                        id: 10,
                        name: "Services Sponsorship",
                        types: [
                            {
                                name: 'Agent hotel room drop',
                                price: 3300,
                                originalprice: 3300,
                                quantity: 0
                            },
                            {
                                name: 'Agent lounge - dedicated room',
                                price: 5400,
                                originalprice: 5400,
                                quantity: 0
                            },
                            {
                                name: 'Agent lounge - dedicated area',
                                price: 3900,
                                originalprice: 3900,
                                quantity: 0
                            },
                        ]
                    },
                    // {
                    //     id: 10,
                    //     name: "Presentations",
                    //     types: [

                    //     ]
                    // },
                ]
            },
            booths: {
                id: 10,
                quantity: 0,
                name: '',
                description: '',
                priceOnly: 4400,
                originalPriceOnly: 4400,
                displaytable: {
                    id: 10,
                    name: "Mexico display table",
                    quantity: 0,
                    price: 4400,
                    originalprice: 4400,
                    description: ""
                }
            },
        },
        //Ukraine
        {
            id: 11,
            name: "Ukraine ",
            price: 4400,
            originalprice: 4400,
            priceearly: 3900,
            originalpriceearly: 3900,
            selectedearly: false,
            endofearly: false,
            currency: "EUR",
            description: "ICEF Ukraine description text goes here",
            earlybirdends: 20180831,
            earlyRate: false,
            incart: 0,
            quantity: 0,
            subtotal: 0,
            sponsorshipPackageSelected: false,
            selectBoothBoolean: false,
            workandtravel: false,
            tables: {
                id: 11,
                name: "ICEF Ukraine Table",
				discount: 0,
                price: 4400,
                originalprice: 4400,
                priceearly: 3900,
                originalpriceearly: 3900,
                quantity: 0,
                schedules: {
                    id: 11,
                    name: "Ukraine Additional Schedule",
                    discount: 0,
                    quantity: 0,
                    price: 2400,
                    originalprice: 2400,
                },
                additionalPeople: {
                    id: 11,
                    name: "Ukraine Additional Person",
                    discount: 0,
                    quantity: 0,
                    price: 990,
                    originalprice: 990,
                },
                sponsorships: {
                    platinum: {
                        id: 11,
                        name: "ICEF Ukraine Platinum Sponsorship Package",
                        price: 16000,
                        originalprice: 16000,
                        quantity: 0,
                        sponsorshipPackage: true
                    },
                    gold: {
                        id: 11,
                        name: "ICEF Ukraine Gold Sponsorship Package",
                        price: 11000,
                        originalprice: 11000,
                        quantity: 0,
                        sponsorshipPackage: true
                    },
                    silver: {
                        id: 11,
                        name: "ICEF Silver Sponsorship Package",
                        price: 8000,
                        originalprice: 8000,
                        quantity: 0,
                        sponsorshipPackage: true
                    },
                },
                sponsorship_package: {
                    tier: '',
                    name: '',
                    price: 0,
                    quantity: 0
                },
                marketing_and_sponsorships: [
                    {
                        id: 11,
                        name: 'Advertisement in Educator/Agent Catalogue',
                        types: [{
                                name: 'Inside cover',
                                price: 1850,
                                originalprice: 1850,
                                quantity: 0
                            },
                            {
                                name: 'Outside cover',
                                price: 2150,
                                originalprice: 2150,
                                quantity: 0
                            },
                            {
                                name: 'Full page',
                                price: 1100,
                                originalprice: 1100,
                                quantity: 0
                            },
                            {
                                name: 'Half page',
                                price: 750,
                                originalprice: 750,
                                quantity: 0
                            }
                        ]
                    },
                    {
                        id: 11,
                        name: "Display advertising",
                        types: [
                            {
                                name: 'Literature Display Rack',
                                price: 1000,
                                originalprice: 1000,
                                quantity: 0
                            }
                        ]
                    },
                    {
                        id: 11,
                        name: "Merchandise Sponsorship",
                        types: [{
                                name: 'Note pads',
                                price: 1700,
                                originalprice: 1700,
                                quantity: 0
                            },
                            {
                                name: 'Pens',
                                price: 2300,
                                originalprice: 2300,
                                quantity: 0
                            },
                            {
                                name: 'Bag insert - paper',
                                price: 900,
                                originalprice: 900,
                                quantity: 0
                            },
                            {
                                name: 'Bag insert - paper',
                                price: 1800,
                                originalprice: 1800,
                                quantity: 0
                            },
                            {
                                name: 'Bag tags',
                                price: 2200,
                                originalprice: 2200,
                                quantity: 0
                            },
                            {
                                name: 'Key card sleeves',
                                price: 3300,
                                originalprice: 3300,
                                quantity: 0
                            },
                            {
                                name: 'Neck cords',
                                price: 3900,
                                originalprice: 3900,
                                quantity: 0
                            },
                        ]
                    },
                    {
                        id: 11,
                        name: "Hospitality Sponsorship",
                        types: [
                                {
                                name: 'Coffee & tea break',
                                price: 2500,
                                originalprice: 2500,
                                quantity: 0
                            },
                            {
                                name: 'Lunch',
                                price: 2500,
                                originalprice: 2500,
                                quantity: 0
                            },
                            {
                                name: 'Welcome reception',
                                price: 3500,
                                originalprice: 3500,
                                quantity: 0
                            },
                            {
                                name: 'Dinner reception',
                                price: 5000,
                                originalprice: 5000,
                                quantity: 0
                            }
                        ]
                    },
                    {
                        id: 11,
                        name: "Services Sponsorship",
                        types: [
                            {
                                name: 'Agent hotel room drop',
                                price: 3300,
                                originalprice: 3300,
                                quantity: 0
                            },
                            {
                                name: 'Agent lounge - dedicated room',
                                price: 5400,
                                originalprice: 5400,
                                quantity: 0
                            },
                            {
                                name: 'Agent lounge - dedicated area',
                                price: 3900,
                                originalprice: 3900,
                                quantity: 0
                            },
                        ]
                    },
                    // {
                    //     id: 11,
                    //     name: "Presentations",
                    //     types: [

                    //     ]
                    // },
                ]
            },
            booths: {
                id: 11,
                quantity: 0,
                name: '',
                description: '',
                priceOnly: 4400,
                originalPriceOnly: 4400,
                displaytable: {
                    id: 11,
                    name: "Beijing display table",
                    quantity: 0,
                    price: 4400,
                    originalprice: 4400,
                    description: ""
                },
            },
        },
        //Central Asia Focus
        {
            id: 13,
            name: "Central Asia Focus",
            price: 4400,
            originalprice: 4400,
            priceearly: 3900,
            originalpriceearly: 3900,
            selectedearly: false,
            endofearly: false,
            currency: "EUR",
            description: "ICEF Central Asia Focus description text goes here",
            earlybirdends: 20180831,
            earlyRate: false,
            incart: 0,
            quantity: 0,
            subtotal: 0,
            sponsorshipPackageSelected: false,
            selectBoothBoolean: false,
            workandtravel: false,
            tables: {
                id: 13,
                name: "Central Asia Focus Table",
				discount: 0,
                price: 4400,
                originalprice: 4400,
                priceearly: 3900,
                originalpriceearly: 3900,
                quantity: 0,
                schedules: {
                    id: 13,
                    name: "Central Asia Focus Additional Schedule",
                    discount: 0,
                    quantity: 0,
                    price: 2400,
                    originalprice: 2400,
                },
                additionalPeople: {
                    id: 13,
                    name: "Central Asia Focus Additional Person",
                    discount: 0,
                    quantity: 0,
                    price: 990,
                    originalprice: 990,
                },
                sponsorships: {
                    platinum: {
                        id: 13,
                        name: "Central Asia Focus Platinum Sponsorship Package",
                        price: 16000,
                        originalprice: 16000,
                        quantity: 0,
                        sponsorshipPackage: true
                    },
                    gold: {
                        id: 13,
                        name: "Central Asia Focus Gold Sponsorship Package",
                        price: 11000,
                        originalprice: 11000,
                        quantity: 0,
                        sponsorshipPackage: true
                    },
                    silver: {
                        id: 13,
                        name: "Central Asia Focus Silver Sponsorship Package",
                        price: 8000,
                        originalprice: 8000,
                        quantity: 0,
                        sponsorshipPackage: true
                    },
                },
                sponsorship_package: {
                    tier: '',
                    name: '',
                    price: 0,
                    quantity: 0
                },
                marketing_and_sponsorships: [
                    {
                        id: 13,
                        name: 'Advertisement in Educator/Agent Catalogue',
                        types: [{
                                name: 'Inside cover',
                                price: 1850,
                                originalprice: 1850,
                                quantity: 0
                            },
                            {
                                name: 'Outside cover',
                                price: 2150,
                                originalprice: 2150,
                                quantity: 0
                            },
                            {
                                name: 'Full page',
                                price: 1100,
                                originalprice: 1100,
                                quantity: 0
                            },
                            {
                                name: 'Half page',
                                price: 750,
                                originalprice: 750,
                                quantity: 0
                            }
                        ]
                    },
                    {
                        id: 13,
                        name: "Display advertising",
                        types: [
                            {
                                name: 'Literature Display Rack',
                                price: 1000,
                                originalprice: 1000,
                                quantity: 0
                            }
                        ]
                    },
                    {
                        id: 13,
                        name: "Merchandise Sponsorship",
                        types: [{
                                name: 'Note pads',
                                price: 1700,
                                originalprice: 1700,
                                quantity: 0
                            },
                            {
                                name: 'Pens',
                                price: 2300,
                                originalprice: 2300,
                                quantity: 0
                            },
                            {
                                name: 'Bag insert - paper',
                                price: 900,
                                originalprice: 900,
                                quantity: 0
                            },
                            {
                                name: 'Bag insert - paper',
                                price: 1800,
                                originalprice: 1800,
                                quantity: 0
                            },
                            {
                                name: 'Bag tags',
                                price: 2200,
                                originalprice: 2200,
                                quantity: 0
                            },
                            {
                                name: 'Key card sleeves',
                                price: 3300,
                                originalprice: 3300,
                                quantity: 0
                            },
                            {
                                name: 'Neck cords',
                                price: 3900,
                                originalprice: 3900,
                                quantity: 0
                            },
                        ]
                    },
                    {
                        id: 13,
                        name: "Hospitality Sponsorship",
                        types: [
                                {
                                name: 'Coffee & tea break',
                                price: 2500,
                                originalprice: 2500,
                                quantity: 0
                            },
                            {
                                name: 'Lunch',
                                price: 2500,
                                originalprice: 2500,
                                quantity: 0
                            },
                            {
                                name: 'Welcome reception',
                                price: 3500,
                                originalprice: 3500,
                                quantity: 0
                            },
                            {
                                name: 'Dinner reception',
                                price: 5000,
                                originalprice: 5000,
                                quantity: 0
                            }
                        ]
                    },
                    {
                        id: 13,
                        name: "Services Sponsorship",
                        types: [
                            {
                                name: 'Agent hotel room drop',
                                price: 3300,
                                originalprice: 3300,
                                quantity: 0
                            },
                            {
                                name: 'Agent lounge - dedicated room',
                                price: 5400,
                                originalprice: 5400,
                                quantity: 0
                            },
                            {
                                name: 'Agent lounge - dedicated area',
                                price: 3900,
                                originalprice: 3900,
                                quantity: 0
                            },
                        ]
                    },
                    // {
                    //     id: 13,
                    //     name: "Presentations",
                    //     types: [

                    //     ]
                    // },
                ]
            },
            booths: {
                id: 13,
                quantity: 0,
                name: '',
                description: '',
                priceOnly: 4400,
                originalPriceOnly: 4400,
                displaytable: {
                    id: 13,
                    name: "Central Asia Focus display table",
                    quantity: 0,
                    price: 4400,
                    originalprice: 4400,
                    description: ""
                } 
            },
        },
        //North America
        {
            id: 14,
            name: "North America",
            price: 4400,
            originalprice: 4400,
            priceearly: 3900,
            originalpriceearly: 3900,
            selectedearly: false,
            endofearly: false,
            currency: "EUR",
            description: "North America Workshop description text goes here",
            earlybirdends: 20180831,
            earlyRate: false,
            incart: 0,
            quantity: 0,
            subtotal: 0,
            sponsorshipPackageSelected: false,
            selectBoothBoolean: false,
            workandtravel: false,
            tables: {
                id: 14,
                name: "North America Table",
				discount: 0,
                price: 4400,
                originalprice: 4400,
                priceearly: 3900,
                originalpriceearly: 3900,
                quantity: 0,
                schedules: {
                    id: 14,
                    name: "North America Additional Schedule",
                    discount: 0,
                    quantity: 0,
                    price: 2400,
                    originalprice: 2400,
                },
                additionalPeople: {
                    id: 14,
                    name: "North America Additional Person",
                    discount: 0,
                    quantity: 0,
                    price: 990,
                    originalprice: 990,
                },
                sponsorships: {
                    platinum: {
                        id: 14,
                        name: "North America Platinum Sponsorship Package",
                        price: 16000,
                        originalprice: 16000,
                        quantity: 0,
                        sponsorshipPackage: true
                    },
                    gold: {
                        id: 14,
                        name: "North America Gold Sponsorship Package",
                        price: 11000,
                        originalprice: 11000,
                        quantity: 0,
                        sponsorshipPackage: true
                    },
                    silver: {
                        id: 14,
                        name: "North America Silver Sponsorship Package",
                        price: 8000,
                        originalprice: 8000,
                        quantity: 0,
                        sponsorshipPackage: true
                    },
                },
                sponsorship_package: {
                    tier: '',
                    name: '',
                    price: 0,
                    quantity: 0
                },
                marketing_and_sponsorships: [
                    {
                        id: 14,
                        name: 'Advertisement in Educator/Agent Catalogue',
                        types: [{
                                name: 'Inside cover',
                                price: 1850,
                                originalprice: 1850,
                                quantity: 0
                            },
                            {
                                name: 'Outside cover',
                                price: 2150,
                                originalprice: 2150,
                                quantity: 0
                            },
                            {
                                name: 'Full page',
                                price: 1100,
                                originalprice: 1100,
                                quantity: 0
                            },
                            {
                                name: 'Half page',
                                price: 750,
                                originalprice: 750,
                                quantity: 0
                            }
                        ]
                    },
                    {
                        id: 14,
                        name: "Display advertising",
                        types: [
                            {
                                name: 'Literature Display Rack',
                                price: 1000,
                                originalprice: 1000,
                                quantity: 0
                            }
                        ]
                    },
                    {
                        id: 14,
                        name: "Merchandise Sponsorship",
                        types: [{
                                name: 'Note pads',
                                price: 1700,
                                originalprice: 1700,
                                quantity: 0
                            },
                            {
                                name: 'Pens',
                                price: 2300,
                                originalprice: 2300,
                                quantity: 0
                            },
                            {
                                name: 'Bag insert - paper',
                                price: 900,
                                originalprice: 900,
                                quantity: 0
                            },
                            {
                                name: 'Bag insert - paper',
                                price: 1800,
                                originalprice: 1800,
                                quantity: 0
                            },
                            {
                                name: 'Bag tags',
                                price: 2200,
                                originalprice: 2200,
                                quantity: 0
                            },
                            {
                                name: 'Key card sleeves',
                                price: 3300,
                                originalprice: 3300,
                                quantity: 0
                            },
                            {
                                name: 'Neck cords',
                                price: 3900,
                                originalprice: 3900,
                                quantity: 0
                            },
                        ]
                    },
                    {
                        id: 14,
                        name: "Hospitality Sponsorship",
                        types: [
                                {
                                name: 'Coffee & tea break',
                                price: 2500,
                                originalprice: 2500,
                                quantity: 0
                            },
                            {
                                name: 'Lunch',
                                price: 2500,
                                originalprice: 2500,
                                quantity: 0
                            },
                            {
                                name: 'Welcome reception',
                                price: 3500,
                                originalprice: 3500,
                                quantity: 0
                            },
                            {
                                name: 'Dinner reception',
                                price: 5000,
                                originalprice: 5000,
                                quantity: 0
                            }
                        ]
                    },
                    {
                        id: 14,
                        name: "Services Sponsorship",
                        types: [
                            {
                                name: 'Agent hotel room drop',
                                price: 3300,
                                originalprice: 3300,
                                quantity: 0
                            },
                            {
                                name: 'Agent lounge - dedicated room',
                                price: 5400,
                                originalprice: 5400,
                                quantity: 0
                            },
                            {
                                name: 'Agent lounge - dedicated area',
                                price: 3900,
                                originalprice: 3900,
                                quantity: 0
                            },
                        ]
                    },
                    // {
                    //     id: 14,
                    //     name: "Presentations",
                    //     types: [

                    //     ]
                    // },
                ]
            },
            booths: {
                id: 14,
                quantity: 0,
                name: '',
                description: '',
                priceHighest: 12000,
                originalPriceHighest: 12000,
                priceLowest: 5000,
                originalPriceLowest: 5000,
                large12: {
                    id: 14,
                    name: "North American Exhibition Booth 12m²",
                    quantity: 0,
                    price: 12000,
                    originalprice: 12000,
                    description: "Includes 2 people & 2 schedules"
                },
                medium8: {
                    id: 14,
                    name: "North American Exhibition Booth 8m²",
                    quantity: 0,
                    price: 8000,
                    originalprice: 8000,
                    description: "Includes 1 people & 1 schedule"
                },
                medium6: {
                    id: 14,
                    name: "North American Exhibition Booth 6m²",
                    quantity: 0,
                    price: 6000,
                    originalprice: 6000,
                    description: "Includes 1 people & 1 schedule"
                },
                std4: {
                    id: 14,
                    name: "North American Exhibition Booth 4m²",
                    quantity: 0,
                    price: 5000,
                    originalprice: 5000,
                    description: "Includes 1 people & 1 schedule"
                }
            },
        },
        //Africa
        {
            id: 15,
            name: "Africa",
            price: 4400,
            originalprice: 4400,
            priceearly: 3900,
            originalpriceearly: 3900,
            selectedearly: false,
            endofearly: false,
            currency: "EUR",
            description: "Africa description text goes here",
            earlybirdends: 20180831,
            earlyRate: false,
            incart: 0,
            quantity: 0,
            subtotal: 0,
            sponsorshipPackageSelected: false,
            selectBoothBoolean: false,
            workandtravel: false,
            tables: {
                id: 15,
                name: "ICEF Africa Table",
				discount: 0,
                price: 4400,
                originalprice: 4400,
                priceearly: 3900,
                originalpriceearly: 3900,
                quantity: 0,
                schedules: {
                    id: 15,
                    name: "Africa Additional Schedule",
                    discount: 0,
                    quantity: 0,
                    price: 2400,
                    originalprice: 2400,
                },
                additionalPeople: {
                    id: 15,
                    name: "Africa Additional Person",
                    discount: 0,
                    quantity: 0,
                    price: 990,
                    originalprice: 990,
                },
                sponsorships: {
                    platinum: {
                        id: 15,
                        name: "Africa Platinum Sponsorship Package",
                        price: 16000,
                        originalprice: 16000,
                        quantity: 0,
                        sponsorshipPackage: true
                    },
                    gold: {
                        id: 15,
                        name: "Africa Gold Sponsorship Package",
                        price: 11000,
                        originalprice: 11000,
                        quantity: 0,
                        sponsorshipPackage: true
                    },
                    silver: {
                        id: 15,
                        name: "Africa Silver Sponsorship Package",
                        price: 8000,
                        originalprice: 8000,
                        quantity: 0,
                        sponsorshipPackage: true
                    },
                },
                sponsorship_package: {
                    tier: '',
                    name: '',
                    price: 0,
                    quantity: 0
                },
                marketing_and_sponsorships: [
                    {
                        id: 15,
                        name: 'Advertisement in Educator/Agent Catalogue',
                        types: [{
                                name: 'Inside cover',
                                price: 1850,
                                originalprice: 1850,
                                quantity: 0
                            },
                            {
                                name: 'Outside cover',
                                price: 2150,
                                originalprice: 2150,
                                quantity: 0
                            },
                            {
                                name: 'Full page',
                                price: 1100,
                                originalprice: 1100,
                                quantity: 0
                            },
                            {
                                name: 'Half page',
                                price: 750,
                                originalprice: 750,
                                quantity: 0
                            }
                        ]
                    },
                    {
                        id: 15,
                        name: "Display advertising",
                        types: [
                            {
                                name: 'Literature Display Rack',
                                price: 1000,
                                originalprice: 1000,
                                quantity: 0
                            }
                        ]
                    },
                    {
                        id: 15,
                        name: "Merchandise Sponsorship",
                        types: [{
                                name: 'Note pads',
                                price: 1700,
                                originalprice: 1700,
                                quantity: 0
                            },
                            {
                                name: 'Pens',
                                price: 2300,
                                originalprice: 2300,
                                quantity: 0
                            },
                            {
                                name: 'Bag insert - paper',
                                price: 900,
                                originalprice: 900,
                                quantity: 0
                            },
                            {
                                name: 'Bag insert - paper',
                                price: 1800,
                                originalprice: 1800,
                                quantity: 0
                            },
                            {
                                name: 'Bag tags',
                                price: 2200,
                                originalprice: 2200,
                                quantity: 0
                            },
                            {
                                name: 'Key card sleeves',
                                price: 3300,
                                originalprice: 3300,
                                quantity: 0
                            },
                            {
                                name: 'Neck cords',
                                price: 3900,
                                originalprice: 3900,
                                quantity: 0
                            },
                        ]
                    },
                    {
                        id: 15,
                        name: "Hospitality Sponsorship",
                        types: [
                                {
                                name: 'Coffee & tea break',
                                price: 2500,
                                originalprice: 2500,
                                quantity: 0
                            },
                            {
                                name: 'Lunch',
                                price: 2500,
                                originalprice: 2500,
                                quantity: 0
                            },
                            {
                                name: 'Welcome reception',
                                price: 3500,
                                originalprice: 3500,
                                quantity: 0
                            },
                            {
                                name: 'Dinner reception',
                                price: 5000,
                                originalprice: 5000,
                                quantity: 0
                            }
                        ]
                    },
                    {
                        id: 15,
                        name: "Services Sponsorship",
                        types: [
                            {
                                name: 'Agent hotel room drop',
                                price: 3300,
                                originalprice: 3300,
                                quantity: 0
                            },
                            {
                                name: 'Agent lounge - dedicated room',
                                price: 5400,
                                originalprice: 5400,
                                quantity: 0
                            },
                            {
                                name: 'Agent lounge - dedicated area',
                                price: 3900,
                                originalprice: 3900,
                                quantity: 0
                            },
                        ]
                    },
                    // {
                    //     id: 15,
                    //     name: "Presentations",
                    //     types: [

                    //     ]
                    // },
                ]
            },
            booths: {
                id: 15,
                quantity: 0,
                name: '',
                description: '',
                priceOnly: 4400,
                originalPriceOnly: 4400,
                displaytable: {
                    id: 15,
                    name: "Africa display table",
                    quantity: 0,
                    price: 4400,
                    originalprice: 4400,
                    description: ""
                }
            },
        },
        //Southeast Asia
        {
            id: 16,
            name: "ICEF Southeast Asia",
            price: 4400,
            originalprice: 4400,
            priceearly: 3900,
            originalpriceearly: 3900,
            selectedearly: false,
            endofearly: false,
            currency: "EUR",
            description: "ICEF Southeast Asia description text goes here",
            earlybirdends: 20180831,
            earlyRate: false,
            incart: 0,
            quantity: 0,
            subtotal: 0,
            sponsorshipPackageSelected: false,
            selectBoothBoolean: false,
            workandtravel: false,
            tables: {
                id: 16,
                name: "ICEF Southeast Asia Table",
				discount: 0,
                price: 4400,
                originalprice: 4400,
                priceearly: 3900,
                originalpriceearly: 3900,
                quantity: 0,
                schedules: {
                    id: 16,
                    name: "ICEF Southeast Asia Additional Schedule",
                    discount: 0,
                    quantity: 0,
                    price: 2400,
                    originalprice: 2400,
                },
                additionalPeople: {
                    id: 16,
                    name: "ICEF Southeast Asia Additional Person",
                    discount: 0,
                    quantity: 0,
                    price: 990,
                    originalprice: 990,
                },
                sponsorships: {
                    platinum: {
                        id: 16,
                        name: "Southeast Asia Platinum Sponsorship Package",
                        price: 16000,
                        originalprice: 16000,
                        quantity: 0,
                        sponsorshipPackage: true
                    },
                    gold: {
                        id: 16,
                        name: "Southeast Asia Gold Sponsorship Package",
                        price: 11000,
                        originalprice: 11000,
                        quantity: 0,
                        sponsorshipPackage: true
                    },
                    silver: {
                        id: 16,
                        name: "Southeast Asia Silver Sponsorship Package",
                        price: 8000,
                        originalprice: 8000,
                        quantity: 0,
                        sponsorshipPackage: true
                    },
                },
                sponsorship_package: {
                    tier: '',
                    name: '',
                    price: 0,
                    quantity: 0
                },
                marketing_and_sponsorships: [
                    {
                        id: 16,
                        name: 'Advertisement in Educator/Agent Catalogue',
                        types: [{
                                name: 'Inside cover',
                                price: 1850,
                                originalprice: 1850,
                                quantity: 0
                            },
                            {
                                name: 'Outside cover',
                                price: 2150,
                                originalprice: 2150,
                                quantity: 0
                            },
                            {
                                name: 'Full page',
                                price: 1100,
                                originalprice: 1100,
                                quantity: 0
                            },
                            {
                                name: 'Half page',
                                price: 750,
                                originalprice: 750,
                                quantity: 0
                            }
                        ]
                    },
                    {
                        id: 16,
                        name: "Display advertising",
                        types: [
                            {
                                name: 'Literature Display Rack',
                                price: 1000,
                                originalprice: 1000,
                                quantity: 0
                            }
                        ]
                    },
                    {
                        id: 16,
                        name: "Merchandise Sponsorship",
                        types: [{
                                name: 'Note pads',
                                price: 1700,
                                originalprice: 1700,
                                quantity: 0
                            },
                            {
                                name: 'Pens',
                                price: 2300,
                                originalprice: 2300,
                                quantity: 0
                            },
                            {
                                name: 'Bag insert - paper',
                                price: 900,
                                originalprice: 900,
                                quantity: 0
                            },
                            {
                                name: 'Bag insert - paper',
                                price: 1800,
                                originalprice: 1800,
                                quantity: 0
                            },
                            {
                                name: 'Bag tags',
                                price: 2200,
                                originalprice: 2200,
                                quantity: 0
                            },
                            {
                                name: 'Key card sleeves',
                                price: 3300,
                                originalprice: 3300,
                                quantity: 0
                            },
                            {
                                name: 'Neck cords',
                                price: 3900,
                                originalprice: 3900,
                                quantity: 0
                            },
                        ]
                    },
                    {
                        id: 16,
                        name: "Hospitality Sponsorship",
                        types: [
                                {
                                name: 'Coffee & tea break',
                                price: 2500,
                                originalprice: 2500,
                                quantity: 0
                            },
                            {
                                name: 'Lunch',
                                price: 2500,
                                originalprice: 2500,
                                quantity: 0
                            },
                            {
                                name: 'Welcome reception',
                                price: 3500,
                                originalprice: 3500,
                                quantity: 0
                            },
                            {
                                name: 'Dinner reception',
                                price: 5000,
                                originalprice: 5000,
                                quantity: 0
                            }
                        ]
                    },
                    {
                        id: 16,
                        name: "Services Sponsorship",
                        types: [
                            {
                                name: 'Agent hotel room drop',
                                price: 3300,
                                originalprice: 3300,
                                quantity: 0
                            },
                            {
                                name: 'Agent lounge - dedicated room',
                                price: 5400,
                                originalprice: 5400,
                                quantity: 0
                            },
                            {
                                name: 'Agent lounge - dedicated area',
                                price: 3900,
                                originalprice: 3900,
                                quantity: 0
                            },
                        ]
                    },
                    // {
                    //     id: 16,
                    //     name: "Presentations",
                    //     types: [

                    //     ]
                    // },
                ]
            },
            booths: {
                id: 16,
                quantity: 0,
                name: '',
                description: '',
                priceOnly: 4400,
                originalPriceOnly: 4400,
                displaytable: {
                    id: 16,
                    name: "ICEF Southeast Asia display table",
                    quantity: 0,
                    price: 4400,
                    originalprice: 4400,
                    description: ""
                }
            },
        },
        //Moscow
        {
            id: 17,
            name: "Moscow",
            price: 6900,
            originalprice: 6900,
            priceearly: 3900,
            originalpriceearly: 3900,
            selectedearly: false,
            endofearly: false,
            currency: "EUR",
            description: "Moscow description text goes here",
            earlybirdends: 20180311,
            earlyRate: false,
            incart: 0,
            quantity: 0,
            subtotal: 0,
            sponsorshipPackageSelected: false,
            selectBoothBoolean: false,
            workandtravel: false,
            tables: {
                id: 17,
                name: "Moscow Table",
				discount: 0,
                price: 4400,
                originalprice: 4400,
                priceearly: 3900,
                originalpriceearly: 3900,
                quantity: 0,
                schedules: {
                    id: 17,
                    name: "Moscow Additional Schedule",
                    discount: 0,
                    quantity: 0,
                    price: 2400,
                    originalprice: 2400,
                },
                additionalPeople: {
                    id: 17,
                    name: "Moscow Additional Person",
                    discount: 0,
                    quantity: 0,
                    price: 990,
                    originalprice: 990,
                },
                sponsorships: {
                    platinum: {
                        id: 17,
                        name: "Moscow Platinum Sponsorship Package",
                        price: 16000,
                        originalprice: 16000,
                        quantity: 0,
                        sponsorshipPackage: true
                    },
                    gold: {
                        id: 17,
                        name: "Moscow Gold Sponsorship Package",
                        price: 11000,
                        originalprice: 11000,
                        quantity: 0,
                        sponsorshipPackage: true
                    },
                    silver: {
                        id: 17,
                        name: "Moscow Silver Sponsorship Package",
                        price: 8000,
                        originalprice: 8000,
                        quantity: 0,
                        sponsorshipPackage: true
                    },
                },
                sponsorship_package: {
                    tier: '',
                    name: '',
                    price: 0,
                    quantity: 0
                },
                marketing_and_sponsorships: [
                    {
                        id: 17,
                        name: 'Advertisement in Educator/Agent Catalogue',
                        types: [{
                                name: 'Inside cover',
                                price: 1850,
                                originalprice: 1850,
                                quantity: 0
                            },
                            {
                                name: 'Outside cover',
                                price: 2150,
                                originalprice: 2150,
                                quantity: 0
                            },
                            {
                                name: 'Full page',
                                price: 1100,
                                originalprice: 1100,
                                quantity: 0
                            },
                            {
                                name: 'Half page',
                                price: 750,
                                originalprice: 750,
                                quantity: 0
                            }
                        ]
                    },
                    {
                        id: 17,
                        name: "Display advertising",
                        types: [
                            {
                                name: 'Literature Display Rack',
                                price: 1000,
                                originalprice: 1000,
                                quantity: 0
                            }
                        ]
                    },
                    {
                        id: 17,
                        name: "Merchandise Sponsorship",
                        types: [{
                                name: 'Note pads',
                                price: 1700,
                                originalprice: 1700,
                                quantity: 0
                            },
                            {
                                name: 'Pens',
                                price: 2300,
                                originalprice: 2300,
                                quantity: 0
                            },
                            {
                                name: 'Bag insert - paper',
                                price: 900,
                                originalprice: 900,
                                quantity: 0
                            },
                            {
                                name: 'Bag insert - paper',
                                price: 1800,
                                originalprice: 1800,
                                quantity: 0
                            },
                            {
                                name: 'Bag tags',
                                price: 2200,
                                originalprice: 2200,
                                quantity: 0
                            },
                            {
                                name: 'Key card sleeves',
                                price: 3300,
                                originalprice: 3300,
                                quantity: 0
                            },
                            {
                                name: 'Neck cords',
                                price: 3900,
                                originalprice: 3900,
                                quantity: 0
                            },
                        ]
                    },
                    {
                        id: 17,
                        name: "Hospitality Sponsorship",
                        types: [
                                {
                                name: 'Coffee & tea break',
                                price: 2500,
                                originalprice: 2500,
                                quantity: 0
                            },
                            {
                                name: 'Lunch',
                                price: 2500,
                                originalprice: 2500,
                                quantity: 0
                            },
                            {
                                name: 'Welcome reception',
                                price: 3500,
                                originalprice: 3500,
                                quantity: 0
                            },
                            {
                                name: 'Dinner reception',
                                price: 5000,
                                originalprice: 5000,
                                quantity: 0
                            }
                        ]
                    },
                    {
                        id: 17,
                        name: "Services Sponsorship",
                        types: [
                            {
                                name: 'Agent hotel room drop',
                                price: 3300,
                                originalprice: 3300,
                                quantity: 0
                            },
                            {
                                name: 'Agent lounge - dedicated room',
                                price: 5400,
                                originalprice: 5400,
                                quantity: 0
                            },
                            {
                                name: 'Agent lounge - dedicated area',
                                price: 3900,
                                originalprice: 3900,
                                quantity: 0
                            },
                        ]
                    },
                    // {
                    //     id: 17,
                    //     name: "Presentations",
                    //     types: [

                    //     ]
                    // },
                ]
            },
            booths: {
                id: 17,
                quantity: 0,
                name: '',
                description: '',
                priceOnly: 4400,
                originalPriceOnly: 4400,
                displaytable: {
                    id: 17,
                    name: "Moscow display table",
                    quantity: 0,
                    price: 4400,
                    originalprice: 4400,
                    description: ""
                }
            },
        },
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
        accountType: 'educator', //can also be 'service_provider' and 'work_and_travel'
        attendBooths: false, //determines whether the user is buying an exhibition booth or another fo
        currentDate: new Date(), //current date
        fullDate: (new Date()).getFullYear() + "" + (new Date()).getMonth() + "" + (new Date()).getDate(), //to determine whether early bird rates apply - collating YY/MM/DD format dates as a single number
        fixer: {}, //with regards to fixer.io
        fixerRates: {},
        allowedCurrencies: ["EUR","GBP","USD","CAD","AUD"],
        currentCurrency: "EUR",
        currencySymbol: "€",
        defaultCurrency: "EUR",
        loaded: false
    },
    filters: {
        // we change each displayed price to fit the format exemplified on icef.design/main and the icef ratesheet among other places
        moneyify: function( value ){
            if ( value || value == 0 ) {
                let stringified = value.toFixed().toString();
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
        // push a table to the cart and update our price accordingly
        addToCart: function (product, subitem, selector) {
            let cartitem;
            cartitem = Object.assign({}, subitem); //make copy of product
            this.regularWorkshops++;
            this.earlyRates = false; //remove possibility of early bird rates from other events in products
            this.cart.unshift(cartitem); //push copy of product into cart
            if ( this.fullDate < product.earlybirdends && 1 == this.regularWorkshops && selector !== 'work_and_travel' ){ //EARLYBIRD check... should skip first if if more than one event selected but reset previously added workshops to regular rate.. awkward
                cartitem.selectedearly = true;
                product.selectedearly = true;
                cartitem.price = subitem.priceearly; 
                this.earlytotal += cartitem.price;
            } else {
                this.earlytotal = 0;
                cartitem.price = subitem.price;
                if ( this.regularWorkshops > 1 ) {
                    this.products.forEach(m => {
                        if ( m.selectedearly ) m.endofearly = true;
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
            if ( this.regularWorkshops == 2 ){
                this.cart.forEach(m => {
                    if ( m.selectedearly ) m.price = m.originalprice;
                });
                this.total = this.cart.reduce( ( a, b ) => a.price + b.price );
            }
            subitem.quantity++;
            cartitem.quantity++;
        },
        // remove the existence of a given workshop from the cart
        absoluteRemoveFromCart: function (product, selector) {
            if ( product.tables ) {
                while ( product.tables.additionalPeople.quantity > 0 ){
                    this.subitemtotal -= product.tables.additionalPeople.price;
                    product.tables.additionalPeople.quantity--;
                }
                while ( product.tables.schedules.quantity > 0 ){
                    this.subitemtotal -= product.tables.schedules.price;
                    product.tables.schedules.quantity--;
                }
                product.tables.quantity = 0;
                product.incart = 0;
                this.subitemtotal -= product.tables.sponsorship_package.price;
                if ( product.tables.sponsorshipPackageSelected ){                 
                    product.tables.sponsorshipPackageSelected = false;
                }
            } else {
                while ( product.additionalPeople.quantity > 0 ){
                    this.subitemtotal -= product.additionalPeople.price;
                    product.additionalPeople.quantity--;
                }
                while ( product.schedules.quantity > 0 ){
                    this.subitemtotal -= product.schedules.price;
                    product.schedules.quantity--;
                }
                this.products.forEach(m => {
                    if ( m.id == product.id ) {
                        m.incart = 0;
                        m.tables.quantity = 0;
                        if ( m.tables.sponsorshipPackageSelected ){
                            this.subitemtotal -= m.tables.sponsorship_package.price;
                            m.tables.sponsorshipPackageSelected = false;
                            m.tables.sponsorships.platinum.quantity = 0;
                            m.tables.sponsorships.gold.quantity = 0;
                            m.tables.sponsorships.silver.quantity = 0;
                        }
                        console.log("Product item!", m);
                    }
                });
            }
            let cartIds = this.cart.map(m => m.id);
            var position = cartIds.indexOf(product.id);
            let cartEq = this.cart[position];
            while ( this.cart[position].quantity > 0 ){ //process by which tables are removed and price deduction is applied step by step
                if ( this.cart[position].selectedearly ) this.earlytotal -= cartEq.priceearly;
                else this.total -= cartEq.price;
                this.cart[position].quantity--;
            }
            this.cart.splice(position, 1);
            this.regularWorkshops--;
            switch(this.regularWorkshops){
                case 0:
                    this.discount = 1;
                    this.products.forEach(m => {
                        if (m.selectedearly) m.selectedearly = false;
                        this.earlyRates = true;
                    });
                    break;
                case 1:
                    this.discount = 1; //resetting this.discount;
                    this.products.forEach(m => {
                        if (m.selectedearly && m.endofearly){
                            m.endofearly = false;
                        }
                    });
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
            product.booths.booths = true;
            product.booths.quantity++;
            product.booths.name = subitem.name;
            product.booths.price = subitem.price;
            cartitem = Object.assign({}, product.booths);
            this.cart.unshift(cartitem);
            this.total += cartitem.price;
        },
        // remove a booth from the cart
        removeBoothFromCart(booth, selector){
            if ( selector == 'events' ){
                this.cart.forEach(m => {
                    if ( m.id == booth.id ){
                        this.total -= m.price;
                        return;
                    }
                })
            }
            else this.total -= booth.price;
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
        addAdvert(subitem){
            cartitem = Object.assign({}, subitem);
            console.log(cartitem);
            cartitem.quantity++;
            this.cart.unshift(cartitem);
            this.total += cartitem.price;
            this.advertModal = false;
        },
        // remove an advert from the cart
        removeAdvert(advert){
            this.total -= advert.price;
            this.cart = this.cart.filter(m => m.name !== advert.name);
        },
        // add a table for an event to the cart - used in opened events panel after addToCart has been invoked for an event
        addTable: function (tables) {
            tables.quantity++;
            this.cart.forEach(m => {
                if (m.id == tables.id){
                    m.quantity++;
                    if (m.selectedearly) this.earlytotal += m.price;
                    else this.total += m.price;
                }
            });
        },
        // remove a table from cart - accessed via the minus sign - triggers absoluteRemoveFromCart if the last table for an event has been removed
        removeTable: function (tables) {
            tables.quantity--;
            if ( tables.quantity == 0 ){
                this.absoluteRemoveFromCart(tables);
            }
            else {
                this.cart.forEach(m => {
                    if ( m.id == tables.id ) {
                        m.quantity--;
                        this.total -= m.price;
                    }
                })
            }
        },
        // adds either an extra schedule, an additional person or a subscription package for an event
        addSubItem: function (product, subitem, selector, tier) {
            if ( selector == 'schedules') {
                console.log("hmm", subitem);
                if ( subitem.quantity >= product.tables.quantity ) {
                    this.limitReached = true;
                    return;
                }
                else this.limitReached = false;
            } 
            if ( selector == 'marketing' ) subitem.name = product.name + " " + subitem.name;
            else if ( selector == 'sponsorship_package' ){
                product.tables.sponsorshipPackageSelected = true;
                this.cart.forEach(m => {
                    if ( m.id == product.id ){
                        if ( m.sponsorshipPackageSelected ) {
                            this.subitemtotal -= m.sponsorship_package.price;
                            m.sponsorship_package.quantity--;
                            switch(tier){
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
            this.subitemtotal += subitem.price;
            subitem.quantity++;
            if ( selector == 'schedules' && subitem.quantity > 1 ){
                this.cart.forEach(m => {
                    if ( m.id == product.id ){
                        m.quantity = Math.floor( ( subitem.quantity / 2 ) + 1);
                        if ( m.selectedearly ) this.earlytotal += m.price;
                        this.total += m.price;
                        // this.subitemtotal += m.price;
                    }
                });
            }
        },
        // removes either a sponsorship package, an additional schedule or an additional person for an event
        removeSubItem: function (product, subitem, selector) {
            subitem.quantity--;
            this.subitemtotal -= subitem.price;
            if ( selector == 'sponsorship_package' ) {
                this.cart.forEach(m => {
                    if ( m.id == product.id ){
                        m.sponsorshipPackageSelected = false;
                        if (m.earlyrateselected) this.earlytotal += m.priceearly;
                        else this.total += m.price;
                    }
                })
            }
            if ( selector == 'schedules' ){
                this.cart.forEach(m => {
                    if ( m.id == product.id ) {
                        m.quantity = Math.floor( ( subitem.quantity / 2 )+1 );
                        if ( subitem.quantity == 1 || subitem.quantity == 0 ) m.quantity = 1;
                        if ( subitem.quantity !== 0 ) this.subitemtotal -= m.price;
                    }
                });
                if ( this.cart.length == 1 && this.cart[0].selectedearly ) {
                    this.cart[0].price = this.cart[0].priceearly;
                }
            }
        },
        // we exit the calculator screen and go into checkout
        gotoCheckout() {
            document.getElementById("cart-bottom-screen").style.display = "none";
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

            document.getElementById("main-wrapper").style.display = "none";
            document.getElementById("checkout").style.display = "block";
        },
        // we return to the calculator screen from checkout (if we want to add a new item etc.)
        goBackFromCheckout() {
            this.selectedWorkshops = [];

            document.getElementById("main-wrapper").style.display = "block";
            document.getElementById("checkout").style.display = "none";
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
        showBoothOptions(product) {
            product.selectBoothBoolean = true;
            if ( this.cart.length == 0 ){
                let empty = {
                    booths: true,
                    notify: true,
                    name: '',
                    price: '',
                    quantity: ''
                };
                this.cart.push( empty );
            }
        },
        setBaseCurrency(baseCurrency) {
            this.currentCurrency = baseCurrency;
            switch(baseCurrency){
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
            axios.get('https://data.fixer.io/api/latest?access_key=2a8bbb1fd33e5a65dc1404de3d7bd38b&base='+baseCurrency)
            .then(response => {
                this.fixer = response.data;
                this.fixerRates = this.fixer.rates;
                if (typeof fx !== "undefined " && fx.rates ) {
                    fx.rates = this.fixer.rates;
                    fx.base = this.fixer.base;
                }
                else {
                    var fxSetup = {
                        rates: this.fixer.rates,
                        base: this.fixer.base
                    };
                }
                this.setCurrencies();
            });
        },
        setCurrencies(){
            this.products.forEach(m => {
                if ( this.fullDate < m.earlybirdends ) m.earlyRate = true;
                m.price = m.originalprice;
                m.priceearly = m.originalpriceearly;
                m.tables.price = m.tables.originalprice;
                m.tables.priceearly = m.tables.originalpriceearly;
                m.tables.schedules.price = m.tables.schedules.originalprice;
                m.tables.additionalPeople.price = m.tables.additionalPeople.originalprice;

                m.tables.sponsorships.platinum.price = m.tables.sponsorships.platinum.originalprice;
                m.tables.sponsorships.gold.price = m.tables.sponsorships.gold.originalprice;
                m.tables.sponsorships.silver.price = m.tables.sponsorships.silver.originalprice;

                if ( m.booths ) {
                    if ( m.booths.priceLowest ) m.booths.priceLowest = m.booths.priceLowest;
                    if ( m.booths.priceHighest ) m.booths.priceHighest = m.booths.priceHighest;
                    if ( m.booths.priceOnly ) m.booths.priceOnly = m.booths.originalPriceOnly;

                    if ( m.booths.large12 ) m.booths.large12.price = m.booths.large12.originalprice;
                    if ( m.booths.large10 ) m.booths.large10.price = m.booths.large10.originalprice;
                    if ( m.booths.medium8 ) m.booths.medium8.price = m.booths.medium8.originalprice;
                    if ( m.booths.medium6 ) m.booths.medium6.price = m.booths.medium6.originalprice;
                    if ( m.booths.std5 ) m.booths.std5.price = m.booths.std5.originalprice;
                    if ( m.booths.std4 ) m.booths.std4.price = m.booths.std4.originalprice;
                    if ( m.booths.std3 ) m.booths.std3.price = m.booths.std3.originalprice;
                    if ( m.booths.displaytable ) m.booths.displaytable.price = m.booths.displaytable.originalprice;
                }

                m.tables.marketing_and_sponsorships.forEach(n => {
                    n.types.forEach(p => {
                        p.price = p.originalprice;
                    });
                });

                m.currencyDisclaimer = '';
                if ( m.currency !== this.fixer.base ) {
                    m.currencyDisclaimer = "Converted from " + m.currency;

                    m.priceearly = parseInt(fx.convert(m.priceearly, {
                        from: m.currency,
                        to: this.fixer.base
                    }).toFixed());

                    m.price = parseInt(fx.convert(m.price, {
                        from: m.currency,
                        to: this.fixer.base
                    }).toFixed());

                    if (m.tables) {
                        m.tables.price = parseInt(fx.convert(m.tables.price, {
                            from: m.currency,
                            to: this.fixer.base
                        }).toFixed());
                        m.tables.priceearly = parseInt(fx.convert(m.tables.priceearly, {
                            from: m.currency,
                            to: this.fixer.base
                        }).toFixed());

                        m.tables.schedules.price = parseInt(fx.convert(m.tables.schedules.price, {
                            from: m.currency,
                            to: this.fixer.base
                        }).toFixed());

                        m.tables.additionalPeople.price = parseInt(fx.convert(m.tables.additionalPeople.price, {
                            from: m.currency,
                            to: this.fixer.base
                        }).toFixed());

                        m.tables.sponsorships.platinum.price = parseInt(fx.convert(m.tables.sponsorships.platinum.price, {
                            from: m.currency,
                            to: this.fixer.base
                        }).toFixed());

                        m.tables.sponsorships.gold.price = parseInt(fx.convert(m.tables.sponsorships.gold.price, {
                            from: m.currency,
                            to: this.fixer.base
                        }).toFixed());

                        m.tables.sponsorships.silver.price = parseInt(fx.convert(m.tables.sponsorships.silver.price, {
                            from: m.currency,
                            to: this.fixer.base
                        }).toFixed());

                        m.tables.marketing_and_sponsorships.forEach(n => {
                            n.types.forEach(p => {
                                p.price = parseInt(fx.convert(p.price, {
                                    from: m.currency,
                                    to: this.fixer.base
                                }).toFixed());
                            });
                        });
                    }

                    if ( m.booths.priceHighest && m.booths.priceLowest ) {
                        m.booths.priceHighest = parseInt(fx.convert(m.booths.priceHighest, {
                            from: m.currency,
                            to: this.fixer.base
                        }).toFixed());

                        m.booths.priceLowest = parseInt(fx.convert(m.booths.priceLowest, {
                            from: m.currency,
                            to: this.fixer.base
                        }).toFixed());

                        if (m.booths.large12) {
                            m.booths.large12.price = parseInt(fx.convert(m.booths.large12.price, {
                                from: m.currency,
                                to: this.fixer.base
                            }).toFixed()); 
                        }

                        if (m.booths.large10) {
                            m.booths.large10.price = parseInt(fx.convert(m.booths.large10.price, {
                                from: m.currency,
                                to: this.fixer.base
                            }).toFixed()); 
                        }

                        if (m.booths.medium8) {
                            m.booths.medium8.price = parseInt(fx.convert(m.booths.medium8.price, {
                                from: m.currency,
                                to: this.fixer.base
                            }).toFixed()); 
                        }

                        if (m.booths.medium6) {
                            m.booths.medium6.price = parseInt(fx.convert(m.booths.medium6.price, {
                                from: m.currency,
                                to: this.fixer.base
                            }).toFixed()); 
                        }

                        if (m.booths.std5) {
                            m.booths.std5.price = parseInt(fx.convert(m.booths.std5.price, {
                                from: m.currency,
                                to: this.fixer.base
                            }).toFixed()); 
                        }

                        if (m.booths.std4) {
                            m.booths.std4.price = parseInt(fx.convert(m.booths.std4.price, {
                                from: m.currency,
                                to: this.fixer.base
                            }).toFixed()); 
                        }

                        if (m.booths.std3) {
                            m.booths.std3.price = parseInt(fx.convert(m.booths.std3.price, {
                                from: m.currency,
                                to: this.fixer.base
                            }).toFixed()); 
                        }

                        if (m.booths.displaytable) {
                            m.booths.displaytable.price = parseInt(fx.convert(m.booths.displaytable.price, {
                                from: m.currency,
                                to: this.fixer.base
                            }).toFixed()); 
                        }
                    }
                }
            });
        },
        customSort(items, index, isdescending){
            items.sort((a,b)=>{
                return a.id - b.id;
            })
        },
        // we convert all price values to the selected currency
        changeBaseCurrency() {
            this.setBaseCurrency( event.target.innerText );
        },
        // this doesn't fulfill a function beyond switching out of the checkout screen yet
        confirmQuote(){
            console.log("Quote confirmed! :", document.getElementById("checkout"));
            document.getElementById("checkout").style.display = "none";
            document.getElementById("post-checkout").style.display = "block";
        }
    },
    beforeMount(){
        this.setBaseCurrency( this.defaultCurrency );
    },
    mounted(){
        this.loaded = true;
    }
})