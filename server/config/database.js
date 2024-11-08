/* Establish the DB connection pool here. */
// import pg module and dotenv to use environment variables
import pg from 'pg';
import dotenv from 'dotenv';
// load environment variables from .env
dotenv.config();

// Configure the connection using the CONNECTION_STRING from the .env file
const config = {
    connectionString: process.env.CONNECTION_STRING,
};
// Establish the connection pool
export const pool = new pg.Pool(config);
