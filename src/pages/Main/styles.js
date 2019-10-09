import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Styles = StyleSheet.create({
  content: {
    flex: 1,
    maxHeight: 400,
    zIndex: 5,
  },
  Container: {
    flex: 1,
    backgroundColor: "#8B10AE",
    paddingTop: getStatusBarHeight(),
    justifyContent: "center",
  }

});
