---
type: command_doc
command: "task"
category: "core"
behavior_version: "1.0"
validation_required: true
state_changes: false
memory_types: [procedural, working]
---

# Command: /aegis task

## Behavior Specification

### Input Validation
```yaml
required_args: []
optional_args: []
flags: []

validation_rules:
  - rule: "framework_initialized"
    error: "Framework not initialized. Run /aegis init first"
  - rule: "tasks_directory_exists"
    error: "Tasks directory missing or corrupted"
```

### State Requirements
```yaml
required_files:
  - path: ".context/tasks/"
    description: "Tasks directory structure"
  - path: ".context/tasks/active/"
    description: "Active tasks"
    optional: true
  - path: ".context/tasks/planned/"
    description: "Planned tasks"
    optional: true

required_state:
  - "Framework initialized"

preconditions:
  - "Task directories accessible"
  - "Task files readable"
  - "Templates available"
```

### State Changes
```yaml
creates: []
modifies: []
moves: []
deletes: []

reads:
  - path: ".context/tasks/active/*"
    description: "Active task details"
    scope: ["description", "requirements", "progress", "blockers"]
  
  - path: ".context/tasks/planned/*"
    description: "Planned task details"
    scope: ["description", "requirements", "dependencies"]
    condition: "no_active_tasks"
  
  - path: ".context/tasks/TEMPLATE.md"
    description: "Task template"
    scope: ["structure", "requirements"]
    condition: "creating_new_task"
```

### Memory Integration
```yaml
reads:
  - type: "procedural"
    purpose: "Task implementation steps and validation"
  - type: "working"
    purpose: "Current task focus and progress"

writes: []
```

### Error Handling
```yaml
errors:
  - condition: "Framework not initialized"
    response: "Show initialization requirement"
    recovery: "Suggest running /aegis init"
  
  - condition: "No tasks found"
    response: "Show task creation guidance"
    recovery: "Suggest creating new task"

  - condition: "Task file corrupted"
    response: "Show corruption details"
    recovery: "Suggest task file repair"

  - condition: "Multiple active tasks"
    response: "Show task list"
    recovery: "Suggest focusing on one task"
```

### Response Format
```yaml
success:
  - show: "Task details and progress"
    format: |
      1. Task description
      2. Implementation progress
      3. Current blockers
      4. Next steps
      5. Required resources

failure:
  - show: "Error with specific reason"
    format: "Error details with recovery steps"
```

## Implementation Rules

1. Task Focus:
   - Show active task details
   - Present implementation progress
   - List blockers and dependencies
   - Suggest next actions

2. Progress Tracking:
   - Check completion status
   - Validate requirements
   - Monitor dependencies
   - Track resources

3. Context Management:
   - Maintain task focus
   - Track dependencies
   - Note blockers
   - Plan next steps

## Examples

### Example One: Active Task
```yaml
input: "/aegis task"
validation:
  - check: "Active task exists"
    result: "pass"
response:
  - action: "Show task details"
    output: |
      Task: [description]
      Progress:
        - Completed steps
        - Current status
      Blockers:
        - Current issues
      Next Steps:
        - Implementation plan
```

### Example Two: No Active Tasks
```yaml
input: "/aegis task"
validation:
  - check: "No active tasks"
    result: "pass"
response:
  - action: "Show available tasks"
    output: |
      Status: No active tasks
      Available Tasks:
        - Planned tasks list
      Actions:
        - Start new task
        - Create task
```

## Integration Points

1. **Task Management**:
   ```yaml
   integration:
     - system: "tasks"
       components: ["active", "planned", "templates"]
       purpose: "Task tracking and creation"
   ```

2. **Progress Tracking**:
   ```yaml
   integration:
     - system: "progress"
       components: ["status", "blockers"]
       purpose: "Implementation monitoring"
   ```

3. **Resource Management**:
   ```yaml
   integration:
     - system: "resources"
       components: ["dependencies", "requirements"]
       purpose: "Resource tracking"
   ```

## Task Processing Flow
```yaml
flow:
  - step: "Check Tasks"
    checks: ["active_tasks", "planned_tasks"]
    success: "Process Tasks"
    failure: "Show Creation Options"
  
  - step: "Process Tasks"
    checks: ["task_status", "progress"]
    success: "Show Details"
    failure: "Show Issues"
  
  - step: "Check Blockers"
    checks: ["dependencies", "resources"]
    success: "Show Next Steps"
    failure: "Show Blockers"
  
  - step: "Plan Actions"
    checks: ["requirements", "availability"]
    success: "Show Plan"
    failure: "Show Limitations"
```

## Task Status Rules
```yaml
rules:
  - scope: "active_tasks"
    checks:
      - "Single task focus"
      - "Clear progress status"
      - "Known blockers"
      - "Available resources"

  - scope: "planned_tasks"
    checks:
      - "Dependencies clear"
      - "Requirements defined"
      - "Resources identified"
      - "Priority set"

  - scope: "task_creation"
    checks:
      - "Template available"
      - "Required fields"
      - "Clear objectives"
      - "Defined criteria"

validation:
  - rule: "Task state is clear"
  - rule: "Progress is measurable"
  - rule: "Next steps defined"
  - rule: "Resources tracked"
``` 