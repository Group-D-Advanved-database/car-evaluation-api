
# Car Evaluation API

## MEMBERS
#### BSCNRB180122
#### BSCNRB129923
#### BSCNRB274922
#### BSCNRB130922

#
#
This project is an API built using Node.js and PostgreSQL for the **Car Evaluation Dataset** from the UC Irvine Machine Learning Repository. The goal is to optimize the database performance and make it accessible via RESTful APIs. The project implements stored procedures, triggers, and efficient database optimizations to ensure the system performs well under large datasets.

## Project Overview

The Car Evaluation API provides the following functionalities:

- **Database optimization**: Implements triggers and stored procedures to improve performance.
- **Backend API**: Developed using Node.js and Express.js, the API provides endpoints for managing car evaluation data.
- **Swagger documentation**: Provides interactive API documentation.

## Features

- **CRUD Operations**:
    - **Create** a new car evaluation record.
    - **Read** car evaluation data (by ID and all records).
    - **Update** car evaluation data.
    - **Delete** a car evaluation record.
- **API Documentation**:
    - Interactive API documentation using Swagger.
    - Test API endpoints directly from the documentation interface.

## Database Design

The database for this project is designed using PostgreSQL. The schema was optimized for performance, including indexing, normalization, and appropriate use of foreign keys.

## API Documentation

The API documentation is provided using Swagger. Once the server is running, visit the following URL to view the documentation:


## Optimizations

- **Stored Procedures**: Used for frequently accessed queries to improve performance.
- **Triggers**: Automatically manage inventory levels and other database actions.
- **Performance Testing**: The database was optimized using PostgreSQL's EXPLAIN and ANALYZE commands to measure and improve query performance.

