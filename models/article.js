const mongoose = require('mongoose')
const Schema = mongoose.Schema

const articleSchema = new Schema({
  title: String,
  content: String,
  htmlContent: String,
  views: Number,
  classify: Array,
  releaseDate: String,
  comments: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'comment'
  }]
})

const Article = mongoose.model('article', articleSchema)

module.exports = Article