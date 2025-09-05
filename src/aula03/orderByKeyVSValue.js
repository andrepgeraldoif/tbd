import { onChildAdded, orderByValue, orderByKey, query, ref } from "firebase/database";
import db from "../libs/firebase/rtdb_connection.js"

const node = "produtos"
const itemKey = "-MwSzyJXAhIthYbLnzpv"
let refNode = ref(db, node);

//ORDER BY KEY VS ORDER BY VALUE
 const refUser = ref(db,`${node}/${itemKey}`);
//const consulta = query(refUser,orderByKey()) //PADRAO POR CHAVE
const consulta = query(refUser,orderByValue()) //POR VALOR

 onChildAdded(consulta,(dados)=>{
     let key = dados.key.padStart(20);
     console.log(`key: ${key} | value: ${dados.val()}`);
})
