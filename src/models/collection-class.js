'use strict';

class CollectionClass {
  constructor(model) {
    this.model = model;
  }

  async create(json) {
    try {
      let record = await this.model.create(json);
      return record;
    } catch (err) {
      console.err('we have an error', err);
      return err;
    }
  }

  async read(id = null) {
    try {
      let record;
      if (id) {
        record = await this.model.findOne({ where: {id} });
      } else {
        record = await this.model.findAll();
      }
      return record;
    } catch (err) {
      console.error('we have an err', err);
      return err;
    }
  }

  async readManyToOne(id, collection) {
    try {
      let record = await this.model.findOne({ where: {id} });
      return record;
    } catch(err) {
      console.error('we have an err', err);
      return err;
    }
  }

  async update(data, id) {
    try {
      await this.model.update(data, {where: {id}});
      let record = await this.model.findOne({ where: {id} });
      return record;
    } catch (err){
      console.error('we have an err', err);
      return err;
    }
  }

  async delete(id){
    try {
      await this.model.destroy({ where: {id} });
      return 'Record Deleted';
    } catch (err) {
      console.error('we have an err', err);
      return err;
    }
  }
}

module.exports = CollectionClass;


