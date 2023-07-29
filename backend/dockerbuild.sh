rm build/libs/*
./gradlew bootJar
mv build/libs/$(ls build/libs) app.jar
docker build -t registry.lab.lcarilla.de/lehrerliste-backend  .
docker push registry.lab.lcarilla.de/lehrerliste-backend