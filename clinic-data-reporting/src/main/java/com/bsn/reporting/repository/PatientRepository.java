package com.bsn.reporting.repository;

import org.springframework.data.repository.CrudRepository;

import com.bsn.reporting.model.Patient;

public interface PatientRepository extends CrudRepository<Patient, Integer> {

}
