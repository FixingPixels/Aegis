# Cross-Referencing System

The Aegis framework uses a robust cross-referencing system to maintain relationships between different types of memory and project information. This document explains how references are managed, validated, and integrated with the framework's operation patterns.

## Overview

The cross-referencing system connects different parts of your project in a meaningful way:

1. **Memory Types and Their Documents**
   - Semantic Memory stores long-term project knowledge in decisions and planning documents
   - Procedural Memory tracks implementation details in tasks and operation patterns
   - Working Memory maintains current context in the current state and active tasks
   - Episodic Memory records history through session logs and change records

2. **How References Work**
   - Each document has a unique ID (like `DECISION-001` or `240205_1430_task`)
   - Documents can reference other documents using these IDs
   - References are validated to ensure they point to real documents
   - The system prevents circular references

3. **Common Reference Patterns**
   - Decisions implement tasks and are recorded in sessions
   - Tasks are tracked in sessions and based on decisions
   - Sessions create decisions and update tasks
   - Current state references everything to maintain context

4. **System Integration**
   - Validation checks all references for correctness
   - State management tracks changes across documents
   - Operation patterns ensure everything works together
   - Memory types maintain their specific relationships

This system helps you:
- Track relationships between different parts of your project
- Maintain consistent project state
- Find related information quickly
- Prevent broken references
- Keep project history organized

## Reference Types

### 1. Document IDs
- **Decisions**: `DECISION-XXX`
  - Sequential numbering
  - Example: `DECISION-001`
  - Used for architectural and technical decisions

- **Sessions**: `YYYYMMDD_HHMM_session`
  - Timestamp-based format
  - Example: `20250120_1430_session`
  - Used for development sessions

- **Tasks**: `XX_descriptive_name`
  - Timestamp-based format with description
  - Example: `240205_1430_implement_feature`
  - Used for implementation tasks

### 2. Memory Type References

```mermaid
graph TD
    SM[Semantic Memory] -->|Project Knowledge| D[Decisions]
    SM -->|Architecture| P[Planning]
    
    PM[Procedural Memory] -->|Implementation| T[Tasks]
    PM -->|Workflows| O[Operations]
    
    WM[Working Memory] -->|Current State| C[Context]
    WM -->|Active Tasks| AT[Active Work]
    
    EM[Episodic Memory] -->|History| S[Sessions]
    EM -->|Changes| CH[Change Records]
```

The cross-referencing system connects different parts of your project in a meaningful way:

1. **Semantic Memory**
   - Semantic Memory stores long-term project knowledge in decisions and planning documents
   - Semantic Memory references decisions and is recorded in sessions
   - Semantic Memory updates current state

2. **Procedural Memory**
   - Procedural Memory tracks implementation details in tasks and operation patterns
   - Procedural Memory implements tasks and is recorded in sessions
   - Procedural Memory updates current state

3. **Working Memory**
   - Working Memory maintains current context in the current state and active tasks
   - Working Memory references current state and is recorded in sessions
   - Working Memory updates current state

4. **Episodic Memory**
   - Episodic Memory records history through session logs and change records
   - Episodic Memory references decisions and is recorded in sessions
   - Episodic Memory updates current state

### 3. Reference Validation

```yaml
# Reference Validation Rules
validation:
  format:
    decisions: "DECISION-\\d{3}"
    sessions: "\\d{8}_\\d{4}_session"
    tasks: "\\d{6}_\\d{4}_[a-z_]+"
  
  content:
    required: [id, title, references]
    optional: [tags, aliases]
    validate: [format, existence]
  
  references:
    circular: false
    missing: false
    validate: true
```

### 4. Error Handling

```yaml
# Reference Error Handling
errors:
  invalid_format:
    msg: "Invalid reference format"
    action: show_format
    help: "Check reference format rules"
  
  missing_target:
    msg: "Referenced item not found"
    action: show_missing
    help: "Verify reference exists"
  
  circular_ref:
    msg: "Circular reference detected"
    action: show_circle
    help: "Break reference cycle"
```

## Integration with Operation Patterns

### 1. Framework Check Pattern
```yaml
reference_check:
  steps:
    - validate_format: {all: true}
    - check_existence: {required: true}
    - detect_circles: {prevent: true}
```

### 2. Memory Processing Pattern
```yaml
memory_refs:
  validate:
    - cross_memory: {allowed: true}
    - type_match: {required: true}
    - state_valid: {check: true}
```

### 3. State Management Pattern
```yaml
state_refs:
  track:
    - changes: {record: true}
    - updates: {validate: true}
    - history: {maintain: true}
```

## Command Integration

### 1. Plan Command
```yaml
plan_refs:
  validate:
    - decisions: {type: architecture}
    - requirements: {type: technical}
    - milestones: {type: timeline}
```

### 2. Start Command
```yaml
start_refs:
  load:
    - current: {state: true}
    - active: {tasks: true}
    - recent: {sessions: true}
```

### 3. Save Command
```yaml
save_refs:
  update:
    - session: {create: true}
    - tasks: {progress: true}
    - decisions: {if: made}
```

### 4. Task Command
```yaml
task_refs:
  manage:
    - status: {update: true}
    - dependencies: {check: true}
    - blockers: {track: true}
```

## Reference Patterns

### 1. Cross-Memory References
```yaml
cross_memory:
  semantic_working:
    - decisions: {to: current_state}
    - patterns: {to: active_tasks}
  
  procedural_working:
    - tasks: {to: current_state}
    - workflows: {to: active_tasks}
  
  episodic_semantic:
    - sessions: {to: decisions}
    - changes: {to: patterns}
```

### 2. State References
```yaml
state_refs:
  current_state:
    - active_task: {type: task}
    - recent_changes: {type: change}
    - decisions: {type: decision}
  
  task_state:
    - dependencies: {type: task}
    - blockers: {type: issue}
    - decisions: {type: decision}
```

### 3. Validation References
```yaml
validation_refs:
  rules:
    - format: {check: true}
    - content: {complete: true}
    - state: {valid: true}
  
  actions:
    - invalid: {fix: suggest}
    - missing: {fix: create}
    - circular: {fix: break}
```

## Best Practices

### 1. Reference Creation
- Use correct ID formats
- Validate before saving
- Check target existence
- Prevent circular refs

### 2. Reference Management
- Regular validation
- Clean stale refs
- Update bidirectional
- Track changes

### 3. Error Prevention
- Check formats early
- Validate targets
- Handle missing refs
- Break cycles

### 4. Documentation
- Clear purpose
- Complete context
- Valid examples
- Error solutions

## Troubleshooting

### 1. Invalid References
```yaml
invalid_ref:
  symptoms:
    - wrong format
    - missing target
    - wrong type
  solutions:
    - check format rules
    - verify target exists
    - validate type match
```

### 2. Circular References
```yaml
circular_ref:
  detection:
    - scan chains
    - find cycles
    - trace paths
  resolution:
    - break cycles
    - redirect refs
    - document changes
```

### 3. Missing References
```yaml
missing_ref:
  checks:
    - target exists
    - path valid
    - type correct
  fixes:
    - create target
    - update path
    - correct type
```

## Related Documentation

- [Memory Types](operations/memory_types.md)
- [Operation Patterns](operations/patterns.md)
- [Validation Rules](operations/validation.md)
- [Error Handling](operations/error_handling.md)
- [State Management](operations/state_management.md)
