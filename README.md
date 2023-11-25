# Timestamp Microservice

## Overview

This Timestamp Microservice project provides an API endpoint to convert timestamps to human-readable dates and vice versa. It's a simple service built to handle timestamp conversions for Unix timestamps and UTC date strings.

## API Endpoints Address
`https://boilerplate-project-timestamp.harviando.repl.co/api/`
<p><sub><i>*If the server was not up the first time, please retry in 30 seconds.</i></sub></p>

## API Endpoints and Features

1. **Convert Unix Timestamp to UTC**
   - **Route:** `/api/:timestamp`
   - **Method:** `GET`
   - **Description:** Converts a Unix timestamp to a UTC date string.
   - **Response Format**:
     ```json
     {
         "unix": 1451001600000,
         "utc": "Fri, 25 Dec 2015 00:00:00 GMT"
     }
     ```

2. **Convert Date String to Unix Timestamp and UTC**
   - **Route:** `/api/:date`
   - **Method:** `GET`
   - **Description:** Converts a date string to a Unix timestamp and UTC date string.
   - **Response Format**:
     ```json
     {
         "unix": 1451001600000,
         "utc": "Fri, 25 Dec 2015 00:00:00 GMT"
     }
     ```

3. **Handle Invalid Date Input**
   - **Route:** `/api/:invalidDate`
   - **Method:** `GET`
   - **Description:** Handles invalid date inputs and returns an error message.
   - **Response Format**:
     ```json
     {
         "error": "Invalid Date"
     }
     ```

4. **Retrieve Current Timestamp**
   - **Route:** `/api/`
   - **Method:** `GET`
   - **Description:** Returns the current Unix timestamp and UTC date.
   - **Response Format**:
     ```json
     {
         "unix": 1639058376716,
         "utc": "Wed, 09 Dec 2021 12:12:56 GMT"
     }
     ```
*Have a wonderful day :)*

<hr>
<p align="right"><sub><i>Created by Muhammad Harviando - 2023</i></sub></p>
