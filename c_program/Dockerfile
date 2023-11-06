# Set the base image to use
FROM gcc:latest
# Copy the C program into the container
COPY football_score.c .
# Compile the C program
RUN gcc -o football_score football_score.c
# Set the command to run when the container starts
CMD ["./football_score"]