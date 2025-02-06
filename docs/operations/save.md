# Save Pattern

The save pattern is used to preserve development session progress, create session logs, update task status, and maintain project state consistency.

## Pattern Definition

```yaml
# Save Operation Pattern
version: 1.0
command: save
description: Preserve session progress and update state

# Operation Flow
flow:
  pre_checks:
    - framework_ready: {verify: framework_check, error: "Framework not ready"}
    - session_active: {verify: session_exists, error: "No active session"}
  
  steps:
    1_create_session_log:
      action: create_log
      template: sessions/TEMPLATE.md
      content:
        - timestamp: {type: iso8601}
        - duration: {from: session_start}
        - tasks: {from: active_tasks}
        - changes: {from: working_memory}
        - decisions: {from: working_memory}
    
    2_update_tasks:
      action: process_tasks
      operations:
        - update_progress: {from: working_memory}
        - check_completion: {criteria: [all_steps, validation]}
        - move_completed: {to: completed, if: done}
        - update_status: {in: current_state}
    
    3_create_decisions:
      action: process_decisions
      criteria:
        - architecture: {type: design_choice}
        - technology: {type: tech_selection}
        - pattern: {type: implementation}
        - security: {type: security_measure}
        - breaking: {type: breaking_change}
      template: decisions/TEMPLATE.md
    
    4_update_state:
      action: update_state
      files:
        - current_state: {update: [tasks, progress, focus]}
        - roadmap: {update: [milestones, priorities]}
      validate: [consistency, references]
    
    5_create_summary:
      action: generate_summary
      include:
        - session: {duration, tasks, changes}
        - progress: {completed, remaining}
        - decisions: {count, types}
        - state: {updates, consistency}

# Validation Rules
validation:
  session_log:
    required: [timestamp, duration, tasks, changes]
    format: markdown
    naming: "YYYY-MM-DD_HHMM"
  
  task_updates:
    check: [progress, status, location]
    verify: [references, consistency]
  
  decisions:
    required: [type, context, rationale]
    format: markdown
    references: [tasks, changes]
  
  state_updates:
    verify: [consistency, references, timestamps]
    resolve: [conflicts, missing_refs]

# Error Handling
errors:
  no_session:
    msg: "No active session found"
    action: show_session_status
    help: "Start a new session with /aegis start"
  
  save_failed:
    msg: "Failed to save session progress"
    action: show_error_details
    help: "Check file permissions and try again"
  
  state_conflict:
    msg: "State update conflicts detected"
    action: show_conflicts
    help: "Resolve conflicts and try again"
  
  invalid_changes:
    msg: "Invalid changes detected"
    action: show_invalid
    help: "Review and correct changes"

# File Operations
files:
  session_log:
    template: sessions/TEMPLATE.md
    location: sessions/
    naming: date_time
  
  decisions:
    template: decisions/TEMPLATE.md
    location: decisions/
    naming: type_description
  
  state:
    current: current_state.md
    roadmap: roadmap.md
    backup: {create: true, location: .backup/}
```

## Usage

The save pattern is used to:
1. Create session logs
2. Update task progress
3. Record decisions
4. Update project state
5. Generate summaries

## Process Steps

1. **Session Logging**
   - Create session log file
   - Record timestamp and duration
   - Document tasks and changes
   - Note important decisions
   - Save working memory

2. **Task Processing**
   - Update task progress
   - Check completion status
   - Move completed tasks
   - Update task references
   - Maintain consistency

3. **Decision Recording**
   - Identify significant changes
   - Create decision records
   - Link to related tasks
   - Document rationale
   - Update references

4. **State Updates**
   - Update current state
   - Check roadmap progress
   - Validate consistency
   - Resolve conflicts
   - Create backups

## File Management

1. **Session Logs**
   - Use template structure
   - Follow naming convention
   - Include all required fields
   - Maintain references
   - Ensure readability

2. **Decision Records**
   - Categorize by type
   - Include context
   - Document rationale
   - Link related items
   - Follow template

3. **State Files**
   - Update consistently
   - Maintain references
   - Create backups
   - Resolve conflicts
   - Validate integrity

## Error Recovery

1. **No Session**
   ```
   Error: No active session found
   Action: Show session status
   Help: Start a new session first
   ```

2. **Save Failed**
   ```
   Error: Failed to save progress
   Action: Show error details
   Help: Check permissions and retry
   ```

3. **State Conflict**
   ```
   Error: State conflicts detected
   Action: Show specific conflicts
   Help: Resolve conflicts and retry
   ```

4. **Invalid Changes**
   ```
   Error: Invalid changes found
   Action: Show invalid items
   Help: Review and correct changes
   ```

## Integration

The save pattern integrates with:
1. Session management
2. Task tracking
3. Decision recording
4. State maintenance
5. Progress reporting

## Related Patterns

- [Framework Check](framework_check.md) - Validates before saving
- [Start](start.md) - Creates sessions to save
- [Task](task.md) - Updates task progress
- [Status](status.md) - Shows save results 