import React from 'react';
import { shallow, mount } from 'enzyme';
import { Header, HeaderLeft, HeaderRight } from '../header';

describe('app|component|header', () => {
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
      //  console.log(wrapper.debug());
      //expect(wrapper).toMatchSnapshot();
      expect(wrapper.find(HeaderLeft)).toHaveLength(1);
      expect(wrapper.find(HeaderRight)).toHaveLength(1);
      expect(
        wrapper.containsMatchingElement(
          <HeaderRight>
            <span>Right</span>
          </HeaderRight>,
        ),
      ).toEqual(true);
    });
  });
});
