// @testing-library/jest-dom adds custom matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom'
import { vi } from 'vitest'

// Import modular mocks
import './setupTests/mocks/antd.js'
import './setupTests/mocks/dom.js'
import './setupTests/mocks/react.js'

// Make vi available globally
global.vi = vi
