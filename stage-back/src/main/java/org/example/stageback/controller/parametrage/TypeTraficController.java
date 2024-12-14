package org.example.stageback.controller.parametrage;

import org.example.stageback.model.parametrage.TypeTrafic;
import org.example.stageback.service.parametrage.TypeTraficService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/type_trafic")
public class TypeTraficController {

    private final TypeTraficService service;

    public TypeTraficController(TypeTraficService service) {
        this.service = service;
    }

    @GetMapping
    public List<TypeTrafic> getTypes() {
        return service.findAll();
    }

}
