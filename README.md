# Aegis: The Zero-Dependency Framework for AI-Assisted Development

**Welcome to Aegis!**  
Aegis (pronounced **EE-jis** or **AY-jis**) is a simple, flexible framework designed to make your AI-powered projects smarter and more organized. Whether you're a developer or just starting out, Aegis helps you manage tasks, track progress, and plan efficiently—all using only text files. No special tools, no installations—just you, your ideas, and your favorite AI assistant.

### Why Choose Aegis?

- **Zero Dependencies**: Aegis runs entirely on text files—no software downloads, plugins, or configurations required. You can start using it immediately with any AI-powered development tool.  
- **Universal Compatibility**: Works seamlessly with popular tools like Codeium, Cursor, and Cline, or even standalone systems with your own API keys.  
- **Lightweight and Portable**: All your project’s structure and data are stored in plain text files that you can share, back up, or edit anywhere.  
- **Beginner-Friendly**: Start with just a few simple commands and let Aegis guide you through your project.  

### What Can Aegis Do For You?

- **Stay Organized**: Track tasks, progress, and decisions effortlessly.  
- **Work Smart**: Collaborate with AI agents to brainstorm ideas, build plans, and solve problems.  
- **Plan Your Way**: Design your projects step-by-step with easy-to-follow workflows.  
- **Save Time**: Let the framework remember your past work so you can focus on what’s next.  

### Who Is Aegis For?

- **Beginners**: New to development or AI tools? Aegis simplifies everything so you can focus on your ideas, not the setup.  
- **Busy Professionals**: Save time with lightweight project tracking that stays out of your way.  
- **Teams**: Keep everyone on the same page with clear plans, progress, and shared history.  
- **Experimenters**: Want to try AI tools without overcomplicating things? Aegis works with just a few simple commands.  

### See Aegis in Action

Here's how easy it is to get started:  
```bash
/aegis init .
/aegis plan
/aegis start
```
That’s it! Aegis creates a clear structure for your project, helping you track tasks, make decisions, and plan efficiently—all using your favorite AI tool.  

### Ready to Get Started?

- **[Step-by-Step Guide](./docs/getting_started.md)**: Walkthrough for beginners.  
- **[Memory System Overview](./docs/memory_system.md)**: Learn how Aegis keeps track of everything.  
- **[Command Reference](./docs/commands.md)**: A simple reference for all Aegis commands.

## 🚀 Quick Start

### Step 1: Add the `.context` Directory

Getting started is as easy as cloning the Aegis repo to your project directory.  

```bash
git clone https://github.com/FixingPixels/Aegis.git
```

Or, you can copy the `.context` directory to your project root. This lightweight directory keeps everything organized and ensures your AI assistant has the context it needs to be effective.  

```bash
cp -r /path/to/aegis/context /your/project/root
```

Now your project is ready to work with Aegis!

### Step 2: Update Global Rules

To make sure your AI assistant understands how to interact with Aegis, update its global rules. This only needs to be done once, and we provide simple instructions for popular AI tools:

- **Cursor**: Copy the contents of [COMMANDS.md](COMMANDS.md) to Cursor's Rules for AI.  
- **Codeium**: Copy the commands to Windsurf's Global AI Rules.  
- **Cline**: Rename [COMMANDS.md](COMMANDS.md) to `.clinerules`.  
- **Aider**: Save the commands in `aegis_commands.md` and configure Aider to load them automatically.  

For detailed instructions, see our [Getting Started Guide](./docs/getting_started.md).

### Step 3: Start Your First Session

Once you've set up your environment, you're ready to start using Aegis! Open your AI assistant and run the following commands:

1. **Initialize Aegis**:
   ```bash
   /aegis init .
   ```
2. **Start Your Development Session**:
   ```bash
   /aegis start
   ```

That's it! Aegis will load your project’s context, process its memory, and prepare everything for you to dive into development.

## 🛠️ Commands Overview

Aegis is driven by simple text commands that you enter into your AI assistant. Here's a quick reference for the base commands:

| Command             | Description                            |
|---------|-------------|
| `/aegis init <path>` | Initialize Aegis in your project       |
| `/aegis start`      | Start a new development session        |
| `/aegis save`       | Save the current project state         |
| `/aegis status`     | Check project progress and status      |
| `/aegis task`       | Focus on specific tasks or workflows   |
| `/aegis context`    | Refresh the current project context    |
| `/aegis plan`       | Collaborate with AI for project planning |

For a complete list of commands and their uses, see our [Command Reference](./docs/commands/aegis_start.md).

## 🎯 Core Features

### 🧠 Intelligent Memory System

Aegis is inspired by how the human brain organizes information, giving your project structure and continuity:  

- **Semantic Memory**: Retains long-term project knowledge, such as architecture decisions and key concepts.  
- **Episodic Memory**: Tracks your development history, including progress, changes, and milestones.  
- **Procedural Memory**: Manages workflows, implementation steps, and task validation.  
- **Working Memory**: Keeps immediate tasks and goals front and center for active problem-solving.  

This memory system ensures that your AI assistant stays informed and effective throughout the development lifecycle.

### 🎭 Multi-Agent Planning

At the heart of Aegis is the **AI Conductor**, which coordinates specialized agents to help you:

- Plan your project’s architecture.
- Collaborate on problem-solving with expert agents.
- Assess risks and refine strategies iteratively based on your feedback.

### 📊 Project Management Made Simple

Aegis organizes your project with an intuitive file structure:

```
.context/
├── planning/          # Project planning
│   ├── initial_plan.md
│   └── ai_conductor.json
├── current_state.md   # Project knowledge
├── roadmap.md         # Future direction
├── tasks/             # Task management
│   ├── active/        # Current tasks
│   ├── completed/     # Finished tasks
│   ├── planned/       # Future tasks
│   └── hold/          # Blocked tasks
├── decisions/         # Architecture decisions
└── sessions/          # Development history
```

This structure keeps everything clear, accessible, and easy to maintain.

## 🌟 Best Practices

Here’s how to make the most of Aegis:

### Memory Management
- Keep files focused and concise.  
- Use cross-references to link related information.  
- Regularly update the current state of your project.  
- Document decisions with context and rationale.

### AI Collaboration
- Provide clear context to your AI assistant.  
- Follow memory type guidelines for efficient task management.  
- Save progress frequently to avoid losing work.

### Project Organization
- Maintain task statuses (e.g., active, completed, or on hold).  
- Record insights and key decisions during sessions.  
- Update the roadmap regularly to stay on track.

## 🤝 Contributing

We welcome your contributions to Aegis! You can help by:

- Improving the documentation.  
- Sharing use cases and workflows.  
- Suggesting new features.  
- Reporting bugs or issues.

Please see our [issues page](https://github.com/FixingPixels/Aegis/issues) for ways to contribute.

## 📝 License

Aegis is open source and available under the MIT License. Feel free to use, modify, and share it to make your projects better!