# Ionic Vue Template

## Prerequisites

1. Install Ionic if you do not already have it installed. Run `npm install -g @ionic/cli` in terminal

## Running the app

Open the directory to the application in terminal then:

1. Run `npm i` in terminal
2. Run `ionic serve` in terminal

## Include Firebase in iOS/Android Builds
For iOS/Android:

- Android: Place google-services.json in the android/app directory.
- iOS: Place GoogleService-Info.plist in the root of your Xcode project.

Install the Cordova plugin for Firebase if you're using any Firebase feature that requires native support: `ionic cap sync`