package com.java.solidpay.Repository;
import com.java.solidpay.model.Plan;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PlanRepository  extends JpaRepository<Plan, String>{
    
}
