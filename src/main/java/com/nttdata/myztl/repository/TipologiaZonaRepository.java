package com.nttdata.myztl.repository;

import com.nttdata.myztl.domain.TipologiaZona;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data  repository for the TipologiaZona entity.
 */
@SuppressWarnings("unused")
@Repository
public interface TipologiaZonaRepository extends JpaRepository<TipologiaZona, Long>, JpaSpecificationExecutor<TipologiaZona> {}
