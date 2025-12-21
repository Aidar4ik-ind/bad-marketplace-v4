// products.js с РАБОЧИМИ картинками
const productsData = [
    {
        id: 1,
        name: "Магний B6 Extra Pure",
        description: "Хелатный магний для снижения стресса и улучшения сна",
        price: 1290,
        tags: ["магний", "стресс", "сон", "нервы"],
        category: "stress",
        image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=300&fit=crop"
    },
    {
        id: 2,
        name: "Мелатонин Экстра",
        description: "Для глубокого сна и легкого пробуждения",
        price: 890,
        tags: ["сон", "мелатонин", "релаксация"],
        category: "sleep",
        image: "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=400&h=300&fit=crop"
    },
    {
        id: 3,
        name: "Энерджи Буст",
        description: "Мгновенный заряд бодрости и энергии",
        price: 1500,
        tags: ["энергия", "бодрость", "витамины"],
        category: "energy",
        image: "https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?w=400&h=300&fit=crop"
    },
    {
        id: 4,
        name: "Иммуно Гуард",
        description: "Максимальная защита иммунитета",
        price: 1100,
        tags: ["иммунитет", "витамин C", "цинк"],
        category: "immunity",
        image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400&h=300&fit=crop"
    },
    {
        id: 5,
        name: "Детокс Комплекс",
        description: "Глубокое очищение организма",
        price: 950,
        tags: ["детокс", "очищение", "печень"],
        category: "detox",
        image: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?w=400&h=300&fit=crop"
    },
    {
        id: 6, name: "Ашваганда Премиум", description: "Адаптоген для устойчивости к стрессу", price: 1300, tags: ["стресс", "адаптоген"], category: "stress", 
        image: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=400&h=300&fit=crop"
    },
    {
        id: 7, name: "L-Теанин Про", description: "Для ясности ума и спокойствия", price: 950, tags: ["стресс", "концентрация"], category: "stress", 
        image: "https://images.unsplash.com/photo-1514995669114-6081e934b693?w=400&h=300&fit=crop"
    },
    {
        id: 8, name: "Коэнзим Q10 Ultra", description: "Для клеточной энергии", price: 1800, tags: ["энергия", "антиоксидант"], category: "energy", 
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop"
    },
    {
        id: 9, name: "Женьшень Корейский", description: "Природный тоник", price: 1400, tags: ["энергия", "женьшень"], category: "energy", 
        image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&h=300&fit=crop"
    },
    {
        id: 10, name: "Витамин B-Комплекс", description: "12 витаминов группы B", price: 890, tags: ["энергия", "витамины"], category: "energy", 
        image: "https://images.unsplash.com/photo-1584017911766-d451b3d0e843?w=400&h=300&fit=crop"
    },
    // Еще 20 товаров с картинками...
    {
        id: 11, name: "Витамин C 1000", description: "Высокодозированный", price: 650, tags: ["иммунитет", "антиоксидант"], category: "immunity", 
        image: "https://images.unsplash.com/photo-1585336261022-680e295ce3fe?w=400&h=300&fit=crop"
    },
    {
        id: 12, name: "Цинк + Витамин D", description: "Дуэт для иммунитета", price: 820, tags: ["иммунитет", "цинк"], category: "immunity", 
        image: "https://images.unsplash.com/photo-1579113800032-c38bd7635818?w=400&h=300&fit=crop"
    },
    {
        id: 13, name: "Пробиотик Иммуно", description: "Для иммунитета и микрофлоры", price: 1350, tags: ["иммунитет", "пробиотик"], category: "immunity", 
        image: "https://images.unsplash.com/photo-1563241527-3004b7be0ffc?w=400&h=300&fit=crop"
    },
    {
        id: 14, name: "Суставы Флекс", description: "Для подвижности суставов", price: 1600, tags: ["суставы", "хондроитин"], category: "joints", 
        image: "https://images.unsplash.com/photo-1566305977571-5666677c6e98?w=400&h=300&fit=crop"
    },
    {
        id: 15, name: "Коллаген Морской", description: "Для суставов и кожи", price: 1750, tags: ["суставы", "коллаген"], category: "joints", 
        image: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=400&h=300&fit=crop"
    },
    {
        id: 16, name: "Омега-3 Ультра", description: "Высокая концентрация", price: 1250, tags: ["омега-3", "сердце"], category: "joints", 
        image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=400&h=300&fit=crop"
    },
    {
        id: 17, name: "Клетчатка Актив", description: "Для здорового пищеварения", price: 480, tags: ["пищеварение", "клетчатка"], category: "digestion", 
        image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop"
    },
    {
        id: 18, name: "Ферментный Комплекс", description: "Для усвоения пищи", price: 890, tags: ["пищеварение", "ферменты"], category: "digestion", 
        image: "https://images.unsplash.com/photo-1531816536896-9a6c1ee8d7c5?w=400&h=300&fit=crop"
    },
    {
        id: 19, name: "Куркумин Экстра", description: "Противовоспалительное", price: 980, tags: ["суставы", "куркумин"], category: "joints", 
        image: "https://images.unsplash.com/photo-1562059390-a761a084768e?w=400&h=300&fit=crop"
    },
    {
        id: 20, name: "Глюкозамин+МСМ", description: "Восстановление хрящей", price: 1450, tags: ["суставы", "глюкозамин"], category: "joints", 
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop"
    }
];

// Остальные функции оставить как были...
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