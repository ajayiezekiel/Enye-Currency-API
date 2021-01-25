const axios = require('axios');

// @desc   Get all bootcamps
// @route  GET /api/rates
// @access Public
exports.getRates = async (req, res, next) => {
    try {
        if (req.query.base && req.query.currency) {
            const response = await axios.get(`https://api.exchangeratesapi.io/latest?base=${
                                        req.query.base}&symbols=${req.query.currency}`);
            const {base, date, rates} = response.data
            res.status(200).json({ results: { base, date, rates}});
        }
        else if (req.query.base) {
            const response = await axios.get(`https://api.exchangeratesapi.io/latest?base=${req.query.base}`);
            res.status(200).json({results: response.data});

        } else {
            const response = await axios.get(`https://api.exchangeratesapi.io/latest`);
            res.status(200).json({results: response.data});
        }
    } catch (error) {
        res.status(400).json({Error: error.message});
    }    

}


    


