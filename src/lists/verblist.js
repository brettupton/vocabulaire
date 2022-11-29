const verbList = [
    {
        "Verb": "Être", "Translation": "To Be",
        "Présent":
            { "Je": "suis", "Tu": "es", "Il": "est", "Nous": "sommes", "Vous": "êtes", "Ils": "sont" },
        "Imparfait":
            { "Je": "etais", "Tu": "etais", "Il": "etait", "Nous": "etions", "Vous": "etiez", "Ils": "etaient" },
        "PasséComposé":
            { "Je": "ai été", "Tu": "as été", "Il": "a été", "Nous": "avons été", "Vous": "avez été", "Ils": "ont été" },
        "FuturSimple":
            { "Je": "serai", "Tu": "seras", "Il": "sera", "Nous": "serons", "Vous": "serez", "Ils": "seront" },
        "ConditionnelPrésent":
            { "Je": "serais", "Tu": "serais", "Il": "serait", "Nous": "serions", "Vous": "seriez", "Ils": "seraient" },
        "PrésentDuSubjonctif":
            { "Je": "sois", "Tu": "sois", "Il": "soit", "Nous": "soyons", "Vous": "soyez", "Ils": "soient" }
    },
    {
        "Verb": "Parler", "Translation": "To Speak",
        "Présent":
            { "Je": "parle", "Tu": "parles", "Il": "parle", "Nous": "parlons", "Vous": "parlez", "Ils": "parlent" },
        "Imparfait":
            { "Je": "parlais", "Tu": "parlais", "Il": "parlait", "Nous": "parlions", "Vous": "parliez", "Ils": "parlaient" },
        "PasséComposé":
            { "Je": "ai parlé", "Tu": "as parlé", "Il": "a parlé", "Nous": "avons parlé", "Vous": "avez parlé", "Ils": "ont parlé" },
        "FuturSimple":
            { "Je": "parlerai", "Tu": "parleras", "Il": "parlera", "Nous": "parlerons", "Vous": "parlerez", "Ils": "parleront" },
        "ConditionnelPrésent":
            { "Je": "parlerais", "Tu": "parlerais", "Il": "parlerait", "Nous": "parlerions", "Vous": "parleriez", "Ils": "parleraient" },
        "PrésentDuSubjonctif":
            { "Je": "parle", "Tu": "parles", "Il": "parle", "Nous": "parlions", "Vous": "parliez", "Ils": "parlent" }
    },
    {
        "Verb": "Manger", "Translation": "To Eat",
        "Présent":
            { "Je": "mange", "Tu": "manges", "Il": "mange", "Nous": "mangeons", "Vous": "mangez", "Ils": "mangent" },
        "Imparfait":
            { "Je": "mangeais", "Tu": "mangeais", "Il": "mangeait", "Nous": "mangions", "Vous": "mangiez", "Ils": "mangieaent" },
        "PasséComposé":
            { "Je": "ai mangé", "Tu": "as mangé", "Il": "a mangé", "Nous": "avons mangé", "Vous": "avez mangé", "Ils": "ont mangé" },
        "FuturSimple":
            { "Je": "mangerai", "Tu": "mangerais", "Il": "mangera", "Nous": "mangerons", "Vous": "mangerez", "Ils": "mangeront" },
        "ConditionnelPrésent":
            { "Je": "mangerais", "Tu": "mangerais", "Il": "mangerait", "Nous": "mangerions", "Vous": "mangeriez", "Ils": "mangeraient" },
        "PrésentDuSubjonctif":
            { "Je": "mange", "Tu": "manges", "Il": "mange", "Nous": "mangions", "Vous": "mangiez", "Ils": "mangent" }
    },
    {
        "Verb": "Étudier", "Translation": "To Study",
        "Présent":
            { "Je": "étudie", "Tu": "étudies", "Il": "étudie", "Nous": "étudions", "Vous": "étudiez", "Ils": "étudient" },
        "Imparfait":
            { "Je": "étudiais", "Tu": "étudiais", "Il": "étudiait", "Nous": "étudiions", "Vous": "étudiiez", "Ils": "étudiaient" },
        "PasséComposé":
            { "Je": "ai étudié", "Tu": "as étudié", "Il": "a étudié", "Nous": "avons étudié", "Vous": "avez étudié", "Ils": "ont étudié" },
        "FuturSimple":
            { "Je": "étudierai", "Tu": "étudierais", "Il": "étudierai", "Nous": "étudierons", "Vous": "étudierez", "Ils": "étudieront" },
        "ConditionnelPrésent":
            { "Je": "étudierais", "Tu": "étudierais", "Il": "étudierait", "Nous": "étudierions", "Vous": "étudieriez", "Ils": "étudieraient" },
        "PrésentDuSubjonctif":
            { "Je": "étudie", "Tu": "étudies", "Il": "étudie", "Nous": "étudiions", "Vous": "étudiiez", "Ils": "étudient" }
    },
    {
        "Verb": "Prendre", "Translation": "To Take",
        "Présent":
            { "Je": "prends", "Tu": "prends", "Il": "prend", "Nous": "prenons", "Vous": "prenez", "Ils": "prennent" },
        "Imparfait":
            { "Je": "prenais", "Tu": "prenais", "Il": "prenait", "Nous": "prenions", "Vous": "preniez", "Ils": "prenaient" },
        "PasséComposé":
            { "Je": "ai pris", "Tu": "as pris", "Il": "a pris", "Nous": "avons pris", "Vous": "avez pris", "Ils": "ont pris" },
        "FuturSimple":
            { "Je": "prendrai", "Tu": "prendras", "Il": "prendra", "Nous": "prendrons", "Vous": "prendrez", "Ils": "prendront" },
        "ConditionnelPrésent":
            { "Je": "prendrais", "Tu": "prendrais", "Il": "prendrait", "Nous": "prendrions", "Vous": "prendriez", "Ils": "prendraient" },
        "PrésentDuSubjonctif":
            { "Je": "prenne", "Tu": "prennes", "Il": "prenne", "Nous": "prennions", "Vous": "preniez", "Ils": "prennent" }
    },
    {
        "Verb": "Habiter", "Translation": "To Live",
        "Présent":
            { "Je": "habite", "Tu": "habites", "Il": "habite", "Nous": "habitons", "Vous": "habitez", "Ils": "habitent" },
        "Imparfait":
            { "Je": "habitais", "Tu": "habitais", "Il": "habitait", "Nous": "habitions", "Vous": "habitiez", "Ils": "habitaient" },
        "PasséComposé":
            { "Je": "ai habité", "Tu": "as habité", "Il": "a habité", "Nous": "avons habité", "Vous": "avez habité", "Ils": "ont habité" },
        "FuturSimple":
            { "Je": "habiterai", "Tu": "habiteras", "Il": "habitera", "Nous": "habiterons", "Vous": "habiterez", "Ils": "habiteront" },
        "ConditionnelPrésent":
            { "Je": "habiterais", "Tu": "habiterais", "Il": "habiterait", "Nous": "habiterions", "Vous": "habiteriez", "Ils": "habiteriez" },
        "PrésentDuSubjonctif":
            { "Je": "habite", "Tu": "habites", "Il": "habite", "Nous": "habitions", "Vous": "habitiez", "Ils": "habitent" }
    },
    {
        "Verb": "Travailler", "Translation": "To Work",
        "Présent":
            { "Je": "travaille", "Tu": "travailles", "Il": "travaille", "Nous": "travaillons", "Vous": "travaillez", "Ils": "travaillent" },
        "Imparfait":
            { "Je": "travaillais", "Tu": "travaillais", "Il": "travaillait", "Nous": "travaillions", "Vous": "travailliez", "Ils": "travaillaient" },
        "PasséComposé":
            { "Je": "ai travaillé", "Tu": "as travaillé", "Il": "a travaillé", "Nous": "avons travaillé", "Vous": "avez travaillé", "Ils": "ont travaillé" },
        "FuturSimple":
            { "Je": "travaillerai", "Tu": "travailleras", "Il": "travaillera", "Nous": "travaillerons", "Vous": "travaillerez", "Ils": "travailleront" },
        "ConditionnelPrésent":
            { "Je": "travaillerais", "Tu": "travaillerais", "Il": "travaillerait", "Nous": "travaillerions", "Vous": "travailleriez", "Ils": "travailleraient" },
        "PrésentDuSubjonctif":
            { "Je": "travaille", "Tu": "travailles", "Il": "travaille", "Nous": "travaillions", "Vous": "travailliez", "Ils": "travaillent" }
    },
    {
        "Verb": "Avoir", "Translation": "To Have",
        "Présent":
            { "Je": "ai", "Tu": "as", "Il": "a", "Nous": "avons", "Vous": "avez", "Ils": "ont" },
        "Imparfait":
            { "Je": "avais", "Tu": "avais", "Il": "avait", "Nous": "avions", "Vous": "aviez", "Ils": "avaient" },
        "PasséComposé":
            { "Je": "ai eu", "Tu": "as eu", "Il": "a eu", "Nous": "avons eu", "Vous": "avez eu", "Ils": "ont eu" },
        "FuturSimple":
            { "Je": "aurai", "Tu": "auras", "Il": "aura", "Nous": "aurons", "Vous": "aurez", "Ils": "auront" },
        "ConditionnelPrésent":
            { "Je": "aurais", "Tu": "aurais", "Il": "aurait", "Nous": "aurions", "Vous": "auriez", "Ils": "auraient" },
        "PrésentDuSubjonctif":
            { "Je": "aie", "Tu": "aies", "Il": "ait", "Nous": "ayons", "Vous": "ayez", "Ils": "aient" }
    },
    {
        "Verb": "Venir", "Translation": "To Come",
        "Présent":
            { "Je": "viens", "Tu": "viens", "Il": "vient", "Nous": "venons", "Vous": "venez", "Ils": "viennent" },
        "Imparfait":
            { "Je": "venais", "Tu": "venais", "Il": "venait", "Nous": "venions", "Vous": "veniez", "Ils": "venaient" },
        "PasséComposé":
            { "Je": "ai venu", "Tu": "as venu", "Il": "a venu", "Nous": "avons venu", "Vous": "avez venu", "Ils": "ont venu" },
        "FuturSimple":
            { "Je": "viendrai", "Tu": "viendras", "Il": "viendra", "Nous": "viendrons", "Vous": "viendrez", "Ils": "viendront" },
        "ConditionnelPrésent":
            { "Je": "viendrais", "Tu": "viendrais", "Il": "viendrait", "Nous": "viendrions", "Vous": "viendriez", "Ils": "viendraient" },
        "PrésentDuSubjonctif":
            { "Je": "vienne", "Tu": "viennes", "Il": "vienne", "Nous": "venions", "Vous": "veniez", "Ils": "viennent" }
    },
    {
        "Verb": "Vouloir", "Translation": "To Want",
        "Présent":
            { "Je": "veux", "Tu": "veux", "Il": "veut", "Nous": "voulons", "Vous": "voulez", "Ils": "veulent" },
        "Imparfait":
            { "Je": "voulais", "Tu": "voulais", "Il": "voulait", "Nous": "voulions", "Vous": "vouliez", "Ils": "voulaient" },
        "PasséComposé":
            { "Je": "ai voulu", "Tu": "as voulu", "Il": "a voulu", "Nous": "avons voulu", "Vous": "avez voulu", "Ils": "ont voulu" },
        "FuturSimple":
            { "Je": "voudrai", "Tu": "voudras", "Il": "voudra", "Nous": "voudrons", "Vous": "voudrez", "Ils": "voudront" },
        "ConditionnelPrésent":
            { "Je": "voudrais", "Tu": "voudrais", "Il": "voudrait", "Nous": "voudrions", "Vous": "voudriez", "Ils": "voudraient" },
        "PrésentDuSubjonctif":
            { "Je": "veuille", "Tu": "veuilles", "Il": "veuille", "Nous": "voulions", "Vous": "vouliez", "Ils": "veuillent" }
    },
    {
        "Verb": "Aimer", "Translation": "To Love",
        "Présent":
            { "Je": "aime", "Tu": "aimes", "Il": "aime", "Nous": "aimons", "Vous": "aimez", "Ils": "aiment" },
        "Imparfait":
            { "Je": "aimais", "Tu": "aimais", "Il": "aimait", "Nous": "aimions", "Vous": "aimiez", "Ils": "aimaient" },
        "PasséComposé":
            { "Je": "ai aimé", "Tu": "as aimé", "Il": "a aimé", "Nous": "avons aimé", "Vous": "avez aimé", "Ils": "ont aimé" },
        "FuturSimple":
            { "Je": "aimerai", "Tu": "aimeras", "Il": "aimera", "Nous": "aimerons", "Vous": "aimerez", "Ils": "aimeront" },
        "ConditionnelPrésent":
            { "Je": "aimerais", "Tu": "aimerais", "Il": "aimerait", "Nous": "aimerions", "Vous": "aimeriez", "Ils": "aimeraient" },
        "PrésentDuSubjonctif":
            { "Je": "aime", "Tu": "aimes", "Il": "aime", "Nous": "aimions", "Vous": "aimiez", "Ils": "aiment" }
    },
]

export default verbList