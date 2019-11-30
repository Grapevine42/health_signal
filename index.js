/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

console.disableYellowBox = true;


import AppNavigator from './config/routes'



AppRegistry.registerComponent(appName, () => AppNavigator);
