'use strict';
const Product = require('../models/Product');

exports.get = async (req, res, next) => {
  let products = await Product.find({ active: true })
    .catch(e => {
      res.status(400).json({ error: "Falha na requisição", data: e })
    })

  res.status(200).json(products)
};

exports.getBySlug = async (req, res, next) => {

  let product = await Product.findOne({ active: true, slug: req.params.slug })
    .catch(e => {
      res.status(400).json({ error: "Falha na requisição", data: e })
    })

  res.status(200).json(product);
}

exports.getById = async (req, res, next) => {
  let product = await Product.findById({ _id: req.params.id })
    .catch(e => {
      res.status(400).json({ error: "falha na requisição", data: e })
    })

  res.status(200).json(product)
};

exports.getByTags = async (req, res, next) => {
  let product = await Product.find({ tags: req.params.tag, active: true })
    .catch(e => {
      res.status(400).json({ error: "Falha na requisição", data: e });
    })

  res.status(200).json(product);
};

exports.post = async (req, res, next) => {
  const product = await Product.create(req.body)
    .catch(e => {
      res.status(400).json({ error: "Falha ao gravar o produto", data: e.message })
    });

  res.status(201).json(product);
};

exports.put = async (req, res, next) => {

  const { active, nome, slug, description, price, tags } = req.body;

  await Product.findOneAndUpdate(req.params.id, {
    $set: {
      active,
      nome,
      slug,
      description,
      price,
      tags
    }
  })
    .catch(e => {
      res.status(400).json({ error: "Não foi possivél atualizar o produto", data: e.message });
    })

  res.status(200).send({ messagem: "Produto atualizado com sucesso", Product });
};

exports.delete = async (req, res, next) => {
  await Product.findByIdAndRemove(req.body.id)
  
    .catch(e => {
      res.status(400).json({ error: "falha na requisição" });
    })

    res.status(200).json({message: "Produto exclusído com sucesso!"})

};
