---
type: command_doc
command: "save"
category: "core"
behavior_version: "1.0"
validation_required: true
state_changes: true
memory_types: [episodic, working, semantic]
---

# Command: /aegis save

## Behavior Specification

### Input Validation
```yaml
required_args: []
optional_args: []
flags: []

validation_rules:
  - rule: "active_session_exists"
    error: "No active session to save"
  - rule: "changes_to_save"
    error: "No changes detected since last save"
```

### State Requirements
```yaml
required_files:
  - path: ".context/current_state.md"
    description: "Project state tracking"
  - path: ".context/roadmap.md"
    description: "Project direction"
  - path: ".context/sessions/TEMPLATE.md"
    description: "Session template"

required_state:
  - "Active session in progress"
  - "Framework initialized"

preconditions:
  - "State files writable"
  - "Templates accessible"
  - "No file corruption"
```

### State Changes
```yaml
creates:
  - path: ".context/sessions/${timestamp}_session.md"
    description: "Session log"
    template: "session_template"
  - path: ".context/decisions/${decision_id}.md"
    description: "Decision records for significant changes"
    template: "decision_template"
    condition: "significant_changes_made"

modifies:
  - path: ".context/current_state.md"
    description: "Update project state"
    scope: ["knowledge_base", "active_development", "technical_state", "current_focus"]
  
  - path: ".context/roadmap.md"
    description: "Update if milestones met"
    scope: ["current_focus", "achievement_log", "future_direction"]
    condition: "milestone_reached"

  - path: ".context/tasks/*"
    description: "Update task progress"
    scope: ["status", "progress", "dependencies"]
```

### Memory Integration
```yaml
reads:
  - type: "working"
    purpose: "Current session state and changes"
  - type: "episodic"
    purpose: "Recent development context"
  - type: "semantic"
    purpose: "Project patterns and milestones"

writes:
  - type: "episodic"
    purpose: "Record session progress"
  - type: "semantic"
    purpose: "Update project knowledge"
  - type: "working"
    purpose: "Update current state"
```

### Error Handling
```yaml
errors:
  - condition: "No active session"
    response: "Show session requirement"
    recovery: "Suggest starting new session"
  
  - condition: "No changes detected"
    response: "Show current state"
    recovery: "Suggest making changes or ending session"

  - condition: "Write permission denied"
    response: "Show permission error"
    recovery: "Suggest checking file permissions"

  - condition: "Template missing"
    response: "Show template error"
    recovery: "Suggest framework repair"
```

### Response Format
```yaml
success:
  - show: "Save operation summary"
    format: |
      1. Updated files list
      2. Status changes
      3. Key decisions
      4. State updates

failure:
  - show: "Error with specific reason"
    format: "Error details with recovery steps"
```

## Implementation Rules

1. Session Log Creation:
   - Record progress and decisions
   - Update task statuses
   - Note blockers/dependencies
   - Create with proper template

2. Task Progress:
   - Move completed tasks
   - Update task statuses
   - Record dependencies
   - Maintain references

3. State Updates:
   - Update current_state.md:
     - Knowledge Base: Add patterns
     - Active Development: Progress
     - Technical State: Changes
     - Current Focus: Latest
   
   - Update roadmap.md when milestones met:
     - Current Focus: Priorities
     - Achievement Log: Completions
     - Future Direction: Adjustments

4. Milestone Definition:
   - Core Framework Changes
   - Significant Feature Completion
   - Documentation Evolution
   - Process Improvements

## Examples

### Example One: Normal Save
```yaml
input: "/aegis save"
validation:
  - check: "Active session"
    result: "pass"
  - check: "Changes exist"
    result: "pass"
response:
  - action: "Create session log"
    output: "Save summary and next steps"
```

### Example Two: Milestone Save
```yaml
input: "/aegis save"
validation:
  - check: "Milestone reached"
    result: "pass"
response:
  - action: "Update roadmap and create session log"
    output: "Milestone completion and next steps"
```

## Integration Points

1. **Session Management**:
   ```yaml
   integration:
     - system: "sessions"
       components: ["logs", "progress"]
       purpose: "Record development history"
   ```

2. **Task Management**:
   ```yaml
   integration:
     - system: "tasks"
       components: ["status", "movement"]
       purpose: "Update task progress"
   ```

3. **State Management**:
   ```yaml
   integration:
     - system: "state"
       components: ["current_state", "roadmap"]
       purpose: "Update project state"
   ```

## Validation Flow
```yaml
flow:
  - step: "Check Session"
    checks: ["active_session", "changes_exist"]
    success: "Process Changes"
    failure: "Show Requirements"
  
  - step: "Process Changes"
    checks: ["task_updates", "state_changes"]
    success: "Check Milestone"
    failure: "Show Process Error"
  
  - step: "Check Milestone"
    checks: ["milestone_criteria", "achievement_status"]
    success: "Update Roadmap"
    failure: "Skip Roadmap"
  
  - step: "Create Records"
    checks: ["session_log", "decisions"]
    success: "Show Summary"
    failure: "Show Record Error"
```

## Milestone Criteria
```yaml
criteria:
  - type: "core_framework"
    checks:
      - "New command implementation"
      - "Major system enhancement"
      - "Core workflow modification"
      - "Framework architecture change"

  - type: "feature_completion"
    checks:
      - "MVP priority tasks completed"
      - "System-wide validation added"
      - "New memory type integration"
      - "Cross-cutting functionality"

  - type: "documentation"
    checks:
      - "Major documentation restructure"
      - "New documentation system"
      - "Complete guide additions"
      - "System-wide updates"

  - type: "process"
    checks:
      - "New validation requirements"
      - "Enhanced error handling"
      - "Workflow optimizations"
      - "System-wide standards"

validation:
  - rule: "At least one criteria category met"
  - rule: "Multiple system impacts"
  - rule: "User experience improvement"
  - rule: "Development direction change"
``` 