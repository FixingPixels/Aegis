# Context Command

The `aegis context` command provides a quick context refresh with front matter validation across all memory files.

## Usage
```bash
/aegis context
```

## Front Matter Requirements

### Current State Front Matter
```yaml
---
id: STATE-CURRENT             # Fixed state identifier
title: "Current State"        # State description
created: YYYY-MM-DDTHH:mm:ssZ # Creation timestamp (ISO 8601)
updated: YYYY-MM-DDTHH:mm:ssZ # Last update timestamp (ISO 8601)
memory_types: [working]       # Must include working
focus: "Current Focus"        # Active development focus
active_task: "TASK-NNN"      # Currently active task
status: "Status Description"  # Current state status
references: []               # Related file references
---
```

### Memory Type Rules
- **Required**: `working`
- **Optional**: `semantic`, `procedural`, `episodic`
- **Maximum**: 3 memory types
- **Valid Combinations**:
  - `[working]`
  - `[working, semantic]`
  - `[working, procedural]`
  - `[working, episodic]`
  - `[working, semantic, procedural]`
  - `[working, semantic, episodic]`
  - `[working, procedural, episodic]`

## Validation Process

### Pre-Context Validation
1. Front Matter Checks:
   ```yaml
   - Existence: Front matter present
   - Format: Valid YAML
   - Required Fields: All present
   - Memory Types: Valid combination
   - References: Exist and valid
   ```

2. State Validation:
   ```yaml
   - Current State: Exists and valid
   - Active Tasks: Valid references
   - Recent Sessions: Valid references
   ```

3. Memory Processing:
   ```yaml
   - Working Memory: Current context
   - Procedural Memory: Active tasks
   - Episodic Memory: Recent changes
   ```

## Error Handling

### Critical Errors (Block Context)
```yaml
- Missing current state
- Invalid front matter format
- Missing required fields
- Invalid memory type combination
```

### Warnings (Allow with Notice)
```yaml
- Invalid references
- Missing optional fields
- Outdated timestamps
```

## Examples

### Current State Display
```yaml
---
id: STATE-CURRENT
title: "Front Matter Implementation"
created: 2024-02-06T20:00:00Z
updated: 2024-02-06T22:45:00Z
memory_types: [working, procedural]
focus: "Front Matter Validation"
active_task: "TASK-008"
status: "Implementing validation"
references: [
  "TASK-008",
  "SESSION-20240206223000"
]
---

## Knowledge Base
- Front matter validation rules
- Memory type compatibility
- Validation hooks

## Active Development
- Updating command documentation
- Enhancing validation rules
- Implementing error handling

## Technical State
- Core validation implemented
- Operation patterns updated
- Documentation in progress

## Current Focus
- Command documentation updates
- Cross-referencing implementation
- Getting started guide updates
```

### Context Validation
```yaml
validation:
  front_matter:
    check:
      - existence: true
      - format: yaml
      - fields: complete
    memory_types:
      - working_required: true
      - compatibility: valid
    references:
      - format: valid
      - targets: exist

  state:
    check:
      - current_state: exists
      - active_tasks: valid
      - recent_sessions: valid
```

## State Processing

### Memory Type Processing
```yaml
processing:
  working:
    - current_state
    - active_focus
  procedural:
    - active_tasks
    - task_progress
  episodic:
    - recent_sessions
    - recent_changes
```

### Validation Display
```yaml
display:
  current:
    - focus
    - active_tasks
    - recent_changes
  validation:
    - front_matter_status
    - memory_type_issues
    - reference_warnings
```

## Best Practices

1. State Management
   - Keep current state updated
   - Maintain accurate focus
   - Track active tasks
   - Update references

2. Front Matter
   - Validate regularly
   - Keep timestamps current
   - Use correct memory types
   - Maintain references

3. Context Refresh
   - Check before major changes
   - Validate state consistency
   - Review active tasks
   - Update as needed

4. Memory Processing
   - Ensure type compatibility
   - Validate references
   - Check timestamps
   - Maintain consistency

## Related Commands
- `/aegis task`: Manage tasks
- `/aegis save`: Save progress
- `/aegis status`: Check state

## See Also
- [Memory Types](../memory_types.md)
- [Front Matter Validation](../validation.md)
- [State Management](../state_management.md)