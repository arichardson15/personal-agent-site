<!-- resources/views/welcome.blade.php -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React Component in Blade</title>
    @viteReactRefresh
    @vite(['resources/js/components/pages/LoginPage.tsx'])
</head>
<body>
<div id="global-background" className={"bg-secondary"}>
    <div id="app" data-user="{{ json_encode($user) }}"></div>
</div>

<!-- Vite build scripts -->
@vite(['resources/css/app.css', 'resources/js/components/pages/LoginPage.tsx'])
</body>
</html>
