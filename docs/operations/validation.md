# Validation in Operation Patterns

The Aegis framework implements a comprehensive validation system across all operation patterns. This document explains how validation is performed, managed, and integrated into operations.

## Validation System Overview

```yaml
# Validation Definition
validation:
  types:
    structure:    # Framework structure validation
      level: critical
      required: true
    
    data:         # Data format validation
      level: error
      required: true
    
    state:        # State consistency validation
      level: warning
      required: false
    
    operation:    # Operation validation
      level: error
      required: true
```

## Validation Categories

1.  **Structure Validation**

    * Directory structure
    * Required files
    * File permissions
    * Dependencies
    * Configuration

    ```yaml
    structure_validation:
      checks:
        - directories:
            required: [.context, tasks, sessions]
            permissions: rwx
        
        - files:
            required: [AI_INSTRUCTIONS.md, current_state.md]
            permissions: rw
        
        - dependencies:
            check: existence
            resolve: missing
    ```
2.  **Data Validation**

    * File formats
    * Content structure
    * Required fields
    * Data types
    * References

    ```yaml
    data_validation:
      checks:
        - format:
            type: [yaml, markdown]
            schema: required
        
        - content:
            structure: defined
            fields: complete
        
        - references:
            resolve: true
            circular: false
    ```
3.  **State Validation**

    * State consistency
    * Transitions
    * Dependencies
    * Conflicts
    * Integrity

    ```yaml
    state_validation:
      checks:
        - consistency:
            check: state
            resolve: conflicts
        
        - transitions:
            valid: true
            allowed: defined
        
        - integrity:
            maintain: true
            verify: changes
    ```
4.  **Operation Validation**

    * Command syntax
    * Parameters
    * Preconditions
    * Resources
    * Permissions

    ```yaml
    operation_validation:
      checks:
        - syntax:
            command: valid
            params: complete
        
        - conditions:
            pre: satisfied
            post: verified
        
        - resources:
            available: true
            sufficient: true
    ```

## Validation Processing

1.  **Pre-validation**

    ```yaml
    pre_validation:
      steps:
        - check_structure: {level: critical}
        - verify_state: {level: error}
        - validate_input: {level: warning}
    ```
2.  **During-validation**

    ```yaml
    during_validation:
      steps:
        - monitor_state: {continuous: true}
        - check_conditions: {as_needed: true}
        - verify_changes: {on_update: true}
    ```
3.  **Post-validation**

    ```yaml
    post_validation:
      steps:
        - verify_results: {complete: true}
        - check_consistency: {state: true}
        - validate_output: {format: true}
    ```

## Validation Rules

1.  **Structure Rules**

    ```yaml
    structure_rules:
      enforce:
        - directories: {exist: true}
        - files: {present: true}
        - permissions: {correct: true}
    ```
2.  **Data Rules**

    ```yaml
    data_rules:
      enforce:
        - format: {valid: true}
        - content: {complete: true}
        - types: {match: true}
    ```
3.  **State Rules**

    ```yaml
    state_rules:
      enforce:
        - consistency: {maintain: true}
        - transitions: {valid: true}
        - integrity: {preserve: true}
    ```

## Validation Patterns

1.  **Check-Report Pattern**

    ```yaml
    check_report:
      steps:
        - validate: {target: specified}
        - collect: {issues: all}
        - report: {format: clear}
        - suggest: {fixes: available}
    ```
2.  **Validate-Fix Pattern**

    ```yaml
    validate_fix:
      steps:
        - check: {issues: all}
        - analyze: {fixes: possible}
        - apply: {fixes: safe}
        - verify: {results: true}
    ```
3.  **Monitor-Maintain Pattern**

    ```yaml
    monitor_maintain:
      steps:
        - watch: {state: continuous}
        - detect: {issues: early}
        - correct: {problems: found}
        - ensure: {consistency: true}
    ```

## Best Practices

1. **Validation Definition**
   * Clear requirements
   * Specific rules
   * Appropriate levels
   * Complete coverage
2. **Validation Process**
   * Early detection
   * Continuous checking
   * Clear reporting
   * Actionable fixes
3. **Error Management**
   * Clear messages
   * Helpful suggestions
   * Recovery steps
   * Prevention guidance
4. **Maintenance**
   * Regular updates
   * Rule refinement
   * Coverage expansion
   * Performance optimization

## Common Issues

1.  **Structure Issues**

    ```yaml
    structure_issues:
      types:
        - missing_files:
            level: critical
            fix: create
        
        - wrong_permissions:
            level: error
            fix: adjust
    ```
2.  **Data Issues**

    ```yaml
    data_issues:
      types:
        - invalid_format:
            level: error
            fix: correct
        
        - missing_fields:
            level: warning
            fix: complete
    ```
3.  **State Issues**

    ```yaml
    state_issues:
      types:
        - inconsistent:
            level: error
            fix: resolve
        
        - invalid_transition:
            level: warning
            fix: revert
    ```

## Integration Points

1.  **Operation Integration**

    ```yaml
    operation_integration:
      points:
        - pre_execution: {validate: true}
        - during_execution: {monitor: true}
        - post_execution: {verify: true}
    ```
2.  **Memory Integration**

    ```yaml
    memory_integration:
      points:
        - state_changes: {validate: true}
        - data_updates: {verify: true}
        - context_switches: {check: true}
    ```
3.  **Error Integration**

    ```yaml
    error_integration:
      points:
        - detection: {validate: true}
        - reporting: {format: true}
        - recovery: {verify: true}
    ```

## Related Documentation

* [Pattern System](patterns.md)
* [Framework Structure](../structure.md)
* [Error Handling](error_handling.md)
* [Memory Types](memory_types.md)
