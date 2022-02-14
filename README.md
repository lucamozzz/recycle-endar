# Recycle-endar
Simple app that helps you recycle.<br> <br>
<b>Recycle-endar</b> provides you with a minimal nice-looking UI that makes it a cinch to remember<br> when you need to get up and take out the trash. <b>The right one</b>.<br><br>
A deploy of this application is available at the following address: https://recycle-endar.herokuapp.com
<br>
<br>
<img width="600" alt="Schermata 2022-02-13 alle 14 54 40" src="https://user-images.githubusercontent.com/76916015/153769160-f45f9eaf-6619-41e4-b59e-39482a4bf7c8.png">
<img height="376" alt="Schermata 2022-02-13 alle 14 51 16" src="https://user-images.githubusercontent.com/76916015/153769166-6035ff7e-043c-4a12-b4be-64e2a68dd152.png">

## How to install
Download this repo on your machine and <code>cd</code> into it. Run <code>php artisan serve</code> to have it listening on <code>localhost:8000</code>.

## Frontend
I provided this application with a <b>ReactJS</b> frontend. I think it looks cool!

## Backend
This web application was created using <b>Laravel 8.7</b>. <b>Laravel Mix</b> and <b>Laravel Sanctum</b> packages are used in this project.

## API Endpoints
The following endpoints are accessible without authentication:
<ul>
    <li>
        <code>POST /api/register</code>
    </li>
    <li>
        <code>POST /api/login</code>
    </li>
</ul>

When authenticated, you gain access to the following endpoints:
<ul>
    <li>
        Use <code>GET /api/pickups</code> to get a recap of the weekly pickups
    </li>
    <li>
        Use <code>POST /api/pickups</code> to create a new pickup
    </li>
    <li>
        Use <code>GET /api/pickups/{id}</code> to get a single pickup
    </li>
    <li>
        Use <code>PUT /api/pickups/{id}</code> to edit an existing pickup
    </li>
    <li>
        Use <code>DELETE /api/pickups/{id}</code> to delete an existing pickup
    </li>
    <li>
        Use <code>GET /api/pickups/search/{weekday}</code> to get pickups that occur on a specific weekday
    </li>
    <li>
        Use <code>POST /api/logout</code> to logout
    </li>
</ul>

## License
this project is licensed under the MIT license
