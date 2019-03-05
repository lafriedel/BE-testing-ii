import React from 'react';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';
import Display from './Display';

it('displays count of strikes for at-bat', () => {
    const { getByText } = render(<Display />);

    const numbers = getByText(/[0123]/);

    expect(numbers).toBeInTheDocument();
})