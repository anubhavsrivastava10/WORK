# Microsoft Azure

#### What is Cloud Computing?
It is a platform that gives you access to the computing resources over the internet.
As a user you go the Cloud Service provider and connect to cloud service provider then you have access to the computing resources such as storage, API's etc.
For an Example take Netflix all of the videos or any other service like that in this wha t you are doing is you are accessing the data from there cloud which has all the videos or data.

#### What is Microsoft Azure?
It is a cloud computing service for building, testing, deploying and managing applications and services through Microsoft managed data centers.
It Provides SaaS, PaaS, IaaS and supports many different programming languages, tools and frameworks including various third-party software and systems. It has 42 Datacentres in region around the world.

#### How does Azure Work ?
It relies on the technology known as Virtualization. It provides an emulation layer that maps software intruction ot hardware instruction, vairtualized hardware can execute in software as if it were the actual hardware itself.

The cloud is a set of physical servers in one or more datacenters that execute virtualized hardware on behalf of customers. Inside each datacenter there are many servers sitting in a rack. Each server rack hat it's own functionality from providing network connectivity to storage to deployment etc. Racks sometimes are grouped together to perform in larger scale is known as _Cluster_.
Some server run hardware instances where as some run cloud managment software known as _fabric controller_, fabric controller is a distributed application with many responsibilities it allocates service, monitor the server, service running on it etc.

In simple words, Azure is a huge collection of servers and networking hardware running a complex set of distributed applications to orchestrate the configuration and operation of the virtualized hardware and software on those servers.

#### What is Resource Group ?
An entity managed by azure is called _Resource_. 
Logical connection between all your resources that you can create in Azure on that resource you deploy your role based access control that covers who does what in the resource group.
Nothing but a collection of Resources put together so that they can be managed as a single entity based on lifecycle and security.

#### What is Azure Subscription ?
Azure subscription is similar to a resource group in that it's a logical construct that groups together resource groups and their resources. It is also associated with the controls used by Azure Resource Manager.
Azure Subscription provides the capability to create, deploy and run Azure Cloud Services (Virtual Machine, Containers, Azure SQL etc) in an Azure portal. if you don’t have an Azure subscription, you can’t use any of the Azure services

#### Basic Idea
 
 Every organisation works as a customer to Azure where you use
 there resources and every customer has a id known as _tenant id_, also everyone has a directory where you can control manage all the user and you can search _azure active directory_ you can add a person in your directory (_Create_/_Add_) i.e multiple users. In every subscription there is a linked resource group and there can be a multiple subscription which can be assigned to a multiple user you can give access to that particular subscription in which you decide a role of the user (but the person has to be in the same AD). Resource group is collection of resources connected logically and then give access to the resource group but not to subscription.


##### My queries!!
 1. A person not on Azure can access your subscription if you add him?
 1. For python it is only showing linux ?(Web App) Does that make any difference from how i use it on Linux?