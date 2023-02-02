package com.bsn.reporting;

import org.junit.jupiter.api.Test;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.bsn.reporting.model.BPRecord;
import com.bsn.reporting.model.Patient;
import com.bsn.reporting.model.Weight;
import com.bsn.reporting.service.PatientService;
import com.github.javafaker.Faker;

@SpringBootTest
class ClinicalDataReportingSystemApplicationTests {
	Logger logger = LoggerFactory.getLogger(ClinicalDataReportingSystemApplicationTests.class);
	
	@Autowired
	private PatientService patientService;

	@Test
	void contextLoads() {
	}
	
	@Test
	public void testInsertPatient() {
		logger.info("Start testInsertPatient()");
		Faker faker = new Faker();
		for (int i = 0; i < 5; i++) {
			Patient p = Patient.builder()
						.firstName(faker.name().firstName())
						.lastName(faker.name().lastName())
						.age(faker.number().numberBetween(15, 70))
						.emailId(faker.internet().emailAddress())
						.build();
			patientService.addPatient(p);
		}
		logger.info("End testInsertPatient()");
	}
	
	@Test
	void testReadReadPatient() {
		logger.info("Start testReadReadPatient()");
		Iterable<Patient> patients = patientService.readAllPatients();
		patients.forEach(p -> logger.info(p.toString()));
		logger.info("End testReadReadPatient()");
	}
	
//	@Test
//	void testUpdatePatient() {
//		logger.info("Start testUpdatePatient()");
//		Integer id = 93;
//		Patient p = patientService.readPatient(id);
//		if (p == null) fail("Patient not found.");
//		else {
//			String updatedEmail = p.getFirstName() + "." + p.getLastName() + "@mycompany.com";
//			p.setEmailId(updatedEmail);
//			if (!patientService.updatePatient(p)) fail("failed to update.");
//		}		
//		logger.info("End testUpdatePatient()");
//	} //commented cause added pro object
	
	@Test
	void testWeightRecordInsert() {
		logger.info("Start testWeightRecordInsert()");
		Integer id = 1;
		Faker faker = new Faker();
		patientService.addWeightRecord(id, Integer.toString(faker.number().numberBetween(45, 80)));	
		logger.info("End testWeightRecordInsert()");
	}
	
	@Test
	void testBPRecordInsert() {
		logger.info("Start testBPRecordInsert()");
		Integer id = 3;
		Faker faker = new Faker();
		patientService.addBPRecord(id, Integer.toString(faker.number().numberBetween(740, 800)));	
		logger.info("End testBPRecordInsert()");
	}
	
	@Test
	void testReadWeightRecords() {
		logger.info("Start testReadWeightRecords()");
		Integer id = 1;
		Iterable<Weight> records = patientService.readWeightRecords(id);
		records.forEach(r -> logger.info(r.toString()));
		logger.info("End testReadWeightRecords()");
	}
	
	@Test
	void testReadBPRecords() {
		logger.info("Start testReadBPRecords()");
		Integer id = 3;
		Iterable<BPRecord> records = patientService.readBPRecords(id);
		records.forEach(r -> logger.info(r.toString()));
		logger.info("End testReadBPRecords()");
	}
	
	@Test
	public void sampleWeightData() {
		logger.info("Start sampleWeightData()");
		Integer id = 1;
		patientService.addWeightRecord(id, "65");
		patientService.addWeightRecord(id, "65");
		patientService.addWeightRecord(id, "64");
		patientService.addWeightRecord(id, "70");
		patientService.addWeightRecord(id, "75");
		patientService.addWeightRecord(id, "75");
		patientService.addWeightRecord(id, "80");
		patientService.addWeightRecord(id, "75");
		patientService.addWeightRecord(id, "70");
		logger.info("End sampleWeightData()");
	}
	
	@Test
	public void sampleBPData() {
		logger.info("Start sampleBPData()");
		Integer id = 1;
		patientService.addBPRecord(id, "750");
		patientService.addBPRecord(id, "750");
		patientService.addBPRecord(id, "740");
		patientService.addBPRecord(id, "755");
		patientService.addBPRecord(id, "760");
		patientService.addBPRecord(id, "760");
		patientService.addBPRecord(id, "770");
		patientService.addBPRecord(id, "750");
		patientService.addBPRecord(id, "760");
		logger.info("End sampleBPData()");
	}
	
}
