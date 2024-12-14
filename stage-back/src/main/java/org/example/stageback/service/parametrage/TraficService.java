package org.example.stageback.service.parametrage;

import org.apache.catalina.LifecycleState;
import org.example.stageback.model.parametrage.Trafic;
import org.example.stageback.repository.parametrage.TraficRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TraficService {
    private final TraficRepository traficRepository;

    public TraficService(TraficRepository traficRepository) {
        this.traficRepository = traficRepository;
    }

    public List<Trafic> getTraficList() {
        return traficRepository.findAll();
    }

    public Trafic getTraficById(Long id) {
        return traficRepository.findById(id).orElse(null);
    }
}
