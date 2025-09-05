<?php
require __DIR__ . '/vendor/autoload.php';
use Kreait\Firebase\Factory;

$factory = (new Factory)
    ->withServiceAccount('/var/key/firebase_credentials.json')
    ->withDatabaseUri('https://cstsibda-default-rtdb.firebaseio.com');
$database = $factory
    ->withDatabaseAuthVariableOverride(null)
    ->createDatabase();

$reference = $database->getReference('users'); // Define o ramo a ser retorna
#$snapshot = $reference->shallow()->getSnapshot(); // Transfere os dados do servidor
$snapshot = $reference->getSnapshot(); // Transfere os dados do servidor
$value = $snapshot->getValue(); // Retorna os valores
print_r($value);

//$reference = $database->getReference('users/1'); // Define o ramo a ser retorna
//$snapshot = $reference->getSnapshot(); // Transfere os dados do servidor
//$value = $reference->getValue(); // Retorna os valores
//var_dump($snapshot->getReference()); // o ramo a ser consultado
//var_dump($snapshot->getKey()); // o ramo a ser consultado
//var_dump($snapshot->numChildren()); // n de filhos de users/1
