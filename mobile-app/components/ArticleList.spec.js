import React from 'react';
import { shallow } from 'enzyme';
import { FlatList, Text } from 'react-native';
import ArticleList from './ArticleList';
import articles from '../mock-data';

describe('ArticleList', () => {
  describe('when articles is not empty', () => {
    it('renders FlatList', () => {
      const wrapper = shallow(<ArticleList articles={articles} />);
      expect(wrapper.find(FlatList)).toHaveLength(1);
      expect(wrapper.find(FlatList).props().data).toEqual(articles);
    });
  });

  describe('when articles is empty', () => {
    it('renders "Aucun article"', () => {
      const wrapper = shallow(<ArticleList articles={[]} />);
      expect(
        wrapper
          .find(Text)
          .dive()
          .text()
      ).toEqual('Aucun article');
    });
  });
});
