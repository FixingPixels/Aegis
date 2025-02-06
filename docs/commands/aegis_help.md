# /aegis help Command

## Purpose

Display help information about Aegis commands and provide guidance on framework usage.

## Usage

```bash
# Show general help
/aegis help

# Show help for specific command
/aegis help <command>
```

## Description

The `/aegis help` command provides contextual assistance for using the Aegis framework. When used without parameters, it displays an overview of all available commands. When used with a specific command name, it provides detailed information about that command's usage, parameters, and examples.

## Parameters

* `command` (optional): The name of the specific command to get help for (e.g., plan, start, save, etc.)

## Examples

### General Help

```bash
/aegis help
```

Shows:

* List of all available commands
* Brief description of each command
* Basic usage patterns
* Links to detailed documentation

### Command-Specific Help

```bash
/aegis help plan
```

Shows:

* Detailed description of the plan command
* All available parameters
* Usage examples
* Related documentation

## Memory Types

* **Semantic**: Accesses documentation and command knowledge
* **Working**: Provides immediate context-aware help

## Behavior

1. Without Parameters:
   * Lists all available commands
   * Shows basic usage patterns
   * Provides navigation to detailed docs
   * Suggests common workflows
2. With Command Parameter:
   * Shows detailed command documentation
   * Provides specific examples
   * Lists related commands
   * Shows common use cases

## Response Format

### General Help

```
Available Commands:
1. Setup Commands:
   - /aegis plan: Create/update planning document

2. Regular Commands:
   - /aegis start: Begin development session
   - /aegis save: Preserve progress
   - /aegis status: Show current state
   - /aegis task: Focus on active task
   - /aegis context: Quick refresh
   - /aegis help: Display command help

Type '/aegis help <command>' for detailed information.
```

### Command-Specific Help

```
Command: /aegis <command>
Purpose: [Command purpose]
Usage: [Basic usage pattern]
Parameters: [Available parameters]
Examples: [Usage examples]
See also: [Related commands]
```

## Notes

* Help is context-aware and considers current project state
* Provides relevant examples based on project context
* Links to detailed documentation when available
* Suggests next steps based on common workflows

## See Also

* [Getting Started Guide](../)
* [Command Reference](./)
* [Memory System](../memory_system.md)
