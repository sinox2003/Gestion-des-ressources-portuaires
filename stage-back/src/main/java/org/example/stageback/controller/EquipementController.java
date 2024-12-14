package org.example.stageback.controller;


import org.example.stageback.model.Equipement;
import org.example.stageback.service.EquipementService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/equipements")
public class EquipementController {

    private final EquipementService equipementService;

    public EquipementController(EquipementService equipementService) {
        this.equipementService = equipementService;
    }

    @GetMapping
    public List<Equipement> getEquipments(){
        return equipementService.getEquipments();
    }

    @GetMapping("/{id}")
    public Equipement getEquipementById(@PathVariable Long id){
        return equipementService.getEquipementById(id);
    }





}
