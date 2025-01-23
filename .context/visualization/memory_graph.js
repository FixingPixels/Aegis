function initializeGraph() {
    // Create nodes for memory types
    const nodes = new vis.DataSet(
        Object.entries(memoryTypes).map(([id, info]) => ({
            id,
            label: info.title,
            title: info.title,
            color: info.color,
            font: { size: 20 },
            shape: 'dot',
            size: 30
        }))
    );

    // Add template file nodes
    Object.entries(templateFiles).forEach(([id, info]) => {
        nodes.add({
            id,
            label: info.title,
            title: info.title,
            color: '#C2FABC',
            font: { size: 14 },
            shape: 'box'
        });
    });

    // Create edges between nodes
    const edges = new vis.DataSet();
    
    // Connect template files to their memory types
    Object.entries(templateFiles).forEach(([id, info]) => {
        info.memoryTypes.forEach(memoryType => {
            edges.add({
                from: id,
                to: memoryType,
                arrows: 'to',
                color: { color: '#848484' }
            });
        });
    });

    // Connect memory types to show relationships
    edges.add([
        { from: 'Working Memory', to: 'Procedural Memory', arrows: 'to', dashes: true },
        { from: 'Working Memory', to: 'Semantic Memory', arrows: 'to', dashes: true },
        { from: 'Working Memory', to: 'Episodic Memory', arrows: 'to', dashes: true }
    ]);

    // Create the network
    const container = document.getElementById('mynetwork');
    const data = { nodes, edges };
    const options = {
        nodes: {
            borderWidth: 2,
            shadow: true
        },
        edges: {
            width: 2,
            shadow: true
        },
        physics: {
            stabilization: true,
            barnesHut: {
                gravitationalConstant: -10000,
                springConstant: 0.002
            }
        }
    };

    const network = new vis.Network(container, data, options);

    // Handle node selection
    network.on('selectNode', function(params) {
        if (params.nodes.length === 1) {
            const nodeId = params.nodes[0];
            const node = nodes.get(nodeId);
            const info = memoryTypes[nodeId] || templateFiles[nodeId];
            
            if (info) {
                updateNodeInfo(info);
            }
        }
    });

    // Handle deselection
    network.on('deselectNode', function() {
        clearNodeInfo();
    });
}

function updateNodeInfo(info) {
    const nodeInfo = document.getElementById('nodeInfo');
    let memoryTypesHtml = '';
    
    if (info.memoryTypes) {
        memoryTypesHtml = info.memoryTypes.map(type => 
            `<span class="memory-type" style="background-color: ${memoryTypes[type].color}">${type}</span>`
        ).join('');
    }

    nodeInfo.innerHTML = `
        <div class="info-title">${info.title}</div>
        <div class="info-section">
            <div class="info-content">${info.description}</div>
            ${memoryTypesHtml}
        </div>
    `;
}

function clearNodeInfo() {
    const nodeInfo = document.getElementById('nodeInfo');
    nodeInfo.innerHTML = `
        <div class="info-title">Aegis Memory System</div>
        <div class="info-section">
            <div class="info-content">
                Select a node to view details about that component of the memory system.
            </div>
        </div>
    `;
}

// Initialize the graph when the page loads
window.addEventListener('load', initializeGraph);
