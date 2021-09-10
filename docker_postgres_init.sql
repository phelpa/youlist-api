CREATE USER youlist WITH PASSWORD 'youlist' CREATEDB;

CREATE DATABASE youlist
    WITH
    OWNER = youlist
    ENCODING = 'UTF8'
    LC_COLLATE = 'en_US.utf8'
    LC_CTYPE = 'en_US.utf8'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;


GRANT ALL PRIVILEGES ON DATABASE youlist TO youlist;