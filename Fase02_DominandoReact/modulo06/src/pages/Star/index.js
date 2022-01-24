import React from 'react';

import { WebView } from 'react-native-webview';
const Star = ({ route }) => {
    const rep = route.params.star;
    return <WebView style={{ flex: 1 }} source={{ uri: rep.html_url }} />;
};

export default Star;
