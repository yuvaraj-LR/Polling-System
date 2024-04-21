# Polling System API

Welcome to the Polling System API project. This API allows users to create polls, add options, upvote options, and delete options or entire questions.

## Table of Contents

- [Introduction](#introduction)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The Polling System API is designed to facilitate the creation and management of polls. It provides endpoints for creating questions, adding options, upvoting options, and deleting questions or options.

## Getting Started

To run the project locally, follow these steps:

1. **Clone the project:** Open your terminal and clone the project repository using the following command:

``` git clone https://github.com/yuvaraj-LR/Polling-System.git ```


2. **Install dependencies:** Navigate to the project directory in your terminal and install the necessary npm packages by running:

``` npm install ```


3. **Run the project:** Start the server by running the following command:
``` npm start or node server.js ```

## Usage

Once the server is running locally, you can interact with the Polling System API using various endpoints to perform actions such as creating questions, adding options, upvoting options, and deleting questions or options.

## Endpoints

- **Create a Question:** `POST /api/questions`
- Create a new polling question with options.

- **Add an Option:** `POST /api/questions/:id/options`
- Add a new option to an existing question.

- **Upvote an Option:** `PUT /api/questions/:id/options/:optionId/upvote`
- Upvote a specific option of a question.

- **Delete an Option:** `DELETE /api/questions/:id/options/:optionId`
- Delete a specific option from a question.

- **Delete a Question:** `DELETE /api/questions/:id`
- Delete an entire question along with all its options.

