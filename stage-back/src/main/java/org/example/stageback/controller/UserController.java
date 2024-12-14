package org.example.stageback.controller;

import jakarta.transaction.Transactional;
import org.example.stageback.enums.NomProfile;
import org.example.stageback.model.Profile;
import org.example.stageback.model.User;
import org.example.stageback.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/users")
public class UserController {
    private final UserService userService;
    public UserController(UserService userService) {
        this.userService = userService;
    }
    @PostMapping
    public ResponseEntity<User> registerUser(@RequestBody User request) {
        return ResponseEntity.ok(userService.addUser(request));
    }
    @GetMapping("/{matricule}")
    public ResponseEntity<User> getUserById(@PathVariable String matricule) {
        return ResponseEntity.ok(userService.getUserByMatricule(matricule));
    }
    @GetMapping
    public ResponseEntity<List<User>> getAllUsers() {
        return ResponseEntity.ok(userService.getUsers());
    }
    @DeleteMapping("/{matricule}")
    public ResponseEntity<User> deleteUser(@PathVariable String matricule) {
        return ResponseEntity.ok(userService.deleteUser(matricule));
    }
    @PutMapping("")
    public ResponseEntity<User> updateUser( @RequestBody User request) {

        return ResponseEntity.ok(userService.updateUser(request));
    }
    @GetMapping("/profiles/{matricule}")
    public ResponseEntity<List<NomProfile>> getUserProfiles(@PathVariable String matricule) {
        return ResponseEntity.ok(userService.getUserProfile(matricule).stream().map(Profile::getNom).collect(Collectors.toList()));
    }
}
