package org.example.stageback.controller.parametrage;


import org.example.stageback.model.parametrage.Navire;
import org.example.stageback.service.parametrage.NavireService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/navires")
public class NavireController {

    private final NavireService service;

    NavireController(NavireService service) {
        this.service = service;
    }

    @GetMapping
    public List<Navire> findAll() {
        return service.findAll();
    }

}
