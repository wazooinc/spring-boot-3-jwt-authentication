package com.example.springboot3jwtauthentication.repositories;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import com.example.springboot3jwtauthentication.models.User;

public interface UserRepository extends JpaRepository<User, Long> {

  Optional<User> findByEmail(String email);
  
}
