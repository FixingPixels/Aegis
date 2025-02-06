# Status Pattern

The status pattern is used to display the current working memory, including active tasks, recent changes, current focus, and pending decisions. It provides a quick overview of the project state without making any modifications.

## Pattern Definition

```yaml
# Status Operation Pattern
version: 1.0
command: status
description: Show current working memory and project state

# Operation Flow
flow:
  pre_checks:
    - framework_ready: {verify: framework_check, error: "Framework not ready"}
  
  steps:
    1_load_memory:
      action: load_memory
      types:
        - working: {priority: high}
        - procedural: {active_only: true}
        - episodic: {recent: true, limit: 5}
        - semantic: {relevant_only: true}
    
    2_check_tasks:
      action: analyze_tasks
      focus:
        - active: {dir: "tasks/active", pattern: "*.md"}
        - progress: {from: working_memory}
        - blockers: {from: working_memory}
        - dependencies: {from: task_refs}
    
    3_review_changes:
      action: get_changes
      sources:
        - working_memory: {recent: true}
        - session_logs: {limit: 3}
        - decisions: {pending: true}
    
    4_check_focus:
      action: analyze_focus
      current:
        - task: {from: working_memory}
        - priority: {from: current_state}
        - progress: {from: working_memory}
        - blockers: {from: working_memory}
    
    5_format_display:
      action: create_display
      sections:
        tasks:
          title: "Active Tasks"
          show: [name, progress, blockers]
          sort: priority
        
        changes:
          title: "Recent Changes"
          show: [type, description, time]
          limit: 5
        
        focus:
          title: "Current Focus"
          show: [task, progress, needs]
          highlight: blockers
        
        decisions:
          title: "Pending Decisions"
          show: [type, context, urgency]
          filter: pending

# Display Rules
display:
  format: markdown
  sections:
    - tasks: {style: list, icons: true}
    - changes: {style: timeline, compact: true}
    - focus: {style: summary, highlight: true}
    - decisions: {style: list, group_by: type}
  
  highlighting:
    - high_priority: {color: red}
    - blockers: {color: yellow}
    - progress: {color: green}
    - warnings: {color: orange}

# Memory Processing
memory:
  working:
    load: [current_task, focus, changes]
    filter: {relevant: true, recent: true}
  
  procedural:
    load: [active_tasks, workflows]
    filter: {status: active}
  
  episodic:
    load: [recent_changes, decisions]
    limit: 5
  
  semantic:
    load: [knowledge, patterns]
    filter: {relevant: true}

# Error Handling
errors:
  not_ready:
    msg: "Framework not ready"
    action: show_setup_instructions
    help: "Initialize framework first"
  
  no_memory:
    msg: "No working memory found"
    action: show_memory_status
    help: "Start a new session"
  
  load_failed:
    msg: "Failed to load memory"
    action: show_error_details
    help: "Check file access and try again"
  
  display_error:
    msg: "Display formatting failed"
    action: show_raw_data
    help: "View unformatted status"
```

## Usage

The status pattern is used to:
1. Show active tasks
2. Display recent changes
3. Present current focus
4. List pending decisions
5. Highlight important items

## Memory Types

1. **Working Memory**
   - Current task focus
   - Active changes
   - Immediate needs
   - Recent decisions
   - Current blockers

2. **Procedural Memory**
   - Active tasks
   - Task progress
   - Workflows
   - Dependencies
   - Validation steps

3. **Episodic Memory**
   - Recent changes
   - Session history
   - Decision points
   - Progress markers
   - Important events

4. **Semantic Memory**
   - Project knowledge
   - Design patterns
   - Best practices
   - Requirements
   - Constraints

## Display Sections

1. **Active Tasks**
   - Task names
   - Progress status
   - Priority levels
   - Blockers
   - Dependencies

2. **Recent Changes**
   - Change types
   - Timestamps
   - Descriptions
   - Related tasks
   - Impact levels

3. **Current Focus**
   - Active task
   - Progress state
   - Next steps
   - Blockers
   - Requirements

4. **Pending Decisions**
   - Decision types
   - Context
   - Urgency
   - Dependencies
   - Impact

## Error Recovery

1. **Framework Not Ready**
   ```
   Error: Framework not ready
   Action: Show setup instructions
   Help: Initialize framework first
   ```

2. **No Memory**
   ```
   Error: No working memory
   Action: Show memory status
   Help: Start a new session
   ```

3. **Load Failed**
   ```
   Error: Memory load failed
   Action: Show error details
   Help: Check file access
   ```

4. **Display Error**
   ```
   Error: Display formatting failed
   Action: Show raw data
   Help: View unformatted status
   ```

## Integration

The status pattern integrates with:
1. Memory management
2. Task tracking
3. Change monitoring
4. Decision tracking
5. Progress reporting

## Related Patterns

- [Framework Check](framework_check.md) - Validates framework state
- [Start](start.md) - Initializes working memory
- [Save](save.md) - Updates state before status
- [Task](task.md) - Provides task details 