-- table for holding processed outputs

CREATE EXTENSION postgis;

CREATE TABLE processed_data (
  pkey serial,
  measureDateTime timestamp with time zone NOT NULL,
  location geometry(Point,4326),
  deviceID integer,
  level integer,
  trigger boolean,
  msgtext varchar,
  CONSTRAINT pkey_processed_data PRIMARY KEY (pkey)
);

CREATE TABLE raw_json_data (
  pkey serial,
  data json
)
