








document.addEventListener("DOMContentLoaded", function() {
    const products = [
        { id: 1, name: "لپ‌تاپ" },
        { id: 2, name: "گوشی موبایل" },
        { id: 3, name: "هدفون" },
        { id: 4, name: "ساعت هوشمند" }
    ];

    let cart = [products[0], products[1], products[2]]; 

    function showMenu() {
        let choice;
        do {
            choice = prompt("انتخاب کنید:\n1. افزودن به سبد\n2. حذف از سبد\n3. نمایش سبد\n4. خروج");
            switch (choice) {
                case "1":
                    addToCart();
                    break;
                case "2":
                    removeFromCart();
                    break;
                case "3":
                    showCart();
                    break;
                case "4":
                    alert("خروج از برنامه");
                    break;
                default:
                    alert("انتخاب نامعتبر");
            }
        } while (choice !== "4");
    }

    function addToCart() {
        let productId = parseInt(prompt("شناسه محصول را وارد کنید:\n" + products.map(p => `${p.id}: ${p.name}`).join("\n")));
        let product = products.find(p => p.id === productId);
        if (product && !cart.includes(product)) {
            cart.push(product);
            alert(`${product.name} به سبد خرید افزوده شد.`);
        } else {
            alert("محصول نامعتبر یا تکراری است.");
        }
    }

    function removeFromCart() {
        let productId = parseInt(prompt("شناسه محصولی که می‌خواهید حذف کنید را وارد کنید:\n" + cart.map(p => `${p.id}: ${p.name}`).join("\n")));
        let initialLength = cart.length;
        cart = cart.filter(item => item.id !== productId);
        if (cart.length < initialLength) {
            alert("محصول حذف شد.");
        } else {
            alert("محصول یافت نشد.");
        }
    }

    function showCart() {
        if (cart.length > 0) {
            alert("سبد خرید:\n" + cart.map(p => `${p.id}: ${p.name}`).join("\n"));
        } else {
            alert("سبد خرید خالی است.");
        }
    }

    showMenu();
});
