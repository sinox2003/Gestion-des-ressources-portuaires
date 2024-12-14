package org.example.stageback.controller.parametrage;

import org.example.stageback.service.parametrage.ParametrageRessourceHumaineService;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestMapping;

@Service
@RequestMapping("/parametrage/ressources_humaines")
public class ParametrageRessourceHumaineController {

    private final ParametrageRessourceHumaineService service;

    ParametrageRessourceHumaineController (ParametrageRessourceHumaineService service){
        this.service=service;
    }



}
