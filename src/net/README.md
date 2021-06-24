# Networking Submodule

This directory is the root of all networking related code.

## Protocols

The vscode-psl plugin is designed to work with the PBS and MTM protocols. The
PBS message is embedded in an MTM message. This is send over a TCP/IP socket
to a Profile backend.

## Sessions

Sessions are managed per Profile backend, and are only stored in memory.
