package com.example.pet_clinic.security;

import org.springframework.context.annotation.*;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http
            .csrf().disable()
            .authorizeHttpRequests()
                .requestMatchers("/api/auth/**").permitAll() 
                .requestMatchers("/api/appointments/**").permitAll() // Allow public access
                
                .anyRequest().authenticated()                // Secure the rest
            .and()
            .httpBasic(); 

        return http.build();
    }
}
