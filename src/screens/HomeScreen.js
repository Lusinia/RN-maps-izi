import MapboxGL from '@mapbox/react-native-mapbox-gl';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import config from '../../config';
import { connect } from 'react-redux';

import {
  ShowMap,
  SetUserTrackingModes,
  FlyTo,
  PointInMapView,
  DataDrivenCircleColors,
  IndoorBuilding,
  CustomVectorSource,
  ChoroplethLayerByZoomLevel,
  GeoJSONSource,
  FitBounds,
  SetPitch,
  SetBearing,
  QueryWithRect,
  QueryAtPoint,
  DriveTheLine
} from '../components/index';
import { bindActionCreators } from 'redux';

import colors from '../styles/colors';
import sheet from '../styles/sheet';
import { IS_ANDROID } from '../utils/index';

import * as actions from '../redux/actions';

MapboxGL.setAccessToken(config.mapBoxKey);

type Props = {};

class HomeScreen extends Component<Props> {
  static navigationOptions = {
    header: null
  };

  state = {
    isAndroidPermissionGranted: '',
    isFetchingAndroidPermission: true
  };

  async componentDidMount() {
    if (IS_ANDROID) {
      const isGranted = await MapboxGL.requestAndroidLocationPermissions();
      this.setState({
        isAndroidPermissionGranted: isGranted,
        isFetchingAndroidPermission: false,
      });
    }

    setTimeout(() => {
      this.props.actions.dummyAction().then(res => {
        console.log('res', res);
      })
      
    }, 3000);
  }

  render() {
    if (IS_ANDROID && !this.state.isAndroidPermissionGranted) {
      if (this.state.isFetchingAndroidPermission) {
        return null;
      }
      return (
        <View style={sheet.matchParent}>
          <Text style={styles.noPermissionsText}>
            You need to accept location permissions in order to use this example
            applications
          </Text>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        {/*<ShowMap label="Show Map"/>*/}
        {/*<SetUserTrackingModes  label="Show Map" />*/}
        {/*<FlyTo label="Show Map"/>*/}
        {/*<PointInMapView label="Show Map"/>*/}
        {/*<DataDrivenCircleColors label="Show Map"/>*/}
        {/*<IndoorBuilding label="Show Map"/>*/}
        {/*<CustomVectorSource label="Show Map"/>*/}
        {/*<ChoroplethLayerByZoomLevel label="Show Map"/>*/}
        {/*<GeoJSONSource label="Show Map"/>*/}
        {/*<FitBounds label="Show Map"/>*/}
        {/*<SetPitch label="Show Map"/>*/}
        {/*<SetBearing label="Show Map"/>*/}
        {/*<QueryWithRect l`abel="Show Map"/>*/}
        {/*<QueryAtPoint label="Show Map"/>*/}
        <DriveTheLine label="Show Map"/>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  state
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },

  noPermissionsText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  header: {
    marginTop: 48,
    fontSize: 24,
    textAlign: 'center',
  },
  exampleList: {
    flex: 1,
    marginTop: 60 + 12, // header + list padding,
  },
  exampleListItemBorder: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#ccc',
  },
  exampleListItem: {
    paddingVertical: 32,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  exampleListLabel: {
    fontSize: 18,
  },
  exampleBackground: {
    flex: 1,
    backgroundColor: colors.primary.pinkFaint,
  },
});
