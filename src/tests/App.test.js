import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from '../App';
import missions from '../data/missions2';
import reducer from '../reducers';
import Provider from '../provider';
import { createStore } from '../store';

describe('App', () => {
  const store = createStore(reducer, { missions, people: [] });

  it('should render without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>,
      div
    )
  });

  it('should match snapshot', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
})
