import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';
import Dashboard from './Dashboard';
import Display from '../Display/Display';

describe('Dashboard', () => {
    it('updates strike count according to game rules', () => {
        const { getByText } = render(<Dashboard />);
        const { getByTestId } = render(<Display />);
    
        const strikeButton = getByText(/record strike/i);
        const strikeCount = getByTestId('strikes');
    
        expect(strikeCount.textContent).toBe("0");
        fireEvent.click(strikeButton);
        expect(strikeCount.textContent).toBe("1");
        fireEvent.click(strikeButton);
        expect(strikeCount.textContent).toBe("2");
        fireEvent.click(strikeButton);
        expect(strikeCount.textContent).toBe("0");
    });

    it('updates ball count according to game rules', () => {
        const { getByText } = render(<Dashboard />);
        const { getByTestId } = render(<Display />);
    
        const ballButton = getByText(/record ball/i);
        const ballCount = getByTestId('balls');
    
        expect(ballCount.textContent).toBe("0");
        fireEvent.click(ballButton);
        expect(ballCount.textContent).toBe("1");
        fireEvent.click(ballButton);
        expect(ballCount.textContent).toBe("2");
        fireEvent.click(ballButton);
        expect(ballCount.textContent).toBe("3");
        fireEvent.click(ballButton);
        expect(ballCount.textContent).toBe("0");
    });

    it('updates foul count according to game rules', () => {
        const { getByText } = render(<Dashboard />);
        const { getByTestId } = render(<Display />);
    
        const foulButton = getByText(/record foul/i);
        const foulCount = getByTestId('fouls');
    
        expect(foulCount.textContent).toBe("0");
        fireEvent.click(foulButton);
        expect(foulCount.textContent).toBe("1");
        fireEvent.click(foulButton);
        expect(foulCount.textContent).toBe("2");

    });
})