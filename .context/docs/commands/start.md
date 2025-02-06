 ---
type: command_doc
command: "start"
category: "core"
behavior_version: "1.0"
validation_required: true
state_changes: true
memory_types: [semantic, working, episodic]
---

# Command: /aegis start

## Behavior Specification

### Input Validation
```yaml
required_args: []
optional_args: []
flags: []

validation_rules:
  - rule: "framework_initialized"
    error: "Framework not initialized. Run /aegis init first"
  - rule: "AI_INSTRUCTIONS.md exists"
    error: "Core framework file missing"
```

### State Requirements
```yaml
required_files:
  - path: ".context/AI_INSTRUCTIONS.md"
    description: "Framework behavior rules"
  - path: ".context/current_state.md"
    description: "Project state tracking"
  - path: ".context/roadmap.md"
    description: "Project direction"

required_state:
  - "Framework initialized"
  - "No active session in progress"

preconditions:
  - "All memory types accessible"
  - "State files readable"
  - "No state corruption"
```

### State Changes
```yaml
creates:
  - path: ".context/sessions/${timestamp}_session.md"
    description: "New session record"
    template: "session_template"

modifies:
  - path: ".context/current_state.md"
    description: "Update working state"
    scope: "Current focus and context"

reads:
  - path: ".context/tasks/active/*"
    description: "Load active tasks"
  - path: ".context/tasks/planned/*"
    description: "Check planned tasks"
  - path: ".context/sessions/*"
    description: "Review recent sessions"
```

### Memory Integration
```yaml
reads:
  - type: "semantic"
    purpose: "Load framework rules and patterns"
  - type: "episodic"
    purpose: "Review recent development history"
  - type: "procedural"
    purpose: "Load active task procedures"
  - type: "working"
    purpose: "Check current project state"

writes:
  - type: "working"
    purpose: "Set current focus and context"
  - type: "episodic"
    purpose: "Record session start"
```

### Error Handling
```yaml
errors:
  - condition: "Framework not initialized"
    response: "Show initialization requirement"
    recovery: "Suggest running /aegis init"
  
  - condition: "Missing core files"
    response: "List missing files"
    recovery: "Suggest framework repair steps"

  - condition: "State corruption"
    response: "Show corruption details"
    recovery: "Suggest state recovery steps"

  - condition: "Active session exists"
    response: "Show active session warning"
    recovery: "Suggest saving or discarding current session"
```

### Response Format
```yaml
success:
  - show: "Session initialization summary"
    format: |
      1. Current project state
      2. Active tasks
      3. Recent changes
      4. Available next steps

failure:
  - show: "Error with specific reason"
    format: "Error details with recovery steps"
```

## Implementation Rules

1. Context Loading:
   - Load AI_INSTRUCTIONS.md first
   - Validate all memory types
   - Check state consistency
   - Verify file integrity

2. State Processing:
   - Load current_state.md
   - Check roadmap.md
   - Review active tasks
   - Load recent sessions

3. Session Focus:
   - Identify active tasks
   - Note current priorities
   - Check recent changes
   - List open questions

## Examples

### Example One: Normal Start
```yaml
input: "/aegis start"
validation:
  - check: "Framework initialized"
    result: "pass"
  - check: "Core files present"
    result: "pass"
response:
  - action: "Initialize new session"
    output: "Project context and next steps"
```

### Example Two: Recovery Start
```yaml
input: "/aegis start"
validation:
  - check: "State consistency"
    result: "fail"
response:
  - action: "Show recovery options"
    output: "State issues and repair steps"
```

## Integration Points

1. **Memory System**:
   ```yaml
   integration:
     - system: "memory"
       types: ["semantic", "episodic", "procedural", "working"]
       purpose: "Full context loading"
   ```

2. **File System**:
   ```yaml
   integration:
     - system: "files"
       paths: [".context/*"]
       purpose: "Framework state access"
   ```

3. **State Management**:
   ```yaml
   integration:
     - system: "state"
       components: ["current_state", "tasks", "sessions"]
       purpose: "Project context management"
   ```

## Validation Flow
```yaml
flow:
  - step: "Framework Check"
    checks: ["initialization", "core_files"]
    success: "Load Context"
    failure: "Show Setup Requirements"
  
  - step: "Load Context"
    checks: ["state_consistency", "memory_access"]
    success: "Process State"
    failure: "Show Recovery Steps"
  
  - step: "Process State"
    checks: ["active_tasks", "recent_changes"]
    success: "Set Focus"
    failure: "Show State Issues"
  
  - step: "Set Focus"
    checks: ["priorities", "next_steps"]
    success: "Show Summary"
    failure: "Show Focus Issues"
```

## Context Loading Order
```yaml
sequence:
  1: "AI_INSTRUCTIONS.md"
  2: "current_state.md"
  3: "roadmap.md"
  4: "active tasks"
  5: "recent sessions"

validation:
  - rule: "Load in correct sequence"
  - rule: "Validate each component"
  - rule: "Maintain dependencies"
  - rule: "Handle missing items"
```