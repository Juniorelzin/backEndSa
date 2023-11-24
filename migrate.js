import Connection from './database.js';
import User from './models/User.js';


const migrate = async () => {
    try {
        const result = await Connection.sync();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

migrate();