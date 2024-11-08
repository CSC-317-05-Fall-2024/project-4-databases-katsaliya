/* Initialize the data in the DB */
import { pool } from './database.js';

const dropTables = async () => {
    try {
        // Drop the reviews table first to avoid foreign key constraint issues
        await pool.query('DROP TABLE IF EXISTS reviews;');
        await pool.query('DROP TABLE IF EXISTS restaurants;');
        console.log('Dropped tables successfully');
    } catch (error) {
        console.error('Error dropping tables:', error);
    }
};

const createTables = async () => {
    try {
        const createTableQuery = `
            CREATE TABLE IF NOT EXISTS restaurants (
                id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
                name TEXT NOT NULL,
                phone VARCHAR(20),
                address TEXT NOT NULL,
                photo TEXT DEFAULT 'https://picsum.photos/200'
            );
        
            CREATE TABLE IF NOT EXISTS reviews (
                id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
                rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
                content TEXT NOT NULL,
                restaurant_id INT NOT NULL,
                FOREIGN KEY (restaurant_id) REFERENCES restaurants(id) ON DELETE CASCADE      
            );
        `;
        await pool.query(createTableQuery);
        console.log('Created tables successfully');
    } catch (error) {
        console.log(error);
    }
}

const insertData = async () => {
    try {
        const insertRestaurantQuery = `
            INSERT INTO restaurants (name, phone, address, photo) VALUES 
                ('Sühring', '+66 2 287 1799', '10 Yen Akat Soi 3, Bangkok 10120, Thailand', '/images/Sühring.png'),
                ('Nahm', '+66 2 625 3333', '27 South Sathorn Road, Bangkok 10120, Thailand', '/images/nahm.png'),
                ('Gaggan Anand', '+66 98 883 1022', '68 Sukhumvit Soi 31, Bangkok 10110, Thailand', '/images/Gaggan.png'),
                ('Blue Elephant', '+66 76 354 355', '96 Krabi Road, Phuket 83000, Thailand', '/images/Blue.png'),
                ('Baan Rim Pa', '+66 76 340 789', '223 Prabaramee Road, Phuket 83150, Thailand', '/images/baan.png'),
                ('Le Du', '+66 92 919 9969', '399/3 Silom Soi 7, Bangkok 10500, Thailand', '/images/LeDu.png');

            INSERT INTO reviews (rating, content, restaurant_id) VALUES 
                (4, 'Amazing restaurant! I brought my family here and we all loved it.', 1),
                (5, 'I love this place. I go here at least 3 times a week, and I know and love all the employees. Amazing Thai food!', 3),
                (4, 'Great Thai food! I was a bit skeptical to try the food considering how it looked, but street food here always surprises me. I will definitely be back!', 3),
                (3, 'This was an okay Thai place. I have been to a lot of Thai food places and have definitely had better.', 2), 
                (2, 'Not very good at all. Some employees also had a bad attitude.', 4);   
        `;

        await pool.query(insertRestaurantQuery);
        console.log('Inserted data successfully');
    } catch (error) {
        console.log(error)
    }
}

const setup = async () => {
    await dropTables();
    await createTables();
    await insertData();
}

setup();
