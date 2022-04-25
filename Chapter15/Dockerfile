FROM adoptopenjdk/openjdk11:latest
VOLUME /tmp
EXPOSE 8080
ARG JAR FILE
COPY target/cardatabase-0.0.1-SNAPSHOT.jar app.jar
ENTRYPOINT ["java","-jar","/app.jar"]