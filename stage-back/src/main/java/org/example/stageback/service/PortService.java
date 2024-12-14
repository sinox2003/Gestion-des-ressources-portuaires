package org.example.stageback.service;

import org.example.stageback.model.Port;
import org.example.stageback.repository.PortRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PortService {

    private final PortRepository portRepository;

    public PortService(PortRepository portRepository) {
        this.portRepository = portRepository;
    }

    public Port getPortByName(String nom) {
        return portRepository.findByNom(nom).orElse(null);
    }

    public Port getPortById(Long id) {
        return portRepository.findById(id).orElse(null);
    }

    public Port saveOrUpdate(Port port) {
        return portRepository.save(port);
    }

    public void deletePort(Long id) {
        portRepository.deleteById(id);
    }

    public List<Port> findAll(){
        return portRepository.findAll();
    }

}
