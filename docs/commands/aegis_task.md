# Task Command Documentation

The `/aegis task` command focuses on procedural memory, providing detailed information about active tasks, their implementation progress, and any blockers or dependencies. It helps manage and track the actual development work being done.

> **Important**: This command should be typed in your AI assistant's chat window, not in your terminal. The command helps guide your AI assistant in managing tasks.

## Usage

Type in your AI assistant's chat window:
```bash
/aegis task
```

## Workflow

```mermaid
graph TD
    A[Command Start] --> B[Focus on Tasks]
    B --> C[Show Details]
    C --> D[Show Progress]
    D --> E[Show Blockers]

    subgraph "Task Focus"
        B --> B1[Active Tasks]
        B --> B2[Current State]
        B --> B3[Dependencies]
    end

    subgraph "Task Details"
        C --> C1[Description]
        C --> C2[Requirements]
        C --> C3[Resources]
    end

    subgraph "Progress"
        D --> D1[Status]
        D --> D2[Steps]
        D --> D3[Validation]
    end
```

## Process Steps

1. **Focus on Tasks**
   - Load active tasks
   - Check current state
   - Review dependencies
   - Gather resources

2. **Show Task Details**
   - Task description
   - Requirements
   - Resources needed
   - Dependencies

3. **Present Progress**
   - Implementation status
   - Completed steps
   - Validation state
   - Quality checks

4. **List Blockers**
   - Dependencies
   - Resources
   - Technical issues
   - External factors

## Task Creation

When creating a new task, follow these guidelines:

1. **File Naming**
   Use the timestamp-based format:
   ```
   YYMMDD_HHMMSS_description.md
   ```
   Example: `240320_193500_implement-feature.md`

   Where:
   - YY: Year (e.g., 24)
   - MM: Month (01-12)
   - DD: Day (01-31)
   - HH: Hour (00-23)
   - MM: Minute (00-59)
   - SS: Second (00-59)
   - description: Kebab-case description

2. **Naming Guidelines**
   - Use current timestamp for YYMMDD_HHMMSS
   - Use kebab-case for description (lowercase with hyphens)
   - Keep description concise but clear
   - Use only alphanumeric characters and hyphens
   - Avoid special characters

3. **Location**
   - New tasks are created in `.context/tasks/planned/`
   - Use task template from `.context/tasks/TEMPLATE.md`
   - Follow directory structure for task states

4. **Benefits**
   - Unique task identifiers
   - Natural chronological sorting
   - Clear creation timeline
   - Easy task reference
   - No naming conflicts
   - Works across all file systems

See [Task Documentation](../tasks.md) for complete details on task management.

## Task Organization

### Directory Structure
```
tasks/
├── TEMPLATE.md     # Task template
├── active/        # Current tasks
├── completed/    # Finished tasks
├── planned/     # Future tasks
└── hold/       # Blocked tasks
```

### Task States
1. **Active**
   - In development
   - Under review
   - Testing
   - Validation

2. **Planned**
   - Ready
   - Dependencies met
   - Resources ready
   - Prioritized

3. **Hold**
   - Blocked
   - Waiting
   - Limited
   - Delayed

4. **Completed**
   - Done
   - Tested
   - Documented
   - Reviewed

## Common Issues

1. **Task Details**
   - Clear requirements
   - Complete info
   - Defined goals
   - Set scope

2. **Dependencies**
   - Track chains
   - Note requirements
   - Watch progress
   - Handle conflicts

3. **Status**
   - Keep current
   - Show progress
   - Note changes
   - Maintain context

## Best Practices

1. **Task Management**
   - Clear titles
   - Good descriptions
   - Track progress
   - Note blockers

2. **Updates**
   - Regular status
   - Document blocks
   - Track deps
   - Show changes

3. **Organization**
   - Group logically
   - Set priority
   - Track deps
   - Update status

For more information, see:
- [Memory System](../memory_system.md)
- [Getting Started](../getting_started.md)
- [Core Files](../core_files.md)