const ros = new ROSLIB.Ros({
  url: `ws://${window.location.hostname}:9090`
});

ros.on('connection', function () {
  console.log('Connected to websocket server.');
});

ros.on('error', function (error) {
  console.log('Error connecting to websocket server: ', error);
});

ros.on('close', function () {
  console.log('Connection to websocket server closed.');
}); 

const testSub = new ROSLIB.Topic({
  ros: ros,
  name: '/test_pub',
  message: 'std_msgs/String'
})

testSub.subscribe((message) => {
  console.log(message);
});