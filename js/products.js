// Полные данные 30 БАДов с подробными описаниями
const productsData = [
    {
        id: 1,
        name: "Магний B6 Extra Pure",
        description: "Хелатный магний для снижения стресса и улучшения сна",
        fullDescription: `
            <p><strong>Магний B6 Extra Pure от Nooteria Labs</strong> – это хелатная форма магния с высокой биодоступностью (90% усвояемости).</p>
            <p><strong>Действие:</strong> снижение стресса и тревожности, улучшение качества сна, поддержка сердца и сосудов, релаксация мышц, повышение стрессоустойчивости.</p>
            <p><strong>Особенности:</strong> не содержит примесей оксида или цитрата, не вызывает слабительного эффекта.</p>
        `,
        composition: "Бисглицинат магния (хелатная форма), Витамин B6 (пиридоксин)",
        dosage: "3 капсулы в день (405 мг чистого магния)",
        form: "Капсулы в твердой желатиновой оболочке",
        quantity: "60 капсул",
        manufacturer: "Nooteria Labs",
        shelfLife: "24 месяца",
        storage: "Хранить в сухом месте при температуре до 25°C",
        contraindications: "Индивидуальная непереносимость компонентов, беременность, лактация",
        instructionLink: "#",
        tags: ["магний", "стресс", "сон", "нервы", "сердце", "настроение"],
        category: "stress",
        price: 1290,
        image: "https://via.placeholder.com/400x300/4a6fa5/ffffff?text=Магний+B6"
    },
    {
        id: 2,
        name: "Мелатонин Экстра",
        description: "Для глубокого сна и легкого пробуждения",
        fullDescription: `<p>Мелатонин - гормон сна, регулирующий циркадные ритмы.</p>`,
        composition: "Мелатонин 3 мг",
        dosage: "1 таблетка за 30 минут до сна",
        form: "Таблетки",
        quantity: "90 таблеток",
        manufacturer: "SleepWell",
        tags: ["сон", "мелатонин", "релаксация"],
        category: "sleep",
        price: 890,
        image: "https://via.placeholder.com/400x300/6c5ce7/ffffff?text=Мелатонин"
    },
    {
        id: 3,
        name: "Энерджи Буст",
        description: "Мгновенный заряд бодрости и энергии",
        fullDescription: `<p>Комплекс для повышения энергетического уровня.</p>`,
        composition: "Коэнзим Q10, женьшень, витамины группы B",
        dosage: "1 капсула утром",
        form: "Капсулы",
        quantity: "30 капсул",
        manufacturer: "EnergyMax",
        tags: ["энергия", "бодрость", "витамины"],
        category: "energy",
        price: 1500,
        image: "https://via.placeholder.com/400x300/00b894/ffffff?text=Энерджи"
    },
    {
        id: 4,
        name: "Иммуно Гуард",
        description: "Максимальная защита иммунитета",
        fullDescription: `<p>Укрепление естественных защитных функций.</p>`,
        composition: "Витамин C, цинк, эхинацея",
        dosage: "1 таблетка в день",
        form: "Таблетки",
        quantity: "60 таблеток",
        manufacturer: "ImmunoPro",
        tags: ["иммунитет", "витамин C", "цинк"],
        category: "immunity",
        price: 1100,
        image: "https://via.placeholder.com/400x300/74b9ff/333?text=Иммунитет"
    },
    {
        id: 5,
        name: "Детокс Комплекс",
        description: "Глубокое очищение организма",
        fullDescription: `<p>Поддержка естественных процессов детоксикации.</p>`,
        composition: "Расторопша, артишок, куркумин",
        dosage: "2 капсулы в день",
        form: "Капсулы",
        quantity: "45 капсул",
        manufacturer: "DetoxPure",
        tags: ["детокс", "очищение", "печень"],
        category: "detox",
        price: 950,
        image: "https://via.placeholder.com/400x300/00cec9/ffffff?text=Детокс"
    },
    // 25 ДОПОЛНИТЕЛЬНЫХ ТОВАРОВ (для экономии места покажем структуру)
    {
        id: 6, name: "Ашваганда Премиум", description: "Адаптоген для устойчивости к стрессу", price: 1300, tags: ["стресс", "адаптоген"], category: "stress", image: "https://via.placeholder.com/400x300/d63031/ffffff?text=Ашваганда" },
    {
        id: 7, name: "L-Теанин Про", description: "Для ясности ума и спокойствия", price: 950, tags: ["стресс", "концентрация"], category: "stress", image: "https://via.placeholder.com/400x300/fdcb6e/333?text=L-Теанин" },
    {
        id: 8, name: "Коэнзим Q10 Ultra", description: "Для клеточной энергии", price: 1800, tags: ["энергия", "антиоксидант"], category: "energy", image: "https://via.placeholder.com/400x300/00cec9/ffffff?text=Q10" },
    {
        id: 9, name: "Женьшень Корейский", description: "Природный тоник", price: 1400, tags: ["энергия", "женьшень"], category: "energy", image: "https://via.placeholder.com/400x300/fdcb6e/333?text=Женьшень" },
    {
        id: 10, name: "Витамин B-Комплекс", description: "12 витаминов группы B", price: 890, tags: ["энергия", "витамины"], category: "energy", image: "https://via.placeholder.com/400x300/ffeaa7/333?text=B-Комплекс" },
    {
        id: 11, name: "Витамин C 1000", description: "Высокодозированный", price: 650, tags: ["иммунитет", "антиоксидант"], category: "immunity", image: "https://via.placeholder.com/400x300/a29bfe/ffffff?text=Витамин+C" },
    {
        id: 12, name: "Цинк + Витамин D", description: "Дуэт для иммунитета", price: 820, tags: ["иммунитет", "цинк"], category: "immunity", image: "https://via.placeholder.com/400x300/ffeaa7/333?text=Цинк+D" },
    {
        id: 13, name: "Пробиотик Иммуно", description: "Для иммунитета и микрофлоры", price: 1350, tags: ["иммунитет", "пробиотик"], category: "immunity", image: "https://via.placeholder.com/400x300/55efc4/333?text=Пробиотик" },
    {
        id: 14, name: "Суставы Флекс", description: "Для подвижности суставов", price: 1600, tags: ["суставы", "хондроитин"], category: "joints", image: "https://via.placeholder.com/400x300/74b9ff/333?text=Суставы" },
    {
        id: 15, name: "Коллаген Морской", description: "Для суставов и кожи", price: 1750, tags: ["суставы", "коллаген"], category: "joints", image: "https://via.placeholder.com/400x300/ffeaa7/333?text=Коллаген" },
    {
        id: 16, name: "Омега-3 Ультра", description: "Высокая концентрация", price: 1250, tags: ["омега-3", "сердце"], category: "joints", image: "https://via.placeholder.com/400x300/55efc4/333?text=Омега-3" },
    {
        id: 17, name: "Клетчатка Актив", description: "Для здорового пищеварения", price: 480, tags: ["пищеварение", "клетчатка"], category: "digestion", image: "https://via.placeholder.com/400x300/fdcb6e/333?text=Клетчатка" },
    {
        id: 18, name: "Ферментный Комплекс", description: "Для усвоения пищи", price: 890, tags: ["пищеварение", "ферменты"], category: "digestion", image: "https://via.placeholder.com/400x300/e17055/ffffff?text=Ферменты" },
    {
        id: 19, name: "Куркумин Экстра", description: "Противовоспалительное", price: 980, tags: ["суставы", "куркумин"], category: "joints", image: "https://via.placeholder.com/400x300/fdcb6e/333?text=Куркумин" },
    {
        id: 20, name: "Глюкозамин+МСМ", description: "Восстановление хрящей", price: 1450, tags: ["суставы", "глюкозамин"], category: "joints", image: "https://via.placeholder.com/400x300/a29bfe/ffffff?text=Глюкозамин" },
    {
        id: 21, name: "Эхинацея Форте", description: "Поддержка иммунитета", price: 590, tags: ["иммунитет", "эхинацея"], category: "immunity", image: "https://via.placeholder.com/400x300/fdcb6e/333?text=Эхинацея" },
    {
        id: 22, name: "Печень Протектор", description: "Защита печени", price: 1100, tags: ["детокс", "печень"], category: "detox", image: "https://via.placeholder.com/400x300/00b894/ffffff?text=Печень" },
    {
        id: 23, name: "Имбирь+Куркума", description: "Противовоспалительный дуэт", price: 720, tags: ["пищеварение", "имбирь"], category: "digestion", image: "https://via.placeholder.com/400x300/fdcb6e/333?text=Имбирь+Куркума" },
    {
        id: 24, name: "Ацетил-L-Карнитин", description: "Для мозга и энергии", price: 1250, tags: ["энергия", "мозг"], category: "energy", image: "https://via.placeholder.com/400x300/55efc4/333?text=L-Карнитин" },
    {
        id: 25, name: "НейроБаланс", description: "Для эмоционального равновесия", price: 1050, tags: ["стресс", "настроение"], category: "stress", image: "https://via.placeholder.com/400x300/e84393/ffffff?text=НейроБаланс" },
    {
        id: 26, name: "Сонный Лотос", description: "Травяной комплекс для сна", price: 750, tags: ["сон", "травы"], category: "sleep", image: "https://via.placeholder.com/400x300/6c5ce7/ffffff?text=Лотос" },
    {
        id: 27, name: "Ночной Покой", description: "Магний + валериана", price: 920, tags: ["сон", "магний"], category: "sleep", image: "https://via.placeholder.com/400x300/0984e3/ffffff?text=Покой" },
    {
        id: 28, name: "АнтиСтресс Макс", description: "Мощная формула", price: 1200, tags: ["стресс", "нервы"], category: "stress", image: "https://via.placeholder.com/400x300/ff7675/ffffff?text=АнтиСтресс" },
    {
        id: 29, name: "Магний Хелат", description: "Высокая биодоступность", price: 850, tags: ["стресс", "магний"], category: "stress", image: "https://via.placeholder.com/400x300/e17055/ffffff?text=Магний+Хелат" },
    {
        id: 30, name: "Dream Perfect", description: "Мелатонин продленного действия", price: 1100, tags: ["сон", "качество сна"], category: "sleep", image: "https://via.placeholder.com/400x300/00cec9/ffffff?text=Dream+Perfect" }
];

// Функции для работы с продуктами
const Products = {
    // Получить все продукты
    getAll: () => productsData,
    
    // Получить продукт по ID
    getById: (id) => productsData.find(p => p.id === id),
    
    // Получить популярные продукты
    getFeatured: (count = 8) => {
        const categories = [...new Set(productsData.map(p => p.category))];
        const featured = [];
        
        categories.forEach(category => {
            const catProducts = productsData.filter(p => p.category === category);
            if (catProducts.length > 0) {
                featured.push(catProducts[0]);
            }
        });
        
        return featured.slice(0, count);
    },
    
    // Получить продукты по категории
    getByCategory: (category) => productsData.filter(p => p.category === category),
    
    // Получить продукты по тегу
    getByTag: (tag) => productsData.filter(p => p.tags.includes(tag)),
    
    // Поиск
    search: (query) => {
        const q = query.toLowerCase();
        return productsData.filter(p => 
            p.name.toLowerCase().includes(q) || 
            p.description.toLowerCase().includes(q) ||
            p.tags.some(tag => tag.toLowerCase().includes(q))
        );
    },
    
    // Получить все категории
    getCategories: () => [...new Set(productsData.map(p => p.category))],
    
    // Получить все теги
    getAllTags: () => {
        const allTags = productsData.flatMap(p => p.tags);
        return [...new Set(allTags)];
    }
};

// Экспорт
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Products;
} else {
    window.Products = Products;
}