package org.example.stageback.controller.parametrage;

import org.example.stageback.model.parametrage.PlanRoulement;
import org.example.stageback.service.parametrage.PlanRoulementService;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/planRoulement")
public class PlanRoulementController {

    private final PlanRoulementService planRoulementService;

    public PlanRoulementController(PlanRoulementService planRoulementService) {
        this.planRoulementService = planRoulementService;
    }

    @PutMapping
    public void updatePlanRoulement(@RequestBody PlanRoulement planRoulement) {
        planRoulementService.updatePlanRoulement(planRoulement);
    }

}
