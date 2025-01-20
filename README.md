> **⚠ Disclaimer**  
> Some AI-powered code assistants have predefined token limits. While this framework has proven tremendously helpful, be mindful of these limitations. Using assistants with your own API keys can help avoid stricter token limits.
# Aegis: The Intelligent AI Framework for Structured Development

**Aegis** (pronounced **EE-jis** or **AY-jis**) is an advanced AI-assisted development framework designed to guide, protect, and orchestrate your projects with structured memory management and multi-agent planning. Aegis ensures your AI assistant stays informed and effective throughout the development lifecycle.

Inspired by the way the human brain organizes knowledge, Aegis leverages:

- Semantic Memory for long-term knowledge retention
- Episodic Memory to track project history
- Procedural Memory for task execution
- Working Memory for current focus and active problem-solving

At its core, the AI Conductor intelligently coordinates specialized agents for planning, execution, and optimization. Aegis also maintains clarity and continuity through a lightweight .context directory, keeping your project structured and accessible at all times.

## 🚀 Quick Start

### Step 1: Add the `.context` directory
Aegis is a drop-in framework - simply copy the `.context` directory to your project root. That's it! Your project is now ready to use Aegis.

### Step 2: Update global rules
Aegis uses simple commands that your AI Code Assistant will follow. To make sure the assistant understands them, you'll need to update your editor or IDE's global rules. Instructions for 3 popular code assistants are provided below.

## ![image](https://github.com/user-attachments/assets/09be2aa4-5459-4aeb-b69d-982d4d485c2c) Cursor

1. Copy the contents of [COMMANDS.md]() to Cursor's Rules for AI. Instructions can be found [here](https://docs.cursor.com/context/rules-for-ai).

2. Initialize the framework in your project by typing the following command in the chat window:
   ```
   /aegis init .
   ```

3. Start your development session by typing the following command in the chat window:
   ```
   /aegis start
   ```
## ![image](https://github.com/user-attachments/assets/acdd77d5-5f1a-4092-a4a1-a7282dc66b27) Codeium 
1. Copy the contents of [COMMANDS.md]() to Windsurf's Global AI Rules. Instructions can be found [here](https://docs.codeium.com/windsurf/memories#global-rules).

2. Initialize the framework in your project by typing the following command in the chat window:
   ```
   /aegis init .
   ```

3. Start your development session by typing the following command in the chat window:
   ```
   /aegis start
   ```

## ![image](https://github.com/user-attachments/assets/2f9dc685-ae4e-4bc2-b2f2-ad9d2bf70e79) aider
1. Create aegis_commands.md file in your project root

2. Copy [COMMANDS.md]() to aegis_commands.md

3. Configure aider to always load your conventions file in the `.aider.conf.yml` config file. More details [here](https://aider.chat/docs/usage/conventions.html).
   ```
   # alone
   read: aegis_commands.md
   ```

4. Initialize the framework in your project by typing the following command in the chat window:
   ```
   /aegis init .
   ```

5. Start your development session by typing the following command in the chat window:
   ```
   /aegis start
   ```

## 🛠️ Commands

Aegis-specific commands are simply commands you enter in your assistant's chat window. Here are the list of base commands you can use with Aegis:

| Command | Description |
|---------|-------------|
| `/aegis init <path>` | Initialize framework |
| `/aegis start` | Begin development session |
| `/aegis save` | Update project state |
| `/aegis status` | View progress |
| `/aegis task` | Focus on implementation |
| `/aegis context` | Quick context refresh |
| `/aegis plan` | AI-guided planning |

## 🎯 Core Features

### 🧠 Intelligent Memory System
- **Semantic Memory**: Project knowledge, technical details, architecture decisions
- **Episodic Memory**: Development history, changes, progress tracking
- **Procedural Memory**: Task workflows, implementation steps, validation
- **Working Memory**: Current session state, immediate focus, active context

### 🎭 Multi-Agent Planning
- AI Conductor orchestrates specialized expert agents
- Collaborative problem-solving and architecture planning
- Risk assessment and mitigation strategies
- Iterative plan refinement through feedback

### 📊 Project Management
- Task tracking with status-based organization
- Decision records with context and rationale
- Session logs with progress and insights
- Cross-referenced documentation



## 📁 Project Structure

```
.context/
├── planning/                # Project planning
│   ├── initial_plan.md     # Planning document
│   └── ai_conductor.json   # Agent orchestration
├── current_state.md        # Project knowledge
├── roadmap.md             # Project direction
├── tasks/                # Task management
│   ├── active/          # Current tasks
│   ├── completed/       # Finished tasks
│   ├── planned/         # Future tasks
│   └── hold/           # Blocked tasks
├── decisions/          # Architecture decisions
└── sessions/          # Development history
```

## 📘 Documentation

- [Getting Started Guide](./docs/GETTING_STARTED.md)
- [AI Assistant Integration](./docs/INTEGRATION.md)
- [Changelog](./docs/CHANGELOG.md)
- [License](./docs/LICENSE)

## 🔄 Development Workflow

1. **Session Start**
   ```bash
   /aegis start
   ```
   - Loads project context
   - Processes memory types
   - Shows current state

2. **During Development**
   ```bash
   /aegis status  # Check progress
   /aegis task    # Focus on implementation
   /aegis save    # Save changes
   ```
   - Record changes
   - Track progress
   - Document decisions

3. **Project Planning**
   ```bash
   /aegis plan
   ```
   - AI-guided planning
   - Architecture decisions
   - Risk assessment

## 🌟 Best Practices

### Memory Management
- Keep files focused and concise
- Use cross-references
- Update state regularly
- Document decisions

### AI Collaboration
- Provide clear context
- Follow memory type guidelines
- Use structured commands
- Save progress frequently

### Project Organization
- Maintain task status
- Record session insights
- Track architectural decisions
- Update roadmap regularly

## 🤝 Contributing

We welcome contributions! Whether it's:
- Improving documentation
- Sharing use cases
- Suggesting features
- Reporting issues

## 📝 License

[MIT License](./LICENSE)
