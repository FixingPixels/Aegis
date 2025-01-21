# Task Management

The Aegis framework uses a structured task management system to track development activities, progress, and implementation details. Tasks represent the procedural memory of the project, guiding both developers and AI assistants through implementation steps.

## Overview

```mermaid
graph TD
    A[Task] --> B[Metadata]
    A --> C[Content]
    
    B --> B1[ID]
    B --> B2[Timestamps]
    B --> B3[Memory Types]
    B --> B4[Status]
    B --> B5[Priority]
    B --> B6[References]
    
    C --> C1[Description]
    C --> C2[Implementation]
    C --> C3[Progress]
    C --> C4[AI Notes]
    
    C2 --> D1[Steps]
    D1 --> E1[Technical Approach]
    D1 --> E2[Validation Criteria]
    
    C3 --> F1[Start Date]
    C3 --> F2[Current Status]
    C3 --> F3[Blockers]
    C3 --> F4[Sessions]
```

## Task Structure

### Metadata Section
```yaml
---
id: TASK-XXX
created: [timestamp]
updated: [timestamp]
memory_types: [procedural, working]
status: [planned | active | completed | blocked]
priority: [high | medium | low]
references: []
---
```

#### Fields Explained
- **id**: Unique task identifier (format: TASK-XXX)
- **created**: Initial creation timestamp
- **updated**: Last modification timestamp
- **memory_types**: How this task should be processed (typically procedural and working)
- **status**: Current task state
- **priority**: Task importance level
- **references**: Links to related tasks, decisions, or sessions

### Content Sections

1. **Description**
   - Detailed task overview
   - Goals and objectives
   - Expected outcomes
   - Requirements

2. **Implementation**
   - Step-by-step breakdown
   - Technical approach
   - Validation criteria
   - Progress tracking

3. **Progress**
   - Start date
   - Current status
   - Blockers
   - Related sessions

4. **Notes for AI**
   - Key considerations
   - Related patterns
   - Implementation guidance
   - Special instructions

## Task States

1. **Planned**
   - Ready for implementation
   - Requirements defined
   - Dependencies resolved
   - Resources available

2. **Active**
   - Currently in progress
   - Being implemented
   - Under development
   - Being tested

3. **Completed**
   - Implementation done
   - Tests passed
   - Documentation updated
   - Reviewed and accepted

4. **Blocked**
   - Has dependencies
   - Awaiting resources
   - Technical issues
   - External blockers

## Memory Integration

### Procedural Memory
- Implementation steps
- Technical approaches
- Process workflows
- Development patterns

### Working Memory
- Active development
- Current progress
- Immediate focus
- Recent changes

## Task Management

### 1. Task Creation
- Clear description
- Defined steps
- Success criteria
- AI guidance

### 2. Task Updates
- Progress tracking
- Status changes
- Blocker documentation
- Session links

### 3. Task Completion
- Implementation verification
- Documentation updates
- Reference maintenance
- Status transition

## Best Practices

### 1. Task Definition
- Clear objectives
- Specific steps
- Measurable outcomes
- Complete context

### 2. Progress Tracking
- Regular updates
- Clear status
- Blocker documentation
- Session references

### 3. AI Collaboration
- Implementation guidance
- Pattern recognition
- Context preservation
- Knowledge transfer

## Example Task

```markdown
# Implement Task Management System

---
id: TASK-001
created: 2025-01-20T19:48:53-05:00
updated: 2025-01-20T19:48:53-05:00
memory_types: [procedural, working]
status: active
priority: high
references: [DEC-001, SESSION-20250120]
---

## Description
Implement a structured task management system that helps track development activities and maintain procedural memory for both developers and AI assistants.

## Implementation
- [x] Step 1: Design task structure
  - Technical approach: Use markdown templates with YAML frontmatter
  - Validation: Template covers all required fields
- [ ] Step 2: Implement task states
  - Technical approach: Define clear state transitions
  - Validation: All states properly tracked
- [ ] Step 3: Add memory integration
  - Technical approach: Link with memory system
  - Validation: Tasks properly categorized

## Progress
- Started: 2025-01-20
- Current status: Implementing task states
- Blockers: None
- Sessions: [SESSION-20250120]

## Notes for AI
- Use memory types to guide processing
- Maintain task relationships
- Track implementation patterns
- Guide state transitions
```

## Integration with Commands

1. **`/aide start`**
   - Loads active tasks
   - Sets current focus
   - Tracks progress
   - Updates context

2. **`/aide save`**
   - Updates task status
   - Records progress
   - Links sessions
   - Documents changes

3. **`/aide status`**
   - Shows task progress
   - Lists blockers
   - Reports changes
   - Displays focus

4. **`/aide task`**
   - Shows task details
   - Lists steps
   - Reports progress
   - Shows blockers

## Tips for Effective Use

1. **Task Creation**
   - Clear descriptions
   - Specific steps
   - Measurable outcomes
   - Complete context

2. **Progress Management**
   - Regular updates
   - Clear status
   - Document blockers
   - Link sessions

3. **AI Collaboration**
   - Provide guidance
   - Document patterns
   - Maintain context
   - Track relationships