import renderer from 'react-test-renderer';
import { test, expect, vi } from 'vitest';
import NavBar from './NavBar.jsx';

test('The NavBar component should render', () => {
  const view = renderer
      .create(<NavBar />)
      .toJSON();
  expect(view).toMatchSnapshot();
});

test('The NavBar component should render with a title', () => {
  const title = 'Test application';
  const component = renderer
      .create(<NavBar title={title} />)
      .toJSON();
  expect(component).toMatchSnapshot();
});

test('The NavBar component should respond to button clicks', () => {
  const mockFunction = vi.fn();
  const component = renderer
      .create(<NavBar goBack={mockFunction} openForm={mockFunction} />);

  component.root.findByProps({ children: '< Go Back' }).props.onClick();
  expect(mockFunction).toHaveBeenCalled();

  component.root.findByProps({ children: '+ Add Review' }).props.onClick();
  expect(mockFunction).toHaveBeenCalledTimes(2);
});
