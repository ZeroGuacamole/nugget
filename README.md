# Nugget

Nugget is an open-source tool designed to capture user actions in React applications and automatically generate test code using `testing-library/react`. This tool aims to simplify the process of writing tests by automating the generation of test scripts based on actual user interactions.

## High-Level Architecture

Nugget is structured into several key components to ensure modularity and ease of maintenance:

### Core

- **Event Capture**: Logic to attach event listeners and capture user interactions efficiently.
- **Selector Generator**: Generates accurate selectors for elements involved in the captured events.
- **Code Generator**: Translates interactions into executable test code.

### User Interface (UI)

- **Components**: Reusable UI components for rendering the interface.
- **Hooks**: Custom React hooks to manage state and side effects across the application.

### Utilities

- **Utilities**: Helper functions and utilities used across the application.

### Extensions

- **Plugin System**: Allows for extending the functionality of the tool through plugins or additional modules.
