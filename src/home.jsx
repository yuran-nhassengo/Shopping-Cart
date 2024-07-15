import React, { useContext } from 'react';
import { products } from './data/products';
import { ShoppingCartContext } from './contexts/shopping-cart';

export const Home = () => {
    const { cart, addToCart, removeFromCart } = useContext(ShoppingCartContext);
    let total = 0;

    function handleAddToCart(product) {
        addToCart(product);
    }

    function handleRemoveFromCart(itemId) {
        const p = cart.findIndex((item) => item.id === itemId)
        removeFromCart(p);
    }

    return (
        <main>
            Items no carrinho:{" "}
            <span style={{ fontWeight: "bold" }}>{cart.length}</span>
            <section>
                <div>
                    {products.map((product) => (
                        <div
                            key={product.id}
                            style={{ border: "1px solid black", margin: "4px" }}
                        >
                            <h2>{product.name}</h2>
                            <p>{product.price}</p>
                            <button onClick={() => handleAddToCart(product)}>Adicionar ao Carrinho</button>
                        </div>
                    ))}
                </div>

                <nav>
                    <h2>Produtos no Carrinho</h2>
                    {cart.map((cartItem) => {
                        total += cartItem.price;

                        return (
                            <div key={cartItem.id}>
                                <h3>{cartItem.name}</h3>
                                <p>
                                    Preço: <span>{cartItem.price}</span>
                                </p>
                                <button style={{ backgroundColor: "red" }} onClick={() => handleRemoveFromCart(cartItem.id)}>Eliminar</button>
                            </div>
                        );
                    })}
                    <div>
                        <h1>Total: {total.toFixed(2)} MT</h1>
                    </div>
                </nav>
            </section>
        </main>
    );
};

export default Home;