# RecordThisTest

RecordThisTest is an open-source tool designed to capture user actions in React applications and automatically generate test code using `testing-library/react`. This tool aims to simplify the process of writing tests by automating the generation of test scripts based on actual user interactions.

## Requirements and Milestones

### Phase 1: Core Development
- **Event Capture System**: Develop the system to capture and log user interactions within the application.
- **Selector Generation**: Implement algorithms to generate robust selectors for DOM elements.
- **Test Code Generation**: Build the logic to convert captured events into test code compatible with `testing-library/react`.

### Phase 2: User Interface Implementation
- **UI for Tool**: Create a user-friendly interface for managing recording sessions, editing captured events, and exporting them as test scripts.
- **Integration Options**: Provide options for users to integrate this tool into different development environments.

### Phase 3: Extension and Integration
- **Browser Extension**: Develop a browser extension to easily capture events without modifying the app's code.
- **CI/CD Integration**: Provide support for integrating the tool into continuous integration/continuous deployment pipelines.

### Phase 4: Community Building and Documentation
- **Documentation**: Comprehensive user guides, API documentation, and contribution guidelines.
- **Community Engagement**: Establish a system for community engagement, including issue tracking, feature requests, and regular updates.

## High-Level Architecture

Tool-Name is structured into several key components to ensure modularity and ease of maintenance:

### Core
- **Event Capture**: Logic to attach event listeners and capture user interactions efficiently.
- **Selector Generator**: Generates accurate selectors for elements involved in the captured events.
- **Code Generator**: Translates interactions into executable test code.

### User Interface (UI)
- **Components**: Reusable UI components for rendering the interface.
- **Pages**: Specific pages for different functionalities like start/stop recording, review sessions, and settings.
- **Hooks**: Custom React hooks to manage state and side effects across the application.

### API
- **Backend Communication**: Handles any server-side operations if needed, such as storing test configurations or managing user sessions.

### Utilities
- **Utilities**: Helper functions and utilities used across the application.

### Extensions
- **Plugin System**: Allows for extending the functionality of the tool through plugins or additional modules.

## Folder Structure

Here is the folder structure of our project, which helps in navigating and understanding where specific parts of the code reside:

```plaintext
/tool-name/
|-- /src/
|   |-- /core/                  # Core functionality
|   |   |-- /eventCapture/      # Logic to capture browser events
|   |   |-- /selectorGenerator/ # Logic to generate selectors
|   |   `-- /codeGenerator/     # Logic to generate test code
|
|   |-- /ui/                    # User interface components
|   |   |-- /components/        # Reusable UI components
|   |   |-- /pages/             # Specific pages or views
|   |   `-- /hooks/             # React hooks for state and logic reuse
|
|   |-- /api/                   # For backend communication (if applicable)
|
|   |-- /utils/                 # Utility functions and helpers
|
|   |-- /config/                # Configuration files
|
|   `-- /tests/                 # Test files
|       |-- /unit/              # Unit tests
|       |-- /integration/       # Integration tests
|       `-- /e2e/               # End-to-end tests
|
|-- /public/                   # Public assets and static files
|-- /scripts/                  # Build and setup scripts
|-- /docs/                     # Documentation files
|-- /extensions/               # Additional plugins or extensions
```
