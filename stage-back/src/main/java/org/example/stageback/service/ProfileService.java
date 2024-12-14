package org.example.stageback.service;

import org.example.stageback.model.Profile;
import org.example.stageback.repository.ProfileRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;

@Service
public class ProfileService {
    private final ProfileRepository profileRepository;

    public ProfileService(ProfileRepository profileRepository) {
        this.profileRepository = profileRepository;
    }

    public Profile updateProfile(Profile profile) {
        return profileRepository.save(profile);
    }

    public Profile getProfileById(Long id) {
        return profileRepository.findById(id).orElse(null);
    }

    public List<Profile> getAllProfiles() {
        return profileRepository.findAll();
    }



}
