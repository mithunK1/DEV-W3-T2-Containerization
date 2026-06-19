
Container Build Process

1. Build Backend Image
docker build -t myapp-backend:v1.0.0 ./backend

2. Build Frontend Image
docker build -t myapp-frontend:v1.0.0 ./frontend

3. Run Backend Container
docker run -d -p 5000:5000 myapp-backend:v1.0.0

4. Run Frontend Container
docker run -d -p 3000:80 myapp-frontend:v1.0.0

5. Push to Docker Hub

docker tag myapp-backend:v1.0.0 <dockerhub-username>/myapp-backend:v1.0.0
docker push <dockerhub-username>/myapp-backend:v1.0.0
