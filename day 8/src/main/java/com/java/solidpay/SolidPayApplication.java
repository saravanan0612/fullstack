package com.java.solidpay;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.security.crypto.password.PasswordEncoder;
import com.java.solidpay.Repository.UserRepository;
import com.java.solidpay.model.User;
import com.java.solidpay.model.enumerate.Role;

import lombok.RequiredArgsConstructor;

@SpringBootApplication
@RequiredArgsConstructor
@ComponentScan({"com.java.solidpay"})
@EntityScan({"com.java.solidpay.model"})                                                 
public class SolidPayApplication {

	private final PasswordEncoder passwordEncoder;

	public static void main(String[] args) {
		SpringApplication.run(SolidPayApplication.class, args);
	}

	@Bean
	public CommandLineRunner commandLineRunner(UserRepository userRepository){
		return args -> {
			if(userRepository.count() > 0) return;
			var admin = User.builder()
			.name("Admin")
			.email("admin@gmail.com")
			.password(passwordEncoder.encode("Admin@123"))
			.role(Role.ADMIN)
			.build();
		};
	}

}
