package org.example.stageback.service.parametrage;


import org.example.stageback.model.parametrage.PlanRoulement;
import org.example.stageback.repository.parametrage.PlanRoulementRepository;
import org.springframework.stereotype.Service;

@Service
public class PlanRoulementService {

    private  final PlanRoulementRepository planRoulementRepository;

    public PlanRoulementService(PlanRoulementRepository planRoulementRepository) {
        this.planRoulementRepository = planRoulementRepository;
    }

    public PlanRoulement updatePlanRoulement(PlanRoulement planRoulement){
        return planRoulementRepository.save(planRoulement);
    }

}
