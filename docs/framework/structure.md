# Framework Structure

The Aegis framework uses a structured directory layout and core files to maintain system state and guide project development. This document explains the framework's organization and core components.

## Directory Structure

```
.context/
├── AI_INSTRUCTIONS.md     # Framework instructions
├── ai/                   # AI operation patterns
│   ├── core.yaml         # Core AI patterns
│   ├── patterns/         # Memory patterns
│   └── operations/       # Command operations
├── plan/
│   ├── README.md         # Planning overview
│   ├── agents.mmd        # Agent system diagram
│   ├── ai_conductor.json # Conductor configuration
│   ├── document_states.mmd # Document workflow
│   ├── feedback.mmd      # Feedback system
│   └── workflow.mmd      # Planning workflow
├── current_state.md      # Working memory
├── roadmap.md           # Project direction
├── tasks/
│   ├── TEMPLATE.md      # Task template
│   ├── active/         # Current tasks
│   ├── planned/        # Future tasks
│   ├── hold/          # Blocked tasks
│   └── completed/     # Finished tasks
├── sessions/
│   └── TEMPLATE.md     # Session log template
└── decisions/
    └── TEMPLATE.md     # Decision record template
```

## Core Files

### 1. AI_INSTRUCTIONS.md

This file provides operational instructions for the framework.

#### Purpose
- Guides AI behavior
- Defines processing flows
- Establishes memory management
- Sets operational standards

#### Key Components
- Command processing rules
- Memory type definitions
- State management rules
- Operation patterns
- Validation requirements
- Error handling guidelines

### 2. AI Operation Patterns

The framework uses YAML-based operation patterns to define behavior:

#### core.yaml
```yaml
memory_types:
  semantic:
    understand: [knowledge, patterns, decisions, concepts, plans]
    action: [model_system, track_patterns, track_decisions, extract_tasks]
    triggers: [new_knowledge, pattern_identified, decision_made, plan_completed]
  
  procedural:
    understand: [steps, methods, dependencies, phases]
    action: [track_progress, monitor_deps, validate, create_tasks]
    triggers: [step_complete, status_change, dependency_update, phase_mapped]
```

#### operations/plan.yaml
```yaml
steps:
  - check_planning
  - load_context
  - process_plan
  - guide_planning
  - create_tasks:
      source: planning_document.md
      target: tasks/planned
      process:
        - extract_phases
        - create_task_files
        - link_dependencies
```

#### patterns/memory.yaml
```yaml
combinations:
  plan_to_tasks: [semantic, procedural]
  task_focus: [working, procedural]

behaviors:
  semantic:
    processing:
      on_plan: [extract_tasks, map_dependencies]
  
  procedural:
    processing:
      on_create: [set_initial_state, link_phases]
```

### 3. current_state.md

This file maintains the current project state and working memory.

#### Structure
```yaml
---
updated: timestamp
active_task: TASK-ID
focus: current_focus
status: in_progress
---

## Knowledge Base
- Key concepts
- Technical stack
- Version requirements

## Active Development
- Current work
- Recent changes
- Implementation status

## Technical State
- Core dependencies
- Environment details
- System requirements

## Current Focus
- Active priorities
- Immediate needs
- Next steps
```

### 4. planning_document.md

This file contains project planning details and serves as the source for task creation.

#### Structure
```yaml
---
updated: timestamp
status: active
---

## Project Overview
- Current state
- Target state
- Success criteria

## Goals and Requirements
- Primary objectives
- Technical requirements
- Success metrics

## Technical Architecture
- System design
- Technology choices
- Integration points

## Implementation Approach
### Phase 1: [Phase Name]
1. [Task Description]
2. [Task Description]
3. [Task Description]

### Phase 2: [Phase Name]
1. [Task Description]
2. [Task Description]
3. [Task Description]

## Timeline and Milestones
- Phase schedule
- Key deliverables
- Dependencies
```

## Template Files

### 1. tasks/TEMPLATE.md
```yaml
---
id: [NN_phase_name | TASK-XXX]
title: Task Title
created: timestamp
updated: timestamp
memory_types: [procedural, working]
status: planned|active|completed|hold
priority: high|medium|low
references: []
---

## Description
Task description

## Implementation
- [ ] Step 1
- [ ] Step 2

## Dependencies
- Dependency 1
- Dependency 2

## Validation
- [ ] Check 1
- [ ] Check 2
```

### 2. sessions/TEMPLATE.md
```yaml
---
date: timestamp
focus: session_focus
type: session
status: active|completed
references: []
---

## Progress Summary
- Key progress points

## Changes Made
1. Change category:
   - Specific changes

## Decisions
1. Decision area:
   - Decision details

## Next Steps
1. Next action items
```

### 3. decisions/TEMPLATE.md
```yaml
---
id: DECISION-XXX
date: timestamp
status: proposed|accepted|rejected
type: architectural|technical|process
impact: breaking|non-breaking
references: []
---

## Context
Decision context

## Decision
Chosen approach

## Consequences
- Positive impacts
- Negative impacts

## Implementation
Implementation steps

## Validation
Validation criteria
```

## Memory Integration

The framework uses different memory types to organize and process information:

1. **Semantic Memory** (Project Knowledge)
   - AI_INSTRUCTIONS.md
   - roadmap.md
   - decisions/*.md
   - planning_document.md (source for task creation)
   - ai/core.yaml
   - ai/patterns/*.yaml

2. **Procedural Memory** (Task Execution)
   - tasks/*.md
   - operations/*.yaml
   - task creation rules
   - phase extraction patterns

3. **Working Memory** (Current State)
   - current_state.md
   - tasks/active/*.md
   - phase mapping state
   - task generation progress

4. **Episodic Memory** (History)
   - sessions/*.md
   - decisions/*.md
   - task creation records

## Memory Processing

The framework processes different memory types during operations:

### 1. Plan to Task Conversion
```yaml
processing:
  semantic:
    - extract_phases_from_plan
    - map_dependencies
    - determine_priorities
  
  procedural:
    - create_task_files
    - set_initial_states
    - link_task_phases
  
  working:
    - track_creation_progress
    - maintain_phase_order
    - update_references
```

### 2. Task State Management
```yaml
state_management:
  transitions:
    plan_to_tasks:
      - extract_phases
      - create_tasks
      - link_deps
    
    task_lifecycle:
      - planned_to_active
      - active_to_complete
      - active_to_hold
```

## Related Documentation

- [Memory Types](../operations/memory_types.md)
- [Operation Patterns](../operations/patterns.md)
- [Error Handling](../operations/error_handling.md)
- [State Management](../operations/state_management.md)
- [Task Management](../tasks.md)

## Memory System

### Front Matter Validation
The framework enforces strict front matter validation across all memory files. This validation is integral to maintaining system consistency and enabling proper memory processing.

#### Validation Architecture
```yaml
validation:
  pre_save:
    - check: front_matter_exists
      action: validate_front_matter
    - check: required_fields
      action: validate_fields
    - check: memory_types
      action: validate_memory_types
  
  post_save:
    - check: references_valid
      action: validate_references
    - check: status_consistency
      action: validate_status
```

#### Memory Type System
The framework uses four distinct memory types, each with specific roles and compatibility rules:

1. `semantic`: Understanding and knowledge
   - Commands and patterns
   - Technical decisions
   - System architecture
   - Compatible with: procedural, working

2. `procedural`: Operations and steps
   - Task implementation
   - Process workflows
   - State transitions
   - Compatible with: semantic, working

3. `working`: Current context
   - Active development
   - Current focus
   - State management
   - Compatible with: semantic, procedural, episodic

4. `episodic`: Historical records
   - Session logs
   - Change history
   - Event records
   - Compatible with: semantic, working

#### Validation Hooks
The framework implements validation hooks at key points:

```yaml
hooks:
  file_creation:
    - validate_template
    - check_front_matter
    - verify_memory_types
  
  state_transition:
    - validate_status_change
    - update_timestamps
    - check_references
  
  content_update:
    - verify_front_matter
    - validate_changes
    - update_metadata
```

### Front Matter Requirements

#### Common Structure
All memory files must include:
```yaml
---
id: [TYPE]-[IDENTIFIER]     # Unique file identifier
title: "Descriptive Title"  # Clear description
created: [ISO8601]         # Creation timestamp
updated: [ISO8601]         # Last update
memory_types: []           # Valid memory types
references: []             # Related files
---
```

#### Type-Specific Requirements

1. Tasks:
```yaml
---
# ... common fields ...
status: [planned|active|completed|blocked]
priority: [high|medium|low]
phase: "Implementation Phase"
---
```

2. Sessions:
```yaml
---
# ... common fields ...
focus: "Session Focus"
participants: []
objectives: []
---
```

3. Decisions:
```yaml
---
# ... common fields ...
status: [proposed|accepted|deprecated|superseded]
impact: "Impact Description"
alternatives: []
---
```

4. Current State:
```yaml
---
# ... common fields ...
focus: "Current Focus"
active_task: "TASK-ID"
status: "Status Description"
---
```

### Error Handling

#### Validation Errors
The framework handles validation errors with specific responses:

```yaml
errors:
  critical:
    - missing_front_matter:
        action: block_save
        message: "Front matter required"
    - invalid_memory_types:
        action: block_save
        message: "Invalid memory type combination"
  
  warning:
    - missing_optional_fields:
        action: warn
        message: "Optional fields missing"
    - invalid_references:
        action: warn
        message: "Invalid reference detected"
```

#### Recovery Actions
When validation fails, the framework provides:
1. Clear error messages
2. Suggested fixes
3. Template references
4. Validation requirements
5. Example corrections