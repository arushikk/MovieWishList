package com.example.movieang;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.servlet.util.matcher.MvcRequestMatcher;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;
import org.springframework.web.servlet.handler.HandlerMappingIntrospector;

@ComponentScan
@Configuration
@EnableWebSecurity
public class securityConfig {
	
	

	   /* @Bean
	    public SecurityFilterChain getSecurityFilterChain(HttpSecurity http,
	                                                      HandlerMappingIntrospector introspector) throws Exception {
	        MvcRequestMatcher.Builder mvcMatcherBuilder = new MvcRequestMatcher.Builder(introspector);

	        // My enpdoints start from /v1 so this pattern is ok for me
	        
	       

	      return  http.authorizeHttpRequests(auth ->
	                auth
	                        .requestMatchers(HttpMethod.OPTIONS , "/**").permitAll()
	                        // This line is optional in .authenticated() case as .anyRequest().authenticated() would be applied for H2 path anyway
	                        .requestMatchers(AntPathRequestMatcher.antMatcher("/h2-console/**")).authenticated()
	                        .anyRequest().authenticated())
	      .httpBasic(Customizer.withDefaults())
	        .sessionManagement(
					session-> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
			.csrf().disable()
			.build();
	    }*/
	    
	@SuppressWarnings("removal")
	@Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        return http.csrf(csrf -> csrf.disable())
           .authorizeHttpRequests(auth -> {
           
            auth.requestMatchers(AntPathRequestMatcher.antMatcher(HttpMethod.OPTIONS,"/**")).permitAll();
            auth.anyRequest().authenticated();
        }).httpBasic().and().build();
    }
}
	/*
	    
	    @Bean
	    public SecurityFilterChain getSecurityFilterChain(HttpSecurity http,
	                                                      HandlerMappingIntrospector introspector) throws Exception {
	        MvcRequestMatcher.Builder mvcMatcherBuilder = new MvcRequestMatcher.Builder(introspector);

	        // My enpdoints start from /v1 so this pattern is ok for me
	        http.csrf(csrfConfigurer ->
	                csrfConfigurer.ignoringRequestMatchers(mvcMatcherBuilder.pattern(HttpMethod.OPTIONS , "/**")));


	        http.authorizeHttpRequests(auth ->
	                auth
	                        .requestMatchers(HttpMethod.OPTIONS , "/**").permitAll()
	                        .requestMatchers(AntPathRequestMatcher.antMatcher(HttpMethod.OPTIONS,"/**")).permitAll()
	                        // This line is optional in .authenticated() case as .anyRequest().authenticated() would be applied for H2 path anyway
	                       
	                        .anyRequest().authenticated()
	        );

	        http.formLogin(Customizer.withDefaults());
	        http.httpBasic(Customizer.withDefaults());

	        return http.build();
	    }
	}*/


