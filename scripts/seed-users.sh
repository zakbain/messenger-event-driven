#!/bin/bash

curl -X 'POST' \
  'http://localhost:3000/users' \
  -H 'accept: */*' \
  -H "Content-Type: application/json" \
  -d '{"firstName": "Zak", "lastName": "Bainazarov", "userName": "zakbain", "accountStatus": "active"}'  
  
curl -X 'POST' \
  'http://localhost:3000/users' \
  -H 'accept: */*' \
  -H "Content-Type: application/json" \
  -d '{"firstName": "Jimmy", "lastName": "Stewart", "userName": "jstew", "accountStatus": "active"}'  
  