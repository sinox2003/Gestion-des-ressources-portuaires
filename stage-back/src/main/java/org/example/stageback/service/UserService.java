package org.example.stageback.service;

import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import org.example.stageback.model.Profile;
import org.example.stageback.model.User;
import org.example.stageback.repository.UserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;

import java.util.List;
import java.util.Set;

@Service
public class UserService {

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;


    public UserService(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }


    @Transactional
    public User addUser(User request) {
        User user = new User();
        user.setMatricule(request.getMatricule());
        user.setNom(request.getNom());
        user.setPrenom(request.getPrenom());
        user.setMdp(passwordEncoder.encode(request.getMdp()));
        user.setPort(request.getPort());
        user.setProfiles(request.getProfiles());

        userRepository.save(user);

        return user;
    }


    public User getUserByMatricule(String matricule) {
        return userRepository.findUserByMatricule(matricule).orElseThrow();
    }

    public List<User> getUsers(){
        return userRepository.findAll();
    }

    @Transactional
    public User deleteUser(String matricule) {
        User user = userRepository.findUserByMatricule(matricule)
                .orElseThrow(() -> new EntityNotFoundException("User not found"));
        userRepository.delete(user);
        return user;    }

    @Transactional
    public User updateUser(User request) {

        if(userExists(request.getMatricule())){
            User user = getUserByMatricule(request.getMatricule());
            if (request.getNom() != null) user.setNom(request.getNom());
            if (request.getPrenom() != null) user.setPrenom(request.getPrenom());
            if (request.getMdp() != null && !request.getMdp().isEmpty()) user.setMdp(passwordEncoder.encode(request.getMdp()));
            if (request.getPort() != null) user.setPort(request.getPort());
            if (request.getProfiles() != null && !request.getProfiles().isEmpty()) user.setProfiles(request.getProfiles());

            userRepository.save(user);

            return user;
        }

        return null;

    }

    public Boolean userExists(String matricule){
        return userRepository.findUserByMatricule(matricule).isPresent();

    }


    public Set<Profile> getUserProfile(String matricule){
        User user = userRepository.findUserByMatricule(matricule).orElseThrow();
        return user.getProfiles();
    }



}
