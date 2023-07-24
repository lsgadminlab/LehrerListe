rm build/libs/*
./gradlew bootJar
mv build/libs/$(ls build/libs) app.jar
docker build -t lab-ticket .
