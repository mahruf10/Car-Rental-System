import {Pool} from 'pg'
import config from '.'
export const pool=new Pool({
connectionString:config.connectionStr
})

const initDb=async()=>{
try {
    await pool.query(`
    CREATE TABLE IF NOT EXISTS users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(30) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    CONSTRAINT email_check CHECK (email=LOWER(email)),
    password TEXT NOT NULL,
    CONSTRAINT passLength CHECK (LENGTH(password)>=6),
    phone VARCHAR(15) NOT NULL,
    role VARCHAR(20) NOT NULL DEFAULT 'customer',
    CONSTRAINT role_check CHECK (role IN ('admin','customer'))
    )
    `)
    await pool.query(`
    CREATE TABLE IF NOT EXISTS vehicles(
    id SERIAL PRIMARY KEY,
    vehicle_name VARCHAR(30) NOT NULL,
    type VARCHAR(20) NOT NULL,
    CONSTRAINT type_check CHECK (type IN ('car','bike','van','SUV')),
    registration_number VARCHAR(20) NOT NULL UNIQUE,
    daily_rent_price INT NOT NULL,
    CONSTRAINT pos_check CHECK (daily_rent_price > 0),
    availability_status VARCHAR(15) ,
     CONSTRAINT status_check CHECK (availability_status IN ('available','booked'))
    )
    `)
    await pool.query(`
    CREATE TABLE IF NOT EXISTS Bookings(
    id SERIAL PRIMARY KEY,
    customer_id INT REFERENCES users(id) ON DELETE CASCADE,
    vehicle_id INT REFERENCES vehicles(id) ON DELETE CASCADE,
    rent_start_date DATE NOT NULL,
    rent_end_date  DATE NOT NULL,
    CONSTRAINT date_check CHECK (rent_end_date > rent_start_date),
    total_price INT NOT NULL,
    CONSTRAINT pos_check CHECK (total_price > 0),
    status VARCHAR(15),
     CONSTRAINT status_check CHECK (status IN ('active','cancelled','returned'))
    )
    `)

} catch (error) {
    console.log(error);
}
    
}
export default initDb;