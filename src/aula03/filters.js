import db from "../libs/firebase/rtdb_connection.js"
import * as fb from "firebase/database";
import {onChildAdded, orderByChild, query,ref} from "firebase/database";

const node = "produtos" //No ou ramo a ser monitorado
const limit = 3;
const produtos = []
const refDB = db.ref(node);
refDB.orderByChild('preco').limitToFirst(limit).on('child_added', (snapshot) => {
  produtos.push([snapshot.key,snapshot.val()])
});

setInterval(()=>{
    if (produtos.length== limit)
      console.table(Object.fromEntries(produtos))
      process.exit(0)
    },1000
)