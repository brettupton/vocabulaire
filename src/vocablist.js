
const vocabList = [
    {
        "French": "Un",
        "English": "A",
        "MascOrFemme": "Masculine",
        "GrammarType": "Article"
    },
    {
        "French": "Garçon",
        "English": "Boy",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "Homme",
        "English": "Man",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "Et",
        "English": "And",
        "MascOrFemme": "",
        "GrammarType": "Conjunction"
    },
    {
        "French": "Chat",
        "English": "Cat",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "Femme",
        "English": "Woman",
        "MascOrFemme": "Feminine",
        "GrammarType": "Noun"
    },
    {
        "French": "Fille",
        "English": "Girl",
        "MascOrFemme": "Feminine",
        "GrammarType": "Noun"
    },
    {
        "French": "Une",
        "English": "A",
        "MascOrFemme": "Feminine",
        "GrammarType": "Conjunction"
    },
    {
        "French": "Je",
        "English": "I",
        "MascOrFemme": "",
        "GrammarType": "Pronoun"
    },
    {
        "French": "Chien",
        "English": "Dog",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "Cheval",
        "English": "Horse",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "C'est",
        "English": "It is",
        "MascOrFemme": "",
        "GrammarType": "Phrase"
    },
    {
        "French": "Tu",
        "English": "You",
        "MascOrFemme": "",
        "GrammarType": "Pronoun"
    },
    {
        "French": "Pizza",
        "English": "Pizza",
        "MascOrFemme": "Feminine",
        "GrammarType": "Noun"
    },
    {
        "French": "Croissant",
        "English": "Croissant",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "Orange",
        "English": "Orange",
        "MascOrFemme": "Feminine",
        "GrammarType": "Noun"
    },
    {
        "French": "Oui",
        "English": "Yes",
        "MascOrFemme": "",
        "GrammarType": "Adverb"
    },
    {
        "French": "Ça va?",
        "English": "How are you?",
        "MascOrFemme": "",
        "GrammarType": "Phrase"
    },
    {
        "French": "Ça va bien",
        "English": "I'm doing well",
        "MascOrFemme": "",
        "GrammarType": "Phrase"
    },
    {
        "French": "Bonjour",
        "English": "Hello",
        "MascOrFemme": "",
        "GrammarType": "Exclamation"
    },
    {
        "French": "Comment",
        "English": "How/What",
        "MascOrFemme": "",
        "GrammarType": "Adverb"
    },
    {
        "French": "Bien",
        "English": "Well",
        "MascOrFemme": "",
        "GrammarType": "Adverb"
    },
    {
        "French": "Au revoir",
        "English": "Goodbye",
        "MascOrFemme": "",
        "GrammarType": "Exclamation"
    },
    {
        "French": "Bonne",
        "English": "Good",
        "MascOrFemme": "",
        "GrammarType": "Adjective"
    },
    {
        "French": "Journée",
        "English": "Day",
        "MascOrFemme": "Feminine",
        "GrammarType": "Noun"
    },
    {
        "French": "Bienvenue",
        "English": "Welcome",
        "MascOrFemme": "",
        "GrammarType": "Exclamation"
    },
    {
        "French": "Enchanté",
        "English": "Nice to meet you",
        "MascOrFemme": "",
        "GrammarType": "Phrase"
    },
    {
        "French": "Moi",
        "English": "Me",
        "MascOrFemme": "",
        "GrammarType": "Pronoun"
    },
    {
        "French": "À bientôt",
        "English": "See you soon",
        "MascOrFemme": "",
        "GrammarType": "Phrase"
    },
    {
        "French": "Merci",
        "English": "Thank you",
        "MascOrFemme": "",
        "GrammarType": "Exclamation"
    },
    {
        "French": "Beaucoup",
        "English": "A lot",
        "MascOrFemme": "",
        "GrammarType": "Adverb"
    },
    {
        "French": "Nuit",
        "English": "Night",
        "MascOrFemme": "Feminine",
        "GrammarType": "Noun"
    },
    {
        "French": "Demain",
        "English": "Tomorrow",
        "MascOrFemme": "Feminine",
        "GrammarType": "Adverb"
    },
    {
        "French": "Salut",
        "English": "Hi",
        "MascOrFemme": "",
        "GrammarType": "Exclamation"
    },
    {
        "French": "Soirée",
        "English": "Evening",
        "MascOrFemme": "Feminine",
        "GrammarType": "Noun"
    },
    {
        "French": "Bonsoir",
        "English": "Good evening",
        "MascOrFemme": "",
        "GrammarType": "Exclamation"
    },
    {
        "French": "Vous",
        "English": "You (Formal/Plural)",
        "MascOrFemme": "",
        "GrammarType": "Pronoun"
    },
    {
        "French": "Je m'appelle",
        "English": "My name is",
        "MascOrFemme": "",
        "GrammarType": "Phrase"
    },
    {
        "French": "Français",
        "English": "French",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "Anglais",
        "English": "English",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "Elle",
        "English": "She/Her",
        "MascOrFemme": "",
        "GrammarType": "Pronoun"
    },
    {
        "French": "Il",
        "English": "He/Him",
        "MascOrFemme": "",
        "GrammarType": "Pronoun"
    },
    {
        "French": "Non",
        "English": "No",
        "MascOrFemme": "",
        "GrammarType": "Adverb"
    },
    {
        "French": "Espagnol",
        "English": "Spanish",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "Excuse-moi",
        "English": "Excuse me",
        "MascOrFemme": "",
        "GrammarType": "Phrase"
    },
    {
        "French": "Ici",
        "English": "Here",
        "MascOrFemme": "",
        "GrammarType": "Adverb"
    },
    {
        "French": "Aussi",
        "English": "Too/Also",
        "MascOrFemme": "",
        "GrammarType": "Adverb"
    },
    {
        "French": "Étudiante",
        "English": "Student",
        "MascOrFemme": "Masculine/Feminine",
        "GrammarType": "Noun"
    },
    {
        "French": "Avec",
        "English": "With/To",
        "MascOrFemme": "",
        "GrammarType": "Preposition"
    },
    {
        "French": "Angleterre",
        "English": "England",
        "MascOrFemme": "Feminine",
        "GrammarType": "Noun"
    },
    {
        "French": "Espagne",
        "English": "Spain",
        "MascOrFemme": "Feminine",
        "GrammarType": "Noun"
    },
    {
        "French": "Professeur",
        "English": "Professor",
        "MascOrFemme": "Masculine/Feminine",
        "GrammarType": "Noun"
    },
    {
        "French": "Journaliste",
        "English": "Journalist",
        "MascOrFemme": "Masculine/Feminine",
        "GrammarType": "Noun"
    },
    {
        "French": "Université",
        "English": "University",
        "MascOrFemme": "Feminine",
        "GrammarType": "Noun"
    },
    {
        "French": "Italie",
        "English": "Italy",
        "MascOrFemme": "Feminine",
        "GrammarType": "Noun"
    },
    {
        "French": "Gare",
        "English": "Train Station",
        "MascOrFemme": "Feminine",
        "GrammarType": "Noun"
    },
    {
        "French": "Hôtel",
        "English": "Hotel",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "Aéroport",
        "English": "Airport",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "Avion",
        "English": "Plane",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "Voiture",
        "English": "Car",
        "MascOrFemme": "Feminine",
        "GrammarType": "Noun"
    },
    {
        "French": "En",
        "English": "By",
        "MascOrFemme": "",
        "GrammarType": "Preposition"
    },
    {
        "French": "Où",
        "English": "Where",
        "MascOrFemme": "",
        "GrammarType": "Relative Pronoun"
    },
    {
        "French": "S'il vous plaît",
        "English": "Please",
        "MascOrFemme": "",
        "GrammarType": "Phrase"
    },
    {
        "French": "Valise",
        "English": "Suitcase",
        "MascOrFemme": "Feminine",
        "GrammarType": "Noun"
    },
    {
        "French": "Passeport",
        "English": "Passport",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "Billet",
        "English": "Ticket",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "Mon/Ma",
        "English": "My",
        "MascOrFemme": "Masculine/Feminine",
        "GrammarType": "Possessive Adjective"
    },
    {
        "French": "Ton/Ta",
        "English": "Your",
        "MascOrFemme": "Masculine/Feminine",
        "GrammarType": "Possessive Adjective"
    },
    {
        "French": "Père",
        "English": "Father",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "Son/Sa",
        "English": "His/Hers",
        "MascOrFemme": "",
        "GrammarType": "Possessive Adjective"
    },
    {
        "French": "Frère",
        "English": "Brother",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "Mère",
        "English": "Mother",
        "MascOrFemme": "Feminine",
        "GrammarType": "Noun"
    },
    {
        "French": "Famille",
        "English": "Family",
        "MascOrFemme": "Feminine",
        "GrammarType": "Noun"
    },
    {
        "French": "Sœur ",
        "English": "Sister",
        "MascOrFemme": "Feminine",
        "GrammarType": "Noun"
    },
    {
        "French": "Mari",
        "English": "Husband",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "Femme",
        "English": "Wife",
        "MascOrFemme": "Feminine",
        "GrammarType": "Noun"
    },
    {
        "French": "Fils",
        "English": "Son",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "Grand-père",
        "English": "Grandfather",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "Grand-mère",
        "English": "Grandmother",
        "MascOrFemme": "Feminine",
        "GrammarType": "Noun"
    },
    {
        "French": "Chouette",
        "English": "Owl",
        "MascOrFemme": "Feminine",
        "GrammarType": "Noun"
    },
    {
        "French": "Animal de compagnie",
        "English": "Pet",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "Jardin",
        "English": "Garden",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "Maison",
        "English": "House",
        "MascOrFemme": "Feminine",
        "GrammarType": "Noun"
    },
    {
        "French": "Appartement",
        "English": "Apartment",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "Dans",
        "English": "In",
        "MascOrFemme": "",
        "GrammarType": "Preposition"
    },
    {
        "French": "Nous",
        "English": "We",
        "MascOrFemme": "",
        "GrammarType": "Pronoun"
    },
    {
        "French": "Ils/Elles",
        "English": "They",
        "MascOrFemme": "Masculine/Feminine",
        "GrammarType": "Pronoun"
    },
    {
        "French": "Chocolat",
        "English": "Chocolate",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "Musique",
        "English": "Music",
        "MascOrFemme": "Feminine",
        "GrammarType": "Noun"
    },
    {
        "French": "Livre",
        "English": "Book",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "École",
        "English": "School",
        "MascOrFemme": "Feminine",
        "GrammarType": "Noun"
    },
    {
        "French": "Banque",
        "English": "Bank",
        "MascOrFemme": "Feminine",
        "GrammarType": "Noun"
    },
    {
        "French": "Parc",
        "English": "Park",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "Boulangerie",
        "English": "Bakery",
        "MascOrFemme": "Feminine",
        "GrammarType": "Noun"
    },
    {
        "French": "Métro",
        "English": "Subway",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "Au",
        "English": "To",
        "MascOrFemme": "",
        "GrammarType": "Determiner"
    },
    {
        "French": "Travail",
        "English": "Work",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "Cinéma",
        "English": "Movie Theater",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "Ou",
        "English": "Or",
        "MascOrFemme": "",
        "GrammarType": "Conjunction"
    },
    {
        "French": "Voisin",
        "English": "Neighbor",
        "MascOrFemme": "Masculine/Feminine",
        "GrammarType": "Noun"
    },
    {
        "French": "Voulez-vouz",
        "English": "Do you want",
        "MascOrFemme": "",
        "GrammarType": "Phrase"
    },
    {
        "French": "Chéri",
        "English": "Darling",
        "MascOrFemme": "Masculine/Feminine",
        "GrammarType": "Noun"
    },
    {
        "French": "Clés",
        "English": "Keys",
        "MascOrFemme": "Feminine",
        "GrammarType": "Noun"
    },
    {
        "French": "Sur",
        "English": "On",
        "MascOrFemme": "",
        "GrammarType": "Preposition"
    },
    {
        "French": "Fatigué",
        "English": "Tired",
        "MascOrFemme": "",
        "GrammarType": "Adjective"
    },
    {
        "French": "Tasse",
        "English": "Cup",
        "MascOrFemme": "Feminine",
        "GrammarType": "Noun"
    },
    {
        "French": "Café",
        "English": "Coffee",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "Prêt",
        "English": "Ready",
        "MascOrFemme": "",
        "GrammarType": "Adjective"
    },
    {
        "French": "Sucre",
        "English": "Sugar",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "Beurk",
        "English": "Yuck",
        "MascOrFemme": "",
        "GrammarType": "Exclamation"
    },
    {
        "French": "Sel",
        "English": "Salt",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "Rendez-vous",
        "English": "Date",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "Aujourd'hui",
        "English": "Today",
        "MascOrFemme": "",
        "GrammarType": "Adverb"
    },
    {
        "French": "Euh",
        "English": "Er",
        "MascOrFemme": "",
        "GrammarType": "Exclamation"
    },
    {
        "French": "Chose",
        "English": "Thing",
        "MascOrFemme": "Feminine",
        "GrammarType": "Noun"
    },
    {
        "French": "Pain",
        "English": "Bread",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "Supermarché",
        "English": "Supermarket",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "Salade",
        "English": "Salad",
        "MascOrFemme": "Feminine",
        "GrammarType": "Noun"
    },
    {
        "French": "D'accord",
        "English": "OK",
        "MascOrFemme": "",
        "GrammarType": "Exclamation"
    },
    {
        "French": "Bouteille",
        "English": "Bottle",
        "MascOrFemme": "Feminine",
        "GrammarType": "Noun"
    },
    {
        "French": "Eau",
        "English": "Water",
        "MascOrFemme": "Feminine",
        "GrammarType": "Noun"
    },
    {
        "French": "Idée",
        "English": "Idea",
        "MascOrFemme": "Feminine",
        "GrammarType": "Noun"
    },
    {
        "French": "Quoi",
        "English": "What",
        "MascOrFemme": "",
        "GrammarType": "Pronoun"
    },
    {
        "French": "Pourquoi",
        "English": "Why",
        "MascOrFemme": "",
        "GrammarType": "Adverb"
    },
    {
        "French": "Préférée",
        "English": "Favorite",
        "MascOrFemme": "",
        "GrammarType": "Adjective"
    },
    {
        "French": "Seule",
        "English": "Only",
        "MascOrFemme": "",
        "GrammarType": "Adjective"
    },
    {
        "French": "Voici",
        "English": "This is",
        "MascOrFemme": "",
        "GrammarType": "Preposition"
    },
    {
        "French": "Grande",
        "English": "Big",
        "MascOrFemme": "",
        "GrammarType": "Adjective"
    },
    {
        "French": "Mais",
        "English": "But",
        "MascOrFemme": "",
        "GrammarType": "Conjunction"
    },
    {
        "French": "Maintenant",
        "English": "Now",
        "MascOrFemme": "",
        "GrammarType": "Adverb"
    },
    {
        "French": "Mes",
        "English": "My (Plural)",
        "MascOrFemme": "",
        "GrammarType": "Possessive Adjective"
    },
    {
        "French": "Tes",
        "English": "Your (Plural)",
        "MascOrFemme": "",
        "GrammarType": "Possessive Adjective"
    },
    {
        "French": "Ses",
        "English": "His/Her (Plural)",
        "MascOrFemme": "",
        "GrammarType": "Possessive Adjective"
    },
    {
        "French": "Ensemble",
        "English": "Together",
        "MascOrFemme": "",
        "GrammarType": "Adverb"
    },
    {
        "French": "Content",
        "English": "Happy",
        "MascOrFemme": "",
        "GrammarType": "Adverb"
    },
    {
        "French": "Amusant",
        "English": "Funny",
        "MascOrFemme": "",
        "GrammarType": "Adverb"
    },
    {
        "French": "Très",
        "English": "Very",
        "MascOrFemme": "",
        "GrammarType": "Adverb"
    },
    {
        "French": "Toilettes",
        "English": "Restroom",
        "MascOrFemme": "Feminine",
        "GrammarType": "Noun"
    },
    {
        "French": "Personne",
        "English": "Person",
        "MascOrFemme": "Feminine",
        "GrammarType": "Noun"
    },
    {
        "French": "Pour",
        "English": "For",
        "MascOrFemme": "",
        "GrammarType": "Preposition"
    },
    {
        "French": "Thé",
        "English": "Tea",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "Serveur",
        "English": "Waiter",
        "MascOrFemme": "Masculine/Feminine",
        "GrammarType": "Noun"
    },
    {
        "French": "Jus",
        "English": "Juice",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "Bière",
        "English": "Beer",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "Tasse",
        "English": "Cup",
        "MascOrFemme": "Feminine",
        "GrammarType": "Noun"
    },
    {
        "French": "Verre",
        "English": "Glass",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "Bouteille",
        "English": "Bottle",
        "MascOrFemme": "Feminine",
        "GrammarType": "Noun"
    },
    {
        "French": "Salade",
        "English": "Salad",
        "MascOrFemme": "Feminine",
        "GrammarType": "Noun"
    },
    {
        "French": "Fromage",
        "English": "Cheese",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "Addition",
        "English": "Bill",
        "MascOrFemme": "Feminine",
        "GrammarType": "Noun"
    },
    {
        "French": "Ce",
        "English": "This/That",
        "MascOrFemme": "Masculine",
        "GrammarType": "Demonstrative Adjective"
    },
    {
        "French": "Bébé",
        "English": "Baby",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "Magasin",
        "English": "Store",
        "MascOrFemme": "Feminine",
        "GrammarType": "Noun"
    },
    {
        "French": "Petit",
        "English": "Small",
        "MascOrFemme": "",
        "GrammarType": "Adjective"
    },
    {
        "French": "Hôpital",
        "English": "Hospital",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "Pharmacie",
        "English": "Pharmacy",
        "MascOrFemme": "Feminine",
        "GrammarType": "Noun"
    },
    {
        "French": "Ouvert",
        "English": "Open",
        "MascOrFemme": "",
        "GrammarType": "Adjective"
    },
    {
        "French": "Ville",
        "English": "Town/City",
        "MascOrFemme": "Feminine",
        "GrammarType": "Noun"
    },
    {
        "French": "Plante",
        "English": "Plant",
        "MascOrFemme": "Feminine",
        "GrammarType": "Noun"
    },
    {
        "French": "Vélo",
        "English": "Bike",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "Fermé",
        "English": "Closed",
        "MascOrFemme": "",
        "GrammarType": "Adjective"
    },
    {
        "French": "Japon",
        "English": "Japan",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "Mexique",
        "English": "Mexico",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "Brésil",
        "English": "Brazil",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "Vacance",
        "English": "Vacation",
        "MascOrFemme": "Feminine",
        "GrammarType": "Noun"
    },
    {
        "French": "États-Unis",
        "English": "United States",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "Musée",
        "English": "Museum",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "Plage",
        "English": "Beach",
        "MascOrFemme": "Feminine",
        "GrammarType": "Noun"
    },
    {
        "French": "Aux",
        "English": "To the",
        "MascOrFemme": "",
        "GrammarType": "Determiner"
    },
    {
        "French": "Église",
        "English": "Church",
        "MascOrFemme": "Feminine",
        "GrammarType": "Noun"
    },
    {
        "French": "Château",
        "English": "Castle",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "De rein",
        "English": "You're welcome",
        "MascOrFemme": "",
        "GrammarType": "Phrase"
    },
    {
        "French": "Arbre",
        "English": "Tree",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "Gentil",
        "English": "Kind",
        "MascOrFemme": "",
        "GrammarType": "Adjective"
    },
    {
        "French": "Il y a",
        "English": "There is",
        "MascOrFemme": "",
        "GrammarType": "Phrase"
    },
    {
        "French": "Couleur",
        "English": "Color",
        "MascOrFemme": "Feminine",
        "GrammarType": "Noun"
    },
    {
        "French": "Cette",
        "English": "This/That",
        "MascOrFemme": "Feminine",
        "GrammarType": "Demonstrative Adjective"
    },
    {
        "French": "Anniversaire",
        "English": "Birthday",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "Ami",
        "English": "Friend",
        "MascOrFemme": "Masculine/Feminine",
        "GrammarType": "Noun"
    },
    {
        "French": "Parfait",
        "English": "Perfect",
        "MascOrFemme": "",
        "GrammarType": "Adjective"
    },
    {
        "French": "Sac",
        "English": "Bag",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "Veste",
        "English": "Jacket",
        "MascOrFemme": "Feminine",
        "GrammarType": "Noun"
    },
    {
        "French": "Derrière",
        "English": "Behind",
        "MascOrFemme": "",
        "GrammarType": "Adverb"
    },
    {
        "French": "Main",
        "English": "Hand",
        "MascOrFemme": "Femninine",
        "GrammarType": "Noun"
    },
    {
        "French": "Désolé",
        "English": "I'm sorry",
        "MascOrFemme": "",
        "GrammarType": "Adjective"
    },
    {
        "French": "Médicin",
        "English": "Doctor",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "Malade",
        "English": "Sick",
        "MascOrFemme": "",
        "GrammarType": "Adjective"
    },
    {
        "French": "Autre",
        "English": "Other",
        "MascOrFemme": "",
        "GrammarType": "Adjective"
    },
    {
        "French": "Vache",
        "English": "Cow",
        "MascOrFemme": "Feminine",
        "GrammarType": "Noun"
    },
    {
        "French": "Porte",
        "English": "Door",
        "MascOrFemme": "Feminine",
        "GrammarType": "Noun"
    },
    {
        "French": "Fenêtre",
        "English": "Window",
        "MascOrFemme": "Feminine",
        "GrammarType": "Noun"
    },
    {
        "French": "Chaise",
        "English": "Chair",
        "MascOrFemme": "Feminine",
        "GrammarType": "Noun"
    },
    {
        "French": "Pièce",
        "English": "Room",
        "MascOrFemme": "Feminine",
        "GrammarType": "Noun"
    },
    {
        "French": "Salon",
        "English": "Living Room",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "Fleur",
        "English": "Flower",
        "MascOrFemme": "Feminine",
        "GrammarType": "Noun"
    },
    {
        "French": "Je ne sais pas",
        "English": "I don't know",
        "MascOrFemme": "",
        "GrammarType": "Phrase"
    },
    {
        "French": "Chauffeur",
        "English": "Driver",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "Métier",
        "English": "Occupation",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "Usine",
        "English": "Factory",
        "MascOrFemme": "Feminine",
        "GrammarType": "Noun"
    },
    {
        "French": "Bureau",
        "English": "Office",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "Collègue",
        "English": "Coworker",
        "MascOrFemme": "Masculine/Feminine",
        "GrammarType": "Noun"
    },
    {
        "French": "Stylo",
        "English": "Pen",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "Lettre",
        "English": "Letter",
        "MascOrFemme": "Feminine",
        "GrammarType": "Noun"
    },
    {
        "French": "Ordinateur",
        "English": "Computer",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "Portable",
        "English": "Cellphone",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "Téléphone",
        "English": "Telephone",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "Numéro",
        "English": "Number",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "Œuf",
        "English": "Egg",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "Petit Déjeuner",
        "English": "Breakfast",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "Matin",
        "English": "Morning",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "Gâteau",
        "English": "Cake",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "Déjeuner",
        "English": "Lunch",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "Dîner",
        "English": "Dinner",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "Prêt",
        "English": "Ready",
        "MascOrFemme": "",
        "GrammarType": "Adjective"
    },
    {
        "French": "Repas",
        "English": "Meal",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "Ces",
        "English": "These",
        "MascOrFemme": "",
        "GrammarType": "Determiner"
    },
    {
        "French": "Pomme",
        "English": "Apple",
        "MascOrFemme": "Feminine",
        "GrammarType": "Noun"
    },
    {
        "French": "Banane",
        "English": "Banana",
        "MascOrFemme": "Feminine",
        "GrammarType": "Noun"
    },
    {
        "French": "Légume",
        "English": "Vegetable",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "Cuisine",
        "English": "Kitchen",
        "MascOrFemme": "Feminine",
        "GrammarType": "Noun"
    },
    {
        "French": "Plat",
        "English": "Dish",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "Télé",
        "English": "TV",
        "MascOrFemme": "Feminine",
        "GrammarType": "Noun"
    },
    {
        "French": "Jour",
        "English": "Day",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "Chaque",
        "English": "Every",
        "MascOrFemme": "",
        "GrammarType": "Adjective"
    },
    {
        "French": "Enfant",
        "English": "Child",
        "MascOrFemme": "Masculine/Feminine",
        "GrammarType": "Noun"
    },
    {
        "French": "Après",
        "English": "After",
        "MascOrFemme": "",
        "GrammarType": "Preposition"
    },
    {
        "French": "Journal",
        "English": "Newspaper",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "Après-midi",
        "English": "Afternoon",
        "MascOrFemme": "Masculine/Feminine",
        "GrammarType": "Noun"
    },
    {
        "French": "Souvent",
        "English": "Often",
        "MascOrFemme": "",
        "GrammarType": "Adverb"
    },
    {
        "French": "Lit",
        "English": "Bed",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "Ce soir",
        "English": "Tonight",
        "MascOrFemme": "",
        "GrammarType": "Phrase"
    },
    {
        "French": "Parfois",
        "English": "Sometimes",
        "MascOrFemme": "",
        "GrammarType": "Adverb"
    },
    {
        "French": "Vetements",
        "English": "Clothing",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "Cher",
        "English": "Expensive",
        "MascOrFemme": "",
        "GrammarType": "Adverb"
    },
    {
        "French": "Pantalon",
        "English": "Newspaper",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "Robe",
        "English": "Dress",
        "MascOrFemme": "Feminine",
        "GrammarType": "Noun"
    },
    {
        "French": "Chaussure",
        "English": "Shoe",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "Prix",
        "English": "Price",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "Ça",
        "English": "It",
        "MascOrFemme": "",
        "GrammarType": "Pronoun"
    },
    {
        "French": "Jupe",
        "English": "Skirt",
        "MascOrFemme": "Feminine",
        "GrammarType": "Noun"
    },
    {
        "French": "Canadien",
        "English": "Canadian",
        "MascOrFemme": "",
        "GrammarType": "Adjective"
    },
    {
        "French": "Italien",
        "English": "Italian",
        "MascOrFemme": "",
        "GrammarType": "Adjective"
    },
    {
        "French": "Jeune",
        "English": "Young",
        "MascOrFemme": "",
        "GrammarType": "Adjective"
    },
    {
        "French": "Blond",
        "English": "Blonde",
        "MascOrFemme": "",
        "GrammarType": "Adjective"
    },
    {
        "French": "An",
        "English": "Year",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "Brun",
        "English": "Brunette",
        "MascOrFemme": "",
        "GrammarType": "Adjective"
    },
    {
        "French": "Nos",
        "English": "Our (Plural)",
        "MascOrFemme": "",
        "GrammarType": "Possessive Adjective"
    },
    {
        "French": "Rue",
        "English": "Street",
        "MascOrFemme": "Feminine",
        "GrammarType": "Noun"
    },
    {
        "French": "Première",
        "English": "First",
        "MascOrFemme": "",
        "GrammarType": "Adjective"
    },
    {
        "French": "Jupe",
        "English": "Skirt",
        "MascOrFemme": "Feminine",
        "GrammarType": "Noun"
    },
    {
        "French": "Droite",
        "English": "Right",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "Gauche",
        "English": "Left",
        "MascOrFemme": "Feminine",
        "GrammarType": "Noun"
    },
    {
        "French": "Devant",
        "English": "In front",
        "MascOrFemme": "",
        "GrammarType": "Adverb"
    },
    {
        "French": "Immeuble",
        "English": "Building",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "Près",
        "English": "Near",
        "MascOrFemme": "",
        "GrammarType": "Adverb"
    },
    {
        "French": "Intéressant",
        "English": "Interesting",
        "MascOrFemme": "",
        "GrammarType": "Adjective"
    },
    {
        "French": "Pont",
        "English": "Bridge",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "Loin",
        "English": "Far",
        "MascOrFemme": "",
        "GrammarType": "Adverb"
    },
    {
        "French": "Rout",
        "English": "Road",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "Deuxième",
        "English": "Second",
        "MascOrFemme": "",
        "GrammarType": "Adjective"
    },
    {
        "French": "Dangereux",
        "English": "Dangerous",
        "MascOrFemme": "",
        "GrammarType": "Adjective"
    },
    {
        "French": "Troisième",
        "English": "Third",
        "MascOrFemme": "",
        "GrammarType": "Adjective"
    },
    {
        "French": "Lieu",
        "English": "Place",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "Marié",
        "English": "Married",
        "MascOrFemme": "",
        "GrammarType": "Adjective"
    },
    {
        "French": "Notre",
        "English": "Our (Singular)",
        "MascOrFemme": "",
        "GrammarType": "Possessive Adjective"
    },
    {
        "French": "Votre",
        "English": "Your (Singular)",
        "MascOrFemme": "",
        "GrammarType": "Possessive Adjective"
    },
    {
        "French": "Vos",
        "English": "Your (Plural)",
        "MascOrFemme": "",
        "GrammarType": "Possessive Adjective"
    },
    {
        "French": "Tous les jours",
        "English": "Everyday",
        "MascOrFemme": "",
        "GrammarType": "Phrase"
    },
    {
        "French": "Quand",
        "English": "When",
        "MascOrFemme": "",
        "GrammarType": "Conjonction"
    },
    {
        "French": "Semaine",
        "English": "Week",
        "MascOrFemme": "Feminine",
        "GrammarType": "Noun"
    },
    {
        "French": "Qui",
        "English": "Who",
        "MascOrFemme": "",
        "GrammarType": "Conjonction"
    },
    {
        "French": "Problème",
        "English": "Problem",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "Chambre",
        "English": "Bedroom",
        "MascOrFemme": "Feminine",
        "GrammarType": "Noun"
    },
    {
        "French": "Avant",
        "English": "Before",
        "MascOrFemme": "",
        "GrammarType": "Preposition"
    },
    {
        "French": "Chez",
        "English": "Place",
        "MascOrFemme": "",
        "GrammarType": "Preposition"
    },
    {
        "French": "Minuit",
        "English": "Midnight",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "Heure",
        "English": "Hour",
        "MascOrFemme": "Feminine",
        "GrammarType": "Noun"
    },
    {
        "French": "En retard",
        "English": "Late",
        "MascOrFemme": "",
        "GrammarType": "Phrase"
    },
    {
        "French": "Tôt",
        "English": "Early",
        "MascOrFemme": "",
        "GrammarType": "Adverb"
    },
    {
        "French": "Horloge",
        "English": "Clock",
        "MascOrFemme": "Feminine",
        "GrammarType": "Noun"
    },
    {
        "French": "Frigo",
        "English": "Fridge",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "Lait",
        "English": "Milk",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "Peu",
        "English": "Bit",
        "MascOrFemme": "",
        "GrammarType": "Adverb"
    },
    {
        "French": "Sel",
        "English": "Salt",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "Salle de bain",
        "English": "Bathroom",
        "MascOrFemme": "Feminine",
        "GrammarType": "Noun"
    },
    {
        "French": "Placard",
        "English": "Cupboard",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "Trop de",
        "English": "Too much",
        "MascOrFemme": "",
        "GrammarType": "Phrase"
    },
    {
        "French": "Mademoiselle",
        "English": "Miss",
        "MascOrFemme": "Feminine",
        "GrammarType": "Noun"
    },
    {
        "French": "Madame",
        "English": "Ma'am",
        "MascOrFemme": "Feminine",
        "GrammarType": "Noun"
    },
    {
        "French": "Monsieur",
        "English": "Sir",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "Quel",
        "English": "Which",
        "MascOrFemme": "",
        "GrammarType": "Adjective"
    },
    {
        "French": "Prénom",
        "English": "First name",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "Nom",
        "English": "Name",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "Nom de famille",
        "English": "First name",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "Nationalité",
        "English": "Nationality",
        "MascOrFemme": "Feminine",
        "GrammarType": "Noun"
    },
    {
        "French": "Vol",
        "English": "Flight",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "Bagage",
        "English": "Luggage",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "Miel",
        "English": "Honey",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "Beurre",
        "English": "Butter",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "Confiture",
        "English": "Jam",
        "MascOrFemme": "Feminine",
        "GrammarType": "Noun"
    },
    {
        "French": "Minéral",
        "English": "Mineral",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "Fraise",
        "English": "Strawberry",
        "MascOrFemme": "Feminine",
        "GrammarType": "Noun"
    },
    {
        "French": "Yaourt",
        "English": "Yoghurt",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "Céréale",
        "English": "Cereal",
        "MascOrFemme": "Feminine",
        "GrammarType": "Noun"
    },
    {
        "French": "Prochain",
        "English": "Next",
        "MascOrFemme": "",
        "GrammarType": "Adjective"
    },
    {
        "French": "Mois",
        "English": "Month",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "Lui",
        "English": "Him",
        "MascOrFemme": "",
        "GrammarType": "Past Participle"
    },
    {
        "French": "Eux",
        "English": "Them",
        "MascOrFemme": "",
        "GrammarType": "Pronoun"
    },
    {
        "French": "Temps",
        "English": "Time",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "Hiver",
        "English": "Winter",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "Montagne",
        "English": "Mountain",
        "MascOrFemme": "Feminine",
        "GrammarType": "Noun"
    },
    {
        "French": "Été",
        "English": "Summer",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "Année",
        "English": "Year",
        "MascOrFemme": "Feminine",
        "GrammarType": "Noun"
    },
    {
        "French": "Facile",
        "English": "Easy",
        "MascOrFemme": "",
        "GrammarType": "Adjective"
    },
    {
        "French": "Difficile",
        "English": "Difficult",
        "MascOrFemme": "",
        "GrammarType": "Adjective"
    },
    {
        "French": "Leçon",
        "English": "Lesson",
        "MascOrFemme": "Feminine",
        "GrammarType": "Noun"
    },
    {
        "French": "Cours",
        "English": "Class",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "Examen",
        "English": "Exam",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "Dictionnaire",
        "English": "Dictionary",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "Matière",
        "English": "Subject",
        "MascOrFemme": "Feminine",
        "GrammarType": "Noun"
    },
    {
        "French": "Tout",
        "English": "Everything",
        "MascOrFemme": "",
        "GrammarType": "Adjective"
    },
    {
        "French": "Élève",
        "English": "Pupil",
        "MascOrFemme": "Masculine/Feminine",
        "GrammarType": "Noun"
    },
    {
        "French": "Sac à dos",
        "English": "Backpack",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "Lentement",
        "English": "Slowly",
        "MascOrFemme": "",
        "GrammarType": "Adverb"
    },
    {
        "French": "Salle de classe",
        "English": "Classroom",
        "MascOrFemme": "Feminine",
        "GrammarType": "Noun"
    },
    {
        "French": "Plus",
        "English": "More",
        "MascOrFemme": "",
        "GrammarType": "Adverb"
    },
    {
        "French": "Réunion",
        "English": "Meeting",
        "MascOrFemme": "Feminine",
        "GrammarType": "Noun"
    },
    {
        "French": "Chef",
        "English": "Boss",
        "MascOrFemme": "Masculine/Feminine",
        "GrammarType": "Noun"
    },
    {
        "French": "Projet",
        "English": "Project",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "Horaire",
        "English": "Schedule",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "Leur",
        "English": "Their",
        "MascOrFemme": "",
        "GrammarType": "Pronoun"
    },
    {
        "French": "Serviette",
        "English": "Towel",
        "MascOrFemme": "Feminine",
        "GrammarType": "Noun"
    },
    {
        "French": "Joli",
        "English": "Pretty",
        "MascOrFemme": "",
        "GrammarType": "Adjective"
    },
    {
        "French": "Adresse",
        "English": "Address",
        "MascOrFemme": "Feminine",
        "GrammarType": "Noun"
    },
    {
        "French": "Simple",
        "English": "Single",
        "MascOrFemme": "",
        "GrammarType": "Adjective"
    },
    {
        "French": "Douche",
        "English": "Shower",
        "MascOrFemme": "Feminine",
        "GrammarType": "Noun"
    },
    {
        "French": "Propre",
        "English": "Clean",
        "MascOrFemme": "",
        "GrammarType": "Adjective"
    },
    {
        "French": "Compris",
        "English": "Included",
        "MascOrFemme": "",
        "GrammarType": "Adjective"
    },
    {
        "French": "Génial",
        "English": "Great",
        "MascOrFemme": "Feminine",
        "GrammarType": "Noun"
    },
    {
        "French": "Mot de passe",
        "English": "Password",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "Interdit",
        "English": "Forbidden",
        "MascOrFemme": "",
        "GrammarType": "Adjective"
    },
    {
        "French": "Réception",
        "English": "Front desk",
        "MascOrFemme": "Feminine",
        "GrammarType": "Noun"
    },
    {
        "French": "Toujours",
        "English": "Always",
        "MascOrFemme": "",
        "GrammarType": "Adverb"
    },
    {
        "French": "D'habitude",
        "English": "Usually",
        "MascOrFemme": "",
        "GrammarType": "Adjective"
    },
    {
        "French": "Que",
        "English": "What",
        "MascOrFemme": "",
        "GrammarType": "Conjonction"
    },
    {
        "French": "Miroir",
        "English": "Mirror",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "Vite",
        "English": "Quick",
        "MascOrFemme": "",
        "GrammarType": "Adverb"
    },
    {
        "French": "Cheveux",
        "English": "Hair",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "Dent",
        "English": "Tooth",
        "MascOrFemme": "Feminine",
        "GrammarType": "Noun"
    },
    {
        "French": "Général",
        "English": "General",
        "MascOrFemme": "",
        "GrammarType": "Adjective"
    },
    {
        "French": "Quart",
        "English": "Quarter",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "Beau",
        "English": "Beautiful",
        "MascOrFemme": "",
        "GrammarType": "Adjective"
    },
    {
        "French": "Chaud",
        "English": "Hot",
        "MascOrFemme": "",
        "GrammarType": "Adjective"
    },
    {
        "French": "Froid",
        "English": "Cold",
        "MascOrFemme": "",
        "GrammarType": "Adjective"
    },
    {
        "French": "Quart",
        "English": "Quarter",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "Automne",
        "English": "Autumn",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "Dehors",
        "English": "Quarter",
        "MascOrFemme": "",
        "GrammarType": "Adverb"
    },
    {
        "French": "Soleil",
        "English": "Sun",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "Neige",
        "English": "Snow",
        "MascOrFemme": "Feminine",
        "GrammarType": "Noun"
    },
    {
        "French": "Vent",
        "English": "Wind",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "Pluie",
        "English": "Rain",
        "MascOrFemme": "Feminine",
        "GrammarType": "Noun"
    },
    {
        "French": "Ciel",
        "English": "Sky",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "Saison",
        "English": "Season",
        "MascOrFemme": "Feminine",
        "GrammarType": "Noun"
    },
    {
        "French": "Printemps",
        "English": "Snow",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "Grand",
        "English": "Tall",
        "MascOrFemme": "",
        "GrammarType": "Adjective"
    },
    {
        "French": "Petit",
        "English": "Short",
        "MascOrFemme": "",
        "GrammarType": "Adjective"
    },
    {
        "French": "Vieux",
        "English": "Old",
        "MascOrFemme": "",
        "GrammarType": "Adjective"
    },
    {
        "French": "Riche",
        "English": "Rich",
        "MascOrFemme": "",
        "GrammarType": "Adjective"
    },
    {
        "French": "Mince",
        "English": "Thin",
        "MascOrFemme": "",
        "GrammarType": "Adjective"
    },
    {
        "French": "Moins",
        "English": "Less",
        "MascOrFemme": "",
        "GrammarType": "Adverb"
    },
    {
        "French": "Bras",
        "English": "Arms",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "Oreille",
        "English": "Ear",
        "MascOrFemme": "Feminine",
        "GrammarType": "Noun"
    },
    {
        "French": "Pied",
        "English": "Foot",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "Nez",
        "English": "Nose",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "Œil",
        "English": "Eye",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "Visage",
        "English": "Face",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "Bouche",
        "English": "Mouth",
        "MascOrFemme": "Feminine",
        "GrammarType": "Noun"
    },
    {
        "French": "Sympa",
        "English": "Nice",
        "MascOrFemme": "",
        "GrammarType": "Adjective"
    },
    {
        "French": "Jambe",
        "English": "Leg",
        "MascOrFemme": "Feminine",
        "GrammarType": "Noun"
    },
    {
        "French": "Court",
        "English": "Short",
        "MascOrFemme": "",
        "GrammarType": "Adjective"
    },
    {
        "French": "Probablement",
        "English": "Probably",
        "MascOrFemme": "",
        "GrammarType": "Adverb"
    },
    {
        "French": "Vraiment",
        "English": "Really",
        "MascOrFemme": "",
        "GrammarType": "Adverb"
    },
    {
        "French": "Faim",
        "English": "Hunger",
        "MascOrFemme": "Feminine",
        "GrammarType": "Noun"
    },
    {
        "French": "Soif",
        "English": "Thirst",
        "MascOrFemme": "Feminine",
        "GrammarType": "Noun"
    },
    {
        "French": "Sommeil",
        "English": "Sleep",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "Assez",
        "English": "Enough",
        "MascOrFemme": "",
        "GrammarType": "Adverb"
    },
    {
        "French": "Triste",
        "English": "Sad",
        "MascOrFemme": "",
        "GrammarType": "Adjective"
    },
    {
        "French": "Parce que",
        "English": "Because",
        "MascOrFemme": "",
        "GrammarType": "Conjunction"
    },
    {
        "French": "Stressé",
        "English": "Stressed",
        "MascOrFemme": "",
        "GrammarType": "Adjective"
    },
    {
        "French": "Mal",
        "English": "Badly",
        "MascOrFemme": "",
        "GrammarType": "Adjective"
    },
    {
        "French": "Poisson",
        "English": "Fish",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "Pomme de terre",
        "English": "Potato",
        "MascOrFemme": "Feminine",
        "GrammarType": "Noun"
    },
    {
        "French": "Riz",
        "English": "Rice",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "Glace",
        "English": "Ice Cream",
        "MascOrFemme": "Feminine",
        "GrammarType": "Noun"
    },
    {
        "French": "Viande",
        "English": "Meat",
        "MascOrFemme": "Feminine",
        "GrammarType": "Noun"
    },
    {
        "French": "Gazeux",
        "English": "Sparkling",
        "MascOrFemme": "",
        "GrammarType": "Adjective"
    },
    {
        "French": "Nourriture",
        "English": "Food",
        "MascOrFemme": "Feminine",
        "GrammarType": "Noun"
    },
    {
        "French": "Biscuit",
        "English": "Cookie",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "Environ",
        "English": "About",
        "MascOrFemme": "",
        "GrammarType": "Adverb"
    },
    {
        "French": "Soupe",
        "English": "Soup",
        "MascOrFemme": "Feminine",
        "GrammarType": "Noun"
    },
    {
        "French": "Crêpe",
        "English": "Crepe",
        "MascOrFemme": "Feminine",
        "GrammarType": "Noun"
    },
    {
        "French": "Là-bas",
        "English": "Over there",
        "MascOrFemme": "",
        "GrammarType": "Adverb"
    },
    {
        "French": "Là",
        "English": "There",
        "MascOrFemme": "",
        "GrammarType": "Adverb"
    },
    {
        "French": "Chapeau",
        "English": "Hat",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "Celui-ci",
        "English": "This one",
        "MascOrFemme": "",
        "GrammarType": "Pronoun"
    },
    {
        "French": "Manteau",
        "English": "Coat",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "Nouveau",
        "English": "New",
        "MascOrFemme": "",
        "GrammarType": "Adjective"
    },
    {
        "French": "Celui-là",
        "English": "That one",
        "MascOrFemme": "",
        "GrammarType": "Pronoun"
    },
    {
        "French": "Ceux-là",
        "English": "Those ones",
        "MascOrFemme": "",
        "GrammarType": "Pronoun"
    },
    {
        "French": "Lunettes",
        "English": "Glasses",
        "MascOrFemme": "Feminine",
        "GrammarType": "Noun"
    },
    {
        "French": "Chemise",
        "English": "Shirt",
        "MascOrFemme": "Feminine",
        "GrammarType": "Noun"
    },
    {
        "French": "Botte",
        "English": "Boot",
        "MascOrFemme": "Feminine",
        "GrammarType": "Noun"
    },
    {
        "French": "Même",
        "English": "Same",
        "MascOrFemme": "",
        "GrammarType": "Adjective"
    },
    {
        "French": "Entre",
        "English": "Between",
        "MascOrFemme": "",
        "GrammarType": "Prepostion"
    },
    {
        "French": "À-côté",
        "English": "Aside",
        "MascOrFemme": "",
        "GrammarType": "Prepostion"
    },
    {
        "French": "Puis",
        "English": "Then",
        "MascOrFemme": "",
        "GrammarType": "Adverb"
    },
    {
        "French": "Tout droit",
        "English": "Straight",
        "MascOrFemme": "",
        "GrammarType": "Adjective"
    },
    {
        "French": "Arrêt",
        "English": "Stop",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "Célèbre",
        "English": "Famous",
        "MascOrFemme": "",
        "GrammarType": "Adjective"
    },
    {
        "French": "Tour",
        "English": "Tower",
        "MascOrFemme": "Feminine",
        "GrammarType": "Noun"
    },
    {
        "French": "Adulte",
        "English": "Adult",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "Jamais",
        "English": "Never",
        "MascOrFemme": "",
        "GrammarType": "Adverb"
    },
    {
        "French": "Rien",
        "English": "Nothing",
        "MascOrFemme": "",
        "GrammarType": "Adverb"
    },
    {
        "French": "Football",
        "English": "Soccer",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "Basket",
        "English": "Basketball",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "Match",
        "English": "Game",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "Bibliothèque",
        "English": "Library",
        "MascOrFemme": "Feminine",
        "GrammarType": "Noun"
    },
    {
        "French": "Copain",
        "English": "Friend",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "Si",
        "English": "If",
        "MascOrFemme": "",
        "GrammarType": "Conjuction"
    },
    {
        "French": "Occupé",
        "English": "Busy",
        "MascOrFemme": "",
        "GrammarType": "Adjective"
    },
    {
        "French": "Librairie",
        "English": "Bookstore",
        "MascOrFemme": "Feminine",
        "GrammarType": "Noun"
    },
    {
        "French": "Tout le monde",
        "English": "Everybody",
        "MascOrFemme": "",
        "GrammarType": "Adjective"
    },
    {
        "French": "Pique-nique",
        "English": "Picnic",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "Fête",
        "English": "Party",
        "MascOrFemme": "Feminine",
        "GrammarType": "Noun"
    },
    {
        "French": "Film",
        "English": "Movie",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "Acteur",
        "English": "Actor",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "Je suis d'accord",
        "English": "I agree",
        "MascOrFemme": "",
        "GrammarType": "Phrase"
    },
    {
        "French": "Mauvaise",
        "English": "Bad",
        "MascOrFemme": "",
        "GrammarType": "Adjective"
    },
    {
        "French": "Super",
        "English": "Awesome",
        "MascOrFemme": "",
        "GrammarType": "Noun"
    },
    {
        "French": "Série",
        "English": "Series",
        "MascOrFemme": "Feminine",
        "GrammarType": "Noun"
    },
    {
        "French": "Tableau",
        "English": "Painting",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "Raison",
        "English": "Reason",
        "MascOrFemme": "Feminine",
        "GrammarType": "Noun"
    },
    {
        "French": "Tort",
        "English": "Wrong",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "Sûr",
        "English": "Sure",
        "MascOrFemme": "",
        "GrammarType": "Adjective"
    },
    {
        "French": "Genre",
        "English": "Type",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "Groupe",
        "English": "Band",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "Meilleur",
        "English": "Better",
        "MascOrFemme": "",
        "GrammarType": "Adjective"
    },
    {
        "French": "Cochon",
        "English": "Pig",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "Souris",
        "English": "Mouse",
        "MascOrFemme": "Feminine",
        "GrammarType": "Noun"
    },
    {
        "French": "Gros",
        "English": "Fat",
        "MascOrFemme": "",
        "GrammarType": "Adjective"
    },
    {
        "French": "Lapin",
        "English": "Rabbit",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "Éléphant",
        "English": "Elephant",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "Pelouse",
        "English": "Grass",
        "MascOrFemme": "Feminine",
        "GrammarType": "Noun"
    },
    {
        "French": "Rapid",
        "English": "Fast",
        "MascOrFemme": "",
        "GrammarType": "Adjective"
    },
    {
        "French": "Campagne",
        "English": "Countryside",
        "MascOrFemme": "Feminine",
        "GrammarType": "Noun"
    },
    {
        "French": "Bruit",
        "English": "Noise",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "Oiseau",
        "English": "Bird",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "Bateau",
        "English": "Boat",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "Rivière",
        "English": "River",
        "MascOrFemme": "Feminine",
        "GrammarType": "Noun"
    },
    {
        "French": "Cadeau",
        "English": "Gift",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "Mot",
        "English": "Word",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "Langue",
        "English": "Language",
        "MascOrFemme": "Feminine",
        "GrammarType": "Noun"
    },
    {
        "French": "Devoirs",
        "English": "Homework",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "Cahier",
        "English": "Notebook",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "Crayon",
        "English": "Pencil",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "Phrase",
        "English": "Sentence",
        "MascOrFemme": "Feminine",
        "GrammarType": "Noun"
    },
    {
        "French": "Encore",
        "English": "Still",
        "MascOrFemme": "",
        "GrammarType": "Adverb"
    },
    {
        "French": "Boisson",
        "English": "Drink",
        "MascOrFemme": "Feminine",
        "GrammarType": "Noun"
    },
    {
        "French": "Sans",
        "English": "Without",
        "MascOrFemme": "",
        "GrammarType": "Preposition"
    },
    {
        "French": "Couteau",
        "English": "Knife",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "Assiette",
        "English": "Plate",
        "MascOrFemme": "Feminine",
        "GrammarType": "Noun"
    },
    {
        "French": "Aucune",
        "English": "None",
        "MascOrFemme": "",
        "GrammarType": "Adjective"
    },
    {
        "French": "Lycée",
        "English": "High School",
        "MascOrFemme": "Masculine",
        "GrammarType": "Noun"
    },
    {
        "French": "Mais non",
        "English": "Of course not",
        "MascOrFemme": "",
        "GrammarType": "Phrase"
    },
    {
        "French": "D'abord",
        "English": "First",
        "MascOrFemme": "",
        "GrammarType": "Preposition"
    },
]

export default vocabList