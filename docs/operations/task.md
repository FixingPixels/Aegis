# Task Pattern

The task pattern is used to manage and track development tasks, handling task creation, movement between states, progress tracking, and dependency management.

## Pattern Definition

```yaml
# Task Operation Pattern
version: 1.0
command: task
description: Task management and tracking

# Operation Flow
flow:
  pre_checks:
    - framework_ready: {verify: framework_check, error: "Framework not ready"}
  
  steps:
    1_load_tasks:
      action: load_tasks
      files:
        - active: {dir: "tasks/active", pattern: "*.md"}
        - planned: {dir: "tasks/planned", pattern: "*.md"}
        - template: {path: "tasks/TEMPLATE.md", required: true}
    
    2_process_command:
      action: handle_task_command
      commands:
        - new: {template: true, location: "tasks/planned"}
        - list: {show: [active, planned], sort: priority}
        - show: {active: true, details: true}
        - move: {between: [planned, active, completed, hold]}
    
    3_update_state:
      action: update_task_state
      update:
        - status: {if: moved}
        - progress: {if: changed}
        - timestamps: {always: true}

# Task Management
tasks:
  locations:
    - planned: "tasks/planned/*.md"
    - active: "tasks/active/*.md"
    - completed: "tasks/completed/*.md"
    - hold: "tasks/hold/*.md"
  
  transitions:
    - planned_to_active: {update: status}
    - active_to_completed: {update: [status, completion]}
    - active_to_hold: {update: [status, reason]}

# Task Template
template:
  frontmatter:
    required:
      - type: task
      - status: [planned, active, completed, blocked]
      - created: timestamp
      - memory_types: [procedural, working]
      - priority: [high, medium, low]
    
    optional:
      - due: date
      - tags: []
      - links: []
      - aliases: []
      - mvp_priority: number
  
  sections:
    - objective: "Clear task goal"
    - requirements: "Task requirements"
    - implementation: "Progress tracking"
    - success_criteria: "Completion criteria"

# Validation Rules
validation:
  task_files:
    template: {path: "tasks/TEMPLATE.md", required: true}
    directories: [active, planned, completed, hold]
    check: [exists, readable, writable]
  
  task_content:
    required: [id, title, status, priority]
    validate: [format, completeness]
  
  task_movement:
    verify: [valid_transition, status_update]
    check: [dependencies, blockers]

# Error Handling
errors:
  not_ready:
    msg: "Framework not ready"
    action: show_setup_instructions
    help: "Copy .context directory to your project"
  
  missing_template:
    msg: "Task template missing"
    action: list_missing
    help: "Ensure tasks/TEMPLATE.md exists"
  
  invalid_task:
    msg: "Invalid task format"
    action: show_format
    help: "Check task file format"
  
  invalid_move:
    msg: "Invalid task transition"
    action: show_valid_moves
    help: "Check task dependencies"

# Memory Processing
memory:
  types:
    primary: [procedural, working]
    secondary: [semantic]
  
  processing:
    on_create: [set_memory_types, init_tracking]
    on_move: [update_status, record_transition]
    on_complete: [record_completion, update_refs]

# Next Steps
next_steps:
  new_task:
    suggest: implementation_start
    reason: "Begin task implementation"
  
  completed_task:
    suggest: next_task
    reason: "Move to next task"
  
  blocked_task:
    suggest: resolve_blockers
    reason: "Address blocking issues"
```

## Usage

The task pattern is used to:
1. Create new tasks
2. Move tasks between states
3. Track task progress
4. Manage dependencies
5. Update task status

## Task States

1. **Planned**
   - Initial task state
   - Ready for work
   - Dependencies met
   - Resources available

2. **Active**
   - Currently in progress
   - Being implemented
   - Under development
   - Being reviewed

3. **Completed**
   - Work finished
   - Validation passed
   - Documentation done
   - References updated

4. **Hold**
   - Temporarily blocked
   - Awaiting resources
   - Dependencies pending
   - Issues found

## Task Structure

1. **Frontmatter**
   - Task metadata
   - Status tracking
   - Memory types
   - References
   - Priority

2. **Content Sections**
   - Clear objective
   - Requirements list
   - Implementation steps
   - Success criteria
   - Progress tracking

## Task Operations

1. **Creation**
   - Use template
   - Set metadata
   - Define scope
   - List requirements
   - Set criteria

2. **Movement**
   - Update status
   - Check dependencies
   - Validate state
   - Record transition
   - Update references

3. **Progress**
   - Track steps
   - Note blockers
   - Update status
   - Record changes
   - Validate work

## Error Recovery

1. **Framework Issues**
   ```
   Error: Framework not ready
   Action: Show setup instructions
   Help: Copy .context directory
   ```

2. **Template Missing**
   ```
   Error: Task template missing
   Action: List missing files
   Help: Create template file
   ```

3. **Invalid Format**
   ```
   Error: Invalid task format
   Action: Show format guide
   Help: Check task structure
   ```

4. **Invalid Move**
   ```
   Error: Invalid transition
   Action: Show valid moves
   Help: Check dependencies
   ```

## Integration

The task pattern integrates with:
1. Memory management
2. State tracking
3. Progress monitoring
4. Dependency handling
5. Status reporting

## Related Patterns

- [Framework Check](framework_check.md) - Validates framework state
- [Start](start.md) - Initializes task context
- [Save](save.md) - Updates task progress
- [Status](status.md) - Shows task status 