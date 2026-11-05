import {
  createContext,
  useContext,
  useEffect,
  useState
} from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  // Recupera o carrinho salvo no navegador
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");

    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Salva sempre que o carrinho for atualizado
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Adiciona produto ou aumenta sua quantidade
  function addToCart(product) {
    setCart((currentCart) => {
      const existingProduct = currentCart.find(
        (item) => item.id === product.id
      );

      if (existingProduct) {
        return currentCart.map((item) =>
          item.id === product.id
            ? { ...item, total: item.total + product.total }
            : item
        );
      }

      return [...currentCart, { ...product }];
    });
  }

  // Remove produto do carrinho
  function removeFromCart(productId) {
    setCart((currentCart) =>
      currentCart.filter((item) => item.id !== productId)
    );
  }

  // Atualiza quantidade
  function updateQuantity(productId, quantity) {
    if (quantity < 1) return;

    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === productId
          ? { ...item, total:quantity }
          : item
      )
    );
  }
  function updateSelected(productId) {

    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === productId
          ? { ...item, is_check:!item.is_check }
          : item
      )
    );
  }

  // Esvazia o carrinho
  function clearCart() {
    setCart([]);
  }

  // Calcula quantidade total de itens
  const totalItems = cart.reduce(
    (total, item) => total + item.total,
    0
  );

  // Calcula valor total
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.total,
    0
  );

  const totalSelectItems = cart.reduce((acc, curr) => {
    if(curr.is_check){
      return acc+1
    }
      return acc;
    }, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        updateSelected,
        totalItems,
        totalPrice,
        totalSelectItems
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

// Hook personalizado para acessar o contexto
export function useCart() {
  return useContext(CartContext);
}