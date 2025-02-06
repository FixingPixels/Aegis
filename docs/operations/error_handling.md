# Error Handling in Operation Patterns

The Aegis framework implements a consistent error handling system across all operation patterns. This document explains how errors are managed, reported, and resolved.

## Error System Overview

```yaml
# Error Handling Definition
errors:
  types:
    framework:    # Framework-level errors
      severity: critical
      recovery: required
    
    operation:    # Operation-specific errors
      severity: warning
      recovery: optional
    
    validation:   # Data validation errors
      severity: error
      recovery: required
    
    state:        # State consistency errors
      severity: critical
      recovery: required
```

## Error Categories

1.  **Framework Errors**

    * Missing required files
    * Invalid directory structure
    * Broken dependencies
    * Configuration issues
    * Permission problems

    ```yaml
    framework_errors:
      types:
        - missing_files:
            severity: critical
            action: check_existence
            recovery: create_missing
        
        - invalid_structure:
            severity: critical
            action: validate_structure
            recovery: fix_structure
        
        - broken_deps:
            severity: critical
            action: check_dependencies
            recovery: fix_dependencies
    ```
2.  **Operation Errors**

    * Invalid commands
    * Missing parameters
    * Operation conflicts
    * Timing issues
    * Resource limits

    ```yaml
    operation_errors:
      types:
        - invalid_command:
            severity: error
            action: validate_command
            recovery: show_help
        
        - missing_params:
            severity: warning
            action: check_params
            recovery: prompt_user
        
        - operation_conflict:
            severity: error
            action: check_conflicts
            recovery: resolve_conflict
    ```
3.  **Validation Errors**

    * Invalid data format
    * Missing required fields
    * Type mismatches
    * Reference errors
    * Constraint violations

    ```yaml
    validation_errors:
      types:
        - invalid_format:
            severity: error
            action: validate_format
            recovery: fix_format
        
        - missing_fields:
            severity: warning
            action: check_fields
            recovery: add_fields
        
        - type_mismatch:
            severity: error
            action: check_types
            recovery: convert_type
    ```
4.  **State Errors**

    * Inconsistent state
    * Invalid transitions
    * State conflicts
    * Lost updates
    * Deadlocks

    ```yaml
    state_errors:
      types:
        - inconsistent_state:
            severity: critical
            action: check_consistency
            recovery: fix_state
        
        - invalid_transition:
            severity: error
            action: validate_transition
            recovery: revert_state
        
        - state_conflict:
            severity: warning
            action: detect_conflicts
            recovery: resolve_conflict
    ```

## Error Processing

1.  **Detection**

    ```yaml
    detection:
      checks:
        - pre_operation: {type: validation}
        - during_operation: {type: state}
        - post_operation: {type: consistency}
    ```
2.  **Handling**

    ```yaml
    handling:
      steps:
        - capture: {details: all}
        - classify: {type: error}
        - log: {level: appropriate}
        - report: {to: user}
    ```
3.  **Recovery**

    ```yaml
    recovery:
      actions:
        - attempt: {fix: automatic}
        - prompt: {if: manual}
        - revert: {if: failed}
    ```

## Error Reporting

1.  **User Messages**

    ```yaml
    messages:
      format:
        - error: {code: string}
        - description: {text: string}
        - solution: {steps: list}
    ```
2.  **Log Entries**

    ```yaml
    logging:
      levels:
        - debug: {details: all}
        - info: {details: important}
        - error: {details: critical}
    ```
3.  **Recovery Steps**

    ```yaml
    recovery_steps:
      format:
        - action: {step: string}
        - expected: {result: string}
        - verify: {check: string}
    ```

## Error Prevention

1.  **Validation Rules**

    ```yaml
    validation:
      rules:
        - format: {check: true}
        - types: {match: true}
        - refs: {exist: true}
    ```
2.  **State Checks**

    ```yaml
    state_checks:
      rules:
        - consistency: {verify: true}
        - transitions: {valid: true}
        - conflicts: {none: true}
    ```
3.  **Operation Guards**

    ```yaml
    guards:
      checks:
        - preconditions: {met: true}
        - resources: {available: true}
        - permissions: {granted: true}
    ```

## Best Practices

1. **Error Definition**
   * Clear error codes
   * Descriptive messages
   * Actionable solutions
   * Appropriate severity
2. **Error Handling**
   * Catch early
   * Handle appropriately
   * Recover gracefully
   * Log completely
3. **Recovery Strategy**
   * Automatic when safe
   * Manual when needed
   * Clear instructions
   * Verification steps
4. **Prevention**
   * Strong validation
   * State guards
   * Resource checks
   * Clear documentation

## Common Patterns

1.  **Try-Recover Pattern**

    ```yaml
    try_recover:
      steps:
        - attempt: {operation: true}
        - catch: {errors: all}
        - recover: {if: possible}
        - report: {always: true}
    ```
2.  **Validate-Execute Pattern**

    ```yaml
    validate_execute:
      steps:
        - validate: {pre: true}
        - execute: {if: valid}
        - validate: {post: true}
        - report: {status: true}
    ```
3.  **Check-Repair Pattern**

    ```yaml
    check_repair:
      steps:
        - check: {state: true}
        - identify: {issues: all}
        - repair: {if: needed}
        - verify: {fixed: true}
    ```

## Related Documentation

* [Pattern System](patterns.md)
* [Framework Structure](../structure.md)
* [Memory Types](memory_types.md)
* [Operation Patterns](operations.md)
