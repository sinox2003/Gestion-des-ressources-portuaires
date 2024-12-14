package org.example.stageback.controller;

import org.example.stageback.model.TypeEquipement;
import org.example.stageback.model.parametrage.Trafic;
import org.example.stageback.service.TypeEquipementService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/type_equipements")
public class TypeEquipementController {

    private final TypeEquipementService service;

    public TypeEquipementController(TypeEquipementService service) {
        this.service = service;
    }

    @PostMapping("/trafic")
    public List<TypeEquipement> getTypeEquipementByTrafic(@RequestBody Trafic trafic) {
        return service.findAllByTraficList(trafic);
    }

    @GetMapping
    public List<TypeEquipement> getAllTypeEquipements() {
        return service.findAll();
    }

}
