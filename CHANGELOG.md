# Changelog

All notable changes to the Aegis Framework will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.2-beta] - 2024-02-06

### Added
- User interaction patterns for workflow control
- Required user review step in plan command
- Explicit confirmation for task generation
- Blocking actions for critical decisions
- Comprehensive front matter validation rules
- Enhanced memory type compatibility checks
- Improved validation error handling system

### Changed
- Plan command now requires user review before task generation
- Enhanced front matter validation across all operations
- Stricter memory type compatibility enforcement
- Improved task template usage
- Better state management controls
- Enhanced workflow validation

### Fixed
- Task generation front matter consistency
- Memory type validation in templates
- Error prevention in workflows
- State transition validation

### Documentation
- Added user interaction documentation
- Enhanced front matter validation rules
- Updated task generation workflow
- Added validation best practices
- Expanded error handling documentation

## [0.1.1-beta] - 2024-02-06

### Added
- Automatic task creation in `/aegis plan` command:
  - Extracts tasks from planning document phases
  - Creates task files in planned directory
  - Sets up task dependencies automatically
  - Maintains phase-based ordering
- Enhanced documentation for task creation:
  - Added phase-to-task conversion examples
  - Updated getting started guide with task workflow
  - Added troubleshooting guidance for task creation
  - Enhanced best practices for task management

### Changed
- Updated plan command documentation:
  - Added task creation workflow details
  - Enhanced implementation approach section
  - Added phase structure examples
  - Improved validation rules
- Enhanced framework documentation:
  - Updated memory type integration
  - Improved operation pattern clarity
  - Added task creation best practices
  - Enhanced troubleshooting coverage

### Fixed
- Documentation gaps in task creation workflow
- Missing examples in getting started guide
- Unclear phase-to-task conversion process
- Incomplete troubleshooting guidance

## [0.1.0-beta] - 2024-02-05

### Added
- Core framework structure with `.context` directory
- Memory type system:
  - Semantic Memory (project knowledge)
  - Episodic Memory (development history)
  - Procedural Memory (tasks)
  - Working Memory (current focus)
- Command interface:
  - `/aegis plan`: Project planning
  - `/aegis start`: Session management
  - `/aegis save`: Progress tracking
  - `/aegis status`: State checking
  - `/aegis task`: Task management
  - `/aegis context`: Context refresh
  - `/aegis help`: Command assistance
- Template system:
  - Decision templates
  - Session templates
  - Task templates
- Cross-referencing system
- Project state management
- Documentation:
  - Getting Started guide
  - Command reference
  - Memory system guide
  - Operation patterns
  - Framework structure

### Known Issues
- Limited error handling
- Documentation gaps
- Experimental features may change
- API not finalized

### Notes
- This is a beta release
- Breaking changes may occur before v1.0.0
- Feedback and testing needed

## [0.0.4] - 2024-02-05

### Added
- New `/aegis help` command documentation:
  - General and command-specific help
  - Usage examples and parameters
  - Memory type integration
  - Response format standards
  - Cross-platform verification commands
  - Contextual help features

### Changed
- Enhanced setup instructions:
  - Added crucial `.context` directory setup steps
  - Improved directory structure visualization
  - Clearer AI assistant configuration steps
  - Better cross-referencing between docs
  - Platform-specific setup guidance
- Updated core documentation:
  - Standardized command documentation format
  - Improved getting started guide
  - Enhanced README clarity
  - Added detailed directory structure examples
  - Streamlined installation process

### Removed
- References to `/aegis init` command
- Outdated initialization steps
- Redundant setup instructions

## [0.0.3] - 2025-01-28

### Added
- Session validation system:
  - Required fields validation
  - Memory type combination rules
  - Path validation requirements
  - Datetime format standards
- Validation rules in AI instructions:
  - Frontmatter requirements
  - Validation flow diagrams
  - Memory type rules
  - Path validation rules
- Milestone definition system:
  - Core framework changes
  - Feature completion criteria
  - Documentation evolution
  - Process improvements

### Changed
- Updated all session files to meet validation rules:
  - Standardized memory type combinations
  - Fixed datetime formats
  - Corrected link paths
  - Added missing required fields

### Fixed
- Inconsistent memory type usage in sessions
- Missing datetime formats in timestamps
- Incorrect link path formats
- Incomplete frontmatter fields

## [0.0.2] - 2025-01-27

### Changed
- Updated all command documentation to match command rules:
  - Removed AI conductor and agent references
  - Added exact directory structure to init command
  - Added decision creation guidance
  - Simplified command workflows
  - Added file operation restrictions
  - Improved clarity and consistency

## [0.0.1] - 2025-01-20

### Added
- Core framework structure with `.context` directory
- Memory type system:
  - Semantic Memory (project knowledge)
  - Episodic Memory (history)
  - Procedural Memory (tasks)
  - Working Memory (active context)
- Template system with standardized formats:
  - Decision templates
  - Session templates
  - Task templates
- Cross-referencing system for document relationships
- Project state management:
  - Current state tracking
  - Roadmap planning
  - Achievement logging
- AI instruction system:
  - Session workflows
  - Memory processing
  - State management
  - Save operations
- Comprehensive documentation:
  - Core files guide
  - Template system
  - Cross-referencing
  - Memory management
- Command interface:
  - `/aegis init`: Framework initialization
  - `/aegis start`: Session start
  - `/aegis save`: State updates
  - `/aegis status`: Progress checks
  - `/aegis task`: Task management
  - `/aegis context`: Context refresh
  - `/aegis plan`: AI-guided planning
