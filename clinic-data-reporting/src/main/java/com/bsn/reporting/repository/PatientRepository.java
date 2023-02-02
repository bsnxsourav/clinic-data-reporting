package com.bsn.reporting.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.bsn.reporting.model.Patient;

@Repository
public interface PatientRepository extends CrudRepository<Patient, Integer> {
	Patient getReferenceById(Integer id);
}
