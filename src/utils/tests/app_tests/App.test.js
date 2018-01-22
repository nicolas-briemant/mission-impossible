import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from '../../../App';
import missions from '../../../data/missions2';
import companies from '../../../data/companies';
import workers from '../../../data/workers';
import reducer from '../../../reducers';

const initialState = {
  missions,
  companies,
  workers,
  order: { type: undefined, direction: undefined },
  filterMissions: { type: undefined },
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
