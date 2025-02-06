---
type: command_doc
command: "plan"
category: "setup"
behavior_version: "1.0"
validation_required: true
state_changes: true
memory_types: [semantic, working]
---

# Command: /aegis plan

## Behavior Specification

### Input Validation
```yaml
required_args: []

optional_args: []

flags: []

validation_rules:
  - rule: "planning_document.md exists || creating_new_plan"
    error: "Cannot update non-existent planning document"
  - rule: "planning_document.md in project root"
    error: "Planning document must be in project root"
```

### State Requirements
```yaml
required_files:
  - path: "planning_document.md"
    description: "Project planning document"
    optional: true

required_state: []

preconditions:
  - "Project root accessible"
  - "No active planning session in progress"
```

### State Changes
```yaml
creates:
  - path: "planning_document.md"
    description: "If no planning document exists"
    template: "project_planning_template"

modifies:
  - path: "planning_document.md"
    description: "Update existing planning document"
    scope: "Content updates only"

moves: []

deletes: []
```

### Memory Integration
```yaml
reads:
  - type: "semantic"
    purpose: "Project planning patterns and best practices"
  - type: "working"
    purpose: "Current project context and focus"

writes:
  - type: "semantic"
    purpose: "Record project planning decisions"
  - type: "working"
    purpose: "Update current planning focus"
```

### Error Handling
```yaml
errors:
  - condition: "planning_document.md not in root"
    response: "Show location requirement error"
    recovery: "Suggest moving file to root"
  
  - condition: "File permission issues"
    response: "Show permission error"
    recovery: "Suggest checking file permissions"

  - condition: "Invalid document format"
    response: "Show format requirements"
    recovery: "Offer to fix format issues"
```

### Response Format
```yaml
success:
  - show: "Planning guidance and next steps"
    format: |
      1. Current planning state
      2. Suggested focus areas
      3. Required decisions
      4. Next actions

failure:
  - show: "Error with specific reason"
    format: "Error details with recovery steps"
```

## Implementation Rules

1. Document Scope:
   - ONLY work with planning_document.md
   - DO NOT create/modify other files
   - DO NOT create tasks
   - DO NOT update current_state.md
   - DO NOT modify .context directory

2. Planning Focus:
   - Project goals and requirements
   - Technical architecture
   - Implementation approach
   - Timeline and milestones

3. Document Structure:
   - Clear project objectives
   - Concrete technical decisions
   - Specific implementation steps
   - Defined success criteria

## Examples

### Example One: New Project
```yaml
input: "/aegis plan"
validation:
  - check: "No planning_document.md"
    result: "create_new"
response:
  - action: "Create planning document"
    output: "Guide through initial planning"
```

### Example Two: Update Plan
```yaml
input: "/aegis plan"
validation:
  - check: "planning_document.md exists"
    result: "update_existing"
response:
  - action: "Review and update plan"
    output: "Suggest improvements and next steps"
```

## Integration Points

1. **Document Management**:
   ```yaml
   integration:
     - system: "files"
       paths: ["planning_document.md"]
       purpose: "Project planning"
   ```

2. **Planning Process**:
   ```yaml
   integration:
     - system: "planning"
       components: ["goals", "architecture", "timeline"]
       purpose: "Guide planning process"
   ```

## Validation Flow
```yaml
flow:
  - step: "Check Document"
    checks: ["exists", "location", "format"]
    success: "Determine Action"
    failure: "Show Requirements"
  
  - step: "Determine Action"
    checks: ["new_or_update"]
    success: "Process Document"
    failure: "Show Error"
  
  - step: "Process Document"
    checks: ["content", "structure"]
    success: "Show Next Steps"
    failure: "Suggest Fixes"
```

## Planning Sections

```yaml
required_sections:
  - name: "Project Goals"
    content: ["objectives", "requirements", "constraints"]
    
  - name: "Technical Architecture"
    content: ["components", "interfaces", "patterns"]
    
  - name: "Implementation"
    content: ["approach", "phases", "dependencies"]
    
  - name: "Timeline"
    content: ["milestones", "deliverables", "schedule"]

validation:
  - rule: "All required sections present"
  - rule: "Each section has required content"
  - rule: "Content is specific and actionable"
``` 