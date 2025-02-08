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
- MUST show planning document for user review
- MUST wait for user confirmation before generating tasks
- MUST provide options to:
  1. Edit the plan
  2. Proceed with task generation
  3. Cancel the operation
- NEVER generate tasks without user review and confirmation

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

### Front Matter Requirements
All memory files MUST include front matter with specific required fields. Front matter must be:
- Enclosed in triple-dashes (`---`)
- Valid YAML format
- Located at the start of the file
- Include all required fields for the file type

#### Common Required Fields
```yaml
---
id: [FILE_TYPE]-[NUMBER/TIMESTAMP]  # Unique identifier
title: Descriptive title            # Clear, descriptive title
created: YYYY-MM-DDTHH:mm:ssZ      # Creation timestamp (ISO 8601)
updated: YYYY-MM-DDTHH:mm:ssZ      # Last update timestamp (ISO 8601)
memory_types: [type1, type2]       # Must follow memory type rules
references: []                      # List of related memory files
---
```

#### Type-Specific Requirements

Tasks:
```yaml
---
# ... common fields ...
status: [planned|active|completed|blocked]
priority: [high|medium|low]
---
```

Sessions:
```yaml
---
# ... common fields ...
focus: Current development focus
participants: [list of participants]
objectives: [list of objectives]
---
```

Decisions:
```yaml
---
# ... common fields ...
status: [proposed|accepted|deprecated|superseded]
impact: Description of impact
alternatives_considered: [list of alternatives]
---
```

### Memory Type Rules

#### Valid Memory Types
- `semantic`: Understanding of commands and patterns
- `procedural`: Step-by-step operations
- `working`: Current context and state
- `episodic`: Historical operations and decisions

#### Memory Type Compatibility
Memory types must follow these compatibility rules:
1. Each file must have 1-3 memory types
2. Allowed combinations:
   - `semantic` + [`procedural`, `working`]
   - `episodic` + [`semantic`, `working`]
   - `procedural` + [`semantic`, `working`]
   - `working` + [`semantic`, `procedural`, `episodic`]

#### Type-Specific Requirements
- Tasks: Must include `procedural`
- Sessions: Must include `episodic`
- Decisions: Must include `semantic`
- Current State: Must include `working`

### Validation Rules

#### Pre-Save Validation
Before saving any memory file:
1. Verify front matter exists and is properly formatted
2. Validate all required fields are present
3. Check memory type compatibility
4. Validate references exist
5. Ensure timestamps are in correct format

#### Error Handling
When front matter validation fails:
1. Provide specific error message indicating the issue
2. Reference the correct format/template
3. Suggest fixes for common issues
4. Block save if critical fields are missing/invalid
5. Warn but allow save for non-critical issues

Common validation errors:
- Missing front matter: Add front matter section
- Invalid memory types: Check compatibility rules
- Missing required fields: Add all required fields
- Invalid references: Update or remove invalid references
- Invalid timestamps: Use ISO 8601 format

### Front Matter Best Practices
1. Always use templates when creating new files
2. Keep titles clear and descriptive
3. Update timestamps when modifying content
4. Use appropriate memory types for file purpose
5. Maintain accurate reference lists
6. Follow type-specific field requirements
7. Use consistent formatting

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
