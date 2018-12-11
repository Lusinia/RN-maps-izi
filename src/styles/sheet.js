import { StyleSheet, Dimensions } from 'react-native';

let styles = {};
const {width} = Dimensions.get('window');

styles.matchParent = {
  flex: 1,
  width
};

export default StyleSheet.create(styles);
