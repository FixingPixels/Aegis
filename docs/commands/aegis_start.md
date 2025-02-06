# Start Command Documentation

The `/aegis start` command begins a new development session by validating the framework structure, loading the project context, and setting up the working environment.

## Usage

```bash
/aegis start
```

## Workflow

1. Framework Validation:
   - Verify `.context` directory structure exists
   - Check all required files are present
   - Validate file permissions
   - Ensure memory types are consistent
   - Check reference integrity

2. Context Loading:
   - Read AI_INSTRUCTIONS.md
   - Load current_state.md
   - Process active tasks
   - Check recent sessions
   - Load relevant decisions

3. State Analysis:
   - Identify active tasks
   - Check project priorities
   - Review recent changes
   - Note pending decisions
   - Validate memory consistency

4. Session Setup:
   - Set current focus
   - Prepare working memory
   - Initialize procedural tracking
   - Link relevant context
   - Enable command readiness

## Required Files

```
.context/
├── AI_INSTRUCTIONS.md     # Framework instructions
├── current_state.md       # Working memory
├── tasks/                # Task management
│   ├── active/          # Current tasks
│   ├── planned/         # Future tasks
│   └── completed/       # Finished tasks
├── sessions/            # Session records
└── decisions/           # Decision records
```

## Validation Rules

1. Framework Structure:
   - All required directories exist
   - Required files present
   - Correct file permissions
   - Valid memory types
   - Consistent references

2. State Consistency:
   - Valid current_state.md
   - Active tasks present
   - Recent sessions recorded
   - Memory types aligned
   - References resolved

3. Memory Integration:
   - Semantic knowledge loaded
   - Procedural steps ready
   - Working memory initialized
   - Episodic context linked

## Success Criteria

1. Framework validated successfully
2. Context loaded completely
3. State consistency verified
4. Working memory initialized
5. Command system ready

## Error Handling

1. Missing Framework:
   ```
   Error: Framework not found
   Solution: Copy .context directory to project root
   ```

2. Invalid Structure:
   ```
   Error: Invalid framework structure
   Solution: Verify required directories and files
   ```

3. State Issues:
   ```
   Error: State consistency error
   Solution: Check current_state.md format and content
   ```

4. Memory Problems:
   ```
   Error: Memory type mismatch
   Solution: Verify memory types in affected files
   ```

## Next Steps

After successful start:
1. Review active tasks
2. Check project status
3. Begin development work
4. Use other commands as needed

## Related Documentation

- [Framework Structure](../framework/structure.md)
- [Memory Types](../framework/memory.md)
- [State Management](../framework/state.md)
- [Error Recovery](../framework/errors.md)