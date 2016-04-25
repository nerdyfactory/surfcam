# surfcam
React Native app showing live stream of surf waves in South Korea. Supports both iOS and Android.

This app uses following modules -
* [react-native-router-flux](https://github.com/aksonov/react-native-router-flux)
* [react-native-maps](https://github.com/lelandrichardson/react-native-maps)
* [react-native-videos](https://github.com/brentvatne/react-native-video)

## How to run

1. **Clone the repo**

  ```
  $ git clone https://github.com/nerdyfactory/surfcam.git
  $ cd surfcam
  ```
2. **Install dependencies**

  ```
  $ npm install
  ```

3. Update Google Maps API key in `android/app/src/main/AndroidManifest.xml`

4. Update live stream URIs in `src/locationData.json`

5. **Start the server**

  ```
  $ npm start
  ```
6. **Running on Android**:

  ```
  $ react-native run-android
  ```


7. **Running on iOS:**

  ```
  $ react-native run-ios
  ```

## License

This project is available under the MIT license.
