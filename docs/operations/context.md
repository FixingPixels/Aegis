# Context Pattern

The context pattern is used to perform quick refreshes of the current working context, showing relevant information for current work without loading the complete project state.

## Pattern Definition

```yaml
# Context Operation Pattern
version: 1.0
command: context
description: Quick context refresh and memory update

# Operation Flow
flow:
  pre_checks:
    - framework_ready: {verify: framework_check, error: "Framework not ready"}
  
  steps:
    1_load_context:
      action: load_context
      files:
        - current_state: {path: "current_state.md", required: true}
        - active_tasks: {dir: "tasks/active", pattern: "*.md"}
        - recent_sessions: {dir: "sessions", pattern: "*.md", limit: 3}
    
    2_process_memory:
      action: process_memory
      types:
        - working: {from: current_state}
        - procedural: {from: active_tasks}
        - episodic: {from: recent_sessions}
    
    3_show_context:
      action: show_context
      display:
        - current: {focus: true, tasks: true}
        - recent: {changes: true, decisions: true}
        - next: {actions: true, priorities: true}

# Memory Processing
memory:
  types:
    read: [working, procedural, episodic]
    no_write: true
  
  processing:
    on_load: [validate, cross_reference]
    on_display: [summarize, prioritize]
  
  filters:
    working:
      - current_focus: {priority: high}
      - active_changes: {recent: true}
      - immediate_needs: {urgent: true}
    
    procedural:
      - active_tasks: {status: active}
      - current_workflows: {in_progress: true}
      - pending_validations: {required: true}
    
    episodic:
      - recent_changes: {limit: 5}
      - key_decisions: {pending: true}
      - important_events: {impact: high}

# Display Rules
display:
  format: markdown
  sections:
    current:
      title: "Current Context"
      show: [focus, tasks, needs]
      style: summary
    
    recent:
      title: "Recent Activity"
      show: [changes, decisions]
      style: timeline
    
    next:
      title: "Next Steps"
      show: [actions, priorities]
      style: list

# Validation Rules
validation:
  context_files:
    required: [current_state.md]
    optional: [tasks/*, sessions/*]
    check: [exists, readable]
  
  memory:
    types: [working, procedural, episodic]
    verify: [consistency, references]
  
  display:
    required: [current, recent, next]
    validate: [completeness, relevance]

# Error Handling
errors:
  not_ready:
    msg: "Framework not ready"
    action: show_setup_instructions
    help: "Copy .context directory to your project"
  
  missing_state:
    msg: "Current state file missing"
    action: list_missing
    help: "Ensure current_state.md exists"
  
  invalid_state:
    msg: "Invalid state format"
    action: show_format
    help: "Check state file format"
  
  load_failed:
    msg: "Failed to load context"
    action: show_error
    help: "Check file access and try again"

# Important Notes
notes:
  usage:
    - quick_refresh: "Fast context update"
    - read_only: "No state changes"
    - memory_types: "All memory systems"
  
  focus:
    - current_work: "Active tasks"
    - recent_changes: "Latest updates"
    - next_actions: "Immediate steps"
```

## Usage

The context pattern is used to:
1. Quick context refresh
2. Show current focus
3. Display recent changes
4. List next actions
5. Highlight priorities

## Memory Types

1. **Working Memory**
   - Current focus
   - Active changes
   - Immediate needs
   - Urgent items
   - Current blockers

2. **Procedural Memory**
   - Active tasks
   - Current workflows
   - Validation needs
   - Process steps
   - Task progress

3. **Episodic Memory**
   - Recent changes
   - Key decisions
   - Important events
   - Progress markers
   - Significant updates

## Display Sections

1. **Current Context**
   - Active focus
   - Current tasks
   - Immediate needs
   - Open issues
   - Required actions

2. **Recent Activity**
   - Latest changes
   - New decisions
   - Progress updates
   - Important events
   - Status changes

3. **Next Steps**
   - Required actions
   - Priority items
   - Pending tasks
   - Upcoming work
   - Important deadlines

## Error Recovery

1. **Framework Issues**
   ```
   Error: Framework not ready
   Action: Show setup instructions
   Help: Copy .context directory
   ```

2. **Missing State**
   ```
   Error: State file missing
   Action: List missing files
   Help: Create state file
   ```

3. **Invalid Format**
   ```
   Error: Invalid state format
   Action: Show format guide
   Help: Check file structure
   ```

4. **Load Failed**
   ```
   Error: Context load failed
   Action: Show error details
   Help: Check file access
   ```

## Integration

The context pattern integrates with:
1. Memory management
2. Task tracking
3. Change monitoring
4. Progress reporting
5. Priority management

## Related Patterns

- [Framework Check](framework_check.md) - Validates framework state
- [Start](start.md) - Initializes full context
- [Status](status.md) - Shows detailed state
- [Task](task.md) - Manages active tasks 