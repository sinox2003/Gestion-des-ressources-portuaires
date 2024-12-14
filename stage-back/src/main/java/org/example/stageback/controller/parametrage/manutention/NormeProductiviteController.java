package org.example.stageback.controller.parametrage.manutention;

import org.example.stageback.model.parametrage.manutention.NormeProductivite;
import org.example.stageback.service.parametrage.manutention.NormeProductiviteService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/parametrage/manutention/norme_productivite")
public class NormeProductiviteController {

    private final NormeProductiviteService service;

    public NormeProductiviteController(NormeProductiviteService service) {
        this.service = service;
    }

    @PutMapping
    public NormeProductivite updateNormeProductivite(@RequestBody NormeProductivite normeProductivite) {
        return service.update(normeProductivite);
    }

    @DeleteMapping("/{id}")
    public void deleteNormeProductivite(@PathVariable Long id) {
        service.deleteById(id);
    }
}
