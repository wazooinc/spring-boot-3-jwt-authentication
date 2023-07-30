package com.example.springboot3jwtauthentication.controllers;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api/v1/test")
public class TestController {

  @GetMapping("/anon")
  public String anonEndPoint() {
      return "everyone can see this";
  }

  @GetMapping("/users")
  @PreAuthorize("hasRole('USER')")
  public String usersEndPoint() {
    return "ONLY users can see this";
  }

  @GetMapping("/admins")
  @PreAuthorize("hasRole('ADMIN')")
  public String adminsEndPoint() {
    return "ONLY admins can see this";
  }
}
