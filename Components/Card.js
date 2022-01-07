import React, {useState} from 'react';
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import styles from '../Styles/Styles';
import moment from 'moment';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Card = ({
  title,
  image,
  sourceName,
  publishDate,
  author,
  description,
  content,
  index,
  addItem,
  newsCategory,
}) => {
  const [saved, setSaved] = useState(false);

  const savedNews = () => {
    if (saved === false) {
      setSaved(true);
      addItem(
        title,
        image,
        sourceName,
        publishDate,
        author,
        description,
        content,
      );
    } else {
      setSaved(false);
    }
  };
  return (
    <View
      style={[
        styles.mt20,
        styles.bgWhite,
        styles.mx10,
        styles.br20,
        styles.elevation5,
      ]}>
      <ImageBackground
        imageStyle={[styles.br10]}
        style={{width: 340, height: 200}}
        source={{uri: image}}>
        <View style={[{flexGrow: 1}, styles.justifyContentSpaceBetween]}>
          <View
            style={[
              styles.flexDirectionRow,
              styles.justifyContentSpaceBetween,
              styles.m10,
            ]}>
            <TouchableOpacity
              style={[
                {backgroundColor: '#ef3f49'},
                {width: 50, height: 30},
                styles.flexCenter,
                styles.br5,
                styles.elevation5,
              ]}>
              <Text style={[styles.white, styles.fs16]}>{newsCategory}</Text>
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
          <View
            style={[{backgroundColor: '#00000060'}, styles.br10, styles.px10]}>
            <Text style={[{color: '#e9ecef'}, styles.fs20]}>{title}</Text>
            <View style={[styles.flexDirectionRow]}>
              <MaterialIcons name="date-range" size={12} color="#adb5bd" />
              <Text
                style={[
                  {color: '#adb5bd'},
                  styles.ml5,
                  styles.pb10,
                  styles.fs12,
                ]}>
                {moment(publishDate)
                  .utcOffset('+05: 00')
                  .format('hh:mm a d/MMM/YY')}
              </Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Card;
