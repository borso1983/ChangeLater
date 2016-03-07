'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var dateCtrlStub = {
  index: 'dateCtrl.index',
  show: 'dateCtrl.show',
  create: 'dateCtrl.create',
  update: 'dateCtrl.update',
  destroy: 'dateCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var dateIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './date.controller': dateCtrlStub
});

describe('Date API Router:', function() {

  it('should return an express router instance', function() {
    dateIndex.should.equal(routerStub);
  });

  describe('GET /api/dates', function() {

    it('should route to date.controller.index', function() {
      routerStub.get
        .withArgs('/', 'dateCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/dates/:id', function() {

    it('should route to date.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'dateCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/dates', function() {

    it('should route to date.controller.create', function() {
      routerStub.post
        .withArgs('/', 'dateCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/dates/:id', function() {

    it('should route to date.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'dateCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/dates/:id', function() {

    it('should route to date.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'dateCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/dates/:id', function() {

    it('should route to date.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'dateCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
