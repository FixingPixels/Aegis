# Operation Patterns

This directory contains documentation for the YAML-based operation patterns used by AI assistants to execute Aegis framework commands.

## Overview

Operation patterns define the behavior, validation rules, and workflow for each framework command. These patterns are stored as YAML files in `.context/ai/operations/` and provide a structured way for AI assistants to:

1. Validate framework state
2. Process commands consistently
3. Handle errors gracefully
4. Maintain project context
5. Guide user interactions

## Pattern Structure

Each operation pattern follows this general structure:

```yaml
# Operation Pattern Template
version: 1.0
command: command_name
description: Command purpose and scope

# Operation Flow
flow:
  pre_checks:
    - check1: {verify: condition, error: "Error message"}
    - check2: {verify: condition, error: "Error message"}
  
  steps:
    1_step_name:
      action: action_type
      parameters: {param1: value1, param2: value2}
      validate: [check1, check2]

# Validation Rules
validation:
  rules:
    - rule1: {check: condition, error: "Error message"}
    - rule2: {check: condition, error: "Error message"}

# Error Handling
errors:
  error_type:
    msg: "Error message"
    action: action_to_take
    help: "Help message"
```

## Available Patterns

1. [Framework Check](framework_check.md) - Framework structure validation
2. [Plan](plan.md) - Project planning document management
3. [Start](start.md) - Session initialization and context loading
4. [Save](save.md) - Progress preservation and state updates
5. [Status](status.md) - State checking and reporting
6. [Task](task.md) - Task management and tracking
7. [Context](context.md) - Context management and quick refresh

## Pattern Usage

1. **Validation**
   - Framework structure
   - File requirements
   - State consistency
   - Memory types
   - Reference integrity

2. **Workflow**
   - Command steps
   - Required actions
   - State transitions
   - Error handling
   - Success criteria

3. **Error Handling**
   - Error detection
   - Clear messages
   - Recovery steps
   - User guidance
   - State preservation

4. **Memory Management**
   - Memory types
   - State updates
   - Context loading
   - Reference tracking
   - Consistency checks

## Best Practices

1. **Pattern Development**
   - Clear documentation
   - Consistent structure
   - Thorough validation
   - Helpful error messages
   - Complete workflows

2. **Pattern Updates**
   - Version control
   - Backward compatibility
   - Migration paths
   - Clear changelog
   - Update documentation

3. **Integration**
   - AI instruction alignment
   - Command documentation
   - Framework validation
   - Error handling
   - User guidance

## Related Documentation

- [Framework Structure](../framework/structure.md)
- [Memory Types](../framework/memory.md)
- [Command Documentation](../commands/README.md)
- [AI Instructions](../framework/ai_instructions.md) 