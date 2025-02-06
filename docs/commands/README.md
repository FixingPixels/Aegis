# Aegis Framework Commands

This directory contains detailed documentation for each Aegis framework command.

## Getting Started

To use the Aegis framework in your project:

1. Download the latest release package containing:
   - `.context` directory
   - `COMMANDS.md`
   - `README.md`

2. Copy the `.context` directory to your project root
3. Update your IDE's AI rules if necessary
4. Begin with either:
   - `/aegis plan` - For new projects needing planning
   - `/aegis start` - For existing projects or to continue work

## Available Commands

### Setup Commands
1. [`/aegis plan`](aegis_plan.md) - Create/update planning document
   - Define project goals and requirements
   - Plan technical implementation
   - Set project milestones

### Regular Commands
1. [`/aegis start`](aegis_start.md) - Begin development session
   - Load project context
   - Set current focus
   - Review active tasks

2. [`/aegis save`](aegis_save.md) - Preserve session progress
   - Create session log
   - Update task progress
   - Record decisions

3. [`/aegis status`](aegis_status.md) - Show current state
   - View active tasks
   - Check progress
   - Show current focus

4. [`/aegis task`](aegis_task.md) - Focus on active task
   - Show task details
   - Track progress
   - Update status

5. [`/aegis context`](aegis_context.md) - Quick context refresh
   - View relevant info
   - Update memory
   - Check state

6. [`/aegis help`](aegis_help.md) - Display command help
   - Show command list
   - Provide usage guidance
   - Access detailed documentation

## Command Flow Examples

1. New Project Setup:
```bash
/aegis plan -> /aegis start
```

2. Continue Development:
```bash
/aegis start -> /aegis task -> /aegis save
```

3. Quick Check:
```bash
/aegis status -> /aegis context
```

4. Get Assistance:
```bash
/aegis help           # General help
/aegis help <command> # Command-specific help
```

## Framework Structure

The Aegis framework uses a `.context` directory structure. See [Framework Structure](../framework/structure.md) for details.

## Error Recovery

If you encounter issues:
1. Verify `.context` directory structure
2. Check required files exist
3. Review error messages
4. Use `/aegis help` for guidance 