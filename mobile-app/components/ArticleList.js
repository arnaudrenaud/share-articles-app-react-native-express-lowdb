import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, FlatList } from 'react-native';

const styles = StyleSheet.create({
  flatListContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const ArticleList = ({ articles }) =>
  articles.length ? (
    <View style={styles.flatListContainer}>
      <FlatList
        keyExtractor={item => item.url}
        data={articles}
        renderItem={({ item }) => <Text>{item.title}</Text>}
      />
    </View>
  ) : (
    <Text>Aucun article</Text>
  );

ArticleList.propTypes = {
  articles: PropTypes.array.isRequired,
};

export default ArticleList;
