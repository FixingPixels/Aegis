 Getting Started with Aegis

Welcome to Aegis! This guide will help you get started with the zero-dependency framework for AI-assisted development. Aegis is designed to work seamlessly with any AI code assistant while providing structured memory management and multi-agent planning capabilities.

## Prerequisites

- **An AI-powered code assistant** (e.g., GitHub Copilot, Codeium, Cursor, Amazon CodeWhisperer)  
- **Git** (optional - for version control)  
- **That’s it!** Aegis has no other dependencies.

## Quick Start

### Step 1: Initialize Aegis in Your Project

To begin, copy the `.context` directory structure to your project:

```bash
/aegis init .
```

This command creates the following directory structure in your project:

```
.context/
├── planning/            # Project planning
├── current_state.md     # Working Memory
├── decisions/           # Semantic Memory
├── roadmap.md           # Project Direction
├── sessions/            # Episodic Memory
└── tasks/               # Procedural Memory
    ├── active/
    ├── completed/
    ├── hold/
    └── planned/
```

### Step 2: Set Up Global Rules for Your AI Assistant

Aegis uses text-based commands to guide your AI assistant. To ensure seamless integration, you’ll need to configure global rules for your specific AI tool. Here’s how:

#### **Cursor**
1. Copy the contents of [COMMANDS.md](COMMANDS.md) to Cursor’s **Rules for AI**.  
   Instructions are available [here](https://docs.cursor.com/context/rules-for-ai).  
2. Start Aegis with:  
   ```bash
   /aegis init .
   /aegis start
   ```

#### **Codeium**
1. Copy the contents of [COMMANDS.md](COMMANDS.md) to Windsurf’s **Global AI Rules**.  
   Instructions are available [here](https://docs.codeium.com/windsurf/memories#global-rules).  
2. Start Aegis with:  
   ```bash
   /aegis init .
   /aegis start
   ```

#### **Cline**
1. Rename [COMMANDS.md](COMMANDS.md) to `.clinerules`.  
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

> For other AI tools, simply copy the commands to your assistant’s rule configuration, ensuring it recognizes `/aegis` commands.

### Step 3: Start Your First Session

Once set up, you can start a new session:

```bash
/aegis start
```

This command:  
- Loads your project’s context.  
- Initializes the memory systems.  
- Prepares for development.  
- Displays the current project state.

## Essential Commands

Here are the key commands you’ll use with Aegis:

| Command             | Description                            |
||-|
| `/aegis init <path>` | Initialize Aegis in your project       |
| `/aegis start`      | Start a new development session        |
| `/aegis save`       | Save the current project state         |
| `/aegis status`     | Check project progress and status      |
| `/aegis task`       | Focus on specific tasks or workflows   |
| `/aegis context`    | Refresh the current project context    |
| `/aegis plan`       | Collaborate with AI for project planning |

For a full list of commands and their descriptions, check the [Command Reference](./commands/aegis_start.md).

## Memory System Overview

Aegis uses a structured memory system to keep your project organized:

1. **Semantic Memory** (Long-term Knowledge)  
   Stores architecture decisions, technical documentation, and implementation standards.  

2. **Episodic Memory** (Project History)  
   Tracks development sessions, decision contexts, and implementation history.  

3. **Procedural Memory** (Task Management)  
   Manages tasks, workflows, and implementation steps.  

4. **Working Memory** (Current Focus)  
   Maintains immediate goals, current challenges, and recent changes.

## Best Practices

1. **Set Up Rules for Your AI Assistant**  
   Ensure your assistant recognizes `/aegis` commands for seamless interaction.

2. **Save Progress Frequently**  
   Use `/aegis save` to avoid losing your work.

3. **Document Decisions**  
   Update the `decisions/` folder regularly with architecture and design choices.

4. **Update Context**  
   Refresh your working memory with `/aegis context`.

## Common Issues and Solutions

### 1. Framework Can’t Find Context
**Cause**: `.context` directory is missing or misconfigured.  
**Solution**: Verify the `.context` directory structure.

### 2. AI Assistant Doesn’t Recognize Commands
**Cause**: Global rules not configured.  
**Solution**: Check the instructions for your specific AI tool in [Step 2](#step-2-set-up-global-rules-for-your-ai-assistant).

### 3. Losing Track of Tasks
**Cause**: Task updates not saved.  
**Solution**: Use `/aegis save` after updates and `/aegis status` to review progress.

## Getting Help

- Review the [Memory System](./memory_system.md) documentation.  
- Check the [Command Reference](./commands/) for detailed command usage.  
- Explore the [Planning System](./planning/overview.md) for AI-guided planning.
