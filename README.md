<div align="center">
<img alt="Delice" src="public/Delice-circle.png">
<h1 align="center">Delice</h1>

  <p align="center">
    An online menu & ordering application for cafe Delice. 
    <br />
    <a href="https:delice.davisdjaja.com"><strong>View Demo</strong></a>
    <br />
    <p align="center">Or Scan the QR code below:</p>
    <img alt="deliceQRCode" src="src/assets/deliceQR.png">
    <br />
    <a href="https://github.com/Denz1423/delice-client">Client Repository</a>
    ·
    <a href="https://github.com/Denz1423/delice-api">API Repository</a>
  </p>
</div>

## About The Project

A full stack application built with React TypeScript and .NET and hosted using AWS cloud services. 

Delice is an online ordering platform. As the hospitality industry shifts towards self-service solutions, Delice provides a streamlined way for customers to order directly from their smartphones. Customers can simply scan a QR code at their table to access the digital menu, place orders, and pay online, reducing the need for staff to take orders and allowing them to focus on other aspects of the business. The goal is to enhance the dining experience by making ordering more efficient and convenient.

### Built With

[![TechStack](https://skillicons.dev/icons?i=react,dotnet,dynamodb,githubactions,aws)](https://skillicons.dev)

## Architecture
![AWS architecture diagram for delice](src/assets/delice-architecture.png)

### Request Flow

1. When a user access the application through `delice.davisdjaja.com`, Route 53 resolves the domain to the CloudFront distribution.
2. Requests to `delice.davisdjaja.com/*` are received by the cloudfront distribution and it determines how to route it based on URL patterns.
3. If the URL matches `delice.davisdjaja.com/api/*`.
   1. Forward the request to the application load balancer (ALB).
   2. The ALB routes the request to the appropriate Target Group, which is an EC2 instance running the backend server for the application.
4. For all other URLs that do not match the `delice.davisdjaja.com/api/*` pattern, CloudFront forwards the request to an Amazon S3 bucket containing the react application.

## Deployment Pipelines

### Client

![delice client deployment pipeline](src/assets/delice-client-workflow.png)

### Server

Work in Progress