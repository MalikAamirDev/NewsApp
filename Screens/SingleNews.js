import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  Button,
} from 'react-native';
import styles from '../Styles/Styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import moment from 'moment';

const SingleNews = ({route, navigation}) => {
  const {
    title,
    image,
    publishDate,
    author,
    description,
    content,
    postUrl,
    saved,
    setSaved,
  } = route.params;
  const savedNews = () => {
    if (saved === false) {
      setSaved(true);
      addItem(title, image, sourceName);
    } else {
      setSaved(false);
    }
  };

  return (
    <>
      <View style={[styles.flex1]}>
        <View
          style={[
            styles.flex1,
            {width: '100%', height: '100%'},
            styles.elevation5,
          ]}>
          <ImageBackground
            imageStyle={[
              {width: '100%', height: 240},
              styles.borderBottomLeftRadius,
              styles.borderBottomRightRadius,
            ]}
            resizeMode="cover"
            style={[styles.elevation5]}
            source={{uri: image}}>
            <View
              style={[
                styles.flexDirectionRow,
                styles.justifyContentSpaceBetween,
                styles.p20,
              ]}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <View style={styles.backIcon}>
                  <MaterialIcons
                    style={styles.arrowIcon}
                    name="keyboard-arrow-left"
                    size={24}
                    color="#cdcdcd"
                  />
                </View>
              </TouchableOpacity>
              {saved ? (
                <TouchableOpacity onPress={savedNews} style={[styles.backIcon]}>
                  <MaterialIcons
                    style={styles.arrowIcon}
                    name="bookmark-outline"
                    size={24}
                    color="#cdcdcd"
                  />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={savedNews}
                  style={[styles.transparentIcon]}>
                  <MaterialIcons
                    style={styles.arrowIcon}
                    name="bookmark-outline"
                    size={24}
                    color="#cdcdcd"
                  />
                </TouchableOpacity>
              )}
            </View>
          </ImageBackground>
        </View>
        <ScrollView style={[{marginTop: 240}]}>
          <View style={[styles.flex5, styles.p20]}>
            <View>
              <Text style={[styles.fs16, styles.mb10, styles.lightBlack]}>
                {author}
              </Text>
            </View>
            <Text
              style={[styles.fs30, styles.fontWeightBold, {color: '#323232'}]}>
              {title}
            </Text>
            <Text
              style={[
                {color: '#adb5bd'},
                styles.fontWeightBold,
                styles.mt20,
                styles.fs14,
                styles.ml5,
                styles.pb10,
              ]}>
              {moment(publishDate)
                .utcOffset('+05: 00')
                .format('hh:mm a d MMM, YY')}
            </Text>
            <Text
              style={[
                styles.darkGrey,
                styles.mt20,
                styles.fs18,
                styles.ml5,
                styles.pb10,
              ]}>
              {description}
            </Text>
            <Text
              style={[
                styles.darkGrey,
                styles.mt20,
                styles.fs18,
                styles.ml5,
                styles.pb10,
              ]}>
              {content}
            </Text>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default SingleNews;
