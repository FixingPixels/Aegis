# Start Pattern

The start pattern is used to begin a new development session by validating the framework structure, loading the project context, and setting up the working environment.

## Pattern Definition

```yaml
# Start Operation Pattern
version: 1.0
command: start
description: Session initialization and context loading

# Operation Flow
flow:
  pre_checks:
    - framework_ready: {verify: framework_check, error: "Framework not ready"}
    - no_active_session: {verify: no_session_active, error: "Session already active"}
  
  steps:
    1_load_context:
      action: load_and_validate
      files:
        - ai_instructions: {path: "AI_INSTRUCTIONS.md", required: true}
        - current_state: {path: "current_state.md", required: true}
        - roadmap: {path: "roadmap.md", required: false}
      validate: [file_exists, state_consistency, integrity]
    
    2_process_context:
      action: build_context
      load:
        - current_state: [knowledge, progress, focus]
        - roadmap: [priorities, milestones]
        - tasks: {dir: "tasks/active", pattern: "*.md"}
        - sessions: {dir: "sessions", pattern: "recent*.md", limit: 5}
    
    3_set_focus:
      action: determine_focus
      analyze:
        - active_tasks: {priority: high, status: active}
        - current_priorities: {from: current_state}
        - recent_changes: {from: sessions, limit: 3}
        - open_questions: {from: current_state}
    
    4_present_summary:
      action: show_summary
      sections:
        semantic: [project_knowledge, patterns, decisions]
        procedural: [active_tasks, progress, blockers]
        working: [current_focus, priorities, needs]
        episodic: [recent_changes, decisions, events]
    
    5_indicate_ready:
      action: show_readiness
      display:
        - context: {loaded: true, validated: true}
        - actions: {available: true, validated: true}
        - warnings: {if_any: true}
        - status: "Ready for commands"

# Validation Rules
validation:
  context_load:
    required_files: [AI_INSTRUCTIONS.md, current_state.md]
    optional_files: [roadmap.md]
    check: [exists, readable, valid_format]
  
  state_consistency:
    verify: [memory_types, references, timestamps]
    resolve: [conflicts, missing_refs, invalid_states]
  
  task_status:
    check: [valid_status, active_count, priority_set]
    warn_if: [multiple_active, no_priority]

# Error Handling
errors:
  not_ready: 
    msg: "Framework not ready"
    action: show_setup_instructions
    help: "Copy .context directory to your project and ensure all required files exist"
  
  session_exists:
    msg: "Active session already exists"
    action: show_session
    help: "Save or close existing session"
  
  missing_files:
    msg: "Required files missing"
    action: list_missing
    help: "Ensure all required files exist"
  
  state_invalid:
    msg: "State consistency issues"
    action: show_issues
    help: "Fix state inconsistencies"

# Memory Processing
memory:
  load_order: [semantic, episodic, procedural, working]
  combinations:
    context_build: [semantic, working]
    task_focus: [procedural, working]
    history_check: [episodic, semantic]
  
  validation:
    types: [check_required, verify_combinations]
    content: [validate_format, check_references]
    state: [verify_consistency, resolve_conflicts]
```

## Usage

The start pattern is used to:
1. Begin new development sessions
2. Load complete project context
3. Set current focus and priorities
4. Initialize working environment
5. Prepare command system

## Process Steps

1. **Framework Validation**
   - Verify framework structure
   - Check for active sessions
   - Validate file requirements
   - Ensure state consistency

2. **Context Loading**
   - Load AI instructions
   - Process current state
   - Check active tasks
   - Review recent sessions
   - Load project roadmap

3. **Focus Setting**
   - Identify active tasks
   - Check priorities
   - Review recent changes
   - Note open questions
   - Set current focus

4. **Summary Presentation**
   - Show project knowledge
   - List active tasks
   - Display current focus
   - Note recent changes
   - Present next steps

## Memory Integration

1. **Load Order**
   - Semantic: Project understanding
   - Episodic: Historical context
   - Procedural: Task workflows
   - Working: Current state

2. **Memory Combinations**
   - Context building
   - Task focusing
   - History checking
   - State validation

## Error Recovery

1. **Framework Not Ready**
   ```
   Error: Framework not ready
   Action: Show setup instructions
   Help: Copy .context directory and verify files
   ```

2. **Active Session**
   ```
   Error: Session already exists
   Action: Show active session
   Help: Save or close existing session
   ```

3. **Missing Files**
   ```
   Error: Required files missing
   Action: List missing files
   Help: Create or restore required files
   ```

4. **State Issues**
   ```
   Error: State consistency issues
   Action: Show specific problems
   Help: Fix state inconsistencies
   ```

## Integration

The start pattern integrates with:
1. Framework validation
2. Memory management
3. Task tracking
4. State handling
5. User interaction

## Related Patterns

- [Framework Check](framework_check.md) - Used for initial validation
- [Status](status.md) - Shows current state after start
- [Task](task.md) - Manages active tasks
- [Context](context.md) - Maintains working context 