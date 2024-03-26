package com.java.solidpay.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.java.solidpay.model.Recharge;

@Repository
public interface RechargeRepository extends JpaRepository<Recharge, String>{
    
}
