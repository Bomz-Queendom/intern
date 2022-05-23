const mongoose = require("mongoose");
var logger = require("./logger");
const { MONGOIP, MONGOPORT, MONGOUSER, MONGOPASS, DBNAME } = process.env;

const MONGOURL = `mongodb://${MONGOUSER}:${MONGOPASS}@${MONGOIP}:${MONGOPORT}/${DBNAME}?authSource=admin`;

const InitiateMongoServer = async () => {
    try {

        await mongoose.connect(MONGOURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
            .then(() => {
                logger.info("Connected to DB !!");
            });

    } catch (error) {
        console.log(error);
        logger.error(error);
    }
}

module.exports = InitiateMongoServer;