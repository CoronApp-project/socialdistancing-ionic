# Social Distancing

Ionic Web app to increase awareness of Social Distancing in an easy manner.
Make it more "tangible" and "visual".

Gamification solution to promote Social Distancing.

# Table of contents

- [Installations](#installations)
  - [Clone the project](#clone-the-project)
  - [Install the Ionic CLI](#Install-the-Ionic-CLI)
  - [Install the http-server package](#Install-the-http-server-package)
  - [Install and set up ngrok](#install-and-set-up-ngrok)
- [Local development environment for desktop](#local-development-environment-for-desktop)
  - [Ionic production build](#ionic-production-build)
  - [Run the local production server](#run-the-local-production-server)
  - [Empty browser cache](#empty-browser-cache)
- [Local development environment for mobile](#local-development-environment-for-mobile)
  - [Run ngrok](#run-ngrok)

# Installations

## Clone the project

Clone the project into the desired directory:

```
git clone https://github.com/guillermomartinez-accenture/socialdistancing-ionic.git
```

Then navigate into the directory of the cloned project using a terminal and install the dependencies:

```
npm install
```

## Install the Ionic CLI

To install the Ionic CLI globally, run the following command in a terminal:

```
npm install -g @ionic/cli native-run cordova-res
```

This will be used to add Cordova/Capacitor plugins and generate web pages, among other things.

## Install the http-server package

Run the following command line in a terminal to install http-server globally:

```
npm install http-server -g
```

This will be used to create a separate HTTP server to test our code locally, because the service workers that are required for this PWA do not work with ionic serve

## Install and set up ngrok

Sign up for ngrok or login using an existing Github or Google account:
https://dashboard.ngrok.com/signup

Follow the set up & installation steps on the get-started page to set up ngrok locally. Ngrok will be used to create a https tunnel which will enable you to test the PWA on a mobile device.

**_Alternatively, follow these steps to set up ngrok on OSX:_**

```
brew cask install ngrok
```

```
ngrok authtoken <your-auth-token>
```

# Local development environment for desktop

Follow these steps to set up the local development environment for desktop browsers.

**_These steps have to be done after changing making changes in order to properly test the effects of these changes._**

## Ionic production build

Run the following command line in the project root directory to build the PWA

```
ionic build –prod
```

This will generate the **_www_** folder which contains the production build of the PWA

## Run the local production server

Use the previously [installed http-server package](#Install-the-http-server-package) to run the local production server by running the following command line in the root directory of the project:

```
http-server -c-1 ./www
```

The output should look something like the in image below:

![Image of http-server command line to start up development server](https://user-images.githubusercontent.com/58298921/77488971-1737a200-6e37-11ea-938c-48198e70a43d.png)

Navigate to the top URL in your browser to test the PWA. If the project does not properly reflect the changes made then you might have to [empty your browser's cache](#empty-browser-cache)

**_Alternatively you can also use the following command line in the project's root directory to run the above two steps successively:_**

```
npm run-script buildServer
```

## Empty browser cache

During development, your browser might cache your code and assets which can cause problems while testing changes after rebuilding the PWA.

To resolve this issue, with your chrome dev tools opened up, right click your browsers refresh button and then click on ‘Empty Cache and Hard Reload’ as seen in the image below:

![Image showing how to Refresh Cache and Hard Reload chrome browser](https://user-images.githubusercontent.com/58298921/77489747-5d8e0080-6e39-11ea-9460-2d2aefbdbe3d.png)

# Local development environment for mobile

To test the PWA on a mobile device, you have to [build the application](#ionic-production-build) and [run the local production server](#run-the-local-production-server) as you would in the browser steps. However, to be able to use the web services on your mobile device, you will need to use the [prevously installed ngrok tool](#install-and-set-up-ngrok) to provide a https-secured tunnel.

## Run ngrok

After [building the application](#ionic-production-build) and [running the local production server](#run-the-local-production-server), run the following command line:

```
ngrok http <local-server-port-number>
```

In the case of this example the port number would be 8080. After running this command line you should see the following output in your terminal, with unique forwarding url's:

![ngrok output after running the ngrok http command line](https://user-images.githubusercontent.com/58298921/77493669-02add680-6e44-11ea-9cfa-aeb7563807b6.png)

To properly test the application, you should take the last fowarwding url that starts with 'https' and open it in your mobile browser. The url's that are generated, expire as soon as you quit running ngrok in your terminal.
