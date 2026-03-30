// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// expect(element).toBeVisible()
// expect(element).toBeInTheDocument()
// expect(element).toHaveAttribute('aria-label', 'close')
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// Optional: Extend with custom matchers for your project
// import './test/customMatchers';

// Optional: Configure testing library
// import { configure } from '@testing-library/react';
// configure({ testIdAttribute: 'data-test-id' });

// Optional: Mock global objects that might not exist in test environment
// if (typeof window !== 'undefined') {
//   Object.defineProperty(window, 'matchMedia', {
//     writable: true,
//     value: jest.fn().mockImplementation(query => ({
//       matches: false,
//       media: query,
//       onchange: null,
//       addListener: jest.fn(),
//       removeListener: jest.fn(),
//       addEventListener: jest.fn(),
//       removeEventListener: jest.fn(),
//       dispatchEvent: jest.fn(),
//     })),
//   });
// }
