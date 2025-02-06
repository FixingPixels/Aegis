# Aegis Release Process

This document outlines the process for creating and distributing new releases of the Aegis framework.

## Version Numbering

Aegis follows Semantic Versioning (SemVer):

```bash
MAJOR.MINOR.PATCH
# Example: 1.0.0
```

- **MAJOR**: Breaking changes to framework structure or commands
- **MINOR**: New features, backwards-compatible
- **PATCH**: Bug fixes and documentation updates

## Release Package Structure

A release package should contain:

```bash
aegis-vX.Y.Z/
├── .context/              # Framework directory
│   ├── AI_INSTRUCTIONS.md # Framework guidelines
│   ├── current_state.md  # Template state file
│   ├── plan/            # Planning templates
│   ├── tasks/          # Task templates
│   │   ├── TEMPLATE.md
│   │   └── ...
│   ├── sessions/      # Session templates
│   │   └── TEMPLATE.md
│   └── decisions/    # Decision templates
│       └── TEMPLATE.md
├── COMMANDS.md        # AI assistant rules
├── README.md         # Framework documentation
└── docs/           # Detailed documentation
    ├── getting_started.md
    ├── commands/
    ├── memory_system.md
    └── ...
```

## Release Process

### 1. Pre-Release Checklist

- [ ] All documentation up to date
- [ ] Templates reviewed and validated
- [ ] Command behavior verified
- [ ] Memory system integration tested
- [ ] Cross-references checked
- [ ] Version number determined

### 2. Package Preparation

1. Create clean framework directory:
   ```bash
   mkdir aegis-vX.Y.Z
   ```

2. Copy required files:
   ```bash
   cp -r .context/ aegis-vX.Y.Z/
   cp -r docs/ aegis-vX.Y.Z/
   cp COMMANDS.md README.md aegis-vX.Y.Z/
   ```

3. Clean template files:
   ```bash
   # Remove any development-specific content
   cd aegis-vX.Y.Z/.context
   rm -rf tasks/active/* tasks/completed/* sessions/*
   ```

4. Verify structure:
   ```bash
   # Ensure all required files present
   # Check template files are clean
   # Validate documentation links
   ```

### 3. Release Validation

1. Framework Structure:
   - Verify `.context` directory structure
   - Check all template files
   - Validate file permissions

2. Documentation:
   - Test all documentation links
   - Verify command examples
   - Check cross-references

3. Integration Testing:
   - Test with clean project
   - Verify AI assistant integration
   - Check command behavior

### 4. Distribution

Choose your preferred distribution method:

#### Understanding Checksums
A checksum is like a digital fingerprint of your files. It's a small piece of text that uniquely identifies your release package. If even one byte changes in the package, the checksum will be completely different. This helps:

1. **Verify Integrity**: Ensure the package wasn't corrupted during transfer
2. **Security**: Confirm the package hasn't been tampered with
3. **Validation**: Recipients can verify they got exactly what you sent

#### Providing Checksum Instructions
Include these instructions with your release (customize based on your hosting):

```markdown
# Verifying Your Download

To ensure your download is correct and hasn't been corrupted:

1. Download both files:
   - aegis-v1.0.0.tar.gz (the framework package)
   - aegis-v1.0.0.sha256 (the checksum file)

2. Open your terminal and navigate to the download location:
   ```bash
   cd path/to/downloads
   ```

3. Verify the checksum:
   
   On Mac/Linux:
   ```bash
   shasum -a 256 -c aegis-v1.0.0.sha256
   ```

   On Windows (PowerShell):
   ```powershell
   Get-FileHash aegis-v1.0.0.tar.gz -Algorithm SHA256 | Format-List
   # Compare the Hash output with the content of aegis-v1.0.0.sha256
   ```

4. Check the result:
   - If you see "OK" or the hashes match: The download is verified ✅
   - If you see "FAILED" or different hashes: Download may be corrupted ❌
```

#### Hosting Recommendations
1. **Host Both Files**:
   - Host the package (`.tar.gz` or `.zip`)
   - Host the checksum file (`.sha256`)
   - Keep them easily accessible together

2. **Download Page Example**:
   ```html
   Downloads:
   • Aegis Framework v1.0.0 [Download] (aegis-v1.0.0.tar.gz)
   • Checksum [Download] (aegis-v1.0.0.sha256)
   
   See verification instructions below...
   ```

3. **Security Best Practices**:
   - Use HTTPS for downloads
   - Host checksums on a separate page/server
   - Sign checksums if possible
   - Keep old versions available

#### Option A: Private Distribution
1. Create release archive:
   ```bash
   tar -czf aegis-vX.Y.Z.tar.gz aegis-vX.Y.Z/
   ```

2. Calculate checksums:
   ```bash
   shasum -a 256 aegis-vX.Y.Z.tar.gz > aegis-vX.Y.Z.sha256
   ```

3. Prepare release notes:
   ```markdown
   # Aegis vX.Y.Z

   ## Changes
   - Major change 1
   - Major change 2

   ## Breaking Changes
   - None

   ## Installation
   1. Download aegis-vX.Y.Z.tar.gz
   2. Extract to your project
   3. Copy .context directory

   ## Upgrade Notes
   - Update steps if any
   ```

4. Distribution options:
   - Private file storage (e.g., company server)
   - Private package registry
   - Direct distribution to team
   - Version control system without public access

#### Option B: GitHub Release (Using GitHub CLI)
If using GitHub, you can use the GitHub CLI (`gh`) for easier release management:

1. Install GitHub CLI if needed:
   ```bash
   # Mac (Homebrew)
   brew install gh
   
   # Windows (Scoop)
   scoop install gh
   
   # Login to GitHub CLI
   gh auth login
   ```

2. Create a new release:
   ```bash
   # Create a new tag
   git tag vX.Y.Z
   git push origin vX.Y.Z

   # Create release with files
   gh release create vX.Y.Z \
     --title "Aegis vX.Y.Z" \
     --notes-file release_notes.md \
     aegis-vX.Y.Z.tar.gz \
     aegis-vX.Y.Z.sha256
   ```

3. For private repositories:
   ```bash
   # Create private release
   gh release create vX.Y.Z \
     --title "Aegis vX.Y.Z" \
     --notes-file release_notes.md \
     --repo your-org/your-private-repo \
     aegis-vX.Y.Z.tar.gz \
     aegis-vX.Y.Z.sha256
   ```

4. Verify release:
   ```bash
   # List releases
   gh release list

   # View specific release
   gh release view vX.Y.Z
   ```

5. Managing releases:
   ```bash
   # Delete a release if needed
   gh release delete vX.Y.Z

   # Download release assets
   gh release download vX.Y.Z
   ```

#### Option C: Custom Distribution
You can also:
- Host on internal servers
- Use private cloud storage
- Distribute via secure file transfer
- Use private package registries

The key requirements for any distribution method are:
1. Secure access control
2. Version tracking
3. Checksum verification
4. Release notes availability
5. Update notification system

### 5. Post-Release

1. Update documentation:
   - Update version references
   - Add release notes to changelog
   - Update installation guides

2. Verify distribution:
   - Download and verify checksums
   - Test installation process
   - Validate framework behavior

3. Monitor feedback:
   - Track initial usage
   - Address any issues
   - Document common problems

## Release Checklist Template

```markdown
# Release Checklist: vX.Y.Z

## Pre-Release
- [ ] Version number determined
- [ ] Documentation updated
- [ ] Templates validated
- [ ] Commands tested
- [ ] Cross-references checked

## Package
- [ ] Clean directory created
- [ ] Files copied
- [ ] Templates cleaned
- [ ] Structure verified

## Validation
- [ ] Framework structure checked
- [ ] Documentation verified
- [ ] Integration tested
- [ ] AI assistant rules validated

## Distribution
- [ ] Archive created
- [ ] Checksums generated
- [ ] Release notes prepared
- [ ] GitHub release published

## Post-Release
- [ ] Documentation updated
- [ ] Distribution verified
- [ ] Installation tested
- [ ] Feedback monitored
```

## Maintenance

### Version Control
- Maintain clean main branch
- Tag releases with version numbers
- Keep release branches separate
- Document breaking changes

### Documentation
- Update version references
- Maintain changelog
- Track breaking changes
- Document upgrade paths

### Support
- Monitor issues
- Track common problems
- Update documentation
- Provide upgrade guidance

## Notes

1. **Security**:
   - Never include sensitive data
   - Verify clean templates
   - Check file permissions
   - Validate checksums

2. **Compatibility**:
   - Document breaking changes
   - Provide upgrade guides
   - Test with different AI tools
   - Verify cross-platform

3. **Quality**:
   - Maintain clean templates
   - Verify documentation
   - Test thoroughly
   - Monitor feedback

4. **Distribution**:
   - Use consistent naming
   - Provide checksums
   - Document changes
   - Track versions

### Release Notes Management

Release notes should be maintained in multiple locations to serve different purposes:

1. **CHANGELOG.md** (Primary Source)
   ```markdown
   # Changelog

   All notable changes to Aegis are documented here.
   Format based on [Keep a Changelog](https://keepachangelog.com/).

   ## [X.Y.Z] - YYYY-MM-DD
   ### Added
   - New features
   
   ### Changed
   - Updates to existing functionality
   
   ### Deprecated
   - Soon-to-be removed features
   
   ### Removed
   - Removed features
   
   ### Fixed
   - Bug fixes
   
   ### Security
   - Vulnerability fixes
   ```

2. **README.md Updates**
   - Add latest version number
   - Update any changed features
   - Update installation instructions if needed
   - Link to full changelog
   Example:
   ```markdown
   ## Latest Release
   
   **Current Version**: vX.Y.Z
   See [CHANGELOG.md](./CHANGELOG.md) for detailed release notes.
   
   ### Recent Updates
   - Major feature 1
   - Important change 2
   ```

3. **Release Notes File** (for distribution)
   - Create `release_notes.md` for each release
   - Include installation-specific details
   - Focus on changes relevant to users
   - Store in `docs/releases/vX.Y.Z.md`

4. **GitHub Release** (if using GitHub)
   - Copy relevant sections from CHANGELOG.md
   - Add download and verification instructions
   - Include upgrade notes
   - Link to full documentation

### Release Notes Workflow

1. **During Development**:
   - Update CHANGELOG.md with each significant change
   - Keep an "Unreleased" section at the top
   - Document breaking changes immediately

2. **Pre-Release**:
   - Move "Unreleased" changes to new version
   - Update version numbers
   - Create release_notes.md
   - Update README.md

3. **Post-Release**:
   - Verify all documentation is synchronized
   - Create new "Unreleased" section in CHANGELOG.md
   - Archive release notes

### Release Notes Structure

```markdown
# Release Notes Directory Structure

releases/
├── latest.md              # Symlink to latest release
├── v1.0.0.md             # First major release
├── v1.0.1.md             # Patch release
├── v1.1.0.md             # Feature release
└── archive/              # Older releases
    └── pre-v1.0.0/      # Pre-release versions
``` 