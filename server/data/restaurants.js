// db connects execute commands to the database
import { pool } from '../config/database.js';

const getRestaurants = async () => {
    // SQL query to select all records from the 'restaurants' table
    try{
        const results = await pool.query('SELECT * FROM restaurants ORDER BY id ASC')
        return results.rows;
    } catch (error) {
        console.error(error.message);
    }
}

const getRestaurant = async (id) => {
    try{
        const results = await pool.query('SELECT * FROM restaurants WHERE id=$1', [id])
        return results.rows[0];
    } catch (error) {
        console.error(error.message);
    }

}

const createRestaurant = async (newRestaurant) => {
    try {
        const {name, phone, address, photo} = newRestaurant;
        const results = await pool.query('INSERT INTO restaurants (name, phone, address, photo) VALUES ($1, $2, $3, $4) RETURNING *', [name, phone, address, "https://picsum.photos/200"]);
        console.log(results)
        return results.rows[0];
    } catch (error) {
        console.error( error.message )
    }
};

const deleteRestaurant = async (id) => {
    try {
        const results = await pool.query('DELETE FROM restaurants WHERE id = $1', [id])
        return results.rows;
    } catch (error) {
        console.error( error.message )
    }
};

const getReviewsForRestaurant = async (id) => {
    try { 
        const results = await pool.query('SELECT * FROM reviews WHERE restaurant_id = $1', [id])
        console.log(results);
        return results.rows;
    } catch (error) {
        console.error(error.message)
    }
};

export { getRestaurants, getRestaurant, createRestaurant, deleteRestaurant, getReviewsForRestaurant };