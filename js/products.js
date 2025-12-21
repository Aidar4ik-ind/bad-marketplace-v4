// products.js с ВАШИМИ сгенерированными картинками
const productsData = [
    {
        id: 1,
        name: "Магний B6 Extra Pure",
        description: "Хелатный магний для снижения стресса и улучшения сна",
        price: 1290,
        tags: ["магний", "стресс", "сон", "нервы"],
        category: "stress",
        image: "https://unlimbot.hb.ru-msk.vkcloud-storage.ru/image/1/1d0d91df-6f78-4aa2-8cb9-57251fd3fa4d-e0c15c044b2f4d48af9253c5e15e3a78.png"
    },
    {
        id: 2,
        name: "Мелатонин Экстра",
        description: "Для глубокого сна и легкого пробуждения",
        price: 890,
        tags: ["сон", "мелатонин", "релаксация"],
        category: "sleep",
        image: "https://unlimbot.hb.ru-msk.vkcloud-storage.ru/image/1/4ad0fa80-daa0-4b1b-84b1-eba9af073999-27ecf70db31f4c7e8895ec3dd401f9cc.png"
    },
    {
        id: 3,
        name: "Энерджи Буст",
        description: "Мгновенный заряд бодрости и энергии",
        price: 1500,
        tags: ["энергия", "бодрость", "витамины"],
        category: "energy",
        image: "https://unlimbot.hb.ru-msk.vkcloud-storage.ru/image/1/e19acad9-95ce-458f-b046-4c5db591fab1-da21b31d0f2947768f558fdf9796b15a.png"
    },
    {
        id: 4,
        name: "Иммуно Гуард",
        description: "Максимальная защита иммунитета",
        price: 1100,
        tags: ["иммунитет", "витамин C", "цинк"],
        category: "immunity",
        image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop" // Оставьте Unsplash или сгенерируйте свою
    },
    {
        id: 5,
        name: "Детокс Комплекс",
        description: "Глубокое очищение организма",
        price: 950,
        tags: ["детокс", "очищение", "печень"],
        category: "detox",
        image: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=400&h=300&fit=crop" // Оставьте Unsplash или сгенерируйте свою
    },
    {
        id: 6,
        name: "Ашваганда Премиум",
        description: "Адаптоген для устойчивости к стрессу",
        price: 1300,
        tags: ["стресс", "адаптоген"],
        category: "stress",
        image: "https://unlimbot.hb.ru-msk.vkcloud-storage.ru/image/1/8bfaa896-e63a-4a8e-b7e2-f2b5a04d4b44-48df32f65869439db4632fd1553f700f.png"
    },
    {
        id: 7,
        name: "L-Теанин Про",
        description: "Для ясности ума и спокойствия",
        price: 950,
        tags: ["стресс", "концентрация"],
        category: "stress",
        image: "https://unlimbot.hb.ru-msk.vkcloud-storage.ru/image/1/e10e2185-55e7-4c16-b729-1ae7914f2e57-cfd473e2c6554d30a197a92aacb345ee.png"
    },
    {
        id: 8,
        name: "Коэнзим Q10 Ultra",
        description: "Для клеточной энергии",
        price: 1800,
        tags: ["энергия", "антиоксидант"],
        category: "energy",
        image: "https://unlimbot.hb.ru-msk.vkcloud-storage.ru/image/1/d7fd8139-3ecc-41f7-8fec-07f3fd59e912-f971cc08dbcf48f585972a33fd541f7d.png"
    },
    {
        id: 9,
        name: "Женьшень Корейский",
        description: "Природный тоник",
        price: 1400,
        tags: ["энергия", "женьшень"],
        category: "energy",
        image: "https://unlimbot.hb.ru-msk.vkcloud-storage.ru/image/1/c124445c-1266-4e5d-b8c1-9570ac63b0e4-044c84d4b9ad4456b38969a8d49f8eba.png"
    },
    {
        id: 10,
        name: "Витамин B-Комплекс",
        description: "12 витаминов группы B",
        price: 890,
        tags: ["энергия", "витамины"],
        category: "energy",
        image: "https://unlimbot.hb.ru-msk.vkcloud-storage.ru/image/1/5a360a77-3296-48f0-ad6f-533a69d772cd-cfad4f4fd4ce4d418e1a78267d834ea6.png"
    },
    {
        id: 11,
        name: "Витамин C 1000",
        description: "Высокодозированный",
        price: 650,
        tags: ["иммунитет", "антиоксидант"],
        category: "immunity",
        image: "https://unlimbot.hb.ru-msk.vkcloud-storage.ru/image/1/14c3ba00-6e6c-40f8-ac0c-e4f91b6e067a-6a5e5e88955144418057d8fd1d98f2af.png"
    },
    {
        id: 12,
        name: "Цинк + Витамин D",
        description: "Дуэт для иммунитета",
        price: 820,
        tags: ["иммунитет", "цинк"],
        category: "immunity",
        image: "https://unlimbot.hb.ru-msk.vkcloud-storage.ru/image/1/bc24696d-62bd-41e2-8e76-a16f61887d56-c8b514bfe972461faeb7200828359ca3.png"
    },
    {
        id: 13,
        name: "Пробиотик Иммуно",
        description: "Для иммунитета и микрофлоры",
        price: 1350,
        tags: ["иммунитет", "пробиотик"],
        category: "immunity",
        image: "https://unlimbot.hb.ru-msk.vkcloud-storage.ru/image/1/bbcd7c9a-d3c0-4e1e-a239-c4449f675a5c-a8f537efe9b640bcaa1c13b7adb6501f.png"
    },
    {
        id: 14,
        name: "Суставы Флекс",
        description: "Для подвижности суставов",
        price: 1600,
        tags: ["суставы", "хондроитин"],
        category: "joints",
        image: "https://unlimbot.hb.ru-msk.vkcloud-storage.ru/image/1/b1334b43-136c-478a-bda5-84172461879a-d100a9a1478e4936bcfa2d983cb78d2c.png"
    },
    {
        id: 15,
        name: "Коллаген Морской",
        description: "Для суставов и кожи",
        price: 1750,
        tags: ["суставы", "коллаген"],
        category: "joints",
        image: "https://unlimbot.hb.ru-msk.vkcloud-storage.ru/image/1/1f99d467-cf67-4071-9293-9d02316a5e39-dad2a38608784cf2b25edd0f96cb1480.png"
    },
    {
        id: 16,
        name: "Омега-3 Ультра",
        description: "Высокая концентрация",
        price: 1250,
        tags: ["омега-3", "сердце"],
        category: "joints",
        image: "https://unlimbot.hb.ru-msk.vkcloud-storage.ru/image/1/96ead005-eb01-4886-a2df-28e451797ae5-a930646f9c6643a29723f8119c82cffb.png"
    },
    {
        id: 17,
        name: "Клетчатка Актив",
        description: "Для здорового пищеварения",
        price: 480,
        tags: ["пищеварение", "клетчатка"],
        category: "digestion",
        image: "https://unlimbot.hb.ru-msk.vkcloud-storage.ru/image/1/ec171b80-331d-4dc2-9a50-4c00ee439e93-6c28f05ab9784b698472ec20d2218e72.png"
    },
    {
        id: 18,
        name: "Ферментный Комплекс",
        description: "Для усвоения пищи",
        price: 890,
        tags: ["пищеварение", "ферменты"],
        category: "digestion",
        image: "https://unlimbot.hb.ru-msk.vkcloud-storage.ru/image/1/726d9957-c60b-4dc5-ab59-1b8bd9371cec-834d0b6685b74a8199f7f768ed62f68b.png"
    },
    {
        id: 19,
        name: "Куркумин Экстра",
        description: "Противовоспалительное",
        price: 980,
        tags: ["суставы", "куркумин"],
        category: "joints",
        image: "https://unlimbot.hb.ru-msk.vkcloud-storage.ru/image/1/b63faeb1-f44b-4976-9f30-fe26e94c57e7-f94cfb80bfcc4993872439843cb24e76.png"
    },
    {
        id: 20,
        name: "Глюкозамин+МСМ",
        description: "Восстановление хрящей",
        price: 1450,
        tags: ["суставы", "глюкозамин"],
        category: "joints",
        image: "https://unlimbot.hb.ru-msk.vkcloud-storage.ru/image/1/d0a65574-d1ab-4dec-9107-8cafcd70991b-14dfe5a37ae546e682ed7e67c10e1a33.png"
    },
    // Для оставшихся 10 товаров оставьте Unsplash или сгенерируйте картинки
    {
        id: 21,
        name: "Эхинацея Форте",
        description: "Поддержка иммунитета",
        price: 590,
        tags: ["иммунитет", "эхинацея"],
        category: "immunity",
        image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=400&h=300&fit=crop"
    },
    {
        id: 22,
        name: "Печень Протектор",
        description: "Защита печени",
        price: 1100,
        tags: ["детокс", "печень"],
        category: "detox",
        image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=400&h=300&fit=crop"
    },
    {
        id: 23,
        name: "Имбирь+Куркума",
        description: "Противовоспалительный дуэт",
        price: 720,
        tags: ["пищеварение", "имбирь"],
        category: "digestion",
        image: "https://images.unsplash.com/photo-1608039755401-742074f0548d?w=400&h=300&fit=crop"
    },
    {
        id: 24,
        name: "Ацетил-L-Карнитин",
        description: "Для мозга и энергии",
        price: 1250,
        tags: ["энергия", "мозг"],
        category: "energy",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop"
    },
    {
        id: 25,
        name: "НейроБаланс",
        description: "Для эмоционального равновесия",
        price: 1050,
        tags: ["стресс", "настроение"],
        category: "stress",
        image: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=400&h=300&fit=crop"
    },
    {
        id: 26,
        name: "Сонный Лотос",
        description: "Травяной комплекс для сна",
        price: 750,
        tags: ["сон", "травы"],
        category: "sleep",
        image: "https://images.unsplash.com/photo-1553531384-397c80973a0b?w=400&h=300&fit=crop"
    },
    {
        id: 27,
        name: "Ночной Покой",
        description: "Магний + валериана",
        price: 920,
        tags: ["сон", "магний"],
        category: "sleep",
        image: "https://images.unsplash.com/photo-1553531889-56cc480ac5cb?w=400&h=300&fit=crop"
    },
    {
        id: 28,
        name: "АнтиСтресс Макс",
        description: "Мощная формула",
        price: 1200,
        tags: ["стресс", "нервы"],
        category: "stress",
        image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=300&fit=crop&crop=center"
    },
    {
        id: 29,
        name: "Магний Хелат",
        description: "Высокая биодоступность",
        price: 850,
        tags: ["стресс", "магний"],
        category: "stress",
        image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=300&fit=crop"
    },
    {
        id: 30,
        name: "Dream Perfect",
        description: "Мелатонин продленного действия",
        price: 1100,
        tags: ["сон", "качество сна"],
        category: "sleep",
        image: "https://images.unsplash.com/photo-1553531889-56cc480ac5cb?w=400&h=300&fit=crop"
    }
];

// Функции оставить как были...
const Products = {
    getAll: () => productsData,
    getById: (id) => productsData.find(p => p.id === id),
    getFeatured: (count = 8) => productsData.slice(0, count),
    getByTag: (tag) => productsData.filter(p => p.tags.includes(tag)),
    search: (query) => {
        const q = query.toLowerCase();
        return productsData.filter(p => 
            p.name.toLowerCase().includes(q) || 
            p.description.toLowerCase().includes(q) ||
            p.tags.some(tag => tag.toLowerCase().includes(q))
        );
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = Products;
} else {
    window.Products = Products;
}