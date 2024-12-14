package org.example.stageback.controller.parametrage;

import org.example.stageback.model.parametrage.Trafic;
import org.example.stageback.service.parametrage.TraficService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/trafic")
public class TraficController{


    private final TraficService traficService;

    TraficController(TraficService traficService){
        this.traficService = traficService;
    }

    @GetMapping
    public List<Trafic> getAllTrafics(){
        return traficService.getTraficList();
    }

    @GetMapping("/{id}")
    public Trafic getTraficById(@PathVariable Long id){
        return traficService.getTraficById(id);
    }

}
