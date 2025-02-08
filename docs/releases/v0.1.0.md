# Aegis Framework Release Notes

## v0.1.1-beta

This release enhances the framework's documentation and task management capabilities, focusing on improved user guidance and automated task creation workflows.

### New Features

- **Enhanced Plan Command**
  - Automatic task creation from planning phases
  - Improved phase-to-task conversion workflow
  - Enhanced validation and error handling

- **Documentation Improvements**
  - Comprehensive task creation documentation
  - Updated getting started guide
  - Enhanced troubleshooting guidance
  - Improved framework structure documentation
  - New examples and use cases

### Improvements

- **Task Management**
  - Streamlined task creation process
  - Better integration with memory system
  - Enhanced task validation
  - Clearer task state transitions

- **Framework Structure**
  - Better separation of concerns in operation patterns
  - Improved cross-referencing
  - Enhanced documentation organization

### Installation

Same as v0.1.0-beta. Extract the framework to your project:
```bash
tar -xzf aegis-v0.1.1-beta.tar.gz
cd your-project
cp -r aegis-v0.1.1-beta/.context .
```

### Upgrade Notes
This release is backwards compatible with v0.1.0-beta. No special upgrade steps required.

## v0.1.0-beta

This is the first beta release of the Aegis Framework, introducing the core functionality for AI-assisted development.

### Core Features

- **Memory System**
  - Semantic Memory (project knowledge)
  - Episodic Memory (development history)
  - Procedural Memory (tasks)
  - Working Memory (current focus)

- **Command Interface**
  - `/aegis plan`: Project planning
  - `/aegis start`: Session management
  - `/aegis save`: Progress tracking
  - `/aegis status`: State checking
  - `/aegis task`: Task management
  - `/aegis context`: Context refresh
  - `/aegis help`: Command assistance

- **Framework Structure**
  - `.context` directory organization
  - Template system
  - Cross-referencing system
  - State management

### Installation

1. Download the release package:
   - `aegis-v0.1.0-beta.tar.gz`
   - `aegis-v0.1.0-beta.sha256` (checksum)

2. Verify the download:
   ```bash
   shasum -a 256 -c aegis-v0.1.0-beta.sha256
   ```

3. Extract and set up:
   ```bash
   tar -xzf aegis-v0.1.0-beta.tar.gz
   cd your-project
   cp -r aegis-v0.1.0-beta/.context .
   ```

### Documentation

- [Getting Started Guide](../getting_started.md)
- [Command Reference](../commands/README.md)
- [Memory System](../operations/memory_types.md)

### Known Limitations

- Beta release: Workflow and commands may change
- Limited error handling
- Documentation may be incomplete
- Some features are experimental

### Feedback

We welcome your feedback and contributions:
- Report issues
- Suggest improvements
- Share use cases
- Contribute documentation

## Next Steps

1. Review the Getting Started guide
2. Set up your AI assistant
3. Try the basic workflow:
   ```bash
   /aegis plan
   /aegis start
   /aegis task
   ```

## Notes

This is a beta release intended for:
- Early adopters
- Feature testing
- Feedback collection
- Use case validation

Please report any issues or suggestions for improvement. 