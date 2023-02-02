package com.bsn.reporting.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.bsn.reporting.model.BPRecord;
import com.bsn.reporting.model.Weight;

@Repository
public interface BPRecordRepository extends CrudRepository<BPRecord, Integer> {
	Iterable<BPRecord> findByPatientId(Integer id);
}
