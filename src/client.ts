import * as grpc from 'grpc';
import * as helloworld_grpc_pb from './proto/helloworld_grpc_pb';
import * as helloworld_pb from './proto/helloworld_pb';

const client = new helloworld_grpc_pb.GreeterClient(
  '0.0.0.0:50051',
  grpc.credentials.createInsecure(),
);

const req = new helloworld_pb.HelloRequest();
req.setName('hoge')

client.sayHello(req, function(error, result) {
  if (error) console.log('Error: ', error);
  else console.log(result.toObject());
});
