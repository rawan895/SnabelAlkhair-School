
# Snabel Alkhair School

## Project Description

Snabel Alkhair School is a school website that provides information about the school, its services, sections, team, and contact details.

The application also provides user registration and login functionality through a backend API.

## Technologies Used

| Technology | Purpose |
|---|---|
| React | Frontend user interface |
| Vite | Frontend development and build tool |
| NestJS | Backend API framework |
| Node.js | JavaScript runtime |
| Nginx | Frontend web server |
| Docker | Application containerization |
| Docker Compose | Running frontend and backend services |

## Project Structure

- backend/: NestJS backend application
- frontend/: React frontend application
- docs/: Project notes and screenshots
- docker-compose.yml: Docker Compose configuration
- Dockerfile: Root Docker configuration
- .dockerignore: Files excluded from Docker build context
- .gitignore: Files excluded from Git
- README.md: Project documentation

## Prerequisites

- Docker Desktop
- Git

Make sure Docker Desktop is running.

## Run the Project with Docker

Build and start both services:

`docker compose up --build`

## Application URLs

- Website: http://localhost:8000
- Registration: http://localhost:8000/register
- Login: http://localhost:8000/login
- Backend API: http://localhost:3000

## Check Running Containers

`docker compose ps`

## View Logs

`docker compose logs`

## Stop the Project

`docker compose down`

## Configuration

| Service | Internal Port | Host Port |
|---|---:|---:|
| Frontend (Nginx) | 80 | 8000 |
| Backend (NestJS) | 3000 | 3000 |

## Testing

1. Start Docker Desktop.
2. Run `docker compose up --build`.
3. Open http://localhost:8000.
4. Register a test account.
5. Log in using the same account.
6. Check both containers using `docker compose ps`.

## Backend API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | / | Check backend status |
| POST | /auth/register | Register a new user |
| POST | /auth/login | Log in an existing user |

## Current Limitations

- User accounts are stored in backend memory.
- Accounts are cleared when the backend restarts.
- The application does not currently use a persistent database.
- Passwords are hashed using Node.js scrypt.

## GitHub Repository

https://github.com/rawan895/SnabelAlkhair-School

## Documentation

Additional project notes and screenshots are available in the docs/ directory.
