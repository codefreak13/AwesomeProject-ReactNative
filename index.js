/**
 * @format
 */

import { AppRegistry } from "react-native";
import MyApp from "./MyApp";
import { name as appName } from "./app.json";
import AppContainer from "./AppContainer";

AppRegistry.registerComponent(appName, () => AppContainer);
