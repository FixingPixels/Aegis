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
memory_types: [type1, type2]  # Types of memory this document represents
references: []                # Links to related documents
priority: [high|medium|low]   # Importance level
---
```

### Memory Types
- **semantic**: Long-term project knowledge and decisions
- **episodic**: Historical events and progress
- **procedural**: Tasks and implementation steps
- **working**: Current focus and active context

### Priority Levels
- **high**: Critical information needed frequently
- **medium**: Important but not critical information
- **low**: Background or reference information

## Decision Template

Location: `.context/decisions/TEMPLATE.md`

```markdown
# [Title of Decision]

---
id: DEC-XXX
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

## Impact
- Benefits gained
- Challenges introduced
- Areas affected

## Validation
- Success criteria
- Metrics to track
- Review timeline

## Notes for AI
- Pattern implications
- Implementation guidance
- Future considerations
```

### Usage
- Record architectural decisions
- Document technical choices
- Track design patterns
- Maintain system constraints

## Session Template

Location: `.context/sessions/TEMPLATE.md`

```markdown
# Session Summary {{DATE}}

---
memory_types: [episodic, working]
references: []
priority: medium
---

## Context
- Previous session: [link]
- Related tasks: []
- Current focus: [Brief description]

## Progress
### Changes Made
- Code changes:
  - [Component/Feature]
  - Specific changes
  - Implementation details
  - Test coverage
- Documentation updates:
  - Created/updated files
  - Brief descriptions
- Decisions made:
  - [Decision]
  - Rationale
  - Impact
  - References

### Insights Gained
- Technical insights
- Pattern discoveries
- Potential issues

## Next Steps
- Immediate tasks
- Open questions
- Follow-up items

## Notes for AI
- Key context
- Important patterns
- Special considerations
```

### Usage
- Track development sessions
- Record progress
- Document insights
- Plan next steps

## Task Template

Location: `.context/tasks/TEMPLATE.md`

```markdown
# [Task Name]

---
id: TASK-XXX
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

## Progress
- Started: [date]
- Current status: [details]
- Blockers: [if any]
- Sessions: [session-ids]

## Notes for AI
- Key considerations
- Related patterns
- Implementation guidance
```

### Usage
- Track implementation tasks
- Document progress
- Manage blockers
- Guide development

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

## Integration Points

### 1. Commands
- `/aide start`: Uses templates for context
- `/aide save`: Updates based on templates
- `/aide task`: References task template
- `/aide status`: Reads template metadata

### 2. Memory System
- Templates map to memory types
- Structure aids processing
- Metadata guides context
- References maintain relationships

### 3. Documentation
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