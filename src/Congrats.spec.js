import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';

import { findByTestAttr, checkProps } from './test/testUtils';
import Congrats from './Congrats';

Enzyme.configure({ adapter: new EnzymeAdapter() })

const setup = (props={}) => {
  // const setupProps = { ...defaultProps };
  return shallow(<Congrats {...props}/>);
}

it('render without error', () => {
  const wrapper = setup({success: true});
  const component = findByTestAttr(wrapper, 'component-congrats');
  expect(component.length).toBe(1);
});

it('render no text when success props is false', () => {
  const wrapper = setup({success: false});
  const component = findByTestAttr(wrapper, 'component-congrats');
  expect(component.text()).toBe('');
});

it('render no-empty congrats message when success prop is true', () => {
  const wrapper = setup({success: true});
  const component = findByTestAttr(wrapper, 'congrats-message');
  expect(component.text().length).not.toBe(0);
});

it('does not throw warning with expected props', () => {
  const expectedProps = { success: false };
  checkProps(Congrats, expectedProps);
});

