"use client";

import React, { useContext } from "react";
import Image from "next/image";
import { ShopContext } from "@/context/ShopContext";
import { currency } from "@/utils/constants";
import { Button } from "@/components/ui/button";
import styles from "./CartItems.module.css";

const CartItems = () => {
  const { products, cartItems, removeFromCart, getTotalCartAmount } = useContext(ShopContext);

  return (
    <div className={styles.cartItems}>
      <div className={styles.cartItemsHeader}>
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {products.map((product) => {
        if (cartItems[product.id] > 0) {
          return (
            <div key={product.id}>
              <div className={`${styles.cartItemsHeader} ${styles.cartItem}`}>
                <Image
                  className={styles.productIcon}
                  src={product.image}
                  alt={product.name}
                  width={50}
                  height={50}
                />
                <p className={styles.productTitle}>{product.name}</p>
                <p>{currency}{product.new_price}</p>
                <button className={styles.quantity}>{cartItems[product.id]}</button>
                <p>{currency}{product.new_price * cartItems[product.id]}</p>
                <Image
                  onClick={() => removeFromCart(product.id)}
                  className={styles.removeIcon}
                  src="/images/cart_cross_icon.png"
                  alt="Remove"
                  width={20}
                  height={20}
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}

      <div className={styles.cartItemsSummary}>
        <div className={styles.cartTotals}>
          <h1>Cart Totals</h1>
          <div>
            <div className={styles.cartTotalItem}>
              <p>Subtotal</p>
              <p>{currency}{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className={styles.cartTotalItem}>
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className={styles.cartTotalItem}>
              <h3>Total</h3>
              <h3>{currency}{getTotalCartAmount()}</h3>
            </div>
          </div>
          <Button>PROCEED TO CHECKOUT</Button>
        </div>
        <div className={styles.promoCode}>
          <p>If you have a promo code, Enter it here</p>
          <div className={styles.promoBox}>
            <input type="text" placeholder="Promo code" />
            <Button>Submit</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
