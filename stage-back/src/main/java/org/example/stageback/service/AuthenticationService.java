package org.example.stageback.service;

import org.example.stageback.model.AuthenticationResponse;
import org.example.stageback.model.User;
import org.example.stageback.repository.UserRepository;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthenticationService {

    private final JwtService jwtService;
    private final UserRepository userRepository;

    private final AuthenticationManager authenticationManager;

    public AuthenticationService(JwtService jwtService, UserRepository userRepository , AuthenticationManager authenticationManager) {
        this.jwtService = jwtService;
        this.userRepository = userRepository;

        this.authenticationManager = authenticationManager;
    }



    public AuthenticationResponse authenticateUser(User request) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getMatricule(), request.getMdp()
                )
        );

        User user=userRepository.findUserByMatricule(request.getMatricule()).orElseThrow();
        String token = jwtService.generateToken(user);
        return new AuthenticationResponse(token);

    }
}
