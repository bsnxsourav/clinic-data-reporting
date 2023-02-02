package com.bsn.reporting.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bsn.reporting.Util.PatientResponseObject;
import com.bsn.reporting.model.BPRecord;
import com.bsn.reporting.model.Patient;
import com.bsn.reporting.model.Weight;
import com.bsn.reporting.repository.BPRecordRepository;
import com.bsn.reporting.repository.PatientRepository;
import com.bsn.reporting.repository.WeightRecordRepository;

@Service
public class PatientService {

	@Autowired
	private PatientRepository patientRepository;
	
	@Autowired
	private WeightRecordRepository weightRecordRepository;
	
	@Autowired
	private BPRecordRepository bpRecordRepository;
	
	public void addPatient(Patient patient) {
		patientRepository.save(patient);
	}
	
	public void deletePatient(Integer id) {
		patientRepository.deleteById(id);
	}
	
	public boolean updatePatient(Patient patient) {
		Optional<Patient> p = patientRepository.findById(patient.getId());
		if (!p.isEmpty()) {
			patientRepository.save(patient);
			return true;
		}	
		return false;
	}
	
//	public Patient getPatientById(Integer id) {
//		Optional<Patient> p = patientRepository.findById(id);
//		if (!p.isEmpty()) {
//			return p.get();
//		}
//		return null;
//	}
	
	public Iterable<Patient> readAllPatients() {
		return patientRepository.findAll();
	}
	
	public PatientResponseObject readPatient(Integer id) {
		Optional<Patient> p = patientRepository.findById(id);
		if (!p.isEmpty()) {
			Iterable<Weight> wrs = this.readWeightRecords(p.get().getId());
			Iterable<BPRecord> bprs = this.readBPRecords(id);
			
			PatientResponseObject pro = PatientResponseObject.builder()
											.patient(p.get())
											.bpRecords(bprs)
											.weightRecords(wrs)
											.build();
			
			
			
			return pro;
		}
		return null;
	}
	
	public void addWeightRecord(Integer id, String value) {
		Patient cp = patientRepository.getReferenceById(id);
		Weight wr = new Weight(value);
		wr.setPatient(cp);
		weightRecordRepository.save(wr);
	}
	
	public void addBPRecord(Integer id, String value) {
		Patient cp = patientRepository.getReferenceById(id);
		BPRecord br = new BPRecord(value);
		br.setPatient(cp);
		bpRecordRepository.save(br);
	}
	
	public Iterable<Weight> readWeightRecords(Integer id) {
		return weightRecordRepository.findByPatientId(id);
	}
	
	public Iterable<BPRecord> readBPRecords(Integer id) {
		return bpRecordRepository.findByPatientId(id);
	}
}
