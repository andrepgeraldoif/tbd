import db from "../libs/firebase/rtdb_connection.js";
import {ref, set} from "firebase/database";


const refNode = ref(db,`produtos/aaa`);
const newProd = {
	descricao: "Novo Produto",
	id_prod: 555,
	importado: 0,
	nome: "Novo Produto",
	preco: 1000,
	quantidade: 100
}
set(refNode, newProd)
	.then(()=>console.log('Inserido!!!'))
	.catch(()=>console.log("Erro ao inserir!!"))
	.finally(()=>process.exit())
