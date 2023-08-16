# Spring Boot 3 JWT Authentication

This project is part of a video series on YouTube about providing JSON Web Token
support for Spring Boot projects.

## YouTube Links

1. Implementing JWT Authentication in Spring Boot 3: https://youtu.be/7fAB4WS29oM

## Developer Notes

The project makes use of MySQL and PHPMyAdmin Docker images for database support,
so make sure you have the Docker Desktop running on your machine.

- `git clone git@github.com:wazooinc/spring-boot-3-jwt-authentication.git`
- `cd spring-boot-3-jwt-authentication`
- Open in your favorite editor supporting Java

Note that if you are using this project to start your own, then make sure to generate your own JWT
secret key that's used in the `application.properties`. Instructions are provided in that file
for an easy one-liner to do this.

Also, the `TestController` contains some "dummy" endpoints for just helping to verify role
authorization. You shouldn't need this in any of your projects. It might be handy to just
use as a reference for the `@PreAuthorize` stuff.

## Running the Project

- **Make sure Docker Desktop is running**
- `mvnw spring-boot:run`

## References

Lots of great work by the Spring Boot (and other server) communities around the interwebs. Here's a few I came across
during the research phase of this video.

- https://medium.com/@truongbui95/jwt-authentication-and-authorization-with-spring-boot-3-and-spring-security-6-2f90f9337421
- https://github.com/osopromadze/Spring-Boot-Blog-REST-API
- https://www.codejava.net/frameworks/spring-boot/spring-security-jwt-role-based-authorization
- https://medium.com/spring-boot/spring-security-role-based-implementation-with-spring-boot-3-0-2d59fa5a851b


## LICENSE

Copyright 2023 Wazoo Web Bytes

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”),
to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense,
and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
IN THE SOFTWARE.
