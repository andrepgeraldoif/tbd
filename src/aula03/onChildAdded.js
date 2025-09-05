import db from "../libs/firebase/rtdb_connection.js"
import * as fb from "firebase/database";
import {onChildAdded} from "firebase/database";

const node = "produtos" //No ou ramo a ser monitorado
const refNode = fb.ref(db,node);
let count =0;

onChildAdded(refNode,(snapshot)=>{
  console.log(++count)
  console.table(snapshot.val())
});