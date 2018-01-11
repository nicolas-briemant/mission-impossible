import React from 'react';
import { shallow, mount } from 'enzyme';
import { Header, HeaderLeft, HeaderRight } from '../../components/header';

describe('app | component | header', () => {
  describe('render', () => {
    test('should match snapshot', () => {
      const wrapper = shallow(<Header />);
      expect(wrapper).toMatchSnapshot();
    });
    test('should match snapshot with children', () => {
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
      expect(wrapper).toMatchSnapshot();
      expect(wrapper.find(HeaderLeft)).toHaveLength(1);
    });
  });
});
