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

#### **Other AI Tools**
- Add [COMMANDS.md](../COMMANDS.md) content to your tool's rule configuration
- Refer to your tool's documentation for specific setup steps

### 3. Understanding Front Matter

Every file in Aegis requires front matter - a YAML section at the start of the file that contains metadata:

```yaml
---
id: TASK-001                  # Unique identifier
title: "My First Task"        # Clear description
created: 2024-02-06T10:00:00Z # Creation time (ISO 8601)
updated: 2024-02-06T10:00:00Z # Last update (ISO 8601)
memory_types: [procedural]    # Memory type(s)
references: []                # Related files
---
```

#### Required Fields
Every file must have these fields:
- `id`: Unique identifier (format varies by type)
- `title`: Clear description
- `created`: Creation timestamp (ISO 8601)
- `updated`: Last update timestamp (ISO 8601)
- `memory_types`: At least one valid memory type
- `references`: List of related files (can be empty)

#### Memory Types
Aegis uses four memory types to organize information:

1. **Semantic** (Project Knowledge)
   - Used for: Decisions, architecture, planning
   - Example: `memory_types: [semantic]`
   - Common in: Decision records, planning docs

2. **Procedural** (Implementation Steps)
   - Used for: Tasks, workflows, processes
   - Example: `memory_types: [procedural]`
   - Required in: Task files

3. **Working** (Current Context)
   - Used for: Active state, current focus
   - Example: `memory_types: [working]`
   - Common in: Current state file

4. **Episodic** (History)
   - Used for: Sessions, progress records
   - Example: `memory_types: [episodic]`
   - Required in: Session logs

Don't worry! The framework will help you use these correctly.

### 4. Start Your Project

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
Aegis organizes information using different memory types:

1. **Semantic Memory** (Project Knowledge)
   - **Location**: `.context/decisions/`, `.context/docs/`
   - **Purpose**: Long-term project knowledge
   - **Examples**: 
     ```yaml
     ---
     memory_types: [semantic]
     ---
     # Architecture Decision
     We will use React for the frontend...
     ```

2. **Procedural Memory** (Tasks)
   - **Location**: `.context/tasks/`
   - **Purpose**: Implementation steps
   - **Examples**:
     ```yaml
     ---
     memory_types: [procedural]
     status: active
     priority: high
     ---
     # Task: Implement Login
     ## Steps
     1. Create login form...
     ```

3. **Working Memory** (Current State)
   - **Location**: `.context/current_state.md`
   - **Purpose**: Active development
   - **Examples**:
     ```yaml
     ---
     memory_types: [working]
     focus: "Login Implementation"
     active_task: "TASK-001"
     ---
     ## Current Focus
     Implementing user authentication...
     ```

4. **Episodic Memory** (History)
   - **Location**: `.context/sessions/`
   - **Purpose**: Development history
   - **Examples**:
     ```yaml
     ---
     memory_types: [episodic]
     participants: ["Developer"]
     objectives: ["Complete login"]
     ---
     ## Progress
     Completed basic form validation...
     ```

### Project Structure
```
.context/
├── AI_INSTRUCTIONS.md     # Framework guidelines
├── ai/                   # AI operation patterns
├── current_state.md     # Working memory
├── tasks/             # Task management
│   ├── active/       # Current tasks
│   ├── planned/      # Future tasks
│   ├── hold/        # Blocked tasks
│   └── completed/   # Finished tasks
├── sessions/        # Development history
└── decisions/       # Project decisions
```

## Essential Commands

All commands are typed in your AI assistant's chat window:

### Planning Phase
```bash
/aegis plan              # Create project plan
/aegis start            # Begin development
/aegis task             # View/manage tasks
/aegis save             # Save progress
/aegis context          # Quick refresh
/aegis help             # Get help
```

## Best Practices

### 1. Front Matter
- Always use templates for new files
- Keep titles clear and descriptive
- Update timestamps when editing
- Use appropriate memory types
- Maintain accurate references

### 2. Memory Types
- Use `semantic` for project decisions
- Use `procedural` for implementation tasks
- Use `working` for current state
- Use `episodic` for session logs
- Combine types when appropriate (max 3)

### 3. Project Organization
- Structure planning phases clearly
- Use phase-based task organization
- Maintain clear task dependencies
- Keep implementation steps focused
- Follow task naming conventions
- Update task status properly

## Troubleshooting

### Common Issues

1. **Front Matter Issues**
   ```yaml
   # Error: Missing required fields
   ---
   title: "My Task"
   # Missing: id, created, updated, memory_types
   ---

   # Solution: Include all required fields
   ---
   id: TASK-001
   title: "My Task"
   created: 2024-02-06T10:00:00Z
   updated: 2024-02-06T10:00:00Z
   memory_types: [procedural]
   references: []
   ---
   ```

2. **Memory Type Issues**
   ```yaml
   # Error: Invalid combination
   memory_types: [semantic, episodic, procedural, working]

   # Solution: Use max 3 compatible types
   memory_types: [semantic, procedural, working]
   ```

3. **Reference Issues**
   ```yaml
   # Error: Invalid reference
   references: ["task-1"]

   # Solution: Use correct format
   references: ["TASK-001"]
   ```

## Next Steps

1. Read the [Memory Types Guide](cross_referencing.md) for detailed information
2. Check [Templates](templates.md) for file creation guides
3. Review [Command Documentation](commands/) for detailed usage
4. Start with `/aegis plan` to begin your project

Remember: The framework will guide you through proper usage of front matter and memory types. When in doubt, use `/aegis help`!

## Additional Resources

- [Command Reference](commands/README.md)
- [Framework Structure](framework/structure.md)
- [Operation Patterns](operations/patterns.md)
- [Contributing Guide](../CONTRIBUTING.md)

---

**Remember**: Aegis enhances AI collaboration but doesn't replace human oversight. Always review generated content and maintain control of critical decisions. 