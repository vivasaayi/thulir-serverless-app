class IoTDataProcessor {
    transformRecords(event, context) {
        console.log('Loading function');

        console.log(JSON.stringify(event, null, 2));
        /* Process the list of records and transform them */
        const output = event.records.map((record) => ({
            /* This transformation is the "identity" transformation, the data is left intact */
            recordId: record.recordId,
            result: 'Ok',
            data: record.data,
        }));


        console.log(`Processing completed.  Successful records ${output.length}.`);
        return { records: output };
    }
}

module.exports = new IoTDataProcessor();