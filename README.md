# UberEats-Clone

ABOUT: 

An MVC full-stack application with dashboards for two personas - customers and restaurant owners, to view, search & place food orders and add or edit restaurant/dish data, respectively. Deployed on AWS EC2.

Created an interface for orders’ status and viewing user profiles. The REST services are developed using Node.js, Express.js, and React.js with a strong focus on distributed messaging using Apache Kafka. 


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

Step 5:

Launch the application - Open the browser and navigate to Front-end server's IP address with Port number (Eg: 127.0.0.1:3000) to find the landing page.
 
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
