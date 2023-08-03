package com.example.springboot3jwtauthentication.filters;

import java.io.IOException;

import org.apache.commons.lang3.StringUtils;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import com.example.springboot3jwtauthentication.services.JwtService;
import com.example.springboot3jwtauthentication.services.UserService;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Component
@RequiredArgsConstructor
@Slf4j
public class JwtAuthenticationFilter extends OncePerRequestFilter {
  
  private final JwtService jwtService;
  private final UserService userService;

  @Override
  protected void doFilterInternal(HttpServletRequest request,
        HttpServletResponse response, 
        FilterChain filterChain)
        throws ServletException, IOException {
      final String authHeader = request.getHeader("Authorization");
      final String jwt;
      final String userEmail;
      if (StringUtils.isEmpty(authHeader) || !StringUtils.startsWith(authHeader, "Bearer ")) {
          filterChain.doFilter(request, response);
          return;
      }
      jwt = authHeader.substring(7);
      log.debug("JWT - {}", jwt.toString());
      userEmail = jwtService.extractUserName(jwt);
      if (StringUtils.isNotEmpty(userEmail) && SecurityContextHolder.getContext().getAuthentication() == null) {
          UserDetails userDetails = userService.userDetailsService().loadUserByUsername(userEmail);
          if (jwtService.isTokenValid(jwt, userDetails)) {
            log.debug("User - {}", userDetails);
            SecurityContext context = SecurityContextHolder.createEmptyContext();
            UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(
                    userDetails, null, userDetails.getAuthorities());
            authToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
            context.setAuthentication(authToken);
            SecurityContextHolder.setContext(context);
          }
      }
      filterChain.doFilter(request, response);
  }
}