import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import AddCar from './components/AddCar';
import TestRenderer from 'react-test-renderer';

test('renders a snapshot', () => {
  const tree = TestRenderer.create(<AddCar/>).toJSON();
  expect(tree).toMatchSnapshot();
});

test('open add car modal form', async () => {
  render(<App />);
  fireEvent.click(screen.getByText('New Car'));
  expect(screen.getByRole('dialog')).toHaveTextContent('New car');
});

   
  