FROM eclipse-temurin:17-jre-alpine

RUN mkdir /app

COPY app.jar /app/spring-boot-application.jar

ENTRYPOINT ["java","-jar","/app/spring-boot-application.jar"]