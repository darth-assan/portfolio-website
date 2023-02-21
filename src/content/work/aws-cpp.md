---
title: AWS CPP
publishDate: 2023-02-20 00:00:00
img: "https://res.cloudinary.com/drup8mw79/image/upload/v1676924371/darthassan/posts/aws_i2isgr.jpg"
img_alt: AWS CPP Badge
description: |
  This write-up is a note for the AWS Certified Cloud Practitioner Certification
tags:
  - AWS
  - Certification
---

### Scaling Amazon EC2

Scaling involves begining with only the resources you need and design your architecture to automatically respond to changing demand by scaling out or in

- Horizontal Scaling - Auto scaling
- Scaling up - Adding more power to the machines that's running
- Scaling out - Adding more instances

**Dynamic scaling**: respond to changing demand.

**Predictive scaling**: automatically schedules the right number of Amazon EC2 instances based on predictive demand.

**⚠️ NOTE: To scale faster you have to use both.**
If you do not specify the desired number of Amazon EC2 instances in Auto Scaling Group, the desired capacity degaults to the minimum capacity.

---

### AWS services and features

**Analytics:**

- Amazon Athena
- Amazon Kinesis
- Amazon QuickSight

**Application Integration:**

- Amazon Simple Notification Service (Amazon SNS)
- Amazon Simple Queue Service (Amazon SQS)

**Compute and Serverless:**

- AWS Batch
- Amazon EC2
- AWS Elastic Beanstalk
- AWS Lambda
- Amazon Lightsail
- Amazon WorkSpaces

**Containers:**

- Amazon Elastic Container Service (Amazon ECS)
- Amazon Elastic Kubernetes Service (Amazon EKS)
- AWS Fargate

**Database:**

- Amazon Aurora
- Amazon DynamoDB
- Amazon ElastiCache
- Amazon RDS
- Amazon Redshift

**Developer Tools:**

- AWS CodeBuild
- AWS CodeCommit
- AWS CodeDeploy
- AWS CodePipeline
- AWS CodeStar

**Customer Engagement:**

- Amazon Connect

**Management, Monitoring, and Governance:**

- AWS Auto Scaling
- AWS Budgets
- AWS CloudFormation
- AWS CloudTrail
- Amazon CloudWatch
- AWS Config
- AWS Cost and Usage Report
- Amazon EventBridge (Amazon CloudWatch Events)
- AWS License Manager
- AWS Managed Services
- AWS Organizations
- AWS Secrets Manager
- AWS Systems Manager
- AWS Systems Manager Parameter Store
- AWS Trusted Advisor

**Networking and Content Delivery:**

- Amazon API Gateway
- Amazon CloudFront
- AWS Direct Connect
- Amazon Route 53
- Amazon VPC

**Security, Identity, and Compliance:**

- AWS Artifact
- AWS Certificate Manager (ACM)
- AWS CloudHSM
- Amazon Cognito
- Amazon Detective
- Amazon GuardDuty
- AWS Identity and Access Management (IAM)
- Amazon Inspector
- AWS License Manager
- Amazon Macie
- AWS Shield
- AWS WAF

**Storage:**

- AWS Backup
- Amazon Elastic Block Store (Amazon EBS)
- Amazon Elastic File System (Amazon EFS)
- Amazon S3
- Amazon S3 Glacier
- AWS Snowball Edge
- AWS Storage Gateway

---

### The Cloud

An EC2 instance is a virtual server in the AWS client-server module.

> You only pay for what you use.

Cloud computing is the on-demand delivery of IT resouces over the internet with pay-as-you-go pricing.

- Undifferentiated heavy lifting of IT: Tasks that are common, repetitive and time consuming. AWS focuses on this so you get the time to do what you need to do.
- Over the internet
- Pay-as-you-go pricing.

---

### Cloud Deployment

- Cloud-based Deployment: Run all parts of the application in the cloudl
- On-Premises Deployment: Deploy resources using virtualization and resources as well as management tools.
- Hybrid Deployment: Connect cloud based resources to on-premises (infrastructure)

**Benefits of the Cloud**

1. Trade upfront expenses for variable expenses
2. Stop spending money to run and maintain data centers.
3. Stop guessing capacity
4. Benefit from massive economics of scale (Lower pay-as-you-go prices)
5. Increase speed and agility
6. Go global in minutes.

---

### Elastic Compute Cloud (Amazon EC2)

Highly flexible -> Cost effective -> Quick

Launch -> Connect -> Use

- Runs on physical host machines
- Uses virtualization technology to deliver it to you.
- Share the resources
- Resizeable (Virtual Scaling)
- Networking is managed by you.
- Compute as a Service

**You have complete control of the instance**

**Multitenancy**: Sharing underlying hardware between virtual machines

> When you are using EC2, you are responsible for software patches /setting up scaling / High availabiligy

---

### Types of EC2 Instances

Each instace type is grouped under an instance family.

1. General Purpose: Good balance of compute/CPU and memory resources - Web servers and code repositories
2. Compute Optimized: Compute instensive task - HPC/Gaming servers/scientific modelling.
3. Memory Optimized: Memory intense tasks
4. Accelerated Computing: Floating point number calculator / Graphic processing
5. Storage Optimized: High performance for locally stored data

**EC2 Pricing**

1. On-demand: Only pay for the duration you your instance runs for.
2. Saving plan: USD 1 / hr - 1/3 year term commitment - 72% savings
3. Reserved Instance: Discount on 1/3 year term. Offers Upfront, No upfront and portion payment to enjoy 75% discount
4. Spot Instances: Spare EC2 instances - 90% discount. AWS can reclaim the instance anytime while giving you 2 minutes warning. No contracts needed.
5. Dedicated Host: Pysically host dedicated EC2. Used for meeting compliance requirements and no one will share tenancy of the host.

**Directing Trafic with Elastic Load Balancing**

- Properly distribute traffic in high performance / cost efficient / highly available and automatically scalable.
- ELB is a regional construct
- Helps in a decoupled architechture

**Global Infrastructure and Reliability**

It is not good enough to have all your data stored in a single data centre. You need high availability and fault tolerance.

- AWS Region: Region is made up of multiple data centers. Regions are geographically isolated areas.
- A single/group of data centers is called an availability zone. Each AZ is one or more discrete data center with redandancy power, networking and connectivity.
  For high availability, you have to run across at least two availability zones in a region.

> Regional Construct

1. SNS
2. SQS
3. S3
4. EFS

### Edge Locations

CDN - Content Delivery Network. Caching a coppy close to the customer/user. **Cloudfront** is amazon's CDN.

**Cloudfront**
: uses edge locations to help accelerate communications.

**Amazon Route53**
: Is a DNS server that can also be run on the edge location

**AWS Outposts**
: Using AWS inside your own building (Data Center)

> In AWS, everything is an API call

---

#### Managing AWS Resources

- AWS Management Console
- AWS Commandline Interface (CLI)
- AWS Software Development Kits (SDKs)

**AWS Elastic Beanstalk**
: Helps you provision Amazon EC2 based environments

**AWS CloudFormation**
: Infrastructure as code tool. It is a declarative way using JSON or YAML. Supports more than Just EC2 instances.

---

### Messaging and Queueing

- puting a message into a buffer.
- Tightly coupled (When an application communicates directly with other processess)
- Loosely coupled (Single failure won't couse cascading failures)

_Amazon Simple Queue Service (Amazon SQS)_

_Amazon Simple Notification Service (Amazon SNS)_

| SQS                                                                                       | SNS                                              |
| ----------------------------------------------------------------------------------------- | ------------------------------------------------ |
| Send messages, Store messages, Receive messages between software component at any volume. | Publish/Subscribe module. Make use of SNS topics |

---

### Migration and Innovation

The AWS cloud adoption framework (AWS CAF) - organises guidance into six areas of focus that's call perspective.

Focus: Business Capabilities

1. Business Perspective
2. People Perspective
3. Governance Perspective

Focus: Platform Capalilities

4. Platform Perspective
5. Security Perspective
6. Operations Perspective

**Migration Strategies**

The six R's of Migration

- Rehosting - Lift and shift
- Replatforming - Lift tinker shift
- Retire
- Retain
- Repurchasing
- Refactoring / re-achitecting

---

### AWS Snow Family

- AWS Snow Cone - 8TB
- AWS Snowball Edge
  - Compute Optimized (Storage 42TB / 52 VCPUs)
  - Storage Optimized (Storage 80TB / 40 VCPUs)
- AWS Snow mobile - 100PB

---

### Innovatoin with AWS

- Vmware on AWS
- Amazon SageMaker
- Amazon Augmented AI
- Amazon Lex
- Amazon Textract
- AWS DeepRacer
- AWS Ground Station

### Monitoring and Analytics

**Amazon Cloudwatch**
: It's a {graphical dashboard}. It's a web service that enables you to monitor and manage various metrics and configure alarm actions based on data from those metrics.

**AWS Cloud Trail**
: {Logs}. Trust but verify. API auditing tool. Every request gets logged in the cloud Trail engine.

**AWS Trusted Advisor**
: {Auditing} Is a web service that inspects your AWS environment and provides real-time recommendations in accordance with AWS best practices.

###### BEST PRACTICES

1.  Cost Optimization
2.  Fault Tolerance
3.  Performance
4.  Security
5.  Service Limits

---

### Networking

Amazon Virtual Private Cloud (VPC): It's a private network in AWS. Allows you to provision a logically isolated section of the AWS cloud where you can launch AWS resources in a virtual network that you define. The resource can be public subnet or private network.

**Internet Gateway**
: Allows traffic to access your VPC

**Private Gateway**
: allows you to create a VPN to your VPC

**AWS Direct Connect**
: Allows you to establish a completely private, dedicated fiber connection from your data center to AWS.

| Network Access Control List (NACL)                                               | Security Group                                                                                                          |
| -------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| Stateless                                                                        | Stateful                                                                                                                |
| Applies to all instances within a subnet                                         | Determines what trafic comes in(inboud traffic) to the instance and which one leaves(outbound traffic) the EC2 instance |
| Operates at the subnet level                                                     | Operates at the Elastic Network Interface (ENI)                                                                         |
| NACL rules are evaluated from Lowest to Highest. Lowest number, Highest priority | It's a virtual firewall                                                                                                 |
| Both Allow and Deny rules are possible                                           | Only have allow rules                                                                                                   |
| Allows all traffic by default                                                    | Blocks all traffic by default                                                                                           |

---

### Pricing and Support

AWS Free Tier

- Always free
- 12 months free
- Trials

**AWS Lambda**
: Free for 1 million invocations per month.

**S3**
: is free for 12 months

**Lightsail**
: Offers 1 month trial of up to 750 hours of usage

| Pay for what you use                                                                                                                              | Pay less when you reserve                                                                                          | Pay less with volume-based discounts when you use more                                              |
| ------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------- |
| For each service, you pay for exactly the amount of resources that you actually use, without requiring long-term contaracts or complex licensing. | Some Service offer reservation options that provides a significant discount compared to on-demand instance pricing | Some service offer tiered pricing, so the per-unit cost is incrementally lower with increased usage |

---

### Billing

**AWS Billing and cost Management Dashboard**
: to pay your AWS bill, monitor your usage analyze and control your costs.

- compare your current month-to-date balace with the previous month, and get a forcast of the next month based on current usage.
- View month-to-date spend by service
- View free tier usage by service
- Access cost Explorer and Create budget
- Purchase and mange savings plans
- Publish AWS costs and usage reports

**Consolidated Billing**
: Enables you to receivea single bill for all AWS accounts in your organisation.

- By consolidating you can easily track the combined costs of all th linked accounts in your organisation.
- Another benefit of consolidated billing is the ability to share bulk discount pricing, savings plans, and reserved instances across the accounts in your organisation.

**AWS Budget**
: You can create budgets to plan your service usage, service costs and instance reservations.

**AWS Cost Explorer**
: Is a tool that enables you to visualize, understand and manage your AWS costs and usage over time.

**AWS Support Plans**
: AWS offrs four different support plans to meet your company's needs.

1. Basic Plan - Free and limited trusted adviser checks.
2. Developer Plan
3. Business Plan
4. Enterprse Plan - TAM

**AWS Market Place**
: It's a digital catalog that includes thousands of software listings from independent software vendors. You can use AWS marketplace to find, test and buy software that runs on AWS.

---

### Security

With the shared responsibility model

- AWS controls the Security of the cloud
- Customers controls the Security in the cloud

| Customer                                           | AWS                                                                                                                                                      |
| -------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Security in the Cloud                              | Security of the Cloud                                                                                                                                    |
| Maintains control over your content                | Operates, manages and control the components at all layers of infrasture including (Host OS, Virtualization Layer, Physical Security of the Data Center) |
| Managing security requirements                     | Global infrastructure                                                                                                                                    |
| Access to content                                  |                                                                                                                                                          |
| how access rights are granted, managed and revoked |                                                                                                                                                          |

**User Permissions and Access**

AWS identity and Access Management (IAM) - by default IAM users have no permissions.

**Least Privilege Principle**
: A user is granted access only to what they need.

**Root user**
: Has complete access to all the AWS services and resources in the account. Do not use the root user for everyday tasks.

- Create an AWS account this established your root user identity
- Create your first IAM user and give it permissions to create other users
- Login as the new IAM user and continue to create other users
- Only acccess the root user for a limitee number of tasks

**IAM Users**
: Is an identity that you create in AWS. It represents the person / application that interacts with AWS services and resources. Consist of names and credentials. - by default, when you create a new IAM user in AWS, it has no permissions associated with it.

> BEST PRACTICE

<mark>We recommend that you create individual IAM users for each person who needs to access AWS.</mark>

**IAM Policies**
: An IAM policy is a document that allows or denies permisions to AWS services and resoruces. Allows you to customize user level of access to resouces.

> BEST PRACTICE

<mark>Follow the security principles of least privilege when granting permission</mark>

**IAM Groups**
: Is a collection of IAM users. When you assign an IAM policy to a group, all users in the group are granted permissions specified by the policy. One way to manage your users and their permissoins is to organise them into IAM groups.

**IAM Roles**
: Is an identity that you can assume to gain temporary access to permissions. Before an IAM user, application or service can assume an IAM role, they must be granted permission to switch to the role. When someone assumes an IAM role, they drop all previous permissions they had under a previous role and assume the premission of the new role.

> BEST PRACTICE

<mark>IAM roles are ideal for situations in which access to services or resources needs to be granted temporarily instead of long-time.</mark>

**AWS Organizations**

A central location to mange multiple AWS accounts.

- Centralized management
- Consolidated billing
- Hierarchical groupings of accounts
- AWS service and API actions access control (Services control Policies(SCPs)).

<mark>You cannot apply IAM policies to IAM users, groups or roles. You cannnot apply an IAM policy to the AWS account root user.</mark>

**AWS Artifact**

Is a service that provides on-demand access to AWS security and compliance reports and select online agreements. AWS artifacts consists of two main sections:

- <mark>AWS Artifacts Agreements and AWS Artifact Reports</mark>

**Denial of Service Attacks**

- Security Policy can help against UDP Floods
- ELB can help against slow loris attacks
- <span style="color:red">AWS Shield is a service protects applications against DDoS attacks.</span>
- <span style="color:red">AWS WAF uses a web application firewall to filter incoming traffic with the signature of bad actors.</span>

**Additional Security Services**

**AWS Key Management Service (KMS)**
: is used to manage cryptographic/encryption keys on AWS

- Encryption at rest -> DynamoDB data
- Encrypton in transit -> SSL

**Amazon Inspector**
: runs automated security accessment against your infrastructure

**Amazon GuardDuty**
: It analyses contineous streams of metadata generated from your account and network activity.

---

### Serverless

You cannot see or access the underlying infrastructure.

AWS Lambda is a serverless option suited for quick processing like web application backend.

- AWS Container Services: Container orchestration tool.
- Amazon Elastic Container Service (Amazon ECS)
- Amazon Elastic Kubernetes Service (Amazon EKS)
- AWS Fargate: It is a serverless computer platformm for ECS and EKS

---

### Storage and Databases

<span style="color:orange">- Block level storage - Hard Drive</style>

**Instance Store**
: are used to store temporary files and data that can be easily recreated without consequences.

**Amazon Elastic Block Store (EBS)**
: Virtual hard drive or EBS volumes. Allows incremental backups called snapshots.

**Amazon Simple Storage Service (S3)**
: Store and retrieve unlimited amount of data. Stores data as an object in buckets with mazimum size of 5TB.

**Storage Types**

S3 Standard

- 99.99% at least 3 storage facilities

S3 Standard - Infrequent Access (S3 standard - IA)

- used for data accessed less frequently but requres rapid access when needded (Backups)

Amazon S3 Glacier

- used to achive data for auditing or future purposes

S3 one zone-Infrequent Access (S3 one zone-IA)

- stores data in a single AZ

S3 Intelligent-Tiering

- Ideal for data with ==unknown== or ==changeing access patterns.==

S3 Glacier Deep Archive

- Lowest-Cost object storage class ideal for archiving

**Amazon Elastic File System (Amazon EFS)**

It's a managed file system. Amazon takes care of the scaling andreplication of multiple instances accessing the data all the time. It's a true file system for Linux and not just a blank hard drive you can write to.

<mark>On-Premises servers can access Amazon EFS using AWS Direct Connect</mark>

**Amazon Relational Database Service (RDS)**

Lift-and-shift migration of databse in EC2 or use RDS to do the migration with added benefits which includes _automate patching_, _backups_, _redundancy_,_failovers_,_disaster recovery_

**Amazon Aurora**

Aurora is a managed relational database. Used for high availability. Entreprise class relational database.

- Pricing is 1/10th the cost of commercial databases.
- Data replicated across facilities 6 copies at any given time.
- Up to 15 read replicas
- Contineous backup to S3
- Point-in-time recovery

**Amazon DynamoDB**

It's a serverless database which supports auto scaling. Non-relational (NoSQL) which uses key-value pair

- Highly scalable and highly performant
- Purpose built.

**Amazon Redshift**

Data wearhousing service. Looks at historical analytics as suppose to operational analysis. It is scalable and offers data wear house as a service.

**Amazon Database Migeration Service (DMS)**

Migrates existing databse onto AWS in a secure fashion

**Amazon DocumentDB**

It's a document Database

**Amazon Neptune**

Used for Graph Databases

**Amazon Quantum Ledger Database (QLDB)**

All entries can never be deleted / removed from the audit

**Amazon ElasticCache**

Provides caching layers for DBS. Supports redis and memcached.

**Amazon DynamoDB Accelerator (DAX)**

**Imporoves read times for non-relational data**

---

### The Cloud Journey

AWS Well-Architected Framework: helps you understand how to design and operate reliable, secure, efficient and cost effective systems in the AWS cloud.

Operatoinal Experience

- Is the ability to run and monitor systems to deliver business value and to continually improve supporting processes and procedures.

Security

- The security pillar is the ability to protect information, systems and assets while delivering business value through risks assessments and mitigation strategies.

Reliability

- the ability of a system to do the following

- Recover from infrastructure or service desruption
- Dynamically acquire computing resources to meet demand
- Mitigate disruptions such as misconfigurations or transient network issues.

Performance Efficiency

- the ability to use computing resources efficiently to meet system requiremtns and to maintain that efficiency as demand changes and technology evolves.

Cost Optimization

- Is the ability to run systems to deliver business value at the lowest price point.

**Benefits of the cloud**

<mark>There are 6 main benefits of the cloud

1. Trade upfront expenses for variable expense
2. Benefit from massive economies of scale
3. Stop guessing capacity
4. Increase speed and agility
5. Stop spending money running and maintaining data centers
6. Go global in minutes</mark>

### AWS Well-Architected and the Six Pillars

**Framework Overview**

The AWS Well-Architected Framework describes key concepts, design principles, and architectural best practices for designing and running workloads in the cloud. By answering a few foundational questions, learn how well your architecture aligns with cloud best practices and gain guidance for making improvements.

**Operational Excellence Pillar**

The operational excellence pillar focuses on running and monitoring systems, and continually improving processes and procedures. Key topics include automating changes, responding to events, and defining standards to manage daily operations.

- Perfom Operations as code
- Make frequent,small reversible changes
- Refine operations procedures frequently
- Anticipate failure
- Learn from all operational failures

**Performance Efficiency Pillar**

The performance efficiency pillar focuses on structured and streamlined allocation of IT and computing resources. Key topics include selecting resource types and sizes optimized for workload requirements, monitoring performance, and maintaining efficiency as business needs evolve.

- Go global in minutes
- Use serverless architechures
- Experiment more often
- Democratize advanced technologies

**Security Pillar**

The security pillar focuses on protecting information and systems. Key topics include confidentiality and integrity of data, managing user permissions, and establishing controls to detect security events.

- Enable traceability
- Implement a strong indentity foundation
- Apply security at all layers
- Automate security best practices
- Keep people away from data
- Prepare for security events
- Protect data at rest and in transit

**Reliability Pillar**

The reliability pillar focuses on workloads performing their intended functions and how to recover quickly from failure to meet demands. Key topics include distributed system design, recovery planning, and adapting to changing requirements.

- Automatically recover from failure
- Test recovery procedures
- Scale horizontally to increase aggregated workload
- Stop guessing capacity
- Manage change in automation

**Cost Optimization Pillar**

The cost optimization pillar focuses on avoiding unnecessary costs. Key topics include understanding spending over time and controlling fund allocation, selecting resources of the right type and quantity, and scaling to meet business needs without overspending.

- Implement Cloud Financial Management
- Adopt a consumption model
- Measure overall efficiency
- Stop spending money on undifferentiated heavy lifting
- Analyze and attribute expenditure

**Sustainability Pillar**

The sustainability pillar focuses on minimizing the environmental impacts of running cloud workloads. Key topics include a shared responsibility model for sustainability, understanding impact, and maximizing utilization to minimize required resources and reduce downstream impacts.

---

### About the Exams

Cloud Concepts - 26%

Security and Compliance - 25%

Technology - 33%

Billing and Pricing - 16%

**<span style="color:red">65 questions | 90 minutes | 70% passing score | 50 Scoring questions</span>**

<mark>No penalty for quessing</mark>

### Things you need to know

#### Set 1

Know the details of the following (not an exhaustive list):

- Fundamentals of AWS: IAM, S3, EC2, EBS, EFS, Redshift, RDS, DynamoDB, Auto Scaling

Dynamo DB is serverless for NoSQL, IAM is used to manage identity and access control, S3 is a storage service, EC2 is a compute service, EBS is a block storage that can be attached to EC2 instances, EFS is serverless shared storage, Redshift is for data wearhousing, RDS is used to launch or migrate an existing relational database to AWS.

- VPN, VPC, Transit Gateway, Internet Gateway, NAT Gateway

VPC: A web service for provisioning a logically isolated section of the AWS Cloud virtual network that you define. You control your virtual networking environment by selecting your own IP address range, creating [subnets](https://docs.aws.amazon.com/general/latest/gr/glos-chap.html#subnet) and configuring [route tables](https://docs.aws.amazon.com/general/latest/gr/glos-chap.html#routetable) and network gateways.

- Transit Gateway: on-prem and aws cloud connecct to a single gateway(one big cloud router)
- Internet Gateway: allows instances with public IPs to access the internet.
- NAT Gateway: allows instances with no public IPs to access the internet.

**CloudFront, CloudFormation, CloudTrail, CloudWatch**

CloudFront: An AWS content delivery service that helps you improve the performance, reliability, and availability of your websites and applications.

CloudFormation: A service for writing or changing templates that create and delete related AWS [resources](https://docs.aws.amazon.com/general/latest/gr/glos-chap.html#resource) together as a unit.

CloudTrail: A web service that records AWS API calls for your account and delivers log files to you

CloudWatch: A web service that you can use to monitor and manage various metrics, and configure alarm actions based on data from those metrics.

**AWS Security best practices such as IAM policies and KMS**

KMS: A managed service that simplifies the creation and control of [encryption](https://docs.aws.amazon.com/general/latest/gr/glos-chap.html#encrypt) keys that are used to encrypt data.

What are Region and Availability Zone (AZ) restrictions for different AWS services: Single AZ, Multi-AZ, Single Region, Multi-Region

Availability Zone: A distinct location within a [Region](https://docs.aws.amazon.com/general/latest/gr/glos-chap.html#region) that's insulated from failures in other Availability Zones, and provides inexpensive, low-latency network connectivity to other Availability Zones in the same Region.

**Region: physical location**

- What AWS services are global:

IAM, CloudFront, Amazon Route 53, WAF, Amazon Chime, DynamoDB, WorkDocs, WorkMail, WorkSpaces, WorkLink, Service Certificates

- What AWS services are truly free:

Security Groups, Auto Scaling, CloudFormation

- What AWS services include a free tier for 12 months for new AWS customers:

EC2, S3, RDS, CloudFront, DynamoDB*, Glacier*, Lambda\* \*Does not automatically expire after 12 months

- What AWS services are never free (need to pay to use)

WIREE, WAF, Inspector, Route 53, EBS volumes, ELB

- What AWS services are serverless

DynamoDB, Aurora, S3, SNS, SQS, Lambda, Fargate

- What AWS services scale automatically without intervention:

S3, Lambda

- Which data storage options have auto-backup:

REEDS — RDS, EFS, EBS, DynamoDB, Storage Gateway

---

#### Set 2

- What is a more cost effective option S3 One-Zone IA or Glacier?

- When do you use a dedicated host versus a dedicated instance?

<mark>Dedicated Instances - You pay for the instances, but they get placed on whatever dedicated hardware Amazon decides.</mark>

<mark>Dedicated Host - You pay for the entire physical server and can, in effect, run instances on it as you please.</mark>

- Is it more cost effective to run a spot instance or an on-demand instance when requests cannot be interrupted?
- When should you use Dynamo DAX versus ElastiCache versus Aurora?
- What services can I use to budget my services before I incur costs and how can I set up alerting?
- How can I show that RDS is set up for availability? What about for elasticity?
- What is the difference between CloudWatch and CloudFront?
- What can I use for encryption?
- What do I manage and what does AWS manage?
- What are the inherited factors from AWS?
- When it comes to RDS and EC2, who manages what?
- Which services are global?
- Which services are on-prem?
- Which services are regional?
- Which services are reserved?
- How much data does it take to use snowball vs snowmobile service?"
- What is scaling up vs. scaling out for RDS and EC2?
- When/how do you get a TAM?
- What do you get full access to Trusted Advisor?
- Which services are serverless?

**AWS Trusted Advisor** - AWS Trusted Advisors provides recommendations that help you follow AWS best practices. Trusted Advisor evaluates your account by using checks. These checks identify ways to optimize your AWS infrastructure, improve security and performance, reduce costs, and monitor service quotas. You can then follow the check recommendations to optimize your services and resources.

Trusted Advisor can help you save cost, such as recommending you to delete unused or idle resources, or use reserved capacity.

**Amazon CloudWatch** - Amazon CloudWatch is a monitoring service and provides you with data and actionable insights to monitor your applications, respond to system-wide performance changes, and optimize resource utilization. CloudWatch collects monitoring and operational data in the form of logs, metrics, and events. You get a unified view of operational health and gain complete visibility of your AWS resources, applications, and services running on AWS and on-premises. You can use CloudWatch to detect anomalous behavior in your environments, set alarms, visualize logs and metrics side by side, take automated actions, troubleshoot issues, and discover insights to keep your applications running smoothly.

**AWS Cost Explorer** - AWS Cost Explorer has an easy-to-use interface that helps you visualize, understand, and manage your AWS costs and usage over a daily or monthly granularity. It has a default report that helps you visualize the costs and usage associated with your top five cost-accruing AWS services, and gives you a detailed breakdown of all services in the table view. The reports let you adjust the time range to view historical data going back up to twelve months to gain an understanding of your cost trends. It also lets you dive deeper using granular filtering and grouping dimensions such as Usage Type and Tags.

**Amazon Inspector** - Amazon Inspector is an automated security assessment service that helps improve the security and compliance of applications deployed on AWS. Amazon Inspector automatically assesses applications for exposure, vulnerabilities, and deviations from best practices. After performing an assessment, Amazon Inspector produces a detailed list of security findings prioritized by level of severity. These findings can be reviewed directly or as part of detailed assessment reports, which are available via the Amazon Inspector console or API.

**AWS Service Health Dashboard** - AWS publishes the most up-to-the-minute information on service availability in the Service Health Dashboard. You can visit any time to get the current status and availability information for each individual service. AWS Service Health Dashboard is available at this link: [https://status.aws.amazon.com](https://status.aws.amazon.com/)

**AWS Personal Health Dashboard** - The Personal Health Dashboard gives you a personalized view of the status of AWS services that power your applications. Use the Personal Health Dashboard to learn about specific operational issues that affect your account. For example, if you receive an event for a lost Amazon Elastic Block Store (EBS) volume associated with one of your Amazon EC2 instances, you can use the event to quickly view the status of your impacted resources, and then troubleshoot and determine remediation steps.

**AWS Config** - AWS Config enables you to assess, audit, and evaluate the configurations of your AWS resources. Config continuously monitors and records your AWS resource configurations and allows you to automate the evaluation of recorded configurations against desired configurations. With Config, you can review changes in configurations and relationships between AWS resources, dive into detailed resource configuration histories, and determine your overall compliance against the configurations specified in your internal guidelines.

**AWS CloudFormation** - AWS CloudFormation gives you an easy way to model a collection of related AWS and third-party resources, provision them quickly and consistently, and manage them throughout their lifecycles, by treating infrastructure as code. A CloudFormation template describes your desired resources and their dependencies so you can launch and configure them together as a stack. You can use a template to create, update, and delete an entire stack as a single unit, as often as you need to, instead of managing resources individually. You can manage and provision stacks across multiple AWS accounts and AWS Regions.

**AWS CloudTrail** - AWS CloudTrail monitors and records account activity across your AWS infrastructure, giving you control over storage, analysis, and remediation actions. With CloudTrail, you can log, continuously monitor, and retain account activity related to actions across your AWS infrastructure.

CloudTrail provides event history of your AWS Accounts. CloudTrail Events help you answer the questions of "who did what, where, and when?".  Let's say your S3 bucket was deleted by mistake. You can use AWS CloudTrail to see who deleted the bucket, when, and where (e.g. API Call or from the AWS Management console).

**AWS Elastic Load Balancing** - Elastic Load Balancing (ELB) is an AWS service that automatically distributes incoming application traffic across multiple targets, such as Amazon EC2 instances, containers, IP addresses, and Lambda functions, and ensures only healthy targets receive traffic. It can handle the varying load of your application traffic in a single Availability Zone or across multiple AZs, and supports the ability to load balance across AWS and on-premises resources in the same load balancer.
