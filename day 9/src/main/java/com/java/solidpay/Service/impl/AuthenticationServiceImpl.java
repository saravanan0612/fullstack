package com.java.solidpay.Service.impl;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import com.java.solidpay.Repository.TokenRepository;
import com.java.solidpay.Repository.UserRepository;
import com.java.solidpay.Service.AuthenticationService;
import com.java.solidpay.Utils.JwtUtil;
import com.java.solidpay.dto.Request.ForgotPasswordRequest;
import com.java.solidpay.dto.Request.LoginRequest;
import com.java.solidpay.dto.Request.RegisterRequest;
import com.java.solidpay.dto.Response.BasicResponse;
import com.java.solidpay.dto.Response.LoginResponse;
import com.java.solidpay.model.Token;
import com.java.solidpay.model.User;
import com.java.solidpay.model.enumerate.Role;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthenticationServiceImpl implements AuthenticationService{

    private final UserRepository    userRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final JwtUtil jwtUtil;
    private final TokenRepository tokenRepository;

    @Override
    public BasicResponse<String> register(RegisterRequest registerRequest) {
           Optional <User> isUserExists = userRepository.findByEmail(registerRequest.getEmail());
            
           if(isUserExists.isPresent()){
               return BasicResponse.<String>builder()
               .messege("User already exists with email "+ registerRequest.getEmail())
               .data("")
               .build();
           }

           var user = User.builder()
           .name(registerRequest.getUsername())
           .email(registerRequest.getEmail())
           .password(passwordEncoder.encode(registerRequest.getPassword()))
           .mobileNumber(registerRequest.getMobileNumber())
           .role(Role.USER)
           .build();

           userRepository.save(user);
           return BasicResponse.<String>builder()
           .messege("User registered Successfully")
           .data("")
           .build();
    }


    @Override
    public BasicResponse<LoginResponse> login(LoginRequest loginRequest){
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(loginRequest.getMobileNumber(), loginRequest.getPassword()));
        User user = userRepository.findByMobileNumber(loginRequest.getMobileNumber()).orElseThrow(()-> new UsernameNotFoundException("User not found"));
                Map<String,Object> claims = new HashMap<>();
                claims.put("role",user.getRole().toString());
                String accessToken = jwtUtil.generateToken(claims, user);
                revokeAllUserToken(user);
                saveUserToken(accessToken.toString(),user);
                return BasicResponse.<LoginResponse>builder()
                .messege("Login Success")
                .data(LoginResponse.builder().accessToken(accessToken.toString()).build())
                .build(); 
                
    }


    private void saveUserToken(String accessToken , User user){
        var token = Token.builder()
        .token(accessToken)
        .user(user)
        .expired(false)
        .revoked(false)
        .build();

        tokenRepository.save(token);
    }  

    private void revokeAllUserToken(User user){
        var validUserTokens = tokenRepository.findAllByUser_IdAndRevokedFalseAndExpiredFalse(user.getId());

        if(validUserTokens.isEmpty()){
            return;
        }
        validUserTokens.forEach(token -> {
            token.setRevoked(true);
            token.setExpired(true);
        });
        tokenRepository.saveAll(validUserTokens);
    }


    @Override
    public BasicResponse<String> forgotPassword(ForgotPasswordRequest forgotPasswordRequest){
        var user = userRepository.findByEmail(forgotPasswordRequest.getEmail()).orElseThrow(()-> new UsernameNotFoundException("User not found"));
        if(!passwordEncoder.matches(forgotPasswordRequest.getCurrentPassword(), user.getPassword())){
            return BasicResponse.<String>builder().messege("wrong password").data("").build();
        }
        if(!forgotPasswordRequest.getNewPassword().equals(forgotPasswordRequest.getConfirmPassword())){
            return BasicResponse.<String>builder().messege("Password mismatch").data("").build();
        }
        user.setPassword(passwordEncoder.encode(forgotPasswordRequest.getNewPassword()));
        userRepository.save(user);
        return BasicResponse.<String>builder().messege("Password updated successfully.").data("").build();
    }
        

    }
