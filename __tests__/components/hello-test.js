import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Hello from '../../src/components/hello';


describe('<Hello />', () => {

  let testHello;

  test('snapshot of Hello', () => {
    testHello = renderer.create(<Hello />).toJSON();
    expect(testHello).toMatchSnapshot();
  });

  test('render Hello', () => {
    testHello = shallow(<Hello />);
    expect(testHello.find('h1').text()).toEqual('Hello, world!');
  });

})
