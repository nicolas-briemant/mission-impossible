import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { createStore } from 'redux';
import App from '../App';
import reducer from '../reducers/index';
import missions from '../data/missions2';
import workers from '../data/workers';
import companies from '../data/companies';
import Provider from '../provider';

describe('App', () => {
  const store = createStore(reducer, { missions, workers, companies });
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
