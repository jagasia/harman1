FROM eclipse-temurin:21-jdk-alpine
WORKDIR /app
COPY target/*.war app.war
COPY wait-for-it.sh wait-for-it.sh
RUN chmod +x wait-for-it.sh
EXPOSE 5000
ENTRYPOINT ["./wait-for-it.sh", "mysql", "3306", "--", "java", "-jar", "app.war"]
