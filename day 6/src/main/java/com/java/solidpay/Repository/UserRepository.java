package com.java.solidpay.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.java.solidpay.model.User;



@Repository
public interface UserRepository extends JpaRepository<User, String> {
   
    Optional<User>  findByMobileNumber(String mobile);
    Optional<User>  findByEmail(String mobile);
}
