# Aegis Command Rules

When the USER types any of these commands, follow the corresponding instructions precisely:

## Core Commands

### `/aegis init <path>`
1. Determine the target directory:
   - If `<path>` is **"."** (dot), copy `.context/` to the **current directory**.
   - If `<path>` is a **folder name**, create that folder in the root directory and copy `.context/` inside it.

2. Copy the base `.context/` directory structure to the specified location:
   ```
   .context/
   ├── AI_INSTRUCTIONS.md     # Framework instructions
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
4. Present organized summary of:
   - Project knowledge (semantic)
   - Active tasks (procedural)
   - Current focus (working)
   - Recent history (episodic)
5. Indicate readiness for requests

### `/aegis save`
1. Follow Save Operation Flow from AI_INSTRUCTIONS.md
2. Update all relevant files based on memory types
3. Create/update session log
4. Update task progress
5. Show summary of changes made

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
1. Read `.context/plan/README.md`
2. Follow the AI Conductor workflow from `ai_conductor.json`
3. Coordinate specialized agents for:
   - Project scope and requirements
   - Architecture and technical planning
   - UI/UX design considerations
   - Quality assurance strategy
   - Infrastructure planning
4. Guide the planning process through:
   - User alignment and requirement gathering
   - Team creation and role assignment
   - Problem solving and architecture design
   - Feedback incorporation and refinement
   - Plan finalization and documentation
5. Maintain planning artifacts in `.context/plan/`:
   - Update README.md with current planning state
   - Refine agent system diagrams (agents.mmd)
   - Adjust workflow diagrams as needed
   - Track document states and progress
6. Support iterative improvement through:
   - User feedback integration
   - Agent review and recommendations
   - Task refinement and updates
   - Plan optimization

---

## Usage Notes
- Commands are case-insensitive
- Must start with `/aegis`
- Can be used at any point during session
- Will maintain context between commands
