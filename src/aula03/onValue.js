import db from "../libs/firebase/rtdb_connection.js"
import { onValue, ref } from "firebase/database";

const node = "produtos/-MwSzyJRCG0FFdR2Ny_m"
const userRef = ref(db,node)

onValue(userRef,(snapshot)=>{
    console.table(snapshot.val())
    console.log("Descricao: "+ snapshot.val().descricao) // para um campo específico
    process.exit(0);
});