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

import com.project.ams.model.User;

@CrossOrigin("*")
@RestController
public class UserController {

	public static List<User> users=new ArrayList<>();
	
	static {
		User user1=new User("admin","admin","admin@gmail.com");
		User user2=new User("customer1","customer1","customer1@gmail.com");
		User user3=new User("customer2","customer2","customer2@gmail.com");
		users.add(user1);
		users.add(user2);
		users.add(user3);
	}
	
    @PostMapping ("/login")
    public String login(@RequestBody User user) {
    	Map<String,User> userMap=users.stream().collect(Collectors.toMap(User::getUsername, Function.identity()));
        if(userMap.containsKey(user.getUsername())) {
        	if(userMap.get(user.getUsername()).getPassword().equalsIgnoreCase(user.getPassword())) {
        		return "Success";
        	}else {
        		return "Invalid password";
        	}
        }else {
        	return "User does not exist";
        }
        
    }
    
    @PostMapping ("/registerUser")
    public String registerUser(@RequestBody User user) {
    	Map<String,User> userMap=users.stream().collect(Collectors.toMap(User::getUsername, Function.identity()));

        if(user.getUsername()!=null && user.getPassword()!=null) {
        	if(userMap.containsKey(user.getUsername())) {
        		return "User ("+user.getUsername()+") already exist.";
        	}
        	users.add(user);
        	return "New user registered successfully";
        }else {
        	return "username and password is mandatory.";
        }
        
    }
    
    @GetMapping ("/getUsers")
    public List<User> registerUser(@RequestParam String username) {
    	List<User> allUsers= new ArrayList<User>();
        	if(username.equalsIgnoreCase("admin")) {
        		for(User user: users) {
        			if(!user.getUsername().equalsIgnoreCase(username)) {
        				allUsers.add(user);
        			}
        		}
        		return allUsers;
        	}
        	return null;
    }
}