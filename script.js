// Define grams per troy ounce for conversion
const GRAMS_PER_TROY_OUNCE = 31.1035;

// Simulated gold prices and exchange rates for different countries
const countryData = {
    'united-states': {
        currency: 'USD',
        symbol: '$',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 1,
        defaultTax: 0,
        displayName: 'United States'
    },
    'canada': {
        currency: 'CAD',
        symbol: 'CA$',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 1.37,
        defaultTax: 5,
        displayName: 'Canada'
    },
    'uae': {
        currency: 'AED',
        symbol: 'AED',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 3.67,
        defaultTax: 5,
        displayName: 'UAE'
    },
    'india': {
        currency: 'INR',
        symbol: '₹',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 83.00,
        defaultTax: 3,
        displayName: 'India'
    },
    'united-kingdom': {
        currency: 'GBP',
        symbol: '£',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 0.78,
        defaultTax: 20,
        displayName: 'United Kingdom'
    },
    'europe': { // Represents Eurozone
        currency: 'EUR',
        symbol: '€',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 0.92,
        defaultTax: 20,
        displayName: 'Europe (Eurozone)'
    },
    'china': {
        currency: 'CNY',
        symbol: '¥',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 7.25,
        defaultTax: 13,
        displayName: 'China'
    },
    'japan': {
        currency: 'JPY',
        symbol: '¥',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 160.00,
        defaultTax: 10,
        displayName: 'Japan'
    },
    'australia': {
        currency: 'AUD',
        symbol: 'A$',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 1.50,
        defaultTax: 10,
        displayName: 'Australia'
    },
    'south-africa': {
        currency: 'ZAR',
        symbol: 'R',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 18.00,
        defaultTax: 15,
        displayName: 'South Africa'
    },
    'saudi-arabia': {
        currency: 'SAR',
        symbol: 'SR',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 3.75,
        defaultTax: 15,
        displayName: 'Saudi Arabia'
    },
    'singapore': {
        currency: 'SGD',
        symbol: 'S$',
        basePriceTroyOroyOunceUSD: 3270.00,
        exchangeRateToUSD: 1.35,
        defaultTax: 9,
        displayName: 'Singapore'
    },
    'hong-kong': {
        currency: 'HKD',
        symbol: 'HK$',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 7.80,
        defaultTax: 0,
        displayName: 'Hong Kong'
    },
    'switzerland': {
        currency: 'CHF',
        symbol: 'CHF',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 0.90,
        defaultTax: 8.1,
        displayName: 'Switzerland'
    },
    'turkey': {
        currency: 'TRY',
        symbol: '₺',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 32.5,
        defaultTax: 20,
        displayName: 'Turkey'
    },
    'mexico': {
        currency: 'MXN',
        symbol: 'Mex$',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 18.5,
        defaultTax: 16,
        displayName: 'Mexico'
    },
    'brazil': {
        currency: 'BRL',
        symbol: 'R$',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 5.40,
        defaultTax: 18,
        displayName: 'Brazil'
    },
    'egypt': {
        currency: 'EGP',
        symbol: 'E£',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 47.5,
        defaultTax: 14,
        displayName: 'Egypt'
    },
    'pakistan': {
        currency: 'PKR',
        symbol: '₨',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 278.0,
        defaultTax: 18,
        displayName: 'Pakistan'
    },
    'indonesia': {
        currency: 'IDR',
        symbol: 'Rp',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 16400,
        defaultTax: 11,
        displayName: 'Indonesia'
    },
    'thailand': {
        currency: 'THB',
        symbol: '฿',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 36.7,
        defaultTax: 7,
        displayName: 'Thailand'
    },
    'south-korea': {
        currency: 'KRW',
        symbol: '₩',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 1380,
        defaultTax: 10,
        displayName: 'South Korea'
    },
    'new-zealand': {
        currency: 'NZD',
        symbol: 'NZ$',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 1.63,
        defaultTax: 15,
        displayName: 'New Zealand'
    },
    'qatar': {
        currency: 'QAR',
        symbol: 'QR',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 3.64,
        defaultTax: 0,
        displayName: 'Qatar'
    },
    'kuwait': {
        currency: 'KWD',
        symbol: 'KD',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 0.306,
        defaultTax: 0,
        displayName: 'Kuwait'
    },
    'bahrain': {
        currency: 'BHD',
        symbol: 'BD',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 0.377,
        defaultTax: 5,
        displayName: 'Bahrain'
    },
    'oman': {
        currency: 'OMR',
        symbol: 'OMR',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 0.385,
        defaultTax: 5,
        displayName: 'Oman'
    },
    'malaysia': {
        currency: 'MYR',
        symbol: 'RM',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 4.70,
        defaultTax: 6,
        displayName: 'Malaysia'
    },
    'vietnam': {
        currency: 'VND',
        symbol: '₫',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 25400,
        defaultTax: 10,
        displayName: 'Vietnam'
    },
    'argentina': {
        currency: 'ARS',
        symbol: 'AR$',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 900.00,
        defaultTax: 21,
        displayName: 'Argentina'
    },
    'colombia': {
        currency: 'COP',
        symbol: 'COL$',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 4000.00,
        defaultTax: 19,
        displayName: 'Colombia'
    },
    'nigeria': {
        currency: 'NGN',
        symbol: '₦',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 1500.00,
        defaultTax: 7.5,
        displayName: 'Nigeria'
    },
    'kenya': {
        currency: 'KES',
        symbol: 'KSh',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 130.00,
        defaultTax: 16,
        displayName: 'Kenya'
    },
    'afghanistan': {
        currency: 'AFN',
        symbol: '؋',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 70.00,
        defaultTax: 0,
        displayName: 'Afghanistan'
    },
    'albania': {
        currency: 'ALL',
        symbol: 'L',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 95.00,
        defaultTax: 20,
        displayName: 'Albania'
    },
    'algeria': {
        currency: 'DZD',
        symbol: 'DA',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 135.00,
        defaultTax: 19,
        displayName: 'Algeria'
    },
    'american-samoa': {
        currency: 'USD',
        symbol: '$',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 1,
        defaultTax: 0,
        displayName: 'American Samoa'
    },
    'andorra': {
        currency: 'EUR',
        symbol: '€',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 0.92,
        defaultTax: 4.5,
        displayName: 'Andorra'
    },
    'angola': {
        currency: 'AOA',
        symbol: 'Kz',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 820.00,
        defaultTax: 10,
        displayName: 'Angola'
    },
    'anguilla': {
        currency: 'XCD',
        symbol: 'EC$',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 2.70,
        defaultTax: 0,
        displayName: 'Anguilla'
    },
    'antigua-and-barbuda': {
        currency: 'XCD',
        symbol: 'EC$',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 2.70,
        defaultTax: 15,
        displayName: 'Antigua and Barbuda'
    },
    'armenia': {
        currency: 'AMD',
        symbol: '֏',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 385.00,
        defaultTax: 20,
        displayName: 'Armenia'
    },
    'aruba': {
        currency: 'AWG',
        symbol: 'Afl',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 1.80,
        defaultTax: 0,
        displayName: 'Aruba'
    },
    'austria': {
        currency: 'EUR',
        symbol: '€',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 0.92,
        defaultTax: 20,
        displayName: 'Austria'
    },
    'azerbaijan': {
        currency: 'AZN',
        symbol: '₼',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 1.70,
        defaultTax: 18,
        displayName: 'Azerbaijan'
    },
    'bahamas': {
        currency: 'BSD',
        symbol: 'B$',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 1,
        defaultTax: 12,
        displayName: 'Bahamas'
    },
    'bangladesh': {
        currency: 'BDT',
        symbol: '৳',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 110.00,
        defaultTax: 15,
        displayName: 'Bangladesh'
    },
    'barbados': {
        currency: 'BBD',
        symbol: 'Bds$',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 2.00,
        defaultTax: 17.5,
        displayName: 'Barbados'
    },
    'belarus': {
        currency: 'BYN',
        symbol: 'Br',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 3.20,
        defaultTax: 20,
        displayName: 'Belarus'
    },
    'belgium': {
        currency: 'EUR',
        symbol: '€',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 0.92,
        defaultTax: 21,
        displayName: 'Belgium'
    },
    'belize': {
        currency: 'BZD',
        symbol: 'BZ$',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 2.00,
        defaultTax: 12.5,
        displayName: 'Belize'
    },
    'benin': {
        currency: 'XOF',
        symbol: 'CFA',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 610.00,
        defaultTax: 18,
        displayName: 'Benin'
    },
    'bermuda': {
        currency: 'BMD',
        symbol: 'BD$',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 1,
        defaultTax: 0,
        displayName: 'Bermuda'
    },
    'bhutan': {
        currency: 'BTN',
        symbol: 'Nu.',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 83.00,
        defaultTax: 0,
        displayName: 'Bhutan'
    },
    'bolivia': {
        currency: 'BOB',
        symbol: 'Bs.',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 6.90,
        defaultTax: 13,
        displayName: 'Bolivia'
    },
    'bonaire-sint-eustatius-saba': {
        currency: 'USD',
        symbol: '$',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 1,
        defaultTax: 0,
        displayName: 'Bonaire, Sint Eustatius and Saba'
    },
    'bosnia-and-herzegovina': {
        currency: 'BAM',
        symbol: 'KM',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 1.80,
        defaultTax: 17,
        displayName: 'Bosnia and Herzegovina'
    },
    'botswana': {
        currency: 'BWP',
        symbol: 'P',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 13.50,
        defaultTax: 14,
        displayName: 'Botswana'
    },
    'brunei-darussalam': {
        currency: 'BND',
        symbol: 'B$',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 1.35,
        defaultTax: 0,
        displayName: 'Brunei Darussalam'
    },
    'bulgaria': {
        currency: 'BGN',
        symbol: 'лв',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 1.80,
        defaultTax: 20,
        displayName: 'Bulgaria'
    },
    'burkina-faso': {
        currency: 'XOF',
        symbol: 'CFA',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 610.00,
        defaultTax: 18,
        displayName: 'Burkina Faso'
    },
    'burundi': {
        currency: 'BIF',
        symbol: 'FBu',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 2800.00,
        defaultTax: 18,
        displayName: 'Burundi'
    },
    'cabo-verde': {
        currency: 'CVE',
        symbol: 'Esc',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 100.00,
        defaultTax: 15,
        displayName: 'Cabo Verde'
    },
    'cambodia': {
        currency: 'KHR',
        symbol: '៛',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 4100.00,
        defaultTax: 10,
        displayName: 'Cambodia'
    },
    'cameroon': {
        currency: 'XAF',
        symbol: 'CFA',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 610.00,
        defaultTax: 19.25,
        displayName: 'Cameroon'
    },
    'cayman-islands': {
        currency: 'KYD',
        symbol: 'CI$',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 0.82,
        defaultTax: 0,
        displayName: 'Cayman Islands'
    },
    'central-african-republic': {
        currency: 'XAF',
        symbol: 'CFA',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 610.00,
        defaultTax: 19,
        displayName: 'Central African Republic'
    },
    'chad': {
        currency: 'XAF',
        symbol: 'CFA',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 610.00,
        defaultTax: 18,
        displayName: 'Chad'
    },
    'chile': {
        currency: 'CLP',
        symbol: 'CLP$',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 950.00,
        defaultTax: 19,
        displayName: 'Chile'
    },
    'comoros': {
        currency: 'KMF',
        symbol: 'CF',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 450.00,
        defaultTax: 0,
        displayName: 'Comoros'
    },
    'congo': {
        currency: 'CDF',
        symbol: 'FC',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 2800.00,
        defaultTax: 16,
        displayName: 'Congo'
    },
    'democratic-republic-of-the-congo': {
        currency: 'CDF',
        symbol: 'FC',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 2800.00,
        defaultTax: 16,
        displayName: 'Democratic Republic of the Congo'
    },
    'cook-islands': {
        currency: 'NZD',
        symbol: 'NZ$',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 1.63,
        defaultTax: 15,
        displayName: 'Cook Islands'
    },
    'costa-rica': {
        currency: 'CRC',
        symbol: '₡',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 520.00,
        defaultTax: 13,
        displayName: 'Costa Rica'
    },
    'croatia': {
        currency: 'EUR',
        symbol: '€',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 0.92,
        defaultTax: 25,
        displayName: 'Croatia'
    },
    'cuba': {
        currency: 'CUP',
        symbol: 'CUP',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 24.00,
        defaultTax: 0,
        displayName: 'Cuba'
    },
    'curaçao': {
        currency: 'ANG',
        symbol: 'ƒ',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 1.80,
        defaultTax: 9,
        displayName: 'Curaçao'
    },
    'cyprus': {
        currency: 'EUR',
        symbol: '€',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 0.92,
        defaultTax: 19,
        displayName: 'Cyprus'
    },
    'czechia': {
        currency: 'CZK',
        symbol: 'Kč',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 23.00,
        defaultTax: 21,
        displayName: 'Czechia'
    },
    'cote-d-ivoire': {
        currency: 'XOF',
        symbol: 'CFA',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 610.00,
        defaultTax: 18,
        displayName: 'Côte d\'Ivoire'
    },
    'denmark': {
        currency: 'DKK',
        symbol: 'kr',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 6.90,
        defaultTax: 25,
        displayName: 'Denmark'
    },
    'djibouti': {
        currency: 'DJF',
        symbol: 'Fdj',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 178.00,
        defaultTax: 0,
        displayName: 'Djibouti'
    },
    'dominica': {
        currency: 'XCD',
        symbol: 'EC$',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 2.70,
        defaultTax: 15,
        displayName: 'Dominica'
    },
    'dominican-republic': {
        currency: 'DOP',
        symbol: 'RD$',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 58.00,
        defaultTax: 18,
        displayName: 'Dominican Republic'
    },
    'ecuador': {
        currency: 'USD',
        symbol: '$',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 1,
        defaultTax: 12,
        displayName: 'Ecuador'
    },
    'el-salvador': {
        currency: 'USD',
        symbol: '$',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 1,
        defaultTax: 13,
        displayName: 'El Salvador'
    },
    'equatorial-guinea': {
        currency: 'XAF',
        symbol: 'CFA',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 610.00,
        defaultTax: 15,
        displayName: 'Equatorial Guinea'
    },
    'eritrea': {
        currency: 'ERN',
        symbol: 'Nfk',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 15.00,
        defaultTax: 0,
        displayName: 'Eritrea'
    },
    'estonia': {
        currency: 'EUR',
        symbol: '€',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 0.92,
        defaultTax: 20,
        displayName: 'Estonia'
    },
    'eswatini': {
        currency: 'SZL',
        symbol: 'E',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 18.00,
        defaultTax: 15,
        displayName: 'Eswatini'
    },
    'ethiopia': {
        currency: 'ETB',
        symbol: 'Br',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 57.00,
        defaultTax: 15,
        displayName: 'Ethiopia'
    },
    'falkland-islands': {
        currency: 'FKP',
        symbol: '£',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 0.78,
        defaultTax: 0,
        displayName: 'Falkland Islands (Malvinas)'
    },
    'faroe-islands': {
        currency: 'DKK',
        symbol: 'kr',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 6.90,
        defaultTax: 25,
        displayName: 'Faroe Islands'
    },
    'fiji': {
        currency: 'FJD',
        symbol: 'FJ$',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 2.20,
        defaultTax: 9,
        displayName: 'Fiji'
    },
    'finland': {
        currency: 'EUR',
        symbol: '€',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 0.92,
        defaultTax: 24,
        displayName: 'Finland'
    },
    'france': {
        currency: 'EUR',
        symbol: '€',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 0.92,
        defaultTax: 20,
        displayName: 'France'
    },
    'french-guiana': {
        currency: 'EUR',
        symbol: '€',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 0.92,
        defaultTax: 0,
        displayName: 'French Guiana'
    },
    'french-polynesia': {
        currency: 'XPF',
        symbol: 'CFP',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 110.00,
        defaultTax: 0,
        displayName: 'French Polynesia'
    },
    'french-southern-territories': {
        currency: 'EUR',
        symbol: '€',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 0.92,
        defaultTax: 0,
        displayName: 'French Southern Territories'
    },
    'gabon': {
        currency: 'XAF',
        symbol: 'CFA',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 610.00,
        defaultTax: 18,
        displayName: 'Gabon'
    },
    'gambia': {
        currency: 'GMD',
        symbol: 'D',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 65.00,
        defaultTax: 15,
        displayName: 'Gambia'
    },
    'georgia': {
        currency: 'GEL',
        symbol: '₾',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 2.70,
        defaultTax: 18,
        displayName: 'Georgia'
    },
    'germany': {
        currency: 'EUR',
        symbol: '€',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 0.92,
        defaultTax: 19,
        displayName: 'Germany'
    },
    'ghana': {
        currency: 'GHS',
        symbol: 'GH₵',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 14.00,
        defaultTax: 15,
        displayName: 'Ghana'
    },
    'gibraltar': {
        currency: 'GIP',
        symbol: '£',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 0.78,
        defaultTax: 0,
        displayName: 'Gibraltar'
    },
    'greece': {
        currency: 'EUR',
        symbol: '€',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 0.92,
        defaultTax: 24,
        displayName: 'Greece'
    },
    'greenland': {
        currency: 'DKK',
        symbol: 'kr',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 6.90,
        defaultTax: 0,
        displayName: 'Greenland'
    },
    'grenada': {
        currency: 'XCD',
        symbol: 'EC$',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 2.70,
        defaultTax: 15,
        displayName: 'Grenada'
    },
    'guadeloupe': {
        currency: 'EUR',
        symbol: '€',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 0.92,
        defaultTax: 0,
        displayName: 'Guadeloupe'
    },
    'guam': {
        currency: 'USD',
        symbol: '$',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 1,
        defaultTax: 0,
        displayName: 'Guam'
    },
    'guatemala': {
        currency: 'GTQ',
        symbol: 'Q',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 7.70,
        defaultTax: 12,
        displayName: 'Guatemala'
    },
    'guernsey': {
        currency: 'GBP',
        symbol: '£',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 0.78,
        defaultTax: 0,
        displayName: 'Guernsey'
    },
    'guinea': {
        currency: 'GNF',
        symbol: 'FG',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 8500.00,
        defaultTax: 18,
        displayName: 'Guinea'
    },
    'guinea-bissau': {
        currency: 'XOF',
        symbol: 'CFA',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 610.00,
        defaultTax: 18,
        displayName: 'Guinea-Bissau'
    },
    'guyana': {
        currency: 'GYD',
        symbol: 'G$',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 210.00,
        defaultTax: 14,
        displayName: 'Guyana'
    },
    'haiti': {
        currency: 'HTG',
        symbol: 'G',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 130.00,
        defaultTax: 10,
        displayName: 'Haiti'
    },
    'holy-see': {
        currency: 'EUR',
        symbol: '€',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 0.92,
        defaultTax: 0,
        displayName: 'Holy See (Vatican City State)'
    },
    'honduras': {
        currency: 'HNL',
        symbol: 'L',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 24.50,
        defaultTax: 15,
        displayName: 'Honduras'
    },
    'hungary': {
        currency: 'HUF',
        symbol: 'Ft',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 370.00,
        defaultTax: 27,
        displayName: 'Hungary'
    },
    'iceland': {
        currency: 'ISK',
        symbol: 'kr',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 140.00,
        defaultTax: 24,
        displayName: 'Iceland'
    },
    'iran': {
        currency: 'IRR',
        symbol: '﷼',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 42000.00,
        defaultTax: 9,
        displayName: 'Iran'
    },
    'iraq': {
        currency: 'IQD',
        symbol: 'ع.د',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 1300.00,
        defaultTax: 10,
        displayName: 'Iraq'
    },
    'ireland': {
        currency: 'EUR',
        symbol: '€',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 0.92,
        defaultTax: 23,
        displayName: 'Ireland'
    },
    'isle-of-man': {
        currency: 'GBP',
        symbol: '£',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 0.78,
        defaultTax: 0,
        displayName: 'Isle of Man'
    },
    'israel': {
        currency: 'ILS',
        symbol: '₪',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 3.70,
        defaultTax: 17,
        displayName: 'Israel'
    },
    'italy': {
        currency: 'EUR',
        symbol: '€',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 0.92,
        defaultTax: 22,
        displayName: 'Italy'
    },
    'jamaica': {
        currency: 'JMD',
        symbol: 'J$',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 155.00,
        defaultTax: 15,
        displayName: 'Jamaica'
    },
    'jersey': {
        currency: 'GBP',
        symbol: '£',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 0.78,
        defaultTax: 5,
        displayName: 'Jersey'
    },
    'jordan': {
        currency: 'JOD',
        symbol: 'JD',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 0.71,
        defaultTax: 16,
        displayName: 'Jordan'
    },
    'kazakhstan': {
        currency: 'KZT',
        symbol: '₸',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 450.00,
        defaultTax: 12,
        displayName: 'Kazakhstan'
    },
    'kiribati': {
        currency: 'AUD',
        symbol: 'A$',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 1.50,
        defaultTax: 0,
        displayName: 'Kiribati'
    },
    'north-korea': {
        currency: 'KPW',
        symbol: '₩',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 900.00,
        defaultTax: 0,
        displayName: 'North Korea'
    },
    'kyrgyzstan': {
        currency: 'KGS',
        symbol: 'с',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 89.00,
        defaultTax: 12,
        displayName: 'Kyrgyzstan'
    },
    'laos': {
        currency: 'LAK',
        symbol: '₭',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 20000.00,
        defaultTax: 10,
        displayName: 'Laos'
    },
    'latvia': {
        currency: 'EUR',
        symbol: '€',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 0.92,
        defaultTax: 21,
        displayName: 'Latvia'
    },
    'lebanon': {
        currency: 'LBP',
        symbol: 'ل.ل',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 15000.00,
        defaultTax: 11,
        displayName: 'Lebanon'
    },
    'lesotho': {
        currency: 'LSL',
        symbol: 'L',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 18.00,
        defaultTax: 15,
        displayName: 'Lesotho'
    },
    'liberia': {
        currency: 'LRD',
        symbol: 'L$',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 190.00,
        defaultTax: 10,
        displayName: 'Liberia'
    },
    'libya': {
        currency: 'LYD',
        symbol: 'ل.د',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 4.80,
        defaultTax: 0,
        displayName: 'Libya'
    },
    'liechtenstein': {
        currency: 'CHF',
        symbol: 'CHF',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 0.90,
        defaultTax: 7.7,
        displayName: 'Liechtenstein'
    },
    'lithuania': {
        currency: 'EUR',
        symbol: '€',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 0.92,
        defaultTax: 21,
        displayName: 'Lithuania'
    },
    'luxembourg': {
        currency: 'EUR',
        symbol: '€',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 0.92,
        defaultTax: 17,
        displayName: 'Luxembourg'
    },
    'macao': {
        currency: 'MOP',
        symbol: 'MOP$',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 8.00,
        defaultTax: 0,
        displayName: 'Macao'
    },
    'madagascar': {
        currency: 'MGA',
        symbol: 'Ar',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 4500.00,
        defaultTax: 20,
        displayName: 'Madagascar'
    },
    'malawi': {
        currency: 'MWK',
        symbol: 'MK',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 1700.00,
        defaultTax: 16.5,
        displayName: 'Malawi'
    },
    'maldives': {
        currency: 'MVR',
        symbol: '.ރ',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 15.40,
        defaultTax: 6,
        displayName: 'Maldives'
    },
    'mali': {
        currency: 'XOF',
        symbol: 'CFA',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 610.00,
        defaultTax: 18,
        displayName: 'Mali'
    },
    'malta': {
        currency: 'EUR',
        symbol: '€',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 0.92,
        defaultTax: 18,
        displayName: 'Malta'
    },
    'marshall-islands': {
        currency: 'USD',
        symbol: '$',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 1,
        defaultTax: 0,
        displayName: 'Marshall Islands'
    },
    'martinique': {
        currency: 'EUR',
        symbol: '€',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 0.92,
        defaultTax: 0,
        displayName: 'Martinique'
    },
    'mauritanin': {
        currency: 'MRU',
        symbol: 'UM',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 360.00,
        defaultTax: 18,
        displayName: 'Mauritania'
    },
    'mauritius': {
        currency: 'MUR',
        symbol: '₨',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 46.00,
        defaultTax: 15,
        displayName: 'Mauritius'
    },
    'mayotte': {
        currency: 'EUR',
        symbol: '€',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 0.92,
        defaultTax: 0,
        displayName: 'Mayotte'
    },
    'micronesia': {
        currency: 'USD',
        symbol: '$',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 1,
        defaultTax: 0,
        displayName: 'Micronesia (Federated States of)'
    },
    'moldova': {
        currency: 'MDL',
        symbol: 'L',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 18.00,
        defaultTax: 20,
        displayName: 'Moldova'
    },
    'monaco': {
        currency: 'EUR',
        symbol: '€',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 0.92,
        defaultTax: 20,
        displayName: 'Monaco'
    },
    'mongolia': {
        currency: 'MNT',
        symbol: '₮',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 3400.00,
        defaultTax: 10,
        displayName: 'Mongolia'
    },
    'montenegro': {
        currency: 'EUR',
        symbol: '€',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 0.92,
        defaultTax: 21,
        displayName: 'Montenegro'
    },
    'montserrat': {
        currency: 'XCD',
        symbol: 'EC$',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 2.70,
        defaultTax: 0,
        displayName: 'Montserrat'
    },
    'morocco': {
        currency: 'MAD',
        symbol: 'DH',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 10.00,
        defaultTax: 20,
        displayName: 'Morocco'
    },
    'mozambique': {
        currency: 'MZN',
        symbol: 'MT',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 64.00,
        defaultTax: 17,
        displayName: 'Mozambique'
    },
    'myanmar': {
        currency: 'MMK',
        symbol: 'K',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 2100.00,
        defaultTax: 0,
        displayName: 'Myanmar'
    },
    'namibia': {
        currency: 'NAD',
        symbol: 'N$',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 18.00,
        defaultTax: 15,
        displayName: 'Namibia'
    },
    'nauru': {
        currency: 'AUD',
        symbol: 'A$',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 1.50,
        defaultTax: 0,
        displayName: 'Nauru'
    },
    'nepal': {
        currency: 'NPR',
        symbol: '₨',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 133.00,
        defaultTax: 13,
        displayName: 'Nepal'
    },
    'netherlands': {
        currency: 'EUR',
        symbol: '€',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 0.92,
        defaultTax: 21,
        displayName: 'Netherlands'
    },
    'new-caledonia': {
        currency: 'XPF',
        symbol: 'CFP',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 110.00,
        defaultTax: 0,
        displayName: 'New Caledonia'
    },
    'nicaragua': {
        currency: 'NIO',
        symbol: 'C$',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 36.50,
        defaultTax: 15,
        displayName: 'Nicaragua'
    },
    'niger': {
        currency: 'XOF',
        symbol: 'CFA',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 610.00,
        defaultTax: 18,
        displayName: 'Niger'
    },
    'niue': {
        currency: 'NZD',
        symbol: 'NZ$',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 1.63,
        defaultTax: 0,
        displayName: 'Niue'
    },
    'norfolk-island': {
        currency: 'AUD',
        symbol: 'A$',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 1.50,
        defaultTax: 0,
        displayName: 'Norfolk Island'
    },
    'north-macedonia': {
        currency: 'MKD',
        symbol: 'ден',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 56.00,
        defaultTax: 18,
        displayName: 'North Macedonia'
    },
    'northern-mariana-islands': {
        currency: 'USD',
        symbol: '$',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 1,
        defaultTax: 0,
        displayName: 'Northern Mariana Islands'
    },
    'norway': {
        currency: 'NOK',
        symbol: 'kr',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 10.50,
        defaultTax: 25,
        displayName: 'Norway'
    },
    'palau': {
        currency: 'USD',
        symbol: '$',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 1,
        defaultTax: 0,
        displayName: 'Palau'
    },
    'palestine': {
        currency: 'ILS', // Often uses ILS or JOD
        symbol: '₪',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 3.70,
        defaultTax: 0,
        displayName: 'Palestine, State of'
    },
    'panama': {
        currency: 'PAB',
        symbol: 'B/.',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 1,
        defaultTax: 7,
        displayName: 'Panama'
    },
    'papua-new-guinea': {
        currency: 'PGK',
        symbol: 'K',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 3.80,
        defaultTax: 10,
        displayName: 'Papua New Guinea'
    },
    'paraguay': {
        currency: 'PYG',
        symbol: '₲',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 7400,
        defaultTax: 10,
        displayName: 'Paraguay'
    },
    'peru': {
        currency: 'PEN',
        symbol: 'S/',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 3.70,
        defaultTax: 18,
        displayName: 'Peru'
    },
    'philippines': {
        currency: 'PHP',
        symbol: '₱',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 58.00,
        defaultTax: 12,
        displayName: 'Philippines'
    },
    'pitcairn': {
        currency: 'NZD',
        symbol: 'NZ$',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 1.63,
        defaultTax: 0,
        displayName: 'Pitcairn'
    },
    'poland': {
        currency: 'PLN',
        symbol: 'zł',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 4.00,
        defaultTax: 23,
        displayName: 'Poland'
    },
    'portugal': {
        currency: 'EUR',
        symbol: '€',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 0.92,
        defaultTax: 23,
        displayName: 'Portugal'
    },
    'puerto-rico': {
        currency: 'USD',
        symbol: '$',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 1,
        defaultTax: 10.5,
        displayName: 'Puerto Rico'
    },
    'romania': {
        currency: 'RON',
        symbol: 'lei',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 4.60,
        defaultTax: 19,
        displayName: 'Romania'
    },
    'russia': {
        currency: 'RUB',
        symbol: '₽',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 90.00,
        defaultTax: 20,
        displayName: 'Russia'
    },
    'rwanda': {
        currency: 'RWF',
        symbol: 'RWF',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 1300,
        defaultTax: 18,
        displayName: 'Rwanda'
    },
    'reunion': {
        currency: 'EUR',
        symbol: '€',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 0.92,
        defaultTax: 0,
        displayName: 'Réunion'
    },
    'saint-barthelemy': {
        currency: 'EUR',
        symbol: '€',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 0.92,
        defaultTax: 0,
        displayName: 'Saint Barthélemy'
    },
    'saint-helena': {
        currency: 'SHP',
        symbol: '£',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 0.78,
        defaultTax: 0,
        displayName: 'Saint Helena, Ascension and Tristan da Cunha'
    },
    'saint-kitts-and-nevis': {
        currency: 'XCD',
        symbol: 'EC$',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 2.70,
        defaultTax: 17,
        displayName: 'Saint Kitts and Nevis'
    },
    'saint-lucia': {
        currency: 'XCD',
        symbol: 'EC$',
        basePriceTroyOunceUSD: 2.70,
        defaultTax: 15,
        displayName: 'Saint Lucia'
    },
    'saint-martin-french': {
        currency: 'EUR',
        symbol: '€',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 0.92,
        defaultTax: 0,
        displayName: 'Saint Martin (French part)'
    },
    'saint-pierre-and-miquelon': {
        currency: 'EUR',
        symbol: '€',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 0.92,
        defaultTax: 0,
        displayName: 'Saint Pierre and Miquelon'
    },
    'saint-vincent-and-the-grenadines': {
        currency: 'XCD',
        symbol: 'EC$',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 2.70,
        defaultTax: 15,
        displayName: 'Saint Vincent and the Grenadines'
    },
    'samoa': {
        currency: 'WST',
        symbol: 'WS$',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 2.80,
        defaultTax: 15,
        displayName: 'Samoa'
    },
    'san-marino': {
        currency: 'EUR',
        symbol: '€',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 0.92,
        defaultTax: 17,
        displayName: 'San Marino'
    },
    'sao-tome-and-principe': {
        currency: 'STD',
        symbol: 'Db',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 22000,
        defaultTax: 15,
        displayName: 'Sao Tome and Principe'
    },
    'senegal': {
        currency: 'XOF',
        symbol: 'CFA',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 610.00,
        defaultTax: 18,
        displayName: 'Senegal'
    },
    'serbia': {
        currency: 'RSD',
        symbol: 'дин.',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 108.00,
        defaultTax: 20,
        displayName: 'Serbia'
    },
    'seychelles': {
        currency: 'SCR',
        symbol: 'SR',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 13.50,
        defaultTax: 15,
        displayName: 'Seychelles'
    },
    'sierra-leone': {
        currency: 'SLL',
        symbol: 'Le',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 20000,
        defaultTax: 15,
        displayName: 'Sierra Leone'
    },
    'sint-maarten-dutch': {
        currency: 'ANG',
        symbol: 'ƒ',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 1.80,
        defaultTax: 5,
        displayName: 'Sint Maarten (Dutch part)'
    },
    'slovakia': {
        currency: 'EUR',
        symbol: '€',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 0.92,
        defaultTax: 20,
        displayName: 'Slovakia'
    },
    'slovenia': {
        currency: 'EUR',
        symbol: '€',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 0.92,
        defaultTax: 22,
        displayName: 'Slovenia'
    },
    'solomon-islands': {
        currency: 'SBD',
        symbol: 'SI$',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 8.40,
        defaultTax: 0,
        displayName: 'Solomon Islands'
    },
    'somalia': {
        currency: 'SOS',
        symbol: 'Sh.So.',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 570.00,
        defaultTax: 0,
        displayName: 'Somalia'
    },
    'south-sudan': {
        currency: 'SSP',
        symbol: 'SS£',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 1200.00,
        defaultTax: 0,
        displayName: 'South Sudan'
    },
    'spain': {
        currency: 'EUR',
        symbol: '€',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 0.92,
        defaultTax: 21,
        displayName: 'Spain'
    },
    'sri-lanka': {
        currency: 'LKR',
        symbol: 'Rs',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 300.00,
        defaultTax: 18,
        displayName: 'Sri Lanka'
    },
    'sudn': {
        currency: 'SDG',
        symbol: 'ج.س.',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 600.00,
        defaultTax: 17,
        displayName: 'Sudan'
    },
    'suriname': {
        currency: 'SRD',
        symbol: '$',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 35.00,
        defaultTax: 10,
        displayName: 'Suriname'
    },
    'svalbard-and-jan-mayen': {
        currency: 'NOK',
        symbol: 'kr',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 10.50,
        defaultTax: 0,
        displayName: 'Svalbard and Jan Mayen'
    },
    'sweden': {
        currency: 'SEK',
        symbol: 'kr',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 10.50,
        defaultTax: 25,
        displayName: 'Sweden'
    },
    'syria': {
        currency: 'SYP',
        symbol: '£',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 13500.00,
        defaultTax: 0,
        displayName: 'Syria'
    },
    'taiwan': {
        currency: 'TWD',
        symbol: 'NT$',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 32.00,
        defaultTax: 5,
        displayName: 'Taiwan'
    },
    'tajikistan': {
        currency: 'TJS',
        symbol: 'ЅМ',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 10.90,
        defaultTax: 18,
        displayName: 'Tajikistan'
    },
    'tanzania': {
        currency: 'TZS',
        symbol: 'TSh',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 2500.00,
        defaultTax: 18,
        displayName: 'Tanzania, United Republic of'
    },
    'timor-leste': {
        currency: 'USD',
        symbol: '$',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 1,
        defaultTax: 0,
        displayName: 'Timor-Leste'
    },
    'togo': {
        currency: 'XOF',
        symbol: 'CFA',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 610.00,
        defaultTax: 18,
        displayName: 'Togo'
    },
    'tokelau': {
        currency: 'NZD',
        symbol: 'NZ$',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 1.63,
        defaultTax: 0,
        displayName: 'Tokelau'
    },
    'tonga': {
        currency: 'TOP',
        symbol: 'T$',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 2.30,
        defaultTax: 15,
        displayName: 'Tonga'
    },
    'trinidad-and-tobago': {
        currency: 'TTD',
        symbol: 'TT$',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 6.80,
        defaultTax: 12.5,
        displayName: 'Trinidad and Tobago'
    },
    'tunisia': {
        currency: 'TND',
        symbol: 'DT',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 3.10,
        defaultTax: 19,
        displayName: 'Tunisia'
    },
    'turkmenistan': {
        currency: 'TMT',
        symbol: 'm',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 3.50,
        defaultTax: 0,
        displayName: 'Turkmenistan'
    },
    'turks-and-caicos-islands': {
        currency: 'USD',
        symbol: '$',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 1,
        defaultTax: 0,
        displayName: 'Turks and Caicos Islands'
    },
    'tuvalu': {
        currency: 'AUD',
        symbol: 'A$',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 1.50,
        defaultTax: 0,
        displayName: 'Tuvalu'
    },
    'uganda': {
        currency: 'UGX',
        symbol: 'USh',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 3700.00,
        defaultTax: 18,
        displayName: 'Uganda'
    },
    'ukraine': {
        currency: 'UAH',
        symbol: '₴',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 40.00,
        defaultTax: 20,
        displayName: 'Ukraine'
    },
    'united-states-minor-outlying-islands': {
        currency: 'USD',
        symbol: '$',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 1,
        defaultTax: 0,
        displayName: 'United States Minor Outlying Islands'
    },
    'uruguay': {
        currency: 'UYU',
        symbol: '$U',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 39.00,
        defaultTax: 22,
        displayName: 'Uruguay'
    },
    'uzbekistan': {
        currency: 'UZS',
        symbol: 'сум',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 12600.00,
        defaultTax: 12,
        displayName: 'Uzbekistan'
    },
    'vanuatu': {
        currency: 'VUV',
        symbol: 'Vt',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 120.00,
        defaultTax: 0,
        displayName: 'Vanuatu'
    },
    'venezuela': {
        currency: 'VES',
        symbol: 'Bs.F',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 36.00,
        defaultTax: 16,
        displayName: 'Venezuela (Bolivarian Republic of)'
    },
    'virgin-islands-british': {
        currency: 'USD',
        symbol: '$',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 1,
        defaultTax: 0,
        displayName: 'Virgin Islands, British'
    },
    'virgin-islands-us': {
        currency: 'USD',
        symbol: '$',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 1,
        defaultTax: 0,
        displayName: 'Virgin Islands, U.S.'
    },
    'wallis-and-futuna': {
        currency: 'XPF',
        symbol: 'CFP',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 110.00,
        defaultTax: 0,
        displayName: 'Wallis and Futuna'
    },
    'western-sahara': {
        currency: 'MAD', // Often uses MAD or DZD
        symbol: 'DH',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 10.00,
        defaultTax: 0,
        displayName: 'Western Sahara'
    },
    'yemen': {
        currency: 'YER',
        symbol: '﷼',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 250.00,
        defaultTax: 5,
        displayName: 'Yemen'
    },
    'zambia': {
        currency: 'ZMW',
        symbol: 'ZK',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 26.00,
        defaultTax: 16,
        displayName: 'Zambia'
    },
    'zimbabwe': {
        currency: 'ZWL',
        symbol: 'Z$',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 360000.00,
        defaultTax: 15,
        displayName: 'Zimbabwe'
    },
    'aland-islands': {
        currency: 'EUR',
        symbol: '€',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 0.92,
        defaultTax: 0,
        displayName: 'Åland Islands'
    }
};

// Define purity levels for different karats
const purity = {
    '24': 0.999,
    '22': 0.916,
    '21': 0.875,
    '18': 0.750
};

// Get references to DOM elements
const countrySelect = document.getElementById('countrySelect');
const countryCurrencySymbol = document.getElementById('countryCurrencySymbol');
const actualRealTimePrice = document.getElementById('actualRealTimePrice');
const price24K = document.getElementById('price24K');
const price22K = document.getElementById('price22K');
const price21K = document.getElementById('price21K');
const price18K = document.getElementById('price18K');

const weightInput = document.getElementById('weightInput');
const karatSelect = document.getElementById('karatSelect');
const makingChargesInput = document.getElementById('makingChargesInput');
const taxInput = document.getElementById('taxInput');
const totalValueDisplay = document.getElementById('totalValueDisplay');
const weightError = document.getElementById('weightError');
const goldValueBeforeChargesAndTaxDisplay = document.getElementById('goldValueBeforeChargesAndTax');
const makingChargesAmountDisplay = document.getElementById('makingChargesAmountDisplay');
const taxAmountDisplay = document.getElementById('taxAmountDisplay');
const selectedKaratPriceDisplay = document.getElementById('selectedKaratPriceDisplay');

let currentGoldPricePerGramUSD = 0;

/**
 * Populates the country select dropdown with sorted options.
 * Retains the previously selected value if it exists.
 */
function populateCountrySelect() {
    const currentSelectedValue = countrySelect.value;
    
    // Convert countryData object to an array of objects for sorting
    const countriesArray = Object.keys(countryData).map(key => ({
        value: key,
        text: countryData[key].displayName || key.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    }));

    // Sort the array alphabetically by display name
    countriesArray.sort((a, b) => a.text.localeCompare(b.text));

    // Clear existing options
    countrySelect.innerHTML = '';

    // Add sorted options to the select dropdown
    countriesArray.forEach(country => {
        const option = document.createElement('option');
        option.value = country.value;
        option.textContent = country.text;
        countrySelect.appendChild(option);
    });

    // Set the previously selected value, or default to UAE if no previous value was set
    if (currentSelectedValue && countryData[currentSelectedValue]) {
        countrySelect.value = currentSelectedValue;
    } else {
        countrySelect.value = 'uae'; // Default to UAE
    }
}

/**
 * Updates the displayed gold prices (per troy ounce in local currency and per-gram karat prices).
 * Also triggers the total price calculation and updates default tax.
 * @param {number} newBasePriceTroyOunceUSD - The new base gold price per troy ounce in USD.
 */
function updateGoldPrices(newBasePriceTroyOunceUSD) {
    const selectedCountryKey = countrySelect.value;
    const country = countryData[selectedCountryKey];

    // Update default tax input based on country
    taxInput.value = country.defaultTax;

    // Calculate the displayed price for troy ounce in local currency
    const displayPriceTroyOunce = newBasePriceTroyOunceUSD * country.exchangeRateToUSD;
    countryCurrencySymbol.textContent = displayPriceTroyOunce.toFixed(2);

    // Calculate current 24K gold price per gram in USD
    currentGoldPricePerGramUSD = newBasePriceTroyOunceUSD / GRAMS_PER_TROY_OUNCE;

    // Update individual karat prices per gram in local currency
    price24K.textContent = `${country.symbol}${(currentGoldPricePerGramUSD * purity['24'] * country.exchangeRateToUSD).toFixed(2)}`;
    price22K.textContent = `${country.symbol}${(currentGoldPricePerGramUSD * purity['22'] * country.exchangeRateToUSD).toFixed(2)}`;
    price21K.textContent = `${country.symbol}${(currentGoldPricePerGramUSD * purity['21'] * country.exchangeRateToUSD).toFixed(2)}`;
    price18K.textContent = `${country.symbol}${(currentGoldPricePerGramUSD * purity['18'] * country.exchangeRateToUSD).toFixed(2)}`;

    calculateTotalPrice();
}

/**
 * Simulates fetching a real-time gold price for XAUUSD (per troy ounce).
 * In a real application, you would replace this with an actual fetch call to a financial API.
 */
async function fetchRealtimeGoldPrice() {
    actualRealTimePrice.textContent = '...';
    countryCurrencySymbol.textContent = '';

    try {
        await new Promise(resolve => setTimeout(resolve, 500));

        const selectedCountryKey = countrySelect.value;
        const basePrice = countryData[selectedCountryKey].basePriceTroyOunceUSD;

        const fluctuation = (Math.random() - 0.5) * 20;
        const newBasePriceTroyOunceUSD = basePrice + fluctuation;

        updateGoldPrices(newBasePriceTroyOunceUSD);
    } catch (error) {
        console.error("Error fetching real-time gold price:", error);
        actualRealTimePrice.textContent = 'Error';
        price24K.textContent = 'Error';
        price22K.textContent = 'Error';
        price21K.textContent = 'Error';
        price18K.textContent = 'Error';
        goldValueBeforeChargesAndTaxDisplay.textContent = 'Error';
        makingChargesAmountDisplay.textContent = 'Error';
        taxAmountDisplay.textContent = 'Error';
        totalValueDisplay.textContent = 'Error';
        selectedKaratPriceDisplay.textContent = 'Error';
    }
}

/**
 * Calculates the total estimated gold value including making charges and tax.
 */
function calculateTotalPrice() {
    if (!weightInput || !karatSelect || !makingChargesInput || !taxInput || !goldValueBeforeChargesAndTaxDisplay || !makingChargesAmountDisplay || !taxAmountDisplay || !selectedKaratPriceDisplay) {
        return;
    }

    const weight = parseFloat(weightInput.value);
    const karat = karatSelect.value;
    const makingChargesPercentage = parseFloat(makingChargesInput.value) || 0;
    const taxPercentage = parseFloat(taxInput.value) || 0;

    const selectedCountryKey = countrySelect.value;
    const country = countryData[selectedCountryKey];

    if (isNaN(weight) || weight <= 0) {
        weightError.classList.remove('hidden');
        totalValueDisplay.textContent = `${country.symbol}0.00`;
        goldValueBeforeChargesAndTaxDisplay.textContent = `${country.symbol}0.00`;
        makingChargesAmountDisplay.textContent = `${country.symbol}0.00`;
        taxAmountDisplay.textContent = `${country.symbol}0.00`;
        selectedKaratPriceDisplay.textContent = '';
        return;
    } else {
        weightError.classList.add('hidden');
    }

    // Get the price per gram for the selected karat in USD
    const goldValuePerGramUSD = currentGoldPricePerGramUSD * purity[karat];
    
    // Convert to local currency for calculations and display
    let goldValuePerGramLocal = goldValuePerGramUSD * country.exchangeRateToUSD;

    // Update the display for the selected karat's price right next to the dropdown
    selectedKaratPriceDisplay.textContent = `${country.symbol}${goldValuePerGramLocal.toFixed(2)}`;
    
    // Calculate the total gold value based on input weight and selected karat
    const totalGoldValueLocal = goldValuePerGramLocal * weight;

    // Update the display field for gold value before charges and tax
    goldValueBeforeChargesAndTaxDisplay.textContent = `${country.symbol}${totalGoldValueLocal.toFixed(2)}`;

    // Calculate making charges amount based on percentage of total gold value
    const makingChargesAmount = (totalGoldValueLocal * (makingChargesPercentage / 100));
    // Update the new display field for making charges amount
    makingChargesAmountDisplay.textContent = `${country.symbol}${makingChargesAmount.toFixed(2)}`;

    // Subtotal before tax (gold value + making charges)
    let subtotal = totalGoldValueLocal + makingChargesAmount;

    // Calculate tax
    const taxAmount = (subtotal * (taxPercentage / 100));
    // Update the new display field for tax amount
    taxAmountDisplay.textContent = `${country.symbol}${taxAmount.toFixed(2)}`;

    // Final total price
    const finalTotalPrice = subtotal + taxAmount;

    totalValueDisplay.textContent = `${country.symbol}${finalTotalPrice.toFixed(2)}`;
}

countrySelect.addEventListener('change', fetchRealtimeGoldPrice);
weightInput.addEventListener('input', calculateTotalPrice);
karatSelect.addEventListener('change', calculateTotalPrice);
makingChargesInput.addEventListener('input', calculateTotalPrice);
taxInput.addEventListener('input', calculateTotalPrice);

document.addEventListener('DOMContentLoaded', () => {
    populateCountrySelect(); // Populate and sort on load
    fetchRealtimeGoldPrice();
});
