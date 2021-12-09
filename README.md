# Recycle-endar API
This API allows you to access a backend model designed to help you recycle. Start by setting up calendar-like _Pickups_ in order to remember which kind of garbage you should be taking outside (and when).

## How to install
Download this repo on your local machine and <code>cd</code> into it. Run <code>php artisan serve</code> to have it listening on <code>localhost:8000</code>.

## How to use

The following endpoints are public and allow you to authenticate:
<ul>
    <li>
        <code>POST: /api/register</code>
    </li>
    <li>
        <code>POST: /api/login</code>
    </li>
</ul>

When authenticated, you gain access to the following endpoints:
<ul>
    <li>
        Use <code>GET: /api/pickups</code> to get a recap of the weekly pickups
    </li>
    <li>
        Use <code>POST: /api/pickups</code> to create a new pickup
    </li>
    <li>
        Use <code>GET: /api/pickups/{id}</code> to get a single pickup
    </li>
    <li>
        Use <code>PUT: /api/pickups/{id}</code> to edit an existing pickup
    </li>
    <li>
        Use <code>DELETE: /api/pickups/{id}</code> to delete an existing pickup
    </li>
    <li>
        Use <code>GET: /api/pickups/search/{weekday}</code> to get pickups that occur on a specific weekday
    </li>
    <li>
        Use <code>POST: /api/logout</code> to logout
    </li>
</ul>

## Technologies
This API was created using Laravel 8.7. The authentication is handled by Laravel Sanctum.
