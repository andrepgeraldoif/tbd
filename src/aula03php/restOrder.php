<?php

$curl = curl_init('https://cstsibda-default-rtdb.firebaseio.com/users.json?orderBy="email"&limitToFirst=2');
curl_setopt_array($curl, array(
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => "",
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_HTTPHEADER => array(
        "cache-control: no-cache"
    ),
));

$response = curl_exec($curl);
$err = curl_error($curl);
curl_close($curl);
if ($err) {
    echo "Codigo de erro #:" . $err;
} else {
    echo $response;
}