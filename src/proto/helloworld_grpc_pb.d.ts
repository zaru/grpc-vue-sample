// package: helloworld
// file: proto/helloworld.proto

/* tslint:disable */

import * as grpc from "grpc";
import * as proto_helloworld_pb from "../proto/helloworld_pb";

interface IGreeterService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    sayHello: IGreeterService_ISayHello;
}

interface IGreeterService_ISayHello extends grpc.MethodDefinition<proto_helloworld_pb.HelloRequest, proto_helloworld_pb.HelloReply> {
    path: string; // "/helloworld.Greeter/SayHello"
    requestStream: boolean; // false
    responseStream: boolean; // false
    requestSerialize: grpc.serialize<proto_helloworld_pb.HelloRequest>;
    requestDeserialize: grpc.deserialize<proto_helloworld_pb.HelloRequest>;
    responseSerialize: grpc.serialize<proto_helloworld_pb.HelloReply>;
    responseDeserialize: grpc.deserialize<proto_helloworld_pb.HelloReply>;
}

export const GreeterService: IGreeterService;

export interface IGreeterServer {
    sayHello: grpc.handleUnaryCall<proto_helloworld_pb.HelloRequest, proto_helloworld_pb.HelloReply>;
}

export interface IGreeterClient {
    sayHello(request: proto_helloworld_pb.HelloRequest, callback: (error: grpc.ServiceError | null, response: proto_helloworld_pb.HelloReply) => void): grpc.ClientUnaryCall;
    sayHello(request: proto_helloworld_pb.HelloRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_helloworld_pb.HelloReply) => void): grpc.ClientUnaryCall;
    sayHello(request: proto_helloworld_pb.HelloRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_helloworld_pb.HelloReply) => void): grpc.ClientUnaryCall;
}

export class GreeterClient extends grpc.Client implements IGreeterClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public sayHello(request: proto_helloworld_pb.HelloRequest, callback: (error: grpc.ServiceError | null, response: proto_helloworld_pb.HelloReply) => void): grpc.ClientUnaryCall;
    public sayHello(request: proto_helloworld_pb.HelloRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: proto_helloworld_pb.HelloReply) => void): grpc.ClientUnaryCall;
    public sayHello(request: proto_helloworld_pb.HelloRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: proto_helloworld_pb.HelloReply) => void): grpc.ClientUnaryCall;
}
