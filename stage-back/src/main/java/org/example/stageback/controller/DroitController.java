package org.example.stageback.controller;


import org.example.stageback.model.Droit;
import org.example.stageback.service.DroitService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/droits")

public class DroitController {

    private final DroitService droitService;

    public DroitController(DroitService droitService) {
        this.droitService = droitService;
    }

    @GetMapping("")
    public ResponseEntity<List<Droit>> getAllDroits(){
        return ResponseEntity.ok(droitService.getAllDroits());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Droit> getDroitById(@PathVariable Long id){
        return ResponseEntity.ok(droitService.getDroitById(id));
    }

}
