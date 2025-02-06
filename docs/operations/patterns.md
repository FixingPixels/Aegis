# Operation Pattern System

The Aegis framework uses YAML-based operation patterns to define command behavior, validation rules, and workflows. This document explains how patterns work and how to create or modify them.

## Pattern Structure

Every operation pattern follows this standard structure:

```yaml
# Basic Pattern Structure
version: 1.0
command: command_name
description: Command purpose and scope

# Operation Flow
flow:
  pre_checks: []    # Validation before execution
  steps: {}         # Execution steps in order

# Validation Rules
validation: {}      # Rules for checking validity

# Error Handling
errors: {}          # Error definitions and responses

# Additional Sections
memory: {}          # Memory type handling
display: {}         # Output formatting
notes: {}           # Usage notes and restrictions
```

## Core Components

1. **Version Control**
   ```yaml
   version: 1.0     # Pattern specification version
   command: name    # Associated command
   description: ""  # Brief purpose explanation
   ```

2. **Flow Definition**
   ```yaml
   flow:
     pre_checks:    # Pre-execution validation
       - check1: {verify: condition, error: "message"}
     
     steps:         # Ordered execution steps
       1_step_name:
         action: action_type
         parameters: {param1: value1}
   ```

3. **Validation Rules**
   ```yaml
   validation:
    rules:
      - rule1: {check: condition, error: "message"}
    
    files:
      required: [file1, file2]
      optional: [file3]
    
    content:
      verify: [format, completeness]
   ```

4. **Error Handling**
   ```yaml
   errors:
     error_type:
       msg: "Error message"
       action: action_to_take
       help: "Help message"
   ```

## Memory Integration

Patterns can interact with different memory types:

```yaml
memory:
  types:           # Memory types used
    read: [type1]  # Read-only access
    write: [type2] # Write access
  
  processing:      # Processing rules
    on_load: []    # Load-time processing
    on_save: []    # Save-time processing
  
  validation:      # Memory validation
    verify: []     # Verification rules
    resolve: []    # Conflict resolution
```

## Display Rules

For patterns that output information:

```yaml
display:
  format: markdown    # Output format
  sections:          # Content sections
    section1:
      title: "Title"
      show: [items]
      style: style_type
  
  highlighting:      # Visual emphasis
    high_priority: {color: red}
    warnings: {color: yellow}
```

## Pattern Creation

1. **File Location**
   - Place in `.context/ai/operations/`
   - Name as `command_name.yaml`
   - Use lowercase with underscores

2. **Required Sections**
   - Version and command info
   - Flow definition
   - Validation rules
   - Error handling

3. **Optional Sections**
   - Memory processing
   - Display formatting
   - Usage notes
   - Additional rules

## Pattern Validation

Patterns must validate:

1. **Structure**
   - Valid YAML format
   - Required sections present
   - Correct section nesting
   - Valid action types

2. **References**
   - Valid file paths
   - Existing templates
   - Known memory types
   - Valid error codes

3. **Actions**
   - Known action types
   - Valid parameters
   - Correct ordering
   - Clear error handling

## Best Practices

1. **Pattern Design**
   ```yaml
   # Clear Structure
   command: example
   description: "Clear purpose statement"
   
   flow:
     # Logical step ordering
     steps:
       1_first: {action: type1}
       2_second: {action: type2}
   
   # Complete error handling
   errors:
     type1: {msg: "Clear message"}
   ```

2. **Validation**
   - Validate early
   - Check thoroughly
   - Handle errors gracefully
   - Provide clear messages

3. **Memory Usage**
   - Specify types clearly
   - Minimize write access
   - Handle conflicts
   - Maintain consistency

4. **Documentation**
   - Clear descriptions
   - Usage examples
   - Error solutions
   - Integration notes

## Common Patterns

1. **Framework Check**
   ```yaml
   pre_checks:
     - framework_ready: {verify: framework_check}
   ```

2. **File Validation**
   ```yaml
   validation:
     files:
       required: [file1]
       check: [exists, readable]
   ```

3. **Memory Processing**
   ```yaml
   memory:
     types:
       read: [type1]
       write: [type2]
   ```

4. **Error Handling**
   ```yaml
   errors:
     type:
       msg: "Message"
       action: "Action"
       help: "Help text"
   ```

## Integration Guidelines

1. **Command Integration**
   - Clear pre-checks
   - Logical flow
   - Complete validation
   - Proper error handling

2. **Memory Integration**
   - Correct type usage
   - Clear processing
   - Proper validation
   - Conflict handling

3. **System Integration**
   - Framework checks
   - State validation
   - Reference integrity
   - Error propagation

## Related Documentation

- [Framework Structure](../framework/structure.md)
- [Memory System](../framework/memory.md)
- [Command Documentation](../commands/README.md)
- [Error Handling](../framework/errors.md) 