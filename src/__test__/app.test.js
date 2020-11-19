import React from 'react';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import Button from '../components/Button';
import Display from '../components/Display';
import ButtonPanel from '../components/ButtonPanel';
import Nav from '../components/Nav';
import operate from '../logic/operate';

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

it('contains 19 buttons links', () => {
  const wrapper = shallow(<ButtonPanel clickHandler={jest.fn()} />).find(Button).length;
  expect(wrapper).toBe(19);
});

it('returns the addition of two nums', () => {
  const result = operate(4, 5, '+');
  expect(result).toEqual('9');
});
