const knex = require('../database');

module.exports = {
    async index(req, res) {
        const results = await knex('users')
        return res.json(results)
    },
    
    async create(req, res, next) {
        const {username} = req.body
        try { 
            await knex('users').insert({username})
            return res.status(201).send()
        } catch (error) {
            next(error)
        }  
    },
    
    async update(req, res, next) {
        const {id} = req.params
        
        const {username} = req.body
        
        try { 
            await knex('users').update({username}).where({id})
            return res.status(200).send()
        } catch (error) {
            next(error)
        }  

    },
    
    async delete(req, res, next) {
        const {id} = req.params
        
        try { 
            await knex('users').where({id}).del()
            return res.status(200).send()
        } catch (error) {
            next(error)
        }  

    }
}