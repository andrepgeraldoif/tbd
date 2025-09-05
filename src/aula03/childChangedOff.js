import { off, onChildChanged, ref } from "firebase/database";
import db from "../libs/firebase/rtdb_connection.js"

const node = "produtos"
//CHILD ADDED
let refDB = ref(db, node);
let count= 0;

onChildChanged(refDB, (snapshot) => { //()=>{}
  if (!snapshot.exists()) {
    console.log("Nó não encontrado")
    process.exit(0)
  }
  console.table(snapshot.val())
  count++;
  if (count === 2) { // apenas exiba 2 mudancas
    console.log(snapshot.key)
    console.log("2 mudancas executadas. Callback removido")
    off(refDB, 'child_changed')
  }
});
