const flashcardDecks: FlashcardDeck[] = [
  {
    id: 1,
    name: "Basic French",
    description: "List of most common French words",
    image:
      "https://images.unsplash.com/photo-1520342868574-5fa3804e551c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    languageFront: "French",
    languageBack: "English",
    flashcards: [
      {
        id: 1,
        term: "Bonjour",
        pronunciation: "bɔ̃.ʒuʁ",
        definition: "A common greeting meaning 'Hello' or 'Good morning'.",
        image: "https://example.com/images/bonjour.jpg",
        examples: [
          "Bonjour, comment allez-vous ?",
          "Il a dit bonjour à son voisin.",
        ],
        deckId: 1,
        createdAt: "2025-02-09T10:00:00Z",
        updatedAt: "2025-02-09T10:00:00Z",
      },
      {
        id: 2,
        term: "Merci",
        pronunciation: "mɛʁ.si",
        definition: "An expression of gratitude, meaning 'Thank you'.",
        image: "https://example.com/images/merci.jpg",
        examples: [
          "Merci beaucoup pour ton aide.",
          "Je vous remercie pour votre patience.",
        ],
        deckId: 1,
        createdAt: "2025-02-09T10:01:00Z",
        updatedAt: "2025-02-09T10:01:00Z",
      },
      {
        id: 3,
        term: "Chat",
        pronunciation: "ʃa",
        definition: "A domestic feline animal, meaning 'Cat'.",
        image: "https://example.com/images/chat.jpg",
        examples: [
          "Mon chat dort toute la journée.",
          "Elle a adopté un petit chat noir.",
        ],
        deckId: 1,
        createdAt: "2025-02-09T10:02:00Z",
        updatedAt: "2025-02-09T10:02:00Z",
      },
      {
        id: 4,
        term: "Voiture",
        pronunciation: "vwa.tyʁ",
        definition: "A road vehicle, meaning 'Car'.",
        image: "https://example.com/images/voiture.jpg",
        examples: [
          "Ma voiture est en panne.",
          "Il a acheté une nouvelle voiture rouge.",
        ],
        deckId: 1,
        createdAt: "2025-02-09T10:03:00Z",
        updatedAt: "2025-02-09T10:03:00Z",
      },
      {
        id: 5,
        term: "Maison",
        pronunciation: "mɛ.zɔ̃",
        definition: "A place where one lives, meaning 'House' or 'Home'.",
        image: "https://example.com/images/maison.jpg",
        examples: [
          "Notre maison est près de la plage.",
          "Ils construisent une nouvelle maison.",
        ],
        deckId: 1,
        createdAt: "2025-02-09T10:04:00Z",
        updatedAt: "2025-02-09T10:04:00Z",
      },
      {
        id: 6,
        term: "Chien",
        pronunciation: "ʃjɛ̃",
        definition: "A common pet, meaning 'Dog'.",
        image: "https://example.com/images/chien.jpg",
        examples: [
          "Mon chien aime jouer dans le jardin.",
          "Elle a adopté un chien abandonné.",
        ],
        deckId: 1,
        createdAt: "2025-02-09T10:05:00Z",
        updatedAt: "2025-02-09T10:05:00Z",
      },
      {
        id: 7,
        term: "École",
        pronunciation: "e.kɔl",
        definition: "A place of learning, meaning 'School'.",
        image: "https://example.com/images/ecole.jpg",
        examples: [
          "Les enfants vont à l'école tous les jours.",
          "Mon école est très grande et moderne.",
        ],
        deckId: 1,
        createdAt: "2025-02-09T10:06:00Z",
        updatedAt: "2025-02-09T10:06:00Z",
      },
      {
        id: 8,
        term: "Pain",
        pronunciation: "pɛ̃",
        definition: "A staple food, meaning 'Bread'.",
        image: "https://example.com/images/pain.jpg",
        examples: [
          "J'aime manger du pain avec du fromage.",
          "Le boulanger vend du pain frais chaque matin.",
        ],
        deckId: 1,
        createdAt: "2025-02-09T10:07:00Z",
        updatedAt: "2025-02-09T10:07:00Z",
      },
      {
        id: 9,
        term: "Rouge",
        pronunciation: "ʁuʒ",
        definition: "A color, meaning 'Red'.",
        image: "https://example.com/images/rouge.jpg",
        examples: [
          "Ma robe préférée est rouge.",
          "Les feux de signalisation rouges signifient arrêter.",
        ],
        deckId: 1,
        createdAt: "2025-02-09T10:08:00Z",
        updatedAt: "2025-02-09T10:08:00Z",
      },
      {
        id: 10,
        term: "Lumière",
        pronunciation: "ly.mjɛʁ",
        definition: "A source of brightness, meaning 'Light'.",
        image: "https://example.com/images/lumiere.jpg",
        examples: [
          "La lumière du soleil réchauffe la terre.",
          "Allume la lumière, s'il te plaît.",
        ],
        deckId: 1,
        createdAt: "2025-02-09T10:09:00Z",
        updatedAt: "2025-02-09T10:09:00Z",
      },
    ],
    userId: 1,
    createdAt: "2025-02-09T10:09:00Z",
    updatedAt: "2025-02-09T10:09:00Z",
  },
  {
    id: 2,
    name: "Basic German",
    description: "List of most common German words",
    image:
      "https://images.unsplash.com/photo-1597299647455-4b55340774bb?ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
    languageFront: "German",
    languageBack: "English",
    flashcards: [
      {
        id: 1,
        term: "Hallo",
        pronunciation: "ˈha.lo",
        definition: "A common greeting meaning 'Hello'.",
        image: "https://example.com/images/hallo.jpg",
        examples: [
          "Hallo, wie geht es dir?",
          "Er hat mich freundlich mit 'Hallo' begrüßt.",
        ],
        deckId: 2,
        createdAt: "2025-02-09T10:00:00Z",
        updatedAt: "2025-02-09T10:00:00Z",
      },
      {
        id: 2,
        term: "Danke",
        pronunciation: "ˈdaŋ.kə",
        definition: "An expression of gratitude, meaning 'Thank you'.",
        image: "https://example.com/images/danke.jpg",
        examples: [
          "Danke für deine Hilfe!",
          "Ich sagte 'Danke' und ging weiter.",
        ],
        deckId: 2,
        createdAt: "2025-02-09T10:01:00Z",
        updatedAt: "2025-02-09T10:01:00Z",
      },
      {
        id: 3,
        term: "Katze",
        pronunciation: "ˈkat͡sə",
        definition: "A domestic feline animal, meaning 'Cat'.",
        image: "https://example.com/images/katze.jpg",
        examples: [
          "Meine Katze schläft gerne auf dem Sofa.",
          "Er hat eine schwarze Katze als Haustier.",
        ],
        deckId: 2,
        createdAt: "2025-02-09T10:02:00Z",
        updatedAt: "2025-02-09T10:02:00Z",
      },
      {
        id: 4,
        term: "Auto",
        pronunciation: "ˈaʊ̯.to",
        definition: "A road vehicle, meaning 'Car'.",
        image: "https://example.com/images/auto.jpg",
        examples: [
          "Mein Auto ist neu und rot.",
          "Er fährt sein Auto jeden Tag zur Arbeit.",
        ],
        deckId: 2,
        createdAt: "2025-02-09T10:03:00Z",
        updatedAt: "2025-02-09T10:03:00Z",
      },
      {
        id: 5,
        term: "Haus",
        pronunciation: "haʊ̯s",
        definition: "A place where one lives, meaning 'House' or 'Home'.",
        image: "https://example.com/images/haus.jpg",
        examples: [
          "Unser Haus hat einen großen Garten.",
          "Er kaufte ein kleines Haus auf dem Land.",
        ],
        deckId: 2,
        createdAt: "2025-02-09T10:04:00Z",
        updatedAt: "2025-02-09T10:04:00Z",
      },
      {
        id: 6,
        term: "Hund",
        pronunciation: "hʊnt",
        definition: "A common pet, meaning 'Dog'.",
        image: "https://example.com/images/hund.jpg",
        examples: [
          "Mein Hund liebt es, im Park zu rennen.",
          "Sie hat einen sehr freundlichen Hund.",
        ],
        deckId: 2,
        createdAt: "2025-02-09T10:05:00Z",
        updatedAt: "2025-02-09T10:05:00Z",
      },
      {
        id: 7,
        term: "Schule",
        pronunciation: "ˈʃuː.lə",
        definition: "A place of learning, meaning 'School'.",
        image: "https://example.com/images/schule.jpg",
        examples: [
          "Die Kinder gehen jeden Morgen zur Schule.",
          "Meine Schule ist groß und modern.",
        ],
        deckId: 2,
        createdAt: "2025-02-09T10:06:00Z",
        updatedAt: "2025-02-09T10:06:00Z",
      },
      {
        id: 8,
        term: "Brot",
        pronunciation: "bʁoːt",
        definition: "A staple food, meaning 'Bread'.",
        image: "https://example.com/images/brot.jpg",
        examples: [
          "Ich esse Brot mit Käse zum Frühstück.",
          "Der Bäcker verkauft frisches Brot.",
        ],
        deckId: 2,
        createdAt: "2025-02-09T10:07:00Z",
        updatedAt: "2025-02-09T10:07:00Z",
      },
      {
        id: 9,
        term: "Rot",
        pronunciation: "ʁoːt",
        definition: "A color, meaning 'Red'.",
        image: "https://example.com/images/rot.jpg",
        examples: ["Mein Lieblingspulli ist rot.", "Die Ampel zeigt rot an."],
        deckId: 2,
        createdAt: "2025-02-09T10:08:00Z",
        updatedAt: "2025-02-09T10:08:00Z",
      },
      {
        id: 10,
        term: "Licht",
        pronunciation: "lɪçt",
        definition: "A source of brightness, meaning 'Light'.",
        image: "https://example.com/images/licht.jpg",
        examples: [
          "Das Sonnenlicht ist sehr hell heute.",
          "Mach bitte das Licht an.",
        ],
        deckId: 2,
        createdAt: "2025-02-09T10:09:00Z",
        updatedAt: "2025-02-09T10:09:00Z",
      },
    ],
    userId: 1,
    createdAt: "2025-02-09T10:09:00Z",
    updatedAt: "2025-02-09T10:09:00Z",
  },
  {
    id: 3,
    name: "Basic French Verbs",
    description: "List of the most common French verbs",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
    languageFront: "French",
    languageBack: "English",
    flashcards: [
      {
        id: 1,
        term: "Parler",
        pronunciation: "paʁ.le",
        definition: "To speak or to talk.",
        image: "https://example.com/images/parler.jpg",
        examples: ["Je parle français.", "Il aime parler avec ses amis."],
        deckId: 3,
        createdAt: "2025-02-09T10:10:00Z",
        updatedAt: "2025-02-09T10:10:00Z",
      },
      {
        id: 2,
        term: "Manger",
        pronunciation: "mɑ̃.ʒe",
        definition: "To eat.",
        image: "https://example.com/images/manger.jpg",
        examples: ["Nous mangeons du pain.", "Elle aime manger des fruits."],
        deckId: 3,
        createdAt: "2025-02-09T10:11:00Z",
        updatedAt: "2025-02-09T10:11:00Z",
      },
      {
        id: 3,
        term: "Aimer",
        pronunciation: "ɛ.me",
        definition: "To like or to love.",
        image: "https://example.com/images/aimer.jpg",
        examples: ["J’aime le chocolat.", "Ils aiment voyager ensemble."],
        deckId: 3,
        createdAt: "2025-02-09T10:12:00Z",
        updatedAt: "2025-02-09T10:12:00Z",
      },
      {
        id: 4,
        term: "Être",
        pronunciation: "ɛtʁ",
        definition: "To be.",
        image: "https://example.com/images/etre.jpg",
        examples: [
          "Je suis heureux aujourd’hui.",
          "Elle est très intelligente.",
        ],
        deckId: 3,
        createdAt: "2025-02-09T10:13:00Z",
        updatedAt: "2025-02-09T10:13:00Z",
      },
      {
        id: 5,
        term: "Avoir",
        pronunciation: "a.vwaʁ",
        definition: "To have.",
        image: "https://example.com/images/avoir.jpg",
        examples: ["J’ai un chien.", "Tu as un joli sac."],
        deckId: 3,
        createdAt: "2025-02-09T10:14:00Z",
        updatedAt: "2025-02-09T10:14:00Z",
      },
      {
        id: 6,
        term: "Faire",
        pronunciation: "fɛʁ",
        definition: "To do or to make.",
        image: "https://example.com/images/faire.jpg",
        examples: [
          "Il fait du sport tous les jours.",
          "Nous faisons un gâteau.",
        ],
        deckId: 3,
        createdAt: "2025-02-09T10:15:00Z",
        updatedAt: "2025-02-09T10:15:00Z",
      },
      {
        id: 7,
        term: "Aller",
        pronunciation: "a.le",
        definition: "To go.",
        image: "https://example.com/images/aller.jpg",
        examples: ["Nous allons à Paris demain.", "Elle va souvent au cinéma."],
        deckId: 3,
        createdAt: "2025-02-09T10:16:00Z",
        updatedAt: "2025-02-09T10:16:00Z",
      },
      {
        id: 8,
        term: "Pouvoir",
        pronunciation: "pu.vwaʁ",
        definition: "To be able to / Can.",
        image: "https://example.com/images/pouvoir.jpg",
        examples: ["Je peux parler anglais.", "Il peut venir ce soir."],
        deckId: 3,
        createdAt: "2025-02-09T10:17:00Z",
        updatedAt: "2025-02-09T10:17:00Z",
      },
      {
        id: 9,
        term: "Voir",
        pronunciation: "vwaʁ",
        definition: "To see.",
        image: "https://example.com/images/voir.jpg",
        examples: [
          "Je vois un oiseau dans l’arbre.",
          "Tu vois bien sans lunettes ?",
        ],
        deckId: 3,
        createdAt: "2025-02-09T10:18:00Z",
        updatedAt: "2025-02-09T10:18:00Z",
      },
      {
        id: 10,
        term: "Savoir",
        pronunciation: "sa.vwaʁ",
        definition: "To know.",
        image: "https://example.com/images/savoir.jpg",
        examples: ["Je sais parler espagnol.", "Elle sait bien cuisiner."],
        deckId: 3,
        createdAt: "2025-02-09T10:19:00Z",
        updatedAt: "2025-02-09T10:19:00Z",
      },
    ],
    userId: 1,
    createdAt: "2025-02-09T10:09:00Z",
    updatedAt: "2025-02-09T10:09:00Z",
  },
  {
    id: 4,
    name: "Basic German Verbs",
    description: "List of the most common German verbs",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    languageFront: "German",
    languageBack: "English",
    flashcards: [
      {
        id: 1,
        term: "Sprechen",
        pronunciation: "ˈʃpʁɛçən",
        definition: "To speak.",
        image: "https://example.com/images/sprechen.jpg",
        examples: [
          "Ich spreche Deutsch.",
          "Er spricht mit seiner Mutter am Telefon.",
        ],
        deckId: 4,
        createdAt: "2025-02-09T10:20:00Z",
        updatedAt: "2025-02-09T10:20:00Z",
      },
      {
        id: 2,
        term: "Essen",
        pronunciation: "ˈɛsən",
        definition: "To eat.",
        image: "https://example.com/images/essen.jpg",
        examples: [
          "Wir essen heute Abend Pizza.",
          "Sie isst gerne Schokolade.",
        ],
        deckId: 4,
        createdAt: "2025-02-09T10:21:00Z",
        updatedAt: "2025-02-09T10:21:00Z",
      },
      {
        id: 3,
        term: "Lieben",
        pronunciation: "ˈliːbən",
        definition: "To love.",
        image: "https://example.com/images/lieben.jpg",
        examples: ["Ich liebe meine Familie.", "Er liebt klassische Musik."],
        deckId: 4,
        createdAt: "2025-02-09T10:22:00Z",
        updatedAt: "2025-02-09T10:22:00Z",
      },
      {
        id: 4,
        term: "Sein",
        pronunciation: "zaɪ̯n",
        definition: "To be.",
        image: "https://example.com/images/sein.jpg",
        examples: ["Ich bin glücklich.", "Sie ist meine beste Freundin."],
        deckId: 4,
        createdAt: "2025-02-09T10:23:00Z",
        updatedAt: "2025-02-09T10:23:00Z",
      },
      {
        id: 5,
        term: "Haben",
        pronunciation: "ˈhaːbən",
        definition: "To have.",
        image: "https://example.com/images/haben.jpg",
        examples: ["Ich habe einen Hund.", "Er hat viele Freunde."],
        deckId: 4,
        createdAt: "2025-02-09T10:24:00Z",
        updatedAt: "2025-02-09T10:24:00Z",
      },
      {
        id: 6,
        term: "Machen",
        pronunciation: "ˈmaxən",
        definition: "To do / To make.",
        image: "https://example.com/images/machen.jpg",
        examples: ["Was machst du heute?", "Ich mache meine Hausaufgaben."],
        deckId: 4,
        createdAt: "2025-02-09T10:25:00Z",
        updatedAt: "2025-02-09T10:25:00Z",
      },
      {
        id: 7,
        term: "Gehen",
        pronunciation: "ˈɡeːən",
        definition: "To go.",
        image: "https://example.com/images/gehen.jpg",
        examples: ["Ich gehe zur Arbeit.", "Er geht jeden Morgen joggen."],
        deckId: 4,
        createdAt: "2025-02-09T10:26:00Z",
        updatedAt: "2025-02-09T10:26:00Z",
      },
      {
        id: 8,
        term: "Können",
        pronunciation: "ˈkœnən",
        definition: "To be able to / Can.",
        image: "https://example.com/images/koennen.jpg",
        examples: ["Ich kann Deutsch sprechen.", "Er kann sehr gut tanzen."],
        deckId: 4,
        createdAt: "2025-02-09T10:27:00Z",
        updatedAt: "2025-02-09T10:27:00Z",
      },
      {
        id: 9,
        term: "Sehen",
        pronunciation: "ˈzeːən",
        definition: "To see.",
        image: "https://example.com/images/sehen.jpg",
        examples: [
          "Ich sehe einen schönen Sonnenuntergang.",
          "Kannst du mich sehen?",
        ],
        deckId: 4,
        createdAt: "2025-02-09T10:28:00Z",
        updatedAt: "2025-02-09T10:28:00Z",
      },
      {
        id: 10,
        term: "Wissen",
        pronunciation: "ˈvɪsən",
        definition: "To know.",
        image: "https://example.com/images/wissen.jpg",
        examples: ["Ich weiß die Antwort.", "Er weiß nicht, was er tun soll."],
        deckId: 4,
        createdAt: "2025-02-09T10:29:00Z",
        updatedAt: "2025-02-09T10:29:00Z",
      },
    ],
    userId: 1,
    createdAt: "2025-02-09T10:09:00Z",
    updatedAt: "2025-02-09T10:09:00Z",
  },
];

export default flashcardDecks;
