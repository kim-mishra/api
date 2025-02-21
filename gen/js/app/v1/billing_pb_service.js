// package: viam.app.v1
// file: app/v1/billing.proto

var app_v1_billing_pb = require("../../app/v1/billing_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var BillingService = (function () {
  function BillingService() {}
  BillingService.serviceName = "viam.app.v1.BillingService";
  return BillingService;
}());

BillingService.GetCurrentMonthUsageSummary = {
  methodName: "GetCurrentMonthUsageSummary",
  service: BillingService,
  requestStream: false,
  responseStream: false,
  requestType: app_v1_billing_pb.GetCurrentMonthUsageSummaryRequest,
  responseType: app_v1_billing_pb.GetCurrentMonthUsageSummaryResponse
};

BillingService.GetUnpaidBalance = {
  methodName: "GetUnpaidBalance",
  service: BillingService,
  requestStream: false,
  responseStream: false,
  requestType: app_v1_billing_pb.GetUnpaidBalanceRequest,
  responseType: app_v1_billing_pb.GetUnpaidBalanceResponse
};

BillingService.GetInvoiceHistory = {
  methodName: "GetInvoiceHistory",
  service: BillingService,
  requestStream: false,
  responseStream: false,
  requestType: app_v1_billing_pb.GetInvoiceHistoryRequest,
  responseType: app_v1_billing_pb.GetInvoiceHistoryResponse
};

BillingService.GetItemizedInvoice = {
  methodName: "GetItemizedInvoice",
  service: BillingService,
  requestStream: false,
  responseStream: false,
  requestType: app_v1_billing_pb.GetItemizedInvoiceRequest,
  responseType: app_v1_billing_pb.GetItemizedInvoiceResponse
};

BillingService.GetBillingSummary = {
  methodName: "GetBillingSummary",
  service: BillingService,
  requestStream: false,
  responseStream: false,
  requestType: app_v1_billing_pb.GetBillingSummaryRequest,
  responseType: app_v1_billing_pb.GetBillingSummaryResponse
};

exports.BillingService = BillingService;

function BillingServiceClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

BillingServiceClient.prototype.getCurrentMonthUsageSummary = function getCurrentMonthUsageSummary(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BillingService.GetCurrentMonthUsageSummary, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

BillingServiceClient.prototype.getUnpaidBalance = function getUnpaidBalance(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BillingService.GetUnpaidBalance, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

BillingServiceClient.prototype.getInvoiceHistory = function getInvoiceHistory(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BillingService.GetInvoiceHistory, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

BillingServiceClient.prototype.getItemizedInvoice = function getItemizedInvoice(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BillingService.GetItemizedInvoice, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

BillingServiceClient.prototype.getBillingSummary = function getBillingSummary(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(BillingService.GetBillingSummary, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function (response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    }
  });
  return {
    cancel: function () {
      callback = null;
      client.close();
    }
  };
};

exports.BillingServiceClient = BillingServiceClient;

