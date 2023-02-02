package com.bsn.reporting.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.bsn.reporting.model.Weight;

@Repository
public interface WeightRecordRepository extends CrudRepository<Weight, Integer> {
	Iterable<Weight> findByPatientId(Integer id);
}	
