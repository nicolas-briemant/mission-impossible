import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from '../../../App';
import missions from '../../../data/missions2';
import reducer from '../../../reducers';

const initialState = {
  missions,
  people: [],
};

const store = createStore(reducer, initialState);

describe('App', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      div,
    );
  });

  it('should match snapshot', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
