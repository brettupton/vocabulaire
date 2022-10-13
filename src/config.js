const path = require('path')
const dotenv = require('dotenv')
require('dotenv').config();
// Load config
dotenv.config({ path: './config/config.env' })

module.exports = {
    rapidApiKey : process.env.TRANSLATEAPIKEY,
};