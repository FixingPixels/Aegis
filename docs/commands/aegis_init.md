# `/aegis init` Command

The `init` command initializes the Aegis framework in your project. It sets up the necessary directory structure and files to enable AI-assisted development with structured memory management.

## Usage

```bash
/aegis init <path>
```

### Arguments

- `<path>`: The target directory for initialization
  - Use `.` to initialize in the current directory
  - Use a name (e.g., `my-project`) to create and initialize a new directory

## Workflow
```mermaid
sequenceDiagram
    actor U as User
    participant AI as AI Assistant
    participant FS as File System
    participant C as AI Conductor
    participant P as Planning
    participant CS as Current State

    U->>AI: /aide init my-project
    
    rect rgb(240, 245, 255)
        Note over AI,FS: Project Setup Phase
        AI->>FS: Create my-project directory
        AI->>FS: Create .context directory structure
        AI->>FS: Copy template files
    end

    rect rgb(245, 240, 255)
        Note over AI,CS: Initialization Phase
        AI->>CS: Initialize current_state.md
        AI->>CS: Set project metadata
        AI->>CS: Create initial roadmap
    end

    AI->>U: Project structure created
    
    alt User wants AI Planning
        U->>AI: /aide plan
        rect rgb(255, 240, 245)
            Note over AI,P: Planning Phase
            AI->>C: Initialize AI Conductor
            C->>P: Load agent definitions
            C->>P: Generate initial plan
            P->>CS: Update project state
            C->>U: Present plan for review
        end
    else User has existing plan
        U->>AI: Copy planning document
        AI->>P: Process planning document
        P->>CS: Update project state
    end

    rect rgb(240, 255, 245)
        Note over AI,U: Ready State
        AI->>U: Show project summary
        AI->>U: Suggest next steps
        Note over U: Ready for /aide start
    end
```

1. **Directory Setup**
   - If `<path>` is `.`: Uses the current directory
   - If `<path>` is a name: Creates a new directory
   - Creates the `.context` directory structure

2. **Memory System Initialization**
   ```
   .context/
   ├── AI_INSTRUCTIONS.md    # Framework instructions
   ├── current_state.md     # Project knowledge
   ├── roadmap.md          # Project direction
   ├── plan/              # Project planning
   │   ├── README.md     # Planning overview
   │   ├── ai_conductor.json  # AI orchestration
   │   ├── agents.mmd    # Agent definitions
   │   ├── workflow.mmd  # Planning workflow
   │   ├── feedback.mmd  # Feedback handling
   │   └── document_states.mmd  # Document lifecycle
   ├── tasks/           # Task management
   │   ├── TEMPLATE.md # Task template
   │   ├── active/    # Current tasks
   │   ├── completed/ # Finished tasks
   │   ├── planned/  # Future tasks
   │   └── hold/    # Blocked tasks
   ├── sessions/   # Session records
   └── decisions/ # Architecture decisions
   ```

3. **Memory Type Setup**
   - **Semantic Memory**: Project knowledge and technical details
     - Initializes `current_state.md`
     - Creates `roadmap.md`
   
   - **Episodic Memory**: Project history
     - Sets up `sessions/` directory
     - Prepares for session logging
   
   - **Procedural Memory**: Task management
     - Creates task directory structure
     - Adds task template
   
   - **Working Memory**: Current focus
     - Initializes current state tracking
     - Sets up active development focus

4. **Planning System Setup**
   - Creates planning directory structure
   - Initializes AI Conductor configuration
   - Sets up agent definitions
   - Prepares workflow diagrams

## Next Steps

After initialization:

1. **For New Projects with AI Planning**
   ```bash
   /aegis plan      # Start AI-guided planning
   /aegis start     # Begin development
   ```

2. **For New Projects with Your Plan**
   ```bash
   # Copy your planning document
   cp your-plan.md .context/plan/initial_plan.md
   
   /aegis start     # Begin development
   ```

3. **For Existing Projects**
   ```bash
   /aegis start     # Begin development
   /aegis status    # Check project state
   ```

## Examples

1. **Initialize in Current Directory**
   ```bash
   /aegis init .
   ```

2. **Create New Project**
   ```bash
   /aegis init my-awesome-project
   ```

## Common Issues

1. **Directory Already Exists**
   - Existing `.context` directory will not be overwritten
   - Use a different path or manually remove existing directory

2. **Permission Issues**
   - Ensure write permissions in target directory
   - Check file ownership if needed

3. **Path Issues**
   - Avoid special characters in path names
   - Use relative paths for best results

## Tips

1. **Project Organization**
   - Keep `.context` directory at project root
   - Use clear, descriptive task names
   - Maintain clean directory structure

2. **Memory Management**
   - Update `current_state.md` regularly
   - Archive completed tasks
   - Document important decisions

3. **Planning Setup**
   - Review AI Conductor configuration
   - Customize agent definitions if needed
   - Adapt workflows to your needs