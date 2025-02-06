---
type: command_doc
command: "status"
category: "core"
behavior_version: "1.0"
validation_required: true
state_changes: false
memory_types: [working, episodic]
---

# Command: /aegis status

## Behavior Specification

### Input Validation
```yaml
required_args: []
optional_args: []
flags: []

validation_rules:
  - rule: "framework_initialized"
    error: "Framework not initialized. Run /aegis init first"
  - rule: "current_state.md exists"
    error: "State file missing or corrupted"
```

### State Requirements
```yaml
required_files:
  - path: ".context/current_state.md"
    description: "Project state tracking"
  - path: ".context/tasks/active/*"
    description: "Active tasks"
    optional: true
  - path: ".context/sessions/*"
    description: "Recent sessions"
    optional: true

required_state:
  - "Framework initialized"

preconditions:
  - "State files readable"
  - "Task directory accessible"
  - "Session logs accessible"
```

### State Changes
```yaml
creates: []
modifies: []
moves: []
deletes: []

reads:
  - path: ".context/current_state.md"
    description: "Current project state"
    scope: ["current_focus", "active_development"]
  
  - path: ".context/tasks/active/*"
    description: "Active task details"
    scope: ["status", "progress", "blockers"]
  
  - path: ".context/sessions/*"
    description: "Recent session history"
    scope: ["changes", "decisions"]
    limit: "last 3 sessions"
```

### Memory Integration
```yaml
reads:
  - type: "working"
    purpose: "Current project focus and state"
  - type: "episodic"
    purpose: "Recent development history"

writes: []
```

### Error Handling
```yaml
errors:
  - condition: "Framework not initialized"
    response: "Show initialization requirement"
    recovery: "Suggest running /aegis init"
  
  - condition: "State file missing"
    response: "Show state file error"
    recovery: "Suggest framework repair"

  - condition: "Read permission denied"
    response: "Show permission error"
    recovery: "Suggest checking file permissions"
```

### Response Format
```yaml
success:
  - show: "Current working memory"
    format: |
      1. Active task progress
      2. Recent changes
      3. Current focus
      4. Pending decisions
      5. Next steps

failure:
  - show: "Error with specific reason"
    format: "Error details with recovery steps"
```

## Implementation Rules

1. Status Collection:
   - Check active tasks first
   - Review recent changes
   - Identify current focus
   - List pending decisions

2. Progress Assessment:
   - Task completion status
   - Recent achievements
   - Current blockers
   - Open questions

3. Context Building:
   - Active development state
   - Recent session history
   - Current priorities
   - Available next steps

## Examples

### Example One: Active Development
```yaml
input: "/aegis status"
validation:
  - check: "Active tasks exist"
    result: "pass"
response:
  - action: "Show development status"
    output: |
      Active Tasks:
        - Task progress
        - Current blockers
      Recent Changes:
        - Latest updates
      Next Steps:
        - Available actions
```

### Example Two: No Active Tasks
```yaml
input: "/aegis status"
validation:
  - check: "No active tasks"
    result: "pass"
response:
  - action: "Show project status"
    output: |
      Project State:
        - Current focus
        - Available tasks
      Next Steps:
        - Start new task
        - Plan next phase
```

## Integration Points

1. **Task System**:
   ```yaml
   integration:
     - system: "tasks"
       components: ["active", "progress"]
       purpose: "Task status tracking"
   ```

2. **Session System**:
   ```yaml
   integration:
     - system: "sessions"
       components: ["recent", "changes"]
       purpose: "Recent history tracking"
   ```

3. **State System**:
   ```yaml
   integration:
     - system: "state"
       components: ["current_state", "focus"]
       purpose: "Project state tracking"
   ```

## Status Collection Flow
```yaml
flow:
  - step: "Check Framework"
    checks: ["initialization", "state_file"]
    success: "Load State"
    failure: "Show Setup Error"
  
  - step: "Load State"
    checks: ["current_state", "active_tasks"]
    success: "Process Status"
    failure: "Show State Error"
  
  - step: "Process Status"
    checks: ["task_progress", "recent_changes"]
    success: "Build Context"
    failure: "Show Limited Status"
  
  - step: "Build Context"
    checks: ["focus", "next_steps"]
    success: "Show Full Status"
    failure: "Show Basic Status"
```

## Context Building Rules
```yaml
rules:
  - scope: "active_tasks"
    checks:
      - "Progress since last status"
      - "Current blockers"
      - "Dependencies met"
      - "Resources available"

  - scope: "recent_changes"
    checks:
      - "Changes since last save"
      - "Pending decisions"
      - "Open questions"
      - "Required actions"

  - scope: "next_steps"
    checks:
      - "Available tasks"
      - "Required decisions"
      - "Blocked items"
      - "Priority actions"

validation:
  - rule: "All scopes checked"
  - rule: "Context is current"
  - rule: "Steps are actionable"
  - rule: "Status is clear"
``` 