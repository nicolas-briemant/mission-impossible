import React from 'react';
import { shallow, mount } from 'enzyme';
import { HeaderFull as Header, HeaderLeft, HeaderRight } from '../header/header';

describe('app | component | header', () => {
  describe('render', () => {
    test('should match snapshot', () => {
      const wrapper = shallow(<Header />);
      expect(wrapper).toMatchSnapshot();
    });
    test('should match snapshot with children left', () => {
      const root = (
        <Header>
          <HeaderLeft>
            <span>Left</span>
          </HeaderLeft>
          <HeaderRight>
            <span>Right</span>
          </HeaderRight>
        </Header>
      );
      const wrapper = mount(root);
      expect(wrapper.find(HeaderLeft)).toHaveLength(1);
    });
    test('should match snapshot with children right', () => {
      const root = (
        <Header>
          <HeaderLeft>
            <span>Left</span>
          </HeaderLeft>
          <HeaderRight>
            <span>Right</span>
          </HeaderRight>
        </Header>
      );
      const wrapper = mount(root);
      expect(wrapper.find(HeaderRight)).toHaveLength(1);
    });
    test('should match snapshot with children left content', () => {
      const root = (
        <Header>
          <HeaderLeft>
            <span>Left</span>
          </HeaderLeft>
          <HeaderRight>
            <span>Right</span>
          </HeaderRight>
        </Header>
      );
      const wrapper = mount(root);
      expect(wrapper.find(HeaderLeft).contains(<span>Left</span>)).toEqual(true);
    });
    test('should match snapshot with children right content', () => {
      const root = (
        <Header>
          <HeaderLeft>
            <span>Left</span>
          </HeaderLeft>
          <HeaderRight>
            <span>Right</span>
          </HeaderRight>
        </Header>
      );
      const wrapper = mount(root);
      expect(wrapper.find(HeaderRight).contains(<span>Right</span>)).toEqual(true);
    });
  });
});
