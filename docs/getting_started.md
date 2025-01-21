# Getting Started with Aegis

Welcome to Aegis! This guide will help you get started with the zero-dependency framework for AI-assisted development. Aegis is designed to work seamlessly with any AI code assistant while providing structured memory management and multi-agent planning capabilities.

## Prerequisites

- An AI-powered code assistant (e.g., GitHub Copilot, Codeium, Amazon CodeWhisperer)
- Git (for version control)
- That's it! Aegis has no other dependencies

## Quick Start

### 1. Initialize Aegis in Your Project

```bash
# Create the .context directory structure
/aegis init .
```

This command sets up the essential framework structure:
```
.context/
├── AI_INSTRUCTIONS.md    # Framework instructions
├── current_state.md     # Working Memory
├── decisions/          # Semantic Memory
├── plan/              # Project Planning
├── roadmap.md         # Project Direction
├── sessions/          # Episodic Memory
└── tasks/             # Procedural Memory
    ├── active/
    ├── completed/
    ├── hold/
    └── planned/
```

### 2. Start Your First Session

```bash
/aegis start
```

This command:
- Loads project context
- Initializes memory systems
- Prepares for development
- Shows current project state

### 3. Basic Commands

Here are the essential commands you'll use:

- `/aegis status` - Check current project state
- `/aegis task` - Manage development tasks
- `/aegis save` - Save project state
- `/aegis context` - Quick context refresh
- `/aegis plan` - Use AI planning system

## Memory System Overview

Aegis organizes project knowledge into four memory types:

1. **Semantic Memory** (Long-term Knowledge)
   - Architecture decisions
   - Technical documentation
   - System design patterns
   - Implementation standards

2. **Episodic Memory** (Project History)
   - Development sessions
   - Problem solutions
   - Decision contexts
   - Implementation history

3. **Procedural Memory** (Task Management)
   - Active tasks
   - Implementation steps
   - Testing procedures
   - Deployment processes

4. **Working Memory** (Current Focus)
   - Active development
   - Immediate goals
   - Current challenges
   - Recent changes

## Best Practices

### 1. Regular State Updates
- Save progress frequently
- Document decisions
- Update task status
- Maintain context

### 2. Clear Communication
- Use structured commands
- Provide clear context
- Document decisions
- Track progress

### 3. Effective Organization
- Keep files focused
- Use cross-references
- Maintain clean structure
- Regular cleanup

## Next Steps

1. **Explore Documentation**
   - [Core Framework Files](./core_files.md)
   - [Memory System Details](./memory_system.md)
   - [Command Reference](./commands/aegis_start.md)

2. **Review Examples**
   - Check task templates
   - Study decision records
   - Examine session logs

3. **Start Development**
   - Create your first task
   - Document decisions
   - Track progress
   - Save state regularly

## Common Issues and Solutions

### 1. Context Loading
**Issue**: Framework can't find context  
**Solution**: Verify `.context` directory structure

### 2. Memory Management
**Issue**: Losing track of state  
**Solution**: Use `/aegis status` regularly

### 3. Task Tracking
**Issue**: Unclear task progress  
**Solution**: Regular updates with `/aegis task`

## Getting Help

- Review the [Memory System](./memory_system.md) documentation
- Check [Command Reference](./commands/) for detailed command usage
- Study [Core Files](./core_files.md) for framework structure
- Explore [Planning System](./planning/overview.md) for AI-guided planning

## Tips for Success

1. **Regular Updates**
   - Save progress often
   - Document decisions
   - Track changes
   - Maintain context

2. **Clear Organization**
   - Use templates
   - Follow structure
   - Cross-reference
   - Clean regularly

3. **Effective Communication**
   - Clear commands
   - Complete context
   - Regular status
   - Track progress

Remember, Aegis is designed to be intuitive and lightweight. Start with basic commands and gradually explore more advanced features as you become comfortable with the framework.
