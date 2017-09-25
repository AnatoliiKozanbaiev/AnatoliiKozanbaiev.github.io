# PhoneCat App

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
$ git clone git://github.com/joshdmiller/ng-boilerplate my-project-name
$ cd my-project-name
```

And then install the remaining build dependencies locally:

```sh
$ npm install
```

This will read the `dependencies` (empty by default) and the `devDependencies`
(which contains our build requirements) from `package.json` and install
everything needed into a folder called `node_modules/`.

There are many Bower packages used by `PhoneCat App`, like Twitter Bootstrap
and Angular, which are listed in `bower.js`. To install them into the
`bower_components/` directory, simply run:

```sh
$ bower install
```

In the future, should you want to add a new Bower package to your app, run the
`install` command:

```sh
$ bower install packagename --save-dev
```

The `--save-dev` flag tells Bower to add the package at its current version to
our project's `bower.js` file so should another developer download our
application (or we download it from a different computer), we can simply run the
`bower install` command as above and all our dependencies will be installed for
us. Neat!

Technically, `PhoneCat App` is now ready to go.

Cleaning:
Now when you run the command:

```sh
$ gulp clean
```

the folder build will be deleted.
But I can not figure out how to fix one bug.
When the gulp builds a folder 'build/img' it do not transfer files in which are '0' before a type of img(I mean before '.jpg').
As a result, I must to copy this folder manually.

To ensure your setup works, launch gulp(A default task that will run our entire assembly):

```sh
$ gulp
```