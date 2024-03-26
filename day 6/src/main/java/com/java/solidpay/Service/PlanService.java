package com.java.solidpay.Service;

import com.java.solidpay.model.Plan;
import com.java.solidpay.Repository.PlanRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PlanService {

    @Autowired
    private PlanRepository planRepository;

    // Create operation
    public Plan createPlan(Plan plan) {
        return planRepository.save(plan);
    }

    // Read operation
    public List<Plan> getAllPlans() {
        return planRepository.findAll();
    }

    public Optional<Plan> getPlanById(String planId) {
        return planRepository.findById(planId);
    }

    // Update operation
    public Plan updatePlan(String planId, Plan updatedPlan) {
        Optional<Plan> existingPlanOptional = planRepository.findById(planId);
        if (existingPlanOptional.isPresent()) {
            Plan existingPlan = existingPlanOptional.get();
            existingPlan.setPlanName(updatedPlan.getPlanName());
            existingPlan.setPlanType(updatedPlan.getPlanType());
            existingPlan.setPlanDetails(updatedPlan.getPlanDetails());
            existingPlan.setPlanPrice(updatedPlan.getPlanPrice());
            existingPlan.setPlanValidity(updatedPlan.getPlanValidity());
            existingPlan.setPlanCategory(updatedPlan.getPlanCategory());
            return planRepository.save(existingPlan);
        } else {
            throw new RuntimeException("Plan not found with id: " + planId);
        }
    }

    // Delete operation
    public void deletePlan(String planId) {
        planRepository.deleteById(planId);
    }
}
