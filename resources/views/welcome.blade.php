<!doctype html>
<html lang="{{ app()->getLocale() }}">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Recycle-endar</title>
    <link href="{{mix('css/app.css')}}" rel="stylesheet" type="text/css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
</head>

<body>
    <div style="padding-bottom: 9em;">
        <div style="position: fixed; background-color: white; width: 100%; z-index: 1;">
            <h2 class="h1" style="margin: 0.8em;">♻️ Recycle-endar</h2>
            <hr style="margin: 0;">
        </div>
    </div>
    <div id="root"></div>
    <script src="{{mix('js/app.js')}}"></script>
</body>

</html>