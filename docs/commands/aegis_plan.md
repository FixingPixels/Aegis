# Plan Command Documentation

The `/aegis plan` command is a primary entry point for new projects, focusing on creating and maintaining the project planning document. It guides users through defining project goals, technical architecture, and implementation approach.

## Usage

```bash
/aegis plan
```

## Important Rules

1. File Scope:
   - ONLY works with `planning_document.md` in project root
   - DO NOT create or modify other files
   - DO NOT create tasks
   - DO NOT update current_state.md
   - DO NOT modify .context directory

2. Document Focus:
   - Clear project objectives
   - Concrete technical decisions
   - Specific implementation steps
   - Defined success criteria

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
- Development Phases
- Key Milestones
- Risk Management
- Quality Assurance

## Timeline and Milestones
- Phase Breakdown
- Key Deliverables
- Target Dates
- Dependencies
```

## Validation Rules

1. Document Format:
   - Valid markdown syntax
   - Required sections present
   - Clear section hierarchy
   - Consistent formatting

2. Content Quality:
   - Clear objectives
   - Specific requirements
   - Actionable steps
   - Measurable criteria

3. Document Focus:
   - Project-specific content
   - Technical clarity
   - Implementation details
   - Timeline realism

## Success Criteria

1. Planning document exists and is valid
2. All required sections are complete
3. Goals and requirements are clear
4. Technical decisions are documented
5. Implementation steps are defined
6. Timeline is realistic and detailed

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

## Next Steps

After planning completion:
1. Review planning document
2. Begin implementation with `/aegis start`
3. Create initial tasks
4. Start development work

## Related Documentation

- [Project Planning](../framework/planning.md)
- [Technical Architecture](../framework/architecture.md)
- [Implementation Guide](../framework/implementation.md)
- [Project Timeline](../framework/timeline.md)