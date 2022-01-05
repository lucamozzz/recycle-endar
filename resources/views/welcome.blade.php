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
    <h2 class="h1" style="text-align: center; padding-top: 0.3em;">♻️ Recycle-endar 📅</h2>
    <hr>
    <div id="root"></div>
    <script src="{{mix('js/app.js')}}"></script>
</body>

</html>