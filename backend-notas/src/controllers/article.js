"use strict"

var Article = require("../models/article")

//creamos un objeto para disponer de todos los métodos de ruta que vamos a definir
var controller = {

  //método para guardar un artículo:
  save: (req, res) => {
    var params = req.body

    var article = new Article()
    //asignamos los valores
    article.title = params.title
    article.content = params.content    
    article.author = params.author

    //guardamos el artículo
    article.save((err, articleStored) => {
      if(err || !articleStored){
        return res.status(404).send({
          status: "error", 
          message: "El artículo no se ha guardado"
        })
      }
      return res.status(200).send({
        status: "success",
        articleStored
      })
    })
  },

  //método para listar los artículos
  getArticles: (req, res) => {
    var query = Article.find({})
    query.sort("-date").exec((err, articles) => {

      if(err){
        return res.status(500).send({
          status: "error",
          message: "error al extraer los datos"
        })
      }

      if(!articles){
        return res.status(404).send({
          status: "error",
          message: "no hay articulos para mostrar"
        })
      }

    })

  }

}