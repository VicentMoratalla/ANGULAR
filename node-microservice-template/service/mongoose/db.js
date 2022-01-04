const mongoose = require('mongoose');
const config = require('config');
const uri = config.get('mongo.mongoUri');

const pageHistorySchema = mongoose.Schema({
    checkpoint: {
        type: String,
        required: true
    },
    details: {
        identifier: String,
        pageName: String,
        quoteNumber: String,
        serviceCalled: String,
        product: String,
        flowName: String
    },
    sessionId: String,
    date: Date
});

const PageHistory = mongoose.model('PageHistory', pageHistorySchema);

async function connection() {
    mongoose.connect(
        'mongodb+srv://dev-user:xuGPBXAtliqPezEB@cluster0.c4kxm.mongodb.net/page_history?retryWrites=true&w=majority'
    )
        .then(() => {

            console.log('Connected to mongoDb');
            //removeCourse('61c12de8f8d4ab65cd9ba5f9');
            createPageHistory();
        })
        .catch((error) => {
            console.log('Error: ', error);
        });
}

async function createPageHistory() {

    const pageHistory = new PageHistory({
        checkpoint: 'cover',
        details: {
            identifier: 'PAGE_VIEW',
            pageName: 'cover',
            quoteNumber: '4488574384',
            product: 'motor',
            flowName: 'acceptance'
        },
        sessionId: 'NDE2MTc2RjE0M0RCNDc0NTg2QTQ3NjdFQzQ4RUYwN0M6QzhGNzlDMjM1QkVFNDc5NUI3MEQwMUI1RTM1RTY1ODA'
    });

    try {
        const result = await pageHistory.save();
        console.log(result);
        // pageHistory.validate((err) =>{
        //     if(err) return;
        // });
    }
    catch (ex) {
        console.log(ex.message);
    }

}

async function getPageHistories() {

    //COMPARISON OPERATORS
    // eq (equal)
    //ne (not equal)
    //gt (greater than)
    //gte (greater than or equal to)
    //lt (less than)
    //lte (less than or equal to)
    //in
    //nin (not in)

    //LOGICAL OPERATORS
    //or
    //and

    const pageHistory = await PageHistory
        // .find({ checkpoint: 'cover' })
        // .find({ price: { $gte: 10, $lte: 20 } })
        // .find({ price: { $in: [10, 15, 20] } })
        .find()
        // .or([ { checkpoint: 'cover'} ])
        // .and([  ])
        //starts with cover
        // .find({ author: /^cover/})
        // //ends with cover
        // .find({ author: /cover$/i})
        // //contains cover
        // .find({ author: /.*cover.*/i})
        // .skip((pageNumner = 1) * pageSize)
        .limit(10)
        .sort({ checkpoint: 1 })
        //.select({ checkpoint: 1, details: { indetifier: 1 } })
        .count()
    console.log(pageHistory);
}

async function updateCourse(id) {
    // const pageHistory = await PageHistory.findById(id);
    // if(!pageHistory) return;
    // pageHistory.details.quoteNumber = '4488574383';

    // const result = await pageHistory.save();

    // console.log('Updated record: ',result);

    const pageHistory = await PageHistory.updateOne({ _id: id }, {
        $set: {
            checkpoint: 'ancillary',
            details: {
                identifier: 'PAGE_VIEW',
                pageName: 'ancillary',
                quoteNumber: '4488574384',
                serviceCalled: ''
            }
        }
    });

    console.log('Update: ', pageHistory);
}

async function removeCourse(id) {
    const result = await PageHistory.deleteOne({ _id: id });
    console.log('delete: ', result);
}

module.exports = connection;
