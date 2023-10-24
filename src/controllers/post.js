import * as postService from '../services/post'

export const getPosts = async (req, res) => {
    try {
        const response = await postService.getPostsService()
        return res.status(200).json(response)

    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Failed at post controller: ' + error
        })
    }
}

export const getPostsLimit = async (req, res) => {
    const { page, priceNumber, areaNumber, ...query } = req.query
    try {
        const response = await postService.getPostsLimitService(page, query, { priceNumber, areaNumber })
        return res.status(200).json(response)

    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Failed at post controller: ' + error
        })
    }
}

export const getPostsById = async (req, res) => {
    const {id} = req.query
    try {
        const response = await postService.getPostsServiceById(id)
        return res.status(200).json(response)

    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Failed at post controller: ' + error
        })
    }
}

export const getNewPosts = async (req, res) => {
    try {
        const response = await postService.getNewPostService()
        return res.status(200).json(response)

    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Failed at post controller: ' + error
        })
    }
}

export const createPosts = async (req, res) => {
    try {
        const {id} = req.user
        const {title,description} = req.body
        if(!title || !description){
            return res.status(400).json({
                err: -1,
                msg: 'Miss input'
            })
        }
        const response = await postService.postCreatePostService(req.body,id)
        return res.status(200).json(response)

    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Failed at post controller: ' + error
        })
    }
}

export const getPostsAdmin = async (req, res) => {
    try {
        const {page,...query} = req.query
        const {id} = req.user
        if(!id){
            return res.status(400).json({
                err: -1,
                msg: 'Miss input'
            })
        }
        const response = await postService.getPostsAdmin(page,id,query)
        return res.status(200).json(response)

    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Failed at post controller: ' + error
        })
    }
}

export const putPostsAdmin = async (req, res) => {
    try {
        const {postId,overviewId,imagesId,attributesId,...payload} = req.body
        const {id} = req.user
        if(!id){
            return res.status(400).json({
                err: -1,
                msg: 'Missing input'
            })
        }
        const response = await postService.putPostsAdmin(req.body)
        return res.status(200).json(response)

    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Failed at post controller: ' + error
        })
    }
}

export const deletePostsAdmin = async (req, res) => {
    try {
        const {postId,overviewId,imagesId,attributesId} = req.body
        const {id} = req.user
        if(!id){
            return res.status(400).json({
                err: -1,
                msg: 'Missing input'
            })
        }
        const response = await postService.deletePostsAdmin(req.body)
        return res.status(200).json(response)

    } catch (error) {
        return res.status(500).json({
            err: -1,
            msg: 'Failed at post controller: ' + error
        })
    }
}