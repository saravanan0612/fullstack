package com.java.solidpay.Service;

import com.java.solidpay.dto.Request.ForgotPasswordRequest;
import com.java.solidpay.dto.Request.LoginRequest;
import com.java.solidpay.dto.Request.RegisterRequest;
import com.java.solidpay.dto.Response.BasicResponse;
import com.java.solidpay.dto.Response.LoginResponse;

public interface AuthenticationService {

    BasicResponse<String> register(RegisterRequest registerRequest);

    BasicResponse<LoginResponse> login(LoginRequest loginRequest);

    BasicResponse<String> forgotPassword(ForgotPasswordRequest forgotPasswordRequest);
    
}
