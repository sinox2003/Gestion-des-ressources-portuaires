package org.example.stageback.service.parametrage.manutention;

import org.example.stageback.repository.parametrage.manutention.MainTheoriqueManutentionRepository;
import org.springframework.stereotype.Service;

@Service
public class MainTheoriqueManutentionService {

    private final MainTheoriqueManutentionRepository mainTheoriqueManutentionRepository;

    public MainTheoriqueManutentionService(MainTheoriqueManutentionRepository mainTheoriqueManutentionRepository) {
        this.mainTheoriqueManutentionRepository = mainTheoriqueManutentionRepository;
    }

    public void deleteById(Long id){
        mainTheoriqueManutentionRepository.deleteById(id);
    }

}
