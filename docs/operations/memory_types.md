# Memory Types in Operation Patterns

The Aegis framework uses different types of memory to manage state, context, and operations. This document explains how memory types work in operation patterns.

## Memory System Overview

```yaml
# Memory Type Definition
memory:
  types:
    semantic:    # Project understanding
      files: [AI_INSTRUCTIONS.md, roadmap.md]
      content: [knowledge, patterns, rules]
    
    procedural:  # Task execution
      files: [tasks/*.md]
      content: [steps, workflows, validation]
    
    working:     # Current state
      files: [current_state.md]
      content: [focus, changes, needs]
    
    episodic:    # Historical context
      files: [sessions/*.md, decisions/*.md]
      content: [changes, decisions, events]
```

## Memory Types

1.  **Semantic Memory**

    * Project knowledge
    * Design patterns
    * Framework rules
    * Technical decisions
    * System architecture

    ```yaml
    semantic:
      sources:
        - AI_INSTRUCTIONS.md
        - roadmap.md
        - decisions/*.md
      
      content:
        - knowledge: {type: project}
        - patterns: {type: design}
        - rules: {type: framework}
    ```
2.  **Procedural Memory**

    * Task workflows
    * Implementation steps
    * Validation rules
    * Process guides
    * Operation sequences

    ```yaml
    procedural:
      sources:
        - tasks/*.md
        - operations/*.yaml
      
      content:
        - tasks: {type: implementation}
        - workflows: {type: process}
        - validation: {type: rules}
    ```
3.  **Working Memory**

    * Current focus
    * Active changes
    * Immediate needs
    * Open questions
    * Current state

    ```yaml
    working:
      sources:
        - current_state.md
        - tasks/active/*.md
      
      content:
        - focus: {type: current}
        - changes: {type: active}
        - needs: {type: immediate}
    ```
4.  **Episodic Memory**

    * Session history
    * Key decisions
    * Important events
    * Progress markers
    * Change records

    ```yaml
    episodic:
      sources:
        - sessions/*.md
        - decisions/*.md
      
      content:
        - history: {type: session}
        - decisions: {type: key}
        - events: {type: important}
    ```

## Memory Processing

1.  **Loading**

    ```yaml
    processing:
      on_load:
        - validate_types: {all: true}
        - check_consistency: {refs: true}
        - resolve_conflicts: {if: found}
    ```
2.  **Validation**

    ```yaml
    validation:
      types:
        - exists: {required: true}
        - format: {valid: true}
        - refs: {resolved: true}
    ```
3.  **Integration**

    ```yaml
    integration:
      combine:
        - semantic_working: {for: context}
        - procedural_working: {for: tasks}
        - episodic_semantic: {for: decisions}
    ```

## Memory Access

1.  **Read Operations**

    ```yaml
    read:
      types: [semantic, episodic]
      filters:
        - relevant: {to: current}
        - recent: {limit: 5}
    ```
2.  **Write Operations**

    ```yaml
    write:
      types: [working, procedural]
      validate:
        - consistency: {check: true}
        - conflicts: {resolve: true}
    ```
3.  **Update Operations**

    ```yaml
    update:
      types: [working]
      rules:
        - atomic: {transaction: true}
        - consistent: {check: true}
    ```

## Memory Combinations

1.  **Context Building**

    ```yaml
    context:
      combine:
        - semantic: {knowledge: true}
        - working: {focus: true}
      
      result:
        - understanding: {current: true}
    ```
2.  **Task Processing**

    ```yaml
    tasks:
      combine:
        - procedural: {steps: true}
        - working: {state: true}
      
      result:
        - execution: {guided: true}
    ```
3.  **Decision Making**

    ```yaml
    decisions:
      combine:
        - semantic: {patterns: true}
        - episodic: {history: true}
      
      result:
        - choices: {informed: true}
    ```

## Best Practices

1.  **Type Specification**

    ```yaml
    memory:
      types:
        read: [type1, type2]    # Clear read access
        write: [type3]          # Limited write access
    ```
2. **Access Control**
   * Minimize write access
   * Use read-only when possible
   * Validate before writing
   * Handle conflicts
3. **Integration**
   * Combine related types
   * Maintain consistency
   * Check references
   * Update atomically
4. **Validation**
   * Check type existence
   * Verify format
   * Resolve references
   * Handle conflicts

## Common Issues

1.  **Type Conflicts**

    ```yaml
    errors:
      type_conflict:
        msg: "Memory type conflict"
        action: resolve_conflict
        help: "Check type consistency"
    ```
2.  **Missing Types**

    ```yaml
    errors:
      missing_type:
        msg: "Required type missing"
        action: show_required
        help: "Ensure type exists"
    ```
3.  **Invalid Access**

    ```yaml
    errors:
      invalid_access:
        msg: "Invalid memory access"
        action: show_permissions
        help: "Check access rules"
    ```

## Related Documentation

* [Pattern System](patterns.md)
* [Framework Structure](../structure.md)
* [Memory Management](../framework/memory.md)
* [Error Handling](../framework/errors.md)
