package com.nttdata.myztl.repository;

import com.nttdata.myztl.domain.Motivazione;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data  repository for the Motivazione entity.
 */
@SuppressWarnings("unused")
@Repository
public interface MotivazioneRepository extends JpaRepository<Motivazione, Long>, JpaSpecificationExecutor<Motivazione> {}
