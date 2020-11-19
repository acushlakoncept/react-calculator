import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../components/Button';
import Display from '../components/Display';
import operate from '../logic/operate';

it('renders button correctly', () => {
  const tree = renderer.create(<Button name="AC" clickHandler={jest.fn()} />);
  expect(tree).toMatchSnapshot();
});

it('renders display correctly', () => {
  const tree = renderer.create(<Display result="0" next="" />);
  expect(tree).toMatchSnapshot();
});
