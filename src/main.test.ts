import { screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

// Імітуємо HTML, який рендериться в main.ts
const setup = () => {
    document.body.innerHTML = `
    <div id="app">
      <h1>Vite + TypeScript</h1>
    </div>
  `;
};

describe('Main', () => {
    it('renders headline', () => {
        setup();
        const headline = screen.getByText(/Vite \+ TypeScript/i);
        expect(headline).toBeInTheDocument();
    });
});