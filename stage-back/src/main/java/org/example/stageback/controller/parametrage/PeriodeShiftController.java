package org.example.stageback.controller.parametrage;

import org.example.stageback.model.parametrage.PeriodShift;
import org.example.stageback.service.parametrage.PeriodShiftService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/periodeShift")
public class PeriodeShiftController {

    private final PeriodShiftService periodShiftService;

    public PeriodeShiftController(PeriodShiftService periodShiftService) {
        this.periodShiftService = periodShiftService;
    }

    @GetMapping("/{id}")
    public ResponseEntity<PeriodShift> getPeriodShift(@PathVariable Long id) {
        PeriodShift periodShift = periodShiftService.getPeriodShift(id);
        return periodShift != null ? ResponseEntity.ok(periodShift) : ResponseEntity.notFound().build();
    }

    @PostMapping
    public ResponseEntity<PeriodShift> createPeriodShift(@RequestBody PeriodShift periodShift) {
        PeriodShift savedPeriodShift = periodShiftService.saveOrUpdatePeriodShift(periodShift);
        return ResponseEntity.ok(savedPeriodShift);
    }

    @PutMapping("")
    public ResponseEntity<PeriodShift> updatePeriodShift( @RequestBody PeriodShift periodShift) {
        return periodShift != null ? ResponseEntity.ok(periodShiftService.saveOrUpdatePeriodShift(periodShift)) : ResponseEntity.notFound().build();

    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePeriodShift(@PathVariable Long id) {
        periodShiftService.deletePeriodShift(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping
    public ResponseEntity<Iterable<PeriodShift>> getAllPeriodShifts() {
        Iterable<PeriodShift> periodShifts = periodShiftService.getAllPeriodShift();
        return ResponseEntity.ok(periodShifts);
    }
}
