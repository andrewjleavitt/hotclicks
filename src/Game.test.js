import {render, screen} from '@testing-library/react';
import Game from './Game'

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

test('making a click costs a wire', () => {
    render(<Game/>);
    const button = screen.getByTitle('clicker');
    button.click();
    expect(screen.getByText(/wire: 499/i)).toBeInTheDocument()
});

test('making an autoclicker', () => {
    render(<Game/>);
    const button = screen.getByTitle('purchase-autoclicker');
    button.click();
    expect(screen.getByText(/autoclickers: 1/i)).toBeInTheDocument();
});

test('display the count of wire', () => {
    render(<Game/>);
    expect(screen.getByText(/wire: 500/i)).toBeInTheDocument();
});

test('purchase some wire', () => {
    render(<Game/>);
    const button = screen.getByTitle('purchase-wire');
    button.click();
    expect(screen.getByText(/wire: 1000/i)).toBeInTheDocument();
})

test('you need wire to make a click', () => {

})