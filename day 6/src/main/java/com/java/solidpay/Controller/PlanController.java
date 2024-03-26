package com.java.solidpay.Controller;
import com.java.solidpay.model.Plan;

import io.swagger.v3.oas.annotations.tags.Tag;

import com.java.solidpay.Service.PlanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/plans")
@Tag(name = "plans", description = "It is used add plans")
public class PlanController {

    @Autowired
    private PlanService planService;

    // Create operation
    @PostMapping
    public ResponseEntity<Plan> createPlan(@RequestBody Plan plan) {
        Plan createdPlan = planService.createPlan(plan);
        return new ResponseEntity<>(createdPlan, HttpStatus.CREATED);
    }

    // Read operation
    @GetMapping
    public ResponseEntity<List<Plan>> getAllPlans() {
        List<Plan> plans = planService.getAllPlans();
        return new ResponseEntity<>(plans, HttpStatus.OK);
    }

    @GetMapping("/{planId}")
    public ResponseEntity<Plan> getPlanById(@PathVariable String planId) {
        Optional<Plan> plan = planService.getPlanById(planId);
        return plan.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    // Update operation
    @PutMapping("/{planId}")
    public ResponseEntity<Plan> updatePlan(@PathVariable String planId, @RequestBody Plan updatedPlan) {
        Plan plan = planService.updatePlan(planId, updatedPlan);
        return new ResponseEntity<>(plan, HttpStatus.OK);
    }

    // Delete operation
    @DeleteMapping("/{planId}")
    public ResponseEntity<Void> deletePlan(@PathVariable String planId) {
        planService.deletePlan(planId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
