package com.bsn.reporting.Util;

import com.bsn.reporting.model.BPRecord;
import com.bsn.reporting.model.Patient;
import com.bsn.reporting.model.Weight;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class PatientResponseObject {
	private Patient patient;
	private Iterable<Weight> weightRecords;
	private Iterable<BPRecord> bpRecords;
}
