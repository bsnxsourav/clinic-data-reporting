package com.bsn.reporting.model;

import jakarta.persistence.DiscriminatorValue;
import jakarta.persistence.Entity;

@Entity
@DiscriminatorValue("WEIGHT")
public class Weight extends Record {

	public Weight() {
	}

	public Weight(String value) {
		super(value);
	}

	@Override
	public String toString() {
		return "Weight - " + super.toString();
	}
}
