# Snabel Alkhair School

## Project Description
Snabel Alkhair School is a school website that provides information about the school, its services, sections, team, and contact details. It also includes user registration and login functionality.

## Technologies Used
- React and Vite – Frontend
- NestJS – Backend API
- Node.js – JavaScript runtime
- Nginx – Frontend web server
- Docker and Docker Compose – Containerization

## Project Structure
- `frontend/` – React application and frontend Docker configuration.
- `backend/` – NestJS API and backend Docker configuration.
- `docs/` – Project documentation and screenshots.
- `docker-compose.yml` – Runs the frontend and backend services.

## Run the Project with Docker

Make sure Docker Desktop is running, then open PowerShell in the project root directory.

Build and start the services:

```bash
docker compose up --build
```

Open the website:

- Home: http://localhost:8000
- Register: http://localhost:8000/register
- Login: http://localhost:8000/login
- Backend API: http://localhost:3000

## Stop and Clean Up

Stop the running containers:

```bash
docker compose down
```

To stop the containers and remove the project's containers and network, use the same command above. Built images are kept.

## Configuration

| Service | Port |
|---|---:|
| Frontend (Nginx) | 8000 |
| Backend (NestJS) | 3000 |

The frontend is available on port `8000`, and the backend API is available on port `3000`.

## Testing

1. Run the project using Docker Compose.
2. Open http://localhost:8000.
3. Open the Register page and create a test account.
4. Open the Login page and sign in using the same account.
5. Check the home page after login.

The registration and login endpoints are:
- `POST /auth/register`
- `POST /auth/login`

**Note:** User accounts are currently stored in backend memory and are cleared when the backend restarts. This is a demonstration implementation and does not use a persistent database.

## GitHub Repository

[Snabel Alkhair School – GitHub](https://github.com/rawan895/SnabelAlkhair-School)
