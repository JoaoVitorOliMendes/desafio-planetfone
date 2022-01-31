<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Exception\GuzzleException;
use GuzzleHttp\Client;
use App\User;

class UserController extends Controller
{
    public function index()
    {
        //Instancia o Cliente Guzzle
        $client = new Client();
        //Chama a requisicao
        $result = $client->get('https://jsonplaceholder.typicode.com/users');
        //Converte o corpo da resposta para String
        $stringBody = (string) $result->getBody();
        //Converte de Json para array e corta o array para apenas os primeiros 5 usuarios
        $slice = array_slice(json_decode($stringBody), 0, 5);
        //Formata o array para ordem alfabética
        usort($slice, function($a, $b) {
            return strcmp($a->name, $b->name);
        });
        //Retorna o Array
        return $slice;
    }
}
