package org.example.stageback.service.parametrage;

import org.example.stageback.model.parametrage.Fonction;
import org.example.stageback.model.parametrage.MembrePersonnel;
import org.example.stageback.repository.parametrage.MembrePersonnelRepository;
import org.springframework.stereotype.Service;

import java.util.Comparator;
import java.util.List;

@Service
public class MembrePersonnelService {

    private final MembrePersonnelRepository membrePersonnelRepository;

    public MembrePersonnelService(MembrePersonnelRepository membrePersonnelRepository) {
        this.membrePersonnelRepository = membrePersonnelRepository;
    }
    public List<MembrePersonnel> getFourMembrePersonnelByMatricule(String matricule,Long terminalId) {
        return membrePersonnelRepository.findByMatriculeContaining(matricule,terminalId);
    }

    public List<MembrePersonnel> getFourMembrePersonnelByTerminalId(Long terminalId){
        return membrePersonnelRepository.getFourMembers(terminalId);    }

    public MembrePersonnel getMembrePersonnel(String matricule) {
        return membrePersonnelRepository.findByMatricule(matricule).orElse(null);
    }

    public void deleteMembrePersonnel(String matricule) {
        membrePersonnelRepository.deleteByMatricule(matricule);
    }

    public MembrePersonnel saveOrUpdate(MembrePersonnel membrePersonnel) {
        return membrePersonnelRepository.save(membrePersonnel);
    }

    public List<MembrePersonnel> getPersonnel(){

        return membrePersonnelRepository.findAll().stream().sorted(Comparator.comparing(membrePersonnel -> membrePersonnel.getFonction().getId())).toList();
    }

    public List<MembrePersonnel> getPersonnelByFonction(Fonction fonction){
        return membrePersonnelRepository.findAllByFonction(fonction).orElseThrow();
    }

    public List<MembrePersonnel> getPersonnelByTerminalIdWithoutEquipe(Long terminalId){
        return membrePersonnelRepository.findPersonnelByTerminalIdWithoutEquipe(terminalId).stream().sorted(Comparator.comparing(membrePersonnel -> membrePersonnel.getFonction().getId())).toList();
    }

    public List<MembrePersonnel> getAllByTerminalId(Long terminalId){
        return membrePersonnelRepository.findAllByTerminalId(terminalId).stream().sorted(Comparator.comparing(membrePersonnel -> membrePersonnel.getFonction().getId())).toList();
    }

}
