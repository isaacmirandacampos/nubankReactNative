import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8B10AE",
    paddingTop: getStatusBarHeight(),
    justifyContent: "center",
  },
  content: {
    flex: 1,
    maxHeight: 400,
    zIndex: 5,
  },

});
