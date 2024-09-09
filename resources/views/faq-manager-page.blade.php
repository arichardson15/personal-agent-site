<!-- resources/views/welcome.blade.php -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FAQ Manager</title>
    <link rel="icon" href="{{ asset('images/Heritage_Logo_White_2022.png') }}" type="image/png">
    @viteReactRefresh
    @vite(['resources/js/components/pages/FAQManagerPage.tsx'])
</head>
<body>
<div id="global-background" className={"bg-secondary"}>
    <div id="app" data-user="{{ json_encode($user) }}"></div>
</div>

<!-- Vite build scripts -->
@vite(['resources/css/app.css', 'resources/js/components/pages/FAQManagerPage.tsx'])
</body>
</html>
