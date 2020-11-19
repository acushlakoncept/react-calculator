import React from 'react';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import Button from '../components/Button';
import Display from '../components/Display';
import Nav from '../components/Nav';

configure({ adapter: new Adapter() });
it('renders button correctly', () => {
  const tree = renderer.create(<Button name="AC" clickHandler={jest.fn()} />);
  expect(tree).toMatchSnapshot();
});

it('renders display correctly', () => {
  const tree = renderer.create(<Display result="0" next="" />);
  expect(tree).toMatchSnapshot();
});

it('contains 3 nav links', () => {
  const links = shallow(<Nav />).find('li').length;
  expect(links).toBe(3);
});
