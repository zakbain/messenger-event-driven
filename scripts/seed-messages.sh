#!/bin/bash

firstUserId=$1
secondUserId=$2
echo $firstUserId

curl -X 'POST' \
  'http://localhost:3000/messages' \
  -H 'accept: */*' \
  -H "Content-Type: application/json" \
  -d '{"sourceUserId": '$firstUserId', "destUserId": '$secondUserId', "content": "Hi how did you get into acting?"}'  
  
curl -X 'POST' \
  'http://localhost:3000/messages' \
  -H 'accept: */*' \
  -H "Content-Type: application/json" \
  -d '{"sourceUserId": '$secondUserId', "destUserId": '$firstUserId', "content": "I started in high school in a play called The Wolves"}'  

curl -X 'POST' \
  'http://localhost:3000/messages' \
  -H 'accept: */*' \
  -H "Content-Type: application/json" \
  -d '{"sourceUserId": '$firstUserId', "destUserId": '$secondUserId', "content": "That is fascinating. What was your favorite role?"}'  
  
curl -X 'POST' \
  'http://localhost:3000/messages' \
  -H 'accept: */*' \
  -H "Content-Type: application/json" \
  -d '{"sourceUserId": '$secondUserId', "destUserId": '$firstUserId', "content": "Definitely the part of Jeff in Rear Window"}'  
  
curl -X 'POST' \
  'http://localhost:3000/messages' \
  -H 'accept: */*' \
  -H "Content-Type: application/json" \
  -d '{"sourceUserId": '$firstUserId', "destUserId": '$secondUserId', "content": "Really! I just watched it - Love seeing how Jeff builds a relationship with his neighbor out of desparation and falls into paranoia because of his broken leg"}'  
  
curl -X 'POST' \
  'http://localhost:3000/messages' \
  -H 'accept: */*' \
  -H "Content-Type: application/json" \
  -d '{"sourceUserId": '$secondUserId', "destUserId": '$firstUserId', "content": "Yeah it was a tough role to play. I had to be still most of the time and convey emotion regardless"}'  
  
curl -X 'POST' \
  'http://localhost:3000/messages' \
  -H 'accept: */*' \
  -H "Content-Type: application/json" \
  -d '{"sourceUserId": '$firstUserId', "destUserId": '$secondUserId', "content": "I love that challenge. Any advice for an actor like myself, trying to break into the business?"}'  
  
curl -X 'POST' \
  'http://localhost:3000/messages' \
  -H 'accept: */*' \
  -H "Content-Type: application/json" \
  -d '{"sourceUserId": '$secondUserId', "destUserId": '$firstUserId', "content": "Oh, keep going. Keep being yourself. Anything can happen, good and bad so you have to have that north pole of your own identity."}'  
  
curl -X 'POST' \
  'http://localhost:3000/messages' \
  -H 'accept: */*' \
  -H "Content-Type: application/json" \
  -d '{"sourceUserId": '$firstUserId', "destUserId": '$secondUserId', "content": "Thank you Jimmy!"}'  
  
curl -X 'POST' \
  'http://localhost:3000/messages' \
  -H 'accept: */*' \
  -H "Content-Type: application/json" \
  -d '{"sourceUserId": '$secondUserId', "destUserId": '$firstUserId', "content": "You are very welcome Zak!"}'  
  