# Aegis: Zero-Dependency Framework for AI-Assisted Development

**Welcome to Aegis!** 🚀

**Current Version**:[0.1.1-beta](https://github.com/FixingPixels/Aegis/releases/tag/aegis-0.1.1-beta) (February 6, 2024)

Aegis transforms AI-assisted development by providing a structured memory system inspired by human cognition. Just as our brains organize information into distinct memory types, Aegis helps your AI assistant maintain and process project information more effectively.

## Key Features

- **📝 Zero Dependencies**: Pure text-based framework - no installations or configurations needed
- **🔄 Universal Compatibility**: Works with any AI coding assistant (Cursor, Codeium, etc.)
- **🧠 Cognitive-Inspired**: Organizes project information like human memory
- **🚀 Instant Setup**: Start with just a few simple commands
- **📦 Portable**: Everything stored in plain text files - easy to share and back up

## Quick Start Guide

### 1. Set Up Framework Structure

1. Download the Aegis framework package
2. **IMPORTANT**: Copy the `.context` directory to your project root:
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
3. Verify the `.context` structure is complete

### 2. Configure Your AI Assistant
Copy the contents of [COMMANDS.md](../COMMANDS.md) to your AI assistant's rules:

- **Cursor**: Add to Rules for AI
- **Codeium**: Add to Global AI Rules
- **Other Tools**: Add to configuration/rules section

### 3. Start Development
Type these commands in your AI assistant's chat (not terminal):

```bash
/aegis plan                # Create/update project plan
/aegis start              # Begin development session
```

That's it! Aegis will guide you through the rest.

## 🧠 Memory System

Aegis organizes project information into four memory types:

### 1. Semantic Memory (Project Knowledge)
- Architecture decisions
- Technical specifications
- Design patterns
- Project standards
- Implementation guidelines

**Location**: `.context/decisions/`, `.context/docs/`

### 2. Episodic Memory (Development History)
- Development sessions
- Problem solutions
- Decision contexts
- Implementation history
- Progress tracking

**Location**: `.context/sessions/`

### 3. Procedural Memory (Implementation Steps)
- Active tasks
- Implementation procedures
- Testing processes
- Validation rules
- Quality checks

**Location**: `.context/tasks/`

### 4. Working Memory (Current Focus)
- Active development
- Immediate goals
- Recent changes
- Open questions
- Next steps

**Location**: `.context/current_state.md`

## 🎯 Core Commands

All commands are typed in your AI assistant's chat window:

### Planning Commands
- `/aegis plan`: Create/update project planning document
  ```bash
  # Basic planning
  /aegis plan

  # With requirements
  /aegis plan
  Requirements:
  - Mobile support
  - Offline mode
  - User authentication
  ```

### Development Commands
- `/aegis start`: Begin development session
- `/aegis save`: Preserve progress
- `/aegis status`: Check current state
- `/aegis task`: Focus on active task
- `/aegis context`: Quick refresh
- `/aegis help`: Show command help

## 📁 Project Structure

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

## 🌟 Best Practices

### Memory Management
- Keep files focused and concise
- Use cross-references between related information
- Update current state regularly
- Document decisions with context

### AI Collaboration
- Provide clear context in commands
- Follow memory type guidelines
- Save progress frequently
- Use appropriate memory types

### Project Organization
- Maintain clear task statuses
- Record key decisions
- Update roadmap regularly
- Keep documentation aligned

## ⚠️ Important Notes

1. **Command Usage**
   - Type commands in AI chat, not terminal
   - Commands are case-insensitive
   - All commands start with `/aegis`
   - Available anytime during development

2. **Security**
   - Never commit sensitive data to `.context`
   - Treat as part of your codebase
   - Review AI-generated content
   - Follow security best practices

3. **Maintenance**
   - Regular state updates
   - Clean completed tasks
   - Archive old sessions
   - Update documentation

## 📚 Documentation

- [Getting Started Guide](getting_started.md)
- [Memory System](./operations/memory_types.md)
- [Command Reference](./commands/README.md)
- [Operation Patterns](./operations/patterns.md)
- [Task Management](./tasks.md)
- [Framework Structure](./framework/structure.md)

## 🤝 Contributing

We welcome contributions! You can help by:

- Improving documentation
- Sharing use cases
- Suggesting features
- Reporting issues

See our [Contributing Guide](../CONTRIBUTING.md) for details.

## 📝 License

Aegis is open source under the MIT License. Feel free to use, modify, and share!

---

**Remember**: Aegis is a framework to enhance AI collaboration, not replace human oversight. Always review generated content and maintain control of critical decisions. 