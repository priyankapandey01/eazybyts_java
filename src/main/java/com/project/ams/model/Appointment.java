package com.project.ams.model;




public class Appointment {
  
    private int id;
    private String username;
    private String location;
    private String date;
    private String time;
    private String purpose;

    

    public Appointment(int id,String username, String location, String date, String time, String purpose) {
		super();
		this.id=id;
		this.username = username;
		this.location = location;
		this.date = date;
		this.time=time;
		this.purpose=purpose;
	}



	public int getId() {
		return id;
	}



	public void setId(int id) {
		this.id = id;
	}



	public String getUsername() {
		return username;
	}



	public void setUsername(String username) {
		this.username = username;
	}



	public String getLocation() {
		return location;
	}



	public void setLocation(String location) {
		this.location = location;
	}



	public String getDate() {
		return date;
	}



	public void setDate(String date) {
		this.date = date;
	}



	public String getTime() {
		return time;
	}



	public void setTime(String time) {
		this.time = time;
	}



	public String getPurpose() {
		return purpose;
	}



	public void setPurpose(String purpose) {
		this.purpose = purpose;
	}

	
}
