# Plan Command Documentation

The `/aegis plan` command is a primary entry point for new projects, focusing on creating and maintaining the project planning document and automatically creating initial tasks. It guides users through defining project goals, technical architecture, and implementation approach, then converts the implementation phases into planned tasks.

## Usage

```bash
/aegis plan
```

## Important Rules

1. File Scope:
   - Works with `planning_document.md` in project root
   - Creates initial tasks in `.context/tasks/planned`
   - Uses task template from `.context/tasks/TEMPLATE.md`
   - DO NOT update current_state.md
   - DO NOT modify .context directory structure

2. Document Focus:
   - Clear project objectives
   - Concrete technical decisions
   - Specific implementation steps
   - Defined success criteria
   - Phase-based implementation
   - Task-ready structure

## Workflow

1. Document Creation/Loading:
   - Check for existing planning_document.md
   - Create new document if none exists
   - Load existing document for updates
   - Validate document structure

2. Planning Process:
   - Project goals and requirements
   - Technical architecture decisions
   - Implementation approach
   - Timeline and milestones
   - Success criteria definition

3. Document Updates:
   - Incorporate user feedback
   - Refine existing sections
   - Add missing details
   - Clarify ambiguous points
   - Maintain document focus

4. Task Creation:
   - Extract implementation phases
   - Create task files from phases
   - Set task priorities from timeline
   - Link task dependencies
   - Maintain phase order

## Document Structure

```markdown
# Project Title

## Project Overview
- Current State
- Target State
- Success Criteria

## Goals and Requirements
- Primary Objectives
- Technical Requirements
- Success Metrics

## Technical Architecture
- System Design
- Technology Choices
- Integration Points
- Security Considerations

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
- Phase Breakdown
- Key Deliverables
- Target Dates
- Dependencies
```

## Task Creation Rules

1. Task Structure:
   - Each phase becomes a task
   - Phase name becomes task title
   - Phase content becomes task description
   - Tasks numbered sequentially
   - Initial status set to "planned"

2. Task Naming:
   - Format: `NN_phase_name`
   - NN: Sequential number (01, 02, etc.)
   - phase_name: Lowercase, underscored

3. Task Priority:
   - Derived from timeline position
   - Earlier phases get higher priority
   - Maintains implementation order

4. Task Dependencies:
   - Based on phase order
   - Earlier phases link to later ones
   - Maintains project flow

## Validation Rules

1. Document Format:
   - Valid markdown syntax
   - Required sections present
   - Clear section hierarchy
   - Consistent formatting
   - Phase-based implementation

2. Content Quality:
   - Clear objectives
   - Specific requirements
   - Actionable steps
   - Measurable criteria
   - Task-ready phases

3. Document Focus:
   - Project-specific content
   - Technical clarity
   - Implementation details
   - Timeline realism
   - Phase dependencies

## Success Criteria

1. Planning document exists and is valid
2. All required sections are complete
3. Goals and requirements are clear
4. Technical decisions are documented
5. Implementation steps are defined
6. Timeline is realistic and detailed
7. Tasks created for all phases
8. Task dependencies correctly linked

## Error Handling

1. Missing Document:
   ```
   Error: No planning document found
   Solution: Creating new planning_document.md
   ```

2. Invalid Format:
   ```
   Error: Invalid document structure
   Solution: Restructuring document to match template
   ```

3. Incomplete Sections:
   ```
   Error: Missing required sections
   Solution: Adding template sections with guidance
   ```

4. Task Creation Failed:
   ```
   Error: Failed to create tasks from phases
   Solution: Check phase structure and task template
   ```

## Next Steps

After planning completion:
1. Review planning document
2. Review created tasks in .context/tasks/planned
3. Begin implementation with `/aegis start`
4. Activate first planned task
5. Start development work

## Related Documentation

- [Project Planning](../framework/planning.md)
- [Technical Architecture](../framework/architecture.md)
- [Implementation Guide](../framework/implementation.md)
- [Project Timeline](../framework/timeline.md)
- [Task Management](../framework/tasks.md)