<!-- resources/views/welcome.blade.php -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React Component in Blade</title>
    @viteReactRefresh
    @vite(['resources/js/components/pages/SellPage.tsx'])
</head>
<body>
<div id="global-background" className={"bg-secondary"} style="z-index: 0">
    <div id="app" data-faqs="{{ json_encode($faqs) }}" data-user="{{ json_encode($user) }}"></div>
</div>

<!-- Vite build scripts -->
@vite(['resources/css/app.css', 'resources/js/components/pages/SellPage.tsx'])
</body>
</html>
