import db from '../models'

// GET CURRENT
export const getOne = (id) => new Promise(async (resolve, reject) => {
    try {
        const response = await db.User.findOne({
            where: { id },
            raw: true,
            attributes: {
                exclude: ['password']
            }
        })
        resolve({
            err: response ? 0 : 1,
            msg: response ? 'OK' : 'Failed to get provinces.',
            response
        })
    } catch (error) {
        reject(error)
    }
})


export const updateUser = (id,body) => new Promise(async (resolve, reject) => {
    try {
        const {name,zalo,fbUrl,avatar} = body
        const response = await db.User.update(
            {
                name,zalo,fbUrl,avatar
            },
            {
                where: { id },
            }
        )
        resolve({
            err: 1,
            msg: 'Update user',
            response
        })
    } catch (error) {
        reject(error)
    }
})