# Template System

The Aegis framework uses a structured template system to maintain consistency and enable effective processing across different types of memory. This document explains how templates are managed, validated, and integrated with the framework's operation patterns.

## Overview

Templates in Aegis provide consistent structure for different types of project information:

1. **Template Types**
   - Decision templates capture architectural and technical choices
   - Session templates record development progress and insights
   - Task templates track implementation work and progress
   - Agent templates define AI roles and responsibilities

2. **Common Structure**
   - All templates use standard YAML frontmatter for metadata
   - Each type has specific required and optional sections
   - References connect related information
   - Validation ensures completeness and correctness

3. **Memory Integration**
   - Decision templates work with semantic and episodic memory
   - Session templates use episodic and working memory
   - Task templates use procedural and working memory
   - Agent templates use semantic and working memory

4. **Validation System**
   - Format rules ensure consistent structure
   - Content rules verify required information
   - Reference rules maintain connections
   - State rules manage transitions

This system helps you:
- Maintain consistent documentation
- Ensure complete information
- Track relationships properly
- Validate content automatically
- Follow project standards

## Front Matter Requirements

### Common Structure
All templates MUST include front matter with the following required fields:

```yaml
---
id: [TYPE]-[IDENTIFIER]        # Unique identifier (format varies by type)
title: "Descriptive Title"     # Clear, descriptive title
created: YYYY-MM-DDTHH:mm:ssZ # Creation timestamp (ISO 8601)
updated: YYYY-MM-DDTHH:mm:ssZ # Last update timestamp (ISO 8601)
memory_types: []              # Valid memory type combination
references: []                # Related file references
---
```

### Type-Specific Requirements

1. Task Template:
```yaml
---
# Common fields (required)
id: TASK-NNN                  # e.g., TASK-001
title: "Task Title"
created: YYYY-MM-DDTHH:mm:ssZ
updated: YYYY-MM-DDTHH:mm:ssZ
memory_types: [procedural]    # Must include procedural
references: []

# Task-specific fields (required)
status: [planned|active|completed|blocked]
priority: [high|medium|low]
phase: "Implementation Phase"

# Optional fields
due_date: YYYY-MM-DD
assignee: "Owner Name"
dependencies: []
tags: []
---
```

2. Session Template:
```yaml
---
# Common fields (required)
id: SESSION-YYYYMMDDHHMMSS    # Timestamp-based ID
title: "Session Summary"
created: YYYY-MM-DDTHH:mm:ssZ
updated: YYYY-MM-DDTHH:mm:ssZ
memory_types: [episodic]      # Must include episodic
references: []

# Session-specific fields (required)
focus: "Session Focus"
participants: []
objectives: []

# Optional fields
duration: "HH:MM"
next_session: YYYY-MM-DD
tags: []
---
```

3. Decision Template:
```yaml
---
# Common fields (required)
id: DECISION-NNN             # e.g., DECISION-001
title: "Decision Title"
created: YYYY-MM-DDTHH:mm:ssZ
updated: YYYY-MM-DDTHH:mm:ssZ
memory_types: [semantic]     # Must include semantic
references: []

# Decision-specific fields (required)
status: [proposed|accepted|deprecated|superseded]
impact: "Impact Description"
alternatives_considered: []

# Optional fields
implementation_date: YYYY-MM-DD
stakeholders: []
tags: []
---
```

### Memory Type Rules

#### Valid Combinations
1. Tasks:
   - Required: `procedural`
   - Optional: `working`, `semantic`
   - Max: 3 types

2. Sessions:
   - Required: `episodic`
   - Optional: `working`, `semantic`
   - Max: 3 types

3. Decisions:
   - Required: `semantic`
   - Optional: `episodic`, `working`
   - Max: 3 types

#### Compatibility Matrix
```yaml
memory_compatibility:
  procedural:
    - semantic
    - working
  
  episodic:
    - semantic
    - working
  
  semantic:
    - procedural
    - working
    - episodic
  
  working:
    - procedural
    - semantic
    - episodic
```

### Validation Rules

#### Pre-Creation Validation
```yaml
validation:
  pre_create:
    front_matter:
      - exists: true
      - format: yaml
      - required_fields: complete
    
    memory_types:
      - required_type: present
      - compatibility: valid
      - count: [1,3]
    
    references:
      - format: valid
      - targets: exist

    timestamps:
      - format: iso8601
      - created: valid
      - updated: matches_created
```

#### Content Validation
```yaml
content_validation:
  tasks:
    required_sections:
      - Description
      - Implementation
      - Validation
    optional_sections:
      - Dependencies
      - Notes
  
  sessions:
    required_sections:
      - Progress Summary
      - Changes Made
      - Next Steps
    optional_sections:
      - Decisions
      - Notes
  
  decisions:
    required_sections:
      - Context
      - Decision
      - Consequences
    optional_sections:
      - Implementation
      - Validation
```

### Error Handling

#### Front Matter Errors
```yaml
front_matter_errors:
  missing:
    severity: error
    message: "Front matter section required"
    action: block_creation
  
  invalid_format:
    severity: error
    message: "Invalid YAML format"
    action: block_creation
  
  missing_required:
    severity: error
    message: "Missing required fields: {fields}"
    action: block_creation
  
  invalid_memory_types:
    severity: error
    message: "Invalid memory type combination"
    action: block_creation
  
  invalid_references:
    severity: warning
    message: "Invalid references detected"
    action: warn_user
```

## Common Structure

All templates use a standard metadata structure:

```yaml
---
id: [Type-specific format]        # Unique identifier based on type
title: [Clear description]        # Descriptive title
created: ${timestamp}             # Creation timestamp (ISO8601)
updated: ${timestamp}             # Last update timestamp (ISO8601)
memory_types: [type1, type2]      # Memory type classification
status: [status based on type]    # Current status if applicable
priority: [high|medium|low]       # Importance level
references: []                    # Related document references
validation:                       # Validation requirements
  format: true                    # Format validation
  references: true               # Reference validation
  state: true                    # State validation
---
```

## Validation Rules

### 1. Format Validation
```yaml
validation:
  format:
    decisions:
      id: "DECISION-\\d{3}"
      memory_types: ["semantic", "episodic"]
      status: ["proposed", "accepted", "deprecated", "superseded"]
    
    sessions:
      id: "\\d{8}_\\d{4}_session"
      memory_types: ["episodic", "working"]
    
    tasks:
      id: "\\d{6}_\\d{4}_[a-z_]+"
      memory_types: ["procedural", "working"]
      status: ["planned", "active", "completed", "hold"]
    
    agents:
      id: "AGENT-[A-Z]+"
      memory_types: ["semantic", "working"]
      status: ["active", "standby", "inactive"]
```

### 2. Content Validation
```yaml
content_validation:
  decisions:
    required: [context, decision, rationale, consequences]
    optional: [implementation, status_history]
  
  sessions:
    required: [context, progress, next_steps]
    optional: [insights, notes]
  
  tasks:
    required: [description, implementation, validation]
    optional: [dependencies, notes]
  
  agents:
    required: [role_definition, memory_access, task_types]
    optional: [interaction_patterns, notes]
```

### 3. Reference Validation
```yaml
reference_validation:
  types:
    decisions: "DECISION-\\d{3}"
    sessions: "\\d{8}_\\d{4}_session"
    tasks: "\\d{6}_\\d{4}_[a-z_]+"
    agents: "AGENT-[A-Z]+"
  
  rules:
    - target_exists: true
    - valid_format: true
    - no_cycles: true
```

## Error Handling

### 1. Format Errors
```yaml
format_errors:
  invalid_id:
    msg: "Invalid ID format for template type"
    action: show_format
    help: "Check type-specific ID format"
  
  invalid_memory:
    msg: "Invalid memory types"
    action: show_valid_types
    help: "Use correct memory types for template"
  
  invalid_status:
    msg: "Invalid status value"
    action: show_valid_states
    help: "Use correct status values for type"
```

### 2. Content Errors
```yaml
content_errors:
  missing_required:
    msg: "Missing required sections"
    action: show_missing
    help: "Add required sections"
  
  invalid_content:
    msg: "Invalid content format"
    action: show_format
    help: "Check content formatting rules"
```

### 3. Reference Errors
```yaml
reference_errors:
  invalid_target:
    msg: "Invalid reference target"
    action: show_target
    help: "Verify reference exists"
  
  invalid_format:
    msg: "Invalid reference format"
    action: show_format
    help: "Use correct reference format"
```

## Operation Pattern Integration

### 1. Framework Check Pattern
```yaml
framework_check:
  templates:
    validate:
      - format: {check: true}
      - content: {complete: true}
      - references: {resolve: true}
```

### 2. Memory Processing Pattern
```