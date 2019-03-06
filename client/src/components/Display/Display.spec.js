import React from 'react';
import { render, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';
import Display from './Display';

describe('Display', () => {
    afterEach(cleanup);
    it('renders without crashing', () => {
        render(<Display />);
    });

    it('displays the number of balls and strikes', () => {
        const { getByTestId } = render(<Display strikes={0} balls={0} />);

        const strikeCount = getByTestId("strikes");
        const ballCount = getByTestId("balls");

        expect(strikeCount.textContent).toBe("0");
        expect(ballCount.textContent).toBe("0");
    })
})