package org.example.stageback.service.parametrage;


import org.example.stageback.model.parametrage.PeriodShift;
import org.example.stageback.repository.parametrage.PeriodShiftRepository;
import org.springframework.stereotype.Service;

@Service
public class PeriodShiftService {

    private final PeriodShiftRepository periodShiftRepository;

    public PeriodShiftService(PeriodShiftRepository periodShiftRepository) {
        this.periodShiftRepository = periodShiftRepository;
    }

    public PeriodShift getPeriodShift(Long id) {
        return periodShiftRepository.findById(id).orElse(null);
    }

    public PeriodShift saveOrUpdatePeriodShift(PeriodShift periodShift){
        return periodShiftRepository.save(periodShift);
    }

    public void deletePeriodShift(Long id){
        periodShiftRepository.deleteById(id);
    }

    public Iterable<PeriodShift> getAllPeriodShift(){
        return periodShiftRepository.findAll();
    }

}
