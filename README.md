# Pinterest API Integration Module

This repository contains the standard API integration service for our application. 
Core proprietary business algorithms and frontend assets are excluded to protect intellectual property.

## Purpose of API Integration
Our app helps users manage their social presence efficiently. We use Pinterest API to:
1. Allow users to authenticate securely via OAuth 2.0.
2. Fetch authorized user profile data (`user_accounts:read`) to customize their dashboard experience.
3. Enable users to schedule and publish pins directly to their boards (`pins:write`, `boards:read`).

## Security & Data Privacy
- **No Hardcoded Keys:** All credentials and Access Tokens are managed strictly via environment variables.
- **Data Protection:** We do not store user pins or analytical data on our servers beyond session requirements.
