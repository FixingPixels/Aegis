# Aegis Command Rules

When the USER types any of these commands, follow the corresponding instructions precisely.
See `.context/ai/operations/` for detailed operation patterns.

## Core Commands

### `/aegis plan`
> **IMPORTANT**: Creates/updates `planning_document.md` and generates initial tasks.
> See `.context/ai/operations/plan.yaml` for implementation details.

1. Core Purpose:
   - Create/update project planning document
   - Generate initial project tasks
   - Guide planning process
   - Maintain planning focus

2. Key Rules:
   - Primary work on planning_document.md
   - Creates tasks in tasks/planned
   - Uses phase-based planning
   - Maintains task dependencies
   - No state updates
   - No other file modifications

3. Basic Steps:
   - Create/edit planning document
   - Guide planning process
   - Extract implementation phases
   - Create task files
   - Update based on feedback
   - Keep document focused

### `/aegis start`
> See `.context/ai/operations/start.yaml` for implementation details.

1. Core Purpose:
   - Begin development session
   - Load project context
   - Set initial focus

2. Key Steps:
   - Load and validate context
   - Process all memory types
   - Present organized summary
   - Set session focus

### `/aegis save`
> See `.context/ai/operations/save.yaml` for implementation details.

1. Core Purpose:
   - Preserve session progress
   - Record decisions
   - Update project state

2. Key Steps:
   - Create session log
   - Record significant decisions
   - Update task progress
   - Update project state

### `/aegis status`
> See `.context/ai/operations/status.yaml` for implementation details.

1. Core Purpose:
   - Show current state
   - Read-only operation
   - Quick status check

2. Key Information:
   - Active task progress
   - Recent changes
   - Current focus
   - Pending decisions

### `/aegis task`
> See `.context/ai/operations/task.yaml` for implementation details.

1. Core Purpose:
   - Manage tasks
   - Track progress
   - Handle transitions

2. Key Rules:
   - Move (don't copy) tasks between directories
   - Use `mv` for transitions
   - Update status in frontmatter
   - Follow naming convention
   - Use TEMPLATE.md as base

3. Task States:
   - planned/ → active/: Start work
   - active/ → completed/: Done
   - active/ → hold/: Blocked
   - hold/ → active/: Unblocked

### `/aegis context`
> See `.context/ai/operations/context.yaml` for implementation details.

1. Core Purpose:
   - Quick context refresh
   - Read-only operation
   - Memory update

2. Key Information:
   - Active tasks
   - Recent changes
   - Important decisions
   - Open questions

### `/aegis help [command]`
> See `.context/ai/operations/help.yaml` for implementation details.

1. Core Purpose:
   - Show command help
   - Guide usage
   - Provide examples

2. Command Groups:
   **Setup Commands**:
   - `/aegis plan`: Create/update planning document

   **Regular Commands**:
   - `/aegis start`: Begin development session
   - `/aegis save`: Preserve progress
   - `/aegis status`: Show current state
   - `/aegis task`: Manage tasks
   - `/aegis context`: Quick refresh
   - `/aegis help`: Show help

## Command Next Steps

### Setup Commands
1. After `/aegis plan`:
   - Review planning document
   - Check generated tasks
   - Begin with `/aegis start`
   - Updates: Continue current work

### Regular Commands
1. After `/aegis start`:
   - With tasks: Show task list
   - Without tasks: Suggest planning

2. After `/aegis save`:
   - Tasks done: Check status
   - In progress: Continue work

3. After `/aegis status`:
   - Active work: Show details
   - No work: Suggest tasks

4. After `/aegis task`:
   - In progress: Show progress
   - Completed: Next task

5. After `/aegis context`:
   - Show next actions
   - Suggest commands

## Framework Structure
```
.context/
├── AI_INSTRUCTIONS.md     # Framework instructions
├── plan/                 # Planning documents
├── tasks/               # Task management
│   ├── active/         # Current tasks
│   ├── planned/        # Future tasks
│   ├── hold/          # Blocked tasks
│   └── completed/     # Finished tasks
├── sessions/          # Session records
└── decisions/         # Decision records
```

## Important Notes

1. Framework Setup:
   - Copy `.context` directory
   - Check required files
   - Verify permissions
   - Start with plan/start

2. Command Usage:
   - Case-insensitive
   - Start with `/aegis`
   - Use anytime
   - Maintains context

3. Error Recovery:
   - Check structure
   - Verify files
   - Review errors
   - Use help command
