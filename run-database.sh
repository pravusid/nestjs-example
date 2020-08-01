#!/usr/bin/env bash

docker run \
  --detach \
  --env MYSQL_ROOT_PASSWORD=1234 \
  --env MYSQL_USER=nestex \
  --env MYSQL_PASSWORD=1234 \
  --env MYSQL_DATABASE=nestex \
  --name nestex \
  --publish 3306:3306 \
  mariadb:latest \
  --character-set-server=utf8mb4 \
  --collation-server=utf8mb4_unicode_ci
