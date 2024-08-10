<!DOCTYPE html>
<head>
	<title>Site 1</title>

	{{
		Vite::useBuildDirectory('build/one')->withEntryPoints([
			'resources/one/css/app.css',
			'resources/one/js/app.js',
		]),
	}}
</head>

<body>
  <h1>Site 1</h1>
</body>
