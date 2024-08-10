<!DOCTYPE html>
<head>
	<title>Site 2</title>

	{{
		Vite::useBuildDirectory('build/two')->withEntryPoints([
			'resources/two/css/app.css',
			'resources/two/js/app.js',
		]),
	}}
</head>

<body>
	<h1>Site 2</h1>
</body>
