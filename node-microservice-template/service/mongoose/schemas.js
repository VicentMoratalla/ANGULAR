const mongoose = require('mongoose');
// const openApiDocumentation = require('./service/api-especification/open-api-doc');

const pageHistorySchema = mongoose.Schema({
    checkpoint: String,
    details: {
        identifier: String,
        pageName: String,
        quoteNumber: String,
        serviceCalled: String
    },
    sessionId: String,
    date: Date
});

//Classes and Objects object is an instance of that blueprint
//Pagehistory pagehistory

//this is a class not an object
const PageHistory = mongoose.model('PageHistory', pageHistorySchema);

async function createPageHistory(){

    const pageHistory = new PageHistory({
        checkpoint: 'ancillary',
        details: {
            identifier: 'PAGE_VIEW',
            pageName: 'ancillary',
            quoteNumber: '4488574384',
            serviceCalled: ''
        },
        sessionId: 'MENCODMwRkI4NzgyNDU0Nzk5QkI0NjJBMEJGMzc0Mjg6OEUwNjM3ODM4Njg0NDEzQkE2RkZBQ0Y4RDc1MjA5M0I'
    });

    const result = await pageHistory.save();
    console.log(result);
}

async function getPageHistories(){
    const pageHistory = await PageHistory.find({});
    console.log(pageHistory);
}

module.export = createPageHistory;
