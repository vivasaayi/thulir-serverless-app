const iotDataProcessor = require("./iot-data-processor");

exports.handler = async (event, context) =>
    iotDataProcessor.transformRecords(event, context);
