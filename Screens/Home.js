import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, ScrollView, FlatList} from 'react-native';
// import NewsList from '../Components/NewsList';
import styles from '../Styles/Styles';
import Feather from 'react-native-vector-icons/Feather';
// import Ionicons from 'react-native-vector-icons/Ionicons';
import Card from '../Components/Card';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Home = ({navigation}) => {
  const [teslaNews, setTeslaNews] = useState([]);
  const [saveNews, setSaveNews] = useState([]);
  // console.log(obj);
  const Add = (
    title,
    image,
    sourceName,
    publishDate,
    author,
    description,
    content,
  ) => {
    let obj = {
      title,
      image,
      sourceName,
      publishDate,
      author,
      description,
      content,
    };
    saveNews.push(obj);
    AsyncStorage.setItem('savedNews', JSON.stringify(saveNews))
      .then(() => {
        console.log('Save to AsyncStorage😒😒', saveNews);
      })
      .catch(err => console.log(err));
  };

  const apiHandle = axios.create({
    baseURL:
      'https://newsapi.org/v2/everything?q=tesla&apiKey=aa3702b96b5f43c9ad3e92e3c7b61ee3',
  });
  const getData = () => {
    apiHandle.get('').then(e => {
      setTeslaNews(e.data.articles);
    });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={[styles.flex1, {backgroundColor: '#f9f9f9'}]}>
      <View
        style={[
          styles.flex1,
          styles.px20,
          styles.pt20,
          styles.bgWhite,
          styles.borderBottomLeftRadius,
          styles.borderBottomRightRadius,
          styles.elevation5,
        ]}>
        <View
          style={[
            styles.flexDirectionRow,
            styles.alignItemsCenter,
            styles.justifyContentSpaceBetween,
            styles.mb10,
          ]}>
          <TouchableOpacity>
            <View>
              <Feather name="menu" size={24} color="#ef3f49" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Text
              style={[
                styles.black,
                styles.fs26,
                styles.fontWeightBold,
                styles.textUpperCase,
                styles.ls2,
              ]}>
              News
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('SavedNews')}>
            <MaterialCommunityIcons
              name="bookmark-multiple"
              size={24}
              color="#ef3f49"
            />
          </TouchableOpacity>
        </View>

        <View
          style={[
            styles.flexDirectionRow,
            styles.justifyContentCenter,
            styles.mt10,
          ]}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
            style={[
              {backgroundColor: '#ef3f4920'},
              styles.br10,
              styles.py10,
              styles.px20,
            ]}>
            <Text
              style={[{color: '#ef3f49'}, styles.fontWeightBold, styles.fs16]}>
              Tesla
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Apple')}
            style={[
              {backgroundColor: '#ef3f4920'},
              styles.br10,
              styles.p10,
              styles.mx10,
              styles.px20,
            ]}>
            <Text
              style={[{color: '#ef3f49'}, styles.fontWeightBold, styles.fs16]}>
              Apple
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Tech')}
            style={[
              {backgroundColor: '#ef3f4920'},
              styles.br10,
              styles.p10,
              styles.mx10,
              styles.px20,
            ]}>
            <Text
              style={[{color: '#ef3f49'}, styles.fontWeightBold, styles.fs16]}>
              Tech
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={[styles.flex5]}>
        <FlatList
          // horizontal={true}
          // keyExtractor={item => item.id}
          data={teslaNews}
          renderItem={({item, index}) => (
            <TouchableOpacity
              key={index}
              onPress={() =>
                navigation.navigate('SingleNews', {
                  title: item.title,
                  image: item.urlToImage,
                  publishDate: item.publishedAt,
                  author: item.author,
                  description: item.description,
                  content: item.content,
                  postUrl: item.url,
                  sourceName: item.source.name,
                })
              }
              activeOpacity={0.8}>
              <Card
                title={item.title}
                image={item.urlToImage}
                publishDate={item.publishedAt}
                sourceName={item.source.name}
                author={item.author}
                description={item.description}
                content={item.content}
                index={index}
                addItem={Add}
                newsCategory="Tesla"
              />
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

export default Home;
