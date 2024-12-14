package org.example.stageback.service;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.example.stageback.model.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;

import javax.crypto.SecretKey;
import java.security.Key;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

@Service
public class JwtService {

    final private String SECRET_KEY="aa19e0651d89822eaa24e3c0bc04e4eb714a98b9754634c97f663bddd468647c";

    public String generateToken(User user){
        Map<String,Object> claims=new HashMap<>();
        claims.put("nom",user.getNom());
        claims.put("prenom",user.getPrenom());
        claims.put("port",user.getPort());
        claims.put("authorities",user.getAuthorities());

        String token= Jwts
                .builder()
                .claims(claims)
                .subject(user.getMatricule())
                .issuedAt(new Date(System.currentTimeMillis()))
                .expiration(new Date(System.currentTimeMillis() + 60*60*1000*24 ))
                .signWith(getSingInKey())
                .compact();
        return token;
    }

    private SecretKey getSingInKey() {
        byte[] keyBytes = Decoders.BASE64.decode(SECRET_KEY);
        return Keys.hmacShaKeyFor(keyBytes);
    }

    private Claims extractAllClaims(String token){
        return Jwts
                .parser()
                .verifyWith(getSingInKey())
                .build()
                .parseSignedClaims(token)
                .getPayload();

    }


    public <T> T extractClaim(String token, Function<Claims,T> resolver){
        Claims claims = extractAllClaims(token);
        return resolver.apply(claims);
    }


    public String extractUsername(String token){
        return extractClaim(token, Claims::getSubject);
    }

    public Boolean isValid(String token, UserDetails user){
        String username=extractUsername(token);
        return (username.equals(user.getUsername()) && !isTokenExpired(token));
    }

    private boolean isTokenExpired(String token) {
        return extractClaim(token,Claims::getExpiration).before(new Date());
    }



}



























