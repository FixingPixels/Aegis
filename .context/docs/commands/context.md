---
type: command_doc
command: "context"
category: "core"
behavior_version: "1.0"
validation_required: true
state_changes: false
memory_types: [working, episodic, semantic]
---

# Command: /aegis context

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
  - path: ".context/decisions/*"
    description: "Recent decisions"
    optional: true

required_state:
  - "Framework initialized"

preconditions:
  - "State files readable"
  - "Context directories accessible"
  - "Recent history available"
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
    limit: "most_recent"
  
  - path: ".context/tasks/active/*"
    description: "Active task details"
    scope: ["status", "progress"]
    limit: "current_only"
  
  - path: ".context/sessions/*"
    description: "Recent session history"
    scope: ["changes", "decisions"]
    limit: "last_session"
  
  - path: ".context/decisions/*"
    description: "Recent decisions"
    scope: ["status", "impact"]
    limit: "last_3_decisions"
```

### Memory Integration
```yaml
reads:
  - type: "working"
    purpose: "Current project focus and state"
  - type: "episodic"
    purpose: "Recent development context"
  - type: "semantic"
    purpose: "Project patterns and decisions"

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

  - condition: "No recent context"
    response: "Show limited context"
    recovery: "Suggest starting new session"

  - condition: "Context corruption"
    response: "Show available context"
    recovery: "Suggest context repair steps"
```

### Response Format
```yaml
success:
  - show: "Current context summary"
    format: |
      1. Active tasks
      2. Recent changes
      3. Important decisions
      4. Open questions
      5. Next steps

failure:
  - show: "Error with specific reason"
    format: "Error details with recovery steps"
```

## Implementation Rules

1. Context Collection:
   - Load current state first
   - Check active tasks
   - Review recent sessions
   - Check recent decisions

2. Relevance Filtering:
   - Focus on current work
   - Include recent changes
   - Show important decisions
   - List open questions

3. Context Building:
   - Combine state sources
   - Prioritize information
   - Highlight key points
   - Suggest next actions

## Examples

### Example One: Full Context
```yaml
input: "/aegis context"
validation:
  - check: "All context available"
    result: "pass"
response:
  - action: "Show full context"
    output: |
      Current Focus:
        - Active tasks
        - Recent progress
      Recent Changes:
        - Last session
        - Key decisions
      Next Steps:
        - Available actions
```

### Example Two: Limited Context
```yaml
input: "/aegis context"
validation:
  - check: "Limited context"
    result: "pass"
response:
  - action: "Show available context"
    output: |
      Available Information:
        - Current state
        - Basic focus
      Suggested Actions:
        - Start session
        - Initialize work
```

## Integration Points

1. **State Management**:
   ```yaml
   integration:
     - system: "state"
       components: ["current_state", "focus"]
       purpose: "Project state tracking"
   ```

2. **History Tracking**:
   ```yaml
   integration:
     - system: "history"
       components: ["sessions", "decisions"]
       purpose: "Recent context tracking"
   ```

3. **Task Management**:
   ```yaml
   integration:
     - system: "tasks"
       components: ["active", "progress"]
       purpose: "Current work tracking"
   ```

## Context Collection Flow
```yaml
flow:
  - step: "Check State"
    checks: ["initialization", "current_state"]
    success: "Load Context"
    failure: "Show Basic State"
  
  - step: "Load Context"
    checks: ["active_tasks", "recent_history"]
    success: "Build Summary"
    failure: "Show Limited Context"
  
  - step: "Process History"
    checks: ["sessions", "decisions"]
    success: "Include History"
    failure: "Skip History"
  
  - step: "Build Response"
    checks: ["relevance", "priority"]
    success: "Show Full Context"
    failure: "Show Partial Context"
```

## Context Building Rules
```yaml
rules:
  - scope: "current_state"
    checks:
      - "Focus is clear"
      - "State is current"
      - "Progress tracked"
      - "Next steps defined"

  - scope: "recent_history"
    checks:
      - "Changes documented"
      - "Decisions recorded"
      - "Progress noted"
      - "Issues tracked"

  - scope: "relevance"
    checks:
      - "Time-based filtering"
      - "Priority ordering"
      - "Impact assessment"
      - "Action relevance"

validation:
  - rule: "Context is current"
  - rule: "Information relevant"
  - rule: "Actions clear"
  - rule: "Progress visible"
``` 