package org.example.stageback.controller;

import org.example.stageback.model.Accessoire;
import org.example.stageback.service.AccessoireService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/accessoires")
public class AccessoireController {

    private final AccessoireService accessoireService;

    public AccessoireController(AccessoireService accessoireService) {
        this.accessoireService = accessoireService;
    }


    @GetMapping
    List<Accessoire> getAllAccessoire() {
        return accessoireService.getAllAccessoire();
    }

    @GetMapping("/{id}")
    Accessoire getAccessoireById(@PathVariable Long id) {
        return accessoireService.getAccessoireById(id);
    }


}
