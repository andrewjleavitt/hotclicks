import {render, screen} from '@testing-library/react';
import Game from './Game'

let container = null;
beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
})

test('game starts with 0 clicks', () => {
    render(<Game/>);
    const clicksElement = screen.getByText(/clicks: 0/i);
    expect(clicksElement).toBeInTheDocument()
});

test('game starts with 100 money', () => {
    render(<Game/>);
    const clicksElement = screen.getByText(/money: 100.00/i);
    expect(clicksElement).toBeInTheDocument()
});

test('clicks increment', () => {
    render(<Game/>);
    const button = screen.getByTitle('clicker');
    button.click()
    expect(screen.getByText(/clicks: 1/i)).toBeInTheDocument()
});

test('making a click costs a dollar', () => {
    render(<Game/>);
    const button = screen.getByTitle('clicker');
    button.click()
    expect(screen.getByText(/money: 99.00/i)).toBeInTheDocument()
});

test('you need wire to make a click', () => {

})