// script.js

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
        displayName: { en: 'United States', ar: 'الولايات المتحدة' }
    },
    'canada': {
        currency: 'CAD',
        symbol: 'CA$',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 1.37,
        defaultTax: 5,
        displayName: { en: 'Canada', ar: 'كندا' }
    },
    'uae': {
        currency: 'AED',
        symbol: 'AED',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 3.67,
        defaultTax: 5,
        displayName: { en: 'UAE', ar: 'الإمارات العربية المتحدة' }
    },
    'india': {
        currency: 'INR',
        symbol: '₹',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 83.00,
        defaultTax: 3,
        displayName: { en: 'India', ar: 'الهند' }
    },
    'united-kingdom': {
        currency: 'GBP',
        symbol: '£',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 0.78,
        defaultTax: 20,
        displayName: { en: 'United Kingdom', ar: 'المملكة المتحدة' }
    },
    'europe': { // Represents Eurozone
        currency: 'EUR',
        symbol: '€',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 0.92,
        defaultTax: 20,
        displayName: { en: 'Europe (Eurozone)', ar: 'أوروبا (منطقة اليورو)' }
    },
    'china': {
        currency: 'CNY',
        symbol: '¥',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 7.25,
        defaultTax: 13,
        displayName: { en: 'China', ar: 'الصين' }
    },
    'japan': {
        currency: 'JPY',
        symbol: '¥',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 160.00,
        defaultTax: 10,
        displayName: { en: 'Japan', ar: 'اليابان' }
    },
    'australia': {
        currency: 'AUD',
        symbol: 'A$',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 1.50,
        defaultTax: 10,
        displayName: { en: 'Australia', ar: 'أستراليا' }
    },
    'south-africa': {
        currency: 'ZAR',
        symbol: 'R',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 18.00,
        defaultTax: 15,
        displayName: { en: 'South Africa', ar: 'جنوب أفريقيا' }
    },
    'saudi-arabia': {
        currency: 'SAR',
        symbol: 'SR',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 3.75,
        defaultTax: 15,
        displayName: { en: 'Saudi Arabia', ar: 'المملكة العربية السعودية' }
    },
    'singapore': {
        currency: 'SGD',
        symbol: 'S$',
        basePriceTroyOroyOunceUSD: 3270.00,
        exchangeRateToUSD: 1.35,
        defaultTax: 9,
        displayName: { en: 'Singapore', ar: 'سنغافورة' }
    },
    'hong-kong': {
        currency: 'HKD',
        symbol: 'HK$',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 7.80,
        defaultTax: 0,
        displayName: { en: 'Hong Kong', ar: 'هونغ كونغ' }
    },
    'switzerland': {
        currency: 'CHF',
        symbol: 'CHF',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 0.90,
        defaultTax: 8.1,
        displayName: { en: 'Switzerland', ar: 'سويسرا' }
    },
    'turkey': {
        currency: 'TRY',
        symbol: '₺',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 32.5,
        defaultTax: 20,
        displayName: { en: 'Turkey', ar: 'تركيا' }
    },
    'mexico': {
        currency: 'MXN',
        symbol: 'Mex$',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 18.5,
        defaultTax: 16,
        displayName: { en: 'Mexico', ar: 'المكسيك' }
    },
    'brazil': {
        currency: 'BRL',
        symbol: 'R$',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 5.40,
        defaultTax: 18,
        displayName: { en: 'Brazil', ar: 'البرازيل' }
    },
    'egypt': {
        currency: 'EGP',
        symbol: 'E£',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 47.5,
        defaultTax: 14,
        displayName: { en: 'Egypt', ar: 'مصر' }
    },
    'pakistan': {
        currency: 'PKR',
        symbol: '₨',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 278.0,
        defaultTax: 18,
        displayName: { en: 'Pakistan', ar: 'باكستان' }
    },
    'indonesia': {
        currency: 'IDR',
        symbol: 'Rp',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 16400,
        defaultTax: 11,
        displayName: { en: 'Indonesia', ar: 'إندونيسيا' }
    },
    'thailand': {
        currency: 'THB',
        symbol: '฿',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 36.7,
        defaultTax: 7,
        displayName: { en: 'Thailand', ar: 'تايلاند' }
    },
    'south-korea': {
        currency: 'KRW',
        symbol: '₩',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 1380,
        defaultTax: 10,
        displayName: { en: 'South Korea', ar: 'كوريا الجنوبية' }
    },
    'new-zealand': {
        currency: 'NZD',
        symbol: 'NZ$',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 1.63,
        defaultTax: 15,
        displayName: { en: 'New Zealand', ar: 'نيوزيلندا' }
    },
    'qatar': {
        currency: 'QAR',
        symbol: 'QR',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 3.64,
        defaultTax: 0,
        displayName: { en: 'Qatar', ar: 'قطر' }
    },
    'kuwait': {
        currency: 'KWD',
        symbol: 'KD',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 0.306,
        defaultTax: 0,
        displayName: { en: 'Kuwait', ar: 'الكويت' }
    },
    'bahrain': {
        currency: 'BHD',
        symbol: 'BD',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 0.377,
        defaultTax: 5,
        displayName: { en: 'Bahrain', ar: 'البحرين' }
    },
    'oman': {
        currency: 'OMR',
        symbol: 'OMR',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 0.385,
        defaultTax: 5,
        displayName: { en: 'Oman', ar: 'عمان' }
    },
    'malaysia': {
        currency: 'MYR',
        symbol: 'RM',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 4.70,
        defaultTax: 6,
        displayName: { en: 'Malaysia', ar: 'ماليزيا' }
    },
    'vietnam': {
        currency: 'VND',
        symbol: '₫',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 25400,
        defaultTax: 10,
        displayName: { en: 'Vietnam', ar: 'فيتنام' }
    },
    'argentina': {
        currency: 'ARS',
        symbol: 'AR$',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 900.00,
        defaultTax: 21,
        displayName: { en: 'Argentina', ar: 'الأرجنتين' }
    },
    'colombia': {
        currency: 'COP',
        symbol: 'COL$',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 4000.00,
        defaultTax: 19,
        displayName: { en: 'Colombia', ar: 'كولومبيا' }
    },
    'nigeria': {
        currency: 'NGN',
        symbol: '₦',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 1500.00,
        defaultTax: 7.5,
        displayName: { en: 'Nigeria', ar: 'نيجيريا' }
    },
    'kenya': {
        currency: 'KES',
        symbol: 'KSh',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 130.00,
        defaultTax: 16,
        displayName: { en: 'Kenya', ar: 'كينيا' }
    },
    'afghanistan': {
        currency: 'AFN',
        symbol: '؋',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 70.00,
        defaultTax: 0,
        displayName: { en: 'Afghanistan', ar: 'أفغانستان' }
    },
    'albania': {
        currency: 'ALL',
        symbol: 'L',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 95.00,
        defaultTax: 20,
        displayName: { en: 'Albania', ar: 'ألبانيا' }
    },
    'algeria': {
        currency: 'DZD',
        symbol: 'DA',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 135.00,
        defaultTax: 19,
        displayName: { en: 'Algeria', ar: 'الجزائر' }
    },
    'american-samoa': {
        currency: 'USD',
        symbol: '$',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 1,
        defaultTax: 0,
        displayName: { en: 'American Samoa', ar: 'ساموا الأمريكية' }
    },
    'andorra': {
        currency: 'EUR',
        symbol: '€',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 0.92,
        defaultTax: 4.5,
        displayName: { en: 'Andorra', ar: 'أندورا' }
    },
    'angola': {
        currency: 'AOA',
        symbol: 'Kz',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 820.00,
        defaultTax: 10,
        displayName: { en: 'Angola', ar: 'أنغولا' }
    },
    'anguilla': {
        currency: 'XCD',
        symbol: 'EC$',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 2.70,
        defaultTax: 0,
        displayName: { en: 'Anguilla', ar: 'أنغويلا' }
    },
    'antigua-and-barbuda': {
        currency: 'XCD',
        symbol: 'EC$',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 2.70,
        defaultTax: 15,
        displayName: { en: 'Antigua and Barbuda', ar: 'أنتيغوا وباربودا' }
    },
    'armenia': {
        currency: 'AMD',
        symbol: '֏',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 385.00,
        defaultTax: 20,
        displayName: { en: 'Armenia', ar: 'أرمينيا' }
    },
    'aruba': {
        currency: 'AWG',
        symbol: 'Afl',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 1.80,
        defaultTax: 0,
        displayName: { en: 'Aruba', ar: 'أروبا' }
    },
    'austria': {
        currency: 'EUR',
        symbol: '€',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 0.92,
        defaultTax: 20,
        displayName: { en: 'Austria', ar: 'النمسا' }
    },
    'azerbaijan': {
        currency: 'AZN',
        symbol: '₼',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 1.70,
        defaultTax: 18,
        displayName: { en: 'Azerbaijan', ar: 'أذربيجان' }
    },
    'bahamas': {
        currency: 'BSD',
        symbol: 'B$',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 1,
        defaultTax: 12,
        displayName: { en: 'Bahamas', ar: 'جزر البهاما' }
    },
    'bangladesh': {
        currency: 'BDT',
        symbol: '৳',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 110.00,
        defaultTax: 15,
        displayName: { en: 'Bangladesh', ar: 'بنغلاديش' }
    },
    'barbados': {
        currency: 'BBD',
        symbol: 'Bds$',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 2.00,
        defaultTax: 17.5,
        displayName: { en: 'Barbados', ar: 'بربادوس' }
    },
    'belarus': {
        currency: 'BYN',
        symbol: 'Br',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 3.20,
        defaultTax: 20,
        displayName: { en: 'Belarus', ar: 'بيلاروسيا' }
    },
    'belgium': {
        currency: 'EUR',
        symbol: '€',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 0.92,
        defaultTax: 21,
        displayName: { en: 'Belgium', ar: 'بلجيكا' }
    },
    'belize': {
        currency: 'BZD',
        symbol: 'BZ$',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 2.00,
        defaultTax: 12.5,
        displayName: { en: 'Belize', ar: 'بليز' }
    },
    'benin': {
        currency: 'XOF',
        symbol: 'CFA',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 610.00,
        defaultTax: 18,
        displayName: { en: 'Benin', ar: 'بنين' }
    },
    'bermuda': {
        currency: 'BMD',
        symbol: 'BD$',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 1,
        defaultTax: 0,
        displayName: { en: 'Bermuda', ar: 'برمودا' }
    },
    'bhutan': {
        currency: 'BTN',
        symbol: 'Nu.',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 83.00,
        defaultTax: 0,
        displayName: { en: 'Bhutan', ar: 'بوتان' }
    },
    'bolivia': {
        currency: 'BOB',
        symbol: 'Bs.',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 6.90,
        defaultTax: 13,
        displayName: { en: 'Bolivia', ar: 'بوليفيا' }
    },
    'bonaire-sint-eustatius-saba': {
        currency: 'USD',
        symbol: '$',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 1,
        defaultTax: 0,
        displayName: { en: 'Bonaire, Sint Eustatius and Saba', ar: 'بونير وسينت أوستاتيوس وسابا' }
    },
    'bosnia-and-herzegovina': {
        currency: 'BAM',
        symbol: 'KM',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 1.80,
        defaultTax: 17,
        displayName: { en: 'Bosnia and Herzegovina', ar: 'البوسنة والهرسك' }
    },
    'botswana': {
        currency: 'BWP',
        symbol: 'P',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 13.50,
        defaultTax: 14,
        displayName: { en: 'Botswana', ar: 'بوتسوانا' }
    },
    'brunei-darussalam': {
        currency: 'BND',
        symbol: 'B$',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 1.35,
        defaultTax: 0,
        displayName: { en: 'Brunei Darussalam', ar: 'بروناي دار السلام' }
    },
    'bulgaria': {
        currency: 'BGN',
        symbol: 'лв',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 1.80,
        defaultTax: 20,
        displayName: { en: 'Bulgaria', ar: 'بلغاريا' }
    },
    'burkina-faso': {
        currency: 'XOF',
        symbol: 'CFA',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 610.00,
        defaultTax: 18,
        displayName: { en: 'Burkina Faso', ar: 'بوركينا فاسو' }
    },
    'burundi': {
        currency: 'BIF',
        symbol: 'FBu',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 2800.00,
        defaultTax: 18,
        displayName: { en: 'Burundi', ar: 'بوروندي' }
    },
    'cabo-verde': {
        currency: 'CVE',
        symbol: 'Esc',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 100.00,
        defaultTax: 15,
        displayName: { en: 'Cabo Verde', ar: 'الرأس الأخضر' }
    },
    'cambodia': {
        currency: 'KHR',
        symbol: '៛',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 4100.00,
        defaultTax: 10,
        displayName: { en: 'Cambodia', ar: 'كمبوديا' }
    },
    'cameroon': {
        currency: 'XAF',
        symbol: 'CFA',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 610.00,
        defaultTax: 19.25,
        displayName: { en: 'Cameroon', ar: 'الكاميرون' }
    },
    'cayman-islands': {
        currency: 'KYD',
        symbol: 'CI$',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 0.82,
        defaultTax: 0,
        displayName: { en: 'Cayman Islands', ar: 'جزر كايمان' }
    },
    'central-african-republic': {
        currency: 'XAF',
        symbol: 'CFA',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 610.00,
        defaultTax: 19,
        displayName: { en: 'Central African Republic', ar: 'جمهورية أفريقيا الوسطى' }
    },
    'chad': {
        currency: 'XAF',
        symbol: 'CFA',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 610.00,
        defaultTax: 18,
        displayName: { en: 'Chad', ar: 'تشاد' }
    },
    'chile': {
        currency: 'CLP',
        symbol: 'CLP$',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 950.00,
        defaultTax: 19,
        displayName: { en: 'Chile', ar: 'تشيلي' }
    },
    'comoros': {
        currency: 'KMF',
        symbol: 'CF',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 450.00,
        defaultTax: 0,
        displayName: { en: 'Comoros', ar: 'جزر القمر' }
    },
    'congo': {
        currency: 'CDF',
        symbol: 'FC',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 2800.00,
        defaultTax: 16,
        displayName: { en: 'Congo', ar: 'الكونغو' }
    },
    'democratic-republic-of-the-congo': {
        currency: 'CDF',
        symbol: 'FC',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 2800.00,
        defaultTax: 16,
        displayName: { en: 'Democratic Republic of the Congo', ar: 'جمهورية الكونغو الديمقراطية' }
    },
    'cook-islands': {
        currency: 'NZD',
        symbol: 'NZ$',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 1.63,
        defaultTax: 15,
        displayName: { en: 'Cook Islands', ar: 'جزر كوك' }
    },
    'costa-rica': {
        currency: 'CRC',
        symbol: '₡',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 520.00,
        defaultTax: 13,
        displayName: { en: 'Costa Rica', ar: 'كوستاريكا' }
    },
    'croatia': {
        currency: 'EUR',
        symbol: '€',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 0.92,
        defaultTax: 25,
        displayName: { en: 'Croatia', ar: 'كرواتيا' }
    },
    'cuba': {
        currency: 'CUP',
        symbol: 'CUP',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 24.00,
        defaultTax: 0,
        displayName: { en: 'Cuba', ar: 'كوبا' }
    },
    'curaçao': {
        currency: 'ANG',
        symbol: 'ƒ',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 1.80,
        defaultTax: 9,
        displayName: { en: 'Curaçao', ar: 'كوراساو' }
    },
    'cyprus': {
        currency: 'EUR',
        symbol: '€',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 0.92,
        defaultTax: 19,
        displayName: { en: 'Cyprus', ar: 'قبرص' }
    },
    'czechia': {
        currency: 'CZK',
        symbol: 'Kč',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 23.00,
        defaultTax: 21,
        displayName: { en: 'Czechia', ar: 'التشيك' }
    },
    'cote-d-ivoire': {
        currency: 'XOF',
        symbol: 'CFA',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 610.00,
        defaultTax: 18,
        displayName: { en: 'Côte d\'Ivoire', ar: 'ساحل العاج' }
    },
    'denmark': {
        currency: 'DKK',
        symbol: 'kr',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 6.90,
        defaultTax: 25,
        displayName: { en: 'Denmark', ar: 'الدنمارك' }
    },
    'djibouti': {
        currency: 'DJF',
        symbol: 'Fdj',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 178.00,
        defaultTax: 0,
        displayName: { en: 'Djibouti', ar: 'جيبوتي' }
    },
    'dominica': {
        currency: 'XCD',
        symbol: 'EC$',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 2.70,
        defaultTax: 15,
        displayName: { en: 'Dominica', ar: 'دومينيكا' }
    },
    'dominican-republic': {
        currency: 'DOP',
        symbol: 'RD$',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 58.00,
        defaultTax: 18,
        displayName: { en: 'Dominican Republic', ar: 'جمهورية الدومينيكان' }
    },
    'ecuador': {
        currency: 'USD',
        symbol: '$',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 1,
        defaultTax: 12,
        displayName: { en: 'Ecuador', ar: 'الإكوادور' }
    },
    'el-salvador': {
        currency: 'USD',
        symbol: '$',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 1,
        defaultTax: 13,
        displayName: { en: 'El Salvador', ar: 'السلفادور' }
    },
    'equatorial-guinea': {
        currency: 'XAF',
        symbol: 'CFA',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 610.00,
        defaultTax: 15,
        displayName: { en: 'Equatorial Guinea', ar: 'غينيا الاستوائية' }
    },
    'eritrea': {
        currency: 'ERN',
        symbol: 'Nfk',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 15.00,
        defaultTax: 0,
        displayName: { en: 'Eritrea', ar: 'إريتريا' }
    },
    'estonia': {
        currency: 'EUR',
        symbol: '€',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 0.92,
        defaultTax: 20,
        displayName: { en: 'Estonia', ar: 'إستونيا' }
    },
    'eswatini': {
        currency: 'SZL',
        symbol: 'E',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 18.00,
        defaultTax: 15,
        displayName: { en: 'Eswatini', ar: 'إسواتيني' }
    },
    'ethiopia': {
        currency: 'ETB',
        symbol: 'Br',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 57.00,
        defaultTax: 15,
        displayName: { en: 'Ethiopia', ar: 'إثيوبيا' }
    },
    'falkland-islands': {
        currency: 'FKP',
        symbol: '£',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 0.78,
        defaultTax: 0,
        displayName: { en: 'Falkland Islands (Malvinas)', ar: 'جزر فوكلاند (مالفيناس)' }
    },
    'faroe-islands': {
        currency: 'DKK',
        symbol: 'kr',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 6.90,
        defaultTax: 25,
        displayName: { en: 'Faroe Islands', ar: 'جزر فارو' }
    },
    'fiji': {
        currency: 'FJD',
        symbol: 'FJ$',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 2.20,
        defaultTax: 9,
        displayName: { en: 'Fiji', ar: 'فيجي' }
    },
    'finland': {
        currency: 'EUR',
        symbol: '€',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 0.92,
        defaultTax: 24,
        displayName: { en: 'Finland', ar: 'فنلندا' }
    },
    'france': {
        currency: 'EUR',
        symbol: '€',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 0.92,
        defaultTax: 20,
        displayName: { en: 'France', ar: 'فرنسا' }
    },
    'french-guiana': {
        currency: 'EUR',
        symbol: '€',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 0.92,
        defaultTax: 0,
        displayName: { en: 'French Guiana', ar: 'غويانا الفرنسية' }
    },
    'french-polynesia': {
        currency: 'XPF',
        symbol: 'CFP',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 110.00,
        defaultTax: 0,
        displayName: { en: 'French Polynesia', ar: 'بولينيزيا الفرنسية' }
    },
    'french-southern-territories': {
        currency: 'EUR',
        symbol: '€',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 0.92,
        defaultTax: 0,
        displayName: { en: 'French Southern Territories', ar: 'المناطق الجنوبية الفرنسية' }
    },
    'gabon': {
        currency: 'XAF',
        symbol: 'CFA',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 610.00,
        defaultTax: 18,
        displayName: { en: 'Gabon', ar: 'الغابون' }
    },
    'gambia': {
        currency: 'GMD',
        symbol: 'D',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 65.00,
        defaultTax: 15,
        displayName: { en: 'Gambia', ar: 'غامبيا' }
    },
    'georgia': {
        currency: 'GEL',
        symbol: '₾',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 2.70,
        defaultTax: 18,
        displayName: { en: 'Georgia', ar: 'جورجيا' }
    },
    'germany': {
        currency: 'EUR',
        symbol: '€',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 0.92,
        defaultTax: 19,
        displayName: { en: 'Germany', ar: 'ألمانيا' }
    },
    'ghana': {
        currency: 'GHS',
        symbol: 'GH₵',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 14.00,
        defaultTax: 15,
        displayName: { en: 'Ghana', ar: 'غانا' }
    },
    'gibraltar': {
        currency: 'GIP',
        symbol: '£',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 0.78,
        defaultTax: 0,
        displayName: { en: 'Gibraltar', ar: 'جبل طارق' }
    },
    'greece': {
        currency: 'EUR',
        symbol: '€',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 0.92,
        defaultTax: 24,
        displayName: { en: 'Greece', ar: 'اليونان' }
    },
    'greenland': {
        currency: 'DKK',
        symbol: 'kr',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 6.90,
        defaultTax: 0,
        displayName: { en: 'Greenland', ar: 'غرينلاند' }
    },
    'grenada': {
        currency: 'XCD',
        symbol: 'EC$',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 2.70,
        defaultTax: 15,
        displayName: { en: 'Grenada', ar: 'غرينادا' }
    },
    'guadeloupe': {
        currency: 'EUR',
        symbol: '€',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 0.92,
        defaultTax: 0,
        displayName: { en: 'Guadeloupe', ar: 'جوادلوب' }
    },
    'guam': {
        currency: 'USD',
        symbol: '$',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 1,
        defaultTax: 0,
        displayName: { en: 'Guam', ar: 'غوام' }
    },
    'guatemala': {
        currency: 'GTQ',
        symbol: 'Q',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 7.70,
        defaultTax: 12,
        displayName: { en: 'Guatemala', ar: 'غواتيمالا' }
    },
    'guernsey': {
        currency: 'GBP',
        symbol: '£',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 0.78,
        defaultTax: 0,
        displayName: { en: 'Guernsey', ar: 'غيرنزي' }
    },
    'guinea': {
        currency: 'GNF',
        symbol: 'FG',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 8500.00,
        defaultTax: 18,
        displayName: { en: 'Guinea', ar: 'غينيا' }
    },
    'guinea-bissau': {
        currency: 'XOF',
        symbol: 'CFA',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 610.00,
        defaultTax: 18,
        displayName: { en: 'Guinea-Bissau', ar: 'غينيا بيساو' }
    },
    'guyana': {
        currency: 'GYD',
        symbol: 'G$',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 210.00,
        defaultTax: 14,
        displayName: { en: 'Guyana', ar: 'غيانا' }
    },
    'haiti': {
        currency: 'HTG',
        symbol: 'G',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 130.00,
        defaultTax: 10,
        displayName: { en: 'Haiti', ar: 'هايتي' }
    },
    'holy-see': {
        currency: 'EUR',
        symbol: '€',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 0.92,
        defaultTax: 0,
        displayName: { en: 'Holy See (Vatican City State)', ar: 'الكرسي الرسولي (دولة الفاتيكان)' }
    },
    'honduras': {
        currency: 'HNL',
        symbol: 'L',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 24.50,
        defaultTax: 15,
        displayName: { en: 'Honduras', ar: 'هندوراس' }
    },
    'hungary': {
        currency: 'HUF',
        symbol: 'Ft',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 370.00,
        defaultTax: 27,
        displayName: { en: 'Hungary', ar: 'المجر' }
    },
    'iceland': {
        currency: 'ISK',
        symbol: 'kr',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 140.00,
        defaultTax: 24,
        displayName: { en: 'Iceland', ar: 'آيسلندا' }
    },
    'iran': {
        currency: 'IRR',
        symbol: '﷼',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 42000.00,
        defaultTax: 9,
        displayName: { en: 'Iran', ar: 'إيران' }
    },
    'iraq': {
        currency: 'IQD',
        symbol: 'ع.د',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 1300.00,
        defaultTax: 10,
        displayName: { en: 'Iraq', ar: 'العراق' }
    },
    'ireland': {
        currency: 'EUR',
        symbol: '€',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 0.92,
        defaultTax: 23,
        displayName: { en: 'Ireland', ar: 'أيرلندا' }
    },
    'isle-of-man': {
        currency: 'GBP',
        symbol: '£',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 0.78,
        defaultTax: 0,
        displayName: { en: 'Isle of Man', ar: 'جزيرة مان' }
    },
    'israel': {
        currency: 'ILS',
        symbol: '₪',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 3.70,
        defaultTax: 17,
        displayName: { en: 'Israel', ar: 'إسرائيل' }
    },
    'italy': {
        currency: 'EUR',
        symbol: '€',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 0.92,
        defaultTax: 22,
        displayName: { en: 'Italy', ar: 'إيطاليا' }
    },
    'jamaica': {
        currency: 'JMD',
        symbol: 'J$',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 155.00,
        defaultTax: 15,
        displayName: { en: 'Jamaica', ar: 'جامايكا' }
    },
    'jersey': {
        currency: 'GBP',
        symbol: '£',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 0.78,
        defaultTax: 5,
        displayName: { en: 'Jersey', ar: 'جيرسي' }
    },
    'jordan': {
        currency: 'JOD',
        symbol: 'JD',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 0.71,
        defaultTax: 16,
        displayName: { en: 'Jordan', ar: 'الأردن' }
    },
    'kazakhstan': {
        currency: 'KZT',
        symbol: '₸',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 450.00,
        defaultTax: 12,
        displayName: { en: 'Kazakhstan', ar: 'كازاخستان' }
    },
    'kiribati': {
        currency: 'AUD',
        symbol: 'A$',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 1.50,
        defaultTax: 0,
        displayName: { en: 'Kiribati', ar: 'كيريباتي' }
    },
    'north-korea': {
        currency: 'KPW',
        symbol: '₩',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 900.00,
        defaultTax: 0,
        displayName: { en: 'North Korea', ar: 'كوريا الشمالية' }
    },
    'kyrgyzstan': {
        currency: 'KGS',
        symbol: 'с',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 89.00,
        defaultTax: 12,
        displayName: { en: 'Kyrgyzstan', ar: 'قيرغيزستان' }
    },
    'laos': {
        currency: 'LAK',
        symbol: '₭',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 20000.00,
        defaultTax: 10,
        displayName: { en: 'Laos', ar: 'لاوس' }
    },
    'latvia': {
        currency: 'EUR',
        symbol: '€',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 0.92,
        defaultTax: 21,
        displayName: { en: 'Latvia', ar: 'لاتفيا' }
    },
    'lebanon': {
        currency: 'LBP',
        symbol: 'ل.ل',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 15000.00,
        defaultTax: 11,
        displayName: { en: 'Lebanon', ar: 'لبنان' }
    },
    'lesotho': {
        currency: 'LSL',
        symbol: 'L',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 18.00,
        defaultTax: 15,
        displayName: { en: 'Lesotho', ar: 'ليسوتو' }
    },
    'liberia': {
        currency: 'LRD',
        symbol: 'L$',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 190.00,
        defaultTax: 10,
        displayName: { en: 'Liberia', ar: 'ليبيريا' }
    },
    'libya': {
        currency: 'LYD',
        symbol: 'ل.د',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 4.80,
        defaultTax: 0,
        displayName: { en: 'Libya', ar: 'ليبيا' }
    },
    'liechtenstein': {
        currency: 'CHF',
        symbol: 'CHF',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 0.90,
        defaultTax: 7.7,
        displayName: { en: 'Liechtenstein', ar: 'ليختنشتاين' }
    },
    'lithuania': {
        currency: 'EUR',
        symbol: '€',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 0.92,
        defaultTax: 21,
        displayName: { en: 'Lithuania', ar: 'ليتوانيا' }
    },
    'luxembourg': {
        currency: 'EUR',
        symbol: '€',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 0.92,
        defaultTax: 17,
        displayName: { en: 'Luxembourg', ar: 'لوكسمبورغ' }
    },
    'macao': {
        currency: 'MOP',
        symbol: 'MOP$',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 8.00,
        defaultTax: 0,
        displayName: { en: 'Macao', ar: 'ماكاو' }
    },
    'madagascar': {
        currency: 'MGA',
        symbol: 'Ar',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 4500.00,
        defaultTax: 20,
        displayName: { en: 'Madagascar', ar: 'مدغشقر' }
    },
    'malawi': {
        currency: 'MWK',
        symbol: 'MK',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 1700.00,
        defaultTax: 16.5,
        displayName: { en: 'Malawi', ar: 'مالاوي' }
    },
    'maldives': {
        currency: 'MVR',
        symbol: '.ރ',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 15.40,
        defaultTax: 6,
        displayName: { en: 'Maldives', ar: 'جزر المالديف' }
    },
    'mali': {
        currency: 'XOF',
        symbol: 'CFA',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 610.00,
        defaultTax: 18,
        displayName: { en: 'Mali', ar: 'مالي' }
    },
    'malta': {
        currency: 'EUR',
        symbol: '€',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 0.92,
        defaultTax: 18,
        displayName: { en: 'Malta', ar: 'مالطا' }
    },
    'marshall-islands': {
        currency: 'USD',
        symbol: '$',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 1,
        defaultTax: 0,
        displayName: { en: 'Marshall Islands', ar: 'جزر مارشال' }
    },
    'martinique': {
        currency: 'EUR',
        symbol: '€',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 0.92,
        defaultTax: 0,
        displayName: { en: 'Martinique', ar: 'مارتينيك' }
    },
    'mauritanin': {
        currency: 'MRU',
        symbol: 'UM',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 360.00,
        defaultTax: 18,
        displayName: { en: 'Mauritania', ar: 'موريتانيا' }
    },
    'mauritius': {
        currency: 'MUR',
        symbol: '₨',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 46.00,
        defaultTax: 15,
        displayName: { en: 'Mauritius', ar: 'موريشيوس' }
    },
    'mayotte': {
        currency: 'EUR',
        symbol: '€',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 0.92,
        defaultTax: 0,
        displayName: { en: 'Mayotte', ar: 'مايوت' }
    },
    'micronesia': {
        currency: 'USD',
        symbol: '$',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 1,
        defaultTax: 0,
        displayName: { en: 'Micronesia (Federated States of)', ar: 'ميكرونيزيا (ولايات - الموحدة)' }
    },
    'moldova': {
        currency: 'MDL',
        symbol: 'L',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 18.00,
        defaultTax: 20,
        displayName: { en: 'Moldova', ar: 'مولدوفا' }
    },
    'monaco': {
        currency: 'EUR',
        symbol: '€',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 0.92,
        defaultTax: 20,
        displayName: { en: 'Monaco', ar: 'موناكو' }
    },
    'mongolia': {
        currency: 'MNT',
        symbol: '₮',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 3400.00,
        defaultTax: 10,
        displayName: { en: 'Mongolia', ar: 'منغوليا' }
    },
    'montenegro': {
        currency: 'EUR',
        symbol: '€',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 0.92,
        defaultTax: 21,
        displayName: { en: 'Montenegro', ar: 'الجبل الأسود' }
    },
    'montserrat': {
        currency: 'XCD',
        symbol: 'EC$',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 2.70,
        defaultTax: 0,
        displayName: { en: 'Montserrat', ar: 'مونتسيرات' }
    },
    'morocco': {
        currency: 'MAD',
        symbol: 'DH',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 10.00,
        defaultTax: 20,
        displayName: { en: 'Morocco', ar: 'المغرب' }
    },
    'mozambique': {
        currency: 'MZN',
        symbol: 'MT',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 64.00,
        defaultTax: 17,
        displayName: { en: 'Mozambique', ar: 'موزمبيق' }
    },
    'myanmar': {
        currency: 'MMK',
        symbol: 'K',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 2100.00,
        defaultTax: 0,
        displayName: { en: 'Myanmar', ar: 'ميانمار' }
    },
    'namibia': {
        currency: 'NAD',
        symbol: 'N$',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 18.00,
        defaultTax: 15,
        displayName: { en: 'Namibia', ar: 'ناميبيا' }
    },
    'nauru': {
        currency: 'AUD',
        symbol: 'A$',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 1.50,
        defaultTax: 0,
        displayName: { en: 'Nauru', ar: 'ناورو' }
    },
    'nepal': {
        currency: 'NPR',
        symbol: '₨',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 133.00,
        defaultTax: 13,
        displayName: { en: 'Nepal', ar: 'نيبال' }
    },
    'netherlands': {
        currency: 'EUR',
        symbol: '€',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 0.92,
        defaultTax: 21,
        displayName: { en: 'Netherlands', ar: 'هولندا' }
    },
    'new-caledonia': {
        currency: 'XPF',
        symbol: 'CFP',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 110.00,
        defaultTax: 0,
        displayName: { en: 'New Caledonia', ar: 'كاليدونيا الجديدة' }
    },
    'nicaragua': {
        currency: 'NIO',
        symbol: 'C$',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 36.50,
        defaultTax: 15,
        displayName: { en: 'Nicaragua', ar: 'نيكاراغوا' }
    },
    'niger': {
        currency: 'XOF',
        symbol: 'CFA',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 610.00,
        defaultTax: 18,
        displayName: { en: 'Niger', ar: 'النيجر' }
    },
    'niue': {
        currency: 'NZD',
        symbol: 'NZ$',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 1.63,
        defaultTax: 0,
        displayName: { en: 'Niue', ar: 'نيوي' }
    },
    'norfolk-island': {
        currency: 'AUD',
        symbol: 'A$',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 1.50,
        defaultTax: 0,
        displayName: { en: 'Norfolk Island', ar: 'جزيرة نورفولك' }
    },
    'north-macedonia': {
        currency: 'MKD',
        symbol: 'ден',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 56.00,
        defaultTax: 18,
        displayName: { en: 'North Macedonia', ar: 'مقدونيا الشمالية' }
    },
    'northern-mariana-islands': {
        currency: 'USD',
        symbol: '$',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 1,
        defaultTax: 0,
        displayName: { en: 'Northern Mariana Islands', ar: 'جزر ماريانا الشمالية' }
    },
    'norway': {
        currency: 'NOK',
        symbol: 'kr',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 10.50,
        defaultTax: 25,
        displayName: { en: 'Norway', ar: 'النرويج' }
    },
    'palau': {
        currency: 'USD',
        symbol: '$',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 1,
        defaultTax: 0,
        displayName: { en: 'Palau', ar: 'بالاو' }
    },
    'palestine': {
        currency: 'ILS', // Often uses ILS or JOD
        symbol: '₪',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 3.70,
        defaultTax: 0,
        displayName: { en: 'Palestine, State of', ar: 'دولة فلسطين' }
    },
    'panama': {
        currency: 'PAB',
        symbol: 'B/.',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 1,
        defaultTax: 7,
        displayName: { en: 'Panama', ar: 'بنما' }
    },
    'papua-new-guinea': {
        currency: 'PGK',
        symbol: 'K',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 3.80,
        defaultTax: 10,
        displayName: { en: 'Papua New Guinea', ar: 'بابوا غينيا الجديدة' }
    },
    'paraguay': {
        currency: 'PYG',
        symbol: '₲',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 7400,
        defaultTax: 10,
        displayName: { en: 'Paraguay', ar: 'باراغواي' }
    },
    'peru': {
        currency: 'PEN',
        symbol: 'S/',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 3.70,
        defaultTax: 18,
        displayName: { en: 'Peru', ar: 'بيرو' }
    },
    'philippines': {
        currency: 'PHP',
        symbol: '₱',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 58.00,
        defaultTax: 12,
        displayName: { en: 'Philippines', ar: 'الفلبين' }
    },
    'pitcairn': {
        currency: 'NZD',
        symbol: 'NZ$',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 1.63,
        defaultTax: 0,
        displayName: { en: 'Pitcairn', ar: 'جزر بيتكيرن' }
    },
    'poland': {
        currency: 'PLN',
        symbol: 'zł',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 4.00,
        defaultTax: 23,
        displayName: { en: 'Poland', ar: 'بولندا' }
    },
    'portugal': {
        currency: 'EUR',
        symbol: '€',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 0.92,
        defaultTax: 23,
        displayName: { en: 'Portugal', ar: 'البرتغال' }
    },
    'puerto-rico': {
        currency: 'USD',
        symbol: '$',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 1,
        defaultTax: 10.5,
        displayName: { en: 'Puerto Rico', ar: 'بورتوريكو' }
    },
    'romania': {
        currency: 'RON',
        symbol: 'lei',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 4.60,
        defaultTax: 19,
        displayName: { en: 'Romania', ar: 'رومانيا' }
    },
    'russia': {
        currency: 'RUB',
        symbol: '₽',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 90.00,
        defaultTax: 20,
        displayName: { en: 'Russia', ar: 'روسيا' }
    },
    'rwanda': {
        currency: 'RWF',
        symbol: 'RWF',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 1300,
        defaultTax: 18,
        displayName: { en: 'Rwanda', ar: 'رواندا' }
    },
    'reunion': {
        currency: 'EUR',
        symbol: '€',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 0.92,
        defaultTax: 0,
        displayName: { en: 'Réunion', ar: 'ريونيون' }
    },
    'saint-barthelemy': {
        currency: 'EUR',
        symbol: '€',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 0.92,
        defaultTax: 0,
        displayName: { en: 'Saint Barthélemy', ar: 'سان بارتيلمي' }
    },
    'saint-helena': {
        currency: 'SHP',
        symbol: '£',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 0.78,
        defaultTax: 0,
        displayName: { en: 'Saint Helena, Ascension and Tristan da Cunha', ar: 'سانت هيلانة وأسينشين وتريستان دا كونا' }
    },
    'saint-kitts-and-nevis': {
        currency: 'XCD',
        symbol: 'EC$',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 2.70,
        defaultTax: 17,
        displayName: { en: 'Saint Kitts and Nevis', ar: 'سانت كيتس ونيفيس' }
    },
    'saint-lucia': {
        currency: 'XCD',
        symbol: 'EC$',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 2.70,
        defaultTax: 15,
        displayName: { en: 'Saint Lucia', ar: 'سانت لوسيا' }
    },
    'saint-martin-french': {
        currency: 'EUR',
        symbol: '€',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 0.92,
        defaultTax: 0,
        displayName: { en: 'Saint Martin (French part)', ar: 'سانت مارتن (الجزء الفرنسي)' }
    },
    'saint-pierre-and-miquelon': {
        currency: 'EUR',
        symbol: '€',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 0.92,
        defaultTax: 0,
        displayName: { en: 'Saint Pierre and Miquelon', ar: 'سان بيير وميكلون' }
    },
    'saint-vincent-and-the-grenadines': {
        currency: 'XCD',
        symbol: 'EC$',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 2.70,
        defaultTax: 15,
        displayName: { en: 'Saint Vincent and the Grenadines', ar: 'سانت فينسنت والغرينادين' }
    },
    'samoa': {
        currency: 'WST',
        symbol: 'WS$',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 2.80,
        defaultTax: 15,
        displayName: { en: 'Samoa', ar: 'ساموا' }
    },
    'san-marino': {
        currency: 'EUR',
        symbol: '€',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 0.92,
        defaultTax: 17,
        displayName: { en: 'San Marino', ar: 'سان مارينو' }
    },
    'sao-tome-and-principe': {
        currency: 'STD',
        symbol: 'Db',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 22000,
        defaultTax: 15,
        displayName: { en: 'Sao Tome and Principe', ar: 'ساو تومي وبرينسيب' }
    },
    'senegal': {
        currency: 'XOF',
        symbol: 'CFA',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 610.00,
        defaultTax: 18,
        displayName: { en: 'Senegal', ar: 'السنغال' }
    },
    'serbia': {
        currency: 'RSD',
        symbol: 'дин.',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 108.00,
        defaultTax: 20,
        displayName: { en: 'Serbia', ar: 'صربيا' }
    },
    'seychelles': {
        currency: 'SCR',
        symbol: 'SR',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 13.50,
        defaultTax: 15,
        displayName: { en: 'Seychelles', ar: 'سيشل' }
    },
    'sierra-leone': {
        currency: 'SLL',
        symbol: 'Le',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 20000,
        defaultTax: 15,
        displayName: { en: 'Sierra Leone', ar: 'سيراليون' }
    },
    'sint-maarten-dutch': {
        currency: 'ANG',
        symbol: 'ƒ',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 1.80,
        defaultTax: 5,
        displayName: { en: 'Sint Maarten (Dutch part)', ar: 'سينت مارتن (الجزء الهولندي)' }
    },
    'slovakia': {
        currency: 'EUR',
        symbol: '€',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 0.92,
        defaultTax: 20,
        displayName: { en: 'Slovakia', ar: 'سلوفاكيا' }
    },
    'slovenia': {
        currency: 'EUR',
        symbol: '€',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 0.92,
        defaultTax: 22,
        displayName: { en: 'Slovenia', ar: 'سلوفينيا' }
    },
    'solomon-islands': {
        currency: 'SBD',
        symbol: 'SI$',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 8.40,
        defaultTax: 0,
        displayName: { en: 'Solomon Islands', ar: 'جزر سليمان' }
    },
    'somalia': {
        currency: 'SOS',
        symbol: 'Sh.So.',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 570.00,
        defaultTax: 0,
        displayName: { en: 'Somalia', ar: 'الصومال' }
    },
    'south-sudan': {
        currency: 'SSP',
        symbol: 'SS£',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 1200.00,
        defaultTax: 0,
        displayName: { en: 'South Sudan', ar: 'جنوب السودان' }
    },
    'spain': {
        currency: 'EUR',
        symbol: '€',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 0.92,
        defaultTax: 21,
        displayName: { en: 'Spain', ar: 'إسبانيا' }
    },
    'sri-lanka': {
        currency: 'LKR',
        symbol: 'Rs',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 300.00,
        defaultTax: 18,
        displayName: { en: 'Sri Lanka', ar: 'سريلانكا' }
    },
    'sudn': {
        currency: 'SDG',
        symbol: 'ج.س.',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 600.00,
        defaultTax: 17,
        displayName: { en: 'Sudan', ar: 'السودان' }
    },
    'suriname': {
        currency: 'SRD',
        symbol: '$',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 35.00,
        defaultTax: 10,
        displayName: { en: 'Suriname', ar: 'سورينام' }
    },
    'svalbard-and-jan-mayen': {
        currency: 'NOK',
        symbol: 'kr',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 10.50,
        defaultTax: 0,
        displayName: { en: 'Svalbard and Jan Mayen', ar: 'سفالبارد ويان ماين' }
    },
    'sweden': {
        currency: 'SEK',
        symbol: 'kr',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 10.50,
        defaultTax: 25,
        displayName: { en: 'Sweden', ar: 'السويد' }
    },
    'syria': {
        currency: 'SYP',
        symbol: '£',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 13500.00,
        defaultTax: 0,
        displayName: { en: 'Syria', ar: 'سوريا' }
    },
    'taiwan': {
        currency: 'TWD',
        symbol: 'NT$',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 32.00,
        defaultTax: 5,
        displayName: { en: 'Taiwan', ar: 'تايوان' }
    },
    'tajikistan': {
        currency: 'TJS',
        symbol: 'ЅМ',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 10.90,
        defaultTax: 18,
        displayName: { en: 'Tajikistan', ar: 'طاجيكستان' }
    },
    'tanzania': {
        currency: 'TZS',
        symbol: 'TSh',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 2500.00,
        defaultTax: 18,
        displayName: { en: 'Tanzania, United Republic of', ar: 'جمهورية تنزانيا المتحدة' }
    },
    'timor-leste': {
        currency: 'USD',
        symbol: '$',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 1,
        defaultTax: 0,
        displayName: { en: 'Timor-Leste', ar: 'تيمور الشرقية' }
    },
    'togo': {
        currency: 'XOF',
        symbol: 'CFA',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 610.00,
        defaultTax: 18,
        displayName: { en: 'Togo', ar: 'توغو' }
    },
    'tokelau': {
        currency: 'NZD',
        symbol: 'NZ$',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 1.63,
        defaultTax: 0,
        displayName: { en: 'Tokelau', ar: 'توكيلاو' }
    },
    'tonga': {
        currency: 'TOP',
        symbol: 'T$',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 2.30,
        defaultTax: 15,
        displayName: { en: 'Tonga', ar: 'تونغا' }
    },
    'trinidad-and-tobago': {
        currency: 'TTD',
        symbol: 'TT$',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 6.80,
        defaultTax: 12.5,
        displayName: { en: 'Trinidad and Tobago', ar: 'ترينيداد وتوباغو' }
    },
    'tunisia': {
        currency: 'TND',
        symbol: 'DT',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 3.10,
        defaultTax: 19,
        displayName: { en: 'Tunisia', ar: 'تونس' }
    },
    'turkmenistan': {
        currency: 'TMT',
        symbol: 'm',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 3.50,
        defaultTax: 0,
        displayName: { en: 'Turkmenistan', ar: 'تركمانستان' }
    },
    'turks-and-caicos-islands': {
        currency: 'USD',
        symbol: '$',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 1,
        defaultTax: 0,
        displayName: { en: 'Turks and Caicos Islands', ar: 'جزر تركس وكايكوس' }
    },
    'tuvalu': {
        currency: 'AUD',
        symbol: 'A$',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 1.50,
        defaultTax: 0,
        displayName: { en: 'Tuvalu', ar: 'توفالو' }
    },
    'uganda': {
        currency: 'UGX',
        symbol: 'USh',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 3700.00,
        defaultTax: 18,
        displayName: { en: 'Uganda', ar: 'أوغندا' }
    },
    'ukraine': {
        currency: 'UAH',
        symbol: '₴',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 40.00,
        defaultTax: 20,
        displayName: { en: 'Ukraine', ar: 'أوكرانيا' }
    },
    'united-states-minor-outlying-islands': {
        currency: 'USD',
        symbol: '$',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 1,
        defaultTax: 0,
        displayName: { en: 'United States Minor Outlying Islands', ar: 'جزر الولايات المتحدة الصغيرة النائية' }
    },
    'uruguay': {
        currency: 'UYU',
        symbol: '$U',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 39.00,
        defaultTax: 22,
        displayName: { en: 'Uruguay', ar: 'أوروغواي' }
    },
    'uzbekistan': {
        currency: 'UZS',
        symbol: 'сум',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 12600.00,
        defaultTax: 12,
        displayName: { en: 'Uzbekistan', ar: 'أوزبكستان' }
    },
    'vanuatu': {
        currency: 'VUV',
        symbol: 'Vt',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 120.00,
        defaultTax: 0,
        displayName: { en: 'Vanuatu', ar: 'فانواتو' }
    },
    'venezuela': {
        currency: 'VES',
        symbol: 'Bs.F',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 36.00,
        defaultTax: 16,
        displayName: { en: 'Venezuela (Bolivarian Republic of)', ar: 'فنزويلا (جمهورية بوليفارية)' }
    },
    'virgin-islands-british': {
        currency: 'USD',
        symbol: '$',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 1,
        defaultTax: 0,
        displayName: { en: 'Virgin Islands, British', ar: 'جزر فيرجن البريطانية' }
    },
    'virgin-islands-us': {
        currency: 'USD',
        symbol: '$',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 1,
        defaultTax: 0,
        displayName: { en: 'Virgin Islands, U.S.', ar: 'جزر فيرجن الأمريكية' }
    },
    'wallis-and-futuna': {
        currency: 'XPF',
        symbol: 'CFP',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 110.00,
        defaultTax: 0,
        displayName: { en: 'Wallis and Futuna', ar: 'واليس وفوتونا' }
    },
    'western-sahara': {
        currency: 'MAD', // Often uses MAD or DZD
        symbol: 'DH',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 10.00,
        defaultTax: 0,
        displayName: { en: 'Western Sahara', ar: 'الصحراء الغربية' }
    },
    'yemen': {
        currency: 'YER',
        symbol: '﷼',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 250.00,
        defaultTax: 5,
        displayName: { en: 'Yemen', ar: 'اليمن' }
    },
    'zambia': {
        currency: 'ZMW',
        symbol: 'ZK',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 26.00,
        defaultTax: 16,
        displayName: { en: 'Zambia', ar: 'زامبيا' }
    },
    'zimbabwe': {
        currency: 'ZWL',
        symbol: 'Z$',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 360000.00,
        defaultTax: 15,
        displayName: { en: 'Zimbabwe', ar: 'زيمبابوي' }
    },
    'aland-islands': {
        currency: 'EUR',
        symbol: '€',
        basePriceTroyOunceUSD: 3270.00,
        exchangeRateToUSD: 0.92,
        defaultTax: 0,
        displayName: { en: 'Åland Islands', ar: 'جزر أولاند' }
    }
};

// Define purity levels for different karats
const purity = {
    '24': 0.999,
    '22': 0.916,
    '21': 0.875,
    '18': 0.750
};

// Translations object
const translations = {
    en: {
        appName: "Gold Metric",
        selectCountry: "Select Country:",
        goldPrice: "World Gold Price Live",
        goldPricesPerGram: "Gold Prices per Gram:",
        calculateTotalPrice: "Calculate Total Price:",
        weightGrams: "Weight (grams):",
        enterGramsPlaceholder: "Enter grams here",
        weightError: "Please enter a valid positive number for weight.",
        selectKarat: "Select Karat:",
        makingChargesValue: "Making Charges value:",
        enterMakingChargesPlaceholder: "Enter % making charges",
        taxPercentage: "Tax Percentage (%):",
        enterTaxPercentagePlaceholder: "Enter tax percentage",
        goldValueBeforeChargesAndTax: "Gold Value (before charges & tax):",
        makingChargesAmount: "Making Charges Amount:",
        taxAmount: "Tax Amount:",
        estimatedTotalValue: "Estimated Total Value:",
        aboutApp: "About the App",
        aboutDescription: "Gold Metric is a tool to accurately and easily calculate gold prices, supporting multiple countries and karats, and providing options for taxes and making charges.",
        versionInfo: "Version: 1.0.0",
        developerInfo: "Developer: adel alblooshi",
        emailInfo: "Email: adeltechstudio@gmail.com",
        copyright: "All rights reserved.",
        home: "Home",
        language: "English", // For the current language display in the menu
        arabic: "Arabic" // For the menu option
    },
    ar: {
        appName: "مقياس الذهب",
        selectCountry: "اختر الدولة:",
        goldPrice: "سعر الذهب العالمي مباشر",
        goldPricesPerGram: "أسعار الذهب بالجرام:",
        calculateTotalPrice: "حساب السعر الإجمالي:",
        weightGrams: "الوزن (جرام):",
        enterGramsPlaceholder: "أدخل الجرامات هنا",
        weightError: "الرجاء إدخال رقم موجب وصحيح للوزن.",
        selectKarat: "اختر العيار:",
        makingChargesValue: "قيمة المصنعية:",
        enterMakingChargesPlaceholder: "أدخل نسبة المصنعية %",
        taxPercentage: "نسبة الضريبة (%):",
        enterTaxPercentagePlaceholder: "أدخل نسبة الضريبة",
        goldValueBeforeChargesAndTax: "قيمة الذهب (قبل المصنعية والضريبة):",
        makingChargesAmount: "مبلغ المصنعية:",
        taxAmount: "مبلغ الضريبة:",
        estimatedTotalValue: "القيمة الإجمالية التقديرية:",
        aboutApp: "عن التطبيق",
        aboutDescription: "تطبيق Gold Metric هو أداة لحساب أسعار الذهب بدقة وسهولة، يدعم دول وعيارات متعددة ويوفر خيارات الضرائب والصنعة.",
        versionInfo: "الإصدار: 1.0.0",
        developerInfo: "المطور: adel alblooshi",
        emailInfo: "البريد الإلكتروني: adeltechstudio@gmail.com",
        copyright: "جميع الحقوق محفوظة.",
        home: "الرئيسية",
        language: "العربية", // For the current language display in the menu
        english: "الإنجليزية" // For the menu option
    }
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

// Menu elements
const menuButton = document.getElementById('menuButton');
const sideMenu = document.getElementById('sideMenu');
const closeMenuButton = document.getElementById('closeMenuButton');
const menuOverlay = document.getElementById('menuOverlay');
const langToggle = document.getElementById('langToggle');
const currentLangSpan = document.getElementById('currentLang');
const openAboutModalBtn = document.getElementById('openAboutModal');
const aboutModal = document.getElementById('aboutModal');
const closeAboutModalBtn = document.getElementById('closeAboutModal');
const copyrightNotice = document.getElementById('copyrightNotice');


let currentGoldPricePerGramUSD = 0;
let currentLanguage = 'en'; // Default language

// Function to translate the page content
function translatePage(lang) {
    // Translate elements with data-translate-key
    const elements = document.querySelectorAll('[data-translate-key]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate-key');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // Translate placeholder attributes
    const placeholders = document.querySelectorAll('[data-translate-placeholder-key]');
    placeholders.forEach(element => {
        const key = element.getAttribute('data-translate-placeholder-key');
        if (translations[lang] && translations[lang][key]) {
            element.placeholder = translations[lang][key];
        }
    });

    // Update body direction
    document.body.dir = (lang === 'ar') ? 'rtl' : 'ltr';

    // Update About Modal content direction
    const aboutModalDiv = aboutModal.querySelector('div'); // Get the inner div where the text is
    if (aboutModalDiv) {
        aboutModalDiv.dir = (lang === 'ar') ? 'rtl' : 'ltr';
    }
    
    // Update copyright notice explicitly
    if (copyrightNotice) {
        copyrightNotice.textContent = `© 2025 Gold Metric. ${translations[lang].copyright}`;
    }

    // Update language toggle text in menu
    if (langToggle) {
        const displayLangKey = (lang === 'en') ? 'arabic' : 'english';
        langToggle.innerHTML = `<i class="fas fa-language mr-3 text-[#5680E9]"></i> ${translations[lang].language} / ${translations[lang][displayLangKey]}`;
    }
    
    // Re-populate country select with translated names
    populateCountrySelect(lang);
    // Re-calculate and update gold prices and total to ensure correct currency symbols and formatting
    fetchRealtimeGoldPrice();
}

// Function to toggle menu visibility
function toggleMenu() {
    sideMenu.classList.toggle('open');
    menuOverlay.classList.toggle('active');
}

// Event listeners for menu
menuButton.addEventListener('click', toggleMenu);
closeMenuButton.addEventListener('click', toggleMenu);
menuOverlay.addEventListener('click', toggleMenu); // Close menu when clicking outside

// Handle "Home" link click (scroll to top)
const homeLink = document.querySelector('a[data-translate-key="home"]'); 
if (homeLink) {
    homeLink.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        toggleMenu(); // Close menu after clicking
    });
}

// Handle "About" modal open/close
if (openAboutModalBtn) {
    openAboutModalBtn.addEventListener('click', (e) => {
        e.preventDefault();
        aboutModal.style.display = 'flex'; // Show the modal
        toggleMenu(); // Close side menu when opening modal
    });
}

if (closeAboutModalBtn) {
    closeAboutModalBtn.addEventListener('click', () => {
        aboutModal.style.display = 'none'; // Hide the modal
    });
}

// Close modal if user clicks outside of it
window.addEventListener('click', (event) => {
    if (event.target == aboutModal) {
        aboutModal.style.display = 'none';
    }
});

// Language toggle functionality
langToggle.addEventListener('click', (e) => {
    e.preventDefault();
    currentLanguage = (currentLanguage === 'en') ? 'ar' : 'en';
    translatePage(currentLanguage);
    console.log(`Language switched to ${currentLanguage}`);
});

/**
 * Populates the country select dropdown with sorted options.
 * Retains the previously selected value if it exists.
 * @param {string} lang - The current language ('en' or 'ar') for display names.
 */
function populateCountrySelect(lang = currentLanguage) {
    const currentSelectedValue = countrySelect.value;
    
    // Convert countryData object to an array of objects for sorting
    const countriesArray = Object.keys(countryData).map(key => ({
        value: key,
        // Use the translated displayName based on the current language
        text: countryData[key].displayName[lang] || countryData[key].displayName['en'] // Fallback to English
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
    countryCurrencySymbol.textContent = country.symbol;
    actualRealTimePrice.textContent = displayPriceTroyOunce.toFixed(2);

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
    // Set initial language and translate the page
    translatePage(currentLanguage);
    fetchRealtimeGoldPrice();
});
