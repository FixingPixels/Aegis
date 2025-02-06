# Framework Check Pattern

The framework check pattern is used to validate the framework structure and readiness before executing commands. It ensures all required directories and files exist, have correct permissions, and maintain proper references.

## Pattern Definition

```yaml
# Framework Check Operation Pattern
version: 1.0
command: framework_check
description: Verify framework structure and readiness

# Operation Flow
flow:
  checks:
    - context_dir: {verify: context_dir_exists, error: "Missing .context directory"}
    - core_files: {verify: core_files_exist, error: "Missing required files"}
    - structure: {verify: valid_structure, error: "Invalid framework structure"}
  
  steps:
    1_verify_structure:
      action: check_structure
      required_dirs:
        - tasks: {subdirs: [active, planned, hold, completed]}
        - sessions
        - decisions
        - plan
      required_files:
        - AI_INSTRUCTIONS.md
        - current_state.md
        - roadmap.md
    
    2_verify_templates:
      action: check_templates
      templates:
        - task: {path: "tasks/TEMPLATE.md"}
        - session: {path: "sessions/TEMPLATE.md"}
        - decision: {path: "decisions/TEMPLATE.md"}
    
    3_verify_state:
      action: check_state
      files:
        - current_state: {validate: [exists, format, consistency]}
        - roadmap: {validate: [exists, format]}

# Validation Rules
validation:
  structure:
    dirs: [tasks, sessions, decisions, plan]
    files: [AI_INSTRUCTIONS.md, current_state.md, roadmap.md]
    templates: [task, session, decision]
  
  state:
    verify: [memory_types, references, timestamps]
    resolve: [conflicts, missing_refs, invalid_states]

# Error Handling
errors:
  no_context:
    msg: "Framework not found"
    action: show_setup_instructions
    help: "Copy .context directory to your project"
  
  missing_structure:
    msg: "Invalid framework structure"
    action: list_missing
    help: "Ensure all required directories exist"
  
  missing_files:
    msg: "Required files missing"
    action: list_missing
    help: "Ensure all required files exist"
  
  state_invalid:
    msg: "State consistency issues"
    action: show_issues
    help: "Fix state inconsistencies"
```

## Usage

The framework check pattern is used by:
1. All commands during pre-checks
2. Start command during initialization
3. Save command before state updates
4. Task command before file operations

## Validation Steps

1. **Directory Structure**
   - Verify `.context` directory exists
   - Check all required subdirectories
   - Validate directory permissions
   - Ensure correct structure

2. **Required Files**
   - Check core files exist
   - Verify template files
   - Validate file permissions
   - Check file formats

3. **State Consistency**
   - Validate memory types
   - Check references
   - Verify timestamps
   - Resolve conflicts

## Error Recovery

1. **Missing Framework**
   ```
   Error: Framework not found
   Action: Show setup instructions
   Help: Copy .context directory to project
   ```

2. **Invalid Structure**
   ```
   Error: Invalid framework structure
   Action: List missing components
   Help: Create required directories
   ```

3. **Missing Files**
   ```
   Error: Required files missing
   Action: List missing files
   Help: Copy or create required files
   ```

4. **State Issues**
   ```
   Error: State consistency issues
   Action: Show specific problems
   Help: Fix inconsistencies
   ```

## Integration

The framework check pattern integrates with:
1. Command pre-checks
2. Framework validation
3. State management
4. Error handling
5. User guidance

## Related Patterns

- [Start](start.md) - Uses framework check during initialization
- [Save](save.md) - Validates before state updates
- [Task](task.md) - Checks before file operations
- [Status](status.md) - Verifies before state display 