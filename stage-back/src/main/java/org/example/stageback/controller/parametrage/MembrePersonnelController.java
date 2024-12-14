package org.example.stageback.controller.parametrage;

import com.fasterxml.jackson.annotation.JsonView;
import org.example.stageback.Views.Views;
import org.example.stageback.model.parametrage.Fonction;
import org.example.stageback.model.parametrage.MembrePersonnel;
import org.example.stageback.service.parametrage.MembrePersonnelService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/personnel")
public class MembrePersonnelController {

    private final MembrePersonnelService membrePersonnelService;

    public MembrePersonnelController(MembrePersonnelService membrePersonnelService) {
        this.membrePersonnelService = membrePersonnelService;
    }

    @GetMapping("/{matricule}")
    public ResponseEntity<MembrePersonnel> getMembrePersonnel(@PathVariable String matricule) {
        MembrePersonnel membrePersonnel = membrePersonnelService.getMembrePersonnel(matricule);
        return membrePersonnel != null ? ResponseEntity.ok(membrePersonnel) : ResponseEntity.notFound().build();
    }

    @GetMapping("/search")
    public ResponseEntity<List<MembrePersonnel>> getMembrePersonnelByMatricule(@RequestParam String matricule,@RequestParam Long terminalId) {
        System.out.println(matricule+"///////////////   "+terminalId);
        List<MembrePersonnel> list=new ArrayList<MembrePersonnel>();
        if(matricule == null || matricule.isEmpty()){
            list = membrePersonnelService.getFourMembrePersonnelByTerminalId(terminalId);
        }else {
            list = membrePersonnelService.getFourMembrePersonnelByMatricule(matricule,terminalId);
        }
        if (list.isEmpty()) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(list);
    }


    @PostMapping
    public ResponseEntity<MembrePersonnel> createMembrePersonnel(@RequestBody MembrePersonnel membrePersonnel) {
        MembrePersonnel savedMembrePersonnel = membrePersonnelService.saveOrUpdate(membrePersonnel);
        return ResponseEntity.ok(savedMembrePersonnel);
    }

    @PutMapping("")
    public ResponseEntity<MembrePersonnel> updateMembrePersonnel( @RequestBody MembrePersonnel membrePersonnel) {

        return membrePersonnel != null ? ResponseEntity.ok(membrePersonnelService.saveOrUpdate(membrePersonnel)) : ResponseEntity.notFound().build();

    }

    @DeleteMapping("/{matricule}")
    public ResponseEntity<Void> deleteMembrePersonnel(@PathVariable String matricule) {
        membrePersonnelService.deleteMembrePersonnel(matricule);
        return ResponseEntity.noContent().build();
    }

    @GetMapping
    public ResponseEntity<List<MembrePersonnel>> getAllPersonnel() {
        List<MembrePersonnel> personnelList = membrePersonnelService.getPersonnel();
        return ResponseEntity.ok(personnelList);
    }

    @GetMapping("/fonction")
    public ResponseEntity<List<MembrePersonnel>> getPersonnelByFonction(@RequestParam Fonction fonction) {
        List<MembrePersonnel> personnelList = membrePersonnelService.getPersonnelByFonction(fonction);
        return ResponseEntity.ok(personnelList);
    }

    @GetMapping("/terminal/{id}")
    public ResponseEntity<List<MembrePersonnel>> getAllByTerminalId(@PathVariable Long id) {
        List<MembrePersonnel> personnelList = membrePersonnelService.getAllByTerminalId(id);
        return ResponseEntity.ok(personnelList);
    }

    @GetMapping("/terminal/without_equipe/{id}")
    public ResponseEntity<List<MembrePersonnel>> getPersonnelByTerminalIdWithoutEquipe(@PathVariable Long id) {
        List<MembrePersonnel> personnelList = membrePersonnelService.getPersonnelByTerminalIdWithoutEquipe(id);
        return ResponseEntity.ok(personnelList);
    }



}
