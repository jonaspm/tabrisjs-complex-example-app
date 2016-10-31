# tabrisjs-complex-example-app #

## Features ##
This example app includes the following features:
-    Multi-language (i18n)
-    Multiple pages
-    Maps support via tabris-plugin-maps
-    Floating action button (using tabris.ImageView)

## Important ##
For this example app to work, you need a Google Maps API Key then replace **YOUR_API_KEY_HERE** inside **config.xml**

### Trouble ###
If you have trouble while running the app, it might be because of missing dependencies...

Use the cloud build service from Tabrisjs.com or do a local build (follow the build instructions available here: [TabrisJS Local Build](https://tabrisjs.com/documentation/latest/local-build)).

## Run ##
To run this example app you have to do:
```
npm install http-server -g
cd www
```
Next we have to install all dependencies by doing:
```
npm install
```
Finally just execute the server:
```
hs
```
To try the app in your device, you have install the Tabris.js Developer App available at Google's Play Store and Apple's App Store.
