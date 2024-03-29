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
            err : err,
            error :  message
        }
        res.json(failed)
    }
}