# Template System

Aegis uses a structured template system to maintain consistency and enable effective AI processing across different types of project information. Each template is designed to capture specific types of memory and context.

## Overview

```mermaid
graph TD
    A[Templates] --> B[Decisions]
    A --> C[Sessions]
    A --> D[Tasks]
    
    B --> B1[Semantic Memory]
    B --> B2[Episodic Memory]
    
    C --> C1[Episodic Memory]
    C --> C2[Working Memory]
    
    D --> D1[Procedural Memory]
    D --> D2[Working Memory]
```

## Common Structure

All templates share a common metadata structure using YAML frontmatter:

```yaml
---
id: [ID format based on type]     # Unique identifier for the document
title: [Document title]           # Clear, descriptive title
created: ${timestamp}             # Creation timestamp
updated: ${timestamp}             # Last update timestamp
memory_types: [type1, type2]      # Types of memory this document represents
status: [status based on type]    # Current status (if applicable)
priority: [high|medium|low]       # Importance level
references: []                    # Links to related documents
---
```

### Memory Types
These memory types are used to organize and process project information:
- **semantic**: Project knowledge and patterns
- **episodic**: Development history
- **procedural**: Implementation steps
- **working**: Current focus

### Status Values
- **Tasks**: planned | active | completed | blocked
- **Decisions**: proposed | accepted | deprecated | superseded

### Priority Levels
- **high**: Critical information needed frequently
- **medium**: Important but not critical information
- **low**: Background or reference information

## Decision Template

Location: `.context/decisions/TEMPLATE.md`

```markdown
# [Decision Title]

---
id: DEC-XXX
title: [Decision Title]
created: ${timestamp}
updated: ${timestamp}
memory_types: [semantic, episodic]
status: [proposed | accepted | deprecated | superseded]
priority: [high | medium | low]
references: []
---

## Context
[What is the issue that we're seeing that is motivating this decision or change?]

## Decision
[What is the change that we're proposing and/or doing?]

## Rationale
- Key factors considered
- Alternatives evaluated
- Trade-offs made
- Dependencies affected

## Consequences
- Positive outcomes expected
- Potential risks
- Required changes
- Impact on existing components

## Implementation Notes
- Technical considerations
- Migration steps if needed
- Validation requirements

## Status History
- [Date] - [Status Change] - [Reason]
```

## Session Template

Location: `.context/sessions/TEMPLATE.md`

```markdown
---
title: Session Summary {{DATE}}
memory_types: [episodic, working]
references: []
priority: medium
---

## Context
- Previous session: [link to previous session file]
- Related tasks: []
- Current focus: [Brief description of main focus]

## Progress
### Changes Made
- Code changes:
  - [Component/Feature Name]
  - Specific changes made
  - Implementation details
  - Test coverage added
- Documentation updates:
  - Created/updated files:
    - `[filename]`: [brief description]
    - `[filename]`: [brief description]
- Decisions made:
  - [Decision 1]
  - Rationale
  - Alternatives considered
  - Impact on project
  - References: []

### Insights Gained
- Technical insights
- Pattern discoveries
- Potential issues

## Next Steps
- Immediate tasks
- Open questions
- Follow-up items

## Notes for AI
- Key context to maintain
- Important patterns
- Special considerations
```

## Task Template

Location: `.context/tasks/TEMPLATE.md`

```markdown
# [Task Title]

---
id: TASK-XXX
title: [Task Title]
created: ${timestamp}
updated: ${timestamp}
memory_types: [procedural, working]
status: [planned | active | completed | blocked]
priority: [high | medium | low]
references: []
---

## Description
[Detailed description of the task]

## Implementation
- [ ] Step 1: [description]
  - Technical approach
  - Validation criteria
- [ ] Step 2: [description]
  - Technical approach
  - Validation criteria

## Dependencies
- List any blocking dependencies
- Required resources or access

## Validation
- [ ] Test cases defined
- [ ] Implementation verified
- [ ] Documentation updated

## Notes
- Additional context
- Implementation decisions
- Lessons learned
```

## Agent Template

Location: `.context/plan/agents/TEMPLATE.md`

```markdown
# [Agent Role]

---
id: AGENT-ROLE
created: ${timestamp}
updated: ${timestamp}
memory_types: [semantic, working]
status: [active | standby | inactive]
priority: [high | medium | low]
references: []
memory_access: [semantic, working]
task_types: [type1, type2]
---

## Role Definition
[Detailed description of the agent's role and responsibilities]

## Memory Access
### Read Access
- Semantic memory: [full | partial | none]
- Episodic memory: [full | partial | none]
- Procedural memory: [full | partial | none]
- Working memory: [full | partial | none]

### Write Access
- Semantic memory: [full | partial | none]
- Episodic memory: [full | partial | none]
- Procedural memory: [full | partial | none]
- Working memory: [full | partial | none]

## Task Types
- Primary tasks:
  - [Task type 1]
  - [Task type 2]
- Support tasks:
  - [Task type 3]
  - [Task type 4]

## Interaction Patterns
### Direct Interactions
- [AGENT-ROLE-1]: [interaction type]
- [AGENT-ROLE-2]: [interaction type]

### Workflow Integration
- Entry points
- Exit conditions
- State transitions
- Handoff protocols

## State Management
### Active State
- Memory context required
- Task prerequisites
- Resource requirements

### Standby State
- Minimal context
- Wake conditions
- Resource cleanup

### Inactive State
- State preservation
- Reactivation requirements
- Context restoration

## Notes for AI
- Role boundaries
- Decision authority
- Escalation paths
- Special considerations
```

## Agent State Template

Location: `.context/plan/states/TEMPLATE.md`

```markdown
# [Agent State Record]

---
id: STATE-${timestamp}
agent_id: AGENT-ROLE
memory_types: [working]
status: [transition | active | complete]
references: []
memory_context: []
---

## State Transition
- From: [previous state]
- To: [current state]
- Trigger: [event/condition]

## Memory Context
### Active References
- Semantic: [DEC-XXX, ...]
- Episodic: [SESSION-XXX, ...]
- Procedural: [TASK-XXX, ...]
- Working: [current focus]

### Access Patterns
- Read operations
- Write operations
- Reference updates

## Task Context
- Active tasks
- Completed tasks
- Blocked tasks
- Next tasks

## Notes for AI
- State implications
- Context requirements
- Cleanup needs
- Transition rules
```

## Best Practices

### 1. Template Usage
- Use appropriate template for content type
- Fill all relevant sections
- Keep content focused
- Update regularly

### 2. Memory Types
- Assign correct types
- Consider multiple types
- Update as needed
- Maintain consistency

### 3. References
- Link related documents
- Use correct IDs
- Keep links current
- Validate references

### 4. Timestamps
- Use consistent format
- Update when changed
- Track modifications
- Maintain history

### 5. AI Notes
- Be specific
- Include context
- Note patterns
- Guide implementation

### 6. Agent Templates
- Follow role patterns
- Define clear boundaries
- Specify memory access
- Document interactions

## Template Customization

### 1. Adding Fields
- Maintain YAML structure
- Document new fields
- Update AI guidance
- Validate changes

### 2. Modifying Sections
- Keep core structure
- Document changes
- Update references
- Maintain consistency

### 3. Creating New Templates
- Follow common structure
- Include metadata
- Document purpose
- Add AI guidance

### 4. Agent Templates
- Follow role patterns
- Define clear boundaries
- Specify memory access
- Document interactions

## Integration Points

### 1. Commands
- `/aegis start`: Initializes templates
- `/aegis save`: Updates states
- `/aegis status`: Checks templates
- `/aegis task`: Uses task templates
- `/aegis plan`: Uses agent templates

### 2. Memory System
- Templates map to memory types
- Structure aids processing
- Metadata guides context
- References maintain relationships

### 3. Agent System
- Role definitions
- State tracking
- Memory access
- Task coordination
- Interaction patterns

### 4. Documentation
- Templates support docs
- Structure aids clarity
- Format ensures consistency
- Enables automation

## Tips for Success

1. **Consistency**
   - Follow templates
   - Use standard formats
   - Maintain structure
   - Update regularly

2. **Completeness**
   - Fill all sections
   - Include metadata
   - Add references
   - Document changes

3. **Context**
   - Clear descriptions
   - Complete information
   - Relevant links
   - AI guidance

4. **Maintenance**
   - Regular updates
   - Valid references
   - Current status
   - Clean structure