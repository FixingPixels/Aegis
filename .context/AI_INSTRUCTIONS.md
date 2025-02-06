# Aegis AI Instructions

## Overview
This framework uses YAML-based operation patterns for command execution. These patterns are located in `.context/ai/operations/` and define the behavior, validation, and documentation for each command.

## Core Principles
1. Follow operation patterns exactly as defined in YAML
2. Present information in a user-focused, problem-solving manner
3. Maintain consistent state across operations
4. Handle errors gracefully with clear guidance
5. Validate framework structure before operations

## Documentation
- Operation patterns: `.context/ai/operations/*.yaml`
- Common patterns: `.context/ai/patterns/*.yaml`
- Translation rules: See `help.yaml` translation section

## Memory Types
- Semantic: Understanding of commands and patterns
- Procedural: Step-by-step operations
- Working: Current context and state
- Episodic: Historical operations and decisions

## Command Guidelines

### Setup Commands

#### plan
- Focus on project goals and requirements
- Keep planning documents focused and actionable
- Link technical decisions to project needs
- Update as project evolves
- Do not modify framework files
- Only create/update planning_document.md

### Core Commands

#### start
- Validate framework structure before starting
- Load complete context before proceeding
- Present clear project status
- Identify immediate next actions
- Note any pending decisions

#### task
- Focus on one task at a time
- Track dependencies and blockers
- Update progress consistently
- Link related decisions
- Move tasks between directories (don't copy)
- Update status and timestamps when moving

#### save
- Record all significant changes
- Document important decisions
- Update project state
- Note milestone achievements
- Create session logs
- Update task progress

#### status
- Show relevant information only
- Highlight important changes
- Note pending actions
- Link to detailed information
- No file modifications

#### context
- Focus on immediate needs
- Show relevant history
- Link related items
- Note important patterns
- Quick state refresh only

#### help
- Focus on user's immediate need
- Show relevant examples
- Link related commands
- Offer next steps
- Clear command organization

## Framework Structure
The framework requires a specific `.context` directory structure:
```
.context/
├── AI_INSTRUCTIONS.md     # Framework instructions
├── plan/                 # Planning documents
├── tasks/               # Task management
│   ├── active/         # Current tasks
│   ├── planned/        # Future tasks
│   ├── hold/          # Blocked tasks
│   └── completed/     # Finished tasks
├── sessions/          # Session records
├── decisions/         # Decision records
└── current_state.md   # Working memory
```

## File Requirements
All memory files must include:
```yaml
---
title: Descriptive title
memory_types: [type1, type2]  # Must match file location
references: []                # List of related memory files
---
```

## Decision Guidelines
Create a decision record when:
- Making significant architectural choices
- Choosing technologies or frameworks
- Setting coding standards or patterns
- Making security-related decisions
- Changing project structure
- Making breaking changes
- Establishing workflows

Each decision should:
- Have clear rationale
- Consider alternatives
- Document trade-offs
- Note impact
- Include validation

## Framework Validation
Before executing any command:
1. Verify `.context` directory structure exists
2. Check all required files are present
3. Validate file permissions
4. Ensure memory types are consistent
5. Check reference integrity

## Error Handling
When encountering issues:
1. Check framework structure first
2. Verify file existence and permissions
3. Review error messages for guidance
4. Provide clear next steps
5. Link to relevant documentation
