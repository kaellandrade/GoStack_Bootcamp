import { Dimensions } from 'react-native';

export default (widthCoponent) =>
    Math.floor(Dimensions.get('screen').width / widthCoponent);
