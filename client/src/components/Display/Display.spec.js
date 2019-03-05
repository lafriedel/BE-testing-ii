import React from 'react';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';
import Display from './Display';

it('displays count of strikes for at-bat', () => {
    const { getByTestId, rerender } = render(<Display strikes={0}/>);
    const strikes = getByTestId('strikes');
    expect(strikes.textContent).toBe("0");

    rerender(<Display strikes={1}/>);
    expect(strikes.textContent).toBe("1");

    rerender(<Display strikes={2}/>);
    expect(strikes.textContent).toBe("2");

    rerender(<Display strikes={3}/>);
    expect(strikes.textContent).toBe("3");
})

