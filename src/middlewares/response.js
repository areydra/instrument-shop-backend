module.exports = {
    success : (res, status, responses, data) => {
        const success = {
            status : status,
            responses : responses,
            data : data
        }
        res.json(success)
    },

    failed : (res, status, err, message) => {
        const failed = {
            status : status,
            error : err,
            message : message
        }
        res.json(failed)
    }
}