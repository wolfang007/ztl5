package com.nttdata.myztl.repository;

import com.nttdata.myztl.domain.TipologiaPermesso;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data  repository for the TipologiaPermesso entity.
 */
@SuppressWarnings("unused")
@Repository
public interface TipologiaPermessoRepository extends JpaRepository<TipologiaPermesso, Long>, JpaSpecificationExecutor<TipologiaPermesso> {}
