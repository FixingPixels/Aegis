# Save Command

The `aegis save` command preserves session progress and updates project memory, ensuring proper front matter validation across all affected files.

## Usage
```bash
/aegis save
```

## Front Matter Requirements

### Session Log Front Matter
```yaml
---
id: SESSION-YYYYMMDDHHMMSS    # Timestamp-based session ID
title: "Session Summary"       # Clear session description
created: YYYY-MM-DDTHH:mm:ssZ # Creation timestamp (ISO 8601)
updated: YYYY-MM-DDTHH:mm:ssZ # Last update timestamp (ISO 8601)
memory_types: [episodic]      # Must include episodic
focus: "Current Focus"        # Session focus area
participants: []              # Session participants
objectives: []                # Session objectives
references: []                # Related file references
---
```

### Memory Type Rules
- **Required**: `episodic`
- **Optional**: `semantic`, `working`
- **Maximum**: 3 memory types
- **Valid Combinations**:
  - `[episodic]`
  - `[episodic, semantic]`
  - `[episodic, working]`
  - `[episodic, semantic, working]`

## Validation Process

### Pre-Save Validation
1. Front Matter Checks:
   ```yaml
   - Existence: Front matter present
   - Format: Valid YAML
   - Required Fields: All present
   - Memory Types: Valid combination
   - References: Exist and valid
   ```

2. Content Validation:
   ```yaml
   - Required Sections:
     - Progress Summary
     - Changes Made
     - Next Steps
   - Optional Sections:
     - Decisions Made
     - Insights
     - Notes
   ```

3. State Updates:
   ```yaml
   - Task Status: Valid transitions
   - Timestamps: ISO8601 format
   - References: Cross-referenced
   ```

## Error Handling

### Critical Errors (Block Save)
```yaml
- Missing front matter
- Invalid front matter format
- Missing required fields
- Invalid memory type combination
- Missing required sections
```

### Warnings (Allow with Notice)
```yaml
- Invalid references
- Missing optional sections
- Suboptimal memory type combination
```

## Examples

### Creating Session Log
```yaml
---
id: SESSION-20240206223000
title: "Feature Implementation Progress"
created: 2024-02-06T22:30:00Z
updated: 2024-02-06T22:30:00Z
memory_types: [episodic, working]
focus: "Front Matter Validation"
participants: ["Developer"]
objectives: ["Complete validation implementation"]
references: ["TASK-008"]
---

## Progress Summary
- Implemented front matter validation
- Updated operation patterns
- Enhanced documentation

## Changes Made
1. Code Updates:
   - Added validation hooks
   - Enhanced error handling
   - Updated templates

## Next Steps
1. Complete command documentation
2. Update cross-referencing guide
3. Enhance getting started guide
```

### Updating Task Status
```yaml
# Original Task Front Matter
---
id: TASK-008
status: active
updated: 2024-02-06T21:30:00Z
---

# Updated After Save
---
id: TASK-008
status: active
updated: 2024-02-06T22:30:00Z  # Automatically updated
references: ["SESSION-20240206223000"]  # Session reference added
---
```

## State Transitions

### Task Updates
```yaml
validation:
  pre_update:
    - front_matter_valid
    - status_transition_valid
    - references_exist
  
  post_update:
    - timestamps_updated
    - references_updated
    - state_consistent
```

### Session Creation
```yaml
validation:
  pre_create:
    - template_valid
    - front_matter_complete
    - references_valid
  
  post_create:
    - content_complete
    - cross_references_updated
    - state_consistent
```

## Best Practices

1. Session Logs
   - Use clear titles
   - Document all changes
   - Link related tasks
   - Include decisions made

2. Front Matter
   - Keep timestamps current
   - Maintain references
   - Use correct memory types
   - Validate before saving

3. Content Organization
   - Use required sections
   - Be specific in summaries
   - Document decisions
   - Plan next steps

4. State Management
   - Update task statuses
   - Record decisions
   - Maintain references
   - Ensure consistency

## Related Commands
- `/aegis task`: Manage tasks
- `/aegis context`: View context
- `/aegis status`: Check state

## See Also
- [Memory Types](../memory_types.md)
- [Front Matter Validation](../validation.md)
- [Session Templates](../templates.md#session-template)