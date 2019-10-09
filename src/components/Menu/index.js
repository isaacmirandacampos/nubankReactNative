import React from 'react';
import QRCode from 'react-native-qrcode';

import { View } from 'react-native';


export default function Menu() {

  return (
    <View>
      <View>
        <QRCode
          value="https://github.com/isaacmirandacampos"
          size={80}
          bgColor="#FFF"
          fgColor="#8B10AE"
        />
      </View>
    </View>

  );
};
