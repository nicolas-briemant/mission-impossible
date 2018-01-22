import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import App from '../app';
import missions from '../../../data/missions2';
import companies from '../../../data/companies';
import workers from '../../../data/workers';
import reducer from '../../../reducers';
import { firewall, logger } from '../../../middlewares';
import { arrayToObject } from '../../../utils/lib';

const initialState = {
  missions,
  workers: arrayToObject(workers),
  companies: arrayToObject(companies),
  selectedMissions: {},
  alert: '',
  sort: {
    type: '',
    direction: true,
  },
};

const store = createStore(reducer, initialState, applyMiddleware(firewall, logger));

describe('app', () => {
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
