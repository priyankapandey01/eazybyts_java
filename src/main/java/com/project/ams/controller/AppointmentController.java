package com.project.ams.controller;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.function.Function;
import java.util.stream.Collectors;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.project.ams.model.Appointment;
import com.project.ams.model.User;

@CrossOrigin("*")
@RestController
public class AppointmentController {
	
public static List<Appointment> appointments=new ArrayList<>();
public static int count=3;
	
	static {
		Appointment appointment1=new Appointment(1,"customer1","Sector-34, Noida","2024-04-12","13:30","Doctor Meet");
		Appointment appointment2=new Appointment(2,"customer1","Sector-12, Delhi","2024-05-16","09:40","StartUp Meet");
		Appointment appointment3=new Appointment(3,"customer2","Sector-71 Jaipur","2024-04-04","16:00","Dinner Meet");
		appointments.add(appointment1);
		appointments.add(appointment2);
		appointments.add(appointment3);
	}

    @GetMapping ("/getAppointments")
    public List<Appointment> getAppointments(@RequestParam String username) {
        if(username.equalsIgnoreCase("admin")) {
        	return appointments;
        }
        return null;
    }
    
    @PostMapping ("/addAppointment")
    public String addAppointment(@RequestBody Appointment appointment) {
    	Map<String,User> userMap=UserController.users.stream().collect(Collectors.toMap(User::getUsername, Function.identity()));
        if(appointment!=null && userMap.containsKey(appointment.getUsername())) {
        	appointment.setId(count++);
        	appointments.add(appointment);
        	return "Success";
        }else {
        	return "user has insufficient privileges";
        }
        
    }
    
    @PostMapping ("/deleteAppointment")
    public String deleteAppointment(@RequestParam int id) {
   
    	for(Appointment ap: appointments) {
    		if(ap.getId()==id) {
    			appointments.remove(ap);
    			return "Success";
    		}
    	}
        return null;
    }
    
    
    @GetMapping ("/getMyAppointments")
    public List<Appointment> getMyAppointments(@RequestParam String username) {
    	Map<String,User> userMap=UserController.users.stream().collect(Collectors.toMap(User::getUsername, Function.identity()));
        if(userMap.containsKey(username)) {
        	List<Appointment> myAppointments=new ArrayList<Appointment>();
        	for(Appointment ap: appointments) {
        		if(ap.getUsername().equalsIgnoreCase(username)) {
        			myAppointments.add(ap);
        		}
        	}
        	return myAppointments;
        }
        return null;
    }
}