var postgres_insert_1 = function(msg) {

  var triggered = msg.payload.level > 100;
  var msgtext = "device " + String(msg.payload.id) + (triggered ? " triggered" : " not triggered");

  var querystring = "INSERT INTO processed_data (measureDateTime, location, deviceID, level, trigger, msgtext) VALUES (to_timestamp(" + String(msg.payload.time/1000) + ")," + "ST_GeomFromText('POINT(" + String( msg.payload.location.lon ) + " " + String(msg.payload.location.lat) + ")',4326)," + String(msg.payload.id) + "," + String(msg.payload.level) + ","+  String(triggered) + ",'" + msgtext + "');";

  return {payload: querystring};

};

var postgres_insert_2 = function(msg) {

  var querystring = "INSERT INTO processed_data (measureDateTime, location, deviceID, level) VALUES (to_timestamp(" + String(msg.payload.time/1000) + ")," + "ST_GeomFromText('POINT(" + String( msg.payload.location.lon ) + " " + String(msg.payload.location.lat) + ")',4326)," + String(msg.payload.id) + "," + String(msg.payload.level) + ");";

  return {payload: querystring};

};

var postgres_insert_3 = function(msg) {

  var querystring = "INSERT INTO raw_json_data (data) VALUES ('"+ JSON.stringify(msg.payload) + "');";

  return {payload: querystring};

};

module.exports = {
   postgres_insert_1,
   postgres_insert_2,
   postgres_insert_3
}
