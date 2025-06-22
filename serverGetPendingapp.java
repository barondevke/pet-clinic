//for the endpoint status in the appointment
@Column(name = "status", nullable = false)
private String status;

public String getStatus() {
    return status;
}

public void setStatus(String status) {
    this.status = status;
}

//repository interface 

