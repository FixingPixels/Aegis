# Architectural Decision Records (ADR)

The Aegis framework uses a structured decision-recording system to maintain a clear history of architectural and technical decisions. This document explains how decisions are managed, validated, and integrated with the framework's operation patterns.

## Front Matter Requirements

Every decision record must include a properly formatted front matter section:

```yaml
---
id: DECISION-001              # Unique decision identifier
title: "Architecture Choice"  # Clear, descriptive title
created: 2024-02-06T10:00:00Z # Creation timestamp (ISO 8601)
updated: 2024-02-06T10:00:00Z # Last update timestamp (ISO 8601)
memory_types: [semantic]      # Must include semantic
status: proposed             # Decision status
impact: high                 # Impact level
alternatives_considered: []   # Alternative options
references: []               # Related file references
---
```

### Required Fields
1. **Common Fields** (Required for all files):
   - `id`: Unique decision identifier (format: `DECISION-NNN`)
   - `title`: Clear, descriptive title
   - `created`: Creation timestamp (ISO 8601)
   - `updated`: Last update timestamp (ISO 8601)
   - `memory_types`: At least one valid memory type
   - `references`: List of related files (can be empty)

2. **Decision-Specific Fields** (Required for decisions):
   - `status`: Current decision state (`proposed`, `accepted`, `deprecated`, `superseded`)
   - `impact`: Impact level (`high`, `medium`, `low`)
   - `alternatives_considered`: List of alternative options considered

### Memory Type Requirements

1. **Required Type**:
   - `semantic`: All decisions must include this type
   
2. **Optional Types**:
   - `episodic`: For tracking decision history
   - `working`: For active decisions

3. **Valid Combinations**:
   - `[semantic]`
   - `[semantic, episodic]`
   - `[semantic, working]`
   - `[semantic, episodic, working]`

4. **Invalid Combinations**:
   - `[episodic]` (missing required semantic)
   - `[semantic, procedural]` (incompatible types)
   - More than 3 types

### Validation Rules

```yaml
validation:
  front_matter:
    existence:
      check: true
      error: "Front matter section is required"
      severity: error
    
    format:
      check: yaml
      error: "Invalid YAML format in front matter"
      severity: error
    
    required_fields:
      common:
        - id
        - title
        - created
        - updated
        - memory_types
        - references
      decision_specific:
        - status
        - impact
        - alternatives_considered
    
    memory_types:
      primary: semantic
      optional: [episodic, working]
      max_count: 3
      compatibility:
        semantic: [episodic, working]
    
    timestamps:
      format: ISO8601
      created_before_updated: true
    
    references:
      format_valid: true
      targets_exist: true
      no_circles: true

  status:
    values: [proposed, accepted, deprecated, superseded]
    transitions:
      proposed:
        to: [accepted, deprecated]
        validate: [impact_assessed]
      accepted:
        to: [deprecated, superseded]
        validate: [replacement]
      deprecated:
        to: [superseded]
        validate: [replacement]
      superseded:
        final: true
        validate: [new_decision]

  impact:
    values: [high, medium, low]
    required: true
```

### Error Handling

```yaml
errors:
  critical:  # Block Operation
    - missing_front_matter:
        message: "Front matter section is required"
        action: block_save
    
    - invalid_format:
        message: "Invalid YAML format in front matter"
        action: block_save
    
    - missing_required:
        message: "Missing required fields: {fields}"
        action: block_save
    
    - invalid_memory_types:
        message: "Invalid memory type combination"
        action: block_save
    
    - invalid_status:
        message: "Invalid status value"
        action: block_save
  
  warnings:  # Allow with Notice
    - invalid_references:
        message: "Invalid references detected"
        action: warn_user
    
    - missing_optional:
        message: "Optional fields missing"
        action: warn_user
```

## Decision States

### State Transitions
Each state transition triggers front matter validation:

1. **Proposed → Accepted**:
   ```yaml
   ---
   status: accepted
   updated: ${new_timestamp}
   references: ["SESSION-XXX"]  # Add acceptance session
   ---
   ```

2. **Accepted → Deprecated**:
   ```yaml
   ---
   status: deprecated
   updated: ${new_timestamp}
   references: ["DECISION-XXX"]  # Add deprecation reason
   ---
   ```

3. **Deprecated → Superseded**:
   ```yaml
   ---
   status: superseded
   updated: ${new_timestamp}
   references: ["DECISION-XXX"]  # Add new decision
   ---
   ```

### State Validation
```yaml
state_validation:
  pre_transition:
    - front_matter_valid
    - memory_types_compatible
    - references_exist
  
  post_transition:
    - status_updated
    - timestamp_updated
    - references_updated
```

## Examples

### 1. Valid Decision Front Matter
```yaml
---
id: DECISION-001
title: "Use PostgreSQL for Database"
created: 2024-02-06T10:00:00Z
updated: 2024-02-06T10:00:00Z
memory_types: [semantic, episodic]
status: proposed
impact: high
alternatives_considered: ["MySQL", "MongoDB"]
references: ["TASK-001"]
---
```

### 2. Invalid Front Matter (With Fixes)
```yaml
# Error: Missing required fields
---
title: "Database Choice"
memory_types: [semantic]
---

# Fix: Add all required fields
---
id: DECISION-002
title: "Database Choice"
created: 2024-02-06T10:00:00Z
updated: 2024-02-06T10:00:00Z
memory_types: [semantic]
status: proposed
impact: medium
alternatives_considered: ["Option A", "Option B"]
references: []
---

# Error: Invalid memory types
memory_types: [episodic, working]

# Fix: Include required semantic type
memory_types: [semantic, episodic, working]

# Error: Invalid status
status: implemented

# Fix: Use valid status value
status: accepted
```

## Best Practices

1. **Front Matter Management**:
   - Always use templates for new decisions
   - Keep titles clear and descriptive
   - Update timestamps when editing
   - Use appropriate memory types
   - Maintain accurate references

2. **Memory Types**:
   - Always include `semantic`
   - Add `episodic` for historical tracking
   - Add `working` for active decisions
   - Don't exceed 3 types
   - Follow compatibility rules

3. **Status Updates**:
   - Keep status current
   - Update timestamps
   - Document transitions
   - Add relevant references
   - Follow transition rules

4. **References**:
   - Link related tasks
   - Reference impacted decisions
   - Update when superseded
   - Maintain bidirectional links
   - Validate before saving

## Overview

Architectural decisions in Aegis are organized into several key aspects:

1. **Core Components**
   - Metadata tracks basic information like ID, timestamps, and status
   - Content captures the actual decision details and rationale
   - Validation ensures decisions are properly formatted and referenced
   - Integration connects decisions with other framework components

2. **Decision Lifecycle**
   - Decisions start as 'proposed' when new changes are being considered
   - Move to 'accepted' when approved and implemented
   - Can be marked as 'deprecated' when no longer recommended
   - Finally become 'superseded' when replaced by newer decisions

3. **Memory Integration**
   - Stored in semantic memory as project knowledge
   - Referenced by tasks during implementation
   - Tracked in sessions as they're made
   - Maintained in current state for context

4. **Documentation Flow**
   - Clear context explains why the decision is needed
   - Specific decision details what is being done
   - Rationale documents why this approach was chosen
   - Impact assessment shows effects and required changes
   - Validation ensures proper implementation

This structure helps:
- Track important project decisions
- Understand why changes were made
- Follow the evolution of the system
- Maintain consistent architecture
- Guide future decisions

## Decision Record Structure

### Metadata Section
```yaml
---
id: DECISION-XXX
title: [Decision Title]
created: ${timestamp}
updated: ${timestamp}
memory_types: [semantic, episodic]
status: [proposed | accepted | deprecated | superseded]
priority: [high | medium | low]
references: []
validation:
  format: true
  references: true
  state: true
---
```

### Content Sections

1. **Context**
   - Background information
   - Current situation
   - Problem statement
   - Requirements
   - Constraints
   - Dependencies

2. **Decision**
   - Clear statement
   - Specific changes
   - Implementation approach
   - Technical details
   - Design patterns
   - Architecture impacts

3. **Rationale**
   - Key factors
   - Alternatives
   - Trade-offs
   - Technical insights
   - Performance impacts
   - Security considerations

4. **Impact**
   - Benefits
   - Challenges
   - Areas affected
   - Risk assessment
   - Migration needs
   - Resource requirements

5. **Validation**
   - Success criteria
   - Testing approach
   - Performance metrics
   - Security validation
   - Quality checks
   - Review process

## Validation Rules

### 1. Format Validation
```yaml
validation:
  format:
    id: "DECISION-\\d{3}"
    status: ["proposed", "accepted", "deprecated", "superseded"]
    memory_types: ["semantic", "episodic"]
    priority: ["high", "medium", "low"]
  
  content:
    required: [context, decision, rationale, impact, validation]
    optional: [notes, references]
    validate: [completeness, clarity]
  
  references:
    validate: true
    circular: false
    required: true
```

### 2. State Validation
```yaml
state_validation:
  transitions:
    proposed:
      to: [accepted, deprecated]
      validate: [references, impacts]
    
    accepted:
      to: [deprecated, superseded]
      validate: [replacement, migration]
    
    deprecated:
      to: [superseded]
      validate: [replacement]
    
    superseded:
      final: true
      validate: [replacement_exists]
```

### 3. Reference Validation
```yaml
reference_validation:
  types:
    decisions: "DECISION-\\d{3}"
    tasks: "\\d{6}_\\d{4}_[a-z_]+"
    sessions: "\\d{8}_\\d{4}_session"
  
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
    msg: "Invalid decision ID format"
    action: show_format
    help: "Use DECISION-XXX format"
  
  invalid_status:
    msg: "Invalid decision status"
    action: show_valid_states
    help: "Use valid status values"
  
  invalid_types:
    msg: "Invalid memory types"
    action: show_valid_types
    help: "Use semantic and episodic"
```

### 2. State Errors
```yaml
state_errors:
  invalid_transition:
    msg: "Invalid state transition"
    action: show_valid_transitions
    help: "Check state transition rules"
  
  missing_validation:
    msg: "Missing state validation"
    action: show_requirements
    help: "Complete validation requirements"
```

### 3. Reference Errors
```yaml
reference_errors:
  invalid_target:
    msg: "Invalid reference target"
    action: show_target
    help: "Verify reference exists"
  
  circular_reference:
    msg: "Circular reference detected"
    action: show_cycle
    help: "Break reference cycle"
```

## Operation Pattern Integration

### 1. Framework Check Pattern
```yaml
framework_check:
  decisions:
    validate:
      - format: {check: true}
      - status: {valid: true}
      - references: {resolve: true}
```

### 2. Memory Processing Pattern
```yaml
memory_processing:
  decisions:
    types: [semantic, episodic]
    load: [content, references]
    validate: [format, state]
```

### 3. State Management Pattern
```yaml
state_management:
  decisions:
    track:
      - changes: {record: true}
      - transitions: {validate: true}
      - history: {maintain: true}
```

## Example Decision

```markdown
# Use PostgreSQL for Primary Database

---
id: DECISION-001
title: PostgreSQL as Primary Database
created: 2025-01-20T19:48:53-05:00
updated: 2025-01-20T19:48:53-05:00
memory_types: [semantic, episodic]
status: accepted
priority: high
references: [DECISION-002]
validation:
  format: true
  references: true
  state: true
---

## Context
- Need robust, scalable database
- Complex query support required
- High reliability needed
- Active community important
- Cost considerations critical

## Decision
Using PostgreSQL 16.x:
- Deployment: AWS RDS
- Replication: Multi-AZ
- Backup: Daily snapshots
- Monitoring: CloudWatch

## Rationale
1. Technical Benefits:
   - ACID compliance
   - Advanced features
   - Strong performance
   - Security features

2. Alternatives:
   - MySQL: Less features
   - MongoDB: ACID limits
   - DynamoDB: Cost issues

## Impact
1. Benefits:
   - Data integrity
   - Query power
   - Easy maintenance
   - Good scaling

2. Challenges:
   - Team training
   - Migration work
   - Performance tuning
   - Resource sizing

## Validation
1. Success Metrics:
   - Query performance
   - Data integrity
   - Backup/restore
   - High availability

2. Testing:
   - Performance tests
   - Failover checks
   - Backup validation
   - Load testing
```

## Memory Type Integration

### 1. Semantic Memory
- Architecture knowledge
- Design patterns
- Technical decisions
- Implementation rules
- Best practices
- System constraints
- Quality standards

### 2. Episodic Memory
- Decision context
- Historical progress
- Problem solutions
- Evolution path
- Learning outcomes
- Past challenges
- Success patterns

## Related Documentation

- [Memory Types](operations/memory_types.md)
- [Operation Patterns](operations/patterns.md)
- [Validation Rules](operations/validation.md)
- [Error Handling](operations/error_handling.md)
- [State Management](operations/state_management.md)
