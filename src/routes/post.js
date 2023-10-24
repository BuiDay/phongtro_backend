import express from 'express'
import * as postController from '../controllers/post'
import verifyToken from '../middlewares/verifyToken'

const router = express.Router()

router.get('/all', postController.getPosts)
router.get('/limit', postController.getPostsLimit)
router.get('/new-post', postController.getNewPosts)

router.post('/create-post', verifyToken,postController.createPosts)
router.post('/get-post-admin',verifyToken, postController.getPostsAdmin)
router.get('/get-post?:id', postController.getPostsById)
router.put('/update-post-admin',verifyToken, postController.putPostsAdmin)
router.delete('/delete-post-admin',verifyToken, postController.deletePostsAdmin)

export default router