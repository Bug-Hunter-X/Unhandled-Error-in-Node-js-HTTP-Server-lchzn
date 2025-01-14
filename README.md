# Unhandled Error in Node.js HTTP Server

This repository demonstrates an uncommon error in a Node.js HTTP server: failure to handle port binding errors gracefully. The server crashes silently if it cannot bind to the specified port (8080 in this example). This is an uncommon error because most developers focus on handling errors within functions, neglecting potential issues at the server initialization level.

## Bug Description

The provided `bug.js` file contains a simple HTTP server. If the port 8080 is already in use or inaccessible, the server crashes without any informative error message. This silent failure can be problematic in production environments.

## Solution

The `bugSolution.js` file demonstrates a solution using the `'error'` event listener of the HTTP server to handle port binding errors gracefully. This approach provides better error handling and prevents unexpected crashes.

## How to Reproduce the Bug

1.  Run `bug.js`.
2.  If port 8080 is available, the server will start successfully.
3.  If port 8080 is already in use (e.g., by another instance of the server or a different application), the server will crash silently.

## How to Run the Solution

1.  Run `bugSolution.js`.
2.  Even if port 8080 is unavailable, the server will log an informative error message but will not crash.