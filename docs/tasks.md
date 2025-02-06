# Task Management

The Aegis framework uses a structured task management system to track development activities and implementation details. This document explains how tasks are managed, validated, and integrated with the framework's operation patterns.

## Overview

Tasks in Aegis are organized into several key aspects:

1. **Task Organization**
   - Tasks are stored in specific directories based on their status
   - Each task has a unique timestamp-based ID for tracking
   - Tasks move between states as work progresses
   - All changes are tracked and validated

2. **Task Components**
   - Metadata tracks ID, timestamps, status, and references
   - Description explains what needs to be done
   - Implementation details how to do it
   - Dependencies show what's needed
   - Validation ensures it's done right

3. **Task States**
   - 'Planned' tasks are ready for implementation
   - 'Active' tasks are currently being worked on
   - 'Hold' tasks are blocked by dependencies
   - 'Completed' tasks have met all criteria

4. **Memory Integration**
   - Tasks are stored in procedural memory for implementation steps
   - Active tasks are part of working memory for current focus
   - Task progress is recorded in sessions (episodic memory)
   - Task decisions reference semantic memory

This structure helps you:
- Track what needs to be done
- Know what's being worked on
- Handle dependencies properly
- Validate completed work
- Maintain project progress

## Task Structure

### Metadata Section
```yaml
---
id: 240205_1430_task_name
title: [Task Title]
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
```

### Content Sections

1. **Description**
   - Clear objective
   - Requirements
   - Expected outcomes
   - Success criteria

2. **Implementation**
   - Technical approach
   - Step-by-step plan
   - Progress tracking
   - Validation steps

3. **Dependencies**
   - Required tasks
   - External resources
   - Blocking issues
   - Access needs

4. **Validation**
   - Success metrics
   - Testing approach
   - Quality checks
   - Review process

## Validation Rules

### 1. Format Validation
```yaml
validation:
  format:
    id: "\\d{6}_\\d{4}_[a-z_]+"
    status: ["planned", "active", "completed", "hold"]
    memory_types: ["procedural", "working"]
    priority: ["high", "medium", "low"]
  
  content:
    required: [description, implementation, validation]
    optional: [dependencies, notes]
    validate: [completeness, clarity]
  
  references:
    validate: true
    circular: false
    required: false
```

### 2. State Validation
```yaml
state_validation:
  transitions:
    planned:
      to: [active]
      validate: [dependencies, resources]
    
    active:
      to: [completed, hold]
      validate: [progress, blockers]
    
    hold:
      to: [active]
      validate: [blockers_resolved]
    
    completed:
      final: true
      validate: [success_criteria]
```

### 3. Reference Validation
```yaml
reference_validation:
  types:
    tasks: "\\d{6}_\\d{4}_[a-z_]+"
    decisions: "DECISION-\\d{3}"
    sessions: "\\d{8}_\\d{4}_session"
  
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
    msg: "Invalid task ID format"
    action: show_format
    help: "Use YYMMDD_HHMM_name format"
  
  invalid_status:
    msg: "Invalid task status"
    action: show_valid_states
    help: "Use valid status values"
  
  invalid_types:
    msg: "Invalid memory types"
    action: show_valid_types
    help: "Use procedural and working"
```

### 2. State Errors
```yaml
state_errors:
  invalid_transition:
    msg: "Invalid state transition"
    action: show_valid_transitions
    help: "Check state transition rules"
  
  blocked_transition:
    msg: "Task is blocked"
    action: show_blockers
    help: "Resolve blockers first"
```

### 3. Reference Errors
```yaml
reference_errors:
  invalid_target:
    msg: "Invalid reference target"
    action: show_target
    help: "Verify reference exists"
  
  dependency_cycle:
    msg: "Dependency cycle detected"
    action: show_cycle
    help: "Break dependency cycle"
```

## Operation Pattern Integration

### 1. Framework Check Pattern
```yaml
framework_check:
  tasks:
    validate:
      - format: {check: true}
      - status: {valid: true}
      - references: {resolve: true}
```

### 2. Memory Processing Pattern
```yaml
memory_processing:
  tasks:
    types: [procedural, working]
    load: [content, references]
    validate: [format, state]
```

### 3. State Management Pattern
```yaml
state_management:
  tasks:
    track:
      - changes: {record: true}
      - transitions: {validate: true}
      - history: {maintain: true}
```

## Task Naming Convention

Tasks use a timestamp-based naming convention:

```
YYMMDD_HHMM_descriptive_name.md
```

Where:
- `YYMMDD`: Creation date (e.g., 240205)
- `HHMM`: Creation time (24-hour format)
- `descriptive_name`: Snake-case description

Example: `240205_1430_implement_feature.md`

### Naming Rules
```yaml
naming_rules:
  format:
    date: "\\d{6}"      # YYMMDD
    time: "\\d{4}"      # HHMM
    name: "[a-z_]+"     # snake_case
  
  validation:
    - unique: true
    - chronological: true
    - descriptive: true
```

## Directory Structure
```yaml
task_structure:
  root: tasks/
  directories:
    planned:
      path: planned/
      contains: new_tasks
    
    active:
      path: active/
      contains: in_progress
    
    hold:
      path: hold/
      contains: blocked
    
    completed:
      path: completed/
      contains: done
  
  templates:
    base: TEMPLATE.md
    required: true
```

## Memory Type Integration

### 1. Procedural Memory
- Implementation steps
- Technical workflows
- Process patterns
- Validation rules
- Quality checks
- Progress tracking
- Status updates

### 2. Working Memory
- Current focus
- Active changes
- Immediate needs
- Recent updates
- Open issues
- Next steps
- Blockers

## Example Task

```markdown
# Implement User Authentication

---
id: 240205_1430_implement_auth
title: Implement User Authentication
created: 2024-02-05T14:30:00Z
updated: 2024-02-05T14:30:00Z
memory_types: [procedural, working]
status: active
priority: high
references: [DECISION-001]
validation:
  format: true
  references: true
  state: true
---

## Description
Implement secure user authentication system based on [DECISION-001].

## Implementation
1. Setup Auth System:
   - Technical: JWT-based auth
   - Validation: Security tests
   - Progress: 50% complete

2. User Management:
   - Technical: Role-based access
   - Validation: Access tests
   - Progress: Planning

## Dependencies
- Database setup complete
- Security requirements defined
- API endpoints ready

## Validation
1. Success Metrics:
   - Secure authentication
   - Role enforcement
   - Performance targets

2. Testing:
   - Security tests
   - Performance tests
   - Integration tests
```

## Related Documentation

- [Memory Types](operations/memory_types.md)
- [Operation Patterns](operations/patterns.md)
- [Validation Rules](operations/validation.md)
- [Error Handling](operations/error_handling.md)
- [State Management](operations/state_management.md)