# Template System

The Aegis framework uses a structured template system to maintain consistency and enable effective processing across different types of memory. This document explains how templates are managed, validated, and integrated with the framework's operation patterns.

## Overview

Templates in Aegis provide consistent structure for different types of project information:

1. **Template Types**
   - Decision templates capture architectural and technical choices
   - Session templates record development progress and insights
   - Task templates track implementation work and progress
   - Agent templates define AI roles and responsibilities

2. **Common Structure**
   - All templates use standard YAML frontmatter for metadata
   - Each type has specific required and optional sections
   - References connect related information
   - Validation ensures completeness and correctness

3. **Memory Integration**
   - Decision templates work with semantic and episodic memory
   - Session templates use episodic and working memory
   - Task templates use procedural and working memory
   - Agent templates use semantic and working memory

4. **Validation System**
   - Format rules ensure consistent structure
   - Content rules verify required information
   - Reference rules maintain connections
   - State rules manage transitions

This system helps you:
- Maintain consistent documentation
- Ensure complete information
- Track relationships properly
- Validate content automatically
- Follow project standards

## Common Structure

All templates use a standard metadata structure:

```yaml
---
id: [Type-specific format]        # Unique identifier based on type
title: [Clear description]        # Descriptive title
created: ${timestamp}             # Creation timestamp (ISO8601)
updated: ${timestamp}             # Last update timestamp (ISO8601)
memory_types: [type1, type2]      # Memory type classification
status: [status based on type]    # Current status if applicable
priority: [high|medium|low]       # Importance level
references: []                    # Related document references
validation:                       # Validation requirements
  format: true                    # Format validation
  references: true               # Reference validation
  state: true                    # State validation
---
```

## Validation Rules

### 1. Format Validation
```yaml
validation:
  format:
    decisions:
      id: "DECISION-\\d{3}"
      memory_types: ["semantic", "episodic"]
      status: ["proposed", "accepted", "deprecated", "superseded"]
    
    sessions:
      id: "\\d{8}_\\d{4}_session"
      memory_types: ["episodic", "working"]
    
    tasks:
      id: "\\d{6}_\\d{4}_[a-z_]+"
      memory_types: ["procedural", "working"]
      status: ["planned", "active", "completed", "hold"]
    
    agents:
      id: "AGENT-[A-Z]+"
      memory_types: ["semantic", "working"]
      status: ["active", "standby", "inactive"]
```

### 2. Content Validation
```yaml
content_validation:
  decisions:
    required: [context, decision, rationale, consequences]
    optional: [implementation, status_history]
  
  sessions:
    required: [context, progress, next_steps]
    optional: [insights, notes]
  
  tasks:
    required: [description, implementation, validation]
    optional: [dependencies, notes]
  
  agents:
    required: [role_definition, memory_access, task_types]
    optional: [interaction_patterns, notes]
```

### 3. Reference Validation
```yaml
reference_validation:
  types:
    decisions: "DECISION-\\d{3}"
    sessions: "\\d{8}_\\d{4}_session"
    tasks: "\\d{6}_\\d{4}_[a-z_]+"
    agents: "AGENT-[A-Z]+"
  
  rules:
    - target_exists: true
    - valid_format: true
    - no_cycles: true
```

## Error Handling

### 1. Format Errors
```yaml
format_errors:
  invalid_id:
    msg: "Invalid ID format for template type"
    action: show_format
    help: "Check type-specific ID format"
  
  invalid_memory:
    msg: "Invalid memory types"
    action: show_valid_types
    help: "Use correct memory types for template"
  
  invalid_status:
    msg: "Invalid status value"
    action: show_valid_states
    help: "Use correct status values for type"
```

### 2. Content Errors
```yaml
content_errors:
  missing_required:
    msg: "Missing required sections"
    action: show_missing
    help: "Add required sections"
  
  invalid_content:
    msg: "Invalid content format"
    action: show_format
    help: "Check content formatting rules"
```

### 3. Reference Errors
```yaml
reference_errors:
  invalid_target:
    msg: "Invalid reference target"
    action: show_target
    help: "Verify reference exists"
  
  invalid_format:
    msg: "Invalid reference format"
    action: show_format
    help: "Use correct reference format"
```

## Operation Pattern Integration

### 1. Framework Check Pattern
```yaml
framework_check:
  templates:
    validate:
      - format: {check: true}
      - content: {complete: true}
      - references: {resolve: true}
```

### 2. Memory Processing Pattern
```yaml
memory_processing:
  templates:
    load:
      - type: {validate: true}
      - content: {process: true}
      - refs: {resolve: true}
```

### 3. State Management Pattern
```yaml
state_management:
  templates:
    track:
      - changes: {record: true}
      - updates: {validate: true}
      - history: {maintain: true}
```

## Template Types

### 1. Decision Template
```markdown
# [Decision Title]

---
id: DECISION-XXX
title: [Clear title]
created: ${timestamp}
updated: ${timestamp}
memory_types: [semantic, episodic]
status: [proposed | accepted | deprecated | superseded]
priority: [high | medium | low]
references: []
validation:
  format: true
  references: true
  state: true
---

## Context
[Issue or situation motivating this decision]

## Decision
[Proposed change or solution]

## Rationale
- Key factors
- Alternatives
- Trade-offs
- Dependencies

## Consequences
- Benefits
- Challenges
- Required changes
- Impact areas

## Implementation
- Technical details
- Migration steps
- Validation needs
```

### 2. Session Template
```markdown
# Session Summary

---
id: ${YYYYMMDD}_${HHMM}_session
title: Session Summary
created: ${timestamp}
updated: ${timestamp}
memory_types: [episodic, working]
references: []
validation:
  format: true
  references: true
  state: true
---

## Context
- Previous: [session reference]
- Focus: [current focus]
- Tasks: [task references]

## Progress
### Changes
- Code updates
- Documentation
- Decisions made

### Insights
- Technical findings
- Pattern discoveries
- Potential issues

## Next Steps
- Immediate tasks
- Open questions
- Follow-up items
```

### 3. Task Template
```markdown
# [Task Title]

---
id: ${YYMMDD}_${HHMM}_task_name
title: [Clear title]
created: ${timestamp}
updated: ${timestamp}
memory_types: [procedural, working]
status: [planned | active | completed | hold]
priority: [high | medium | low]
references: []
validation:
  format: true
  references: true
  state: true
---

## Description
[Clear task objective]

## Implementation
- Technical approach
- Step-by-step plan
- Progress tracking
- Validation steps

## Dependencies
- Required tasks
- External resources
- Blocking issues

## Validation
- Success metrics
- Testing approach
- Quality checks
- Review process
```

### 4. Agent Template
```markdown
# [Agent Role]

---
id: AGENT-ROLE
title: [Role Title]
created: ${timestamp}
updated: ${timestamp}
memory_types: [semantic, working]
status: [active | standby | inactive]
references: []
validation:
  format: true
  references: true
  state: true
---

## Role Definition
[Agent's role and responsibilities]

## Memory Access
- Read: [memory types]
- Write: [memory types]

## Task Types
- Primary: [task types]
- Support: [task types]

## Interaction Patterns
- Direct: [agent interactions]
- Workflow: [integration points]

## State Management
- Active: [requirements]
- Standby: [conditions]
- Inactive: [preservation]
```

## Related Documentation

- [Memory Types](operations/memory_types.md)
- [Operation Patterns](operations/patterns.md)
- [Validation Rules](operations/validation.md)
- [Error Handling](operations/error_handling.md)
- [State Management](operations/state_management.md)