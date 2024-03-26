package com.java.solidpay.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.java.solidpay.model.Customer;

@Repository 
public interface CustomerRepository  extends JpaRepository<Customer, String>{
 
    
}
