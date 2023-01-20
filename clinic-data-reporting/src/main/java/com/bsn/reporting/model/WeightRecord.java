package com.bsn.reporting.model;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;

@Entity
@DiscriminatorValue("WEIGHT")
public class WeightRecord extends Record {

	public WeightRecord() {
		super();
	}
	
	
	public WeightRecord(String value) {
		super(value);
	}




	@Override
	public String toString() {
		return "WeightRecord: " + super.toString();
	}
}
