package com.java.solidpay.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.java.solidpay.model.Addon;

@Repository
public interface AddonRepository extends JpaRepository<Addon, String>{
    
}
