import { setupCounter } from './counter'; // Імпортуємо реальну функцію
import { screen } from '@testing-library/dom';
import { describe, it, expect } from 'vitest';

const setup = () => {
    document.body.innerHTML = `
    <div id="app">
      <h1>Vite + TypeScript</h1>
      <div class="card">
        <button id="counter" type="button">count is 0</button> 
      </div>
      <p class="read-the-docs">
        Click on the Vite and TypeScript logos to learn more
      </p>
    </div>
  `;
    setupCounter(document.querySelector<HTMLButtonElement>('#counter')!);
};

describe('Main', () => {
    it('renders headline and sets up counter', () => {
        setup();
        const headline = screen.getByText(/Vite \+ TypeScript/i);
        expect(headline).toBeInTheDocument();

        const counterButton = screen.getByRole('button', { name: 'count is 0' });
        expect(counterButton).toBeInTheDocument();
    });
});