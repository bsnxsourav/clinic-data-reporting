package com.bsn.reporting.model;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;

@Entity
@DiscriminatorValue("BP")
public class BloodPressureRecord extends Record {

	public BloodPressureRecord() {
		super();
	}
	
	
	public BloodPressureRecord(String value) {
		super(value);
	}


	@Override
	public String toString() {
		return "BloodPressureRecord: " + super.toString();
	}
}
