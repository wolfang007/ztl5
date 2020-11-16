package com.nttdata.myztl.repository;

import com.nttdata.myztl.domain.TestX;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data  repository for the TestX entity.
 */
@SuppressWarnings("unused")
@Repository
public interface TestXRepository extends JpaRepository<TestX, Long> {}
