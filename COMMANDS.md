# Aegis Command Rules

When the USER types any of these commands, follow the corresponding instructions precisely:

## Core Commands

### `/aegis init <path>`
> **IMPORTANT**: 
> - The directory name is ".context" (with a leading dot)
> - ALWAYS use `cp -r` to copy the entire directory structure
> - DO NOT use `mkdir` to create directories manually
> - DO NOT create empty directories

1. Determine the target directory:
   - If `<path>` is **"."** (dot), copy `.context/` to the **current directory**.
   - If `<path>` is a **folder name**, create that folder in the root directory and copy `.context/` inside it.

   > **Important**: The directory name is ".context" (with a leading dot). The exact command to copy would be:
   > ```bash
   > cp -r /path/to/aegis/.context /target/directory/
   > ```
   > Make sure to include the dot when copying or referencing the directory.

2. Copy the base `.context/` directory structure to the specified location:
   ```
   .context/
   ├── AI_INSTRUCTIONS.md     # Framework instructions
   ├── memory_visualization.html  # Base memory graph template
   ├── visualization/         # Visualization assets
   │   ├── memory_graph.js    # Core graph logic
   │   ├── memory_types.js    # Memory definitions
   │   ├── styles.css        # Graph styling
   │   └── vis-network.min.js # Visualization library
   ├── plan/
   │   ├── README.md           # Planning overview
   │   ├── agents.mmd         # Agent system diagram
   │   ├── ai_conductor.json  # Conductor configuration
   │   ├── document_states.mmd # Document workflow
   │   ├── feedback.mmd       # Feedback system
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

3. Initialize project state:
   - Copy all template files from the base `.context/` directory
   - Preserve file structure and permissions
   - Maintain all memory type assignments
   - Keep template examples for reference

4. Show summary of copied structure
5. Transition to `/aegis start` flow

### `/aegis start`
1. Read AI_INSTRUCTIONS.md
2. Follow Session Start Flow
3. Load and process all context by memory type
4. Create/update roadmap.md based on planning_document.md  # New step
5. Present organized summary of:
   - Project knowledge (semantic)
   - Active tasks (procedural)
   - Current focus (working)
   - Recent history (episodic)
6. Indicate readiness for requests

### `/aegis save`
1. Follow Save Operation Flow from AI_INSTRUCTIONS.md
2. Update all relevant files based on memory types:
   - Update roadmap.md with progress and changes
   - Update current_state.md
   - Update active tasks
3. Create/update session log
4. Update task progress
5. Generate memory visualization:
   - Create/update memory_visualization.html
   - Map relationships between files and memory types
   - Show connections between different memory types
   - Include interactive node descriptions
   - Use vis.js for graph visualization
6. Show summary of changes made

> **Note**: The memory visualization provides an interactive graph showing how different parts of your project relate to each other and how information flows through the memory system. View it in any web browser.

### `/aegis status`
1. Show current working memory:
   - Active task progress
   - Recent changes
   - Current focus
2. No file updates, just information

### `/aegis task`
1. Focus on procedural memory
2. Show active task details
3. Present implementation progress
4. List any blockers or dependencies

### `/aegis context`
1. Quick refresh of current context
2. Show most relevant information for current work
3. No full reload, just working memory update

### `/aegis plan`
> **IMPORTANT**: This command works ONLY with `planning_document.md` in the project root.
> - DO NOT create or modify any other files
> - DO NOT create tasks
> - DO NOT update current_state.md
> - DO NOT modify the .context directory
> - ONLY focus on creating and improving the planning document

1. Create or edit `planning_document.md` in the project root:
   - If no document exists, create it with project planning template
   - If document exists, review and offer improvements

2. Guide the user through planning process:
   - Project goals and requirements
   - Technical architecture
   - Implementation approach
   - Timeline and milestones

3. Update document based on user feedback:
   - Incorporate user suggestions
   - Refine existing sections
   - Add missing details
   - Clarify ambiguous points

4. Keep planning_document.md focused and actionable:
   - Clear project objectives
   - Concrete technical decisions
   - Specific implementation steps
   - Defined success criteria

> **Note**: The planning document will be used LATER by `/aegis start` to initialize tasks and update project state. The planning command itself should not do this.

---

## Usage Notes
- Commands are case-insensitive
- Must start with `/aegis`
- Can be used at any point during session
- Will maintain context between commands
