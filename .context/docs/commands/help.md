---
type: command_doc
command: "help"
category: "core"
behavior_version: "1.0"
validation_required: true
state_changes: false
memory_types: [semantic]
---

# Command: /aegis help

## Behavior Specification

### Input Validation
```yaml
required_args: []
optional_args:
  - name: "command"
    type: "string"
    description: "Specific command to get help for"
    validation: "Must be valid command name"

flags: []

validation_rules:
  - rule: "if command provided, must be valid command"
    error: "Unknown command. Use /aegis help for list of commands"
  - rule: "framework_initialized"
    error: "Framework not initialized. Run /aegis init first"
```

### State Requirements
```yaml
required_files:
  - path: ".context/docs/commands/*.md"
    description: "Command documentation"
    condition: "command_specific_help"
  
  - path: ".context/AI_INSTRUCTIONS.md"
    description: "Framework behavior rules"

required_state:
  - "Framework initialized"

preconditions:
  - "Documentation accessible"
  - "Command docs readable"
```

### State Changes
```yaml
creates: []
modifies: []
moves: []
deletes: []

reads:
  - path: ".context/docs/commands/${command}.md"
    description: "Specific command documentation"
    scope: ["behavior", "usage", "examples"]
    condition: "command_specific_help"
  
  - path: ".context/AI_INSTRUCTIONS.md"
    description: "Framework instructions"
    scope: ["commands", "flows"]
    condition: "general_help"
```

### Memory Integration
```yaml
reads:
  - type: "semantic"
    purpose: "Command behavior and patterns"

writes: []
```

### Error Handling
```yaml
errors:
  - condition: "Unknown command"
    response: "Show valid commands list"
    recovery: "Suggest similar commands"
  
  - condition: "Documentation missing"
    response: "Show available help"
    recovery: "Suggest framework repair"

  - condition: "Framework not initialized"
    response: "Show basic commands"
    recovery: "Suggest initialization"
```

### Response Format
```yaml
success:
  - show: "Help information"
    format: |
      1. Command overview
      2. Usage examples
      3. Common patterns
      4. Related commands
      5. Next steps

failure:
  - show: "Error with specific reason"
    format: "Error details with available help"
```

## Implementation Rules

1. Help Organization:
   - Group by command type
   - Show common patterns
   - Include examples
   - Suggest next steps

2. Command Categories:
   - Setup Commands:
     - init
     - plan
   - Core Commands:
     - start
     - save
     - status
     - task
     - context
     - help

3. Context Awareness:
   - Consider current state
   - Show relevant examples
   - Suggest appropriate commands
   - Include common flows

## Examples

### Example One: General Help
```yaml
input: "/aegis help"
validation:
  - check: "Framework initialized"
    result: "pass"
response:
  - action: "Show command overview"
    output: |
      Available Commands:
        Setup:
          - init: Initialize framework
          - plan: Project planning
        Core:
          - start: Begin session
          - save: Record progress
          [additional commands...]
      
      Use "/aegis help <command>" for details
```

### Example Two: Command Help
```yaml
input: "/aegis help start"
validation:
  - check: "Valid command"
    result: "pass"
response:
  - action: "Show command details"
    output: |
      Command: start
      Purpose: Begin development session
      Usage: /aegis start
      Examples:
        - New project
        - Continuing work
      Next Steps:
        - Related commands
```

## Integration Points

1. **Documentation System**:
   ```yaml
   integration:
     - system: "docs"
       components: ["commands", "examples"]
       purpose: "Help content access"
   ```

2. **Command System**:
   ```yaml
   integration:
     - system: "commands"
       components: ["validation", "flows"]
       purpose: "Command information"
   ```

3. **State Awareness**:
   ```yaml
   integration:
     - system: "state"
       components: ["current_state", "context"]
       purpose: "Contextual help"
   ```

## Help Processing Flow
```yaml
flow:
  - step: "Parse Request"
    checks: ["command_provided", "framework_state"]
    success: "Load Help"
    failure: "Show Basic Help"
  
  - step: "Load Help"
    checks: ["documentation", "examples"]
    success: "Build Response"
    failure: "Show Limited Help"
  
  - step: "Context Check"
    checks: ["project_state", "relevance"]
    success: "Add Context"
    failure: "Skip Context"
  
  - step: "Format Response"
    checks: ["completeness", "clarity"]
    success: "Show Help"
    failure: "Show Basic Info"
```

## Help Content Rules
```yaml
rules:
  - scope: "command_help"
    checks:
      - "Purpose clear"
      - "Usage shown"
      - "Examples included"
      - "Next steps listed"

  - scope: "general_help"
    checks:
      - "Commands grouped"
      - "Categories clear"
      - "Common flows shown"
      - "Getting started clear"

  - scope: "contextual_help"
    checks:
      - "State considered"
      - "Relevant examples"
      - "Appropriate suggestions"
      - "Clear next steps"

validation:
  - rule: "Help is clear"
  - rule: "Examples relevant"
  - rule: "Next steps actionable"
  - rule: "Context appropriate"
``` 