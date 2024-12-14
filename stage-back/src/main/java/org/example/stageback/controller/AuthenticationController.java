package org.example.stageback.controller;


import org.apache.coyote.Response;
import org.example.stageback.model.AuthenticationResponse;
import org.example.stageback.model.User;
import org.example.stageback.service.AuthenticationService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class AuthenticationController {

    private final AuthenticationService authenticationService;

    public AuthenticationController(AuthenticationService authenticationService) {
        this.authenticationService = authenticationService;
    }


    @PostMapping("/login")
    public ResponseEntity<AuthenticationResponse> authenticateUser(@RequestBody User request) {
        return ResponseEntity.ok(authenticationService.authenticateUser(request));
    }


}
