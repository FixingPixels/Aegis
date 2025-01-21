# Aegis Command Rules

When the USER types any of these commands, follow the corresponding instructions precisely:

## Core Commands

### `/aegis init <path>`
1. Determine the target directory:
   - If `<path>` is **"."** (dot), initialize `.context/` in the **current directory**.
   - If `<path>` is a **folder name**, create that folder in the root directory and initialize `.context/` inside it.

2. Create the `.context/` directory structure at the specified location:
   ```
   .context/
   ├── planning/
   │   └── initial_plan.md    # Original planning document
   ├── current_state.md
   ├── roadmap.md
   ├── tasks/
   │   ├── active/
   │   ├── planned/
   │   └── completed/
   ├── sessions/
   └── decisions/
   ```
3. Process planning document:
   - Move/copy to .context/planning/initial_plan.md
   - Extract core concepts for current_state.md
   - Create project roadmap
   - Generate initial tasks
4. Initialize files with memory types:
   - current_state.md [semantic, working]
   - roadmap.md [semantic]
   - First task(s) [procedural]
5. Show summary of generated structure
6. Transition to `/aegis start` flow

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
2. Assist the user with the project planning process.
3. Follow the AI Conductor workflow as outlined in `ai_conductor.json`.
4. Provide guidance on:
- Project scope and requirements
- Agent assignments and responsibilities
- Architecture and milestone planning
- Risk assessment and mitigation strategies
- Feedback incorporation and iterative improvements
5. Assist in generating and refining the `planning_document.md` in the root of `.context/`.
6. Allow users to request:
- Specific edits to the planning document
- Additional agents or role refinements
- Strategy adjustments based on new project insights
7. Continuously update `planning_document.md` as the planning session progresses.

---

## Usage Notes
- Commands are case-insensitive
- Must start with `/aegis`
- Can be used at any point during session
- Will maintain context between commands
