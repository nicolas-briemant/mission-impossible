import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from '../App';
import missions from '../data/missions2';
import reducer from '../reducers';
import { createStore } from '../store';

const initialState = {
  missions,
  people: [],
};

const store = createStore(reducer, initialState);

describe('App', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App store={store} />, div);
  });

  it('should match snapshot', () => {
    const wrapper = shallow(<App store={store} />);
    expect(wrapper).toMatchSnapshot();
  });
});
