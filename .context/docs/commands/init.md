---
type: command_doc
command: "init"
category: "setup"
behavior_version: "1.0"
validation_required: true
state_changes: true
memory_types: [semantic, procedural]
---

# Command: /aegis init

## Behavior Specification

### Input Validation
```yaml
required_args:
  - name: "path"
    type: "string"
    description: "Target directory for initialization"
    validation: "Must be '.' or a valid directory name"

optional_args: []

flags: []

validation_rules:
  - rule: "path == '.' || is_valid_directory_name(path)"
    error: "Path must be '.' or a valid directory name"
  - rule: "!initialization_exists(path)"
    error: "Framework already initialized in this location"
```

### State Requirements
```yaml
required_files:
  - source: ".context/"
    description: "Framework base directory structure"
  - source: "INITIALIZATION_TEMPLATE.md"
    description: "Template for initialization record"

required_state: []

preconditions:
  - "Target directory accessible"
  - "No existing .context directory in target"
```

### State Changes
```yaml
creates:
  - path: "${target}/.context/"
    source: "cp -r"
    description: "Framework directory structure"
  - path: "${target}/.context/tasks/completed/initialization.md"
    source: "INITIALIZATION_TEMPLATE.md"
    description: "Initialization record"

modifies: []

moves: []

deletes: []
```

### Memory Integration
```yaml
reads:
  - type: "semantic"
    purpose: "Framework initialization rules"
  - type: "procedural"
    purpose: "Initialization process steps"

writes:
  - type: "episodic"
    purpose: "Record initialization event"
  - type: "semantic"
    purpose: "Store initialization state"
```

### Error Handling
```yaml
errors:
  - condition: "Directory already initialized"
    response: "Show 'Already Initialized' message and stop"
    recovery: "None - user must choose different location"
  
  - condition: "Invalid path"
    response: "Show path requirements"
    recovery: "Ask for valid path"

  - condition: "Permission denied"
    response: "Show permission error"
    recovery: "Suggest checking directory permissions"
```

### Response Format
```yaml
success:
  - show: "Initialization success message"
    format: "Directory structure summary and next steps"

failure:
  - show: "Error message with specific reason"
    format: "Error details and recovery steps if applicable"
```

## Implementation Rules

1. Directory Creation:
   - Always use `cp -r` for directory structure
   - Never use `mkdir` manually
   - Preserve all subdirectories
   - Maintain file permissions

2. Initialization Record:
   - Use INITIALIZATION_TEMPLATE.md as base
   - Replace template variables:
     - {{date}} with current timestamp
     - {{directory}} with target path
   - Preserve memory types
   - Preserve system tags

3. State Validation:
   - Check for existing initialization
   - Verify directory access
   - Validate path format
   - Ensure template exists

## Examples

### Example One: Current Directory
```yaml
input: "/aegis init ."
validation:
  - check: "Path is '.'"
    result: "pass"
  - check: "Not initialized"
    result: "pass"
response:
  - action: "Copy .context to current directory"
    output: "Success message with structure"
```

### Example Two: New Directory
```yaml
input: "/aegis init my_project"
validation:
  - check: "Valid directory name"
    result: "pass"
  - check: "Not initialized"
    result: "pass"
response:
  - action: "Create directory and copy .context"
    output: "Success message with structure"
```

## Integration Points

1. **File System**:
   ```yaml
   integration:
     - system: "files"
       paths: [".context/", "INITIALIZATION_TEMPLATE.md"]
       purpose: "Framework initialization"
   ```

2. **State Management**:
   ```yaml
   integration:
     - system: "state"
       components: ["initialization_record"]
       purpose: "Track framework state"
   ```

## Validation Flow
```yaml
flow:
  - step: "Validate Path"
    checks: ["path_format", "path_access"]
    success: "Check Initialization"
    failure: "Show Path Error"
  
  - step: "Check Initialization"
    checks: ["existing_context", "existing_record"]
    success: "Copy Framework"
    failure: "Show Already Initialized"
  
  - step: "Copy Framework"
    checks: ["copy_success", "record_created"]
    success: "Show Success"
    failure: "Show Copy Error"
``` 