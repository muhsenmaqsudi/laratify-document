# Installation

#### Release Notes

Latest stable version: 0.1.0-alpha

Detailed release notes for each version are available on [GitHub](https://github.com/muhsenmaqsudi/laratify/releases) .

## Installing Package

First `cd` into your fresh Laravel >= 7.0 installation or your existing Laravel >= 7.0 app and then install this package via the command bellow.

```
composer require muhsenmaqsudi/laratify
```

**Note: Laravel will automatically discover this package. No need to register the service provider.**

## Package Commands

### UI Presets

At this phase of the package we will be using TailwindCSS as our main UI Preset, but i have plans for adding other UI Presets in the future versions.

### TailwindCSS Preset with AlpineJS

#### without Authentication scaffolding

```
php artisan laratify:ui
```

#### with Authentication scaffolding

```
php artisan laratify:ui --auth
```

### Installing Preset Packages

For installing **TailwindCSS**, **AlpineJS** and other packages that the preset installing command added to your app `package.json` and compiling them run this command.

```
npm install && npm run dev
```

## Package Assets

For publishing the package assets, like `config` or `views` file you can use these commands.

```
php artisan vendor:publish --tag="laratify-config"
php artisan vendor:publish --tag="laratify-views"
```
