// Core memory type definitions
const memoryTypes = {
    'Semantic Memory': {
        title: 'Semantic Memory',
        description: 'Long-term storage for project knowledge and architectural decisions. In the Aegis framework, this memory type is primarily managed through the decisions/ directory, storing permanent, structural knowledge about the project.',
        color: '#97C2FC',
        type: 'memory'
    },
    'Procedural Memory': {
        title: 'Procedural Memory',
        description: 'Task-based knowledge representing what needs to be done and how to do it. Managed through the tasks/ directory with different states (active, planned, hold, completed).',
        color: '#FB7E81',
        type: 'memory'
    },
    'Working Memory': {
        title: 'Working Memory',
        description: 'Current project state and focus. Managed through current_state.md, representing the active context and immediate goals.',
        color: '#7BE141',
        type: 'memory'
    },
    'Episodic Memory': {
        title: 'Episodic Memory',
        description: 'Historical record of project sessions and decisions. Stored in the sessions/ directory, capturing the timeline of project development.',
        color: '#FFA807',
        type: 'memory'
    }
};

// Template files that serve as the foundation for each memory type
const templateFiles = {
    'decisions/TEMPLATE.md': {
        title: 'Decision Template',
        description: 'Template for recording architectural and project decisions. Part of semantic memory, providing structure for documenting important choices.',
        type: 'file',
        memoryTypes: ['Semantic Memory']
    },
    'tasks/TEMPLATE.md': {
        title: 'Task Template',
        description: 'Template for creating new tasks. Part of procedural memory, defining the structure for task documentation.',
        type: 'file',
        memoryTypes: ['Procedural Memory']
    },
    'sessions/TEMPLATE.md': {
        title: 'Session Template',
        description: 'Template for recording development sessions. Part of episodic memory, providing a consistent format for session logs.',
        type: 'file',
        memoryTypes: ['Episodic Memory']
    }
};
