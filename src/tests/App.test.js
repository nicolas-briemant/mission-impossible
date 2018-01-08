import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from '../App';
import missions from '../data/missions2';

const data = {
  missions,
};

describe('App', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App {...data} />, div);
  });

  it('should match snapshot', () => {
    const wrapper = shallow(<App {...data} />);
    expect(wrapper).toMatchSnapshot();
  });
});
