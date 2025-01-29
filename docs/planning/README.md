# AI Planning System

The Aegis framework implements a sophisticated multi-agent planning system orchestrated by an AI Conductor. This system facilitates collaborative problem-solving and project planning through specialized AI agents.

## Documentation Structure

1. [Overview](overview.md)
   - System architecture
   - Key components
   - Core concepts

2. [AI Conductor](conductor.md)
   - Role and responsibilities
   - Orchestration logic
   - Process management

3. [Specialized Agents](agents.md)
   - Agent roles
   - Responsibilities
   - Interactions

4. [Workflow](workflow.md)
   - Planning process
   - State transitions
   - Document lifecycle

5. [Feedback System](feedback.md)
   - Feedback handling
   - Iteration process
   - Refinement workflow

## Quick Start

1. Initiate planning with `/aegis plan`
2. Follow the AI Conductor's guidance
3. Provide feedback when requested
4. Review and approve the final plan

## Command Examples

The `/aegis plan` command can be used with various types of context to guide the planning process. Here are some effective examples:

### 1. Basic Planning
```bash
/aegis plan
```
Initiates the basic planning process with the AI Conductor.

### 2. Planning with Initial Context
```bash
/aegis plan I want to build a web-based task management system with real-time collaboration features
```
Provides immediate project context to guide the planning process.

### 3. Planning from a File
```bash
/aegis plan @idea.txt
```
Provides the AI Conductor with detailed context from any plain text or markdown file. This is useful when you want to:
- Write out your ideas in detail first
- Share planning input from team members
- Include complex requirements or specifications
- Reference existing documentation

### 4. Planning with Requirements
```bash
/aegis plan
Requirements:
- Must support mobile and desktop
- Need offline capabilities
- User authentication required
- Data must be encrypted
```
Starts planning with specific technical requirements.

### 5. Planning with Business Goals
```bash
/aegis plan
Business Goals:
1. Target small teams of 5-10 people
2. Monthly subscription model
3. Launch MVP in 3 months
4. Focus on ease of use
```
Initiates planning with business objectives.

### 6. Planning with Technical Stack
```bash
/aegis plan
Tech Stack:
- Must use Python backend
- React frontend
- PostgreSQL database
- AWS deployment
```
Starts planning with technical stack constraints.

### 7. Planning with Timeline Focus
```bash
/aegis plan
Timeline critical:
- Beta launch in 6 weeks
- Security audit in week 4
- User testing in week 5
```
Emphasizes timeline and milestone requirements.

### 8. Planning with Resource Constraints
```bash
/aegis plan
Available Resources:
- 2 frontend developers
- 1 backend developer
- Part-time DevOps
- $5000 monthly budget
```
Starts planning with resource considerations.

### 9. Planning with Integration Requirements
```bash
/aegis plan
Must integrate with:
- Slack
- GitHub
- Google Calendar
- Existing SSO system
```
Focuses on integration requirements.

Note: The AI Conductor and its specialized agents will use the provided context to generate a comprehensive `planning_document.md` in your project root. The more specific context you provide, the better tailored the planning document will be to your needs.

## Key Features

1. **Multi-Agent Collaboration**
   - Specialized expert agents
   - Coordinated problem-solving
   - Comprehensive coverage

2. **Structured Workflow**
   - Clear process steps
   - State management
   - Progress tracking

3. **Feedback Integration**
   - Iterative refinement
   - User alignment
   - Continuous improvement

4. **Document Management**
   - State tracking
   - Version control
   - Final deliverables

## Integration Points

1. **Commands**
   - `/aegis plan`: Start planning process
   - `/aegis save`: Save planning state
   - `/aegis status`: Check planning progress

2. **Memory System**
   - Procedural memory for workflows
   - Semantic memory for decisions
   - Working memory for active planning

3. **Documentation**
   - Planning documents
   - Architecture decisions
   - Implementation guides
