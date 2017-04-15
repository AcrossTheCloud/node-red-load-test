var item = {
  "id": {
    "N": String(msg.payload.id)
  },
  "time": {
    "N": String(msg.payload.time/1000)
  },
  "lat": {
    "N": String(msg.payload.location.lat)
  },
  "lon": {
    "N": String(msg.payload.location.lon)
  },
  "level": {
    "N": String(msg.payload.level)
  },
};

return {payload: item};
