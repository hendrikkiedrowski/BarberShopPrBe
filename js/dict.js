var dict = {
    "Termin Buchen": {
        en: "Book Now"
    },
    "Ueber uns": {
        en: "About"
    },
    "Preise": {
        en: "Prices"
    },
    "ROWDY - Berlin's wahrer Barber Shop": {
        en: "ROWDY - a true Barber Shop in Berlin"
    },
    'Unser Barbershop ROWDY wurde aus Liebe zum Barbier-Beruf ins Leben gerufen. Er wird von Barbieren gefuehrt, die als Meister ihres Handwerks Wert auf jedes kleinste Detail legen. Egal mit welchem Anliegen Sie zu uns kommen - Dank unserer jahrelangen Erfahrung und unserer speziell auf den Mann zugeschnittenen Expertise, erfuellen wir jeden Wunsch mit Perfektion. ROWDY Barber Shop - ein dem Handwerk gewidmeter Ort ohne jeglichen Ueberfluss. Hier haben Maenner die Moeglichkeit, ausschliesslich auf sie abgestimmte Angebote und das dazugehoerige Ambiente zu entdecken. Egal ob Haar-, Bartschnitt oder Rasur, bei freundschaftlichen Gespraechen hat jeder Mann die Moeglichkeit, sich vom Alltag zu entspannen. Ohne aufdringliche Musik und kunterbuntes Design. ROWDY heisst: - Spezialisierung auf Bart-Trimm, professionelle Maennerhaarschnitte und Rasuren mit der Rasierklinge': {
        en: "Our Barber Shop ROWDY was created out of love to the barber craft. It is managed by\n" +
        "                barbers, who focus on the things that matter, like quality, precision and top notch service. No matter\n" +
        "                with what concerns you come to us – our rich experience and professionalapproach meet all your demands\n" +
        "                and wishes. ROWDY Barber Shop - a place dedicated to the craft with no frills, intrusive music or bright\n" +
        "                design. Here men have the opportunity to discover matching offers, enjoy nice atmosphere and havesome\n" +
        "                rest from their wives. Our team of professional barbers offer hight quality service with perfect look.\n" +
        "                We are here for you to provide the best hair cut, shave, or any other grooming service you may desire!\n" +
        "                ROWDY is characterizedby the following: A team of professional and experienced barbers offer high\n" +
        "                quality service with perfect look"
    },
    "Entwicklung und Verkauf von Bart- und Haarpflegeprodukten hoechster Qualitaet": {
        en: "Specializing in beard trim, hair cut & shave with a razor blade"
    },
    "Ein Team professioneller und erfahrener Barbiere bietet Spitzen-Service mit dem perfekten Look": {
        en: "Production of top-quality beard & hair care products"
    },
    "Jeder Mann - jeder Wunsch - ein Ort: ROWDY": {
        en: "ROWDY - a place for real man!"
    },
    "Barbier mit einer mehr als 30 jaehrigen Erfahrung": {
        en: "Barber with the experience of more than 30 years"
    },
    "Seminarleiter und Barbier Trainer": {
        en: "Seminar director and Barbering coach"
    },
    "Vormalig Kreativpartner und Akteur der Unternehmen:": {
        en: "Previously Creative partner and actor of the companies:"
    },
    "In Kooperation mit Film und Fernsehen": {
        en: "In cooperation with cinema and television"
    },
    'Mit der Erfahrung bester Londoner Barbershops': {
        en: "With the experience at London Barbershops"
    },
    "Schnellste Schere und gruendlichste Rasur": {
        en: "Fastest scissors and closest shaves"
    },
    "Ein Barbier von Herz und Seele": {
        en: "A Barber from heart and soul"
    },
    "Mit seiner freundlichen harten Art laesst er in Bezug auf Herrenhaarschnitt oder Rasur keinen Wunsch offen": {
        en: "With his friendly hard way regarding man's haircut or shave he leaves nounfulfilled wishes"
    },
    "Das Original aus Schottland": {
        en: "Original Scottish barber"
    },
    "Ein Barbier in dritter Generation": {
        en: "A barber in the third generation"
    },
    "Mit der Erfahrung aus aller Welt": {
        en: "With the experience from all over the world"
    },
    "Sein Beruf ist seine Leidenschaft": {
        en: "His work is his passion"
    },
    "Unser Barbier aus England": {
        en: "Our English barber with years of experience"
    },
    "Trainierte und arbeitete mit den besten Barbieren Englands": {
        en: "Has trained and worked with the best barbers in the UK"
    },
    "Kreativ mit einem Auge fuers Detail": {
        en: "Creative with a good eye for detail"
    },
    "Ein Barbier, der seine Arbeit liebt": {
        en: "A barber who loves his work"
    },
    "ein Barbier aus England - Bristol": {
        en: "a barber from Bristol-UK"
    },
    "mit jahrelanger Barbiererfahrung": {
        en: "with multiple years experience in the trade"
    },
    "mit einer wahren Leidenschaft zum Handwerk, einem scharfen Auge fuers Detail und einer angenehmen Unterhaltung": {
        en: "with a true passion for the craft, a keen eye for detail and an appreciation for conversation"
    },
    "bei ihm bekommst du mehr als nur einen Haarschnitt": {
        en: "you'll get away with more than just a haircut"
    },
    "Unser Barbier aus Liverpool (England)": {
        en: "Originally from Liverpool where he learned his craft"
    },
    "In London und Brighton arbeitete er in den besten Shops": {
        en: "moved to London and Brighton to work in the best shops"
    },
    "Ein Freund von Vintage-Haarschnitten mit moderner Technik": {
        en: "enjoys old school cuts with modern techniques"
    },
    'Er arbeitete fuer "Monster Energy" auf Events in ganz Europa': {
        en: "has worked with monster energy doing events around Europe"
    },
    "Unser Barbier aus Belfast, der Stadt der Kontraste": {
        en: "Barber from Belfast, the city of contrast"
    },
    "Reiche Erfahrungen aus den verschiedensten Orten der Erde": {
        en: "Rich experience from different locations across the world"
    },
    "Achtet aufs kleinste Detail": {
        en: "Takes care of the finest details"
    },
    "ein passionierter Profi, der seine Kreativitaet mit hohem Vergnuegen auslebt": {
        en: "Passionate pro who loves to express his creativity"
    }
};
var translator;

function translate() {
    if ((navigator.language || navigator.userLanguage) == "de") {

        translator = $('body').translate({lang: "en", t: dict}); //use English
    }

}