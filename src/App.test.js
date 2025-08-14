/**
 * Tests for App component
 *
 * Testing framework: Jest + React Testing Library
 * - Runner: Jest
 * - DOM utilities: @testing-library/react
 * - Matchers: @testing-library/jest-dom
 *
 * These tests focus on the current behavior and text content of App,
 * including the link, image, texts, and specific span content.
 */

import React from 'react';
import { render, screen } from '@testing-library/react';
// If the project has setupTests to extend expect with jest-dom, the following import is not needed.
// import '@testing-library/jest-dom';
import App from './App';

describe('App component', () => {
  test('renders without crashing', () => {
    const { container } = render(<App />);
    expect(container).toBeTruthy();
  });

  test('displays the GitHub Codespaces heart React headline', () => {
    render(<App />);
    // Using getByText with exact string including the heart symbol
    expect(
      screen.getByText(/GitHub Codespaces/i)
    ).toBeInTheDocument();

    // Verify the heart exists as a separate element with class "heart"
    const heart = screen.getByText('♥️');
    expect(heart).toBeInTheDocument();
    expect(heart).toHaveClass('heart');
  });

  test('shows the edit instructions line', () => {
    render(<App />);
    expect(
      screen.getByText(/Edit\s+src\/App\.js\s+and save to reload\./i)
    ).toBeInTheDocument();
  });

  test('renders the logo image with correct alt text and source', () => {
    render(<App />);
    const img = screen.getByAltText(/logo/i);
    expect(img).toBeInTheDocument();
    // For environments that inline assets, src may be transformed; use partial match
    expect(img).toHaveClass('App-logo');
    expect(img.getAttribute('src') || '').toContain('Octocat.png');
  });

  test('renders the greeting span text exactly as present', () => {
    render(<App />);
    // Validate the exact string including the typos to lock current behavior
    expect(
      screen.getByText('hello, whats yoru name? hhh')
    ).toBeInTheDocument();
  });

  test('renders the Learn React link with secure target attributes', () => {
    render(<App />);
    const link = screen.getByRole('link', { name: /learn react/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', 'https://reactjs.org');
    expect(link).toHaveAttribute('target', '_blank');
    // Security best-practice attributes when opening new tabs
    expect(link).toHaveAttribute('rel');
    expect(link.getAttribute('rel')).toMatch(/noopener/);
    expect(link.getAttribute('rel')).toMatch(/noreferrer/);
    expect(link).toHaveClass('App-link');
  });

  test('has main app structure and header', () => {
    const { container } = render(<App />);
    // Basic structure checks by class names present in component
    const root = container.querySelector('.App');
    const header = container.querySelector('.App-header');
    expect(root).toBeInTheDocument();
    expect(header).toBeInTheDocument();
  });

  // Edge case: Rendering in a constrained environment (no specific props)
  // Since App has no props, this validates it doesn't rely on external state.
  test('does not require props to render', () => {
    const { container } = render(React.createElement(App, null));
    expect(container.firstChild).toBeTruthy();
  });
});
