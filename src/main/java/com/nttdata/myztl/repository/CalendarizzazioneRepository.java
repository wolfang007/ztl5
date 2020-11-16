package com.nttdata.myztl.repository;

import com.nttdata.myztl.domain.Calendarizzazione;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data  repository for the Calendarizzazione entity.
 */
@SuppressWarnings("unused")
@Repository
public interface CalendarizzazioneRepository extends JpaRepository<Calendarizzazione, Long>, JpaSpecificationExecutor<Calendarizzazione> {}
