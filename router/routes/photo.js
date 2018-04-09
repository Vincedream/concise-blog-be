const PhotoController = require('../../controller/photo/index')

module.exports = router => {
  router.get('/user/photo', PhotoController.getPhoto)
  router.post('/user/photo', PhotoController.addPhoto)
  router.delete('/user/photo/:id', PhotoController.deletePhoto)
}