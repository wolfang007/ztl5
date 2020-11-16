package com.nttdata.myztl.repository;

import com.nttdata.myztl.domain.Autorizzazione;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data  repository for the Autorizzazione entity.
 */
@SuppressWarnings("unused")
@Repository
public interface AutorizzazioneRepository extends JpaRepository<Autorizzazione, Long>, JpaSpecificationExecutor<Autorizzazione> {}
