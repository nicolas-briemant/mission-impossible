import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import App from '../../App';
import missions from '../../data/missions2';
import workers from '../../data/workers';
import companies from '../../data/companies';
import reducer from '../../reducers';
import { arrayToObjectWithId } from '../';

const initialState = {
  missions,
  workers: arrayToObjectWithId(workers),
  companies: arrayToObjectWithId(companies),
  people: [],
  blockedAction: undefined,
  showAlert: false,
  sortNameBool: undefined,
  sortAddendaBool: undefined,
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
