<template>
  <div class="hello">
    hoge
  </div>
</template>

<script>
  // import { grpc } from 'grpc-web-client'
  // import { GreeterClient } from '../proto/helloworld_grpc_pb'
  const {GreeterClient} = require('../proto/helloworld_grpc_pb.js')
  // import { HelloRequest } from '../proto/helloworld_pb'
  export default {
    name: 'HelloWorld',
    props: {
      msg: String
    },
    mounted() {
      // const client = new GreeterClient(
      //         '0.0.0.0:4000',
      // );

      // const req = new HelloRequest();
      // req.setName('hoge')
      //
      // client.sayHello(req, function(error, result) {
      //   if (error) console.log('Error: ', error);
      //   else console.log(result.toObject());
      // });
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
