console.log('Loading function');

exports.handler = async (event, context) => {
    console.log(JSON.stringify(event, null, 2));
    /* Process the list of records and transform them */
    const output = event.records.map((record) => ({
        /* This transformation is the "identity" transformation, the data is left intact */
        recordId: record.recordId,
        result: 'Ok',
        data: record.data,
    }));
    
    (event.records || []).forEach(record => {
        console.log(record.data);
        let buff = Buffer.from(record.data, 'base64');  
        let text = buff.toString('utf-8');
        console.log(text);
    });
    
    console.log(`Processing completed.  Successful records ${output.length}.`);
    return { records: output };
};
