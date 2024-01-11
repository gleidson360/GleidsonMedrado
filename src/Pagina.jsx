import React from "react";

export default function Pagina()
{
    return <main>
        <img src="./charlie.jpg" alt="foto" width="128" />

        <div> 
            <b> Fulano </b> | 00 anos | Desenvolvedor Web
        </div> 

        <div>
            <b> Perfil </b> : Olá eu sou o Fulano e sou Desenvolvedor Web.
            Adoro programar em React e em outras diversas tecnologias novas.
        </div>

        <div>
            <b> Experiências </b> : Já trabalhei com XXXXXX,
            desenvolvendo projetos como XXXXXX
            e passei 00 anos fazendo curso na SuperGeeks.
        </div>

        <div>
            <b> Competências </b> :
            Lógica de programação,
            Raciocínio computacional,
            Python,
            C#,
            HTML,
            CSS,
            JavaScript e
            React. 
        </div>

        <div>
            <a href="mailto:fulano@email.com"> Email </a> 
            <a href="tel:+55(11)98888-7777"> Celular </a>
            <a href="https://github.com/fulano"> Github </a> 
        </div>
    </main>
}