package com.example.springboot3jwtauthentication.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;

@Configuration
@EnableWebSecurity
@EnableMethodSecurity
public class SecurityConfig {
  
  @Bean
  public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
    http
    .csrf(csrf -> csrf 
      .disable()
    )
    .sessionManagement(session -> session
      .sessionCreationPolicy(SessionCreationPolicy.STATELESS)
    )
    .authorizeHttpRequests(authorize -> authorize
      .requestMatchers(HttpMethod.POST, "/api/v1/signup", "/api/v1/signin").permitAll()
      .anyRequest().authenticated()
    );

    return http.build();
  }
}
