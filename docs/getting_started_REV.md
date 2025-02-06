# Getting Started with Aegis

Welcome to Aegis! This guide will help you start using the zero-dependency framework for AI-assisted development. Aegis provides a structured approach to managing project information and collaborating with AI assistants.

## Prerequisites

- **An AI-powered code assistant** (e.g., Cursor, Codeium)
- **Git** (optional - for version control)
- **That's it!** No other dependencies needed

## Quick Setup

### 1. Set Up Project Structure

First, you need to set up the Aegis framework structure:

1. Download the latest Aegis release package
2. Copy the `.context` directory to your project's root folder:
   ```bash
   your-project/          # Your project root
   ├── .context/         # Framework directory (copy this)
   │   ├── tasks/       # Task management
   │   ├── sessions/    # Development history
   │   ├── decisions/   # Project decisions
   │   └── ...         # Other framework files
   ├── src/            # Your project source
   └── ...            # Other project files
   ```
3. Verify the `.context` directory contains all required subdirectories (tasks, sessions, etc.)

### 2. Configure Your AI Assistant

Next, set up your AI assistant to understand Aegis commands:

#### **Cursor**
1. Open Cursor's settings
2. Navigate to "Rules for AI"
3. Copy the contents of [COMMANDS.md](../COMMANDS.md)
4. Paste into the rules section

#### **Codeium**
1. Open Codeium's settings
2. Go to "Global AI Rules"
3. Copy the contents of [COMMANDS.md](../COMMANDS.md)
4. Paste into the rules section

#### **Other AI Tools**
- Add [COMMANDS.md](../COMMANDS.md) content to your tool's rule configuration
- Refer to your tool's documentation for specific setup steps

### 3. Start Your Project

Begin development by typing in your AI assistant's chat window:

```bash
# For new projects
/aegis plan                # Create project plan
/aegis start              # Begin development

# For existing projects
/aegis start              # Begin development
```

## Core Concepts

### Memory System
Aegis organizes information like human memory:

1. **Semantic Memory** (Project Knowledge)
   - Location: `.context/decisions/`, `.context/docs/`
   - Stores: Architecture decisions, technical specs
   - Example: Design patterns, implementation guidelines

2. **Episodic Memory** (Development History)
   - Location: `.context/sessions/`
   - Stores: Development sessions, problem solutions
   - Example: Implementation history, progress tracking

3. **Procedural Memory** (Implementation Steps)
   - Location: `.context/tasks/`
   - Stores: Active tasks, implementation procedures
   - Example: Testing processes, validation rules

4. **Working Memory** (Current Focus)
   - Location: `.context/current_state.md`
   - Stores: Active development, immediate goals
   - Example: Recent changes, open questions

### Project Structure
```
.context/
├── AI_INSTRUCTIONS.md     # Framework guidelines
├── current_state.md      # Working memory
├── plan/                # Planning documents
├── tasks/              # Task management
│   ├── active/        # Current tasks
│   ├── planned/       # Future tasks
│   ├── hold/         # Blocked tasks
│   └── completed/    # Finished tasks
├── sessions/         # Development history
└── decisions/        # Project decisions
```

## Essential Commands

All commands are typed in your AI assistant's chat window (not terminal):

### Planning Phase
```bash
# Create/update project plan
/aegis plan

# Example with requirements:
/aegis plan
Requirements:
- Mobile support needed
- Offline capabilities
- User authentication
```

### Development Phase
```bash
# Start development session
/aegis start

# Check project status
/aegis status

# Focus on current task
/aegis task

# Save progress
/aegis save

# Quick context refresh
/aegis context

# Get help
/aegis help
```

## Common Workflows

### 1. Starting a New Project
```bash
/aegis plan              # Create initial plan
/aegis start            # Begin development
/aegis task             # View first task
```

### 2. Daily Development
```bash
/aegis start            # Begin session
/aegis task             # Focus on task
/aegis save             # Save progress
```

### 3. Quick Updates
```bash
/aegis status           # Check state
/aegis context          # Refresh context
```

### 4. Getting Help
```bash
/aegis help             # General help
/aegis help <command>   # Command help
```

## Best Practices

### 1. Memory Management
- Keep files focused and concise
- Use cross-references between files
- Update state regularly
- Document decisions with context

### 2. AI Collaboration
- Provide clear context in commands
- Follow memory type guidelines
- Save progress frequently
- Use appropriate memory types

### 3. Project Organization
- Maintain clear task statuses
- Record key decisions
- Update roadmap regularly
- Keep documentation aligned

## Troubleshooting

### Common Issues
1. **Command Not Recognized**
   - Verify AI assistant configuration
   - Check COMMANDS.md content
   - Ensure correct command syntax

2. **Context Issues**
   - Verify `.context` structure
   - Check file permissions
   - Update current state

3. **Task Management**
   - Use correct task transitions
   - Follow naming conventions
   - Update task status properly

### Getting Help
- Use `/aegis help` for command guidance
- Check documentation for detailed info
- Review error messages carefully

## Next Steps

1. Review the [Memory System Guide](./memory_system.md)
2. Learn about [Task Management](./tasks.md)
3. Understand [Decision Records](./decisions.md)
4. Explore [Session Logs](./sessions.md)

## Additional Resources

- [Command Reference](./commands/README.md)
- [Framework Structure](./framework/structure.md)
- [Best Practices Guide](./best_practices.md)
- [Contributing Guide](../CONTRIBUTING.md)

---

**Remember**: Aegis enhances AI collaboration but doesn't replace human oversight. Always review generated content and maintain control of critical decisions. 