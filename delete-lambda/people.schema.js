'use strict';

const dynamoose = require('dynamoose');

const peopleSchema = new dynamoose.Schema ({
  'id': String,
  'name': String,
  'phone': String
});