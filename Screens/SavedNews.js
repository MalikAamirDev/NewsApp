import React, {useLayoutEffect, useState} from 'react';
import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import styles from '../Styles/Styles';
import Feather from 'react-native-vector-icons/Feather';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useIsFocused} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const SavedNews = ({navigation}) => {
  const [saveNewsData, setSaveNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const isFocused = useIsFocused();

  const getSaveNews = () => {
    AsyncStorage.getItem('savedNews')
      .then(data => {
        if (data !== null) {
          let tempData = JSON.parse(data);
          setSaveNewsData(tempData);
          console.log(saveNewsData, 'SavedNewsData success 😍');
          setLoading(false);
        }
      })
      .catch(err => console.log(err));
  };

  const handleClearTodos = () => {
    AsyncStorage.setItem('savedNews', JSON.stringify([]))
      .then(() => {
        setSaveNewsData([]);
      })
      .catch(err => console.log(err));
  };
  const deleteTodo = i => {
    let tempList = [...saveNewsData];
    tempList.splice(i, 1);
    setSaveNewsData(tempList);
    AsyncStorage.setItem('storedTodos', JSON.stringify(tempList))
      .then(() => {})
      .catch(err => console.log(err));
  };

  useLayoutEffect(() => {
    getSaveNews();
  }, [isFocused]);
  return (
    <>
      <View style={[styles.flex1]}>
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
              styles.justifyContentSpaceBetween,
              styles.alignItemsCenter,
            ]}>
            <Text
              style={[
                styles.fs28,
                styles.mt20,
                styles.fontWeightBold,
                styles.lightBlack,
              ]}>
              Bookmarks
            </Text>
            <TouchableOpacity
              onPress={handleClearTodos}
              style={[
                {
                  width: 70,
                  height: 25,
                  backgroundColor: '#ef3f4920',
                },
                styles.flexCenter,
                styles.br20,
                styles.mt20,
              ]}>
              <Text style={[{color: '#ef4f49'}]}>clear all</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={[styles.flex5]}>
          {loading ? (
            <View>
              <Text>Loading....</Text>
            </View>
          ) : (
            <>
              <FlatList
                data={saveNewsData}
                renderItem={({item, index}) => (
                  <TouchableOpacity
                    key={index}
                    onPress={() =>
                      navigation.navigate('SingleNews', {
                        title: item.title,
                        image: item.image,
                        publishDate: item.publishedAt,
                        author: item.author,
                        description: item.description,
                        content: item.content,
                        postUrl: item.url,
                      })
                    }>
                    <View
                      style={[
                        styles.flexDirectionRow,
                        styles.bgWhite,
                        styles.br20,
                        styles.m10,
                      ]}>
                      <View>
                        <Image
                          style={[
                            {width: 150, height: 100, resizeMode: 'cover'},
                            styles.br10,
                          ]}
                          source={{uri: item.image}}
                        />
                      </View>
                      <View
                        style={[
                          styles.p5,
                          styles.ml10,
                          // styles.mt10,
                          styles.justifyContentSpaceBetween,
                        ]}>
                        <Text
                          style={[
                            {marginRight: 160},
                            styles.fs16,
                            styles.fontWeightBold,
                            styles.lightBlack,
                          ]}>
                          {item.title}
                        </Text>
                        <View style={[styles.flexDirectionRow]}>
                          <Text
                            style={[
                              styles.fs16,
                              styles.lightBlack,
                              styles.flexGrow1,
                            ]}>
                            by {item.sourceName}
                          </Text>
                          <TouchableOpacity
                            onPress={() => deleteTodo(index)}
                            style={[{marginRight: 160}]}>
                            <MaterialCommunityIcons
                              name="delete"
                              size={20}
                              color="grey"
                            />
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                )}
              />
            </>
          )}
        </View>
      </View>
    </>
  );
};

export default SavedNews;
