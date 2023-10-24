import * as services from '../services/user'

export const getCurrent = async (req, res) => {
    const { id } = req.user 
    try {
        const response = await services.getOne(id)
        return res.status(200).json(response)

    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Failed at category controller: ' + error
        })
    }
}

export const updateUser = async (req, res) => {
    const { id } = req.user 
    try {
        const response = await services.updateUser(id,req.body)
        return res.status(200).json(
            {
                err:0,
                msg:"Updated"
            }
        )

    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Failed at category controller: ' + error
        })
    }
}

