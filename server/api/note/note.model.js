'use strict';

var mongoose = require('bluebird').promisifyAll(require('mongoose'));

var NoteSchema = new mongoose.Schema({
  date : Date
  owner: {
    type: Schema.ObjectId,
    ref: 'User'
  },
  goodMemories: [{
     line: String
  }],
  badMemories: [{
     line: String
  }]
});


});

export default mongoose.model('Note', NoteSchema);
