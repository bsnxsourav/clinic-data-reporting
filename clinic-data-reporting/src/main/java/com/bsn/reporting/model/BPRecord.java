package com.bsn.reporting.model;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;

@Entity
@DiscriminatorValue("BP")
public class BPRecord extends Record {

	public BPRecord() {}

	public BPRecord(String value) {
		super(value);
	}

	@Override
	public String toString() {
		return "BPRecord - " + super.toString();
	}
}
