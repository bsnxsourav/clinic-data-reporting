package com.bsn.reporting.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.bsn.reporting.Util.PatientResponseObject;
import com.bsn.reporting.Util.RecordRequestObject;
import com.bsn.reporting.model.BPRecord;
import com.bsn.reporting.model.Patient;
import com.bsn.reporting.model.Record;
import com.bsn.reporting.model.Weight;
import com.bsn.reporting.service.PatientService;

@RestController
@CrossOrigin
public class PatientController {
	
	@Autowired
	private PatientService patientService;
	
	@RequestMapping("/patients")
	public Iterable<Patient> patients() {
		return patientService.readAllPatients();
	}
	
	@RequestMapping(method = RequestMethod.POST, value = "/patients")
	public void addPatient(@RequestBody Patient patient) {
		patientService.addPatient(patient);
	}
	
	@RequestMapping("/patient/{id}")
	public PatientResponseObject patient(@PathVariable Integer id) {
		return patientService.readPatient(id);
	}
	
	@RequestMapping(method = RequestMethod.POST, value = "/records")
	public void addRecord(@RequestBody RecordRequestObject rro, @RequestParam Integer patientId) {
		if (rro.getType().equals("WEIGHT")) {
			patientService.addWeightRecord(patientId, rro.getValue());
		} else {
			patientService.addBPRecord(patientId, rro.getValue());
		}
	}
	//records?patientId=pid
}
