package com.example.pet_clinic.controller;

public class AuthRequest {
    public String username;
    public String password;
    public String name; 
    // public String name; // only needed for signup

    //constructor
    public AuthRequest() {}

    public AuthRequest(String username, String password, String name){
        this.username = username;
        this.password = password;
        this.name = name;
    }

    // Getters and Setters
    public void setUsername(String username){
        this.username = username;
    }

    public String getUsername(){
        return username;
    }

    public void setPassword(String password){
        this.password = password;
    }

    public String getPassword(){
        return password;
    }

    public void setName(String name){
        this.name = name;
    }

    public String getName(){
        return name;
    }
}
