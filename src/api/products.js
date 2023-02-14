import { db } from '../utils/firebase';
import { set, get, ref, remove } from 'firebase/database';
import { v4 as uuidv4 } from 'uuid';

export async function addProduct(product) {
  const uuid = uuidv4();
  const { price, options } = product;
  set(ref(db, `/products/${uuid}`), {
    ...product,
    id: uuid,
    price: parseInt(price),
    options: options.split(','),
  });
}

export async function getAllProducts() {
  return get(ref(db, 'products')).then((snapshot) => {
    if (snapshot.exists()) {
      return Object.values(snapshot.val());
    }
    return [];
  });
}

export async function addToCart(user, product, option) {
  return set(ref(db, `carts/${user.uid}/${product.id}`), {
    ...product,
    options: option,
    quantity: 1,
  });
}

export async function getCart(user) {
  return get(ref(db, `carts/${user.uid}`)).then((snapshot) => {
    if (snapshot.exists()) {
      return Object.values(snapshot.val());
    }
    return [];
  });
}

export async function deleteFromCart(user, product) {
  return remove(ref(db, `carts/${user.uid}/${product.id}`));
}
