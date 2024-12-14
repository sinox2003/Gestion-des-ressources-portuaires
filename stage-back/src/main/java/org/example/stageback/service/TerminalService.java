package org.example.stageback.service;

import jakarta.persistence.EntityNotFoundException;
import jakarta.transaction.Transactional;
import org.example.stageback.model.Terminal;
import org.example.stageback.repository.TerminalRepository;
import org.example.stageback.repository.parametrage.EquipeRepository;
import org.example.stageback.repository.parametrage.MembrePersonnelRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class TerminalService {

    private final TerminalRepository terminalRepository;
    private final MembrePersonnelRepository membrePersonnelRepository;
    private final EquipeRepository equipeRepository;

    public TerminalService(TerminalRepository terminalRepository, MembrePersonnelRepository membrePersonnelRepository, EquipeRepository equipeRepository) {
        this.terminalRepository = terminalRepository;
        this.membrePersonnelRepository = membrePersonnelRepository;
        this.equipeRepository = equipeRepository;
    }

    public List<Terminal> getAllTerminals() {
        return terminalRepository.findAll();
    }

    public Terminal getTerminalById(Long id) {
        return terminalRepository.findById(id).orElse(null);
    }

    public Terminal saveOrUpdate(Terminal terminal) {
        return terminalRepository.save(terminal);
    }

    public Terminal getTerminalByNom(String nom) {
        return terminalRepository.findByNom(nom).orElse(null);
    }

    @Transactional
    public void deleteTerminalById(Long id) {

        membrePersonnelRepository.deleteAllByTerminalId(id);
        terminalRepository.deleteById(id);
    }

    @Transactional
    public void deleteTerminal(Long terminalId) {
        // Fetch the terminal entity with all its associations
        Terminal terminal = terminalRepository.findById(terminalId)
                .orElseThrow(() -> new EntityNotFoundException("Terminal not found"));

        // Ensure operationManutention is not null to avoid NullPointerException
        if (terminal.getOperationManutention() != null) {
            // Iterate through all Equipe entities and update their responsable field
            terminal.getOperationManutention().getEquipeList().forEach(equipe -> {
                if (equipe.getResponsable() != null) {
                    equipe.setResponsable(null); // Remove reference to the personnel
                    equipeRepository.save(equipe); // Save changes to persist them
                }
            });
        }

        // Delete all MembrePersonnel associated with the terminal
        membrePersonnelRepository.deleteAllByTerminalId(terminalId);

        // Finally, delete the terminal itself
        terminalRepository.deleteById(terminalId);
    }



}
