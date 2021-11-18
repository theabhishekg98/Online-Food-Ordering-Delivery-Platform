# UberEats-Clone

STEPS TO RUN CLONE: 

Run the following command in backend and frontend folders >> npm i

Step 1:

Install Kafka variant - 
$ tar -xzf kafka_2.13-3.0.0.tgz
$ cd kafka_2.13-3.0.0

Step 2: 

Start Kafka environment - 
$ bin/zookeeper-server-start.sh config/zookeeper.properties
$ bin/kafka-server-start.sh config/server.properties

Step 3: 

Create topics to store the events - 
$ bin/kafka-topics.sh --create --topic <topic-name> --bootstrap-server localhost:9092
 
Step 4:
  
Run command in Backend server >> node index.js
Run command in Kafka backend >> node server.js
Run command in Client >> npm start


Technology stack: 
  
1. Backend:
    Kafka
    Node.js
    Express.js

2. Frontend:
    React.js

3. Database:
    Atlas MongoDB
    AWS S3

4. Deployment:
    AWS EC2
