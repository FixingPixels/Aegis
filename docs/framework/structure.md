 # Framework Structure

The Aegis framework uses a structured directory layout and core files to maintain system state and guide project development. This document explains the framework's organization and core components.

## Directory Structure

```
.context/
├── AI_INSTRUCTIONS.md     # Framework instructions
├── plan/
│   ├── README.md           # Planning overview
│   ├── agents.mmd         # Agent system diagram
│   ├── ai_conductor.json  # Conductor configuration
│   ├── document_states.mmd # Document workflow
│   ├── feedback.mmd       # Feedback system
│   └── workflow.mmd       # Planning workflow
├── current_state.md       # Working memory
├── roadmap.md            # Project direction
├── tasks/
│   ├── TEMPLATE.md       # Task template
│   ├── active/          # Current tasks
│   ├── planned/         # Future tasks
│   ├── hold/           # Blocked tasks
│   └── completed/      # Finished tasks
├── sessions/
│   └── TEMPLATE.md      # Session log template
└── decisions/
    └── TEMPLATE.md      # Decision record template
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

### 2. current_state.md

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

### 3. roadmap.md

This file tracks project direction and achievements.

#### Purpose
- Sets project direction
- Tracks major progress
- Plans future features
- Records achievements

#### Key Sections
- Current focus areas
- Future direction
- Achievement log
- Strategic goals

### 4. planning_document.md

This file contains project planning details.

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
- Development phases
- Key milestones
- Risk management

## Timeline and Milestones
- Phase schedule
- Key deliverables
- Dependencies
```

## Template Files

### 1. tasks/TEMPLATE.md
```yaml
---
id: TASK-XXX
title: Task Title
created: timestamp
updated: timestamp
memory_types: [type1, type2]
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

2. **Procedural Memory** (Task Execution)
   - tasks/*.md
   - operations/*.yaml

3. **Working Memory** (Current State)
   - current_state.md
   - tasks/active/*.md

4. **Episodic Memory** (History)
   - sessions/*.md
   - decisions/*.md

## Related Documentation

- [Memory Types](../operations/memory_types.md)
- [Operation Patterns](../operations/patterns.md)
- [Error Handling](../operations/error_handling.md)
- [State Management](../operations/state_management.md)