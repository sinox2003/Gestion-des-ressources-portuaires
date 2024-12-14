package org.example.stageback.model;

import jakarta.persistence.*;
import lombok.Data;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.HashSet;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Entity
@Data
@Table(name = "users")
public class User implements UserDetails {
    @Id
    private String matricule;
    private String nom;
    private String prenom;
    private String mdp;
    @ManyToMany(fetch = FetchType.EAGER,cascade = CascadeType.ALL)
    @JoinTable(
            name = "user_profiles",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "profile_id")
    )
    private Set<Profile> profiles ;
    @ManyToOne
    @JoinColumn(name = "port_id")
    private Port port;
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return profiles.stream()
                .map(profile -> new SimpleGrantedAuthority(profile.getNom().name()))
                .collect(Collectors.toSet());
    }
    @Override
    public String getPassword() {
        return this.mdp;
    }
    @Override
    public String getUsername() {
        return this.matricule;
    }

}
