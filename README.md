## Guestbook Example

This example shows how to build a simple multi-tier web application using
Kubernetes and Docker. The application consists of a web front end, Redis
master for storage, and replicated set of Redis slaves, all for which we will
create Kubernetes deployments, pods, and services.

There are two versions of this application. Version 1 (in the `v1` directory)
is the simple application itself, while version 2 (in the `v2` directory)
extends the application by adding additional features that leverage the Watson
Tone Analyzer service. It is recommended that if you are new to this example
then you look at just the `v1` version of the application. Other IBM demos
will make use of the `v2` version, such as
[Istio101](https://github.com/IBM/istio101).

Please see the correspoding README.md files in each directory for more
information.
