'use strict';

var app = require('../..');
import request from 'supertest';

var newDate;

describe('Date API:', function() {

  describe('GET /api/dates', function() {
    var dates;

    beforeEach(function(done) {
      request(app)
        .get('/api/dates')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          dates = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      dates.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/dates', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/dates')
        .send({
          name: 'New Date',
          info: 'This is the brand new date!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newDate = res.body;
          done();
        });
    });

    it('should respond with the newly created date', function() {
      newDate.name.should.equal('New Date');
      newDate.info.should.equal('This is the brand new date!!!');
    });

  });

  describe('GET /api/dates/:id', function() {
    var date;

    beforeEach(function(done) {
      request(app)
        .get('/api/dates/' + newDate._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          date = res.body;
          done();
        });
    });

    afterEach(function() {
      date = {};
    });

    it('should respond with the requested date', function() {
      date.name.should.equal('New Date');
      date.info.should.equal('This is the brand new date!!!');
    });

  });

  describe('PUT /api/dates/:id', function() {
    var updatedDate;

    beforeEach(function(done) {
      request(app)
        .put('/api/dates/' + newDate._id)
        .send({
          name: 'Updated Date',
          info: 'This is the updated date!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedDate = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedDate = {};
    });

    it('should respond with the updated date', function() {
      updatedDate.name.should.equal('Updated Date');
      updatedDate.info.should.equal('This is the updated date!!!');
    });

  });

  describe('DELETE /api/dates/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/dates/' + newDate._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when date does not exist', function(done) {
      request(app)
        .delete('/api/dates/' + newDate._id)
        .expect(404)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

  });

});
