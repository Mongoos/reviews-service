import React from 'react';
import axios from 'axios';
import Enzyme, { shallow, mount, render } from 'enzyme';
import renderer from 'react-test-renderer';
import App from './client/app.jsx';
import regeneratorRuntime from "regenerator-runtime";
import Adapter from 'enzyme-adapter-react-15';
Enzyme.configure({ adapter: new Adapter() })
jest.mock('axios');

describe('Module', () => {
  it('Module renders to page', () => {
    const component = renderer.create(<App></App>);
    let reviews = component.toJSON();
    expect(reviews).toMatchSnapshot();
  });

});

describe('Get html from GET request to localhost:3000/:id', () => {
  it('Should get api data', async () => {
    const getSpy = jest.spyOn(axios, 'get');
    const reviewInstance = renderer.create(<App></App>);
    expect(getSpy).toHaveBeenCalled();
    getSpy.mockReset();
    getSpy.mockRestore();
  });
});
