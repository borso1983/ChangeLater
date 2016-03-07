/**
 * Date model events
 */

'use strict';

import {EventEmitter} from 'events';
var Date = require('./date.model');
var DateEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
DateEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Date.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    DateEvents.emit(event + ':' + doc._id, doc);
    DateEvents.emit(event, doc);
  }
}

export default DateEvents;
