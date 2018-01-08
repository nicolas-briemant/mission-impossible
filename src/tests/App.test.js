import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from '../App';
import missions from '../data/missions2';

describe('App', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App missions={missions} />, div);
  });

  it('should match snapshot', () => {
    const wrapper = shallow(<App missions={missions} />);
    expect(wrapper).toMatchSnapshot();
  });
});
