package com.nttdata.myztl.repository;

import com.nttdata.myztl.domain.Festivita;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data  repository for the Festivita entity.
 */
@SuppressWarnings("unused")
@Repository
public interface FestivitaRepository extends JpaRepository<Festivita, Long>, JpaSpecificationExecutor<Festivita> {}
