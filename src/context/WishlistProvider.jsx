import { useState } from "react";
import { WishlistContext } from "./WishlistContext";

export const WishlistProvider = ({ children }) => {
  const [wishlistItems, setWishlistItems] = useState([]);

  const toggleWishlist = (product) => {
    setWishlistItems((items) => {
      const exists = items.some(
        (item) => item.id === product.id
      );

      if (exists) {
        return items.filter(
          (item) => item.id !== product.id
        );
      }

      return [...items, product];
    });
  };

  const isInWishlist = (id) => {
    return wishlistItems.some((item) => item.id === id);
  };

  const removeFromWishlist = (id) => {
    setWishlistItems((items) =>
      items.filter((item) => item.id !== id)
    );
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlistItems,
        toggleWishlist,
        isInWishlist,
        removeFromWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};