// package: viam.app.v1
// file: app/v1/billing.proto

import * as app_v1_billing_pb from "../../app/v1/billing_pb";
import {grpc} from "@improbable-eng/grpc-web";

type BillingServiceGetCurrentMonthUsageSummary = {
  readonly methodName: string;
  readonly service: typeof BillingService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_billing_pb.GetCurrentMonthUsageSummaryRequest;
  readonly responseType: typeof app_v1_billing_pb.GetCurrentMonthUsageSummaryResponse;
};

type BillingServiceGetUnpaidBalance = {
  readonly methodName: string;
  readonly service: typeof BillingService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_billing_pb.GetUnpaidBalanceRequest;
  readonly responseType: typeof app_v1_billing_pb.GetUnpaidBalanceResponse;
};

type BillingServiceGetInvoiceHistory = {
  readonly methodName: string;
  readonly service: typeof BillingService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_billing_pb.GetInvoiceHistoryRequest;
  readonly responseType: typeof app_v1_billing_pb.GetInvoiceHistoryResponse;
};

type BillingServiceGetItemizedInvoice = {
  readonly methodName: string;
  readonly service: typeof BillingService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_billing_pb.GetItemizedInvoiceRequest;
  readonly responseType: typeof app_v1_billing_pb.GetItemizedInvoiceResponse;
};

type BillingServiceGetBillingSummary = {
  readonly methodName: string;
  readonly service: typeof BillingService;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof app_v1_billing_pb.GetBillingSummaryRequest;
  readonly responseType: typeof app_v1_billing_pb.GetBillingSummaryResponse;
};

export class BillingService {
  static readonly serviceName: string;
  static readonly GetCurrentMonthUsageSummary: BillingServiceGetCurrentMonthUsageSummary;
  static readonly GetUnpaidBalance: BillingServiceGetUnpaidBalance;
  static readonly GetInvoiceHistory: BillingServiceGetInvoiceHistory;
  static readonly GetItemizedInvoice: BillingServiceGetItemizedInvoice;
  static readonly GetBillingSummary: BillingServiceGetBillingSummary;
}

export type ServiceError = { message: string, code: number; metadata: grpc.Metadata }
export type Status = { details: string, code: number; metadata: grpc.Metadata }

interface UnaryResponse {
  cancel(): void;
}
interface ResponseStream<T> {
  cancel(): void;
  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;
  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;
  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}
interface RequestStream<T> {
  write(message: T): RequestStream<T>;
  end(): void;
  cancel(): void;
  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;
  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}
interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;
  end(): void;
  cancel(): void;
  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;
  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class BillingServiceClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);
  getCurrentMonthUsageSummary(
    requestMessage: app_v1_billing_pb.GetCurrentMonthUsageSummaryRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_billing_pb.GetCurrentMonthUsageSummaryResponse|null) => void
  ): UnaryResponse;
  getCurrentMonthUsageSummary(
    requestMessage: app_v1_billing_pb.GetCurrentMonthUsageSummaryRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_billing_pb.GetCurrentMonthUsageSummaryResponse|null) => void
  ): UnaryResponse;
  getUnpaidBalance(
    requestMessage: app_v1_billing_pb.GetUnpaidBalanceRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_billing_pb.GetUnpaidBalanceResponse|null) => void
  ): UnaryResponse;
  getUnpaidBalance(
    requestMessage: app_v1_billing_pb.GetUnpaidBalanceRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_billing_pb.GetUnpaidBalanceResponse|null) => void
  ): UnaryResponse;
  getInvoiceHistory(
    requestMessage: app_v1_billing_pb.GetInvoiceHistoryRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_billing_pb.GetInvoiceHistoryResponse|null) => void
  ): UnaryResponse;
  getInvoiceHistory(
    requestMessage: app_v1_billing_pb.GetInvoiceHistoryRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_billing_pb.GetInvoiceHistoryResponse|null) => void
  ): UnaryResponse;
  getItemizedInvoice(
    requestMessage: app_v1_billing_pb.GetItemizedInvoiceRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_billing_pb.GetItemizedInvoiceResponse|null) => void
  ): UnaryResponse;
  getItemizedInvoice(
    requestMessage: app_v1_billing_pb.GetItemizedInvoiceRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_billing_pb.GetItemizedInvoiceResponse|null) => void
  ): UnaryResponse;
  getBillingSummary(
    requestMessage: app_v1_billing_pb.GetBillingSummaryRequest,
    metadata: grpc.Metadata,
    callback: (error: ServiceError|null, responseMessage: app_v1_billing_pb.GetBillingSummaryResponse|null) => void
  ): UnaryResponse;
  getBillingSummary(
    requestMessage: app_v1_billing_pb.GetBillingSummaryRequest,
    callback: (error: ServiceError|null, responseMessage: app_v1_billing_pb.GetBillingSummaryResponse|null) => void
  ): UnaryResponse;
}

