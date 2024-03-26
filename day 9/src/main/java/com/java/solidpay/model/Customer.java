    package com.java.solidpay.model; 

    import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
    import jakarta.persistence.GeneratedValue;
    import jakarta.persistence.Id;
    import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
    import jakarta.persistence.Table;
    import lombok.AllArgsConstructor;
    import lombok.Data;
    import jakarta.persistence.GenerationType;
    import lombok.NoArgsConstructor;

    @Entity
    @Table(name = "customer")
    @Data
    @AllArgsConstructor
    @NoArgsConstructor
    public class Customer {
        
        @Id
        @GeneratedValue(strategy = GenerationType.UUID)
        private String customerId;
        private String customerName;
        
        @OneToOne
        @JoinColumn(name = "user_id")
        private User user;

        
        @OneToMany(mappedBy = "customer", cascade = CascadeType.ALL)
        private List<Payment> payments;
        
    }
