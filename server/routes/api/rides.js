const express = require('express')
const mongodb = require('mongodb')

const router = express.Router()

// Get Rides
router.get('/', async (req, res) => {
    const rides = await loadRidesCollection()
    res.send(await rides.find({}).limit(10).toArray());
})

router.post('/', async(req, res) => {
    const rides = await loadRidesCollection()
    await rides.insertOne({
        "id": req.body.id,
        "user_id": req.body.user_id,
        "vehicle_model_id": req.body.vehicle_model_id,
        "package_id": req.body.package_id,
        "travel_type_id": req.body.travel_type_id,
        "from_area_id": req.body.from_area_id,
        "to_area_id": req.body.to_area_id,
        "from_city_id": req.body.from_city_id,
        "to_city_id": req.body.to_city_id,
        "from_date": req.body.from_date,
        "to_date": req.body.to_date,
        "online_booking": req.body.online_booking,
        "mobile_site_booking": req.body.mobile_site_booking,
        "booking_created": req.body.booking_created,
        "from_lat": req.body.from_lat,
        "from_long": req.body.from_long,
        "to_lat": req.body.to_lat,
        "to_long": req.body.to_long,
        "Car_Cancellation": req.body.Car_Cancellation
    })
    res.status(201).send()
})

router.delete('/:id', async(req, res) => {
    const rides = await loadRidesCollection()
    await rides.deleteOne({
        _id: new mongodb.ObjectId(req.params.id)
    })
    res.status(200).send()
})


async function loadRidesCollection() {
    const client = await mongodb.MongoClient.connect
    ('mongodb+srv://m220:m220password@mflix-qbnyc.mongodb.net/test?retryWrites=true&w=majority', {
        useNewUrlParser: true
    })

    return client.db('LocaleData').collection('xrides');
}


module.exports = router;