# Cross-Referencing System

Aegis uses a robust cross-referencing system to maintain relationships between different types of project information. This system helps both developers and AI assistants understand connections and dependencies across the project.

## Overview

```mermaid
graph TD
    A[Cross References] --> B[Document Types]
    A --> C[Reference Types]
    A --> D[Reference Format]
    A --> E[Agent References]
    
    B --> B1[Decisions]
    B --> B2[Sessions]
    B --> B3[Tasks]
    B --> B4[Current State]
    B --> B5[Agent States]
    
    C --> C1[Direct References]
    C --> C2[Implicit References]
    C --> C3[Temporal References]
    C --> C4[Agent References]
    
    D --> D1[ID Format]
    D --> D2[Link Format]
    D --> D3[List Format]
    D --> D4[State Format]
    
    E --> E1[Role References]
    E --> E2[State References]
    E --> E3[Memory Access]
```

## Reference Types

### 1. Document IDs
- **Decisions**: `DEC-XXX`
  - Sequential numbering
  - Example: `DEC-001`
  - Used for architectural decisions

- **Sessions**: `SESSION-YYYYMMDD`
  - Date-based format
  - Example: `SESSION-20250120`
  - Used for development sessions

- **Tasks**: `TASK-XXX`
  - Sequential numbering
  - Example: `TASK-001`
  - Used for implementation tasks

- **Agents**: `AGENT-ROLE`
  - Role-based format
  - Example: `AGENT-PM` (Product Manager)
  - Used for agent states and assignments

### 2. Reference Locations

#### YAML Frontmatter
```yaml
---
references: [DEC-001, TASK-002, SESSION-20250120]
agent_roles: [AGENT-PM, AGENT-TL]
agent_states: 
  AGENT-PM: active
  AGENT-TL: standby
memory_access: [semantic, working]
---
```
- Used for direct document relationships
- Supports multiple references
- Part of document metadata
- Tracks agent states and roles
- Defines memory access patterns

#### Section References
```markdown
## Progress
- Related tasks: [TASK-001, TASK-002]
- Previous session: SESSION-20250119
- Implementation: See DEC-003
```
- Used within document sections
- Provides context for specific content
- Links related information

#### List References
```markdown
### Changes Made
- Code changes:
  - References: [TASK-001]
- Decisions made:
  - References: [DEC-002]
```
- Used in lists and subsections
- Groups related references
- Provides detailed context

## Reference Relationships

```mermaid
graph TD
    D[Decision] -->|Implements| T[Task]
    D -->|Made in| S[Session]
    
    T -->|Tracked in| S
    T -->|Based on| D
    
    S -->|Creates| D
    S -->|Updates| T
    
    C[Current State] -->|References| D
    C -->|References| T
    C -->|References| S
    
    A[Agent] -->|Assigned to| T
    A -->|Records in| S
    A -->|Makes| D
    A -->|Updates| C
    
    AC[AI Conductor] -->|Manages| A
    AC -->|Coordinates| T
    AC -->|Tracks| S
    AC -->|Validates| D
```

## Usage Patterns

### 1. Decision References
```markdown
# Technical Stack Decision

---
id: DEC-001
references: [DEC-002, TASK-003]
---

## Context
Related to previous decision [DEC-002] about architecture...

## Implementation
Will be executed in [TASK-003]...
```

### 2. Session References
```markdown
# Session Summary 2025-01-20

---
references: [DEC-001, TASK-002, SESSION-20250119]
---

## Context
Following up on previous session [SESSION-20250119]...

## Progress
Implementing decision [DEC-001] through [TASK-002]...
```

### 3. Task References
```markdown
# API Implementation

---
id: TASK-001
references: [DEC-003, SESSION-20250120]
---

## Description
Based on architecture decision [DEC-003]...

## Progress
Updated in session [SESSION-20250120]...
```

### 4. Current State References
```markdown
# Current Project State

---
references: [DEC-001, TASK-002]
---

## Active Development
### In Progress
- API Implementation [TASK-002]
- Based on [DEC-001]
```

### 5. Agent References
```markdown
# Technical Planning Session

---
id: SESSION-20250120
references: [DEC-001, TASK-002]
agent_roles: [AGENT-PM, AGENT-TL]
agent_states:
  AGENT-PM: active
  AGENT-TL: active
memory_access: [semantic, working]
---

## Context
Planning session with Product Manager [AGENT-PM] and Tech Lead [AGENT-TL]...

## Agent Contributions
### Product Manager [AGENT-PM]
- Defined requirements for [TASK-002]
- Referenced architecture [DEC-001]

### Tech Lead [AGENT-TL]
- Reviewed technical approach
- Updated implementation plan
```

### 6. State References
```markdown
# Current Project State

---
references: [DEC-001, TASK-002]
agent_states:
  AGENT-PM: active
  AGENT-TL: active
  AGENT-UX: standby
  AGENT-QA: pending
  AGENT-DEVOPS: inactive
---

## Active Development
### Agent Assignments
- Product Planning [AGENT-PM]
  - Requirements definition
  - Feature prioritization
  
- Technical Design [AGENT-TL]
  - Architecture review
  - Implementation planning
```

## Best Practices

### 1. Reference Creation
- Use correct ID format
- Include relevant references
- Maintain bidirectional links
- Document relationships

### 2. Reference Management
- Keep references current
- Update when needed
- Remove stale references
- Validate links

### 3. Reference Usage
- Be specific
- Provide context
- Group related references
- Explain relationships

### 4. Reference Documentation
- Clear purpose
- Complete context
- Accurate links
- Updated status

## Integration Points

### 1. Commands
- `/aegis start`: Loads all references and states
- `/aegis save`: Updates references and agent states
- `/aegis status`: Shows current references and states
- `/aegis task`: Manages task and agent references
- `/aegis plan`: Coordinates agent references

### 2. Memory System
- Links memory types
- Maintains context
- Tracks relationships
- Manages agent states
- Controls memory access

### 3. Agent System
- Role references
- State tracking
- Memory permissions
- Task assignments
- Interaction history

### 4. Templates
- Standard formats
- Consistent locations
- Clear structure
- Easy updates

## Tips for Success

1. **Consistency**
   - Use standard formats
   - Follow patterns
   - Maintain structure
   - Regular updates

2. **Clarity**
   - Clear purpose
   - Complete context
   - Accurate links
   - Explained relationships

3. **Maintenance**
   - Regular validation
   - Remove stale links
   - Update references
   - Check bidirectional links

4. **Organization**
   - Logical grouping
   - Clear hierarchy
   - Easy navigation
   - Quick reference

## Agent Reference Patterns

### 1. Role Assignment
```yaml
agent_roles:
  AGENT-PM:
    memory_access: [semantic, working]
    task_types: [planning, requirements]
  AGENT-TL:
    memory_access: [semantic, procedural]
    task_types: [technical, architecture]
```

### 2. State Management
```yaml
agent_states:
  AGENT-PM:
    status: active
    current_task: TASK-002
    memory_context: [DEC-001, SESSION-20250120]
  AGENT-TL:
    status: standby
    last_task: TASK-001
    pending_review: [DEC-002]
```

### 3. Memory Access
```yaml
memory_permissions:
  semantic:
    read: [AGENT-PM, AGENT-TL, AGENT-UX]
    write: [AGENT-PM, AGENT-TL]
  working:
    read: [all]
    write: [AGENT-PM]
  procedural:
    read: [AGENT-TL, AGENT-QA]
    write: [AGENT-TL]
```
