# Task Command

The `aegis task` command manages task lifecycle and ensures proper front matter validation across all task operations.

## Usage
```bash
/aegis task [action]
```

Actions:
- `create`: Create a new task
- `list`: List tasks by state
- `show`: Show task details
- `move`: Change task state
- `update`: Update task content

## Front Matter Requirements

### Required Fields
```yaml
---
id: TASK-NNN                  # Unique task identifier (e.g., TASK-001)
title: "Task Title"           # Clear, descriptive title
created: YYYY-MM-DDTHH:mm:ssZ # Creation timestamp (ISO 8601)
updated: YYYY-MM-DDTHH:mm:ssZ # Last update timestamp (ISO 8601)
memory_types: [procedural]    # Must include procedural
status: [state]              # Current task state
priority: [level]            # Task priority
references: []               # Related file references
---
```

### Memory Type Rules
- **Required**: `procedural`
- **Optional**: `semantic`, `working`
- **Maximum**: 3 memory types
- **Valid Combinations**:
  - `[procedural]`
  - `[procedural, semantic]`
  - `[procedural, working]`
  - `[procedural, semantic, working]`

### Status Values
- `planned`: Initial task state
- `active`: Currently being worked on
- `completed`: Work finished
- `hold`: Temporarily blocked

### Priority Levels
- `high`: Critical or blocking tasks
- `medium`: Standard priority
- `low`: Nice-to-have tasks

## Validation Rules

### Pre-Operation Validation
The command validates:
1. Front matter existence and format
2. Required fields presence
3. Memory type compatibility
4. Reference validity
5. Status transitions

### Error Handling
```yaml
# Critical Errors (Block Operation)
- Missing front matter
- Invalid front matter format
- Missing required fields
- Invalid memory type combination
- Invalid status transition

# Warnings (Allow with Notice)
- Invalid references
- Missing optional fields
- Suboptimal memory type combination
```

## Examples

### Creating a New Task
```bash
/aegis task create
```
Creates a new task with validated front matter:
```yaml
---
id: TASK-001
title: "Implement Feature X"
created: 2024-02-06T10:00:00Z
updated: 2024-02-06T10:00:00Z
memory_types: [procedural, semantic]
status: planned
priority: high
references: []
---
```

### Moving Task State
```bash
/aegis task move TASK-001 active
```
Updates front matter automatically:
```yaml
---
# ... other fields ...
status: active
updated: 2024-02-06T11:00:00Z
---
```

### Updating Task
```bash
/aegis task update TASK-001
```
Validates front matter changes:
```yaml
---
# ... other fields ...
memory_types: [procedural, working]  # Valid change
updated: 2024-02-06T12:00:00Z
references: ["DECISION-001"]         # Added reference
---
```

## Common Errors and Solutions

### Invalid Memory Types
```yaml
# Error
memory_types: [semantic, working]  # Missing required procedural

# Solution
memory_types: [procedural, semantic, working]
```

### Invalid Status Transition
```yaml
# Error
status: completed  # Can't move directly from planned to completed

# Solution
1. First move to active:
   status: active
2. Then move to completed:
   status: completed
```

### Missing Required Fields
```yaml
# Error
---
id: TASK-001
title: "Task Title"
# missing created, updated, memory_types, etc.
---

# Solution
Add all required fields with valid values
```

## Best Practices

1. Memory Types
   - Always include `procedural` type
   - Add `semantic` for architectural tasks
   - Add `working` for active development

2. References
   - Link related decisions
   - Reference dependent tasks
   - Update when dependencies change

3. Status Updates
   - Keep status current
   - Update timestamps
   - Document state changes

4. Front Matter Maintenance
   - Validate before commits
   - Keep references current
   - Use correct formats

## Related Commands
- `/aegis start`: Initialize development session
- `/aegis save`: Save task progress
- `/aegis context`: View task context

## See Also
- [Memory Types](../memory_types.md)
- [Front Matter Validation](../validation.md)
- [Task Templates](../templates.md#task-template)