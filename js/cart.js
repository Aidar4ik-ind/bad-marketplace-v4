// Управление корзиной
class Cart {
    constructor() {
        this.storageKey = 'bad_marketplace_cart';
        this.load();
    }
    
    // Загрузить из localStorage
    load() {
        try {
            const data = localStorage.getItem(this.storageKey);
            this.items = data ? JSON.parse(data) : [];
        } catch (error) {
            console.error('Ошибка загрузки корзины:', error);
            this.items = [];
        }
    }
    
    // Сохранить в localStorage
    save() {
        localStorage.setItem(this.storageKey, JSON.stringify(this.items));
        this.updateCounter();
    }
    
    // Добавить товар
    add(productId, quantity = 1) {
        const existing = this.items.find(item => item.id === productId);
        
        if (existing) {
            existing.quantity += quantity;
        } else {
            this.items.push({
                id: productId,
                quantity: quantity,
                addedAt: new Date().toISOString()
            });
        }
        
        this.save();
        this.showNotification('Товар добавлен в корзину!', 'success');
        return this.items;
    }
    
    // Удалить товар
    remove(productId) {
        this.items = this.items.filter(item => item.id !== productId);
        this.save();
        return this.items;
    }
    
    // Изменить количество
    update(productId, quantity) {
        const item = this.items.find(item => item.id === productId);
        if (item) {
            if (quantity <= 0) {
                this.remove(productId);
            } else {
                item.quantity = quantity;
                this.save();
            }
        }
        return this.items;
    }
    
    // Очистить корзину
    clear() {
        this.items = [];
        this.save();
        return this.items;
    }
    
    // Получить все товары
    getAll() {
        return this.items;
    }
    
    // Получить количество товаров
    getCount() {
        return this.items.reduce((total, item) => total + item.quantity, 0);
    }
    
    // Получить итоговую сумму
    getTotal(products) {
        return this.items.reduce((total, item) => {
            const product = products.find(p => p.id === item.id);
            return total + (product ? product.price * item.quantity : 0);
        }, 0);
    }
    
    // Обновить счетчик в UI
    updateCounter() {
        const counters = document.querySelectorAll('#cartCounter, .cart-counter');
        const count = this.getCount();
        
        counters.forEach(counter => {
            counter.textContent = count;
            // Показываем бейдж только если есть товары
            if (counter.id === 'cartCounter') {
                counter.style.display = count > 0 ? 'inline-block' : 'none';
            }
        });
    }
    
    // Показать уведомление
    showNotification(message, type = 'success') {
        // Удаляем старые уведомления
        document.querySelectorAll('.alert.position-fixed').forEach(alert => {
            if (alert.parentNode) {
                alert.remove();
            }
        });
        
        const notification = document.createElement('div');
        notification.className = `alert alert-${type} alert-dismissible fade show position-fixed`;
        notification.style.cssText = `
            top: 20px;
            right: 20px;
            z-index: 1050;
            min-width: 300px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        `;
        notification.innerHTML = `
            <i class="bi ${type === 'success' ? 'bi-check-circle' : 'bi-info-circle'} me-2"></i>
            ${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 3000);
    }
}

// Создаем глобальный экземпляр
const cart = new Cart();

// Глобальные функции
function addToCart(productId, quantity = 1) {
    return cart.add(productId, quantity);
}

function removeFromCart(productId) {
    return cart.remove(productId);
}

function getCart() {
    return cart.getAll();
}

function clearCart() {
    return cart.clear();
}

function updateCartCounter() {
    return cart.updateCounter();
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    cart.updateCounter();
});

// Экспорт
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { cart, addToCart, removeFromCart, getCart, clearCart, updateCartCounter };
} else {
    window.cart = cart;
    window.addToCart = addToCart;
    window.removeFromCart = removeFromCart;
    window.getCart = getCart;
    window.clearCart = clearCart;
    window.updateCartCounter = updateCartCounter;
}