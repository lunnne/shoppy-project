import { db } from '../utils/firebase';
import { get, ref } from 'firebase/database';

export async function getAllProducts() {
  return get(ref(db,'products')).then(snapshot => {
    if(snapshot.exists()) {
        return Object.values(snapshot.val())
    } 
    return []
  })
}
