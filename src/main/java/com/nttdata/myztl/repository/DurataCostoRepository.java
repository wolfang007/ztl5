package com.nttdata.myztl.repository;

import com.nttdata.myztl.domain.DurataCosto;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data  repository for the DurataCosto entity.
 */
@SuppressWarnings("unused")
@Repository
public interface DurataCostoRepository extends JpaRepository<DurataCosto, Long>, JpaSpecificationExecutor<DurataCosto> {}
