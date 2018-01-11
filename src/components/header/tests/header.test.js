import React from 'react';
import { shallow, mount } from 'enzyme';
import { Header, HeaderLeft, HeaderRight } from '..';

describe('src | components | header', () => {
  describe('render', () => {
    test('should match snapchot', () => {
      const wrapper = shallow(<Header />);
      expect(wrapper).toMatchSnapshot();
    });

    test('should match snapchot with children', () => {
      const root = (
        <Header>
          <HeaderLeft>left</HeaderLeft>
          <HeaderRight>right</HeaderRight>
        </Header>
      );
      const wrapper = mount(root);
      expect(wrapper.find(HeaderLeft)).toHaveLength(1);
    });

    test('should match snapchot with children text', () => {
      const root = (
        <Header>
          <HeaderLeft>
            <span>left</span>
          </HeaderLeft>
          <HeaderRight>
            <span>right</span>
          </HeaderRight>
        </Header>
      );
      const wrapper = mount(root);
      expect(wrapper.containsAllMatchingElements([<span>left</span>, <span>right</span>])).toEqual(true);
    });
  });
});
