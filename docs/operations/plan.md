# Plan Pattern

The plan pattern is used to create and manage the project planning document, guiding users through defining project goals, technical architecture, implementation approach, and timeline.

## Pattern Definition

```yaml
# Plan Operation Pattern
version: 1.0
command: plan
description: Create or update project planning document

# Operation Flow
flow:
  pre_checks:
    - framework_ready: {verify: framework_check, error: "Framework not ready"}
  
  steps:
    1_check_planning:
      action: check_document
      file: planning_document.md
      create_if_missing: true
      template: planning_template
    
    2_load_context:
      action: load_context
      files:
        - current_state: {path: "current_state.md", required: false}
        - roadmap: {path: "roadmap.md", required: false}
    
    3_process_plan:
      action: process_planning
      analyze:
        - existing_plan: {if_exists: "planning_document.md"}
        - current_state: {if_exists: "current_state.md"}
        - roadmap: {if_exists: "roadmap.md"}
    
    4_guide_planning:
      action: guide_planning
      steps:
        - project_goals: {prompt: true, required: true}
        - technical_approach: {prompt: true, required: true}
        - implementation: {prompt: true, required: true}
        - timeline: {prompt: true, required: true}

# Document Template
template:
  sections:
    project_overview:
      title: "Project Overview"
      required: true
      subsections:
        - current_state: "Current system state"
        - target_state: "Desired end state"
        - success_criteria: "Measurable outcomes"
    
    goals:
      title: "Goals and Requirements"
      required: true
      subsections:
        - objectives: "Primary objectives"
        - requirements: "Technical requirements"
        - constraints: "Project constraints"
    
    architecture:
      title: "Technical Architecture"
      required: true
      subsections:
        - system_design: "System architecture"
        - technology: "Technology choices"
        - integration: "Integration points"
    
    implementation:
      title: "Implementation Approach"
      required: true
      subsections:
        - phases: "Development phases"
        - milestones: "Key milestones"
        - risks: "Risk management"
    
    timeline:
      title: "Timeline and Milestones"
      required: true
      subsections:
        - schedule: "Phase schedule"
        - deliverables: "Key deliverables"
        - dependencies: "Critical dependencies"

# Validation Rules
validation:
  planning_doc:
    format: markdown
    sections: [goals, approach, implementation, timeline]
    validate: [structure, completeness]
  
  context_files:
    optional: [current_state.md, roadmap.md]
    check: [exists, readable]
  
  content:
    required: [objectives, requirements, approach]
    validate: [clarity, completeness]

# Error Handling
errors:
  not_ready:
    msg: "Framework not ready"
    action: show_setup_instructions
    help: "Copy .context directory to your project"
  
  invalid_plan:
    msg: "Invalid planning document"
    action: show_template
    help: "Follow planning document template"
  
  missing_sections:
    msg: "Required sections missing"
    action: list_missing
    help: "Complete all required sections"
  
  invalid_format:
    msg: "Invalid document format"
    action: show_format
    help: "Check markdown formatting"

# Important Notes
notes:
  usage:
    - entry_point: "First command for new projects"
    - prerequisites: "Only needs .context structure"
    - state: "Creates initial state if needed"
  
  focus:
    - planning: "Project planning only"
    - no_tasks: "Does not create tasks"
    - no_updates: "No state updates"
  
  scope:
    - document: "planning_document.md only"
    - location: "Project root directory"
    - format: "Markdown with sections"
```

## Usage

The plan pattern is used to:
1. Create planning document
2. Guide project planning
3. Define project scope
4. Set technical direction
5. Establish timeline

## Document Sections

1. **Project Overview**
   - Current state
   - Target state
   - Success criteria
   - Project scope
   - Key outcomes

2. **Goals and Requirements**
   - Primary objectives
   - Technical requirements
   - Project constraints
   - Success metrics
   - Quality criteria

3. **Technical Architecture**
   - System design
   - Technology choices
   - Integration points
   - Security measures
   - Performance goals

4. **Implementation Approach**
   - Development phases
   - Key milestones
   - Risk management
   - Quality assurance
   - Validation steps

5. **Timeline and Milestones**
   - Phase schedule
   - Key deliverables
   - Dependencies
   - Resource needs
   - Critical paths

## Planning Process

1. **Document Creation**
   - Check for existing plan
   - Use template if new
   - Load any context
   - Set up structure
   - Initialize sections

2. **Content Development**
   - Define objectives
   - Plan approach
   - Set timeline
   - List requirements
   - Note constraints

3. **Document Review**
   - Check completeness
   - Validate sections
   - Ensure clarity
   - Verify references
   - Update if needed

## Error Recovery

1. **Framework Issues**
   ```
   Error: Framework not ready
   Action: Show setup instructions
   Help: Copy .context directory
   ```

2. **Invalid Plan**
   ```
   Error: Invalid planning document
   Action: Show template structure
   Help: Follow document template
   ```

3. **Missing Sections**
   ```
   Error: Required sections missing
   Action: List missing sections
   Help: Complete required content
   ```

4. **Format Issues**
   ```
   Error: Invalid document format
   Action: Show format guide
   Help: Fix markdown formatting
   ```

## Integration

The plan pattern integrates with:
1. Project initialization
2. Goal setting
3. Technical planning
4. Timeline management
5. Risk assessment

## Related Patterns

- [Framework Check](framework_check.md) - Validates framework state
- [Start](start.md) - Uses plan for initialization
- [Status](status.md) - Shows planning progress
- [Task](task.md) - Implements plan items 