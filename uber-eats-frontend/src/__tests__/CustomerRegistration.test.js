/* eslint-disable no-undef */
import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import {
  render, screen, fireEvent,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CustomerRegistration from '../components/SignUp/CustomerRegistration';

const server = setupServer(
  rest.post('http://18.225.37.132:3001/uber-eats/api/customer/register', (req, res, ctx) => res(ctx.json([{ EmailId: 'theabhishekg98@gmail.com' }]))),
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Restaurant Login Tests', () => {
  it('Users should be able to enter email id,password and name on the screen', async () => {
    render(<CustomerRegistration />);
    const email = screen.getByTestId('email').querySelector('input');
    const password = screen.getByTestId('password').querySelector('input');
    const name = screen.getByTestId('name').querySelector('input');

    fireEvent.change(email, { target: { value: 'theabhishekg98@gmail.com' } });
    fireEvent.change(password, { target: { value: 'password' } });
    fireEvent.change(name, { target: { value: 'theabhishekg98' } });

    expect(email.value).toBe('theabhishekg98@gmail.com');
    expect(password.value).toBe('password');
    expect(name.value).toBe('theabhishekg98');
  });

  it('Should render Login component', () => {
    render(<CustomerRegistration />);
    const customerLofinText = screen.getByText(/Customer Sign Up/i);
    expect(customerLofinText).toBeInTheDocument();
  });
});
