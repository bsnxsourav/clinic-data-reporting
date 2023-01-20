package com.bsn.reporting;

import static org.junit.jupiter.api.Assertions.fail;

import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import com.bsn.reporting.model.BloodPressureRecord;
import com.bsn.reporting.model.Patient;
import com.bsn.reporting.model.WeightRecord;
import com.bsn.reporting.repository.PatientRepository;
import com.github.javafaker.Faker;

import jakarta.persistence.Transient;

@SpringBootTest
class ClinicalDataReportingSystemApplicationTests {
	Logger logger = LoggerFactory.getLogger(ClinicalDataReportingSystemApplicationTests.class);
	
	@Autowired
	private PatientRepository patientRepository;

	@Test
	void contextLoads() {
	}
	
	@Test
	public void testInsertPatient() {
		logger.info("Start testInsertPatient()");
		Faker faker = new Faker();
		for (int i = 0; i < 5; i++) {
			Patient p = new Patient(faker.name().firstName(), faker.name().lastName(), faker.number().numberBetween(15, 70));
			p.addRecord(new WeightRecord("78"));
			p.addRecord(new WeightRecord("79"));
			p.addRecord(new WeightRecord("80"));
			p.addRecord(new WeightRecord("78"));
			p.addRecord(new WeightRecord("76"));
			
			p.addRecord(new BloodPressureRecord("78"));
			p.addRecord(new BloodPressureRecord("79"));
			p.addRecord(new BloodPressureRecord("80"));
			p.addRecord(new BloodPressureRecord("78"));
			p.addRecord(new BloodPressureRecord("76"));
			
			patientRepository.save(p);
		}
		logger.info("End testInsertPatient()");
	}
	
	@Test
	void testInsertRecord() {
		logger.info("Start testInsertRecord()");
		Integer patientId = 4;
		Optional<Patient> patient = patientRepository.findById(patientId);
		if (patient.isEmpty()) fail("patient not found");
		else {
			patient.get().addRecord(new WeightRecord("75"));
			patient.get().addRecord(new BloodPressureRecord("70"));
			patientRepository.save(patient.get());
		}
		logger.info("End testInsertRecord()");
	}
	

}
