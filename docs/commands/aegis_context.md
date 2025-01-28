# `/aegis context` Command

The `context` command provides a quick refresh of the current working context without performing a full memory reload. It focuses on the most relevant information for the current work, helping maintain focus and productivity during development sessions.

## Usage

```bash
/aegis context
```

## Workflow

```mermaid
graph TD
    A[Command Start] --> B[Quick Refresh]
    B --> C[Show Context]
    C --> D[Ready State]

    subgraph "Quick Refresh"
        B --> B1[Working Memory]
        B --> B2[Current Task]
        B --> B3[Recent Changes]
    end

    subgraph "Context Info"
        C --> C1[Focus Area]
        C --> C2[Progress]
        C --> C3[Next Steps]
    end
```

## Process Steps

1. **Quick Refresh**
   - Working memory
   - Current task
   - Recent changes
   - Active focus

2. **Show Context**
   - Focus area
   - Current progress
   - Next steps
   - Blockers

3. **Ready State**
   - Maintain focus
   - Continue work
   - Track progress
   - Plan ahead

## Context Types

### Working Memory
- Active focus
- Current work
- Technical details
- Open items

### Current Task
- Progress
- Status
- Requirements
- Resources

### Recent Changes
- Code updates
- Decisions
- Progress
- Notes

## Common Issues

1. **Context Loss**
   - Interruptions
   - Lost focus
   - Missing info
   - Unclear state

2. **Information**
   - Too detailed
   - Not clear
   - Mixed focus
   - Scattered

3. **Recovery**
   - Complex work
   - Many tasks
   - Unclear path
   - Missing notes

## Best Practices

1. **Regular Use**
   - After breaks
   - Task switches
   - Reviews
   - Resuming

2. **Review**
   - Check focus
   - See progress
   - Note changes
   - Plan next

3. **Recovery**
   - Quick scan
   - State check
   - Progress view
   - Next steps

For more information, see:
- [Memory System](../memory_system.md)
- [Getting Started](../getting_started.md)
- [Core Files](../core_files.md)