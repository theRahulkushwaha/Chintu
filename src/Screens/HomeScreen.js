import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import HomeScreenStyle from '../Styles/HomeScreenStyle';

const HomeScreen = () => {
  return (
    <View style={HomeScreenStyle.Container}>
      {/* ===========================HEADER================================================== */}
      <View style={HomeScreenStyle.Headers}>
        <Text style={HomeScreenStyle.HeaderText}>Welcome to Chintu</Text>
        <TouchableOpacity style={HomeScreenStyle.Headervoice}>
          <Image
            style={HomeScreenStyle.Icon}
            source={require('../Assets/voice.png')}
          />
        </TouchableOpacity>
      </View>

      {/* =========================Body======================================================== */}
      <View style={HomeScreenStyle.Body}>
        <TouchableOpacity style={HomeScreenStyle.BodyItems}>
          <View style={HomeScreenStyle.BodyItemsImage}>
            <Image
              style={HomeScreenStyle.Icon}
              source={require('../Assets/camera.png')}
            />
          </View>
          <Text style={HomeScreenStyle.BodyItemsText}>Object detection</Text>
        </TouchableOpacity>
        <TouchableOpacity style={HomeScreenStyle.BodyItems}>
          <View style={HomeScreenStyle.BodyItemsImage}>
            <Image
              style={HomeScreenStyle.Icon}
              source={require('../Assets/Documents.png')}
            />
          </View>
          <Text style={HomeScreenStyle.BodyItemsText}>Document Reading</Text>
        </TouchableOpacity>
        <TouchableOpacity style={HomeScreenStyle.BodyItems}>
          <View style={HomeScreenStyle.BodyItemsImage}>
            <Image
              style={HomeScreenStyle.Icon}
              source={require('../Assets/Human.png')}
            />
          </View>
          <Text style={HomeScreenStyle.BodyItemsText}>Facial Recognition</Text>
        </TouchableOpacity>
      </View>

      {/*========================= Footer======================================================= */}
      <View style={HomeScreenStyle.Footer}>
        <TouchableOpacity style={HomeScreenStyle.FooterIcon}>
          <Image
            style={HomeScreenStyle.Icon}
            source={require('../Assets/home.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity style={HomeScreenStyle.FooterIcon}>
          <Image
            style={HomeScreenStyle.Icon}
            source={require('../Assets/setting.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
