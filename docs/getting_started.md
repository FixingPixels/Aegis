# Getting Started with Aegis

Welcome to Aegis! This guide will help you get started with the zero-dependency framework for AI-assisted development. Aegis provides structured memory management and project planning capabilities.

## Prerequisites

- **An AI-powered code assistant** (e.g., GitHub Copilot, Codeium, Amazon CodeWhisperer)  
- **Git** (optional - for version control)  
- **That's it!** Aegis has no other dependencies.

## Command Rules

Aegis uses text-based commands that start with `/aegis`. Here are the core rules:

1. **Case-insensitive**: Commands work regardless of case
2. **Must start with `/aegis`**: All commands begin with this prefix
3. **Can be used anytime**: Commands work at any point during a session
4. **Maintains context**: Context is preserved between commands

## Quick Start

### Step 1: Initialize Aegis in Your Project

You can initialize Aegis in two ways:

1. In the current directory:
```bash
/aegis init .
```

2. In a new project directory:
```bash
/aegis init my-project
```

This creates the following directory structure:
```
.context/
├── AI_INSTRUCTIONS.md     # Framework instructions
├── plan/
│   ├── README.md           # Planning overview
│   ├── document_states.mmd # Document workflow
│   └── workflow.mmd       # Planning workflow
├── current_state.md       # Working memory
├── roadmap.md            # Project direction
├── tasks/
│   ├── TEMPLATE.md       # Task template
│   ├── active/          # Current tasks
│   ├── planned/         # Future tasks
│   ├── hold/           # Blocked tasks
│   └── completed/      # Finished tasks
├── sessions/
│   └── TEMPLATE.md      # Session log template
└── decisions/
    └── TEMPLATE.md      # Decision record template
```

### Step 2: Set Up Global Rules for Your AI Assistant

Configure your AI assistant to recognize Aegis commands:

#### **Cursor**
1. Copy the contents of [COMMANDS.md](COMMANDS.md) to Cursor's **Rules for AI**.  
   Instructions are available [here](https://docs.cursor.com/context/rules-for-ai).  
2. Start Aegis with:  
   ```bash
   /aegis init .
   /aegis start
   ```

#### **Codeium**
1. Copy the contents of [COMMANDS.md](COMMANDS.md) to Windsurf's **Global AI Rules**.  
   Instructions are available [here](https://docs.codeium.com/windsurf/memories#global-rules).  
2. Start Aegis with:  
   ```bash
   /aegis init .
   /aegis start
   ```

#### **Aider**
1. Save the commands in `aegis_commands.md` in your project root.  
2. Configure Aider to load the commands automatically by editing `.aider.conf.yml`:  
   ```yaml
   # alone
   read: aegis_commands.md
   ```
3. Start Aegis with:  
   ```bash
   /aegis init .
   /aegis start
   ```

> For other AI tools, copy the commands to your assistant's rule configuration, ensuring it recognizes `/aegis` commands.

### Step 3: Start Your First Session

Begin a new development session:

```bash
/aegis start
```

This command:
1. Reads AI_INSTRUCTIONS.md
2. Follows Session Start Flow
3. Loads and processes all context by memory type
4. Creates/updates roadmap.md based on planning_document.md
5. Presents organized summary of:
   - Project knowledge (semantic)
   - Active tasks (procedural)
   - Current focus (working)
   - Recent history (episodic)
6. Indicates readiness for requests

## Memory System Overview

Aegis uses a cognitive-inspired memory system:

1. **Semantic Memory** (Project Knowledge)  
   - Architecture decisions
   - Technical decisions
   - Design patterns
   - Implementation choices
   - Best practices
   - Project standards

2. **Episodic Memory** (Development History)  
   - Development sessions
   - Problem solutions
   - Decision contexts
   - Implementation history
   - Learning outcomes
   - Progress tracking

3. **Procedural Memory** (Implementation Steps)  
   - Active tasks
   - Implementation steps
   - Testing procedures
   - Deployment processes
   - Validation rules
   - Quality checks

4. **Working Memory** (Current Focus)  
   - Active development
   - Immediate goals
   - Current challenges
   - Recent changes
   - Open questions
   - Next steps

## Essential Commands

Here are the key commands with examples:

### 1. Project Planning
The `/aegis plan` command can be used with various types of context to guide the planning process. See the [planning command details](/docs/planning/README.md) for examples.

```bash
# Create or update planning document
/aegis plan

# Planning with requirements in planning_document.md:
- Must support mobile and desktop
- Need offline capabilities
- User authentication required
- Data must be encrypted

# Planning with technical stack in planning_document.md:
- Python backend
- React frontend
- PostgreSQL database
- AWS deployment

# Planning with timeline in planning_document.md:
- Beta launch in 6 weeks
- Security audit in week 4
- User testing in week 5
```

### 2. Development Flow
```bash
# Start a session
/aegis start

# Check status
/aegis status

# View task details
/aegis task

# Quick context refresh
/aegis context

# Save progress
/aegis save
```

## Next Steps

1. Review the [Memory System](memory_system.md) guide
2. Learn about [Task Management](tasks.md)
3. Understand [Decision Records](decisions.md)
4. Explore [Session Logs](sessions.md)

For more detailed information, check out:
- [Core Files Guide](core_files.md)
- [Cross-Referencing](cross_referencing.md)
- [Templates Guide](templates.md)
