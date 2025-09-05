import db from "../libs/firebase/rtdb_connection.js"
import {ref, update} from "firebase/database";

const refNode = ref(db,'produtos/-MwSzyJXAhIthYbLnzpv');
const newData = {
	preco: 205
}

update(refNode, newData)
	.then(()=>console.log('Inserido ou atualizado!!!'))
	.catch(()=>console.log("Erro ao inserir!!"))
	.finally(()=>process.exit())
