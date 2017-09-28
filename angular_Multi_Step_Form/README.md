Web application "Angular Multi Step Form"

Once you have Node.js installed, you can simply use `npm` to make it all happen:

```sh
$ npm -g install bower
```

If you're on Linux (like I am) then throw `sudo` in front of that command.  If
you're on Windows, then you're on your own.

Next, you can either clone this repository using Git, download it as a zip file
from GitHub, or merge the branch into your existing repository. Assuming you're
starting from scratch, simply clone this repository using git:


```sh
Clone of the repository: $ git clone https://github.com/AnatoliiKozanbaiev/angular_multi_step_form my-project-name
```

Then:

```sh
bower install vs-google-autocomplete --save
```

Add the Google Places library script to your index.html

```sh
<script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?libraries=places"></script>
```

Add vsGoogleAutocomplete module dependency:

```sh
angular.module('yourApp', ['vsGoogleAutocomplete']);
```

Very simple server:

```sh
$ npm i -g angular-http-server --save
```

To use:

```sh
cd /path/to/kanban_board
```

Run server:

```sh
$ angular-http-server
```

And browse to localhost:8080.