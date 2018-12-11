import * as grpc from 'grpc';
import * as helloworld_grpc_pb from './proto/helloworld_grpc_pb';
import * as helloworld_pb from './proto/helloworld_pb';

class HelloworldService implements helloworld_grpc_pb.IGreeterServer {
  sayHello (
    call: grpc.ServerUnaryCall<helloworld_pb.HelloRequest>,
    callback: grpc.sendUnaryData<helloworld_pb.HelloReply>,
  ): void {
    const reply = new helloworld_pb.HelloReply()
    reply.setMessage('Hello ' + call.request.getName())
    callback(null, reply)
  }
}

(() => {
  const server = new grpc.Server()
  server.bind(
    `0.0.0.0:50051`,
    grpc.ServerCredentials.createInsecure(),
  )
  server.addService(helloworld_grpc_pb.GreeterService, new HelloworldService())

  server.start()
})()
