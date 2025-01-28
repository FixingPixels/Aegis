# Aegis: The Zero-Dependency Framework for AI-Assisted Development

**Welcome to Aegis!**  
Aegis (pronounced **EE-jis** or **AY-jis**) is a simple, flexible framework designed to make your AI-powered projects smarter and more organized. Whether you're a developer or just starting out, Aegis helps you manage tasks, track progress, and plan efficiently—all using only text files. No special tools, no installations—just you, your ideas, and your favorite AI assistant.

### Why Choose Aegis?

- **Zero Dependencies**: Aegis runs entirely on text files—no software downloads, plugins, or configurations required. You can start using it immediately with any AI-powered development tool.
- **Universal Compatibility**: Works seamlessly with popular tools like Codeium, Cursor, and Cline, or even standalone systems with your own API keys.
- **Lightweight and Portable**: All your project's structure and data are stored in plain text files that you can share, back up, or edit anywhere.
- **Beginner-Friendly**: Start with just a few simple commands and let Aegis guide you through your project.

### What Can Aegis Do For You?

- **Stay Organized**: Track tasks, progress, and decisions effortlessly.  
- **Work Smart**: Collaborate with AI agents to brainstorm ideas, build plans, and solve problems.  
- **Plan Your Way**: Design your projects step-by-step with easy-to-follow workflows.  
- **Save Time**: Let the framework remember your past work so you can focus on what's next.  

### Who Is Aegis For?

- **Beginners**: New to development or AI tools? Aegis simplifies everything so you can focus on your ideas, not the setup.  
- **Busy Professionals**: Save time with lightweight project tracking that stays out of your way.  
- **Teams**: Keep everyone on the same page with clear plans, progress, and shared history.  
- **Experimenters**: Want to try AI tools without overcomplicating things? Aegis works with just a few simple commands.  

### See Aegis in Action

Here's how easy it is to get started. Type the following into your AI assistant's chat window:
```bash
/aegis init .
/aegis plan
/aegis start
```
That's it! Aegis creates a clear structure for your project, helping you track tasks, make decisions, and plan efficiently—all using your favorite AI tool. The `/aegis init .` command (alternatively, `/aegis init new-project`) will initialize the framework in your project. 

The `/aegis plan` command focuses solely on helping you create or refine your project's `planning_document.md`. This document outlines your project's goals, architecture, and implementation approach. Once you're happy with your planning document, use `/aegis start` to begin a new development session - this is when tasks will be created and project state initialized based on your planning document.

### Ready to Get Started?

- **[Step-by-Step Guide](./docs/getting_started.md)**: Walkthrough for beginners.  
- **[Memory System Overview](./docs/memory_system.md)**: Learn how Aegis keeps track of everything.  
- **[Command Reference](./docs/commands/aegis_start.md)**: A simple reference for all Aegis commands.

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
- ~~**Cline**: Rename [COMMANDS.md](COMMANDS.md) to `.clinerules`.~~ *(Currently incompatible - Cline cannot access hidden directories like `.context`)*
- **Aider**: Save the commands in `aegis_commands.md` and configure Aider to load them automatically.  

For detailed instructions, see our [Getting Started Guide](./docs/getting_started.md).

### Step 3: Start Your First Session

Once you've set up your environment, you're ready to start using Aegis! Open your AI assistant and run the following commands:

**Initialize Aegis in the root directory**:
   ```bash
   /aegis init .
   ``` 
**(Optional)** **Initialize Aegis in a subdirectory**:
   ```bash
   /aegis init new-project
   ``` 
**Start Your Development Session**:
   ```bash
   /aegis start
   ```

That's it! Aegis will load your project's context, process its memory, and prepare everything for you to dive into development.

## 🛠️ Commands Overview

Aegis uses simple yet powerful commands that you enter into your AI assistant. Here's a comprehensive guide to each command:

### `/aegis init <path>`
Initializes the Aegis framework by copying the `.context` directory structure:
- Use `.` to copy to the current directory
- Use a folder name to create and initialize that folder
```bash
/aegis init .              # Initialize in current directory
/aegis init new-project    # Initialize in new-project directory
```
The command copies the complete `.context` structure with all templates and maintains all memory type assignments.

### `/aegis plan`
Creates or refines the `planning_document.md` in your project root. Focuses solely on planning without modifying other files:
```bash
# Basic planning
/aegis plan

# Planning with project context
/aegis plan I want to build a task management system with real-time features

# Planning with specific requirements
/aegis plan
Requirements:
- Mobile and desktop support
- Offline capabilities
- User authentication
```
The planning document will define clear objectives, technical decisions, implementation steps, and success criteria.

### `/aegis start`
Begins a new development session by:
1. Reading AI_INSTRUCTIONS.md
2. Following Session Start Flow
3. Loading all context by memory type
4. Creating/updating roadmap.md from planning_document.md
5. Presenting organized project summary
```bash
/aegis start
```

### `/aegis save`
Preserves session progress by:
1. Creating a session log
2. Updating task progress
3. Showing changes summary
```bash
/aegis save
```

### `/aegis status`
Shows current working memory without updating files:
- Active task progress
- Recent changes
- Current focus
```bash
/aegis status
```

### `/aegis task`
Focuses on procedural memory to:
1. Show active task details
2. Present implementation progress
3. List blockers and dependencies
```bash
/aegis task
```

### `/aegis context`
Performs a quick context refresh:
1. Shows most relevant information
2. Updates working memory
3. No full reload needed
```bash
/aegis context
```

> **Usage Notes**:
> - Commands are case-insensitive
> - Must start with `/aegis`
> - Can be used at any point during session
> - Will maintain context between commands

For detailed information about each command, including workflows and best practices, see our [Command Reference](./docs/commands/).

## 🧠 Intelligent Memory System

Aegis is inspired by how the human brain organizes information, giving your project structure and continuity:  

- **Semantic Memory**: Retains long-term project knowledge, such as architecture decisions and key concepts.  
- **Episodic Memory**: Tracks your development history, including progress, changes, and milestones.  
- **Procedural Memory**: Manages workflows, implementation steps, and task validation.  
- **Working Memory**: Keeps immediate tasks and goals front and center for active problem-solving.  

This memory system ensures that your AI assistant stays informed and effective throughout the development lifecycle.

### 🎭 Multi-Agent Planning

At the heart of Aegis is the **AI Conductor**, which coordinates specialized agents to help you:

- Plan your project's architecture.
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

Here's how to make the most of Aegis:

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