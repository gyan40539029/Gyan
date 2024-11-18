// Import the snap7 module
const snap7 = require('node-snap7');

// Create a new instance of the S7Client
const client = new snap7.S7Client();

// Connect to the PLC
client.ConnectTo('192.168.0.1', 0, 1, function(err) {
  if (err) {
    console.log('Failed to connect to PLC:', client.LastErrorText());
    return;
  }
  console.log('Connected to PLC!');

  // Read a tag from the PLC
  // Example: Reading 4 bytes from Data Block 1, starting at byte 0
  client.DBRead(1, 0, 4, function(err, res) {
    if (err) {
      console.log('Error reading from PLC:', client.LastErrorText());
    } else {
      console.log('Data from PLC:', res);
    }

    // Disconnect from the PLC
    client.Disconnect();
  });
});
