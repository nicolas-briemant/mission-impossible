import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from '../App';
import missions from '../data/missions2';

describe('App', () => {
  const initialState = {
    missions,
  };

  it('should render without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<App {...initialState} />, div)
  })

  it('should match snapshot', () => {
    const wrapper = shallow(<App />)
    expect(wrapper).toMatchSnapshot()
  })
})
